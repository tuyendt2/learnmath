// Build the static PWA into dist/.
// content/lopN/<part>/ holds one course (10 topic folders + 11-de-thi-thu/),
// parsed by lib/course.mjs. Each course is written to its own data file
// (dist/data/<id>.<hash>.js, loaded when the course is opened); dist/data/index.js
// lists the courses. Formulas stay as TeX and are typeset on the device by KaTeX.
// Usage: node build.mjs [--strict]   (--strict: fail on any content issue)
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";
import { parseCourse } from "./lib/course.mjs";

const root = path.dirname(fileURLToPath(import.meta.url));
const contentDir = path.join(root, "content");
const dist = path.join(root, "dist");
const read = (p) => fs.readFileSync(p, "utf8");
const strict = process.argv.includes("--strict");

const PARTS = {
  "co-ban": { label: "Cơ bản", sub: "Bám sách giáo khoa, từ cơ bản đến vận dụng cao" },
  "nang-cao": { label: "Nâng cao", sub: "Bồi dưỡng học sinh giỏi" },
};
const SUBS = {
  "lop4/nang-cao": "Toán nâng cao, toán tư duy",
  "lop5/nang-cao": "Nâng cao, thi vào lớp 6 chất lượng cao",
  "lop8-9/nang-cao": "Học sinh giỏi, thi vào lớp 10 chuyên",
  "lop12/co-ban": "Bám sách giáo khoa, ôn thi tốt nghiệp THPT",
};
const ICONS_89 = ["🧮", "🔢", "🧩", "√", "📈", "🔗", "⚖️", "🎯", "📐", "🎲"];
// Topic icon from keywords in its title (first match wins).
const ICON_RULES = [
  [/xác suất|thống kê|dữ liệu|số liệu|phân tán|đặc trưng/i, "📊"],
  [/tổ hợp|logic|dirichlet|đếm/i, "🧩"],
  [/chuyển động|vận tốc/i, "🚗"],
  [/đơn vị đo|thời gian/i, "📏"],
  [/hình khối|không gian|oxyz|mặt phẳng|mặt cầu/i, "🧊"],
  [/lượng giác/i, "🌀"],
  [/hình|góc|tam giác|đối xứng|diện tích|tọa độ|vectơ/i, "📐"],
  [/phân số|tỉ số|phần trăm|tỉ lệ/i, "🍕"],
  [/thập phân/i, "🔟"],
  [/bất đẳng thức|cực trị/i, "⚖️"],
  [/hàm số|đồ thị|đạo hàm|khảo sát|đơn điệu/i, "📈"],
  [/giới hạn|dãy|cấp số/i, "♾️"],
  [/tích phân|nguyên hàm/i, "∫"],
  [/mũ|lôgarit|lũy thừa/i, "🚀"],
  [/phương trình|hệ|bất phương trình|tam thức/i, "🔗"],
  [/đa thức|biểu thức/i, "🧮"],
  [/mệnh đề|tập hợp/i, "🗂️"],
  [/chia hết|nguyên tố|ước|bội|số học|chính phương/i, "🔢"],
  [/tính nhanh|cộng|trừ|nhân|chia/i, "➕"],
  [/số/i, "🔢"],
];
const iconFor = (course, t) =>
  course === "lop8-9-nang-cao" ? ICONS_89[t.number - 1] : (ICON_RULES.find(([re]) => re.test(t.title)) || [, "📘"])[1];

// ---- courses ----
const courses = [];
const allIssues = [];
for (const g of fs.readdirSync(contentDir).filter((d) => /^lop\d/.test(d))) {
  for (const part of fs.readdirSync(path.join(contentDir, g)).filter((p) => PARTS[p])) {
    const dir = path.join(contentDir, g, part);
    const id = `${g}-${part}`;
    const issues = [];
    const data = parseCourse({ docDir: dir, appDir: dir, issues, routeBase: `${id}/` });
    // A topic that is not fully written yet (no problems or no cards) is left out.
    data.topics = data.topics.filter((t) => t.problems.length && t.cards.length);
    if (!data.topics.length) continue;
    for (const t of data.topics) t.icon = iconFor(id, t);
    if (data.exams && !data.exams.list.length) data.exams = null;
    courses.push({ id, g, grade: g.slice(3), part, data });
    allIssues.push(...issues.map((i) => `${id}: ${i}`));
  }
}
courses.sort((a, b) => parseInt(a.grade, 10) - parseInt(b.grade, 10) || a.part.localeCompare(b.part));

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(path.join(dist, "katex/fonts"), { recursive: true });
fs.mkdirSync(path.join(dist, "data"), { recursive: true });

const index = { built: new Date().toISOString().slice(0, 10), courses: [] };
for (const c of courses) {
  const json = JSON.stringify(c.data);
  const hash = crypto.createHash("sha1").update(json).digest("hex").slice(0, 10);
  const file = `data/${c.id}.${hash}.js`;
  fs.writeFileSync(path.join(dist, file), `(window.APP_COURSE ||= {})[${JSON.stringify(c.id)}] = ${json};\n`);
  const gname = c.grade.replace("-", "–");
  index.courses.push({
    id: c.id,
    grade: c.grade,
    gradeLabel: `Lớp ${gname}`,
    part: c.part,
    partLabel: PARTS[c.part].label,
    sub: SUBS[`${c.g}/${c.part}`] || PARTS[c.part].sub,
    title: `Toán ${gname} · ${PARTS[c.part].label}`,
    file,
    topics: c.data.topics.length,
    problems: c.data.topics.reduce((a, t) => a + t.problems.length, 0),
    cards: c.data.topics.reduce((a, t) => a + t.cards.length, 0),
    exams: c.data.exams ? c.data.exams.list.length : 0,
    kb: Math.round(json.length / 1024),
  });
}
fs.writeFileSync(path.join(dist, "data/index.js"), "window.APP_INDEX = " + JSON.stringify(index) + ";\n");

for (const f of fs.readdirSync(path.join(root, "src"))) {
  fs.cpSync(path.join(root, "src", f), path.join(dist, f), { recursive: true });
}
const katexDist = path.join(root, "node_modules/katex/dist");
for (const f of ["katex.min.css", "katex.min.js"]) fs.copyFileSync(path.join(katexDist, f), path.join(dist, "katex", f));
for (const f of fs.readdirSync(path.join(katexDist, "fonts")).filter((f) => f.endsWith(".woff2"))) {
  fs.copyFileSync(path.join(katexDist, "fonts", f), path.join(dist, "katex/fonts", f));
}
fs.writeFileSync(path.join(dist, ".nojekyll"), "");

// Service worker: precache the app shell; a course's data file is cached the
// first time the course is opened. Versioned by content hash.
const files = [];
(function walk(d) {
  for (const f of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, f.name);
    if (f.isDirectory()) walk(p);
    else if (f.name !== "sw.js" && !f.name.startsWith(".")) files.push(path.relative(dist, p).split(path.sep).join("/"));
  }
})(dist);
files.sort();
const shell = files.filter((f) => !/^data\/lop/.test(f));
const hash = crypto.createHash("sha1");
for (const f of files) hash.update(f).update(fs.readFileSync(path.join(dist, f)));
const version = hash.digest("hex").slice(0, 12);
const swPath = path.join(dist, "sw.js");
fs.writeFileSync(swPath, read(swPath).replace("__VERSION__", version).replace("__PRECACHE__", JSON.stringify(["./", ...shell.map((f) => "./" + f)])));

for (const c of index.courses) {
  console.log(`${c.title}: ${c.topics} chủ đề, ${c.problems} bài, ${c.cards} thẻ, ${c.exams} đề, ${c.kb} KB`);
}
console.log(`version ${version}, ${files.length} files`);
if (allIssues.length) {
  console.log(`\nLỗi nội dung (${allIssues.length}):`);
  for (const p of allIssues.slice(0, 40)) console.log("  " + p);
  if (allIssues.length > 40) console.log(`  … và ${allIssues.length - 40} lỗi khác`);
  if (strict) process.exit(1);
}

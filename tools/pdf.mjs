// Print one grade's material to PDF (A4, table of contents, page numbers).
// Usage: node tools/pdf.mjs ../math6            -> ../math6/math6.pdf
// Reads <gradeDir>/co-ban and <gradeDir>/nang-cao (or, for math8-9, the grade
// folder itself), renders Markdown + KaTeX to one HTML file with the SVG figures
// inlined, then prints it with headless Chrome.
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import MarkdownIt from "markdown-it";
import { tex } from "@mdit/plugin-tex";
import katex from "katex";
import { lessonFile, EXAM_DIR } from "../lib/course.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const gradeDir = path.resolve(process.argv[2] || "");
if (!fs.existsSync(gradeDir)) {
  console.error("Usage: node tools/pdf.mjs <gradeDir>");
  process.exit(2);
}
const name = path.basename(gradeDir); // math6
const grade = name.replace(/^math/, "").replace("-", "–");
const read = (p) => fs.readFileSync(p, "utf8");

const md = new MarkdownIt({ html: false, typographer: false }).use(tex, {
  render: (content, displayMode) => katex.renderToString(content, { displayMode, throwOnError: false, strict: "ignore" }),
});
let anchorSeq = 0;
// Render one Markdown file: figures inlined, links between files dropped
// (they point at other .md files), headings shifted down by `shift`.
function renderFile(file, shift) {
  const dir = path.dirname(file);
  let src = read(file).replace(/<!--[\s\S]*?-->/g, "");
  const figs = [];
  src = src.replace(/^!\[([^\]]*)\]\((hinh\/[^)\s]+\.svg)\)[ \t]*\n?(\*Hình:[^\n]*\*[ \t]*\n?)?/gm, (_, alt, rel) => {
    const p = path.join(dir, rel);
    if (!fs.existsSync(p)) return "";
    figs.push(`<figure class="fig">${read(p).replace(/<\?xml[^>]*>\s*/, "")}<figcaption>${md.renderInline(alt)}</figcaption></figure>`);
    return `\n\nFIGURE${figs.length - 1}X\n\n`;
  });
  src = src.replace(/\[([^\]]+)\]\((?!https?:)[^)\s]+\.md\)/g, "$1");
  let html = md.render(src);
  html = html.replace(/<p>FIGURE(\d+)X<\/p>/g, (_, i) => figs[+i]);
  html = html.replace(/<(\/?)h([1-6])>/g, (_, sl, n) => `<${sl}h${Math.min(6, +n + shift)}>`);
  return html;
}
const titleOf = (file) => (read(file).match(/^# (.+)$/m) || [, path.basename(file)])[1];

const PARTS = [
  ["co-ban", "Phần A. Cơ bản", "Bám chương trình sách giáo khoa (GDPT 2018), từ bài cơ bản đến vận dụng cao."],
  ["nang-cao", "Phần B. Nâng cao", "Bồi dưỡng học sinh giỏi."],
];
const parts = fs.existsSync(path.join(gradeDir, "co-ban"))
  ? PARTS.filter(([p]) => fs.existsSync(path.join(gradeDir, p))).map(([p, t, d]) => ({ dir: path.join(gradeDir, p), title: t, desc: d }))
  : [{ dir: gradeDir, title: "", desc: "" }];

const toc = [];
let body = "";
for (const part of parts) {
  const partId = `p${++anchorSeq}`;
  const entry = { id: partId, title: part.title, items: [] };
  if (part.title) {
    body += `<section class="part" id="${partId}"><h1>${part.title}</h1><p>${part.desc}</p></section>`;
    toc.push(entry);
  }
  const items = part.title ? entry.items : toc;
  for (const d of fs.readdirSync(part.dir).filter((d) => /^\d\d-/.test(d)).sort()) {
    const full = path.join(part.dir, d);
    if (d === EXAM_DIR) {
      const readme = path.join(full, "README.md");
      if (!fs.existsSync(readme)) continue;
      const id = `s${++anchorSeq}`;
      const t = titleOf(readme).replace(/^Phần \d+\.\s*/, "");
      items.push({ id, title: t });
      body += `<section class="chap" id="${id}">${renderFile(readme, 0)}</section>`;
      for (const f of fs.readdirSync(full).filter((f) => /^de-\d+\.md$/.test(f)).sort()) {
        body += `<section class="exam">${renderFile(path.join(full, f), 1)}</section>`;
      }
      continue;
    }
    let lf;
    try { lf = lessonFile(full); } catch { continue; }
    const id = `s${++anchorSeq}`;
    items.push({ id, title: titleOf(lf) });
    body += `<section class="chap" id="${id}">${renderFile(lf, 0)}</section>`;
  }
}
const tocHtml = toc
  .map((e) => (e.items ? `<li class="tp"><a href="#${e.id}">${e.title}</a><ol>${e.items.map((i) => `<li><a href="#${i.id}">${i.title}</a></li>`).join("")}</ol></li>` : `<li><a href="#${e.id}">${e.title}</a></li>`))
  .join("");

const subtitle = parts.length > 1 ? "Cơ bản theo sách giáo khoa · Nâng cao bồi dưỡng học sinh giỏi" : "Bồi dưỡng học sinh giỏi";
const html = `<!DOCTYPE html><html lang="vi"><head><meta charset="utf-8"><title>Toán ${grade}</title>
<link rel="stylesheet" href="file://${root}/node_modules/katex/dist/katex.min.css">
<style>
@page { size: A4; margin: 18mm 16mm 18mm 16mm; @bottom-center { content: counter(page); font: 10pt "Noto Serif", serif; color: #555; } }
@page :first { @bottom-center { content: none; } }
body { font: 11pt/1.5 "Noto Serif", "Times New Roman", serif; color: #111; }
h1 { font-size: 20pt; color: #0b3d91; margin: 0 0 .4em; }
h2 { font-size: 14.5pt; color: #0b3d91; border-bottom: 1px solid #cbd5e1; padding-bottom: 2px; margin-top: 1.2em; break-after: avoid; }
h3 { font-size: 12pt; margin: 1em 0 .3em; break-after: avoid; }
h4 { font-size: 11pt; break-after: avoid; }
blockquote { margin: .6em 0; padding: .4em .8em; background: #f1f5fb; border-left: 3px solid #0b3d91; }
table { border-collapse: collapse; margin: .5em 0; } td, th { border: 1px solid #94a3b8; padding: 3px 8px; }
th { background: #eef2f8; }
code { font-size: .92em; }
.katex { font-size: 1.05em; }
.katex-display { margin: .5em 0; overflow: hidden; }
.fig { text-align: center; margin: .6em 0; break-inside: avoid; }
.fig svg { max-width: 300px; height: auto; }
.fig figcaption { font-size: 9.5pt; color: #555; font-style: italic; }
.cover { height: 250mm; display: flex; flex-direction: column; justify-content: center; text-align: center; break-after: page; }
.cover h1 { font-size: 34pt; margin-bottom: .2em; }
.cover p { font-size: 13pt; color: #333; }
.toc { break-after: page; } .toc ol { padding-left: 1.4em; } .toc li { margin: .15em 0; } .toc .tp { font-weight: bold; margin-top: .6em; } .toc .tp li { font-weight: normal; }
.toc a { color: #111; text-decoration: none; }
.part { break-before: page; height: 240mm; display: flex; flex-direction: column; justify-content: center; text-align: center; }
.part h1 { font-size: 28pt; }
.chap, .exam { break-before: page; }
p, li { orphans: 2; widows: 2; }
</style></head><body>
<div class="cover"><h1>Toán ${grade}</h1><p>${subtitle}</p><p>Kiến thức · Bài tập · Lời giải chi tiết · Đề luyện tập</p></div>
<nav class="toc"><h1>Mục lục</h1><ol>${tocHtml}</ol></nav>
${body}
</body></html>`;

const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "learnmath-pdf-"));
const htmlFile = path.join(tmp, `${name}.html`);
fs.writeFileSync(htmlFile, html);
const out = path.join(gradeDir, `${name}.pdf`);
execFileSync("google-chrome", ["--headless=new", "--disable-gpu", "--no-sandbox", "--no-pdf-header-footer", "--virtual-time-budget=20000", `--print-to-pdf=${out}`, `file://${htmlFile}`], { stdio: "ignore" });
fs.rmSync(tmp, { recursive: true, force: true });
console.log(`${out}: ${Math.round(fs.statSync(out).size / 1024)} KB`);

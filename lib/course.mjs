// Parse one course (a grade + part, e.g. lop6/co-ban) into the app's data shape.
// A course folder holds topic folders NN-slug/ (01..10) and the exam folder
// 11-de-thi-thu/. Each topic folder has the lesson (bai-hoc.md, or the single
// other .md in a source-material folder), goi-y.md (hints) and the-ghi-nho.md
// (flashcards). Figures are SVG files under hinh/, referenced from Markdown as
//   ![caption](hinh/name.svg)        (optionally followed by "*Hình: ...*")
// Used by build.mjs (app) and tools/check.mjs (format + KaTeX validation).
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import MarkdownIt from "markdown-it";
import { tex } from "@mdit/plugin-tex";
import katexLib from "katex";

export const EXAM_DIR = "11-de-thi-thu";
const read = (p) => fs.readFileSync(p, "utf8");
const escapeHtml = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// Split text on a heading regex (needs the g flag); returns [{m, body}].
function sections(src, re) {
  const ms = [...src.matchAll(re)];
  return ms.map((m, i) => {
    const end = i + 1 < ms.length ? ms[i + 1].index : src.length;
    return { m, body: src.slice(m.index + m[0].length, end).replace(/\n-{3,}\s*$/, "").trim() };
  });
}
// Text after the line matching startRe, up to the line matching endRe.
function between(src, startRe, endRe, file) {
  const s = src.search(startRe);
  if (s < 0) throw new Error(`${file}: thiếu dòng ${startRe}`);
  const rest = src.slice(s).replace(startRe, "");
  const e = endRe ? rest.search(endRe) : -1;
  if (endRe && e < 0) throw new Error(`${file}: thiếu dòng ${endRe}`);
  return (e < 0 ? rest : rest.slice(0, e)).replace(/\n-{3,}\s*$/, "").trim();
}

export function lessonFile(dir) {
  if (fs.existsSync(path.join(dir, "bai-hoc.md"))) return path.join(dir, "bai-hoc.md");
  const mds = fs.readdirSync(dir).filter((f) => f.endsWith(".md") && !["README.md", "goi-y.md", "the-ghi-nho.md"].includes(f));
  if (mds.length !== 1) throw new Error(`${dir}: cần đúng 1 file bài học .md, thấy ${mds.length}`);
  return path.join(dir, mds[0]);
}

// opts: { docDir, appDir?, issues?: string[], strictApp?: bool }
// docDir holds lessons/exams/figures; appDir (default docDir) holds goi-y.md and the-ghi-nho.md.
export function parseCourse({ docDir, appDir = docDir, issues = [], requireApp = true, routeBase = "" }) {
  const topicDirs = fs.readdirSync(docDir).filter((d) => /^\d\d-/.test(d) && d !== EXAM_DIR && fs.statSync(path.join(docDir, d)).isDirectory()).sort();
  const topicId = (dir) => dir.replace(/^\d\d-/, "");
  let where = "";
  const md = new MarkdownIt({ html: false, linkify: false, typographer: false }).use(tex, {
    render(content, displayMode) {
      try {
        katexLib.renderToString(content, { displayMode, throwOnError: true, strict: "ignore" });
      } catch (e) {
        issues.push(`${where}: KaTeX: ${e.message.split("\n")[0]}`);
      }
      return `<span class="m${displayMode ? " d" : ""}">${escapeHtml(content)}</span>`;
    },
  });
  function relink(src) {
    return src.replace(/\[([^\]]+)\]\(([^)\s]+\.md)\)/g, (_, text, href) => {
      const exam = href.match(/de-(\d+)\.md$/);
      if (exam) return `[${text}](#/${routeBase}thi/${+exam[1]})`;
      const dir = topicDirs.find((d) => href.includes(d));
      return dir ? `[${text}](#/${routeBase}t/${topicId(dir)})` : text;
    });
  }
  // Figures are pulled out of the text and returned separately (the app shows
  // them in their own block, hidden by default).
  function figuresIn(src, baseDir) {
    const figs = [];
    const text = src.replace(/^!\[([^\]]*)\]\((hinh\/[^)\s]+\.svg)\)[ \t]*\n?(?:\*Hình:[^\n]*\*[ \t]*\n?)?/gm, (_, alt, rel) => {
      const p = path.join(baseDir, rel);
      if (!fs.existsSync(p)) {
        issues.push(`${where}: không thấy hình ${rel}`);
        return "";
      }
      let svg = read(p).replace(/<\?xml[^>]*>\s*/, "").trim();
      if (!/^<svg[\s>]/.test(svg) || !/viewBox=/.test(svg)) issues.push(`${where}: ${rel} không phải SVG có viewBox`);
      // drop the standalone white background so the app theme applies
      // (and the embedded <style>: the app's own CSS styles the same classes,
      // and an inline <style> would leak into the whole page)
      svg = svg
        .replace(/\sstyle="color:#1a1a1a;background:#fff"/, "")
        .replace(/<rect width="100%" height="100%" fill="#fff"\/>/, "")
        .replace(/<style>[\s\S]*?<\/style>/g, "");
      if (!/class="geo/.test(svg)) svg = svg.replace(/^<svg/, '<svg class="geo"');
      figs.push({ caption: alt.trim(), svg });
      return "";
    });
    return { text, figs };
  }
  function render(src, at) {
    where = at;
    const text = src.replace(/<!--[\s\S]*?-->/g, "");
    if (/!\[[^\]]*\]\(/.test(text)) issues.push(`${at}: ảnh không đúng dạng ![chú thích](hinh/ten.svg) ở đầu dòng`);
    return md.render(relink(text).trim());
  }
  const figHtml = (figs) =>
    figs.length ? `<div class="figs">${figs.map((f) => `<figure class="fig">${f.svg}${f.caption ? `<figcaption>${md.renderInline(f.caption)}</figcaption>` : ""}</figure>`).join("")}</div>` : "";

  function buildTopic(dir) {
    const id = topicId(dir);
    const number = +dir.slice(0, 2);
    const base = path.join(docDir, dir);
    const lf = lessonFile(base);
    const rel = path.relative(docDir, lf);
    const lesson = read(lf);
    const h1 = lesson.match(/^# Chủ đề (\d+)\.\s*(.+)$/m);
    if (!h1) throw new Error(`${rel}: dòng đầu phải là "# Chủ đề N. Tên chủ đề"`);
    if (+h1[1] !== number) issues.push(`${rel}: tiêu đề ghi Chủ đề ${h1[1]} nhưng thư mục là ${number}`);
    const title = h1[2].trim();
    const short = title.split(":")[0].replace(/\s*\(.*\)\s*$/, "").trim();
    const lead = between(lesson, /^# .+$/m, /^## I\./m, rel);

    const partI = between(lesson, /^## I\..*$/m, /^## II\./m, rel);
    const firstH3 = partI.search(/^### /m);
    const knowledge = sections(partI, /^### (.+)$/gm).map((s, i) => {
      where = `${rel} kiến thức ${i + 1}`;
      const f = figuresIn(s.body, base);
      return { title: md.renderInline(s.m[1].replace(/^\d+\.\s*/, "")), html: render(f.text, where) + figHtml(f.figs) };
    });
    if (knowledge.length < 3) issues.push(`${rel}: phần I nên có ít nhất 3 mục "### ..."`);
    const intro = render(lead + "\n\n" + (firstH3 > 0 ? partI.slice(0, firstH3) : ""), `${rel} mở đầu`);

    const partII = between(lesson, /^## II\..*$/m, /^## III\./m, rel);
    const partIII = between(lesson, /^## III\..*$/m, null, rel);
    const solutions = Object.fromEntries(sections(partIII, /^### Bài (\d+)\s*$/gm).map((s) => [s.m[1], s.body]));
    const hintPath = path.join(appDir, dir, "goi-y.md");
    const cardPath = path.join(appDir, dir, "the-ghi-nho.md");
    let hints = {};
    if (fs.existsSync(hintPath)) {
      hints = Object.fromEntries(
        sections(read(hintPath).replace(/<!--[\s\S]*?-->/g, ""), /^## Bài (\d+) \| (\d)\s*$/gm).map((s) => {
          const [head, ...hs] = s.body.split(/^### Gợi ý \d+\s*$/m);
          const idea = head.replace(/^\*\*Ý tưởng:\*\*\s*/m, "").trim();
          if (!/^\*\*Ý tưởng:\*\*/m.test(head)) issues.push(`${dir}/goi-y.md Bài ${s.m[1]}: thiếu dòng **Ý tưởng:**`);
          if (hs.length < 1) issues.push(`${dir}/goi-y.md Bài ${s.m[1]}: cần ít nhất 1 "### Gợi ý 1"`);
          return [s.m[1], { level: +s.m[2], idea, hints: hs.map((h) => h.trim()) }];
        }),
      );
    } else if (requireApp) issues.push(`${dir}: thiếu goi-y.md`);
    const problemSecs = sections(partII, /^\*\*Bài (\d+)(?: \(([^)]*)\))?\.\*\*/gm);
    problemSecs.forEach((s, i) => {
      if (+s.m[1] !== i + 1) issues.push(`${rel}: bài thứ ${i + 1} lại đánh số Bài ${s.m[1]}`);
    });
    const problems = problemSecs.map((s) => {
      const n = s.m[1];
      const h = hints[n] || { level: 1, idea: "", hints: [] };
      if (!solutions[n]) issues.push(`${rel}: thiếu lời giải "### Bài ${n}"`);
      if (!hints[n] && fs.existsSync(hintPath)) issues.push(`${dir}/goi-y.md: thiếu gợi ý "## Bài ${n} | độ khó"`);
      const w = `${rel} bài ${n}`;
      where = w;
      const st = figuresIn(s.body, base);
      const so = figuresIn(solutions[n] || "", base);
      return {
        n: +n,
        tag: s.m[2] || "",
        level: h.level,
        statement: render(st.text, w),
        idea: render(h.idea, w + " ý tưởng"),
        hints: h.hints.map((x, i) => render(x, `${w} gợi ý ${i + 1}`)),
        solution: render(so.text, w + " lời giải"),
        figures: figHtml([...st.figs, ...so.figs]),
      };
    });
    if (problems.length < 8) issues.push(`${rel}: chỉ có ${problems.length} bài (cần ít nhất 8)`);
    const extraSol = Object.keys(solutions).filter((n) => !problems.some((p) => p.n === +n));
    if (extraSol.length) issues.push(`${rel}: có lời giải cho bài không tồn tại: ${extraSol.join(", ")}`);
    const extra = Object.keys(hints).filter((n) => !problems.some((p) => p.n === +n));
    if (extra.length) issues.push(`${dir}/goi-y.md: gợi ý cho bài không tồn tại: ${extra.join(", ")}`);

    const cards = [];
    if (fs.existsSync(cardPath)) {
      const cardsSrc = read(cardPath).replace(/<!--[\s\S]*?-->/g, "");
      for (const g of sections(cardsSrc, /^## (.+)$/gm)) {
        for (const c of sections(g.body, /^### (.+)$/gm)) {
          const front = c.m[1].trim();
          cards.push({
            id: crypto.createHash("sha1").update(front).digest("hex").slice(0, 10),
            group: g.m[1].trim(),
            front: render(front, `${dir} thẻ`),
            back: render(c.body, `${dir} thẻ: ${front}`),
          });
          if (!c.body.trim()) issues.push(`${dir}/the-ghi-nho.md: thẻ "${front}" thiếu mặt sau`);
        }
      }
      const dup = cards.find((c, i) => cards.findIndex((d) => d.id === c.id) !== i);
      if (dup) issues.push(`${dir}/the-ghi-nho.md: hai thẻ trùng mặt trước`);
      if (cards.length < 12) issues.push(`${dir}/the-ghi-nho.md: chỉ có ${cards.length} thẻ (cần ít nhất 12)`);
    } else if (requireApp) issues.push(`${dir}: thiếu the-ghi-nho.md`);
    return { id, number, title, short, intro, knowledge, problems, cards };
  }

  function buildExams() {
    const base = path.join(docDir, EXAM_DIR);
    if (!fs.existsSync(base)) {
      issues.push(`thiếu thư mục ${EXAM_DIR}`);
      return null;
    }
    const readme = read(path.join(base, "README.md"));
    const tm = readme.match(/\*\*Thời gian:\*\*\s*(\d+)\s*phút/);
    if (!tm) issues.push(`${EXAM_DIR}/README.md: thiếu "**Thời gian:** N phút"`);
    const title = (readme.match(/^# (.+)$/m) || [, "Đề thi thử"])[1].replace(/^Phần \d+\.\s*/, "");
    const notes = {};
    for (const m of readme.matchAll(/^\|\s*\[Đề (\d+)\]\([^)]*\)\s*\|\s*(.+?)\s*\|\s*$/gm)) notes[m[1]] = m[2];
    const tipsMatch = readme.match(/^## Cách luyện đề hiệu quả\s*$([\s\S]*)/m);
    const tips = tipsMatch ? render(tipsMatch[1], `${EXAM_DIR}: cách luyện`) : "";
    const list = fs
      .readdirSync(base)
      .filter((f) => /^de-\d+\.md$/.test(f))
      .sort()
      .map((f) => {
        const n = +f.match(/\d+/)[0];
        const rel = `${EXAM_DIR}/${f}`;
        const src = read(path.join(base, f));
        const qPart = between(src, /^## Đề bài\s*$/m, /^## Lời giải chi tiết\s*$/m, rel);
        const sPart = between(src, /^## Lời giải chi tiết\s*$/m, null, rel);
        const sols = Object.fromEntries(sections(sPart, /^### Câu (\d+)\s*$/gm).map((s) => [s.m[1], s.body]));
        const questions = sections(qPart, /^\*\*Câu (\d+)(?: \(([^)]*)\))?\.\*\*/gm).map((s) => {
          const q = s.m[1];
          if (!sols[q]) issues.push(`${rel}: thiếu lời giải "### Câu ${q}"`);
          where = `${rel} câu ${q}`;
          const st = figuresIn(s.body, base);
          const so = figuresIn(sols[q] || "", base);
          return {
            n: +q,
            tag: s.m[2] || "",
            topic: topicId(topicDirs[+q - 1] || ""),
            statement: render(st.text, `${rel} câu ${q}`),
            solution: render(so.text, `${rel} câu ${q} lời giải`),
            figures: figHtml([...st.figs, ...so.figs]),
          };
        });
        if (questions.length !== 10) issues.push(`${rel}: có ${questions.length} câu (cần đúng 10)`);
        if (!notes[n]) issues.push(`${EXAM_DIR}/README.md: thiếu dòng bảng "| [Đề ${n}](de-${String(n).padStart(2, "0")}.md) | điểm nhấn |"`);
        return { n, note: notes[n] ? ((where = `đề ${n} ghi chú`), md.renderInline(notes[n])) : "", questions };
      });
    if (list.length !== 10) issues.push(`${EXAM_DIR}: có ${list.length} đề (cần 10)`);
    return { title, minutes: tm ? +tm[1] : 150, tips, list };
  }

  const topics = [];
  for (const d of topicDirs) {
    try {
      topics.push(buildTopic(d));
    } catch (e) {
      issues.push(e.message);
    }
  }
  if (topicDirs.length !== 10) issues.push(`có ${topicDirs.length} thư mục chủ đề (cần 10: 01-... đến 10-...)`);
  let exams = null;
  try {
    exams = buildExams();
  } catch (e) {
    issues.push(e.message);
  }
  return { topics, exams, issues };
}

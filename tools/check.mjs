// Validate one course: format, numbering, hints/cards present, figures, KaTeX.
// Usage: node tools/check.mjs <docDir> [appDir]
//   docDir: e.g. ../math6/co-ban        (lessons, exams, hinh/)
//   appDir: e.g. content/lop6/co-ban    (goi-y.md, the-ghi-nho.md per topic); omit to skip those
import path from "node:path";
import { parseCourse } from "../lib/course.mjs";

const [docArg, appArg] = process.argv.slice(2);
if (!docArg) {
  console.error("Usage: node tools/check.mjs <docDir> [appDir]");
  process.exit(2);
}
const docDir = path.resolve(docArg);
const { topics, exams, issues } = parseCourse({ docDir, appDir: appArg ? path.resolve(appArg) : docDir, requireApp: !!appArg });
for (const t of topics) console.log(`${t.number}. ${t.short}: ${t.knowledge.length} mục, ${t.problems.length} bài, ${t.cards.length} thẻ`);
if (exams) console.log(`Đề: ${exams.list.length} đề, ${exams.minutes} phút`);
if (issues.length) {
  console.log(`\n${issues.length} lỗi:`);
  for (const i of issues) console.log("  - " + i);
  process.exit(1);
}
console.log("\nOK, không có lỗi.");

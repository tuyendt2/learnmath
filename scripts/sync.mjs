// Copy lessons, mock exams and figures from the source material folders into
// content/, so the app repo carries its own copy:
//   ../math8-9/            -> content/lop8-9/nang-cao/
//   ../mathN/co-ban/       -> content/lopN/co-ban/      (N = 4, 5, 6, 7, 10, 11, 12)
//   ../mathN/nang-cao/     -> content/lopN/nang-cao/
// A topic folder's lesson file is stored as bai-hoc.md; goi-y.md and
// the-ghi-nho.md live only in content/ and are never touched here.
// Usage: node scripts/sync.mjs [sourceParentDir]
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { lessonFile, EXAM_DIR } from "../lib/course.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const parent = path.resolve(process.argv[2] || path.join(root, ".."));

const pairs = [[path.join(parent, "math8-9"), "lop8-9/nang-cao"]];
for (const g of [4, 5, 6, 7, 10, 11, 12]) for (const p of ["co-ban", "nang-cao"]) pairs.push([path.join(parent, `math${g}`, p), `lop${g}/${p}`]);

let n = 0;
for (const [src, rel] of pairs) {
  if (!fs.existsSync(src)) continue;
  for (const dir of fs.readdirSync(src).filter((d) => /^\d\d-/.test(d)).sort()) {
    const from = path.join(src, dir);
    const to = path.join(root, "content", rel, dir);
    if (dir === EXAM_DIR) {
      const mds = fs.readdirSync(from).filter((f) => f.endsWith(".md"));
      if (!mds.length) continue;
      fs.mkdirSync(to, { recursive: true });
      for (const f of mds) fs.copyFileSync(path.join(from, f), path.join(to, f)), n++;
    } else {
      let lf;
      try { lf = lessonFile(from); } catch { continue; } // topic not written yet
      fs.mkdirSync(to, { recursive: true });
      fs.copyFileSync(lf, path.join(to, "bai-hoc.md"));
      n++;
    }
    const hinh = path.join(from, "hinh");
    if (fs.existsSync(hinh)) {
      fs.rmSync(path.join(to, "hinh"), { recursive: true, force: true });
      fs.cpSync(hinh, path.join(to, "hinh"), { recursive: true });
    }
  }
}
console.log(`Đã chép ${n} file từ ${parent}`);

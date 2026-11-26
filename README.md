# Học Toán lớp 4–12: ứng dụng học trên điện thoại

Ứng dụng web cài được lên điện thoại (PWA), dùng chung cho Toán lớp 4 đến lớp 12. Mỗi lớp có hai khóa:

- **Cơ bản:** bám chương trình GDPT 2018 (bộ Kết nối tri thức), từ bài SGK đến vận dụng cao. Lớp 12 bám cấu trúc thi tốt nghiệp THPT.
- **Nâng cao:** bồi dưỡng học sinh giỏi (lớp 4–5: toán tư duy, thi vào lớp 6 chất lượng cao; lớp 6–7: HSG cấp huyện; lớp 10–12: HSG cấp tỉnh).
- **Lớp 8–9:** khóa nâng cao lấy từ bộ tài liệu `math8-9` (HSG, thi vào lớp 10 chuyên). App riêng `math8-9` vẫn giữ nguyên.

Mỗi khóa có 10 chủ đề (kiến thức, bài tập có gợi ý từng tầng và lời giải, thẻ ghi nhớ ôn theo lịch ngắt quãng) và 10 đề luyện có bấm giờ. Dùng được khi không có mạng, tiến độ lưu trên máy.

**Dùng thử:** https://tuyendt2.github.io/learnmath/

Cài lên điện thoại: Android (Chrome) bấm ⋮ → *Thêm vào màn hình chính*; iPhone (Safari) bấm Chia sẻ → *Thêm vào MH chính*.

**Bản PDF từng lớp:** thư mục [`pdf/`](pdf/) (`math4.pdf` … `math12.pdf`).

## Cấu trúc

```
../mathN/co-ban/, ../mathN/nang-cao/   tài liệu gốc từng lớp (N = 4, 5, 6, 7, 10, 11, 12)
  NN-slug/slug.md, NN-slug/hinh/*.svg  bài học và hình
  11-de-thi-thu/de-01.md … de-10.md    đề
content/lopN/<phần>/NN-slug/
  bai-hoc.md       chép từ tài liệu gốc (npm run sync)
  goi-y.md         ý tưởng, gợi ý từng tầng, độ khó từng bài
  the-ghi-nho.md   thẻ ghi nhớ
content/lop8-9/nang-cao/   khóa 8–9, chép từ ../math8-9
docs/SPEC.md       đặc tả nội dung và danh sách chủ đề
lib/course.mjs     đọc một khóa (bài học, gợi ý, thẻ, đề)
build.mjs          tạo dist/ (mỗi khóa một file dữ liệu, tải khi mở)
tools/check.mjs    kiểm tra định dạng một phần
tools/pdf.mjs      in PDF một lớp
src/               giao diện
```

## Lệnh

```sh
npm install
npm run sync                            # chép bài học, đề, hình từ ../mathN và ../math8-9
npm run build                           # tạo dist/
npm run serve                           # xem thử ở http://localhost:8089
npm run deploy                          # build rồi đẩy dist/ lên nhánh gh-pages
node tools/check.mjs ../math6/co-ban content/lop6/co-ban
node tools/pdf.mjs ../math6             # tạo ../math6/math6.pdf
```

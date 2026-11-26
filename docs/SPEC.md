# Đặc tả nội dung: Toán lớp 4 – 12

Tài liệu cho các lớp 4, 5, 6, 7, 10, 11, 12 (lớp 8–9 đã có ở `../math8-9`). Mỗi lớp có **hai phần tách riêng**:

- **`co-ban/`**: bám chương trình GDPT 2018 (bộ Kết nối tri thức làm chuẩn), từ bài cơ bản theo SGK đến bài vận dụng, vận dụng cao.
- **`nang-cao/`**: bồi dưỡng học sinh giỏi. Lớp 4–5 là toán nâng cao, toán tư duy, thi vào lớp 6 chất lượng cao. Lớp 6–7 là HSG cấp huyện. Lớp 10–12 là HSG cấp tỉnh, cùng phần khó của đề thi tốt nghiệp và đề thi đánh giá năng lực.

Mỗi phần có **10 chủ đề** và **10 đề**, theo đúng khuôn mẫu của bộ 8–9. **Hãy đọc mẫu trước khi viết:**
- bài học: `../math8-9/07-bat-dang-thuc/bat-dang-thuc.md`, `../math8-9/09-hinh-hoc-phang/hinh-hoc-phang.md` (có hình);
- đề: `../math8-9/11-de-thi-thu/README.md`, `../math8-9/11-de-thi-thu/de-01.md`;
- gợi ý và thẻ ghi nhớ: `content/lop8-9/nang-cao/07-bat-dang-thuc/goi-y.md`, `.../the-ghi-nho.md`.

Mọi đường dẫn tương đối trong file này tính từ `/home/tuyen/dev/claude-code-ristrcited-folder/learnmath/`.

## 1. Vị trí file

Ví dụ với lớp 6, phần cơ bản, chủ đề 2 có slug `chia-het-uoc-boi`:

```
../math6/co-ban/02-chia-het-uoc-boi/chia-het-uoc-boi.md      bài học (tài liệu gốc)
../math6/co-ban/02-chia-het-uoc-boi/hinh/bai-3.svg           hình (nếu có)
../math6/co-ban/11-de-thi-thu/README.md                      giới thiệu bộ đề
../math6/co-ban/11-de-thi-thu/de-01.md ... de-10.md          10 đề
../math6/co-ban/11-de-thi-thu/hinh/de-03.svg                 hình của đề (nếu có)
content/lop6/co-ban/02-chia-het-uoc-boi/goi-y.md             gợi ý từng bài (cho app)
content/lop6/co-ban/02-chia-het-uoc-boi/the-ghi-nho.md       thẻ ghi nhớ (cho app)
```

Tên thư mục chủ đề là `NN-slug`, tên file bài học là `slug.md`, đúng như danh sách ở mục 6. Không tạo thêm file nào khác. README của lớp và của phần do người điều phối viết.

## 2. Bài học `slug.md`

```
# Chủ đề N. Tên chủ đề

> Một hai câu: chủ đề này dùng để làm gì, hay gặp ở đâu trong đề.

## I. Kiến thức cần nắm
### 1. ...            (ít nhất 4 mục "###")
## II. Bài tập vận dụng
**Bài 1.** ...
**Bài 2 (tên dạng hoặc nguồn).** ...
## III. Lời giải chi tiết
### Bài 1
...
```

- **Phần I:** định nghĩa, tính chất, công thức, phương pháp, các dạng toán. Ở mỗi dạng có **ví dụ mẫu** giải ngắn. Phần nâng cao giải thích *vì sao đúng* (chứng minh ngắn) như mẫu 8–9. Có mục "sai lầm hay gặp" khi phù hợp.
- **Phần II:** **10 đến 14 bài**, sắp từ dễ đến khó. Đánh số liên tục từ 1, mỗi bài mở đầu bằng `**Bài n.**` hoặc `**Bài n (nhãn).**` ở đầu dòng. Bài nhiều ý thì viết a), b) trên các dòng sau. Không đặt `**Bài ...**` ở chỗ nào khác.
  - Phần cơ bản: khoảng 4 bài nhận biết, thông hiểu kiểu SGK, 4 bài vận dụng (có bài toán thực tế), 2–4 bài vận dụng cao.
  - Phần nâng cao: từ mức khá đến mức đề HSG hoặc đề thi chuyên của lớp đó.
- **Phần III:** mỗi bài một mục `### Bài n`, đúng bằng số bài ở phần II. Lời giải trình bày từng bước như học sinh làm bài thi, có đáp số. Cuối các bài quan trọng có `*Nhận xét:* ...` nói về phương pháp.
- **Đúng kiến thức của lớp.** Không dùng công cụ của lớp trên. Ví dụ: lớp 4–5 không dùng ẩn $x$ để lập phương trình, giải bằng sơ đồ đoạn thẳng, phương pháp giả thiết tạm hoặc rút về đơn vị; lớp 6 chưa có số hữu tỉ âm dạng tổng quát, chưa dùng phương trình bậc nhất một cách hình thức; lớp 10 chưa có đạo hàm. Bài nâng cao được dùng mẹo sâu hơn nhưng vẫn trong tầm học sinh lớp đó.
- **Văn phong:** tiếng Việt chuẩn, rõ ràng, câu ngắn. Xưng hô trung tính. Lớp 4–5 viết thân thiện, dễ hiểu hơn.

## 3. Đề `11-de-thi-thu/`

`README.md`, mở đầu theo mẫu:

```
# Phần 11. Đề thi thử              (phần cơ bản: "# Phần 11. Đề kiểm tra")

Gồm **10 đề**, mỗi đề **10 câu**, câu thứ k ứng với chủ đề k. ...

- **Thời gian:** 90 phút/đề.
- **Thang điểm:** mỗi câu 1 điểm, tổng 10 điểm. ...

## Cấu trúc mỗi đề
| Câu | Dạng | Chủ đề tham khảo |       (10 dòng, link ../NN-slug/slug.md)

## Danh sách đề
| Đề | Điểm nhấn |
|---|---|
| [Đề 1](de-01.md) | ... |        (đủ 10 dòng, đúng dạng này)

## Cách luyện đề hiệu quả
1. ...
```

Thời gian làm bài:

| | Lớp 4–5 | Lớp 6–7 | Lớp 10–12 |
|---|---|---|---|
| co-ban | 60 phút | 90 phút | 90 phút |
| nang-cao | 90 phút | 120 phút | 180 phút |

`de-NN.md`:

```
# Đề thi thử số N                 (phần cơ bản: "# Đề kiểm tra số N")

**Thời gian làm bài:** 90 phút. **Thang điểm:** mỗi câu 1 điểm, tổng 10 điểm.

## Đề bài

**Câu 1 (Nhãn dạng).** ...
...
**Câu 10 (Nhãn dạng).** ...

---

## Lời giải chi tiết

### Câu 1
...
```

- Đúng **10 câu**. **Câu k thuộc chủ đề k** của phần đó (app dùng điều này để gợi ý ôn lại).
- Mỗi đề có độ khó cân đối, giống đề thật của lớp đó: phần cơ bản giống đề kiểm tra cuối kỳ hoặc cuối năm, phần nâng cao giống đề HSG hoặc đề thi tuyển. Đề 1–3 dễ hơn, đề 8–10 khó hơn.
- Phần cơ bản lớp 12 bám cấu trúc thi tốt nghiệp THPT từ 2025, viết dạng tự luận: một số câu có ý a) b) c) d) "đúng hay sai, giải thích", một số câu "trả lời ngắn" có đáp số là số.
- **Không chép lại** bài trong phần II của chủ đề. Mười đề không trùng nhau.

## 4. Gợi ý `goi-y.md` và thẻ ghi nhớ `the-ghi-nho.md` (cho app)

`goi-y.md` có **một mục cho mỗi bài** của bài học, đúng số thứ tự:

```
# Gợi ý từng tầng cho bài tập <tên chủ đề>

## Bài 1 | 1
**Ý tưởng:** một câu tóm ý chính của lời giải.

### Gợi ý 1
Gợi ý nhẹ: hướng suy nghĩ, chưa lộ cách giải.

### Gợi ý 2
Gợi ý mạnh hơn: bước then chốt.
```

Số sau `|` là độ khó, từ 1 đến 4: 1 là cơ bản, 2 là vận dụng, 3 là khó, 4 là rất khó. Mỗi bài có 2 gợi ý, bài khó có thể có 3.

`the-ghi-nho.md` có **15 đến 30 thẻ**, chia thành vài nhóm:

```
# Thẻ ghi nhớ <tên chủ đề>

## Tên nhóm

### Câu hỏi ở mặt trước (một dòng, kết thúc bằng dấu ?)
Mặt sau: công thức, quy tắc, ví dụ ngắn, có thể thêm *Vì sao:* ...
```

Mỗi mặt trước khác nhau. Thẻ hỏi về công thức, định nghĩa, dấu hiệu, mẹo, cách nhận dạng dạng toán và các bẫy hay gặp.

## 5. Công thức, hình, kiểm tra

- **Công thức** viết bằng LaTeX trong `$...$` hoặc `$$...$$` (KaTeX). Dùng `\lvert x\rvert` thay cho `|x|` (vì `|` làm vỡ bảng Markdown). Viết số thập phân bằng dấu phẩy: `$3{,}5$`. Có thể dùng `\widehat{ABC}`, `\overline{abc}`, `\begin{cases}`, `\boxed{}`. Không dùng HTML.
- **Hình:** bài hình học (và câu hình trong đề) có hình SVG **đúng tỉ lệ**. Tính tọa độ bằng script (node hoặc python3), không ước lượng bằng mắt. Vẽ theo đúng kiểu file mẫu `../math8-9/09-hinh-hoc-phang/hinh/bai-1.svg`, kể cả các class `thin`, `aux`, `hi`, `mark`, `dot` và thẻ `<style>`. Có `viewBox`, cạnh khoảng 260–340 px. Hình khối không gian vẽ phối cảnh, nét khuất là `class="aux"`. Đặt file ở `hinh/` trong thư mục chủ đề hoặc trong `11-de-thi-thu/`. Chèn vào Markdown bằng một dòng riêng, ngay sau `### Bài n` hoặc `### Câu n`:
  ```
  ![Chú thích ngắn](hinh/bai-3.svg)
  *Hình: Chú thích ngắn.*
  ```
  Biểu đồ thống kê cũng vẽ bằng SVG theo cách này. Bảng số liệu thì dùng bảng Markdown.
- **Kiểm tra đáp số:** mọi đáp số, mọi phép tính và mọi kết quả đếm phải được **kiểm tra bằng máy** trước khi ghi vào file: chạy `python3` (có `fractions`, không có sympy) hoặc `node` để tính lại, thử số, hoặc vét cạn với bài số học và tổ hợp. Viết script ở thư mục tạm của bạn, không viết vào thư mục tài liệu. Lời giải sai còn tệ hơn không có lời giải.
- **Kiểm tra định dạng:** khi viết xong, chạy

  ```sh
  cd /home/tuyen/dev/claude-code-ristrcited-folder/learnmath
  node tools/check.mjs ../math6/co-ban content/lop6/co-ban
  ```

  Lệnh này kiểm tra định dạng, số thứ tự bài, gợi ý, thẻ, hình và lỗi KaTeX. Khi bạn mới làm xong một số chủ đề, lệnh sẽ báo thiếu các chủ đề hoặc đề do agent khác viết. Chỉ cần sửa sạch các lỗi thuộc **phần của bạn**.

## 6. Danh sách chủ đề

Mỗi dòng có dạng `NN-slug`: Tên chủ đề (gợi ý nội dung).

### Lớp 4
**co-ban** (60 phút)
- 01-so-tu-nhien: Số tự nhiên: đọc, viết, so sánh, làm tròn (đến lớp triệu; hàng và lớp; dãy số tự nhiên; số chẵn, số lẻ)
- 02-cong-tru: Phép cộng và phép trừ (tính chất giao hoán, kết hợp; biểu thức có chứa chữ; tính nhẩm, tính thuận tiện)
- 03-nhan-chia: Phép nhân và phép chia (nhân với số có hai chữ số; chia cho số có một, hai chữ số; tính chất phép nhân; nhân, chia nhẩm với 10, 100, 1000)
- 04-trung-binh-cong: Số trung bình cộng và bài toán liên quan
- 05-tong-hieu: Tìm hai số khi biết tổng và hiệu của hai số đó
- 06-phan-so: Phân số (khái niệm, tính chất cơ bản, rút gọn, quy đồng mẫu số, so sánh)
- 07-phep-tinh-phan-so: Các phép tính với phân số (cộng, trừ, nhân, chia; tìm phân số của một số)
- 08-don-vi-do: Đơn vị đo (yến, tạ, tấn; dm², m², mm²; giây, thế kỷ; đổi đơn vị)
- 09-hinh-hoc: Hình học (góc nhọn, góc tù, góc bẹt, đo góc; hai đường thẳng vuông góc, song song; hình bình hành, hình thoi; chu vi, diện tích các hình đã học)
- 10-thong-ke-xac-suat: Thống kê và xác suất (dãy số liệu, bảng, biểu đồ cột; số lần xuất hiện của một sự kiện)

**nang-cao** (90 phút)
- 01-tinh-nhanh: Tính nhanh, tính hợp lý (nhóm số, tính chất phân phối, tổng nhiều số hạng)
- 02-cau-tao-so: Cấu tạo số và chữ số (phân tích $\overline{abc}$, thêm hoặc bớt chữ số, đếm chữ số, viết số)
- 03-day-so-quy-luat: Dãy số có quy luật (tìm số hạng, đếm số số hạng, tổng dãy cách đều)
- 04-chia-het: Dấu hiệu chia hết và phép chia có dư (2, 3, 5, 9; điền chữ số; số dư)
- 05-trung-binh-cong-nang-cao: Trung bình cộng nâng cao (thêm bớt số hạng, bài toán ẩn trung bình)
- 06-toan-dien-hinh: Các bài toán điển hình (tổng hiệu, giả thiết tạm, rút về đơn vị, bài toán tuổi)
- 07-phan-so-nang-cao: Phân số nâng cao (so sánh bằng phần bù, phân số trung gian; tính tổng dạng $\frac{1}{2}+\frac{1}{6}+\frac{1}{12}+\dots$; bài toán có lời văn)
- 08-chuyen-dong: Toán chuyển động (vận tốc, quãng đường, thời gian ở mức lớp 4 nâng cao; gặp nhau, đuổi nhau)
- 09-hinh-hoc-nang-cao: Hình học nâng cao (đếm hình; cắt ghép; chu vi, diện tích hình chữ nhật, hình vuông khi thêm hoặc bớt kích thước)
- 10-logic-to-hop: Suy luận logic và tổ hợp (bài toán trồng cây, đếm, Dirichlet đơn giản, suy luận đúng sai, ô số)

### Lớp 5
**co-ban** (60 phút)
- 01-phan-so-ti-so: Ôn tập phân số, hỗn số; tỉ số; tìm hai số khi biết tổng và tỉ, hiệu và tỉ
- 02-so-thap-phan: Số thập phân (đọc, viết, so sánh, làm tròn; viết số đo dưới dạng số thập phân)
- 03-phep-tinh-so-thap-phan: Các phép tính với số thập phân
- 04-ti-so-phan-tram: Tỉ số phần trăm và ba bài toán cơ bản (có bài toán tiền lãi, giảm giá)
- 05-don-vi-do: Đơn vị đo (độ dài, khối lượng, diện tích: ha, km²; thể tích: cm³, dm³, m³)
- 06-hinh-phang: Hình tam giác, hình thang, hình tròn (chu vi, diện tích)
- 07-hinh-khoi: Hình hộp chữ nhật, hình lập phương, hình trụ ở mức nhận biết (diện tích xung quanh, toàn phần, thể tích)
- 08-thoi-gian-chuyen-dong: Số đo thời gian và chuyển động đều (vận tốc, quãng đường, thời gian)
- 09-ti-le: Tỉ lệ bản đồ và bài toán liên quan đến rút về đơn vị, tìm tỉ số
- 10-thong-ke-xac-suat: Thống kê và xác suất (biểu đồ hình quạt tròn; tỉ số mô tả số lần lặp lại của một khả năng)

**nang-cao** (90 phút, thi vào lớp 6 chất lượng cao)
- 01-tinh-nhanh: Tính nhanh với phân số và số thập phân
- 02-cau-tao-so: Cấu tạo số tự nhiên, số thập phân (dịch dấu phẩy, thêm hoặc bớt chữ số)
- 03-chia-het-dirichlet: Chia hết, chia có dư, nguyên lý Dirichlet
- 04-phan-so-nang-cao: Phân số nâng cao (tổng dãy phân số, so sánh, phân số bằng nhau)
- 05-tong-ti-hieu-ti: Tổng tỉ, hiệu tỉ và bài toán tuổi nâng cao
- 06-phan-tram-nang-cao: Tỉ số phần trăm nâng cao (mua bán lãi lỗ, lãi suất, nồng độ dung dịch, hạt khô hạt tươi)
- 07-chuyen-dong: Chuyển động (ngược chiều, cùng chiều, trên dòng nước, kim đồng hồ, chuyển động có nghỉ)
- 08-cong-viec-chung: Công việc chung, vòi nước và đại lượng tỉ lệ
- 09-dien-tich: Hình học: diện tích (tỉ số diện tích tam giác chung đáy hoặc chung đường cao; hình thang; hình tròn; hình ghép)
- 10-logic-to-hop: Logic, đếm, tổ hợp (giả thiết tạm, suy luận, đếm số cách, trò chơi)

### Lớp 6
**co-ban** (90 phút)
- 01-tap-hop-so-tu-nhien: Tập hợp và số tự nhiên (tập hợp, lũy thừa với số mũ tự nhiên, thứ tự thực hiện phép tính)
- 02-chia-het-uoc-boi: Tính chia hết, số nguyên tố, ước chung lớn nhất, bội chung nhỏ nhất
- 03-so-nguyen: Số nguyên (các phép tính, quy tắc dấu ngoặc, chia hết trong tập số nguyên)
- 04-hinh-phang-thuc-tien: Các hình phẳng trong thực tiễn (tam giác đều, hình vuông, lục giác đều, hình chữ nhật, hình thoi, hình bình hành, hình thang cân; chu vi, diện tích)
- 05-doi-xung: Tính đối xứng của hình phẳng (đối xứng trục, đối xứng tâm)
- 06-phan-so: Phân số (phân số bằng nhau, so sánh, các phép tính, hỗn số)
- 07-hai-bai-toan-phan-so: Hai bài toán về phân số (tìm giá trị phân số của một số; tìm một số khi biết giá trị một phân số của nó)
- 08-so-thap-phan-phan-tram: Số thập phân, làm tròn, ước lượng, tỉ số và tỉ số phần trăm
- 09-hinh-hoc-co-ban: Những hình hình học cơ bản (điểm, đường thẳng, đoạn thẳng, tia, trung điểm, góc, số đo góc)
- 10-du-lieu-xac-suat: Dữ liệu và xác suất thực nghiệm (bảng, biểu đồ tranh, biểu đồ cột, cột kép; xác suất thực nghiệm)

**nang-cao** (120 phút, HSG cấp huyện)
- 01-tap-hop-day-so: Tập hợp, đếm số phần tử, dãy số và tổng dãy
- 02-luy-thua: Lũy thừa (so sánh lũy thừa, tìm số mũ, chữ số tận cùng)
- 03-chia-het: Chia hết (dấu hiệu, tính chất, chứng minh chia hết, tìm chữ số)
- 04-nguyen-to-chinh-phuong: Số nguyên tố, hợp số, số chính phương
- 05-ucln-bcnn: Ước chung lớn nhất, bội chung nhỏ nhất nâng cao (tìm hai số biết ƯCLN, BCNN; bài toán thực tế)
- 06-so-nguyen: Số nguyên nâng cao (tính tổng, tìm $x$, tìm số nguyên để biểu thức là số nguyên)
- 07-phan-so-nang-cao: Phân số nâng cao (tổng dãy phân số, so sánh, phân số tối giản)
- 08-toan-co-loi-van: Toán có lời văn (phân số, phần trăm, chuyển động, năng suất)
- 09-hinh-hoc: Hình học (đoạn thẳng, tia, góc, tia phân giác; đếm đoạn thẳng, góc, tam giác)
- 10-to-hop-logic: Tổ hợp, Dirichlet, suy luận logic

### Lớp 7
**co-ban** (90 phút)
- 01-so-huu-ti: Số hữu tỉ (các phép tính, lũy thừa, thứ tự thực hiện phép tính, quy tắc chuyển vế)
- 02-so-thuc: Số thực (số thập phân vô hạn tuần hoàn, số vô tỉ, căn bậc hai số học, giá trị tuyệt đối, làm tròn)
- 03-goc-song-song: Góc và đường thẳng song song (góc đối đỉnh, góc kề bù, tia phân giác; dấu hiệu, tiên đề Euclid; định lý và chứng minh)
- 04-tam-giac-bang-nhau: Tam giác bằng nhau (tổng ba góc; ba trường hợp bằng nhau; tam giác vuông; tam giác cân; đường trung trực)
- 05-thong-ke-xac-suat: Thống kê và xác suất (thu thập, phân loại dữ liệu; biểu đồ hình quạt, biểu đồ đoạn thẳng; biến cố; xác suất của biến cố)
- 06-ti-le-thuc: Tỉ lệ thức và dãy tỉ số bằng nhau
- 07-dai-luong-ti-le: Đại lượng tỉ lệ thuận, đại lượng tỉ lệ nghịch
- 08-bieu-thuc-da-thuc: Biểu thức đại số và đa thức một biến (cộng, trừ, nhân, chia; nghiệm của đa thức)
- 09-quan-he-tam-giac: Quan hệ giữa các yếu tố trong tam giác (góc và cạnh đối diện; đường vuông góc, đường xiên; bất đẳng thức tam giác; trung tuyến, phân giác, trung trực, đường cao đồng quy)
- 10-hinh-khoi: Một số hình khối trong thực tiễn (hình hộp chữ nhật, hình lập phương, lăng trụ đứng tam giác, lăng trụ đứng tứ giác)

**nang-cao** (120 phút, HSG cấp huyện)
- 01-so-huu-ti-luy-thua: Số hữu tỉ, lũy thừa, tổng dãy
- 02-gia-tri-tuyet-doi: Giá trị tuyệt đối (tìm $x$, giá trị lớn nhất và nhỏ nhất)
- 03-ti-le-thuc: Tỉ lệ thức, dãy tỉ số bằng nhau nâng cao
- 04-dai-luong-ti-le: Đại lượng tỉ lệ, chia tỉ lệ, toán chuyển động và năng suất
- 05-da-thuc: Đa thức một biến (nghiệm, tìm hệ số, giá trị đa thức, đa thức thỏa điều kiện)
- 06-so-hoc: Số học (chia hết, số nguyên tố, số chính phương, chữ số tận cùng)
- 07-tim-so-nguyen: Tìm số nguyên $x, y$ (phương trình nghiệm nguyên đơn giản, đưa về dạng tích)
- 08-tam-giac-bang-nhau: Tam giác bằng nhau, tam giác cân, tam giác đều nâng cao (kẻ thêm đường phụ)
- 09-quan-he-tam-giac: Quan hệ trong tam giác, bất đẳng thức hình học, điểm đồng quy, định lý Pythagore (tham khảo, vì GDPT 2018 đã chuyển sang lớp 8)
- 10-to-hop-xac-suat: Tổ hợp, Dirichlet, xác suất, logic

### Lớp 10
**co-ban** (90 phút)
- 01-menh-de-tap-hop: Mệnh đề và tập hợp
- 02-bat-phuong-trinh-bac-nhat-hai-an: Bất phương trình và hệ bất phương trình bậc nhất hai ẩn (miền nghiệm; bài toán tối ưu thực tế)
- 03-he-thuc-luong-tam-giac: Hệ thức lượng trong tam giác (giá trị lượng giác của góc từ $0^\circ$ đến $180^\circ$; định lý côsin, định lý sin; giải tam giác; diện tích)
- 04-vecto: Vectơ (tổng, hiệu, tích với một số, tích vô hướng)
- 05-so-dac-trung: Các số đặc trưng của mẫu số liệu không ghép nhóm (số gần đúng, sai số; số trung bình, trung vị, tứ phân vị, mốt; khoảng biến thiên, phương sai, độ lệch chuẩn)
- 06-ham-so-bac-hai: Hàm số, đồ thị và hàm số bậc hai
- 07-tam-thuc-bac-hai: Dấu của tam thức bậc hai, bất phương trình bậc hai, phương trình quy về bậc hai
- 08-dai-so-to-hop: Đại số tổ hợp (quy tắc cộng, quy tắc nhân; hoán vị, chỉnh hợp, tổ hợp; nhị thức Newton với $n \le 5$)
- 09-toa-do-phang: Phương pháp tọa độ trong mặt phẳng (tọa độ vectơ, đường thẳng, đường tròn, ba đường conic)
- 10-xac-suat-co-dien: Tính xác suất theo định nghĩa cổ điển

**nang-cao** (180 phút, HSG cấp tỉnh lớp 10)
- 01-phuong-trinh-he: Phương trình và hệ phương trình (vô tỉ, đối xứng, đẳng cấp, ẩn phụ)
- 02-bat-dang-thuc: Bất đẳng thức (AM-GM, Cauchy-Schwarz, SOS, dồn biến đơn giản)
- 03-ham-so-bac-hai-tham-so: Hàm số bậc hai và bài toán tham số (cực trị trên đoạn, biện luận số nghiệm)
- 04-so-hoc: Số học (đồng dư, định lý Fermat nhỏ, phương trình nghiệm nguyên)
- 05-da-thuc: Đa thức (định lý Bézout, Viète, đa thức hệ số nguyên)
- 06-vecto-he-thuc-luong: Vectơ và hệ thức lượng nâng cao (tâm tỉ cự, đẳng thức vectơ, bất đẳng thức hình học)
- 07-hinh-hoc-phang: Hình học phẳng (tứ giác nội tiếp, phương tích, trục đẳng phương, đường thẳng Simson, Euler)
- 08-toa-do-oxy: Hình học tọa độ Oxy (bài toán HSG: dùng tính chất hình học để tìm tọa độ)
- 09-to-hop: Tổ hợp (đếm nâng cao, song ánh, bù trừ, Dirichlet, bất biến)
- 10-phuong-trinh-ham-quy-nap: Quy nạp toán học và phương trình hàm đơn giản

### Lớp 11
**co-ban** (90 phút)
- 01-luong-giac: Giá trị lượng giác của góc lượng giác và công thức lượng giác
- 02-ham-so-phuong-trinh-luong-giac: Hàm số lượng giác và phương trình lượng giác
- 03-day-so-cap-so: Dãy số, cấp số cộng, cấp số nhân
- 04-mau-so-lieu-ghep-nhom: Các số đặc trưng của mẫu số liệu ghép nhóm (trung bình, trung vị, tứ phân vị, mốt)
- 05-quan-he-song-song: Đường thẳng và mặt phẳng; quan hệ song song trong không gian; phép chiếu song song
- 06-gioi-han-lien-tuc: Giới hạn của dãy số, của hàm số; hàm số liên tục
- 07-mu-logarit: Hàm số mũ và hàm số lôgarit (phương trình, bất phương trình mũ và lôgarit)
- 08-quan-he-vuong-goc: Quan hệ vuông góc trong không gian (góc, khoảng cách, thể tích khối chóp và lăng trụ)
- 09-quy-tac-xac-suat: Các quy tắc tính xác suất (biến cố hợp, giao, độc lập; quy tắc cộng, quy tắc nhân)
- 10-dao-ham: Đạo hàm (định nghĩa, quy tắc tính, đạo hàm cấp hai, tiếp tuyến, ý nghĩa vật lý)

**nang-cao** (180 phút, HSG cấp tỉnh lớp 11)
- 01-luong-giac-nang-cao: Lượng giác nâng cao (phương trình lượng giác khó, hệ thức trong tam giác)
- 02-day-so-truy-hoi: Dãy số truy hồi (quy nạp, sai phân, công thức tổng quát của dãy truy hồi tuyến tính)
- 03-gioi-han-day-so: Giới hạn dãy số (đơn điệu và bị chặn, nguyên lý kẹp, dãy $u_{n+1} = f(u_n)$)
- 04-ham-lien-tuc-dao-ham: Hàm liên tục và đạo hàm (chứng minh phương trình có nghiệm; ứng dụng đạo hàm ở mức lớp 11)
- 05-mu-logarit-nang-cao: Mũ và lôgarit nâng cao (phương trình, bất phương trình, so sánh)
- 06-bat-dang-thuc: Bất đẳng thức nâng cao
- 07-so-hoc: Số học nâng cao (đồng dư, cấp của phần tử, định lý Euler, phương trình nghiệm nguyên)
- 08-to-hop-xac-suat: Tổ hợp và xác suất nâng cao (đếm, nhị thức Newton, xác suất có tính toán phức tạp)
- 09-hinh-hoc-phang: Hình học phẳng nâng cao (phép biến hình: tịnh tiến, quay, vị tự; đường tròn)
- 10-hinh-khong-gian: Hình học không gian nâng cao (thiết diện, góc, khoảng cách, cực trị)

### Lớp 12
**co-ban** (90 phút, thi tốt nghiệp THPT)
- 01-don-dieu-cuc-tri: Tính đơn điệu và cực trị của hàm số
- 02-khao-sat-ham-so: Giá trị lớn nhất, nhỏ nhất; tiệm cận; khảo sát và vẽ đồ thị; bài toán thực tế
- 03-vecto-khong-gian: Vectơ và hệ trục tọa độ trong không gian
- 04-do-phan-tan: Các số đo mức độ phân tán của mẫu số liệu ghép nhóm (khoảng biến thiên, khoảng tứ phân vị, phương sai, độ lệch chuẩn)
- 05-nguyen-ham: Nguyên hàm
- 06-tich-phan: Tích phân và ứng dụng (diện tích hình phẳng, thể tích vật thể, bài toán thực tế)
- 07-mat-phang: Phương trình mặt phẳng
- 08-duong-thang-mat-cau: Phương trình đường thẳng và mặt cầu trong không gian
- 09-xac-suat-co-dieu-kien: Xác suất có điều kiện, công thức xác suất toàn phần, công thức Bayes
- 10-on-thi-tot-nghiep: Ôn tập trọng tâm lớp 10–11 cho thi tốt nghiệp (mũ và lôgarit, lượng giác, cấp số, hình không gian, xác suất)

**nang-cao** (180 phút, HSG cấp tỉnh lớp 12)
- 01-khao-sat-tham-so: Khảo sát hàm số nâng cao (tham số, tiếp tuyến, tương giao)
- 02-phuong-trinh-ham-don-dieu: Phương trình, bất phương trình, hệ phương trình giải bằng tính đơn điệu của hàm số
- 03-bat-dang-thuc-ham-so: Bất đẳng thức và cực trị bằng phương pháp hàm số
- 04-day-so-gioi-han: Dãy số và giới hạn (HSG lớp 12)
- 05-tich-phan-nang-cao: Tích phân nâng cao (đổi biến, từng phần, tích phân hàm ẩn, bất đẳng thức tích phân)
- 06-mu-logarit-nang-cao: Mũ và lôgarit nâng cao
- 07-hinh-khong-gian: Hình học không gian (thể tích, khoảng cách, cực trị hình học)
- 08-toa-do-oxyz: Tọa độ Oxyz nâng cao (cực trị, vị trí tương đối, bài toán mặt cầu)
- 09-to-hop-xac-suat: Tổ hợp và xác suất nâng cao
- 10-so-hoc-da-thuc: Số học và đa thức

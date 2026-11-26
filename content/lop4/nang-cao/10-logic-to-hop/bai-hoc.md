# Chủ đề 10. Suy luận logic và tổ hợp

> Đây là phần "toán tư duy" của đề thi: bài toán trồng cây, đếm số cách, nguyên lý Dirichlet (chuồng thỏ), suy luận đúng sai và điền ô số. Các bài này ít dùng phép tính phức tạp, nhưng đòi hỏi suy nghĩ có thứ tự và trình bày lập luận rõ ràng.

## I. Kiến thức cần nắm

### 1. Bài toán trồng cây

Trên một đoạn đường dài $L$, trồng cây cách đều nhau $d$. Số **khoảng cách** là $L : d$.

| Trường hợp | Số cây |
|---|---|
| Trồng ở **cả hai đầu** | số khoảng $+ 1$ |
| Trồng ở **một đầu** | số khoảng |
| **Không** trồng ở hai đầu | số khoảng $- 1$ |
| Đường **khép kín** (quanh hồ, quanh vườn) | số khoảng |

Cùng một ý tưởng: cưa khúc gỗ thành $n$ đoạn cần $n - 1$ nhát cưa; đồng hồ đánh $n$ tiếng chuông có $n - 1$ khoảng nghỉ; leo từ tầng 1 lên tầng $n$ phải đi $n - 1$ tầng cầu thang.

### 2. Quy tắc đếm

- **Quy tắc nhân:** việc làm qua nhiều bước, bước 1 có $a$ cách, bước 2 có $b$ cách (với mỗi cách ở bước 1), thì cả việc có $a \times b$ cách.
- **Lập số có các chữ số khác nhau** từ 4 chữ số khác 0: chữ số hàng trăm có 4 cách chọn, hàng chục 3 cách, hàng đơn vị 2 cách: $4 \times 3 \times 2 = 24$ số.
- **Bắt tay, thi đấu vòng tròn:** $n$ người, mỗi hai người bắt tay một lần: $(n - 1) + (n - 2) + \dots + 1$ cái bắt tay (giống đếm đoạn thẳng).

**Mẹo:** liệt kê có thứ tự bằng **sơ đồ cây** để không sót, không trùng.

### 3. Nguyên lý Dirichlet (chuồng thỏ)

Nhốt nhiều thỏ vào ít chuồng:
- Nhốt $n + 1$ con thỏ vào $n$ chuồng thì có ít nhất một chuồng chứa **từ 2 con trở lên**.
- Nhốt hơn $2 \times n$ con thỏ vào $n$ chuồng thì có chuồng chứa từ 3 con trở lên.

*Vì sao:* nếu mỗi chuồng có không quá 1 con thì $n$ chuồng chỉ chứa nhiều nhất $n$ con, ít hơn số thỏ.

**Bài toán "lấy ra ít nhất bao nhiêu để chắc chắn":** xét **trường hợp xấu nhất** (lấy được nhiều nhất mà vẫn chưa đạt yêu cầu), rồi cộng thêm 1.

### 4. Suy luận logic

- **Lập bảng** (hàng là người, cột là đặc điểm). Đánh dấu ✗ những ô chắc chắn sai. Hàng hoặc cột nào chỉ còn một ô thì ô đó đúng.
- **Bài toán đúng sai:** giả sử từng trường hợp, kiểm tra xem có khớp điều kiện (chẳng hạn "chỉ một bạn nói đúng") không. Trường hợp nào không mâu thuẫn là đáp án.

### 5. Ô số (ma phương)

Điền các số vào bảng sao cho tổng mỗi hàng, mỗi cột (mỗi đường chéo) bằng nhau.
- Tổng mỗi hàng $=$ tổng tất cả các số $:$ số hàng.
- Với bảng $3 \times 3$ điền 1 đến 9: mỗi hàng có tổng $45 : 3 = 15$, ô giữa luôn là 5.

### 6. Sai lầm hay gặp

- Trồng cây quanh vườn (khép kín) mà vẫn cộng 1.
- Cưa gỗ thành 6 đoạn mà tính 6 nhát cưa.
- Bài Dirichlet "chắc chắn" mà quên cộng 1 sau trường hợp xấu nhất.
- Bài đếm mà đếm trùng: bắt tay A với B và B với A là **một** lần.

## II. Bài tập vận dụng

**Bài 1 (trồng cây).** Một con đường dài 100 m. Người ta trồng cây ở một bên đường, cây nọ cách cây kia 5 m, hai đầu đường đều có cây. Hỏi trồng tất cả bao nhiêu cây?

**Bài 2 (đường khép kín).** Một khu vườn hình vuông cạnh 20 m. Người ta chôn cột rào xung quanh vườn, cột nọ cách cột kia 4 m. Hỏi cần bao nhiêu cột?

**Bài 3 (cưa gỗ).** Một khúc gỗ dài 12 m được cưa thành các đoạn dài 2 m. Mỗi lần cưa hết 3 phút. Hỏi cưa xong khúc gỗ hết bao nhiêu phút?

**Bài 4 (lập số).** Từ bốn chữ số 1, 2, 3, 4 có thể lập được bao nhiêu số có ba chữ số khác nhau?

**Bài 5 (bắt tay).** Trong một buổi gặp mặt có 6 người, mỗi người đều bắt tay một lần với từng người còn lại. Hỏi có tất cả bao nhiêu cái bắt tay?

**Bài 6 (Dirichlet).** Lớp 4A có 30 học sinh. Chứng tỏ rằng có ít nhất 3 bạn có sinh nhật trong cùng một tháng.

**Bài 7 (trường hợp xấu nhất).** Một hộp có 5 bi đỏ, 7 bi xanh và 4 bi vàng. Không nhìn vào hộp, phải lấy ra ít nhất bao nhiêu viên bi để chắc chắn:
a) có 2 viên bi cùng màu? b) có 3 viên bi màu đỏ?

**Bài 8 (lập bảng).** Ba bạn An, Bình, Chi mặc ba áo màu đỏ, xanh, vàng (mỗi bạn một màu khác nhau). An không mặc áo đỏ. Bình không mặc áo đỏ và cũng không mặc áo xanh. Hỏi mỗi bạn mặc áo màu gì?

**Bài 9 (đúng sai).** Một trong ba bạn An, Bình, Chi đã ăn chiếc bánh trên bàn. Cô giáo hỏi thì:
- An nói: "Bình ăn."
- Bình nói: "Em không ăn."
- Chi nói: "Em không ăn."

Biết rằng chỉ có đúng một bạn nói thật. Hỏi ai đã ăn bánh?

**Bài 10 (ô số).** Điền các số từ 1 đến 9 vào bảng $3 \times 3$ ô, mỗi ô một số, sao cho tổng ba số trên mỗi hàng, mỗi cột và mỗi đường chéo đều bằng nhau.
a) Tổng đó bằng bao nhiêu? b) Chứng tỏ số ở ô chính giữa phải là 5. c) Hãy điền một cách.

**Bài 11 (cân thăng bằng).** Có 9 đồng xu giống hệt nhau, trong đó có 1 đồng xu giả nhẹ hơn các đồng xu thật. Dùng một chiếc cân đĩa (không có quả cân), làm thế nào chỉ cân 2 lần mà tìm ra đồng xu giả?

**Bài 12 (trồng cây hai bên đường).** Một con đường dài 200 m. Người ta trồng cây ở cả hai bên đường, cây nọ cách cây kia 10 m, các đầu đường đều có cây. Hỏi trồng tất cả bao nhiêu cây?

**Bài 13 (đồng hồ đánh chuông).** Một chiếc đồng hồ lúc 3 giờ đánh 3 tiếng chuông, hết 6 giây (tính từ tiếng đầu đến tiếng cuối). Hỏi lúc 6 giờ, đồng hồ đánh 6 tiếng chuông hết bao nhiêu giây?

**Bài 14 (thi đấu).** Có 10 đội bóng thi đấu vòng tròn một lượt (mỗi đội gặp mỗi đội khác đúng một trận). Hỏi có tất cả bao nhiêu trận đấu?

---

## III. Lời giải chi tiết

### Bài 1
Số khoảng cách: $100 : 5 = 20$ (khoảng). Hai đầu đều có cây nên số cây là $20 + 1 = 21$ (cây).

**Đáp số:** 21 cây.

### Bài 2
Chu vi vườn: $20 \times 4 = 80$ (m). Số khoảng cách: $80 : 4 = 20$.
Đường khép kín nên số cột bằng số khoảng cách: 20 cột.

**Đáp số:** 20 cột.

### Bài 3
Số đoạn gỗ: $12 : 2 = 6$ (đoạn). Cưa thành 6 đoạn cần $6 - 1 = 5$ (nhát cưa).
Thời gian: $3 \times 5 = 15$ (phút).

**Đáp số:** 15 phút.

### Bài 4
Chữ số hàng trăm có 4 cách chọn. Với mỗi cách đó, chữ số hàng chục có 3 cách (khác chữ số hàng trăm). Chữ số hàng đơn vị có 2 cách (khác hai chữ số đã chọn).
Số các số: $4 \times 3 \times 2 = 24$ (số).

**Đáp số:** 24 số.

*Kiểm tra:* các số bắt đầu bằng 1 là 123, 124, 132, 134, 142, 143 (6 số). Bốn chữ số đầu, mỗi chữ số 6 số: $4 \times 6 = 24$.

### Bài 5
Người thứ nhất bắt tay 5 người còn lại. Người thứ hai bắt tay thêm 4 người (không tính người thứ nhất). Cứ như vậy:
$$5 + 4 + 3 + 2 + 1 = 15 \text{ (cái bắt tay)}.$$

**Đáp số:** 15 cái bắt tay.

*Cách khác:* mỗi người bắt tay 5 lần, 6 người được $6 \times 5 = 30$ lần, nhưng mỗi cái bắt tay được tính hai lần, nên có $30 : 2 = 15$.

### Bài 6
Một năm có 12 tháng. Giả sử mỗi tháng có nhiều nhất 2 bạn sinh nhật, thì cả lớp có nhiều nhất $12 \times 2 = 24$ bạn. Nhưng lớp có 30 bạn, nhiều hơn 24. Điều giả sử là sai.
Vậy có ít nhất một tháng có từ 3 bạn trở lên sinh nhật.

### Bài 7
a) Trường hợp xấu nhất: 3 viên đầu có ba màu khác nhau (1 đỏ, 1 xanh, 1 vàng). Viên thứ tư chắc chắn trùng màu với một viên đã lấy.
Cần lấy ít nhất $3 + 1 = 4$ (viên).

b) Trường hợp xấu nhất: lấy hết 7 bi xanh, hết 4 bi vàng và 2 bi đỏ mà vẫn chưa đủ 3 bi đỏ: $7 + 4 + 2 = 13$ (viên). Viên tiếp theo chắc chắn là bi đỏ thứ ba.
Cần lấy ít nhất $13 + 1 = 14$ (viên).

**Đáp số:** a) 4 viên; b) 14 viên.

### Bài 8
Lập bảng, đánh dấu ✗ vào ô sai:

| | Đỏ | Xanh | Vàng |
|---|---|---|---|
| An | ✗ | ✓ | ✗ |
| Bình | ✗ | ✗ | ✓ |
| Chi | ✓ | ✗ | ✗ |

Bình không mặc đỏ, không mặc xanh, nên Bình mặc **vàng**.
An không mặc đỏ, mà vàng đã là của Bình, nên An mặc **xanh**.
Chi mặc màu còn lại: **đỏ**.

**Đáp số:** An áo xanh, Bình áo vàng, Chi áo đỏ.

### Bài 9
Xét từng trường hợp:
- Nếu An ăn: An nói sai, Bình nói thật, Chi nói thật. Có 2 bạn nói thật, loại.
- Nếu Bình ăn: An nói thật, Bình nói sai, Chi nói thật. Có 2 bạn nói thật, loại.
- Nếu Chi ăn: An nói sai, Bình nói thật, Chi nói sai. Có đúng 1 bạn nói thật, đúng điều kiện.

**Đáp số:** Chi ăn bánh.

### Bài 10
a) Tổng các số từ 1 đến 9 là 45. Ba hàng có tổng bằng nhau và cộng lại bằng 45, nên mỗi hàng có tổng $45 : 3 = 15$.

b) Có 4 đường đi qua ô giữa: hàng giữa, cột giữa và hai đường chéo. Cộng 4 đường này được $15 \times 4 = 60$. Trong tổng đó, ô giữa được tính 4 lần, mỗi ô còn lại được tính đúng 1 lần. Tức là $60 = 45 + 3 \times (\text{số ở giữa})$, nên 3 lần số ở giữa bằng $60 - 45 = 15$, số ở giữa là 5.

c) Một cách điền:

| 2 | 7 | 6 |
|---|---|---|
| 9 | 5 | 1 |
| 4 | 3 | 8 |

Kiểm tra: các hàng $2 + 7 + 6 = 9 + 5 + 1 = 4 + 3 + 8 = 15$; các cột $2 + 9 + 4 = 7 + 5 + 3 = 6 + 1 + 8 = 15$; hai đường chéo $2 + 5 + 8 = 6 + 5 + 4 = 15$.

### Bài 11
**Lần cân thứ nhất.** Chia 9 đồng xu thành 3 nhóm, mỗi nhóm 3 đồng. Đặt nhóm 1 lên đĩa trái, nhóm 2 lên đĩa phải.
- Nếu cân lệch thì đồng xu giả ở nhóm bên đĩa nhẹ hơn.
- Nếu cân thăng bằng thì đồng xu giả ở nhóm 3.

Như vậy sau lần thứ nhất, ta biết đồng xu giả nằm trong 3 đồng nào.

**Lần cân thứ hai.** Lấy 2 trong 3 đồng đó đặt lên hai đĩa, mỗi đĩa một đồng.
- Nếu cân lệch thì đồng ở đĩa nhẹ hơn là đồng giả.
- Nếu thăng bằng thì đồng còn lại (chưa cân) là đồng giả.

*Nhận xét:* mỗi lần cân có 3 khả năng (lệch trái, lệch phải, thăng bằng), nên chia làm 3 nhóm bằng nhau là cách tận dụng tốt nhất.

### Bài 12
Mỗi bên đường: số khoảng cách $200 : 10 = 20$, số cây $20 + 1 = 21$ (cây).
Hai bên đường: $21 \times 2 = 42$ (cây).

**Đáp số:** 42 cây.

### Bài 13
3 tiếng chuông có $3 - 1 = 2$ khoảng nghỉ, hết 6 giây, nên mỗi khoảng là $6 : 2 = 3$ (giây).
6 tiếng chuông có $6 - 1 = 5$ khoảng nghỉ: $3 \times 5 = 15$ (giây).

**Đáp số:** 15 giây.

*Lưu ý:* đáp số 12 giây là sai, vì thời gian tính theo số khoảng giữa các tiếng chuông, giống bài toán trồng cây.

### Bài 14
Đội thứ nhất đấu với 9 đội còn lại; đội thứ hai đấu thêm 8 trận mới; …
Số trận: $9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 = 45$ (trận).

**Đáp số:** 45 trận.

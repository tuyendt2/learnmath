# Chủ đề 8. Đại số tổ hợp

> Đại số tổ hợp dạy cách đếm có hệ thống: quy tắc cộng, quy tắc nhân, hoán vị, chỉnh hợp, tổ hợp và công thức nhị thức Newton. Đây là nền tảng cho phần xác suất cổ điển ngay sau đó và cho câu hỏi đếm trong đề thi tốt nghiệp.

## I. Kiến thức cần nắm

### 1. Quy tắc cộng và quy tắc nhân

- **Quy tắc cộng:** công việc thực hiện theo phương án A **hoặc** B (không trùng nhau), A có $m$ cách, B có $n$ cách: tổng $m + n$ cách.
- **Quy tắc nhân:** công việc gồm hai công đoạn liên tiếp, công đoạn 1 có $m$ cách, mỗi cách đó công đoạn 2 có $n$ cách: tổng $m \cdot n$ cách.
- **Sơ đồ cây** giúp liệt kê có hệ thống.

### 2. Hoán vị, chỉnh hợp, tổ hợp

- **Hoán vị** $n$ phần tử (sắp xếp tất cả): $P_n = n! = n(n - 1)\cdots 1$.
- **Chỉnh hợp** chập $k$ của $n$ (chọn $k$ phần tử **có thứ tự**): $A_n^k = \dfrac{n!}{(n - k)!}$.
- **Tổ hợp** chập $k$ của $n$ (chọn $k$ phần tử **không kể thứ tự**): $C_n^k = \dfrac{n!}{k!(n - k)!}$.
- Tính chất: $C_n^k = C_n^{n - k}$; $C_n^{k - 1} + C_n^k = C_{n + 1}^k$.

**Phân biệt:** đổi chỗ các phần tử được chọn mà cho kết quả khác (vị trí, chức vụ, số) thì dùng chỉnh hợp; không khác (nhóm, đội, tập hợp) thì dùng tổ hợp.

### 3. Đếm bằng phần bù

"Có ít nhất một…": đếm tất cả rồi trừ đi số cách "không có cái nào".

### 4. Nhị thức Newton ($n \le 5$)

$$(a + b)^n = C_n^0a^n + C_n^1a^{n - 1}b + \dots + C_n^nb^n.$$
- $(a + b)^4 = a^4 + 4a^3b + 6a^2b^2 + 4ab^3 + b^4$.
- $(a + b)^5 = a^5 + 5a^4b + 10a^3b^2 + 10a^2b^3 + 5ab^4 + b^5$.
- Số hạng tổng quát: $C_n^k a^{n - k} b^k$.

### 5. Sai lầm hay gặp

- Dùng tổ hợp cho bài có thứ tự (chọn lớp trưởng, lớp phó).
- Lập số có chữ số 0 mà để 0 đứng đầu.
- Tìm hệ số mà quên dấu và lũy thừa của hệ số trong ngoặc ($(2x)^3 = 8x^3$).

## II. Bài tập vận dụng

**Bài 1.** Một quán ăn có 3 món chính, 4 món tráng miệng và 2 loại đồ uống. Một suất ăn gồm 1 món chính, 1 món tráng miệng, 1 đồ uống. Có bao nhiêu cách chọn suất ăn?

**Bài 2.** Từ A đến B có 3 con đường, từ B đến C có 4 con đường, ngoài ra có 2 con đường đi thẳng từ A đến C không qua B. Có bao nhiêu cách đi từ A đến C?

**Bài 3.** Có bao nhiêu cách xếp 6 bạn thành một hàng ngang?

**Bài 4.** Lớp có 30 học sinh. Có bao nhiêu cách chọn một lớp trưởng, một lớp phó và một thủ quỹ (ba bạn khác nhau)?

**Bài 5.** Có bao nhiêu cách chọn 4 bạn từ 10 bạn để lập một đội?

**Bài 6.** Từ các chữ số 0, 1, 2, …, 9 lập được bao nhiêu số có bốn chữ số khác nhau? Bao nhiêu số trong đó là số chẵn?

**Bài 7.** Một nhóm có 5 nam và 4 nữ. Có bao nhiêu cách chọn 3 người sao cho có ít nhất 1 nữ?

**Bài 8.** Khai triển $(x + 2)^4$.

**Bài 9.** Tìm hệ số của $x^3$ trong khai triển $(2x - 1)^5$.

**Bài 10.** Một đa giác lồi có 10 cạnh có bao nhiêu đường chéo?

**Bài 11 (vận dụng cao).** Có bao nhiêu cách xếp 3 nam và 3 nữ thành một hàng ngang sao cho nam và nữ đứng xen kẽ?

**Bài 12 (vận dụng cao).** Từ các chữ số 0, 1, 2, 3, 4, 5 lập được bao nhiêu số có ba chữ số khác nhau chia hết cho 5?

**Bài 13 (vận dụng cao).** Dùng nhị thức Newton, tính $(1 + \sqrt{2})^4 + (1 - \sqrt{2})^4$.

---

## III. Lời giải chi tiết

### Bài 1
$3 \cdot 4 \cdot 2 = 24$ (cách).

### Bài 2
Qua B: $3 \cdot 4 = 12$ cách; đi thẳng: 2 cách. Tổng: 14 cách.

### Bài 3
$6! = 720$ (cách).

### Bài 4
Chọn có thứ tự: $A_{30}^3 = 30 \cdot 29 \cdot 28 = 24\,360$ (cách).

### Bài 5
$C_{10}^4 = \dfrac{10 \cdot 9 \cdot 8 \cdot 7}{24} = 210$ (cách).

### Bài 6
Chữ số đầu: 9 cách (khác 0); ba chữ số sau: $9 \cdot 8 \cdot 7$. Tổng: $9 \cdot 9 \cdot 8 \cdot 7 = 4\,536$ số.
Số chẵn: tận cùng 0: $9 \cdot 8 \cdot 7 = 504$; tận cùng 2, 4, 6, 8: $4 \cdot 8 \cdot 8 \cdot 7 = 1\,792$ (chữ số đầu có 8 cách: khác 0 và khác chữ số cuối). Tổng: $2\,296$ số.

### Bài 7
Tất cả: $C_9^3 = 84$. Không có nữ (toàn nam): $C_5^3 = 10$. Có ít nhất 1 nữ: $84 - 10 = 74$ (cách).

### Bài 8
$(x + 2)^4 = x^4 + 4 \cdot 2x^3 + 6 \cdot 4x^2 + 4 \cdot 8x + 16 = x^4 + 8x^3 + 24x^2 + 32x + 16$.

### Bài 9
Số hạng chứa $x^3$: $C_5^2(2x)^3(-1)^2 = 10 \cdot 8x^3 = 80x^3$. Hệ số: 80.

### Bài 10
Mỗi cặp đỉnh cho một đoạn thẳng: $C_{10}^2 = 45$; trừ 10 cạnh: 35 đường chéo.

### Bài 11
Có 2 kiểu xen kẽ (nam đứng đầu hoặc nữ đứng đầu); mỗi kiểu xếp 3 nam vào 3 chỗ ($3!$) và 3 nữ vào 3 chỗ ($3!$). Tổng: $2 \cdot 6 \cdot 6 = 72$ (cách).

### Bài 12
Tận cùng 0: $5 \cdot 4 = 20$ số. Tận cùng 5: chữ số đầu khác 0 và 5 (4 cách), chữ số giữa 4 cách: 16 số. Tổng: 36 số.

### Bài 13
$(1 + \sqrt{2})^4 = 1 + 4\sqrt{2} + 6 \cdot 2 + 4 \cdot 2\sqrt{2} + 4$, $(1 - \sqrt{2})^4 = 1 - 4\sqrt{2} + 12 - 8\sqrt{2} + 4$. Cộng lại, các số hạng chứa $\sqrt{2}$ triệt tiêu: $2(1 + 12 + 4) = 34$.

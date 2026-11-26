# Chủ đề 7. Tìm số nguyên x, y

> Bài "tìm các số nguyên $x, y$ thỏa mãn…" (phương trình nghiệm nguyên) có mặt trong hầu hết đề học sinh giỏi lớp 7. Ở mức lớp 7, các phương pháp chính là: **đưa về dạng tích**, **xét ước**, **giới hạn miền giá trị** (đánh giá) và **xét tính chẵn lẻ, số dư**.

## I. Kiến thức cần nắm

### 1. Đưa về dạng tích bằng hằng số

Biến đổi phương trình về dạng $A \cdot B = c$ ($A, B$ là biểu thức nguyên, $c$ là hằng số), rồi xét các cặp ước $(A, B)$ của $c$, **kể cả ước âm**.

**Mẹo thêm bớt:** $xy + ax + by = c$ viết thành $(x + b)(y + a) = c + ab$.

**Ví dụ.** $xy + 3x - 2y = 11 \Leftrightarrow x(y + 3) - 2(y + 3) = 11 - 6 \Leftrightarrow (x - 2)(y + 3) = 5$.

### 2. Phương trình bậc nhất hai ẩn $ax + by = c$ với nghiệm tự nhiên

Rút một ẩn theo ẩn kia, dùng điều kiện chia hết và điều kiện không âm để thử các giá trị có thể.

### 3. Phương trình chứa phân số

Quy đồng, khử mẫu để đưa về dạng tích. Với $\dfrac{1}{x} + \dfrac{1}{y} = \dfrac{1}{k}$ (nghiệm nguyên dương): giả sử $x \le y$ thì $\dfrac{1}{k} \le \dfrac{2}{x}$, nên $x \le 2k$; lại có $x > k$. Thử các giá trị $x$ trong khoảng đó.

### 4. Đánh giá (giới hạn miền giá trị)

- $x^2 + y^2 = c$: mỗi bình phương không vượt quá $c$, thử các giá trị.
- $x + y + z = xyz$ (nguyên dương): giả sử $x \le y \le z$ thì $xyz \le 3z$, nên $xy \le 3$.

### 5. Hiệu hai bình phương, lũy thừa

$x^2 - y^2 = (x - y)(x + y)$. Hai thừa số cùng tính chẵn lẻ.
$2^x = (y - 1)(y + 1)$: hai thừa số đều là lũy thừa của 2 và hơn kém nhau 2.

### 6. Sai lầm hay gặp

- Chỉ lấy ước dương.
- Quên điều kiện (mẫu khác 0, nghiệm tự nhiên hay nguyên dương).
- Kết luận thiếu nghiệm do giả sử $x \le y$ mà quên hoán vị lại.

## II. Bài tập vận dụng

**Bài 1.** Tìm các cặp số nguyên $(x; y)$ thỏa mãn $xy = 6$.

**Bài 2.** Tìm các cặp số nguyên $(x; y)$ thỏa mãn $(x - 2)(y + 1) = 7$.

**Bài 3.** Tìm các cặp số nguyên $(x; y)$ thỏa mãn $xy + 3x - 2y = 11$.

**Bài 4.** Tìm các cặp số tự nhiên $(x; y)$ thỏa mãn $2x + 3y = 12$.

**Bài 5.** Tìm các cặp số tự nhiên $(x; y)$ thỏa mãn $3x + 5y = 31$.

**Bài 6.** Tìm các cặp số nguyên $(x; y)$ thỏa mãn $\dfrac{x}{3} - \dfrac{2}{y} = \dfrac{1}{3}$.

**Bài 7.** Tìm các cặp số nguyên dương $(x; y)$ thỏa mãn $\dfrac{1}{x} + \dfrac{1}{y} = \dfrac{1}{2}$.

**Bài 8.** Có bao nhiêu cặp số nguyên $(x; y)$ thỏa mãn $\lvert x\rvert + \lvert y\rvert = 3$?

**Bài 9.** Tìm các số tự nhiên $x, y$ thỏa mãn $x^2 - y^2 = 15$.

**Bài 10.** Tìm các cặp số nguyên $(x; y)$ thỏa mãn $x^2 + y^2 = 25$.

**Bài 11.** Tìm số nguyên $x$ để $\dfrac{2x + 5}{x - 1}$ là số nguyên.

**Bài 12.** Tìm các cặp số nguyên $(x; y)$ thỏa mãn $x + y = xy$.

**Bài 13 (khó).** Tìm các số tự nhiên $x, y$ thỏa mãn $2^x + 1 = y^2$.

**Bài 14 (khó).** Tìm các bộ ba số nguyên dương $(x; y; z)$ thỏa mãn $x + y + z = xyz$.

---

## III. Lời giải chi tiết

### Bài 1
$6 = 1 \cdot 6 = 2 \cdot 3 = 3 \cdot 2 = 6 \cdot 1 = (-1)(-6) = (-2)(-3) = (-3)(-2) = (-6)(-1)$.

**Đáp số:** 8 cặp: $(1; 6), (2; 3), (3; 2), (6; 1), (-1; -6), (-2; -3), (-3; -2), (-6; -1)$.

### Bài 2
$(x - 2; y + 1) \in \{(1; 7), (7; 1), (-1; -7), (-7; -1)\}$.

**Đáp số:** $(3; 6)$, $(9; 0)$, $(1; -8)$, $(-5; -2)$.

### Bài 3
$(x - 2)(y + 3) = 5$. $(x - 2; y + 3) \in \{(1; 5), (5; 1), (-1; -5), (-5; -1)\}$.

**Đáp số:** $(3; 2)$, $(7; -2)$, $(1; -8)$, $(-3; -4)$.

### Bài 4
$2x = 12 - 3y \ge 0$ nên $y \le 4$, và $12 - 3y$ chẵn nên $y$ chẵn: $y \in \{0; 2; 4\}$.

**Đáp số:** $(6; 0)$, $(3; 2)$, $(0; 4)$.

### Bài 5
$3x = 31 - 5y \ge 0$ nên $y \le 6$; cần $31 - 5y$ chia hết cho 3. Thử $y = 0, \dots, 6$: $31 - 5y$ lần lượt là 31, 26, 21, 16, 11, 6, 1; chia hết cho 3 khi $y = 2$ ($x = 7$) và $y = 5$ ($x = 2$).

**Đáp số:** $(7; 2)$, $(2; 5)$.

### Bài 6
Điều kiện $y \ne 0$. $\dfrac{x - 1}{3} = \dfrac{2}{y}$, suy ra $y(x - 1) = 6$.
$(y; x - 1) \in \{(1; 6), (2; 3), (3; 2), (6; 1), (-1; -6), (-2; -3), (-3; -2), (-6; -1)\}$.

**Đáp số:** $(x; y) \in \{(7; 1), (4; 2), (3; 3), (2; 6), (-5; -1), (-2; -2), (-1; -3), (0; -6)\}$.

### Bài 7
Quy đồng: $2(x + y) = xy$, tức $xy - 2x - 2y + 4 = 4$, hay $(x - 2)(y - 2) = 4$.
$x, y$ nguyên dương nên $x - 2, y - 2 \ge -1$; tích bằng 4 nên hai thừa số cùng dương: $(1; 4), (2; 2), (4; 1)$.

**Đáp số:** $(3; 6)$, $(4; 4)$, $(6; 3)$.

### Bài 8
$\lvert x\rvert \in \{0; 1; 2; 3\}$.
- $\lvert x\rvert = 0$: $\lvert y\rvert = 3$, 2 cặp. $\lvert x\rvert = 3$: $\lvert y\rvert = 0$, 2 cặp.
- $\lvert x\rvert = 1$: $\lvert y\rvert = 2$, có $2 \cdot 2 = 4$ cặp. $\lvert x\rvert = 2$: $\lvert y\rvert = 1$, 4 cặp.

**Đáp số:** 12 cặp.

### Bài 9
$(x - y)(x + y) = 15$ với $0 \le x - y < x + y$: $(1; 15)$ hoặc $(3; 5)$.
- $x - y = 1$, $x + y = 15$: $x = 8$, $y = 7$.
- $x - y = 3$, $x + y = 5$: $x = 4$, $y = 1$.

**Đáp số:** $(8; 7)$, $(4; 1)$.

### Bài 10
$x^2 \le 25$ nên $\lvert x\rvert \le 5$. Thử: $x^2 \in \{0; 9; 16; 25\}$ cho $y^2 \in \{25; 16; 9; 0\}$ là số chính phương; các giá trị khác ($x^2 = 1$ hoặc $4$) cho $y^2 = 24$ hoặc $21$, không chính phương.

**Đáp số:** 12 cặp: $(0; \pm 5)$, $(\pm 5; 0)$, $(\pm 3; \pm 4)$, $(\pm 4; \pm 3)$.

### Bài 11
$\dfrac{2x + 5}{x - 1} = 2 + \dfrac{7}{x - 1}$. Cần $x - 1 \in \{\pm 1; \pm 7\}$.

**Đáp số:** $x \in \{2; 0; 8; -6\}$.

### Bài 12
$xy - x - y + 1 = 1$, tức $(x - 1)(y - 1) = 1$: $(1; 1)$ hoặc $(-1; -1)$.

**Đáp số:** $(2; 2)$, $(0; 0)$.

### Bài 13
$2^x = y^2 - 1 = (y - 1)(y + 1)$. Với $x = 0$: $y^2 = 2$, loại. Với $x \ge 1$: $y$ lẻ, $y - 1$ và $y + 1$ là hai số chẵn hơn kém nhau 2, tích là lũy thừa của 2, nên cả hai là lũy thừa của 2. Hai lũy thừa của 2 hơn kém nhau 2 chỉ có 2 và 4. Vậy $y = 3$, $2^x = 8$, $x = 3$.

**Đáp số:** $x = 3$, $y = 3$.

### Bài 14
Giả sử $x \le y \le z$. Khi đó $xyz = x + y + z \le 3z$, nên $xy \le 3$: $(x; y) \in \{(1; 1), (1; 2), (1; 3)\}$.
- $(1; 1)$: $2 + z = z$, vô lý.
- $(1; 2)$: $3 + z = 2z$, $z = 3$.
- $(1; 3)$: $4 + z = 3z$, $z = 2 < y$, trái giả sử (đây chính là bộ $(1; 2; 3)$ đã có).

**Đáp số:** bộ $(1; 2; 3)$ và các hoán vị của nó (6 bộ).

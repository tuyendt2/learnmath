# Chủ đề 6. Bất đẳng thức nâng cao

> Câu bất đẳng thức của đề học sinh giỏi lớp 11 đòi hỏi phối hợp nhiều công cụ: AM-GM với kỹ thuật chọn điểm rơi, Cauchy-Schwarz dạng Engel, kỹ thuật tiếp tuyến, dồn biến về một ẩn, bất đẳng thức lượng giác trong tam giác và đánh giá bằng nhị thức Newton.

## I. Kiến thức cần nắm

### 1. AM-GM và điểm rơi

$\dfrac{a_1 + \dots + a_n}{n} \ge \sqrt[n]{a_1\cdots a_n}$ ($a_i \ge 0$), dấu bằng khi các số bằng nhau. **Điểm rơi:** đoán trước giá trị các biến tại dấu bằng để tách, ghép hệ số phù hợp (ví dụ $a^2b = 4 \cdot \dfrac{a}{2} \cdot \dfrac{a}{2} \cdot b$).

### 2. Cauchy-Schwarz

- $(a_1^2 + \dots + a_n^2)(b_1^2 + \dots + b_n^2) \ge (a_1b_1 + \dots + a_nb_n)^2$.
- Dạng Engel: $\dfrac{x_1^2}{y_1} + \dots + \dfrac{x_n^2}{y_n} \ge \dfrac{(x_1 + \dots + x_n)^2}{y_1 + \dots + y_n}$ ($y_i > 0$).

### 3. Kỹ thuật tiếp tuyến

Với tổng $\sum f(a_i)$ và điều kiện $\sum a_i = $ hằng số, tìm đường thẳng $y = \alpha x + \beta$ tiếp xúc đồ thị $f$ tại điểm rơi và chứng minh $f(x) \ge \alpha x + \beta$ (thường quy về một bình phương).

### 4. Dồn biến, đặt ẩn

Với hai biến có tổng không đổi, đặt $t = xy$ và đưa biểu thức về một biến $t$ trên miền xác định.

### 5. Bất đẳng thức trong tam giác

$\cos A + \cos B + \cos C \le \dfrac{3}{2}$; $\sin A + \sin B + \sin C \le \dfrac{3\sqrt{3}}{2}$; kỹ thuật $\sin x + \sin y = 2\sin\dfrac{x + y}{2}\cos\dfrac{x - y}{2} \le 2\sin\dfrac{x + y}{2}$ (khi $x + y \le 2\pi$, $\sin\frac{x+y}{2} \ge 0$).

### 6. Một số đẳng thức hữu ích

$(a + b)(b + c)(c + a) = (a + b + c)(ab + bc + ca) - abc$; $(1 - a)(1 - b)(1 - c) = 1 - \sum a + \sum ab - abc$.

## II. Bài tập vận dụng

**Bài 1.** Cho $a, b, c > 0$, $a + b + c = 3$. Chứng minh $ab + bc + ca \le 3$.

**Bài 2.** Cho $x + 2y + 2z = 9$. Tìm giá trị nhỏ nhất của $x^2 + y^2 + z^2$.

**Bài 3.** Cho $a, b, c > 0$, $abc = 1$. Chứng minh $(1 + a)(1 + b)(1 + c) \ge 8$.

**Bài 4 (tiếp tuyến).** Cho $a, b, c \ge 0$, $a + b + c = 3$. Chứng minh $\dfrac{1}{a^2 + 1} + \dfrac{1}{b^2 + 1} + \dfrac{1}{c^2 + 1} \ge \dfrac{3}{2}$.

**Bài 5.** Chứng minh trong mọi tam giác $ABC$: $\sin A + \sin B + \sin C \le \dfrac{3\sqrt{3}}{2}$.

**Bài 6.** Cho $x, y \ge 0$, $x + y = 2$. Chứng minh $x^3 + y^3 \ge 2$.

**Bài 7.** Cho $a, b, c > 0$, $a + b + c = 1$. Chứng minh $\dfrac{a^2}{a + b} + \dfrac{b^2}{b + c} + \dfrac{c^2}{c + a} \ge \dfrac{1}{2}$.

**Bài 8.** Cho $a, b, c > 0$. Chứng minh $\dfrac{a^3}{b} + \dfrac{b^3}{c} + \dfrac{c^3}{a} \ge ab + bc + ca$.

**Bài 9.** Cho $x, y, z > 0$, $xyz = 1$. Chứng minh $\dfrac{x^2}{y + z} + \dfrac{y^2}{z + x} + \dfrac{z^2}{x + y} \ge \dfrac{3}{2}$.

**Bài 10.** Chứng minh $\left(1 + \dfrac{1}{n}\right)^n < 3$ với mọi số nguyên dương $n$.

**Bài 11.** Cho $x, y > 0$, $x + y = 1$. Tìm giá trị nhỏ nhất của $P = \left(x + \dfrac{1}{x}\right)\left(y + \dfrac{1}{y}\right)$.

**Bài 12.** Cho $a, b \ge 0$, $a + b = 3$. Tìm giá trị lớn nhất của $a^2b$.

**Bài 13 (HSG).** Cho $a, b, c > 0$. Chứng minh $(a + b)(b + c)(c + a) \ge \dfrac{8}{9}(a + b + c)(ab + bc + ca)$.

**Bài 14 (HSG).** Cho $a, b, c \in [0; 1]$. Chứng minh $a + b + c - ab - bc - ca \le 1$.

---

## III. Lời giải chi tiết

### Bài 1
$ab + bc + ca \le a^2 + b^2 + c^2$, nên $3(ab + bc + ca) \le (a + b + c)^2 = 9$.

### Bài 2
Cauchy-Schwarz: $(x^2 + y^2 + z^2)(1 + 4 + 4) \ge (x + 2y + 2z)^2 = 81$, nên $x^2 + y^2 + z^2 \ge 9$. Dấu bằng khi $\dfrac{x}{1} = \dfrac{y}{2} = \dfrac{z}{2}$, tức $(x; y; z) = (1; 2; 2)$. Giá trị nhỏ nhất là 9.

### Bài 3
$1 + a \ge 2\sqrt{a}$, … Nhân lại: $(1 + a)(1 + b)(1 + c) \ge 8\sqrt{abc} = 8$.

### Bài 4
Điểm rơi $a = b = c = 1$. Ta có $\dfrac{1}{a^2 + 1} - \left(1 - \dfrac{a}{2}\right) = \dfrac{a(a - 1)^2}{2(a^2 + 1)} \ge 0$ với $a \ge 0$. Cộng ba bất đẳng thức: vế trái $\ge 3 - \dfrac{a + b + c}{2} = \dfrac{3}{2}$.

### Bài 5
Với $x, y \in [0; \pi]$: $\sin x + \sin y = 2\sin\dfrac{x + y}{2}\cos\dfrac{x - y}{2} \le 2\sin\dfrac{x + y}{2}$. Áp dụng:
$$\sin A + \sin B + \sin C + \sin\dfrac{\pi}{3} \le 2\sin\dfrac{A + B}{2} + 2\sin\dfrac{C + \frac{\pi}{3}}{2} \le 4\sin\dfrac{A + B + C + \frac{\pi}{3}}{4} = 4\sin\dfrac{\pi}{3}.$$
Vậy $\sin A + \sin B + \sin C \le 3\sin\dfrac{\pi}{3} = \dfrac{3\sqrt{3}}{2}$; dấu bằng khi tam giác đều.

### Bài 6
$x^3 + y^3 = (x + y)^3 - 3xy(x + y) = 8 - 6xy$; $xy \le \dfrac{(x + y)^2}{4} = 1$, nên $x^3 + y^3 \ge 2$.

### Bài 7
Engel: vế trái $\ge \dfrac{(a + b + c)^2}{2(a + b + c)} = \dfrac{1}{2}$.

### Bài 8
AM-GM: $\dfrac{a^3}{b} + ab \ge 2a^2$. Cộng ba bất đẳng thức: vế trái $\ge 2(a^2 + b^2 + c^2) - (ab + bc + ca) \ge ab + bc + ca$.

### Bài 9
Engel: vế trái $\ge \dfrac{(x + y + z)^2}{2(x + y + z)} = \dfrac{x + y + z}{2} \ge \dfrac{3\sqrt[3]{xyz}}{2} = \dfrac{3}{2}$.

### Bài 10
Khai triển: $\left(1 + \dfrac{1}{n}\right)^n = \sum_{k = 0}^{n} C_n^k\dfrac{1}{n^k}$, với $C_n^k\dfrac{1}{n^k} = \dfrac{1}{k!} \cdot \dfrac{n(n - 1)\cdots(n - k + 1)}{n^k} \le \dfrac{1}{k!} \le \dfrac{1}{2^{k - 1}}$ ($k \ge 1$). Do đó tổng $< 1 + 1 + \dfrac{1}{2} + \dfrac{1}{4} + \dots = 3$ (với $n \ge 2$ có dấu bất đẳng thức chặt; $n = 1$: $2 < 3$).

### Bài 11
Đặt $t = xy \in \left(0; \dfrac{1}{4}\right]$. $P = xy + \dfrac{1}{xy} + \dfrac{x}{y} + \dfrac{y}{x} = t + \dfrac{1}{t} + \dfrac{1 - 2t}{t} = t + \dfrac{2}{t} - 2$.
Hàm $t + \dfrac{2}{t}$ giảm trên $(0; \sqrt{2})$, nên trên $\left(0; \dfrac{1}{4}\right]$ nhỏ nhất tại $t = \dfrac{1}{4}$: $P \ge \dfrac{1}{4} + 8 - 2 = \dfrac{25}{4}$, khi $x = y = \dfrac{1}{2}$.

### Bài 12
$a^2b = 4 \cdot \dfrac{a}{2} \cdot \dfrac{a}{2} \cdot b \le 4\left(\dfrac{\frac{a}{2} + \frac{a}{2} + b}{3}\right)^3 = 4$. Dấu bằng khi $\dfrac{a}{2} = b$, tức $a = 2$, $b = 1$. Giá trị lớn nhất là 4.

### Bài 13
$(a + b)(b + c)(c + a) = (a + b + c)(ab + bc + ca) - abc$. Theo AM-GM, $(a + b + c)(ab + bc + ca) \ge 3\sqrt[3]{abc} \cdot 3\sqrt[3]{a^2b^2c^2} = 9abc$, nên $abc \le \dfrac{1}{9}(a + b + c)(ab + bc + ca)$. Thay vào được điều phải chứng minh.

### Bài 14
$(1 - a)(1 - b)(1 - c) \ge 0 \iff 1 - (a + b + c) + (ab + bc + ca) - abc \ge 0$, nên $a + b + c - ab - bc - ca \le 1 - abc \le 1$.

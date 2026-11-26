# Chủ đề 7. Hàm số mũ và hàm số lôgarit

> Lũy thừa với số mũ thực, lôgarit, hàm số mũ và hàm số lôgarit mô tả rất nhiều hiện tượng tăng trưởng và suy giảm: lãi kép, dân số, phóng xạ, độ pH, độ lớn động đất. Chủ đề này luyện tính toán với lôgarit và giải phương trình, bất phương trình mũ và lôgarit cơ bản.

## I. Kiến thức cần nắm

### 1. Lũy thừa

Với $a > 0$: $a^m \cdot a^n = a^{m + n}$, $\dfrac{a^m}{a^n} = a^{m - n}$, $(a^m)^n = a^{mn}$, $a^{\frac{m}{n}} = \sqrt[n]{a^m}$, $a^{-n} = \dfrac{1}{a^n}$.

### 2. Lôgarit

Với $0 < a \ne 1$, $b > 0$: $\log_a b = \alpha \iff a^\alpha = b$.
- $\log_a 1 = 0$, $\log_a a = 1$, $a^{\log_a b} = b$.
- $\log_a(bc) = \log_a b + \log_a c$; $\log_a \dfrac{b}{c} = \log_a b - \log_a c$; $\log_a b^\alpha = \alpha\log_a b$.
- Đổi cơ số: $\log_a b = \dfrac{\log_c b}{\log_c a}$; $\log_{a^k} b = \dfrac{1}{k}\log_a b$.
- $\lg b = \log_{10} b$, $\ln b = \log_e b$.

### 3. Hàm số mũ và lôgarit

- $y = a^x$: tập xác định $\mathbb{R}$, tập giá trị $(0; +\infty)$.
- $y = \log_a x$: tập xác định $(0; +\infty)$, tập giá trị $\mathbb{R}$.
- Cả hai **đồng biến** khi $a > 1$, **nghịch biến** khi $0 < a < 1$.

### 4. Phương trình mũ và lôgarit

- $a^{f(x)} = a^{g(x)} \iff f(x) = g(x)$; $a^x = b$ ($b > 0$) $\iff x = \log_a b$.
- $\log_a f(x) = \log_a g(x) \iff f(x) = g(x) > 0$; $\log_a f(x) = b \iff f(x) = a^b$.
- Kỹ thuật: đưa về cùng cơ số, đặt ẩn phụ $t = a^x > 0$ hoặc $t = \log_a x$, lôgarit hóa.

### 5. Bất phương trình

- $a > 1$: $a^{f(x)} > a^{g(x)} \iff f(x) > g(x)$; $\log_a f(x) > \log_a g(x) \iff f(x) > g(x) > 0$.
- $0 < a < 1$: **đổi chiều** bất phương trình (và vẫn giữ điều kiện xác định).

### 6. Sai lầm hay gặp

- Quên điều kiện biểu thức trong lôgarit dương.
- Cơ số nhỏ hơn 1 mà không đổi chiều bất phương trình.
- Viết $\log_a(b + c) = \log_a b + \log_a c$ (sai).

## II. Bài tập vận dụng

**Bài 1.** Tính: $\log_2 32$; $\log_3 \dfrac{1}{27}$; $8^{\frac{2}{3}}$; $\log_{\frac{1}{2}} 8$.

**Bài 2.** Rút gọn $A = \log_6 9 + 2\log_6 2$ và $B = 4^{\log_2 3}$.

**Bài 3.** Biết $\log_2 3 = a$. Tính $\log_2 18$ và $\log_4 27$ theo $a$.

**Bài 4.** Tìm tập xác định của hàm số $y = \log_2(x^2 - 4x + 3)$.

**Bài 5.** Giải phương trình $2^{x + 1} + 2^{x - 1} = 20$.

**Bài 6.** Giải phương trình $9^x - 4 \cdot 3^x + 3 = 0$.

**Bài 7.** Giải phương trình $\log_2(x + 1) + \log_2(x - 1) = 3$.

**Bài 8.** Giải phương trình $\log_3(2x - 1) = 2$.

**Bài 9.** Giải bất phương trình $2^{x^2 - 3x} < \dfrac{1}{4}$.

**Bài 10.** Giải bất phương trình $\log_{\frac{1}{2}}(x - 1) \ge -2$.

**Bài 11 (thực tế).** Dân số một tỉnh hiện là 1 triệu người, tăng đều 1% mỗi năm. Sau ít nhất bao nhiêu năm dân số vượt 1,2 triệu người?

**Bài 12 (thực tế).** Chất phóng xạ C-14 có chu kỳ bán rã 5 730 năm: lượng còn lại sau $t$ năm là $m(t) = m_0 \cdot \left(\dfrac{1}{2}\right)^{\frac{t}{5730}}$. Một mẫu gỗ cổ còn 25% lượng C-14 ban đầu. Mẫu gỗ có tuổi khoảng bao nhiêu năm?

**Bài 13 (vận dụng cao).** a) Giải bất phương trình $\log_2 x + \log_2(x - 2) \le 3$. b) Tìm $m$ để phương trình $4^x - 2^{x + 1} + m = 0$ có hai nghiệm phân biệt.

---

## III. Lời giải chi tiết

### Bài 1
$\log_2 32 = 5$; $\log_3 3^{-3} = -3$; $8^{\frac{2}{3}} = (2^3)^{\frac{2}{3}} = 4$; $\log_{\frac{1}{2}} 8 = \log_{2^{-1}} 2^3 = -3$.

### Bài 2
$A = \log_6 9 + \log_6 4 = \log_6 36 = 2$. $B = (2^2)^{\log_2 3} = (2^{\log_2 3})^2 = 9$.

### Bài 3
$\log_2 18 = \log_2(2 \cdot 3^2) = 1 + 2a$. $\log_4 27 = \dfrac{1}{2}\log_2 3^3 = \dfrac{3a}{2}$.

### Bài 4
$x^2 - 4x + 3 > 0 \iff x < 1$ hoặc $x > 3$. $D = (-\infty; 1) \cup (3; +\infty)$.

### Bài 5
$2^x\left(2 + \dfrac{1}{2}\right) = 20 \iff 2^x = 8 \iff x = 3$.

### Bài 6
Đặt $t = 3^x > 0$: $t^2 - 4t + 3 = 0$, $t = 1$ hoặc $t = 3$. $x = 0$ hoặc $x = 1$.

### Bài 7
Điều kiện $x > 1$. $\log_2(x^2 - 1) = 3 \iff x^2 - 1 = 8 \iff x = \pm 3$. Nhận $x = 3$.

### Bài 8
Điều kiện $x > \dfrac{1}{2}$. $2x - 1 = 9$, $x = 5$.

### Bài 9
$2^{x^2 - 3x} < 2^{-2} \iff x^2 - 3x + 2 < 0 \iff 1 < x < 2$.

### Bài 10
Điều kiện $x > 1$. Cơ số $\dfrac{1}{2} < 1$: $x - 1 \le \left(\dfrac{1}{2}\right)^{-2} = 4$, $x \le 5$. $S = (1; 5]$.

### Bài 11
Sau $n$ năm: $1{,}01^n$ (triệu người). $1{,}01^n > 1{,}2 \iff n > \log_{1{,}01} 1{,}2 \approx 18{,}32$. Sau ít nhất 19 năm.

### Bài 12
$\left(\dfrac{1}{2}\right)^{\frac{t}{5730}} = \dfrac{1}{4} = \left(\dfrac{1}{2}\right)^2$, nên $t = 2 \cdot 5\,730 = 11\,460$ năm.

### Bài 13
a) Điều kiện $x > 2$. $\log_2[x(x - 2)] \le 3 \iff x^2 - 2x - 8 \le 0 \iff -2 \le x \le 4$. Kết hợp: $S = (2; 4]$.
b) Đặt $t = 2^x > 0$: $t^2 - 2t + m = 0$ (*). Mỗi $t > 0$ cho đúng một $x$, nên cần (*) có hai nghiệm dương phân biệt: $\Delta' = 1 - m > 0$, $S = 2 > 0$, $P = m > 0$. **Đáp số:** $0 < m < 1$.

# Chủ đề 5. Mũ và lôgarit nâng cao

> Bài toán mũ, lôgarit trong đề học sinh giỏi thường không giải được bằng biến đổi thông thường mà cần ý tưởng: đưa về hàm đơn điệu để chứng minh nghiệm duy nhất, đặt ẩn phụ thích hợp (kể cả ẩn phụ "không hoàn toàn"), phương trình đẳng cấp, so sánh các số mũ và lôgarit bằng đánh giá trung gian.

## I. Kiến thức cần nắm

### 1. Tính đơn điệu

- $a^x$, $\log_a x$ đồng biến khi $a > 1$, nghịch biến khi $0 < a < 1$.
- **Nghiệm duy nhất:** nếu $f$ đồng biến và $g$ nghịch biến (hoặc hằng) trên $D$ thì $f(x) = g(x)$ có nhiều nhất một nghiệm; đoán được nghiệm thì đó là nghiệm duy nhất.
- **Hàm đặc trưng:** $f(u) = f(v)$ với $f$ đơn điệu thì $u = v$. Ví dụ $2^u + u = 2^v + v \Rightarrow u = v$.

### 2. Đặt ẩn phụ

- $t = a^x > 0$; với $a^{2x}$, $a^x b^x$, $b^{2x}$ (đẳng cấp): chia cho $b^{2x}$ rồi đặt $t = \left(\dfrac{a}{b}\right)^x$.
- $t = \log_a x$; chú ý $\log_x a = \dfrac{1}{\log_a x}$.
- Sau khi đặt ẩn phụ, bài toán tham số chuyển thành bài toán nghiệm trên miền $t > 0$ (hoặc miền tương ứng).

### 3. So sánh

- Đưa về cùng cơ số hoặc cùng số mũ: $2^{300} = 8^{100}$, $3^{200} = 9^{100}$.
- So sánh với số trung gian: $\log_2 3 > \dfrac{3}{2} > \log_3 5$.
- Dãy $\log_n(n + 1)$ giảm (chứng minh bằng AM-GM).

### 4. Lôgarit hóa

Phương trình dạng $a^{f(x)} = b^{g(x)}$: lấy lôgarit hai vế.

### 5. Sai lầm hay gặp

- Chia cho biểu thức có thể bằng 0 hoặc đổi chiều sai.
- Quên điều kiện cơ số $0 < x \ne 1$ khi ẩn nằm ở cơ số.
- Đặt $t = a^x$ mà quên điều kiện $t > 0$.

## II. Bài tập vận dụng

**Bài 1.** So sánh $\log_2 3$ và $\log_3 5$.

**Bài 2.** So sánh $2^{300}$ và $3^{200}$.

**Bài 3.** Giải phương trình $2^x + 3^x = 5^x$.

**Bài 4.** Giải phương trình $3^x + 4^x = 5^x$.

**Bài 5.** Giải phương trình $\log_2 x = 3 - x$.

**Bài 6.** Giải phương trình $4^x - 2^{x + 1} - 8 = 0$.

**Bài 7.** Giải phương trình $9^x + 6^x = 2 \cdot 4^x$.

**Bài 8.** Giải phương trình $\log_x 2 + \log_2 x = \dfrac{5}{2}$.

**Bài 9.** Giải phương trình $\log_2(4^x + 4) = x + \log_2(2^{x + 1} - 3)$.

**Bài 10.** Giải bất phương trình $\log_{\frac{1}{3}}(x^2 - 5x + 7) > 0$.

**Bài 11.** Giải hệ phương trình $2^x + 2^y = 12$, $x + y = 5$.

**Bài 12.** Tìm $m$ để phương trình $4^x - m \cdot 2^x + m + 3 = 0$ có nghiệm.

**Bài 13 (HSG).** So sánh $\log_{2024} 2025$ và $\log_{2025} 2026$.

**Bài 14 (HSG).** Giải phương trình $2^{x - 1} - 2^{x^2 - x} = (x - 1)^2$.

---

## III. Lời giải chi tiết

### Bài 1
$2^{\frac{3}{2}} = 2\sqrt{2} < 3$ nên $\log_2 3 > \dfrac{3}{2}$. $3^{\frac{3}{2}} = 3\sqrt{3} > 5$ nên $\log_3 5 < \dfrac{3}{2}$. Vậy $\log_2 3 > \log_3 5$.

### Bài 2
$2^{300} = 8^{100} < 9^{100} = 3^{200}$.

### Bài 3
Chia cho $5^x$: $\left(\dfrac{2}{5}\right)^x + \left(\dfrac{3}{5}\right)^x = 1$. Vế trái là hàm nghịch biến, nên phương trình có nhiều nhất một nghiệm; $x = 1$ thỏa mãn. **Đáp số:** $x = 1$.

### Bài 4
Tương tự: $\left(\dfrac{3}{5}\right)^x + \left(\dfrac{4}{5}\right)^x = 1$ có nghiệm duy nhất $x = 2$.

### Bài 5
Điều kiện $x > 0$. $\log_2 x$ đồng biến, $3 - x$ nghịch biến: nhiều nhất một nghiệm; $x = 2$ thỏa mãn.

### Bài 6
$t = 2^x > 0$: $t^2 - 2t - 8 = 0$, $t = 4$ (loại $t = -2$). $x = 2$.

### Bài 7
Chia cho $4^x$, đặt $t = \left(\dfrac{3}{2}\right)^x > 0$: $t^2 + t - 2 = 0$, $t = 1$. $x = 0$.

### Bài 8
Điều kiện $0 < x \ne 1$. Đặt $t = \log_2 x \ne 0$: $\dfrac{1}{t} + t = \dfrac{5}{2} \iff 2t^2 - 5t + 2 = 0 \iff t = 2$ hoặc $t = \dfrac{1}{2}$. $x = 4$ hoặc $x = \sqrt{2}$.

### Bài 9
Điều kiện $2^{x + 1} > 3$. Phương trình tương đương $4^x + 4 = 2^x(2^{x + 1} - 3) \iff 4^x - 3 \cdot 2^x - 4 = 0 \iff 2^x = 4$ (loại $2^x = -1$). $x = 2$, thỏa điều kiện ($2^3 = 8 > 3$).

### Bài 10
Cơ số nhỏ hơn 1: $0 < x^2 - 5x + 7 < 1$. Vế trái luôn đúng ($\Delta < 0$). $x^2 - 5x + 6 < 0 \iff 2 < x < 3$.

### Bài 11
$2^x \cdot 2^y = 2^5 = 32$ và $2^x + 2^y = 12$: $2^x$, $2^y$ là nghiệm của $t^2 - 12t + 32 = 0$, tức 4 và 8. **Đáp số:** $(2; 3)$, $(3; 2)$.

### Bài 12
Đặt $t = 2^x > 0$: $t^2 + 3 = m(t - 1)$. $t = 1$ không thỏa ($4 = 0$). Với $t \ne 1$: $m = f(t) = \dfrac{t^2 + 3}{t - 1}$.
$f'(t) = \dfrac{t^2 - 2t - 3}{(t - 1)^2}$, triệt tiêu tại $t = 3$.
- Trên $(1; +\infty)$: $f$ giảm từ $+\infty$ đến $f(3) = 6$ rồi tăng ra $+\infty$; tập giá trị $[6; +\infty)$.
- Trên $(0; 1)$: $f' < 0$, $f$ giảm từ $f(0^+) = -3$ đến $-\infty$; tập giá trị $(-\infty; -3)$.

**Đáp số:** $m < -3$ hoặc $m \ge 6$.

### Bài 13
Đặt $n = 2025$. Cần so sánh $\log_{n - 1} n$ với $\log_n(n + 1)$. Ta có $\log_{n - 1} n = \dfrac{1}{\log_n(n - 1)}$. Theo AM-GM (các lôgarit dương):
$$\log_n(n - 1) \cdot \log_n(n + 1) \le \left(\dfrac{\log_n(n^2 - 1)}{2}\right)^2 < \left(\dfrac{\log_n n^2}{2}\right)^2 = 1.$$
Suy ra $\log_n(n + 1) < \dfrac{1}{\log_n(n - 1)} = \log_{n - 1} n$. Vậy $\log_{2024} 2025 > \log_{2025} 2026$.

### Bài 14
Đặt $u = x - 1$, $v = x^2 - x$: $v - u = x^2 - 2x + 1 = (x - 1)^2$. Phương trình thành $2^u - 2^v = v - u$, tức $2^u + u = 2^v + v$. Hàm $g(t) = 2^t + t$ đồng biến nên $u = v$: $x^2 - x = x - 1 \iff x = 1$.

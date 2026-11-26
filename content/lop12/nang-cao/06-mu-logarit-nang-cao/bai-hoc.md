# Chủ đề 6. Mũ và lôgarit nâng cao

> Ở lớp 12, bài toán mũ, lôgarit trong đề học sinh giỏi được giải mạnh mẽ hơn nhờ đạo hàm: chứng minh hàm đơn điệu hoặc lồi để khẳng định số nghiệm, đánh giá hai vế bằng bất đẳng thức, so sánh các số thông qua khảo sát hàm $\dfrac{\ln x}{x}$, và các bài tham số sau khi đặt ẩn phụ.

## I. Kiến thức cần nắm

### 1. Đơn điệu và lồi

- $f' > 0$ trên khoảng thì $f$ đồng biến: phương trình $f(x) = c$ có nhiều nhất một nghiệm.
- $f'' > 0$ trên khoảng (hàm lồi) thì $f(x) = 0$ có nhiều nhất hai nghiệm (vì $f'$ đồng biến nên $f'$ có nhiều nhất một nghiệm). Đoán đủ hai nghiệm là xong.
- Hàm đặc trưng: $g(u) = g(v)$, $g$ đơn điệu thì $u = v$.

### 2. Đánh giá

- $e^x \ge 1 + x$, $\ln x \le x - 1$ (dấu bằng tại $x = 0$, $x = 1$).
- Phương pháp "vế trái $\ge c \ge$ vế phải": nghiệm là các điểm làm cả hai dấu bằng xảy ra.

### 3. Bất phương trình lôgarit có ẩn ở cơ số

$\log_{g(x)} f(x) > \log_{g(x)} h(x)$: xét hai trường hợp $g(x) > 1$ (giữ chiều) và $0 < g(x) < 1$ (đổi chiều), kèm điều kiện $f, h > 0$.

### 4. Tham số

Đặt $t = a^x$ hoặc $t = \log_a x$, tìm miền giá trị của $t$, cô lập tham số và khảo sát hàm theo $t$. Với hai nghiệm $x_1, x_2$ của phương trình theo $t = 2^x$: $t_1t_2 = 2^{x_1 + x_2}$.

### 5. So sánh

Hàm $h(x) = \dfrac{\ln x}{x}$ đồng biến trên $(0; e)$, nghịch biến trên $(e; +\infty)$: với $e \le a < b$ thì $a^b > b^a$.

## II. Bài tập vận dụng

**Bài 1.** Giải phương trình $3^x + 5^x = 6x + 2$.

**Bài 2.** Giải phương trình $\log_3\dfrac{x^2 + x + 1}{x} = 2x - x^2$.

**Bài 3.** Giải hệ $e^x - e^y = y - x$, $x^2 + y^2 = 2$.

**Bài 4.** Giải bất phương trình $3^x + 4^x > 5^x$.

**Bài 5.** Tìm $m$ để phương trình $\log_2^2 x - 2\log_2 x + m = 0$ có nghiệm thuộc $[1; 4]$.

**Bài 6.** Tìm $m$ để phương trình $4^x - m \cdot 2^{x + 1} + 2m = 0$ có hai nghiệm $x_1$, $x_2$ thỏa mãn $x_1 + x_2 = 3$.

**Bài 7.** Sắp xếp theo thứ tự giảm dần: $a = \log_2 3$, $b = \log_3 4$, $c = \log_4 5$.

**Bài 8.** Tìm giá trị lớn nhất của $y = xe^{-x}$ trên $[0; +\infty)$.

**Bài 9.** Giải bất phương trình $\log_x(5x^2 - 8x + 3) > 2$.

**Bài 10.** Chứng minh $e^x \ge 1 + x$ với mọi $x$ và $\ln x \le x - 1$ với mọi $x > 0$.

**Bài 11 (thực tế).** Với lãi suất kép liên tục $r = 7\%$/năm, số tiền sau $t$ năm là $A = Pe^{rt}$. Sau bao lâu số tiền gấp đôi (làm tròn đến hàng phần mười)?

**Bài 12.** Giải phương trình $x \cdot 2^x = 2$.

**Bài 13 (HSG).** So sánh $2025^{2026}$ và $2026^{2025}$.

---

## III. Lời giải chi tiết

### Bài 1
$f(x) = 3^x + 5^x - 6x - 2$ có $f''(x) = 3^x\ln^2 3 + 5^x\ln^2 5 > 0$, nên $f$ có nhiều nhất hai nghiệm. $f(0) = 0$, $f(1) = 0$.
**Đáp số:** $x \in \{0; 1\}$.

### Bài 2
Điều kiện $x > 0$. Vế trái $= \log_3\left(x + \dfrac{1}{x} + 1\right) \ge \log_3 3 = 1$; vế phải $= 1 - (x - 1)^2 \le 1$. Dấu bằng đồng thời khi $x = 1$.
**Đáp số:** $x = 1$.

### Bài 3
$e^x + x = e^y + y$; hàm $e^t + t$ đồng biến nên $x = y$, $2x^2 = 2$.
**Đáp số:** $(1; 1)$, $(-1; -1)$.

### Bài 4
$\left(\dfrac{3}{5}\right)^x + \left(\dfrac{4}{5}\right)^x > 1$. Vế trái nghịch biến và bằng 1 tại $x = 2$, nên bất phương trình $\iff x < 2$.

### Bài 5
$t = \log_2 x \in [0; 2]$: $m = 2t - t^2$. Trên $[0; 2]$, $g(t) = 2t - t^2$ nhận mọi giá trị từ $0$ đến $1$.
**Đáp số:** $0 \le m \le 1$.

### Bài 6
$t = 2^x > 0$: $t^2 - 2mt + 2m = 0$. Hai nghiệm $x_1, x_2$ ứng với hai nghiệm dương phân biệt $t_1, t_2$, và $t_1t_2 = 2^{x_1 + x_2} = 8$, nên $2m = 8$, $m = 4$. Kiểm tra: $t^2 - 8t + 8 = 0$ có $\Delta' = 8 > 0$, tổng và tích dương.
**Đáp số:** $m = 4$.

### Bài 7
Dãy $\log_n(n + 1)$ giảm (AM-GM: $\log_n(n - 1)\log_n(n + 1) < \left(\dfrac{\log_n(n^2 - 1)}{2}\right)^2 < 1$). Vậy $a > b > c$.

### Bài 8
$y' = (1 - x)e^{-x}$ đổi dấu từ dương sang âm tại $x = 1$. Giá trị lớn nhất $\dfrac{1}{e}$.

### Bài 9
Điều kiện $0 < x \ne 1$, $5x^2 - 8x + 3 > 0$ (tức $x < \dfrac{3}{5}$ hoặc $x > 1$).
- $x > 1$: $5x^2 - 8x + 3 > x^2 \iff 4x^2 - 8x + 3 > 0 \iff x < \dfrac{1}{2}$ hoặc $x > \dfrac{3}{2}$. Được $x > \dfrac{3}{2}$.
- $0 < x < 1$: $5x^2 - 8x + 3 < x^2 \iff \dfrac{1}{2} < x < \dfrac{3}{2}$; kết hợp điều kiện: $\dfrac{1}{2} < x < \dfrac{3}{5}$.

**Đáp số:** $\left(\dfrac{1}{2}; \dfrac{3}{5}\right) \cup \left(\dfrac{3}{2}; +\infty\right)$.

### Bài 10
$g(x) = e^x - 1 - x$, $g'(x) = e^x - 1$ đổi dấu từ âm sang dương tại 0: $g(x) \ge g(0) = 0$.
$h(x) = x - 1 - \ln x$ ($x > 0$), $h'(x) = 1 - \dfrac{1}{x}$ đổi dấu tại 1: $h(x) \ge h(1) = 0$.

### Bài 11
$e^{0{,}07t} = 2 \iff t = \dfrac{\ln 2}{0{,}07} \approx 9{,}9$ năm.

### Bài 12
Với $x \le 0$: vế trái $\le 0 < 2$. Với $x > 0$: $f(x) = x2^x$ đồng biến; $f(1) = 2$.
**Đáp số:** $x = 1$.

### Bài 13
So sánh $2026\ln 2025$ với $2025\ln 2026$, tức $\dfrac{\ln 2025}{2025}$ với $\dfrac{\ln 2026}{2026}$. Hàm $\dfrac{\ln x}{x}$ nghịch biến trên $(e; +\infty)$ (đạo hàm $\dfrac{1 - \ln x}{x^2} < 0$), nên $\dfrac{\ln 2025}{2025} > \dfrac{\ln 2026}{2026}$. Vậy $2025^{2026} > 2026^{2025}$.

# Chủ đề 10. Quy nạp toán học và phương trình hàm đơn giản

> Phương pháp quy nạp chứng minh một mệnh đề đúng với mọi số tự nhiên: đẳng thức, chia hết, bất đẳng thức, công thức tổng quát của dãy số, bài toán hình học tổ hợp. Phương trình hàm ở mức lớp 10 dùng kỹ thuật thế giá trị đặc biệt, đổi biến và quy nạp trên tập số nguyên, số hữu tỉ.

## I. Kiến thức cần nắm

### 1. Phương pháp quy nạp

Chứng minh $P(n)$ đúng với mọi $n \ge n_0$:
1. **Cơ sở:** kiểm tra $P(n_0)$ đúng.
2. **Bước quy nạp:** giả sử $P(k)$ đúng ($k \ge n_0$), chứng minh $P(k + 1)$ đúng.

Biến thể: quy nạp mạnh (giả sử đúng với mọi giá trị từ $n_0$ đến $k$).

### 2. Các dạng quy nạp hay gặp

- Đẳng thức tổng: cộng thêm số hạng thứ $k + 1$ vào hai vế.
- Chia hết: biểu diễn biểu thức với $k + 1$ qua biểu thức với $k$ cộng một số hạng chia hết.
- Bất đẳng thức: dùng giả thiết quy nạp rồi so sánh thêm một bước.
- Dãy số: **đoán** công thức từ vài số hạng đầu, rồi chứng minh bằng quy nạp.

### 3. Phương trình hàm: kỹ thuật thế

- Thế các giá trị đặc biệt $x = 0$, $y = 0$, $x = y$, $y = -x$, $y = 1$.
- Thế $x$ bởi biểu thức khác ($1 - x$, $-x$, $\dfrac{1}{x}$) để được hệ phương trình với ẩn $f(x)$, $f(\cdot)$.
- Biến một vế thành hằng số hoặc biến thiên tùy ý để "giải" ra $f$.

### 4. Phương trình Cauchy trên $\mathbb{Q}$

$f(x + y) = f(x) + f(y)$ với mọi $x, y \in \mathbb{Q}$ thì $f(x) = ax$ với $a = f(1)$. Chứng minh lần lượt trên $\mathbb{N}$ (quy nạp), $\mathbb{Z}$, $\mathbb{Q}$.

### 5. Bắt buộc thử lại

Phương trình hàm thường chỉ cho **điều kiện cần**; luôn thay hàm tìm được vào đề bài để kiểm tra.

## II. Bài tập vận dụng

**Bài 1.** Chứng minh với mọi $n \ge 1$: $1 + 3 + 5 + \dots + (2n - 1) = n^2$.

**Bài 2.** Chứng minh với mọi $n \ge 1$: $1^2 + 2^2 + \dots + n^2 = \dfrac{n(n + 1)(2n + 1)}{6}$.

**Bài 3.** Chứng minh $4^n + 15n - 1$ chia hết cho 9 với mọi $n \ge 1$.

**Bài 4.** Chứng minh $2^n > n^2$ với mọi số tự nhiên $n \ge 5$.

**Bài 5 (Bernoulli).** Chứng minh với mọi $x > -1$ và $n \ge 1$: $(1 + x)^n \ge 1 + nx$.

**Bài 6.** Cho dãy $u_1 = 2$, $u_{n + 1} = 2u_n - 1$. Tìm công thức tổng quát của $u_n$.

**Bài 7.** Trong mặt phẳng có $n$ đường thẳng, không có hai đường nào song song và không có ba đường nào đồng quy. Chứng minh chúng chia mặt phẳng thành $\dfrac{n(n + 1)}{2} + 1$ miền.

**Bài 8.** Cho dãy Fibonacci $F_1 = F_2 = 1$, $F_{n + 2} = F_{n + 1} + F_n$. Chứng minh $F_1 + F_2 + \dots + F_n = F_{n + 2} - 1$.

**Bài 9 (HSG).** Chứng minh với mọi $n \ge 1$: $1 + \dfrac{1}{\sqrt{2}} + \dfrac{1}{\sqrt{3}} + \dots + \dfrac{1}{\sqrt{n}} < 2\sqrt{n}$.

**Bài 10.** Tìm hàm $f: \mathbb{R} \to \mathbb{R}$ thỏa mãn $f(x) + 2f(1 - x) = x^2$ với mọi $x$.

**Bài 11.** Tìm hàm $f: \mathbb{R} \to \mathbb{R}$ thỏa mãn $f(x)f(y) - f(xy) = x + y$ với mọi $x, y$.

**Bài 12.** Tìm hàm $f: \mathbb{R} \to \mathbb{R}$ thỏa mãn $f(x - f(y)) = 1 - x - y$ với mọi $x, y$.

**Bài 13.** Tìm hàm $f: \mathbb{N}^* \to \mathbb{N}^*$ thỏa mãn $f(1) = 1$ và $f(n + 1) = f(n) + 2n + 1$ với mọi $n \ge 1$.

**Bài 14 (HSG).** Tìm hàm $f: \mathbb{Q} \to \mathbb{Q}$ thỏa mãn $f(x + y) = f(x) + f(y)$ với mọi $x, y \in \mathbb{Q}$ và $f(1) = 2$.

---

## III. Lời giải chi tiết

### Bài 1
$n = 1$: $1 = 1^2$. Giả sử đúng với $n = k$. Khi đó $1 + 3 + \dots + (2k - 1) + (2k + 1) = k^2 + 2k + 1 = (k + 1)^2$. Đúng với $n = k + 1$.

### Bài 2
$n = 1$: $1 = \dfrac{1 \cdot 2 \cdot 3}{6}$. Giả sử đúng với $k$:
$$\dfrac{k(k + 1)(2k + 1)}{6} + (k + 1)^2 = \dfrac{(k + 1)(2k^2 + 7k + 6)}{6} = \dfrac{(k + 1)(k + 2)(2k + 3)}{6}.$$
Đúng với $k + 1$.

### Bài 3
$n = 1$: $4 + 15 - 1 = 18$ chia hết cho 9. Giả sử $4^k + 15k - 1 = 9m$. Khi đó
$$4^{k + 1} + 15(k + 1) - 1 = 4(4^k + 15k - 1) - 45k + 18 = 36m - 45k + 18,$$
chia hết cho 9.

### Bài 4
$n = 5$: $32 > 25$. Giả sử $2^k > k^2$ với $k \ge 5$. Khi đó $2^{k + 1} > 2k^2$. Cần $2k^2 \ge (k + 1)^2 \iff k^2 - 2k - 1 \ge 0 \iff (k - 1)^2 \ge 2$: đúng với $k \ge 5$. Vậy $2^{k + 1} > (k + 1)^2$.

### Bài 5
$n = 1$: đẳng thức. Giả sử $(1 + x)^k \ge 1 + kx$. Vì $1 + x > 0$:
$(1 + x)^{k + 1} \ge (1 + kx)(1 + x) = 1 + (k + 1)x + kx^2 \ge 1 + (k + 1)x$.

### Bài 6
$u_1 = 2$, $u_2 = 3$, $u_3 = 5$, $u_4 = 9$: đoán $u_n = 2^{n - 1} + 1$.
Quy nạp: $n = 1$ đúng. Nếu $u_k = 2^{k - 1} + 1$ thì $u_{k + 1} = 2^k + 2 - 1 = 2^k + 1$.

### Bài 7
$n = 1$: 2 miền $= 1 + 1$. Giả sử $k$ đường chia thành $\dfrac{k(k + 1)}{2} + 1$ miền. Đường thứ $k + 1$ cắt $k$ đường cũ tại $k$ điểm phân biệt, bị chia thành $k + 1$ phần; mỗi phần chia một miền cũ làm hai, nên số miền tăng $k + 1$:
$$\dfrac{k(k + 1)}{2} + 1 + (k + 1) = \dfrac{(k + 1)(k + 2)}{2} + 1.$$

### Bài 8
$n = 1$: $F_1 = 1 = F_3 - 1 = 2 - 1$. Giả sử đúng với $k$: $F_1 + \dots + F_k + F_{k + 1} = F_{k + 2} - 1 + F_{k + 1} = F_{k + 3} - 1$.

### Bài 9
$n = 1$: $1 < 2$. Giả sử đúng với $k$. Cần chứng minh $2\sqrt{k} + \dfrac{1}{\sqrt{k + 1}} < 2\sqrt{k + 1}$, tức
$$\dfrac{1}{\sqrt{k + 1}} < 2(\sqrt{k + 1} - \sqrt{k}) = \dfrac{2}{\sqrt{k + 1} + \sqrt{k}},$$
đúng vì $\sqrt{k + 1} + \sqrt{k} < 2\sqrt{k + 1}$.

### Bài 10
Thay $x$ bởi $1 - x$: $f(1 - x) + 2f(x) = (1 - x)^2$. Giải hệ với phương trình đề bài (ẩn $f(x)$, $f(1 - x)$): nhân phương trình mới với 2 rồi trừ:
$3f(x) = 2(1 - x)^2 - x^2 = x^2 - 4x + 2$, nên $f(x) = \dfrac{x^2 - 4x + 2}{3}$.
Thử lại: $f(1 - x) = \dfrac{x^2 + 2x - 1}{3}$, $f(x) + 2f(1 - x) = \dfrac{3x^2}{3} = x^2$. Đúng.

### Bài 11
$x = y = 0$: $f(0)^2 - f(0) = 0$, $f(0) \in \{0; 1\}$. $y = 0$: $f(x)f(0) - f(0) = x$ với mọi $x$.
- $f(0) = 0$: $0 = x$ với mọi $x$, vô lý.
- $f(0) = 1$: $f(x) = x + 1$.

Thử lại: $(x + 1)(y + 1) - (xy + 1) = x + y$. Đúng. **Đáp số:** $f(x) = x + 1$.

### Bài 12
Thay $x = f(y)$: $f(0) = 1 - f(y) - y$, nên $f(y) = 1 - c - y$ với $c = f(0)$. Thay $y = 0$: $c = 1 - c$, $c = \dfrac{1}{2}$. Vậy $f(y) = \dfrac{1}{2} - y$.
Thử lại: $f(x - f(y)) = \dfrac{1}{2} - x + \dfrac{1}{2} - y = 1 - x - y$. Đúng.

### Bài 13
$f(2) = 4$, $f(3) = 9$: đoán $f(n) = n^2$. Quy nạp: $f(1) = 1$; nếu $f(k) = k^2$ thì $f(k + 1) = k^2 + 2k + 1 = (k + 1)^2$. Hàm được xác định duy nhất bởi hệ thức truy hồi nên $f(n) = n^2$.

### Bài 14
- $x = y = 0$: $f(0) = 0$. $y = -x$: $f(-x) = -f(x)$.
- Quy nạp: $f(n) = nf(1) = 2n$ với mọi $n \in \mathbb{N}$ (vì $f(k + 1) = f(k) + f(1)$). Kết hợp $f(-x) = -f(x)$: $f(n) = 2n$ với mọi $n \in \mathbb{Z}$.
- Tương tự, $f(nx) = nf(x)$ với $n \in \mathbb{N}^*$. Với $x = \dfrac{m}{n}$: $nf\left(\dfrac{m}{n}\right) = f(m) = 2m$, nên $f\left(\dfrac{m}{n}\right) = \dfrac{2m}{n}$.

Vậy $f(x) = 2x$ với mọi $x \in \mathbb{Q}$; thử lại thỏa mãn.

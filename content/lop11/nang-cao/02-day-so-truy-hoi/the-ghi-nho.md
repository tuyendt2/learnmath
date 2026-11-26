# Thẻ ghi nhớ Dãy số truy hồi

## Quy nạp

### Hai bước của phép quy nạp toán học?
1. Cơ sở: kiểm tra $P(n_0)$.
2. Bước quy nạp: giả sử $P(k)$ đúng, chứng minh $P(k + 1)$ đúng.

### Khi nào cần quy nạp mạnh và phải kiểm tra mấy giá trị đầu?
Khi hệ thức truy hồi dùng hai (hoặc nhiều) số hạng trước. Phải kiểm tra đủ hai (hoặc nhiều) giá trị đầu.

## Cấp một

### Giải $u_{n+1} = au_n + b$ với $a \ne 1$ thế nào?
Tìm điểm bất động $c = \frac{b}{1 - a}$. Khi đó $u_{n+1} - c = a(u_n - c)$, nên $u_n = c + (u_1 - c)a^{n-1}$.

### Giải $u_{n+1} = au_n + f(n)$ thế nào?
Tìm một nghiệm riêng $w_n$ (cùng hệ thức). Khi đó $u_n - w_n$ là cấp số nhân công bội $a$.

### Nghiệm riêng nên thử dạng nào khi $f(n)$ là đa thức bậc $m$ (và $a \ne 1$)?
Một đa thức bậc $m$ theo $n$, rồi đồng nhất hệ số.

### Nghiệm riêng của $u_{n+1} = au_n + \lambda q^n$ có dạng gì?
$cq^n$ nếu $q \ne a$; $cnq^n$ nếu $q = a$ (trùng công bội).

### $u_{n+1} = u_n + f(n)$ thì $u_n = \;?$
$u_n = u_1 + \sum_{k=1}^{n-1}f(k)$: bài toán thành tính tổng.

## Cấp hai

### Dạng nghiệm của $u_{n+2} = pu_{n+1} + qu_n$ khi phương trình $x^2 = px + q$ có hai nghiệm phân biệt $\alpha$, $\beta$?
$u_n = A\alpha^n + B\beta^n$, với $A$, $B$ tìm từ hai số hạng đầu.

### Dạng nghiệm khi phương trình đặc trưng có nghiệm kép $\alpha$?
$u_n = (A + Bn)\alpha^n$.

### Vì sao công thức nghiệm của truy hồi cấp hai đúng?
Theo Viète, hệ thức viết được thành $u_{n+2} - \alpha u_{n+1} = \beta(u_{n+1} - \alpha u_n)$. Dãy $u_{n+1} - \alpha u_n$ là cấp số nhân công bội $\beta$, đưa về truy hồi cấp một.

### Công thức Binet của dãy Fibonacci?
$F_n = \frac{1}{\sqrt5}\left[\left(\frac{1 + \sqrt5}{2}\right)^n - \left(\frac{1 - \sqrt5}{2}\right)^n\right]$.

### Hệ hai dãy $x_{n+1} = ax_n + by_n$, $y_{n+1} = cx_n + dy_n$ xử lý thế nào?
Khử $y$ để có truy hồi cấp hai của $x_n$. Với hệ dạng $x + y\sqrt d$ thì nhận ra $x_{n+1} + y_{n+1}\sqrt d = (x_n + y_n\sqrt d)(\dots)$.

## Đổi biến

### Đổi biến gì cho $u_{n+1} = \frac{u_n}{1 + cu_n}$?
$v_n = \frac{1}{u_n}$: $v_{n+1} = v_n + c$ (cấp số cộng).

### Dãy phân tuyến tính $u_{n+1} = \frac{au_n + b}{cu_n + d}$ có hai điểm bất động $x_1 \ne x_2$ thì đổi biến thế nào?
$v_n = \frac{u_n - x_1}{u_n - x_2}$ là cấp số nhân. Nếu có nghiệm kép $x_0$ thì $\frac{1}{u_n - x_0}$ là cấp số cộng.

### Dấu hiệu nên lượng giác hóa dãy số?
$u_{n+1} = 2u_n^2 - 1$ hoặc $\sqrt{\frac{1 + u_n}{2}}$: đặt $u_n = \cos\varphi$. Dạng $\frac{u_n + a}{1 - au_n}$: đặt $u_n = \tan\varphi$.

### Xử lý $u_{n+1} = u_n^2 - 2u_n + 2$ thế nào?
$u_{n+1} - 1 = (u_n - 1)^2$, nên $u_n - 1 = (u_1 - 1)^{2^{n-1}}$.

## Tổng và tính chất số học

### Từ $u_{n+1} = u_n^2 + u_n$ ta có sai phân nào?
$\frac{1}{u_n + 1} = \frac{1}{u_n} - \frac{1}{u_{n+1}}$, nên tổng $\sum\frac{1}{u_k + 1}$ triệt tiêu.

### Cho hệ thức giữa tổng $S_n$ và $u_n$ thì làm gì?
Dùng $u_n = S_n - S_{n-1}$ ($n \ge 2$) để có truy hồi giữa $u_n$ và $u_{n-1}$.

### Chứng minh dãy $u_{n+1} = \frac{u_n^2 + c}{u_{n-1}}$ gồm số nguyên bằng cách nào?
Bất biến $u_{n+1}u_{n-1} - u_n^2 = c$. Trừ hai bất biến liên tiếp, được $\frac{u_{n+1} + u_{n-1}}{u_n}$ là hằng số $k$, tức $u_{n+1} = ku_n - u_{n-1}$.

### Bất biến của dãy $x_{n+2} = kx_{n+1} - x_n$?
$x_{n+1}^2 - kx_{n+1}x_n + x_n^2$ không đổi (bằng $x_{n+1}^2 - x_nx_{n+2}$).

### Tìm $u_{2025}$ của dãy tuần hoàn chu kỳ $T$ thế nào?
Lấy số dư $r$ của 2025 khi chia cho $T$, thì $u_{2025} = u_r$ (lấy $r = T$ nếu chia hết). Cần chứng minh tuần hoàn: với truy hồi cấp một, chỉ cần $u_{T+1} = u_1$.

## Bẫy

### Đoán công thức từ vài số hạng đầu đã đủ chưa?
Chưa. Phải chứng minh bằng quy nạp hoặc suy ra từ phép biến đổi.

### Trước khi chia cho $u_n$ cần làm gì?
Chứng minh $u_n \ne 0$, thường bằng quy nạp $u_n > 0$.

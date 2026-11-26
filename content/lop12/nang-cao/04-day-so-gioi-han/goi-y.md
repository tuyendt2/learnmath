# Gợi ý từng tầng cho bài tập Dãy số và giới hạn

## Bài 1 | 1
**Ý tưởng:** Dãy tăng, bị chặn trên bởi 2; công thức có được từ $\sqrt{2 + 2\cos\alpha} = 2\cos\frac\alpha2$.

### Gợi ý 1
Chứng minh bằng quy nạp $0 < u_n < 2$. So sánh $u_{n+1}^2$ với $u_n^2$.

### Gợi ý 2
$u_{n+1}^2 - u_n^2 = (2 - u_n)(1 + u_n) > 0$. Với công thức: $u_1 = 2\cos\frac\pi3$, và góc giảm một nửa sau mỗi bước.

## Bài 2 | 1
**Ý tưởng:** a) phương trình đặc trưng; b) cộng thêm nghiệm riêng bậc nhất để được cấp số nhân.

### Gợi ý 1
a) Giải $x^2 = 5x - 6$. b) Tìm $a, b$ để $v_n = an + b$ thỏa $v_{n+1} = 2v_n + n$.

### Gợi ý 2
a) $u_n = 3^n - 2^n$. b) $v_n = -n - 1$, nên $u_n + n + 1$ là cấp số nhân công bội 2.

## Bài 3 | 2
**Ý tưởng:** Hàm $1 + \frac1x$ nghịch biến nên dùng đánh giá $\lvert u_{n+1} - L\rvert \le \frac1L\lvert u_n - L\rvert$.

### Gợi ý 1
Viết vài số hạng đầu: dãy có đơn điệu không? Giới hạn (nếu có) phải thỏa phương trình nào?

### Gợi ý 2
Với $L = \frac{1+\sqrt5}{2}$: $\lvert u_{n+1} - L\rvert = \frac{\lvert u_n - L\rvert}{u_nL}$, và $u_n \ge 1$.

## Bài 4 | 1
**Ý tưởng:** Kẹp mẫu số giữa $n^2 + 1$ và $n^2 + n$.

### Gợi ý 1
Không thể lấy giới hạn từng số hạng rồi cộng, vì số số hạng tăng theo $n$. Hãy chặn từng số hạng.

### Gợi ý 2
$\frac{k}{n^2 + n} \le \frac{k}{n^2 + k} \le \frac{k}{n^2 + 1}$. Cộng lại và dùng $1 + 2 + \dots + n = \frac{n(n+1)}{2}$.

## Bài 5 | 2
**Ý tưởng:** Viết thành $\frac1n\sum f\left(\frac kn\right)$; câu b) lấy lôgarit trước.

### Gợi ý 1
a) Chia tử và mẫu cho $n^2$. b) Lấy $\ln$ của biểu thức, đưa $\ln n$ vào trong tổng.

### Gợi ý 2
a) $f(x) = \frac{1}{1 + x^2}$, tính tích phân bằng $x = \tan t$. b) $f(x) = \ln(1 + x)$, $\int_0^1 f = 2\ln2 - 1$.

## Bài 6 | 2
**Ý tưởng:** Từ $u_{n+1} - 1 = u_n(u_n - 1)$ tách $\frac1{u_n}$ thành hiệu.

### Gợi ý 1
Phân tích $u_{n+1} - 1$ thành tích. Nghịch đảo hai vế và tách phân thức.

### Gợi ý 2
$\frac{1}{u_n} = \frac{1}{u_n - 1} - \frac{1}{u_{n+1} - 1}$. Tổng rút gọn còn $1 - \frac{1}{u_{n+1} - 1}$; nhớ chứng minh $u_n \to +\infty$.

## Bài 7 | 3
**Ý tưởng:** Bình phương: $u_{k+1}^2 = u_k^2 + 2 + \frac1{u_k^2}$, rồi kẹp $u_n^2$ giữa $2n - 1$ và $2n - 1 + 2\sqrt n$.

### Gợi ý 1
Xét $u_{k+1}^2 - u_k^2$. Cộng các hiệu này lại.

### Gợi ý 2
Chặn dưới: $u_n^2 \ge 2n - 1$. Chặn trên: tổng $\sum\frac1{u_k^2} \le \sum\frac{1}{2k - 1}$, và tổng này nhỏ hơn $2\sqrt n$.

## Bài 8 | 3
**Ý tưởng:** $u_n = \cos\frac{\pi}{2^{n+1}}$; nhân tích với $\sin\frac{\pi}{2^{n+1}}$ để dùng công thức nhân đôi liên tiếp.

### Gợi ý 1
Biểu thức $\sqrt{\frac{1 + \cos\alpha}{2}}$ bằng gì? Viết $u_1$ dưới dạng $\cos$.

### Gợi ý 2
$P_n\sin\frac{\pi}{2^{n+1}} = \frac{1}{2^n}$. Dùng $\lim\frac{\sin x}{x} = 1$.

## Bài 9 | 3
**Ý tưởng:** Định lý Lagrange cho $\lvert\cos a - \cos b\rvert \le \sin1\cdot\lvert a - b\rvert$ trên $[0; 1]$.

### Gợi ý 1
Nghiệm duy nhất: xét tính đơn điệu của $x - \cos x$. Dãy nằm trong đoạn nào?

### Gợi ý 2
Mọi $u_n \in [0; 1]$. Áp dụng Lagrange cho $\cos$ giữa $u_n$ và $L$; đạo hàm $-\sin c$ có trị tuyệt đối không quá $\sin1 < 1$.

## Bài 10 | 2
**Ý tưởng:** $v_n = u_n - 1$ thỏa $v_{n+1} = v_n^2$.

### Gợi ý 1
Viết $u_n^2 - 2u_n + 2$ dưới dạng bình phương cộng hằng số.

### Gợi ý 2
$v_n = (a - 1)^{2^{n-1}}$. Xét ba trường hợp $\lvert a - 1\rvert < 1$, $= 1$, $> 1$.

## Bài 11 | 3
**Ý tưởng:** $1 < x_n < \sqrt[n]3$; lấy lôgarit $n\ln x_n = \ln(1 + x_n)$.

### Gợi ý 1
Nghiệm dương không thể nằm trong $(0; 1]$. Trên $(1; +\infty)$ hàm $x^n - x - 1$ đơn điệu.

### Gợi ý 2
$x_n^n = x_n + 1 < 3$ cho $x_n \to 1$. Sau đó $n\ln x_n \to \ln2$ và $\ln x_n \approx x_n - 1$.

## Bài 12 | 4
**Ý tưởng:** Dùng định lý Stolz cho $\frac{n}{1/u_n^2}$, với $\frac1{\sin^2x} - \frac1{x^2} \to \frac13$.

### Gợi ý 1
Trước hết chứng minh dãy giảm về 0. Muốn biết $u_n$ nhỏ "cỡ nào", hãy xét $\frac{1}{u_{n+1}^2} - \frac{1}{u_n^2}$.

### Gợi ý 2
$\frac{1}{u_{n+1}^2} - \frac{1}{u_n^2} = \frac1{\sin^2u_n} - \frac1{u_n^2}$. Tính giới hạn của $\frac1{\sin^2x} - \frac1{x^2}$ khi $x \to 0$.

### Gợi ý 3
Viết hiệu đó thành $\frac{x - \sin x}{x^3}\cdot\frac{x + \sin x}{x}\cdot\frac{x^2}{\sin^2x}$ và dùng $x - \frac{x^3}{6} \le \sin x \le x - \frac{x^3}{6} + \frac{x^5}{120}$.

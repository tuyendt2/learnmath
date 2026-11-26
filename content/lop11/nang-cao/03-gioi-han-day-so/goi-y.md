# Gợi ý từng tầng cho bài tập Giới hạn dãy số

## Bài 1 | 1
**Ý tưởng:** Nhân liên hợp bậc hai (câu a) và bậc ba (câu b) để khử dạng $\infty - \infty$.

### Gợi ý 1
a) $\sqrt A - n = \frac{A - n^2}{\sqrt A + n}$. b) Dùng hằng đẳng thức $A^3 - n^3 = (A - n)(A^2 + An + n^2)$.

### Gợi ý 2
Sau khi nhân liên hợp, chia tử và mẫu cho lũy thừa cao nhất của $n$.

## Bài 2 | 1
**Ý tưởng:** Tính tổng bằng công thức rồi mới lấy giới hạn.

### Gợi ý 1
a) $1^2 + \dots + n^2 = \frac{n(n+1)(2n+1)}{6}$. b) Tách $\frac{1}{k(k+1)}$ thành hiệu.

### Gợi ý 2
b) $\frac{1}{k(k+1)} = \frac1k - \frac{1}{k+1}$, tổng bằng $1 - \frac{1}{n+1}$.

## Bài 3 | 1
**Ý tưởng:** Chia tử và mẫu cho $4^n$, lũy thừa có cơ số lớn nhất.

### Gợi ý 1
Viết $4^{n+1} = 4\cdot 4^n$. Cơ số nào lớn nhất trong cả tử và mẫu?

### Gợi ý 2
Sau khi chia cho $4^n$, các số hạng $\left(\frac34\right)^n$, $\left(\frac12\right)^n$ dần tới 0.

## Bài 4 | 2
**Ý tưởng:** Kẹp tổng giữa $n$ lần số hạng nhỏ nhất và $n$ lần số hạng lớn nhất.

### Gợi ý 1
Tổng có $n$ số hạng. Số hạng nào lớn nhất, số hạng nào nhỏ nhất?

### Gợi ý 2
$\frac{n}{\sqrt{n^2 + n}} \le S_n \le \frac{n}{\sqrt{n^2 + 1}}$. Cả hai đầu dần tới 1.

## Bài 5 | 2
**Ý tưởng:** Giữ một số hạng bậc hai của khai triển Newton: $(1 + h)^n \ge \frac{n(n-1)}{2}h^2$.

### Gợi ý 1
a) $2^n = (1 + 1)^n$. b) Đặt $\sqrt[n]n = 1 + h_n$ với $h_n \ge 0$.

### Gợi ý 2
a) $2^n > \frac{n(n-1)}{2}$ nên $\frac{n}{2^n} < \frac{2}{n-1}$. b) $n \ge \frac{n(n-1)}{2}h_n^2$ nên $h_n \le \sqrt{\frac{2}{n-1}}$.

## Bài 6 | 2
**Ý tưởng:** Dãy tăng và bị chặn trên bởi 2; giới hạn thỏa mãn $L^2 = L + 2$.

### Gợi ý 1
Chứng minh bằng quy nạp $u_n < 2$. Sau đó xét dấu $u_{n+1} - u_n$ bằng nhân liên hợp.

### Gợi ý 2
$u_{n+1} - u_n$ có tử là $(2 - u_n)(1 + u_n) > 0$. Dùng Weierstrass rồi chọn nghiệm dương của $L^2 = L + 2$.

## Bài 7 | 2
**Ý tưởng:** Từ $u_2$ trở đi, AM-GM cho $u_n \ge \sqrt3$, và khi đó dãy giảm.

### Gợi ý 1
Áp dụng AM-GM cho hai số $u_n$ và $\frac{3}{u_n}$.

### Gợi ý 2
$u_{n+1} - u_n = \frac{3 - u_n^2}{2u_n} \le 0$ khi $u_n \ge \sqrt3$. Bỏ số hạng đầu không ảnh hưởng tới giới hạn.

## Bài 8 | 3
**Ý tưởng:** Dãy không đơn điệu; chứng minh $\lvert u_{n+1} - \varphi\rvert \le \frac1\varphi\lvert u_n - \varphi\rvert$.

### Gợi ý 1
Tính vài số hạng: dãy dao động. Hàm $1 + \frac1x$ nghịch biến nên không dùng được Weierstrass trực tiếp.

### Gợi ý 2
Dùng $\varphi = 1 + \frac1\varphi$: $u_{n+1} - \varphi = \frac1{u_n} - \frac1\varphi$, và $u_n \ge 1$.

## Bài 9 | 3
**Ý tưởng:** Phân tích $u_{n+1} - u_n$, $u_{n+1} - 1$, $u_{n+1} - 3$ thành tích, rồi chia trường hợp theo $u_2$ so với 1 và 3.

### Gợi ý 1
Hai điểm bất động là 1 và 3. Chú ý $u_2 = \frac{a^2 + 3}{4}$ chỉ phụ thuộc $a^2$.

### Gợi ý 2
$u_{n+1} - u_n = \frac{(u_n - 1)(u_n - 3)}{4}$: dấu của nó cho biết dãy tăng hay giảm trong mỗi khoảng $(0; 1)$, $(1; 3)$, $(3; +\infty)$.

### Gợi ý 3
Khi $u_2 > 3$, giả sử có giới hạn hữu hạn thì giới hạn lớn hơn 3, mâu thuẫn.

## Bài 10 | 3
**Ý tưởng:** Nhân với $\sin\frac{x}{2^n}$ và nhân đôi liên tiếp, rồi dùng $\lim\frac{\sin t}{t} = 1$.

### Gợi ý 1
Các góc chia đôi liên tiếp. Nhớ lại cách tính tích $\cos x\cos 2x\cdots$ ở chủ đề 1.

### Gợi ý 2
$P_n = \frac{\sin x}{2^n\sin\frac{x}{2^n}}$. Viết $2^n\sin\frac{x}{2^n} = x\cdot\frac{\sin t}{t}$ với $t = \frac{x}{2^n}$.

## Bài 11 | 3
**Ý tưởng:** $u_{n+1} - 1 = u_n(u_n - 1)$ cho $\frac1{u_n} = \frac{1}{u_n - 1} - \frac{1}{u_{n+1} - 1}$.

### Gợi ý 1
Chứng minh dãy tăng tới $+\infty$. Sau đó tìm cách viết $\frac1{u_n}$ thành hiệu.

### Gợi ý 2
Nghịch đảo $u_{n+1} - 1 = u_n(u_n - 1)$ rồi tách phân số $\frac{1}{u_n(u_n - 1)}$.

## Bài 12 | 3
**Ý tưởng:** Chia $u_{k+1} - u_k = \frac{u_k^2}{2024}$ cho $u_ku_{k+1}$: $\frac{u_k}{u_{k+1}} = 2024\left(\frac1{u_k} - \frac1{u_{k+1}}\right)$.

### Gợi ý 1
Trước hết chứng minh $u_n \to +\infty$ bằng phản chứng.

### Gợi ý 2
Chia hai vế của hệ thức truy hồi (sau khi chuyển $u_k$ sang trái) cho $u_ku_{k+1}$.

## Bài 13 | 4
**Ý tưởng:** $\frac{1}{u_{k+1}} - \frac1{u_k} = \frac{1}{1 - u_k} \approx 1$, nên $\frac1{u_n} \approx n$; kẹp bằng $n + 1 < \frac{1}{u_n} < n + 1 + 4\sqrt n$.

### Gợi ý 1
a) Dãy giảm và dương. b) Xét dãy nghịch đảo $\frac1{u_n}$.

### Gợi ý 2
Cộng dồn: $\frac1{u_n} = 2 + \sum_{k=1}^{n-1}\frac{1}{1 - u_k}$. Chặn dưới mỗi số hạng bởi 1.

### Gợi ý 3
Chặn trên: $\frac{1}{1 - u_k} \le 1 + 2u_k \le 1 + \frac{2}{k+1}$, và $\frac12 + \dots + \frac1n < 2\sqrt n$.

## Bài 14 | 4
**Ý tưởng:** Bình phương: $u_{k+1}^2 - u_k^2 = 2 + \frac{1}{u_k^2}$, cộng dồn và kẹp $u_n^2$ giữa $2n - 1$ và $2n - 1 + 2\sqrt{n - 1}$.

### Gợi ý 1
Dãy tăng; phản chứng để có $u_n \to +\infty$. Hiệu $u_{n+1} - u_n = \frac{1}{u_n}$ quá nhỏ để cộng dồn, hãy thử với $u_n^2$.

### Gợi ý 2
$u_n^2 = 2n - 1 + \sum_{k=1}^{n-1}\frac{1}{u_k^2} \ge 2n - 1$.

### Gợi ý 3
Dùng lại chặn dưới để có $\frac{1}{u_k^2} \le \frac1k$, rồi $\sum\frac1k < 2\sqrt n$. Chia cho $n$ và kẹp.

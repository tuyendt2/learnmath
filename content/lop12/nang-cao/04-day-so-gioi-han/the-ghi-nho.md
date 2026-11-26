# Thẻ ghi nhớ Dãy số và giới hạn

## Hội tụ

### Định lý Weierstrass về dãy đơn điệu phát biểu thế nào?
Dãy tăng và bị chặn trên thì hội tụ; dãy giảm và bị chặn dưới thì hội tụ.

### Với $u_{n+1} = f(u_n)$ và $f$ đồng biến, dãy có tính chất gì?
Dãy đơn điệu: tăng nếu $u_2 \ge u_1$, giảm nếu $u_2 \le u_1$ (quy nạp).

### Với $u_{n+1} = f(u_n)$ và $f$ nghịch biến thì sao?
Hai dãy con chỉ số chẵn và chỉ số lẻ đơn điệu ngược chiều (vì $f\circ f$ đồng biến). Có thể thay bằng đánh giá ánh xạ co.

### Khi nào được viết $L = f(L)$?
Chỉ sau khi đã chứng minh dãy hội tụ (và $f$ liên tục).

*Phản ví dụ:* $u_1 = 2$, $u_{n+1} = u_n^2$ cho $L \in \{0; 1\}$ nhưng dãy dần tới $+\infty$.

### Phát biểu định lý Lagrange?
$f$ liên tục trên $[a; b]$, có đạo hàm trên $(a; b)$ thì có $c \in (a; b)$: $f(b) - f(a) = f'(c)(b - a)$.

### Nguyên lý ánh xạ co cho dãy $u_{n+1} = f(u_n)$?
Nếu $\lvert f'(x)\rvert \le q < 1$ trên miền chứa dãy và $L = f(L)$ thì $\lvert u_n - L\rvert \le q^{n-1}\lvert u_1 - L\rvert \to 0$.

## Công thức tổng quát

### Giải $u_{n+2} = pu_{n+1} + qu_n$ thế nào?
Giải $x^2 = px + q$. Hai nghiệm phân biệt: $u_n = Ax_1^n + Bx_2^n$. Nghiệm kép: $u_n = (A + Bn)x_0^n$.

### Giải $u_{n+1} = au_n + g(n)$ thế nào?
Tìm một nghiệm riêng $v_n$ cùng dạng với $g(n)$; khi đó $u_n - v_n$ là cấp số nhân công bội $a$.

### Thấy $u_{n+1} = \sqrt{2 + u_n}$ thì nghĩ đến phép đổi biến nào?
$u_n = 2\cos\alpha_n$, vì $\sqrt{2 + 2\cos\alpha} = 2\cos\frac\alpha2$.

### Thấy $u_{n+1} - c = (u_n - c)^2$ thì làm gì?
Đặt $v_n = u_n - c$: $v_{n+1} = v_n^2$, nên $v_n = v_1^{2^{n-1}}$.

## Giới hạn của tổng

### Kỹ thuật tổng sai phân là gì?
Viết số hạng $a_k = b_k - b_{k+1}$, khi đó $\sum_{k=1}^n a_k = b_1 - b_{n+1}$.

### Công thức tổng tích phân?
$\lim\frac1n\sum_{k=1}^n f\left(\frac kn\right) = \int_0^1 f(x)\,dx$ với $f$ liên tục trên $[0; 1]$.

### Giới hạn của một tích $n$ thừa số xử lý thế nào?
Lấy lôgarit để đưa về tổng, thường là tổng tích phân.

### Bẫy khi tính giới hạn của tổng có $n$ số hạng?
Không được lấy giới hạn từng số hạng rồi cộng. Dùng kẹp, sai phân hoặc tổng tích phân.

## Giới hạn cơ bản và Stolz

### Ba giới hạn cơ bản khi $x \to 0$?
$\frac{\sin x}{x} \to 1$, $\frac{\ln(1 + x)}{x} \to 1$, $\frac{e^x - 1}{x} \to 1$.

### Phát biểu định lý Stolz?
$(b_n)$ tăng ngặt, $b_n \to +\infty$, và $\frac{a_{n+1} - a_n}{b_{n+1} - b_n} \to L$ thì $\frac{a_n}{b_n} \to L$.

### Dãy $u_{n+1} = u_n + \frac1{u_n}$ tăng như thế nào?
$u_n \sim \sqrt{2n}$. Mẹo: bình phương, $u_{n+1}^2 - u_n^2 = 2 + \frac{1}{u_n^2}$.

### Dãy $u_{n+1} = \sin u_n$ giảm về 0 nhanh cỡ nào?
$\sqrt n\,u_n \to \sqrt3$, vì $\frac1{\sin^2x} - \frac1{x^2} \to \frac13$ và định lý Stolz.

### Dãy nghiệm $x_n$ của phương trình phụ thuộc $n$: hướng xử lý chung?
Chứng minh nghiệm duy nhất bằng đơn điệu, chặn $x_n$ bằng giá trị của hàm tại vài điểm, rồi lấy lôgarit hoặc chia để tìm giới hạn.

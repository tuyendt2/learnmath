# Thẻ ghi nhớ Giới hạn dãy số

## Giới hạn cơ bản

### $\lim q^n$ bằng bao nhiêu, tùy theo $q$?
$\lim q^n = 0$ nếu $\lvert q\rvert < 1$; bằng $+\infty$ nếu $q > 1$; bằng 1 nếu $q = 1$; không có giới hạn nếu $q \le -1$.

### Vì sao $q^n \to 0$ khi $0 < q < 1$?
Viết $\frac1q = 1 + h$, $h > 0$. Bernoulli: $(1 + h)^n \ge 1 + nh$, nên $q^n < \frac{1}{nh} \to 0$.

### Tổng cấp số nhân lùi vô hạn bằng gì?
$u_1 + u_1q + u_1q^2 + \dots = \frac{u_1}{1 - q}$, với $\lvert q\rvert < 1$.

### Giới hạn dạng $\frac\infty\infty$ chứa các lũy thừa $a^n$ xử lý thế nào?
Chia tử và mẫu cho lũy thừa có cơ số lớn nhất.

### Khử dạng $\infty - \infty$ chứa căn bậc ba thế nào?
$\sqrt[3]A - B = \frac{A - B^3}{\sqrt[3]{A^2} + B\sqrt[3]A + B^2}$.

### "Mỗi số hạng dần tới 0 nên tổng dần tới 0" đúng không?
Sai khi số số hạng tăng theo $n$. Phải tính tổng hoặc kẹp tổng. Ví dụ $\sum_{k=1}^n\frac{1}{\sqrt{n^2 + k}} \to 1$.

## Kẹp

### Phát biểu nguyên lý kẹp?
$v_n \le u_n \le w_n$ và $\lim v_n = \lim w_n = L$ thì $\lim u_n = L$.

### Kẹp một tổng $n$ số hạng thế nào?
$n\cdot(\text{số hạng nhỏ nhất}) \le \text{tổng} \le n\cdot(\text{số hạng lớn nhất})$.

### Dùng nhị thức Newton để kẹp thế nào?
$(1 + h)^n \ge \frac{n(n - 1)}{2}h^2$ ($h \ge 0$). Cho $\frac{n}{2^n} < \frac{2}{n-1}$ và $\sqrt[n]n = 1 + h_n$ với $h_n \le \sqrt{\frac{2}{n-1}}$.

### Chặn trên của $1 + \frac{1}{\sqrt2} + \dots + \frac{1}{\sqrt n}$?
Nhỏ hơn $2\sqrt n$, vì $\frac{1}{\sqrt k} < \frac{2}{\sqrt k + \sqrt{k - 1}} = 2(\sqrt k - \sqrt{k-1})$.

## Đơn điệu và bị chặn

### Định lý Weierstrass nói gì?
Dãy tăng và bị chặn trên (hoặc giảm và bị chặn dưới) thì có giới hạn hữu hạn.

### Dãy tăng nhưng không bị chặn trên thì sao?
Dần tới $+\infty$. Thường chứng minh bằng phản chứng: nếu bị chặn thì giới hạn $L$ thỏa $L = f(L)$, vô lí.

### $u_n > a$ với mọi $n$ và $\lim u_n = L$ thì suy ra gì?
Chỉ suy ra $L \ge a$, không được kết luận $L > a$.

### Bốn bước xử lý dãy $u_{n+1} = f(u_n)$?
1. Tìm điểm bất động $f(x) = x$.
2. Tìm khoảng bất biến (quy nạp).
3. Chứng minh đơn điệu (xét dấu $f(x) - x$).
4. Weierstrass, rồi giải $L = f(L)$ và chọn nghiệm đúng.

### Nếu $f$ đồng biến thì dãy $u_{n+1} = f(u_n)$ có tính chất gì?
Dãy đơn điệu: $u_{n+1} - u_n$ cùng dấu với $u_2 - u_1$ (quy nạp).

### Nếu $f$ nghịch biến (dãy dao động) thì dùng phương pháp nào?
Phương pháp co: chứng minh $\lvert u_{n+1} - L\rvert \le q\lvert u_n - L\rvert$ với $0 < q < 1$, nên $\lvert u_n - L\rvert \le q^{n-1}\lvert u_1 - L\rvert \to 0$.

### Mẹo biện luận dãy $u_{n+1} = f(u_n)$ theo giá trị đầu?
Phân tích $u_{n+1} - u_n$ và $u_{n+1} - x_i$ (mỗi điểm bất động $x_i$) thành tích. Dấu của chúng cho khoảng bất biến và chiều đơn điệu trên từng khoảng.

## Tổng và tốc độ

### Tính $\lim\sum\frac{u_k}{u_{k+1}}$ khi $u_{k+1} = u_k + \frac{u_k^2}{c}$?
Chia cho $u_ku_{k+1}$: $\frac{u_k}{u_{k+1}} = c\left(\frac1{u_k} - \frac1{u_{k+1}}\right)$. Tổng dần tới $\frac{c}{u_1}$ vì $u_n \to +\infty$.

### Dãy $u_{n+1} = u_n + \frac1{u_n}$ tăng nhanh cỡ nào?
$u_n^2 \approx 2n$, cụ thể $\lim\frac{u_n}{\sqrt n} = \sqrt2$. Mẹo: xét $u_{n+1}^2 - u_n^2 = 2 + \frac{1}{u_n^2}$.

### Dãy $u_{n+1} = u_n - u_n^2$ ($0 < u_1 < 1$) giảm về 0 nhanh cỡ nào?
$u_n \approx \frac1n$, tức $\lim nu_n = 1$. Mẹo: $\frac1{u_{n+1}} - \frac1{u_n} = \frac{1}{1 - u_n} \to 1$.

## Bẫy

### Sai lầm lớn nhất với dãy $u_{n+1} = f(u_n)$ là gì?
Giải $L = f(L)$ khi chưa chứng minh giới hạn tồn tại. Ví dụ $u_{n+1} = 2u_n$, $u_1 = 2$: giải ra $L = 0$ nhưng dãy dần tới $+\infty$.

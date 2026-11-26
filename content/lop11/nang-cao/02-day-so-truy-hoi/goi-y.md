# Gợi ý từng tầng cho bài tập Dãy số truy hồi

## Bài 1 | 1
**Ý tưởng:** Điểm bất động $c = -1$, dãy $u_n + 1$ là cấp số nhân công bội 3.

### Gợi ý 1
Tìm hằng số $c$ sao cho $c = 3c + 2$, rồi trừ đẳng thức này khỏi hệ thức truy hồi.

### Gợi ý 2
$u_{n+1} + 1 = 3(u_n + 1)$, nên $u_n = 2\cdot 3^{n-1} - 1$. Tổng dùng công thức tổng cấp số nhân.

## Bài 2 | 1
**Ý tưởng:** Tìm nghiệm riêng dạng $an + b$, được $w_n = -n$.

### Gợi ý 1
Vế phải có thêm đa thức bậc nhất $n - 1$. Thử một dãy $w_n = an + b$ thỏa mãn đúng hệ thức đó.

### Gợi ý 2
So sánh hệ số được $a = -1$, $b = 0$. Khi đó $v_n = u_n + n$ là cấp số nhân công bội 2.

## Bài 3 | 2
**Ý tưởng:** Nghiệm riêng dạng $c\cdot 3^n$ với $c = 1$.

### Gợi ý 1
Phần thêm vào là $3^n$, cơ số khác công bội 2. Thử $w_n = c\cdot 3^n$.

### Gợi ý 2
$3c = 2c + 1$ nên $c = 1$. Dãy $u_n - 3^n$ là cấp số nhân công bội 2, số hạng đầu $-2$.

## Bài 4 | 1
**Ý tưởng:** Phương trình đặc trưng $x^2 = 5x - 6$ có nghiệm 2 và 3.

### Gợi ý 1
Viết $u_n = A\cdot 2^n + B\cdot 3^n$.

### Gợi ý 2
Giải hệ $2A + 3B = 2$, $4A + 9B = 8$.

## Bài 5 | 2
**Ý tưởng:** Nghiệm kép $x = 2$ nên $u_n = (A + Bn)2^n$.

### Gợi ý 1
Phương trình đặc trưng là $(x - 2)^2 = 0$. Dạng nghiệm khi có nghiệm kép là gì?

### Gợi ý 2
$2(A + B) = 1$ và $4(A + 2B) = 4$ cho $A = 0$, $B = \frac12$.

## Bài 6 | 2
**Ý tưởng:** Dùng $u_n = S_n - S_{n-1}$ để có $u_n = \frac{n - 1}{n + 1}u_{n-1}$, rồi nhân liên tiếp.

### Gợi ý 1
Viết hệ thức cho $n$ và cho $n - 1$ rồi trừ vế theo vế.

### Gợi ý 2
$(n^2 - 1)u_n = (n - 1)^2u_{n-1}$. Nhân các tỉ số $\frac{k - 1}{k + 1}$ từ $k = 2$ đến $n$, phần lớn thừa số triệt tiêu.

## Bài 7 | 2
**Ý tưởng:** Tính vài số hạng, thấy $u_5 = u_1$, dãy tuần hoàn chu kỳ 4.

### Gợi ý 1
Tính $u_2, u_3, u_4, u_5$ bằng phân số.

### Gợi ý 2
$u_5 = u_1$ nên $u_{n+4} = u_n$. Tìm số dư của 2025 khi chia cho 4.

## Bài 8 | 3
**Ý tưởng:** Hai điểm bất động 1 và 2; dãy $\frac{u_n - 2}{u_n - 1}$ là cấp số nhân công bội $\frac12$.

### Gợi ý 1
Giải $x = \frac{3x - 2}{x}$. Tính $u_{n+1} - 2$ và $u_{n+1} - 1$ theo $u_n$.

### Gợi ý 2
$u_{n+1} - 2 = \frac{u_n - 2}{u_n}$, $u_{n+1} - 1 = \frac{2(u_n - 1)}{u_n}$. Chia hai đẳng thức cho nhau.

### Gợi ý 3
Với $v_n = \frac{1}{2^n}$, giải ngược $u_n = \frac{2 - v_n}{1 - v_n}$.

## Bài 9 | 2
**Ý tưởng:** $u_1 = \cos\frac\pi6$ và $\sqrt{\frac{1 + \cos\alpha}{2}} = \cos\frac\alpha2$: góc chia đôi mỗi bước.

### Gợi ý 1
Biểu thức $\frac{1 + u}{2}$ gợi nhớ công thức hạ bậc nào?

### Gợi ý 2
Nếu $u_n = \cos\alpha$ với $\alpha \in \left(0; \frac\pi2\right)$ thì $u_{n+1} = \cos\frac\alpha2$.

## Bài 10 | 2
**Ý tưởng:** $u_{n+1} - 1 = (u_n - 1)^2$ và $u_{n+1} - 2 = u_n(u_n - 2)$.

### Gợi ý 1
Vế phải $u_n^2 - 2u_n + 2$ gần với một bình phương. Thêm bớt để thấy.

### Gợi ý 2
a) $v_n = u_n - 1$ thỏa mãn $v_{n+1} = v_n^2$. b) quy nạp với $u_{n+2} - 2 = u_{n+1}(u_{n+1} - 2)$.

## Bài 11 | 2
**Ý tưởng:** $\frac{1}{u_k + 1} = \frac{1}{u_k} - \frac{1}{u_{k+1}}$, tổng triệt tiêu.

### Gợi ý 1
Tính $\frac{1}{u_{k+1}} = \frac{1}{u_k(u_k + 1)}$ và tách thành hiệu hai phân số.

### Gợi ý 2
$S_n = 1 - \frac{1}{u_{n+1}}$. Dãy tăng và $u_{n+1} > 1$ nên $0 < S_n < 1$.

## Bài 12 | 3
**Ý tưởng:** $x_n + y_n\sqrt2 = (1 + \sqrt2)^n$, hoặc khử $y$ để có $x_{n+2} = 2x_{n+1} + x_n$.

### Gợi ý 1
a) Tính trực tiếp $x_{n+1}^2 - 2y_{n+1}^2$ theo $x_n$, $y_n$.

### Gợi ý 2
b) Nhận xét $(x_n + y_n\sqrt2)(1 + \sqrt2) = (x_n + 2y_n) + (x_n + y_n)\sqrt2$.

## Bài 13 | 4
**Ý tưởng:** $u_n = x_n^2$ với $x_{n+2} = 3x_{n+1} - x_n$; dùng bất biến $x_{n+1}^2 - 3x_{n+1}x_n + x_n^2 = -1$.

### Gợi ý 1
Tính vài số hạng $1, 1, 4, 25, 169$ và lấy căn. Dãy căn thỏa mãn truy hồi tuyến tính nào?

### Gợi ý 2
Với $x_{n+2} = 3x_{n+1} - x_n$, chứng minh $D_n = x_{n+1}^2 - 3x_{n+1}x_n + x_n^2$ không đổi.

### Gợi ý 3
Bình phương $x_{n+2} = 3x_{n+1} - x_n$ và thay $6x_{n+1}x_n$ từ bất biến, được đúng hệ thức của $(u_n)$.

## Bài 14 | 4
**Ý tưởng:** Bất biến $u_{n+1}u_{n-1} - u_n^2 = 2$, trừ hai bất biến liên tiếp được $u_{n+1} = 4u_n - u_{n-1}$.

### Gợi ý 1
Viết giả thiết dưới dạng $u_{n+1}u_{n-1} - u_n^2 = 2$ và viết thêm đẳng thức đó cho chỉ số $n + 1$.

### Gợi ý 2
Trừ hai đẳng thức, nhóm lại được $u_n(u_{n+2} + u_n) = u_{n+1}(u_{n+1} + u_{n-1})$. Tỉ số $\frac{u_{n+1} + u_{n-1}}{u_n}$ là hằng số.

### Gợi ý 3
Đừng quên chứng minh $u_n > 0$ để được phép chia.

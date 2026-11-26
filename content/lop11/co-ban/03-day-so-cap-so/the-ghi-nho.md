# Thẻ ghi nhớ Dãy số, cấp số cộng, cấp số nhân

## Dãy số

### Dãy số tăng khi nào?
$u_{n+1} > u_n$ với mọi $n$.

### Cách xét tính tăng giảm?
Xét dấu $u_{n+1} - u_n$ hoặc so sánh $\frac{u_{n+1}}{u_n}$ với 1 (khi $u_n > 0$).

### Dãy bị chặn là gì?
Có $m$, $M$ với $m \le u_n \le M$ với mọi $n$.

### Truy hồi $u_{n+1} = au_n + b$ ($a \ne 1$) đưa về cấp số nhân thế nào?
Trừ hằng số $c$ với $c = ac + b$.

## Cấp số cộng

### Số hạng tổng quát cấp số cộng?
$u_n = u_1 + (n - 1)d$.

### Tổng $n$ số hạng đầu cấp số cộng?
$S_n = \frac{n(u_1 + u_n)}{2} = \frac{n[2u_1 + (n-1)d]}{2}$.

### Tính chất ba số hạng liên tiếp của cấp số cộng?
$2u_k = u_{k-1} + u_{k+1}$.

### Đặt ba số lập cấp số cộng thế nào cho gọn?
$a - d$, $a$, $a + d$.

### $S_n = An^2 + Bn$ thì dãy là gì?
Cấp số cộng với $d = 2A$.

## Cấp số nhân

### Số hạng tổng quát cấp số nhân?
$u_n = u_1q^{n-1}$.

### Tổng $n$ số hạng đầu cấp số nhân ($q \ne 1$)?
$S_n = \frac{u_1(1 - q^n)}{1 - q}$.

### Tính chất ba số hạng liên tiếp cấp số nhân?
$u_k^2 = u_{k-1}u_{k+1}$.

### Lãi kép sau $n$ năm?
$A = A_0(1 + r)^n$.

### Số có $k$ chữ số 1?
$\frac{10^k - 1}{9}$.

## Bẫy hay gặp

### Lỗi khi suy $u_n$ từ $S_n$?
Quên kiểm tra $n = 1$.

### Bài bóng nảy: lỗi hay gặp?
Quên nhân đôi quãng đường nảy lên (lên rồi xuống).

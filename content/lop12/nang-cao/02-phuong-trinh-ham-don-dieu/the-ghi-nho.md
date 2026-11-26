# Thẻ ghi nhớ Phương trình giải bằng tính đơn điệu

## Nguyên lý

### Nếu $f$ đơn điệu trên khoảng $D$ thì phương trình $f(x) = k$ có bao nhiêu nghiệm trên $D$?
Nhiều nhất một nghiệm.

### Với $f$ đơn điệu trên $D$ và $u, v \in D$, $f(u) = f(v)$ suy ra gì?
$u = v$.

*Vì sao:* $u < v$ kéo theo $f(u) < f(v)$ (hoặc $>$), nên $u \ne v$ thì $f(u) \ne f(v)$.

### Nếu $f$ đồng biến, $g$ nghịch biến trên $D$ thì $f(x) = g(x)$ có bao nhiêu nghiệm?
Nhiều nhất một nghiệm, vì $f - g$ đồng biến.

### Bất phương trình $f(u) < f(v)$ với $f$ đồng biến tương đương với gì?
$u < v$. Nếu $f$ nghịch biến thì $u > v$.

### Nếu $f''(x) > 0$ trên một khoảng thì $f(x) = 0$ có bao nhiêu nghiệm?
Nhiều nhất hai nghiệm, vì $f'$ đồng biến nên có nhiều nhất một nghiệm, $f$ chỉ đổi chiều biến thiên nhiều nhất một lần.

### Những hàm sơ cấp nào luôn đồng biến (dùng để ghép thành hàm đồng biến)?
$\sqrt[n]{x}$, $x^{2k+1}$, $a^x$ và $\log_a x$ với $a > 1$, $x^3 + x$, $\ln x + x$. Tổng các hàm đồng biến là hàm đồng biến.

## Nhận dạng hàm đặc trưng

### Thấy $\sqrt{ax + b}$ trong phương trình đa thức, nên thử gì?
Đặt $t = \sqrt{ax + b}$, viết vế chứa căn thành $t^3 + kt$, rồi viết vế kia thành $u^3 + ku$ với $u$ là biểu thức của $x$.

### Thấy $\log\frac uv$ ở một vế và $v - u$ ở vế kia, nên làm gì?
Đưa về $\log u + u = \log v + v$; hàm $\log t + t$ đồng biến nên $u = v$.

### Thấy $8x^3 - 36x^2 + \dots$ thì nghĩ đến gì?
Khai triển $(2x - 3)^3 = 8x^3 - 36x^2 + 54x - 27$ để tạo hàm đặc trưng.

### Phương trình $a^x + b^x = c^x$ giải thế nào?
Chia hai vế cho $c^x$: $\left(\frac ac\right)^x + \left(\frac bc\right)^x = 1$. Nếu $a, b < c$ thì vế trái nghịch biến; nhẩm nghiệm.

### Phương trình mũ $2^x = x + 1$ có những nghiệm nào và vì sao chỉ có thế?
$x = 0$ và $x = 1$. Hàm $2^x - x - 1$ có đạo hàm cấp hai dương nên có nhiều nhất hai nghiệm.

## Hệ phương trình

### Hệ có một phương trình dạng $f(x) = f(y)$ thì làm gì?
Chứng minh $f$ đơn điệu trên miền chứa cả $x$ và $y$, suy ra $x = y$, thế vào phương trình còn lại.

### Hệ hoán vị $y = f(x)$, $z = f(y)$, $x = f(z)$ với $f$ đồng biến có nghiệm dạng nào?
$x = y = z$. Giả sử $x > y$ thì $y > z$, rồi $z > x$: mâu thuẫn.

### Vì sao phải tìm điều kiện xác định trước khi dùng hàm đặc trưng $t^3 - 3t$?
Hàm $t^3 - 3t$ không đơn điệu trên $\mathbb R$; nó chỉ nghịch biến trên $[-1; 1]$. Điều kiện xác định giúp đưa các biến vào đúng khoảng đó.

## Tham số và bẫy

### Các bước giải bài "tìm $m$ để phương trình có nghiệm" bằng hàm số?
1. Đặt ẩn phụ và tìm đúng miền giá trị của nó.
2. Cô lập $m = g(t)$.
3. Lập bảng biến thiên của $g$, đọc số giao điểm với $y = m$.

### Bẫy khi dùng $f(u) = f(v) \Rightarrow u = v$?
$f$ phải đơn điệu trên **một khoảng** chứa cả $u$ và $v$. Hàm như $\frac1t$ nghịch biến trên từng khoảng nhưng $f(-1) < f(1)$.

### Bẫy khi nhẩm được nghiệm?
Phải chứng minh tính đơn điệu (hoặc số nghiệm tối đa) thì mới kết luận nghiệm đó là duy nhất.

### Khi đặt $t = \sqrt{1 - x^2}$ với $x \in [-1; 1]$ thì $t$ chạy trong miền nào?
$t \in [0; 1]$, và mỗi $t \in [0; 1)$ ứng với hai giá trị $x = \pm\sqrt{1 - t^2}$.

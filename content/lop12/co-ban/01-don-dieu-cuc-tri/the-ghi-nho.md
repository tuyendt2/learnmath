# Thẻ ghi nhớ Tính đơn điệu và cực trị của hàm số

## Tính đơn điệu

### Điều kiện đủ để hàm số đồng biến trên khoảng $K$ là gì?
$f'(x) \ge 0$ với mọi $x \in K$, và $f'(x) = 0$ chỉ tại hữu hạn điểm.

Ví dụ: $y = x^3$ có $y' = 3x^2 \ge 0$, chỉ bằng $0$ tại $x = 0$, nên đồng biến trên $\mathbb R$.

### Bốn bước xét tính đơn điệu của một hàm số?
1. Tìm tập xác định.
2. Tính $f'$, tìm điểm $f' = 0$ hoặc $f'$ không xác định.
3. Lập bảng xét dấu $f'$.
4. Kết luận các khoảng đồng biến, nghịch biến.

### Đạo hàm của $y = \frac{ax + b}{cx + d}$ là gì?
$y' = \frac{ad - bc}{(cx + d)^2}$. Dấu của $y'$ là dấu của $ad - bc$, không đổi trên mỗi khoảng xác định.

### Vì sao không được viết "đồng biến trên $(-\infty; 1) \cup (1; +\infty)$"?
Hàm số chỉ đồng biến trên **từng** khoảng. Ví dụ $y = -\frac1x$ có $y(-1) = 1 > y(1) = -1$ dù $-1 < 1$.

### Hàm bậc ba $y = ax^3 + bx^2 + cx + d$ đồng biến trên $\mathbb R$ khi nào?
Khi $a > 0$ và $\Delta' = b^2 - 3ac \le 0$ (tức là $y' \ge 0$ với mọi $x$).

Nghịch biến trên $\mathbb R$: $a < 0$ và $\Delta' \le 0$.

### Hàm $y = \frac{ax + b}{cx + d}$ nghịch biến trên khoảng $(\alpha; \beta)$ cần những điều kiện gì?
1. $ad - bc < 0$.
2. $-\frac dc \notin (\alpha; \beta)$ (hàm phải xác định trên cả khoảng).

## Cực trị

### Dấu hiệu nhận biết điểm cực đại bằng $f'$?
$f$ liên tục tại $x_0$ và $f'$ đổi dấu từ $+$ sang $-$ khi đi qua $x_0$.

(Cực tiểu: đổi dấu từ $-$ sang $+$.)

### Dùng $f''$ để nhận biết cực trị như thế nào?
Với $f'(x_0) = 0$:
- $f''(x_0) < 0$: cực đại;
- $f''(x_0) > 0$: cực tiểu;
- $f''(x_0) = 0$: chưa kết luận, phải xét dấu $f'$.

### $f'(x_0) = 0$ thì $x_0$ có chắc là điểm cực trị không?
Không. Phản ví dụ $y = x^3$: $y'(0) = 0$ nhưng $y' \ge 0$ ở hai bên, không đổi dấu.

### Hàm số có thể đạt cực trị tại điểm không có đạo hàm không?
Có. $y = \lvert x\rvert$ đạt cực tiểu tại $x = 0$ dù không có đạo hàm tại đó.

### Phân biệt "điểm cực trị", "giá trị cực trị", "điểm cực trị của đồ thị"?
- Điểm cực trị: $x_0$.
- Giá trị cực trị: $f(x_0)$.
- Điểm cực trị của đồ thị: $(x_0; f(x_0))$.

### Giá trị cực đại có luôn lớn hơn giá trị cực tiểu không?
Không. Ví dụ $y = \frac{x^2 + 3}{x - 1}$ có $y_{\text{CĐ}} = -2 < y_{\text{CT}} = 6$. Cực trị chỉ là lớn nhất, nhỏ nhất **ở gần** điểm đó.

### Hàm bậc ba có hai điểm cực trị khi nào?
Khi $y' = 0$ có hai nghiệm phân biệt: $\Delta' = b^2 - 3ac > 0$.

Nếu $a > 0$: cực đại ở nghiệm nhỏ, cực tiểu ở nghiệm lớn.

### Hàm trùng phương $y = ax^4 + bx^2 + c$ có ba điểm cực trị khi nào?
Khi $ab < 0$. Vì $y' = 2x(2ax^2 + b)$, cần $x^2 = -\frac{b}{2a}$ có hai nghiệm khác $0$.

### Tìm $m$ để hàm số đạt cực tiểu tại $x_0$: bước nào hay bị quên?
Bước **thử lại**. $f'(x_0) = 0$ chỉ là điều kiện cần; phải kiểm tra $f''(x_0) > 0$ hoặc xét dấu $f'$ để loại giá trị cho cực đại.

## Đọc $f'$ và đồ thị

### Cho $f'(x) = (x - a)^k g(x)$ với $g(a) \ne 0$. Khi nào $a$ là điểm cực trị?
Khi $k$ **lẻ** ($f'$ đổi dấu). Nếu $k$ chẵn thì $f'$ không đổi dấu, $a$ không là điểm cực trị.

### Nhìn đồ thị $y = f'(x)$, đọc khoảng đồng biến của $f$ thế nào?
Phần đồ thị $f'$ nằm **trên** trục hoành ứng với khoảng $f$ đồng biến; nằm **dưới** ứng với khoảng $f$ nghịch biến.

### Nhìn đồ thị $y = f'(x)$, điểm nào là cực trị của $f$?
Điểm đồ thị $f'$ **cắt xuyên qua** trục hoành. Điểm chỉ **tiếp xúc** trục hoành không phải cực trị.

### Đạo hàm của $g(x) = f(u(x))$ là gì? Bẫy hay gặp?
$g'(x) = u'(x)\cdot f'(u(x))$. Bẫy: quên thừa số $u'(x)$, làm mất điểm cực trị (ví dụ $g(x) = f(x^2)$ luôn có thêm nghiệm $x = 0$ từ $u' = 2x$).

## Ứng dụng

### Vật chuyển động với tọa độ $s(t)$. Khi nào vật đi ngược chiều dương?
Khi $v(t) = s'(t) < 0$.

### Quãng đường và độ dời khác nhau thế nào khi vật đổi chiều?
Độ dời là $s(t_2) - s(t_1)$. Quãng đường phải chia tại các thời điểm $v$ đổi dấu và cộng các $\lvert\Delta s\rvert$ của từng đoạn.

### Tam giác ba điểm cực trị của $y = ax^4 + bx^2 + c$ vuông cân khi nào?
Khi $b^3 = -8a$ (với $ab < 0$). Tam giác luôn cân tại điểm cực trị nằm trên $Oy$.

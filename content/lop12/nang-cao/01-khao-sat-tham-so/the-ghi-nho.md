# Thẻ ghi nhớ Khảo sát hàm số nâng cao

## Cực trị

### Hàm bậc ba $y = ax^3 + bx^2 + cx + d$ có hai cực trị khi nào?
Khi $y' = 3ax^2 + 2bx + c = 0$ có hai nghiệm phân biệt, tức là $b^2 - 3ac > 0$.

### Làm sao viết nhanh đường thẳng qua hai điểm cực trị của hàm bậc ba?
Chia $y$ cho $y'$: $y = q(x)\,y' + r(x)$. Đường thẳng cần tìm là $y = r(x)$.

*Vì sao:* tại điểm cực trị $y' = 0$ nên $y = r(x)$.

### Tâm đối xứng của đồ thị hàm bậc ba là điểm nào?
Điểm uốn $I$ có hoành độ $x = -\frac{b}{3a}$ (nghiệm của $y'' = 0$). Hai điểm cực trị đối xứng qua $I$.

### Hàm trùng phương $y = ax^4 + bx^2 + c$ có ba cực trị khi nào?
Khi $ab < 0$.

### Với $y = x^4 - 2mx^2 + c$, các yếu tố của tam giác ba cực trị?
$BC = 2\sqrt m$, $AB^2 = m + m^4$, đường cao $AH = m^2$, $S = m^2\sqrt m$.

Vuông: $m^3 = 1$. Đều: $m^3 = 3$. $R = \frac{AB^2}{2AH}$.

## Tiếp tuyến

### Phương trình tiếp tuyến tại điểm có hoành độ $x_0$?
$y = f'(x_0)(x - x_0) + f(x_0)$.

### Cách đếm số tiếp tuyến kẻ từ điểm $A(\alpha; \beta)$ đến đồ thị bậc ba?
Đếm số nghiệm $x_0$ của $\beta = f'(x_0)(\alpha - x_0) + f(x_0)$.

*Vì sao đúng với bậc ba:* một đường thẳng không thể tiếp xúc đồ thị bậc ba tại hai điểm, nên tiếp điểm khác nhau cho tiếp tuyến khác nhau.

### Điều kiện để hai đồ thị $y = f(x)$, $y = g(x)$ tiếp xúc nhau?
Hệ $f(x) = g(x)$ và $f'(x) = g'(x)$ có nghiệm. Với đa thức: $f - g$ có nghiệm bội.

### Tiếp tuyến tại $x_0$ của đồ thị bậc ba cắt lại đồ thị tại hoành độ nào?
Tại $x_1 = -\frac ba - 2x_0$.

*Vì sao:* phương trình hoành độ có nghiệm kép $x_0$ và nghiệm $x_1$, tổng ba nghiệm bằng $-\frac ba$.

### Tiếp tuyến của $y = \frac{ax + b}{cx + d}$ cắt hai tiệm cận tại $A$, $B$ có tính chất gì?
Tiếp điểm $M$ là trung điểm $AB$, và diện tích tam giác $IAB$ ($I$ là giao hai tiệm cận) không đổi.

### Hai tiếp tuyến vuông góc thì hệ số góc thỏa gì?
$k_1k_2 = -1$. Tiếp tuyến nằm ngang ($k = 0$) không vuông góc được với tiếp tuyến nào của đồ thị hàm số.

## Tương giao

### Đồ thị bậc ba cắt $Ox$ tại ba điểm có hoành độ lập cấp số cộng: điều kiện cần là gì?
Điểm uốn nằm trên $Ox$, tức là $f\left(-\frac{b}{3a}\right) = 0$. Sau đó **phải thử lại** xem có ba nghiệm phân biệt không.

### Khi đường thẳng hệ số góc $k$ cắt đồ thị tại $A(x_1; \cdot)$, $B(x_2; \cdot)$, tính $AB^2$ thế nào?
$AB^2 = (1 + k^2)(x_1 - x_2)^2 = (1 + k^2)\left[(x_1 + x_2)^2 - 4x_1x_2\right]$, rồi dùng Viète.

### Tìm điểm cố định của họ đồ thị $y = f(x; m)$ thế nào?
Viết $y = m\,P(x) + Q(x)$. Điểm cố định thỏa $P(x) = 0$ và $y = Q(x)$.

### Phương pháp cô lập tham số dùng khi nào?
Khi đưa được phương trình về $m = g(x)$. Số nghiệm bằng số giao điểm của đường thẳng $y = m$ với đồ thị $y = g(x)$, đọc từ bảng biến thiên.

## Trị tuyệt đối và bẫy

### Số điểm cực trị của $y = \lvert f(x)\rvert$?
Bằng số cực trị của $f$ cộng số nghiệm bội lẻ của $f(x) = 0$ (không trùng điểm cực trị).

### Số điểm cực trị của $y = f(\lvert x\rvert)$?
Nếu $f$ có $k$ điểm cực trị dương thì $f(\lvert x\rvert)$ có $2k + 1$ điểm cực trị.

### Bẫy khi tìm $m$ để $y = \frac{ax + b}{cx + d}$ đơn điệu trên một khoảng?
Ngoài điều kiện dấu của $y'$, khoảng đang xét **không được chứa** điểm $x = -\frac dc$.

### Bẫy khi "đường thẳng qua hai cực trị song song với $d$"?
Cùng hệ số góc **và** khác tung độ gốc (nếu không thì hai đường thẳng trùng nhau).

### Bẫy khi dùng Viète cho phương trình hoành độ giao điểm?
Quên điều kiện có hai nghiệm phân biệt, và quên điều kiện nghiệm khác nghiệm đã nhẩm hoặc khác điểm hàm không xác định.

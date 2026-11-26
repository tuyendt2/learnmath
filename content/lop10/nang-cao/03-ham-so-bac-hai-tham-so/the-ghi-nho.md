# Thẻ ghi nhớ Hàm số bậc hai và bài toán tham số

## Hàm số bậc hai

### Dạng chính tắc của $ax^2 + bx + c$?
$a\left(x + \frac{b}{2a}\right)^2 - \frac{\Delta}{4a}$, với $\Delta = b^2 - 4ac$.

### Tọa độ đỉnh và trục đối xứng của parabol $y = ax^2 + bx + c$?
Đỉnh $I\left(-\frac{b}{2a}; -\frac{\Delta}{4a}\right)$, trục đối xứng $x = -\frac{b}{2a}$.

### Hàm $y = ax^2 + bx + c$ với $a > 0$ đồng biến, nghịch biến trên đâu?
Nghịch biến trên $\left(-\infty; -\frac{b}{2a}\right)$, đồng biến trên $\left(-\frac{b}{2a}; +\infty\right)$.

### Với $a > 0$, giá trị lớn nhất trên đoạn $[\alpha; \beta]$ đạt ở đâu?
Luôn ở một đầu mút: đầu mút **xa đỉnh hơn**.

### Với $a > 0$, giá trị nhỏ nhất trên đoạn $[\alpha; \beta]$ tìm thế nào?
Đỉnh $x_0$ thuộc đoạn thì $\min = f(x_0)$. Đỉnh bên trái đoạn thì $\min = f(\alpha)$. Đỉnh bên phải đoạn thì $\min = f(\beta)$.

### Bài "tìm $m$ để GTNN trên đoạn bằng $k$" có bẫy gì?
Phải chia trường hợp theo vị trí đỉnh, giải trong từng trường hợp rồi **đối chiếu** $m$ với điều kiện của trường hợp đó.

## Viète và so sánh nghiệm

### Điều kiện để phương trình bậc hai có hai nghiệm phân biệt cùng lớn hơn $\alpha$?
$\Delta > 0$, $(x_1 - \alpha) + (x_2 - \alpha) > 0$ và $(x_1 - \alpha)(x_2 - \alpha) > 0$.

### Điều kiện để $x_1 < \alpha < x_2$?
$a\cdot f(\alpha) < 0$. Không cần thêm điều kiện $\Delta > 0$.

### $(x_1 - \alpha)(x_2 - \alpha)$ viết theo $S$, $P$?
$P - \alpha S + \alpha^2$.

### Vì sao "$S > 2\alpha$ và $P > \alpha^2$" không đủ để hai nghiệm lớn hơn $\alpha$?
Phải xét $(x_1 - \alpha)(x_2 - \alpha) > 0$, không phải $P > \alpha^2$. Ví dụ $0{,}5$ và $4$: $S > 2$, $P > 1$ nhưng $0{,}5 < 1$.

## Biện luận số nghiệm

### Các bước biện luận số nghiệm bằng đồ thị?
1. Cô lập tham số: $g(x) = m$.
2. Lập bảng biến thiên của $g$ trên miền xét.
3. Đếm giao điểm với đường thẳng $y = m$, chú ý tung độ đỉnh và giá trị ở đầu mút.

### Vẽ $y = \lvert f(x)\rvert$ từ đồ thị $y = f(x)$ thế nào?
Giữ phần trên trục hoành, lấy đối xứng phần dưới trục hoành qua trục hoành.

### Vẽ $y = f(\lvert x\rvert)$ từ đồ thị $y = f(x)$ thế nào?
Giữ phần bên phải trục tung (kể cả trên trục), bỏ phần bên trái, rồi lấy đối xứng phần giữ lại qua trục tung.

### Đặt $t = x^2 - 2x$: mỗi giá trị $t$ cho bao nhiêu nghiệm $x$?
$t > -1$: hai nghiệm $x = 1 \pm \sqrt{t + 1}$. $t = -1$: một nghiệm $x = 1$. $t < -1$: không có.

### Khi đặt ẩn phụ trong bài biện luận, cần làm thêm gì?
Tìm **miền giá trị** của ẩn phụ và **số nghiệm $x$** ứng với mỗi giá trị của ẩn phụ.

## Bất phương trình và cực trị

### $ax^2 + bx + c > 0$ với mọi $x$ khi nào?
Khi $a > 0$ và $\Delta < 0$ (với $a \ne 0$). Nếu $a$ chứa tham số, xét riêng $a = 0$.

### Tìm GTNN của biểu thức bậc hai hai biến $P(x, y)$ thế nào?
Coi là tam thức theo $x$, tạo bình phương $(x - \dots)^2$; phần còn lại là tam thức theo $y$, tiếp tục tạo bình phương.

### Đặt $t = xy$ khi biết $x^2 + y^2 = A(t)$: miền của $t$ tìm thế nào?
Từ $(x + y)^2 = A + 2t \ge 0$ và $(x - y)^2 = A - 2t \ge 0$.

### $\lvert a\rvert + \lvert b\rvert$ bằng gì theo $a + b$ và $a - b$?
$\lvert a\rvert + \lvert b\rvert = \max\{\lvert a + b\rvert, \lvert a - b\rvert\}$.

### Hệ số của $ax^2 + bx + c$ biểu diễn qua $f(-1), f(0), f(1)$?
$c = f(0)$, $b = \frac{f(1) - f(-1)}{2}$, $a = \frac{f(1) + f(-1)}{2} - f(0)$.

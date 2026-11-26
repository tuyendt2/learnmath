# Thẻ ghi nhớ Bất đẳng thức bằng phương pháp hàm số

## Bất đẳng thức một biến kinh điển

### $e^x$ so với $1 + x$?
$e^x \ge 1 + x$ với mọi $x$, dấu "=" khi $x = 0$.

*Vì sao:* $f(x) = e^x - 1 - x$ có $f'(x) = e^x - 1$ đổi dấu từ âm sang dương tại $0$.

### $\ln x$ so với $x - 1$?
$\ln x \le x - 1$ với mọi $x > 0$, dấu "=" khi $x = 1$.

### Kẹp $\ln(1 + u)$ giữa hai phân thức thế nào?
$\frac{u}{1 + u} \le \ln(1 + u) \le u$ với $u > -1$.

### $\sin x$ và $\cos x$ so với đa thức?
Với $x \ge 0$: $x - \frac{x^3}{6} \le \sin x \le x$. Với mọi $x$: $\cos x \ge 1 - \frac{x^2}{2}$.

### Kỹ thuật "đạo hàm nhiều lần" là gì?
Khi dấu của $f'$ chưa rõ, xét $f''$ (hoặc cao hơn). Nếu $f''\ge 0$ và $f'(a) = 0$ thì $f' \ge 0$ trên $[a; +\infty)$; nếu thêm $f(a) = 0$ thì $f \ge 0$ trên đó.

### Dùng hàm nào để so sánh $a^b$ với $b^a$?
$h(x) = \frac{\ln x}{x}$, đồng biến trên $(0; e]$, nghịch biến trên $[e; +\infty)$. Với $e \le a < b$: $a^b > b^a$.

## Đổi biến

### Nếu $x^2 + y^2 = k$, đặt $t = x + y$ thì $t$ và $xy$ ra sao?
$t \in [-\sqrt{2k}; \sqrt{2k}]$ và $xy = \frac{t^2 - k}{2}$.

### Nếu $x, y \ge 0$, $x + y = s$, đặt $t = xy$ thì miền của $t$?
$t \in \left[0; \frac{s^2}{4}\right]$.

### Điều kiện để tồn tại $x, y$ thực với $x + y = S$, $xy = P$?
$S^2 \ge 4P$. Thêm $x, y \ge 0$ thì cần $S \ge 0$, $P \ge 0$.

### Bất đẳng thức thuần nhất hai biến nên đổi biến thế nào?
Chia cho lũy thừa phù hợp của một biến, đặt $t = \frac ba$ (hoặc $t = \frac xy$).

### Khi $a + b + c = 0$ thì $a^3 + b^3 + c^3$ bằng gì?
$a^3 + b^3 + c^3 = 3abc$.

## Kỹ thuật nhiều biến

### Dồn biến bằng cách cố định biến là gì?
Coi một biến là ẩn, các biến còn lại là tham số, hoặc đánh giá cặp $(b, c)$ theo $b + c$ (ví dụ $bc \le \frac{(b+c)^2}{4}$) để còn hàm một biến.

### Vì sao hay giả sử $a = \min\{a, b, c\}$?
Để có thêm điều kiện như $a \le \frac{a + b + c}{3}$, giúp xác định dấu các hệ số (ví dụ $1 - 2a > 0$ khi $a + b + c = 1$).

### Phương pháp tiếp tuyến dùng khi nào và làm thế nào?
Khi bất đẳng thức có dạng $\sum f(a_i) \ge$ (hoặc $\le$) hằng số, với $\sum a_i$ cố định. Chứng minh $f(x) \ge f(x_0) + f'(x_0)(x - x_0)$ trên miền xét, rồi cộng lại.

### Hiệu giữa $f(x)$ và tiếp tuyến tại $x_0$ luôn có nhân tử nào?
$(x - x_0)^2$. Phần còn lại phải không âm trên miền của biến.

### Bổ đề $\frac{1}{1 + p} + \frac{1}{1 + q} \ge \frac{2}{1 + \sqrt{pq}}$ đúng khi nào?
Khi $p, q > 0$ và $pq \ge 1$, vì hiệu hai vế cùng dấu với $(\sqrt p - \sqrt q)^2(\sqrt{pq} - 1)$.

## Tham số và bẫy

### Bất đẳng thức $f(x) \ge 0$ với mọi $x$ có dấu "=" tại điểm trong $x_0$ cho ta điều gì?
$f'(x_0) = 0$ (định lý Fermat). Dùng làm điều kiện cần để tìm tham số, sau đó kiểm tra điều kiện đủ.

### Bẫy lớn nhất khi đổi biến để tìm GTLN, GTNN?
Lấy sai miền giá trị của biến mới.

### Kết luận GTLN, GTNN cần những gì?
Chỉ ra $P \le M$ (hoặc $\ge m$) **và** chỉ ra giá trị cụ thể của các biến để dấu "=" xảy ra.

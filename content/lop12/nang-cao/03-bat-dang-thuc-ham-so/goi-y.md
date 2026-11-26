# Gợi ý từng tầng cho bài tập Bất đẳng thức bằng phương pháp hàm số

## Bài 1 | 1
**Ý tưởng:** Xét hiệu hai vế, đạo hàm không âm và hiệu bằng 0 tại $x = 0$.

### Gợi ý 1
Đặt $f(x) = VT - VP$. Tính $f(0)$ và $f'(x)$.

### Gợi ý 2
a) $f'(x) = e^x - 1 - x \ge 0$. b) $g'(x) = \frac{x^2}{1 + x} \ge 0$.

## Bài 2 | 2
**Ý tưởng:** Chuỗi đạo hàm: câu b) dùng câu a), câu a) dùng $\sin x \le x$.

### Gợi ý 1
a) Hàm $\cos x - 1 + \frac{x^2}{2}$ là hàm chẵn. Đạo hàm của nó là gì? Dấu ra sao khi $x \ge 0$?

### Gợi ý 2
$(x - \sin x)' = 1 - \cos x \ge 0$. Với câu b), đạo hàm của $\sin x - x + \frac{x^3}{6}$ chính là biểu thức ở câu a).

## Bài 3 | 2
**Ý tưởng:** Lấy lôgarit, đặt $u = \frac1x$, đưa về $\frac{u}{1+u} < \ln(1+u) < u$.

### Gợi ý 1
Lấy $\ln$ ba vế. Đặt $u = \frac1x$ để biểu thức gọn hơn.

### Gợi ý 2
Chứng minh hai bất đẳng thức một biến $u - \ln(1 + u) > 0$ và $\ln(1 + u) - \frac{u}{1+u} > 0$ bằng đạo hàm.

## Bài 4 | 2
**Ý tưởng:** Hàm $\frac{\ln x}{x}$ nghịch biến trên $[e; +\infty)$.

### Gợi ý 1
So sánh $a^b$ với $b^a$ tương đương so sánh $b\ln a$ với $a\ln b$, tức là $\frac{\ln a}{a}$ với $\frac{\ln b}{b}$.

### Gợi ý 2
$h(x) = \frac{\ln x}{x}$ có $h'(x) = \frac{1 - \ln x}{x^2}$. Với $e \le a < b$ thì $h(a) > h(b)$.

## Bài 5 | 3
**Ý tưởng:** Dấu "=" tại $x = 0$ là cực tiểu, nên đạo hàm tại đó bằng 0.

### Gợi ý 1
$f(x) = a^x - x - 1$ có $f(0) = 0$. Điều kiện $f(x) \ge 0$ với mọi $x$ nói gì về điểm $x = 0$?

### Gợi ý 2
$x = 0$ là điểm cực tiểu nên $f'(0) = \ln a - 1 = 0$. Kiểm tra lại với $a = e$.

## Bài 6 | 2
**Ý tưởng:** Đặt $t = x + y \in [-2; 2]$, đưa $P$ về hàm bậc ba theo $t$.

### Gợi ý 1
Biểu diễn $xy$ và $x^3 + y^3$ theo $t = x + y$. Miền của $t$ là gì?

### Gợi ý 2
$xy = \frac{t^2 - 2}{2}$, $P = -t^3 - \frac32t^2 + 6t + 3$ trên $[-2; 2]$.

## Bài 7 | 2
**Ý tưởng:** Đặt $t = xy \in \left[0; \frac14\right]$, $S$ là tam thức bậc hai theo $t$.

### Gợi ý 1
Khai triển $S$. Biểu thức $x^3 + y^3$ viết theo $xy$ thế nào khi $x + y = 1$?

### Gợi ý 2
$S = 16t^2 - 2t + 12$ với $t \in \left[0; \frac14\right]$. Đỉnh parabol tại $t = \frac{1}{16}$.

## Bài 8 | 3
**Ý tưởng:** Đặt $t = \frac ba$, chứng minh hai bất đẳng thức một biến về $\ln t$.

### Gợi ý 1
Chia tử và mẫu cho $a$. Bất đẳng thức chỉ còn phụ thuộc $t = \frac ba > 1$.

### Gợi ý 2
Cần $\frac{2(t-1)}{t+1} < \ln t < \frac{t - 1}{\sqrt t}$. Với vế phải, đặt $s = \sqrt t$. Đạo hàm của các hàm hiệu đều có dạng bình phương.

## Bài 9 | 3
**Ý tưởng:** Từ giả thiết suy ra $x + y \ge 1$; đánh giá $A$ theo $u = x^2 + y^2 \ge \frac12$.

### Gợi ý 1
Dùng $4xy \le (x + y)^2$ để có bất đẳng thức chỉ chứa $s = x + y$.

### Gợi ý 2
$s \ge 1$ nên $u = x^2 + y^2 \ge \frac12$. Dùng $x^2y^2 \le \frac{u^2}{4}$ để có $A \ge \frac94u^2 - 2u + 1$.

## Bài 10 | 3
**Ý tưởng:** $P = 3abc = 3(c^3 - 3c)$ với $c \in [-2; 2]$.

### Gợi ý 1
Khi $a + b + c = 0$, $a^3 + b^3 + c^3$ bằng gì? Tính $ab + bc + ca$.

### Gợi ý 2
$ab = c^2 - 3$, $a + b = -c$. Điều kiện để $a, b$ thực cho miền của $c$. Khảo sát $c^3 - 3c$.

## Bài 11 | 3
**Ý tưởng:** Đưa về $f(a) + f(b) + f(c)$ với $f(x) = \frac{1}{x^2 - x + 3}$, rồi dùng tiếp tuyến tại $x = 1$.

### Gợi ý 1
Thay $b + c = 3 - a$. Mỗi số hạng chỉ còn một biến.

### Gợi ý 2
Tiếp tuyến tại $x = 1$ là $y = \frac{4 - x}{9}$. Chứng minh $f(x) \le \frac{4-x}{9}$ trên $(0; 3)$: hiệu có nhân tử $(x - 1)^2$.

## Bài 12 | 3
**Ý tưởng:** Giả sử $a$ nhỏ nhất, đánh giá $bc \le \frac{(1-a)^2}{4}$, rồi khảo sát theo $a \in \left[0; \frac13\right]$.

### Gợi ý 1
Viết biểu thức thành $a(1 - a) + bc(1 - 2a)$. Hệ số của $bc$ có dấu gì khi $a$ nhỏ nhất?

### Gợi ý 2
$1 - 2a > 0$, nên thay $bc$ bằng $\frac{(1 - a)^2}{4}$. Được $f(a) = \frac{-2a^3 + a^2 + 1}{4}$, đồng biến trên $\left[0; \frac13\right]$.

## Bài 13 | 4
**Ý tưởng:** Gộp hai phân thức sau bằng bổ đề $\frac1{1+p} + \frac1{1+q} \ge \frac2{1+\sqrt{pq}}$, rồi khảo sát theo $t = \sqrt{x/y}$.

### Gợi ý 1
Viết $\frac{y}{y+z} = \frac{1}{1 + z/y}$ và $\frac{z}{z+x} = \frac{1}{1 + x/z}$. Tích $\frac zy\cdot\frac xz$ bằng bao nhiêu?

### Gợi ý 2
Bổ đề đúng khi $pq \ge 1$ (quy đồng ra $(\sqrt p - \sqrt q)^2(\sqrt{pq} - 1) \ge 0$). Với $t = \sqrt{x/y} \in [1; 2]$: $P \ge \frac{t^2}{2t^2 + 3} + \frac{2}{1 + t}$.

### Gợi ý 3
Chứng minh hàm này nghịch biến trên $[1; 2]$, GTNN tại $t = 2$. Tìm $z$ để bổ đề xảy ra dấu "=".

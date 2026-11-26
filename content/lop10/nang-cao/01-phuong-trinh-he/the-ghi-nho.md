# Thẻ ghi nhớ Phương trình và hệ phương trình

## Phương trình vô tỉ cơ bản

### $\sqrt{A} = B$ tương đương với hệ nào?
$\sqrt{A} = B \iff \begin{cases} B \ge 0 \\ A = B^2. \end{cases}$

Không cần ghi thêm $A \ge 0$ vì $A = B^2$ đã đảm bảo điều đó.

### Khi nào bình phương hai vế là phép biến đổi tương đương?
Khi **cả hai vế không âm**.

*Vì sao:* với $u, v \ge 0$, $u^2 - v^2 = (u - v)(u + v)$ và $u + v > 0$ (trừ khi $u = v = 0$).

### $\sqrt[3]{A} = B$ có cần điều kiện gì không?
Không. $\sqrt[3]{A} = B \iff A = B^3$, vì $a < b \iff a^3 < b^3$ với mọi số thực.

### Bẫy hay gặp khi giải $\sqrt{x + 2} = x$?
Bình phương ra $x = 2$ và $x = -1$, nhưng $x = -1$ làm vế phải âm nên phải loại. Luôn đối chiếu điều kiện $B \ge 0$.

## Ẩn phụ

### Đặt $t = \sqrt{a + x} + \sqrt{b - x}$ thì tích hai căn bằng gì?
$\sqrt{(a+x)(b-x)} = \frac{t^2 - (a + b)}{2}$.

### Miền giá trị của $t = \sqrt{a + x} + \sqrt{b - x}$?
$\sqrt{a + b} \le t \le \sqrt{2(a + b)}$.

*Vì sao:* $t^2 = a + b + 2\sqrt{\dots} \ge a + b$, và theo Cauchy-Schwarz $t^2 \le 2(a + b)$.

### Dấu hiệu nhận ra phương trình đẳng cấp chứa căn?
Có dạng $\alpha A + \beta B = \gamma\sqrt{AB}$. Đặt $u = \sqrt A$, $v = \sqrt B$ được $\alpha u^2 - \gamma uv + \beta v^2 = 0$.

Ví dụ: $2(x^2 + 2) = 5\sqrt{x^3 + 1}$ với $A = x + 1$, $B = x^2 - x + 1$.

### Hai phân tích hay dùng để tạo phương trình đẳng cấp?
$x^3 + 1 = (x + 1)(x^2 - x + 1)$ và $x^4 + 4 = (x^2 + 2x + 2)(x^2 - 2x + 2)$.

### Phương trình $x^3 + b = a\sqrt[3]{ax - b}$ giải thế nào?
Đặt $y = \sqrt[3]{ax - b}$, được hệ đối xứng loại II: $x^3 + b = ay$, $y^3 + b = ax$. Trừ vế suy ra $x = y$.

### Tích $(x+a)(x+b)(x+c)(x+d)$ với $a + d = b + c$ xử lý thế nào?
Ghép $(x + a)(x + d)$ và $(x + b)(x + c)$: hai tam thức có chung phần $x^2 + (a + d)x$, đặt phần đó là $t$.

## Liên hợp và đánh giá

### Công thức nhân liên hợp $\sqrt{A} - B$?
$\sqrt{A} - B = \frac{A - B^2}{\sqrt A + B}$, khi $\sqrt A + B > 0$.

### Các bước giải phương trình bằng nhân liên hợp?
1. Đoán nghiệm $x_0$.
2. Tách sao cho mỗi nhóm bằng $0$ tại $x_0$.
3. Nhân liên hợp, rút nhân tử $(x - x_0)$.
4. Chứng minh phần còn lại luôn dương (hoặc luôn âm) trên miền xác định.

### Phương pháp đánh giá dùng khi nào?
Khi chứng minh được $VT \le m \le VP$ (hoặc ngược lại). Phương trình tương đương với việc **hai dấu "=" cùng xảy ra**.

### Chặn trên của $\sqrt{x - a} + \sqrt{b - x}$?
$\sqrt{x-a} + \sqrt{b-x} \le \sqrt{2(b - a)}$, dấu "=" khi $x = \frac{a + b}{2}$ (Cauchy-Schwarz).

## Hệ phương trình

### Hệ đối xứng loại I giải thế nào? Điều kiện có nghiệm thực?
Đặt $S = x + y$, $P = xy$, giải theo $S, P$. Khi đó $x, y$ là nghiệm của $X^2 - SX + P = 0$. Điều kiện: $S^2 \ge 4P$.

### Viết $x^2 + y^2$ và $x^3 + y^3$ theo $S$, $P$?
$x^2 + y^2 = S^2 - 2P$, $\quad x^3 + y^3 = S^3 - 3SP$.

### Hệ đối xứng loại II: bước đầu tiên là gì? Vì sao luôn được?
Trừ vế theo vế để có nhân tử $(x - y)$.

*Vì sao:* hiệu $h(x, y)$ thỏa $h(y, x) = -h(x, y)$, nên $h(x, x) = 0$.

### Hệ đẳng cấp giải thế nào?
Khử hằng số để có phương trình thuần nhất $= 0$. Xét $y = 0$, rồi đặt $x = ty$ (hoặc chia cho $y^k$).

### Vì sao $x^3 + x = y^3 + y$ kéo theo $x = y$?
$(x - y)(x^2 + xy + y^2 + 1) = 0$ và $x^2 + xy + y^2 + 1 = \left(x + \frac y2\right)^2 + \frac{3y^2}{4} + 1 > 0$.

### Khi nào nên chia hai phương trình của hệ cho $y$?
Khi có một biểu thức chỉ chứa $x$ (như $x^2 + 1$) đứng riêng, còn các hạng tử khác đều có thừa số $y$. Chia cho $y$ để lộ ẩn phụ $u = \frac{x^2 + 1}{y}$. Nhớ xét riêng $y = 0$.

### Ẩn phụ $u = \sqrt{x+y}$, $v = \sqrt{x-y}$ cho $x^2 + y^2$ bằng gì?
$x = \frac{u^2 + v^2}{2}$, $y = \frac{u^2 - v^2}{2}$, nên $x^2 + y^2 = \frac{u^4 + v^4}{2}$.

# Thẻ ghi nhớ Bất đẳng thức

## AM-GM

### Phát biểu AM-GM cho $n$ số? Điều kiện? Dấu "=" khi nào?
Với $a_1, \dots, a_n \ge 0$: $\frac{a_1 + \dots + a_n}{n} \ge \sqrt[n]{a_1\cdots a_n}$. Dấu "=" khi các số bằng nhau.

### Chứng minh AM-GM ba số dựa trên hằng đẳng thức nào?
$x^3 + y^3 + z^3 - 3xyz = \frac12(x + y + z)\left[(x-y)^2 + (y-z)^2 + (z-x)^2\right] \ge 0$ với $x, y, z \ge 0$.

### "Điểm rơi" là gì và dùng thế nào?
Là giá trị của biến tại dấu "=". Dự đoán trước, rồi tách hoặc thêm bớt sao cho các số áp dụng AM-GM **bằng nhau tại điểm rơi**.

### Kỹ thuật AM-GM ngược dấu dùng khi nào?
Khi mẫu là tổng (như $a^2 + b^2$) mà đánh giá mẫu cho sai chiều. Viết $\frac{a^3}{a^2 + b^2} = a - \frac{ab^2}{a^2 + b^2}$ rồi chặn trên phần bị trừ.

### Tìm GTNN của $x + \frac{k}{x - m}$ với $x > m$, $k > 0$?
Viết $(x - m) + \frac{k}{x - m} + m \ge 2\sqrt k + m$, dấu "=" khi $x = m + \sqrt k$.

## Cauchy-Schwarz

### Phát biểu Cauchy-Schwarz và điều kiện dấu "="?
$\left(\sum a_ib_i\right)^2 \le \sum a_i^2\sum b_i^2$, dấu "=" khi hai bộ số tỉ lệ.

### Chứng minh Cauchy-Schwarz bằng tam thức bậc hai?
$f(t) = \sum(a_it - b_i)^2 \ge 0$ với mọi $t$, nên biệt thức $\Delta' = \left(\sum a_ib_i\right)^2 - \sum a_i^2\sum b_i^2 \le 0$.

### Dạng Engel của Cauchy-Schwarz?
Với $y_i > 0$: $\sum\frac{x_i^2}{y_i} \ge \frac{\left(\sum x_i\right)^2}{\sum y_i}$, dấu "=" khi $\frac{x_i}{y_i}$ bằng nhau.

### Tử chưa là bình phương thì dùng Engel thế nào?
Nhân thêm vào tử và mẫu: $\frac{a}{b + c} = \frac{a^2}{a(b + c)}$, $\frac{a^2}{a + 2b^2} = \frac{a^4}{a^3 + 2a^2b^2}$.

## SOS và Schur

### Tiêu chuẩn SOS khi $a \ge b \ge c$?
Nếu $S_b \ge 0$, $S_c \ge 0$ và $S_a + S_b \ge 0$ thì $S_a(b-c)^2 + S_b(c-a)^2 + S_c(a-b)^2 \ge 0$.

*Vì sao:* $(c - a)^2 \ge (b - c)^2$ nên $S_b(c-a)^2 \ge S_b(b-c)^2$.

### Bất đẳng thức Schur bậc ba?
Với $a, b, c \ge 0$: $\sum a(a - b)(a - c) \ge 0$, tức là $a^3 + b^3 + c^3 + 3abc \ge \sum ab(a + b)$.

### Schur viết theo $p, q, r$?
$p^3 - 4pq + 9r \ge 0$, với $p = a + b + c$, $q = ab + bc + ca$, $r = abc$. Hay dùng để chặn dưới $abc$.

### Dấu "=" của Schur xảy ra khi nào?
Khi $a = b = c$, hoặc hai số bằng nhau và số thứ ba bằng $0$ (ví dụ $(1; 1; 0)$).

### Dạng SOS của Schur?
$2\sum a(a-b)(a-c) = \sum(b + c - a)(b - c)^2$.

## Các kỹ thuật khác

### Ý tưởng của dồn biến đơn giản?
Cố định một biến, chứng minh biểu thức tăng (hoặc giảm) khi thay hai biến còn lại bằng trung bình cộng, rồi giải bài toán một biến. Thường chọn biến cố định là biến nhỏ nhất để hệ số của $ab$ có dấu thuận lợi.

### Dùng Dirichlet trong bất đẳng thức thế nào?
Trong $a - 1, b - 1, c - 1$ có hai số cùng dấu, giả sử $(a-1)(b-1) \ge 0$. Nhân với $c \ge 0$: $abc \ge ac + bc - c$.

### Tìm "tiếp tuyến" $f(x) \ge f(1) + k(x - 1)$ mà không dùng đạo hàm?
Chọn $k$ để hiệu $f(x) - f(1) - k(x - 1)$ có nhân tử $(x - 1)^2$: thay $x = 1 + h$, cho hệ số của $h$ bằng $0$.

### Đẳng thức $\sum\frac{1}{ab + b + 1}$ khi $abc = 1$?
$\frac{1}{ab + b + 1} + \frac{1}{bc + c + 1} + \frac{1}{ca + a + 1} = 1$.

### Hai bất đẳng thức "biên" hay dùng?
$a \in [m; M] \implies (a - m)(a - M) \le 0$. $\quad a, b, c \in [0; 1] \implies (1 - a)(1 - b)(1 - c) \ge 0$.

## Bẫy hay gặp

### Lỗi phổ biến nhất khi tìm GTNN bằng AM-GM?
Dấu "=" ở các bước **không xảy ra đồng thời**, hoặc điểm rơi không thuộc miền xét. Luôn kiểm tra dấu "=".

### Có được giả sử $a \ge b \ge c$ với bất đẳng thức hoán vị vòng quanh không?
Không. Chỉ được giả sử thứ tự khi bất đẳng thức **đối xứng**. Với hoán vị vòng quanh chỉ được giả sử $a$ là lớn nhất (hoặc nhỏ nhất).

# Gợi ý từng tầng cho bài tập Bất đẳng thức

## Bài 1 | 1
**Ý tưởng:** Nhân ba bất đẳng thức $1 + a \ge 2\sqrt a$.

### Gợi ý 1
Mỗi thừa số là tổng của $1$ và một số dương. Đánh giá từng thừa số theo căn của nó.

### Gợi ý 2
$1 + a \ge 2\sqrt a$, tương tự với $b$, $c$. Nhân lại và dùng $abc = 1$.

## Bài 2 | 1
**Ý tưởng:** Thêm bớt để có $(x - 1) + \frac{4}{x - 1}$, tích không đổi.

### Gợi ý 1
Tích $x\cdot\frac{4}{x-1}$ không cố định. Biến đổi $x$ để xuất hiện $x - 1$.

### Gợi ý 2
$P = (x - 1) + \frac{4}{x-1} + 1 \ge 4 + 1$. Dấu "=" khi $x - 1 = 2$.

## Bài 3 | 2
**Ý tưởng:** Viết các tử thành bình phương $1^2, 2^2, 3^2$ rồi dùng Engel.

### Gợi ý 1
$4 = 2^2$ và $9 = 3^2$. Bất đẳng thức nào gộp tổng các phân thức có tử là bình phương?

### Gợi ý 2
$P \ge \frac{(1 + 2 + 3)^2}{x + y + z} = 36$, dấu "=" khi $x : y : z = 1 : 2 : 3$.

## Bài 4 | 1
**Ý tưởng:** Engel trực tiếp, mẫu tổng bằng $2(a + b + c)$.

### Gợi ý 1
Các tử đã là bình phương. Cộng các mẫu lại được gì?

### Gợi ý 2
$VT \ge \frac{(a + b + c)^2}{2(a + b + c)}$. Hoặc dùng AM-GM $\frac{a^2}{b + c} + \frac{b + c}{4} \ge a$.

## Bài 5 | 2
**Ý tưởng:** AM-GM ngược dấu: $\frac{a^3}{a^2 + b^2} = a - \frac{ab^2}{a^2 + b^2} \ge a - \frac b2$.

### Gợi ý 1
Đánh giá mẫu $a^2 + b^2 \ge 2ab$ cho chiều "$\le$". Hãy viết phân số thành $a$ trừ đi một phần.

### Gợi ý 2
$\frac{a^3}{a^2+b^2} = a - \frac{ab^2}{a^2+b^2}$. Chặn trên phần bị trừ bằng $\frac{ab^2}{2ab} = \frac b2$.

## Bài 6 | 3
**Ý tưởng:** Đổi $ab + bc + ca$ thành $\frac{9 - (a^2 + b^2 + c^2)}{2}$ rồi tách biến: $a^2 + 2\sqrt a \ge 3a$.

### Gợi ý 1
Hai vế "khác loại": căn bậc hai và tích. Dùng $a + b + c = 3$ để viết $ab + bc + ca$ qua $a^2 + b^2 + c^2$.

### Gợi ý 2
Cần chứng minh $\sum(a^2 + 2\sqrt a) \ge 9$. AM-GM ba số $a^2 + \sqrt a + \sqrt a \ge 3a$.

## Bài 7 | 3
**Ý tưởng:** Đây là Schur; viết dạng SOS với $S_a = b + c - a$ và dùng tiêu chuẩn khi $a \ge b \ge c$.

### Gợi ý 1
Chứng tỏ $VT - VP = a(a-b)(a-c) + b(b-a)(b-c) + c(c-a)(c-b)$.

### Gợi ý 2
$2(VT - VP) = \sum(b + c - a)(b - c)^2$. Giả sử $a \ge b \ge c$: $S_b, S_c \ge 0$, $S_a + S_b = 2c \ge 0$.

### Gợi ý 3
Dùng $(c - a)^2 \ge (b - c)^2$ để gộp $S_a(b-c)^2 + S_b(c-a)^2 \ge (S_a + S_b)(b - c)^2$.

## Bài 8 | 3
**Ý tưởng:** Schur dạng $p, q, r$ cho $abc \ge \frac{4q - 9}{3}$, rồi dùng $q \le 3$.

### Gợi ý 1
Đặt $q = ab + bc + ca$. Viết $a^2 + b^2 + c^2$ theo $q$. Cần chặn dưới $abc$ theo $q$.

### Gợi ý 2
Bài 7 tương đương $p^3 - 4pq + 9r \ge 0$. Với $p = 3$: $r \ge \frac{4q - 9}{3}$. Khi đó $VT \ge 6 - \frac{2q}{3}$.

## Bài 9 | 3
**Ý tưởng:** Dirichlet: có $(a - 1)(b - 1) \ge 0$, nhân với $c$ để khử $abc$.

### Gợi ý 1
Dấu "=" tại $a = b = c = 1$. Trong ba số $a - 1, b - 1, c - 1$ có hai số cùng dấu.

### Gợi ý 2
Giả sử $(a-1)(b-1) \ge 0$ thì $2abc \ge 2ac + 2bc - 2c$. Thay vào, hiệu hai vế $\ge (a - b)^2 + (c - 1)^2$.

## Bài 10 | 3
**Ý tưởng:** Đưa mẫu về một biến $a^2 - a + 3$, rồi dùng đánh giá tiếp tuyến $\frac{1}{a^2 - a + 3} \le \frac{4 - a}{9}$.

### Gợi ý 1
Dùng $b + c = 3 - a$ để mỗi phân số chỉ còn một biến.

### Gợi ý 2
Tìm $\alpha a + \beta$ sao cho $\frac{1}{a^2 - a + 3} \le \alpha a + \beta$, dấu "=" tại $a = 1$. Hiệu phải chứa $(a - 1)^2$.

### Gợi ý 3
$\frac{1}{a^2 - a + 3} \le \frac{4 - a}{9} \iff (a - 1)^2(a - 3) \le 0$.

## Bài 11 | 3
**Ý tưởng:** Nhân thêm để tử là $a^4$, Engel, rồi quy về $a^4 + b^4 + c^4 \ge a^3 + b^3 + c^3$.

### Gợi ý 1
Viết $\frac{a^2}{a + 2b^2} = \frac{a^4}{a^3 + 2a^2b^2}$ và áp dụng Cauchy-Schwarz dạng Engel.

### Gợi ý 2
Sau Engel, cần $\sum a^4 \ge \sum a^3$. Thuần nhất hóa: $3\sum a^4 \ge (a + b + c)\sum a^3$, hiệu bằng $\sum(a - b)(a^3 - b^3)$.

## Bài 12 | 3
**Ý tưởng:** $a^2 + 2b^2 + 3 \ge 2(ab + b + 1)$ và đẳng thức $\sum\frac{1}{ab + b + 1} = 1$ khi $abc = 1$.

### Gợi ý 1
Tách $a^2 + 2b^2 + 3 = (a^2 + b^2) + (b^2 + 1) + 2$ rồi AM-GM từng nhóm.

### Gợi ý 2
Chứng minh $\frac{1}{ab+b+1} + \frac{1}{bc+c+1} + \frac{1}{ca+a+1} = 1$: nhân phân số thứ hai với $\frac{ab}{ab}$, phân số thứ ba với $\frac bb$.

## Bài 13 | 4
**Ý tưởng:** Giả sử $c$ nhỏ nhất, dồn $a, b$ về bằng nhau, đưa về bất đẳng thức một biến $c$.

### Gợi ý 1
Viết $F = c(1 - c) + ab(1 - 2c)$. Hệ số của $ab$ có dấu thế nào nếu $c$ là số nhỏ nhất?

### Gợi ý 2
$c \le \frac13$ nên $1 - 2c > 0$, và $ab \le \frac{(1 - c)^2}{4}$. Được $F \le \frac{1 + c^2 - 2c^3}{4}$.

### Gợi ý 3
$\frac{7}{27} - \frac{1 + c^2 - 2c^3}{4} = \frac{(3c - 1)^2(6c + 1)}{108}$.

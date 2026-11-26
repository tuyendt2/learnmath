# Chủ đề 2. Bất đẳng thức

> Bất đẳng thức và bài toán giá trị lớn nhất, nhỏ nhất là câu phân loại của đề HSG lớp 10. Chủ đề này hệ thống các công cụ chính (AM-GM, Cauchy-Schwarz, SOS, Schur, dồn biến) và cách chọn công cụ theo dạng bài.

## I. Kiến thức cần nắm

### 1. Bất đẳng thức AM-GM và kỹ thuật điểm rơi
Với $a_1, a_2, \dots, a_n \ge 0$:
$$\frac{a_1 + a_2 + \dots + a_n}{n} \ge \sqrt[n]{a_1a_2\cdots a_n},$$
dấu "=" khi và chỉ khi $a_1 = a_2 = \dots = a_n$.

*Chứng minh cho $n = 2$:* $a + b - 2\sqrt{ab} = (\sqrt a - \sqrt b)^2 \ge 0$. *Cho $n = 3$:* với $x, y, z \ge 0$,
$$x^3 + y^3 + z^3 - 3xyz = \tfrac12(x + y + z)\left[(x - y)^2 + (y - z)^2 + (z - x)^2\right] \ge 0,$$
rồi thay $x = \sqrt[3]{a}$, $y = \sqrt[3]{b}$, $z = \sqrt[3]{c}$.

**Điểm rơi.** AM-GM chỉ cho dấu "=" khi các số bằng nhau. Vì vậy, trước khi áp dụng, hãy **dự đoán giá trị của biến tại dấu "="**, rồi tách hoặc thêm bớt để các số được áp dụng AM-GM bằng nhau tại đó.

*Ví dụ:* với $x > 0$, $x^2 + \frac{2}{x} = x^2 + \frac1x + \frac1x \ge 3\sqrt[3]{x^2\cdot\frac1x\cdot\frac1x} = 3$, dấu "=" khi $x^2 = \frac1x$, tức là $x = 1$.

**AM-GM ngược dấu.** Khi mẫu số là tổng (như $a^2 + b^2$, $1 + b^2$), đánh giá mẫu bằng AM-GM sẽ ra chiều "$\le$". Ta viết lại thành hiệu rồi đánh giá **phần bị trừ**:
$$\frac{a^3}{a^2 + b^2} = a - \frac{ab^2}{a^2 + b^2} \ge a - \frac{ab^2}{2ab} = a - \frac b2.$$

### 2. Bất đẳng thức Cauchy-Schwarz và dạng Engel
Với mọi số thực:
$$(a_1b_1 + a_2b_2 + \dots + a_nb_n)^2 \le (a_1^2 + \dots + a_n^2)(b_1^2 + \dots + b_n^2),$$
dấu "=" khi $(a_i)$ và $(b_i)$ tỉ lệ.

*Chứng minh:* tam thức $f(t) = \sum (a_it - b_i)^2 = \left(\sum a_i^2\right)t^2 - 2\left(\sum a_ib_i\right)t + \sum b_i^2 \ge 0$ với mọi $t$, nên biệt thức $\Delta' = \left(\sum a_ib_i\right)^2 - \sum a_i^2\sum b_i^2 \le 0$ (trường hợp mọi $a_i = 0$ là hiển nhiên).

**Dạng Engel** (với $y_i > 0$):
$$\frac{x_1^2}{y_1} + \frac{x_2^2}{y_2} + \dots + \frac{x_n^2}{y_n} \ge \frac{(x_1 + x_2 + \dots + x_n)^2}{y_1 + y_2 + \dots + y_n},$$
dấu "=" khi $\frac{x_1}{y_1} = \dots = \frac{x_n}{y_n}$. *Chứng minh:* áp dụng Cauchy-Schwarz cho hai bộ $\frac{x_i}{\sqrt{y_i}}$ và $\sqrt{y_i}$.

**Mẹo:** tử chưa là bình phương thì nhân thêm, ví dụ $\frac{a^2}{a + 2b^2} = \frac{a^4}{a^3 + 2a^2b^2}$.

### 3. Phương pháp SOS và bất đẳng thức Schur
**SOS** (Sum of Squares): biến đổi $VT - VP$ về dạng
$$S = S_a(b - c)^2 + S_b(c - a)^2 + S_c(a - b)^2,$$
rồi chứng minh $S \ge 0$. Các tiêu chuẩn hay dùng:
- Nếu $S_a, S_b, S_c \ge 0$ thì $S \ge 0$.
- Nếu $a \ge b \ge c$ và $S_b \ge 0$, $S_c \ge 0$, $S_a + S_b \ge 0$ thì $S \ge 0$.

*Vì sao tiêu chuẩn thứ hai đúng:* khi $a \ge b \ge c$ thì $a - c \ge b - c \ge 0$, nên $(c - a)^2 \ge (b - c)^2$. Do $S_b \ge 0$:
$$S \ge S_a(b - c)^2 + S_b(b - c)^2 + S_c(a - b)^2 = (S_a + S_b)(b - c)^2 + S_c(a - b)^2 \ge 0.$$

Các đẳng thức SOS cơ bản:
- $a^2 + b^2 + c^2 - ab - bc - ca = \frac12\left[(a - b)^2 + (b - c)^2 + (c - a)^2\right]$;
- $a^3 + b^3 + c^3 - 3abc = \frac12(a + b + c)\left[(a - b)^2 + (b - c)^2 + (c - a)^2\right]$.

**Bất đẳng thức Schur bậc ba.** Với $a, b, c \ge 0$:
$$a(a - b)(a - c) + b(b - a)(b - c) + c(c - a)(c - b) \ge 0.$$
Đặt $p = a + b + c$, $q = ab + bc + ca$, $r = abc$, Schur tương đương với $p^3 - 4pq + 9r \ge 0$. Dấu "=" khi $a = b = c$, hoặc hai biến bằng nhau và biến còn lại bằng $0$.

### 4. Dồn biến đơn giản
Ý tưởng: với biểu thức đối xứng ba biến, **cố định một biến** (thường là biến nhỏ nhất hoặc lớn nhất), rồi chứng minh biểu thức không giảm (hoặc không tăng) khi thay hai biến còn lại bằng trung bình cộng của chúng. Bài toán quy về **một biến**, giải bằng phân tích nhân tử.

Công cụ chính: với $a + b = s$ cố định thì $ab \le \frac{s^2}{4}$, dấu "=" khi $a = b$.

*Ví dụ:* nếu $c$ cố định và biểu thức có dạng $\alpha + \beta\cdot ab$ với $\beta \ge 0$ thì biểu thức lớn nhất khi $a = b = \frac{s}{2}$. Điều kiện $\beta \ge 0$ thường có được nhờ chọn $c$ là biến nhỏ nhất.

### 5. Kỹ thuật dùng biên và nguyên lý Dirichlet
- **Biến bị chặn:** $a \in [m; M]$ thì $(a - m)(a - M) \le 0$. Ba biến thuộc $[0; 1]$ thì $(1 - a)(1 - b)(1 - c) \ge 0$.
- **Dirichlet:** trong ba số $a - 1$, $b - 1$, $c - 1$ luôn có hai số cùng dấu, giả sử $(a - 1)(b - 1) \ge 0$. Nhân với $c \ge 0$: $abc \ge ac + bc - c$. Cách này hữu ích khi dấu "=" tại $a = b = c = 1$ và có mặt $abc$.

### 6. Kỹ thuật tiếp tuyến (không dùng đạo hàm)
Cần chứng minh $f(a) + f(b) + f(c) \ge 3f(1)$ khi $a + b + c = 3$. Tìm $k$ sao cho
$$f(x) \ge f(1) + k(x - 1) \quad \text{với mọi } x \text{ trong miền xét},$$
rồi cộng ba bất đẳng thức. **Cách tìm $k$ không cần đạo hàm:** hiệu $f(x) - f(1) - k(x - 1)$ (sau khi quy đồng) phải chứa nhân tử $(x - 1)^2$. Thay $x = 1 + h$, khai triển, chọn $k$ để hệ số của $h$ bằng $0$.

### 7. Sai lầm hay gặp
- Dấu "=" ở các bước không xảy ra **đồng thời**, nên giá trị tìm được không đạt.
- Áp dụng AM-GM cho số âm.
- Quên chỉ ra dấu "=" khi tìm giá trị lớn nhất, nhỏ nhất (chưa có dấu "=" thì chưa kết luận được).
- Với bất đẳng thức **hoán vị vòng quanh** (như $\frac{a}{b} + \frac{b}{c} + \frac{c}{a}$), không được tùy tiện giả sử $a \ge b \ge c$.

---

## II. Bài tập vận dụng

**Bài 1.** Cho $a, b, c > 0$ và $abc = 1$. Chứng minh $(1 + a)(1 + b)(1 + c) \ge 8$.

**Bài 2.** Tìm giá trị nhỏ nhất của $P = x + \frac{4}{x - 1}$ với $x > 1$.

**Bài 3.** Cho $x, y, z > 0$ và $x + y + z = 1$. Tìm giá trị nhỏ nhất của $P = \frac1x + \frac4y + \frac9z$.

**Bài 4.** Cho $a, b, c > 0$. Chứng minh
$$\frac{a^2}{b + c} + \frac{b^2}{c + a} + \frac{c^2}{a + b} \ge \frac{a + b + c}{2}.$$

**Bài 5 (AM-GM ngược dấu).** Cho $a, b, c > 0$ và $a + b + c = 3$. Chứng minh
$$\frac{a^3}{a^2 + b^2} + \frac{b^3}{b^2 + c^2} + \frac{c^3}{c^2 + a^2} \ge \frac32.$$

**Bài 6 (Nga 2002).** Cho $a, b, c > 0$ và $a + b + c = 3$. Chứng minh $\sqrt a + \sqrt b + \sqrt c \ge ab + bc + ca$.

**Bài 7 (Schur bằng SOS).** Cho $a, b, c \ge 0$. Chứng minh
$$a^3 + b^3 + c^3 + 3abc \ge ab(a + b) + bc(b + c) + ca(c + a).$$

**Bài 8.** Cho $a, b, c \ge 0$ và $a + b + c = 3$. Chứng minh $a^2 + b^2 + c^2 + abc \ge 4$.

**Bài 9 (Dirichlet).** Cho $a, b, c \ge 0$. Chứng minh
$$a^2 + b^2 + c^2 + 2abc + 1 \ge 2(ab + bc + ca).$$

**Bài 10 (tiếp tuyến).** Cho $a, b, c > 0$ và $a + b + c = 3$. Chứng minh
$$\frac{1}{a^2 + b + c} + \frac{1}{b^2 + c + a} + \frac{1}{c^2 + a + b} \le 1.$$

**Bài 11.** Cho $a, b, c > 0$ và $a + b + c = 3$. Chứng minh
$$\frac{a^2}{a + 2b^2} + \frac{b^2}{b + 2c^2} + \frac{c^2}{c + 2a^2} \ge 1.$$

**Bài 12.** Cho $a, b, c > 0$ và $abc = 1$. Chứng minh
$$\frac{1}{a^2 + 2b^2 + 3} + \frac{1}{b^2 + 2c^2 + 3} + \frac{1}{c^2 + 2a^2 + 3} \le \frac12.$$

**Bài 13 (IMO 1984, dồn biến).** Cho $a, b, c \ge 0$ và $a + b + c = 1$. Chứng minh
$$ab + bc + ca - 2abc \le \frac{7}{27}.$$

---

## III. Lời giải chi tiết

### Bài 1
Theo AM-GM: $1 + a \ge 2\sqrt a$, $1 + b \ge 2\sqrt b$, $1 + c \ge 2\sqrt c$. Nhân ba bất đẳng thức có các vế dương:
$$(1 + a)(1 + b)(1 + c) \ge 8\sqrt{abc} = 8.$$
Dấu "=" khi $a = b = c = 1$.

### Bài 2
Vì $x - 1 > 0$, theo AM-GM:
$$P = (x - 1) + \frac{4}{x - 1} + 1 \ge 2\sqrt{(x - 1)\cdot\frac{4}{x - 1}} + 1 = 5.$$
Dấu "=" khi $(x - 1)^2 = 4$, tức là $x = 3$ (vì $x > 1$).

**Giá trị nhỏ nhất:** $P_{\min} = 5$ tại $x = 3$.

### Bài 3
Viết $P = \frac{1^2}{x} + \frac{2^2}{y} + \frac{3^2}{z}$. Theo Cauchy-Schwarz dạng Engel:
$$P \ge \frac{(1 + 2 + 3)^2}{x + y + z} = 36.$$
Dấu "=" khi $\frac1x = \frac2y = \frac3z$, tức là $x : y : z = 1 : 2 : 3$. Kết hợp $x + y + z = 1$: $x = \frac16$, $y = \frac13$, $z = \frac12$.

**Giá trị nhỏ nhất:** $P_{\min} = 36$.

### Bài 4
Theo Cauchy-Schwarz dạng Engel:
$$\frac{a^2}{b + c} + \frac{b^2}{c + a} + \frac{c^2}{a + b} \ge \frac{(a + b + c)^2}{2(a + b + c)} = \frac{a + b + c}{2}.$$
Dấu "=" khi $\frac{a}{b + c} = \frac{b}{c + a} = \frac{c}{a + b}$, tức là $a = b = c$.

*Nhận xét:* có thể giải bằng AM-GM: $\frac{a^2}{b + c} + \frac{b + c}{4} \ge a$, cộng ba bất đẳng thức.

### Bài 5
Nếu đánh giá mẫu $a^2 + b^2 \ge 2ab$ thì được chiều ngược. Ta tách:
$$\frac{a^3}{a^2 + b^2} = a - \frac{ab^2}{a^2 + b^2} \ge a - \frac{ab^2}{2ab} = a - \frac b2.$$
Tương tự $\frac{b^3}{b^2 + c^2} \ge b - \frac c2$, $\frac{c^3}{c^2 + a^2} \ge c - \frac a2$. Cộng lại:
$$VT \ge (a + b + c) - \frac{a + b + c}{2} = \frac32.$$
Dấu "=" khi $a = b = c = 1$.

### Bài 6
Ta có $2(ab + bc + ca) = (a + b + c)^2 - (a^2 + b^2 + c^2) = 9 - (a^2 + b^2 + c^2)$. Bất đẳng thức cần chứng minh tương đương với
$$a^2 + b^2 + c^2 + 2\sqrt a + 2\sqrt b + 2\sqrt c \ge 9.$$
Theo AM-GM ba số: $a^2 + \sqrt a + \sqrt a \ge 3\sqrt[3]{a^2\cdot a} = 3a$. Tương tự cho $b$, $c$. Cộng lại:
$$VT \ge 3(a + b + c) = 9.$$
Dấu "=" khi $a^2 = \sqrt a$, tức là $a = 1$, và tương tự $b = c = 1$.

*Nhận xét:* chìa khóa là đưa $ab + bc + ca$ về $a^2 + b^2 + c^2$ để bài toán **tách được biến**: mỗi biến được đánh giá riêng.

### Bài 7
Khai triển: $a(a - b)(a - c) = a^3 - a^2b - a^2c + abc$. Cộng ba biểu thức tương tự ta thấy bất đẳng thức cần chứng minh chính là
$$S = a(a - b)(a - c) + b(b - a)(b - c) + c(c - a)(c - b) \ge 0.$$
**Đưa về dạng SOS.** Kiểm tra trực tiếp (khai triển hai vế) được đẳng thức
$$2S = (b + c - a)(b - c)^2 + (c + a - b)(c - a)^2 + (a + b - c)(a - b)^2.$$
Vậy $2S = S_a(b-c)^2 + S_b(c-a)^2 + S_c(a-b)^2$ với $S_a = b + c - a$, $S_b = c + a - b$, $S_c = a + b - c$.

Bất đẳng thức đối xứng nên giả sử $a \ge b \ge c \ge 0$. Khi đó
- $S_b = (a - b) + c \ge 0$, $\quad S_c = (a - c) + b \ge 0$;
- $S_a + S_b = 2c \ge 0$.

Theo tiêu chuẩn SOS ở mục I.3, $S \ge 0$. Dấu "=" khi $a = b = c$, hoặc hai số bằng nhau và số còn lại bằng $0$.

### Bài 8
Đặt $q = ab + bc + ca$, $r = abc$. Từ Bài 7, dạng $p, q, r$ của Schur với $p = 3$:
$$27 - 12q + 9r \ge 0 \implies r \ge \frac{4q - 9}{3}.$$
(Thật vậy, $a^3 + b^3 + c^3 = p^3 - 3pq + 3r$ và $ab(a+b) + bc(b+c) + ca(c+a) = pq - 3r$, nên Bài 7 cho $p^3 - 4pq + 9r \ge 0$.)

Ta có $a^2 + b^2 + c^2 = 9 - 2q$, do đó
$$a^2 + b^2 + c^2 + abc \ge 9 - 2q + \frac{4q - 9}{3} = 6 - \frac{2q}{3}.$$
Mà $q \le \frac{(a+b+c)^2}{3} = 3$, nên $6 - \frac{2q}{3} \ge 4$. Dấu "=" khi $a = b = c = 1$.

*Nhận xét:* với điều kiện $a + b + c$ cố định, các bài có mặt $abc$ thường cần Schur để chặn dưới $r$ theo $q$.

### Bài 9
Trong ba số $a - 1$, $b - 1$, $c - 1$ có hai số cùng dấu. Vì bất đẳng thức đối xứng, giả sử $(a - 1)(b - 1) \ge 0$. Nhân với $c \ge 0$:
$$abc - ac - bc + c \ge 0 \implies 2abc \ge 2ac + 2bc - 2c.$$
Do đó
$$VT - VP \ge a^2 + b^2 + c^2 + 2ac + 2bc - 2c + 1 - 2ab - 2bc - 2ca = (a - b)^2 + (c - 1)^2 \ge 0.$$
Dấu "=" khi $a = b = c = 1$.

*Nhận xét:* Dirichlet "chọn" ra cặp biến thích hợp để khử $abc$, đổi lại phải giả sử về thứ tự dấu.

### Bài 10
Vì $b + c = 3 - a$ nên $a^2 + b + c = a^2 - a + 3 > 0$, với $0 < a < 3$. Ta chứng minh
$$\frac{1}{a^2 - a + 3} \le \frac{4 - a}{9} \quad \text{với } 0 < a < 3.$$
(Vế phải là "tiếp tuyến" tại $a = 1$: hai vế cùng bằng $\frac13$ tại $a = 1$, và hiệu chứa nhân tử $(a - 1)^2$.)
Vì $a^2 - a + 3 > 0$ và $4 - a > 0$, bất đẳng thức tương đương với
$$9 \le (4 - a)(a^2 - a + 3) = -a^3 + 5a^2 - 7a + 12 \iff a^3 - 5a^2 + 7a - 3 \le 0 \iff (a - 1)^2(a - 3) \le 0,$$
đúng vì $a < 3$. Cộng ba bất đẳng thức tương tự:
$$VT \le \frac{12 - (a + b + c)}{9} = \frac{9}{9} = 1.$$
Dấu "=" khi $a = b = c = 1$.

*Nhận xét:* cách tìm $\frac{4 - a}{9}$: tìm $k$ để $\frac{1}{a^2 - a + 3} - \frac13 - k(a - 1)$ có nhân tử $(a - 1)^2$. Đặt $a = 1 + h$: $\frac{1}{3 + h + h^2} - \frac13 = \frac{-h - h^2}{3(3 + h + h^2)}$, hệ số của $h$ là $-\frac19$, nên $k = -\frac19$.

### Bài 11
Nhân tử và mẫu của mỗi phân số với $a^2$ (tương ứng $b^2$, $c^2$) rồi dùng Cauchy-Schwarz dạng Engel:
$$VT = \sum\frac{a^4}{a^3 + 2a^2b^2} \ge \frac{(a^2 + b^2 + c^2)^2}{(a^3 + b^3 + c^3) + 2(a^2b^2 + b^2c^2 + c^2a^2)}.$$
Vì $(a^2 + b^2 + c^2)^2 = a^4 + b^4 + c^4 + 2(a^2b^2 + b^2c^2 + c^2a^2)$, ta chỉ cần chứng minh
$$a^4 + b^4 + c^4 \ge a^3 + b^3 + c^3.$$
Với $a + b + c = 3$, điều này tương đương với $3(a^4 + b^4 + c^4) \ge (a + b + c)(a^3 + b^3 + c^3)$. Hiệu hai vế bằng
$$2(a^4 + b^4 + c^4) - \sum_{\text{3 cặp}}(ab^3 + a^3b) = (a - b)(a^3 - b^3) + (b - c)(b^3 - c^3) + (c - a)(c^3 - a^3) \ge 0,$$
vì $x - y$ và $x^3 - y^3$ luôn cùng dấu. Dấu "=" khi $a = b = c = 1$.

### Bài 12
Theo AM-GM: $a^2 + b^2 \ge 2ab$ và $b^2 + 1 \ge 2b$. Do đó
$$a^2 + 2b^2 + 3 = (a^2 + b^2) + (b^2 + 1) + 2 \ge 2(ab + b + 1),$$
nên $\frac{1}{a^2 + 2b^2 + 3} \le \frac12\cdot\frac{1}{ab + b + 1}$. Tương tự với hai số hạng còn lại. Ta chứng minh khi $abc = 1$:
$$\frac{1}{ab + b + 1} + \frac{1}{bc + c + 1} + \frac{1}{ca + a + 1} = 1.$$
Nhân tử và mẫu của phân số thứ hai với $ab$, của phân số thứ ba với $b$, dùng $abc = 1$:
$$\frac{1}{bc + c + 1} = \frac{ab}{ab^2c + abc + ab} = \frac{ab}{b + 1 + ab}, \qquad \frac{1}{ca + a + 1} = \frac{b}{abc + ab + b} = \frac{b}{1 + ab + b}.$$
Tổng ba phân số bằng $\frac{1 + ab + b}{ab + b + 1} = 1$. Vậy $VT \le \frac12$. Dấu "=" khi $a = b = c = 1$.

### Bài 13
Đặt $F = ab + bc + ca - 2abc$. Vì $F$ đối xứng, giả sử $c = \min\{a, b, c\}$, khi đó $c \le \frac13$ và $1 - 2c > 0$. Viết
$$F = c(a + b) + ab(1 - 2c) = c(1 - c) + ab(1 - 2c).$$
**Dồn biến:** với $c$ cố định, $a + b = 1 - c$ cố định, và $ab \le \frac{(1 - c)^2}{4}$. Vì $1 - 2c > 0$:
$$F \le c(1 - c) + \frac{(1 - c)^2(1 - 2c)}{4} = \frac{1 + c^2 - 2c^3}{4}.$$
**Bài toán một biến:** với $0 \le c \le \frac13$,
$$\frac{7}{27} - \frac{1 + c^2 - 2c^3}{4} = \frac{54c^3 - 27c^2 + 1}{108} = \frac{(3c - 1)^2(6c + 1)}{108} \ge 0.$$
Vậy $F \le \frac{7}{27}$. Dấu "=" khi $c = \frac13$ và $a = b = \frac13$.

*Nhận xét:* chọn $c$ là số nhỏ nhất để hệ số $1 - 2c$ của $ab$ dương, nhờ đó "dồn" $a, b$ về bằng nhau làm $F$ tăng. Đây là ý tưởng cốt lõi của phương pháp dồn biến.

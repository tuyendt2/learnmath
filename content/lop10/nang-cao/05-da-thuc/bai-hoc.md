# Chủ đề 5. Đa thức

> Đa thức xuất hiện trong đề HSG lớp 10 dưới nhiều dạng: tìm số dư, tìm hệ số, tính giá trị biểu thức đối xứng của nghiệm, chứng minh tính chất của đa thức hệ số nguyên, tìm đa thức thỏa một đẳng thức. Ba công cụ chính là **định lý Bézout**, **định lý Viète** và tính chất **$a - b \mid P(a) - P(b)$**.

## I. Kiến thức cần nắm

### 1. Phép chia đa thức và định lý Bézout
Với hai đa thức $P(x)$ và $D(x) \ne 0$, tồn tại duy nhất $Q(x)$, $R(x)$ sao cho
$$P(x) = D(x)Q(x) + R(x), \qquad \deg R < \deg D.$$

**Định lý Bézout:** số dư khi chia $P(x)$ cho $x - a$ là $P(a)$.
*Chứng minh:* $P(x) = (x - a)Q(x) + r$ với $r$ là hằng số. Thay $x = a$ được $r = P(a)$.

**Hệ quả:** $P(x)$ chia hết cho $x - a$ khi và chỉ khi $P(a) = 0$.

**Số dư khi chia cho đa thức bậc cao hơn:** dư khi chia cho $(x - a)(x - b)$ (với $a \ne b$) có dạng $rx + s$; thay $x = a$, $x = b$ được hệ hai phương trình
$$ra + s = P(a), \qquad rb + s = P(b).$$
Tương tự, dư khi chia cho $(x - a)(x - b)(x - c)$ có dạng $rx^2 + sx + t$.

*Ví dụ:* dư khi chia $x^{10}$ cho $x^2 - 1$ là $rx + s$ với $r + s = 1$, $-r + s = 1$, nên dư là $1$.

### 2. Nghiệm và đa thức bằng nhau
- Đa thức bậc $n \ge 1$ có **không quá $n$ nghiệm**. Nếu $a_1, \dots, a_k$ là các nghiệm phân biệt thì $P(x) = (x - a_1)\cdots(x - a_k)Q(x)$.
- **Hệ quả:** nếu đa thức $P$ có bậc không quá $n$ mà có nhiều hơn $n$ nghiệm thì $P \equiv 0$. Nếu $P(x) = Q(x)$ tại vô số giá trị $x$ thì $P$ và $Q$ trùng nhau (cùng hệ số).
- **Đồng nhất hệ số:** hai đa thức bằng nhau với mọi $x$ thì các hệ số tương ứng bằng nhau.

*Vì sao không quá $n$ nghiệm:* mỗi nghiệm $a_i$ cho một nhân tử $(x - a_i)$ (Bézout áp dụng liên tiếp). Nếu có $n + 1$ nghiệm phân biệt thì bậc của $P$ ít nhất là $n + 1$.

### 3. Định lý Viète
**Bậc hai:** $ax^2 + bx + c = 0$ có nghiệm $x_1, x_2$ thì $x_1 + x_2 = -\frac ba$, $x_1x_2 = \frac ca$.

**Bậc ba:** $ax^3 + bx^2 + cx + d = 0$ có ba nghiệm $x_1, x_2, x_3$ thì
$$x_1 + x_2 + x_3 = -\frac ba, \quad x_1x_2 + x_2x_3 + x_3x_1 = \frac ca, \quad x_1x_2x_3 = -\frac da.$$
*Vì sao:* đồng nhất hệ số của $a(x - x_1)(x - x_2)(x - x_3)$ với $ax^3 + bx^2 + cx + d$.

**Tổng lũy thừa của nghiệm.** Đặt $S_n = x_1^n + x_2^n$ với $x_1, x_2$ là nghiệm của $x^2 = px + q$. Nhân $x_i^2 = px_i + q$ với $x_i^{n-2}$ rồi cộng:
$$S_n = pS_{n-1} + qS_{n-2}.$$
Tương tự cho bậc ba: nếu $x_i^3 = px_i + q$ thì $S_n = pS_{n-2} + qS_{n-3}$.

**Biểu thức dạng $\prod(\alpha - x_i)$:** nếu $P(x) = (x - x_1)(x - x_2)(x - x_3)$ thì $(\alpha - x_1)(\alpha - x_2)(\alpha - x_3) = P(\alpha)$.

### 4. Đa thức hệ số nguyên
**Tính chất cơ bản:** nếu $P$ có hệ số nguyên và $a, b$ nguyên thì
$$a - b \mid P(a) - P(b).$$
*Chứng minh:* $P(a) - P(b) = \sum c_k(a^k - b^k)$, và mỗi $a^k - b^k = (a - b)(a^{k-1} + a^{k-2}b + \dots + b^{k-1})$.

**Hệ quả:** $P(a) \equiv P(b) \pmod m$ khi $a \equiv b \pmod m$. Ví dụ, tính chẵn lẻ của $P(n)$ chỉ phụ thuộc tính chẵn lẻ của $n$.

**Định lý nghiệm hữu tỉ:** nếu $P(x) = a_nx^n + \dots + a_1x + a_0$ có hệ số nguyên và có nghiệm hữu tỉ $\frac pq$ (tối giản) thì $p \mid a_0$ và $q \mid a_n$.
*Chứng minh:* nhân $P\left(\frac pq\right) = 0$ với $q^n$: $a_np^n + a_{n-1}p^{n-1}q + \dots + a_0q^n = 0$. Mọi số hạng trừ $a_0q^n$ chia hết cho $p$, nên $p \mid a_0q^n$, mà $\gcd(p, q) = 1$, nên $p \mid a_0$. Tương tự $q \mid a_n$.
Đặc biệt, nếu $a_n = 1$ thì mọi nghiệm hữu tỉ đều là số nguyên và là ước của $a_0$.

**Chia cho đa thức có hệ số cao nhất bằng $1$:** nếu $P$ có hệ số nguyên và $D$ có hệ số nguyên, hệ số cao nhất là $1$, thì thương và dư cũng có hệ số nguyên (vì phép chia không cần chia cho số nào khác $1$).

### 5. Tìm đa thức thỏa điều kiện
- **Thay giá trị đặc biệt** để tìm nghiệm của $P$ (ví dụ $x = 0, 1, 2$), rồi viết $P(x) = (x - a)(x - b)\cdots Q(x)$.
- **Đặt dạng tổng quát** $P(x) = ax^3 + bx^2 + cx + d$ rồi đồng nhất hệ số khi biết bậc.
- **Xét đa thức phụ:** nếu $P(1) = 10$, $P(2) = 20$, $P(3) = 30$ thì $P(x) - 10x$ có ba nghiệm $1, 2, 3$.

### 6. Sai lầm hay gặp
- Cho rằng dư khi chia cho đa thức bậc hai là một hằng số.
- Dùng Viète khi phương trình **không có nghiệm** (với bậc hai phải kiểm tra $\Delta \ge 0$).
- Quên xét đa thức $P \equiv 0$ trong bài tìm đa thức.
- Chia hai vế cho một đa thức mà không xét các giá trị làm nó bằng $0$.

---

## II. Bài tập vận dụng

**Bài 1.** Tìm số dư khi chia $P(x) = x^{2027} + x^{100} + 1$ cho $x^3 - x$.

**Bài 2.** Tìm $a, b$ để $P(x) = x^3 + ax^2 + bx + 2$ chia hết cho $x^2 - 3x + 2$.

**Bài 3.** Gọi $x_1, x_2$ là hai nghiệm của phương trình $x^2 - 3x + 1 = 0$. Tính $x_1^5 + x_2^5$.

**Bài 4.** Đa thức $P(x)$ chia cho $x - 1$ dư $2$, chia cho $x - 2$ dư $3$, chia cho $x - 3$ dư $6$. Tìm số dư khi chia $P(x)$ cho $(x - 1)(x - 2)(x - 3)$.

**Bài 5.** Chứng minh không tồn tại đa thức $P(x)$ có hệ số nguyên thỏa mãn $P(1) = 10$ và $P(5) = 21$.

**Bài 6.** Tìm $m$ để hai phương trình $x^2 + mx + 1 = 0$ và $x^2 + x + m = 0$ có ít nhất một nghiệm (thực) chung.

**Bài 7.** Tìm $a$ để phương trình $x^3 - 6x^2 + ax - 6 = 0$ có ba nghiệm lập thành một cấp số cộng.

**Bài 8.** Biết phương trình $x^3 - 3x + 1 = 0$ có ba nghiệm thực $a, b, c$. Tính
a) $a^2 + b^2 + c^2$;
b) $a^5 + b^5 + c^5$;
c) $T = \frac{1 + a}{1 - a} + \frac{1 + b}{1 - b} + \frac{1 + c}{1 - c}$.

**Bài 9.** Cho đa thức $P(x)$ có hệ số nguyên, $P(0)$ và $P(1)$ đều là số lẻ. Chứng minh $P(x)$ không có nghiệm nguyên.

**Bài 10.** Cho $\alpha = \sqrt2 + \sqrt3$.
a) Tìm đa thức $P(x)$ bậc bốn, hệ số nguyên, hệ số cao nhất bằng $1$, nhận $\alpha$ làm nghiệm.
b) Dùng định lý nghiệm hữu tỉ, chứng minh $\alpha$ là số vô tỉ.

**Bài 11.** Tìm đa thức $P(x)$ bậc ba thỏa mãn $P(0) = 0$ và $P(x) - P(x - 1) = x^2$ với mọi $x$. Từ đó tính $1^2 + 2^2 + \dots + n^2$.

**Bài 12.** Cho $P(x) = x^4 + ax^3 + bx^2 + cx + d$ thỏa mãn $P(1) = 10$, $P(2) = 20$, $P(3) = 30$. Tính $P(12) + P(-8)$.

**Bài 13 (HSG).** Cho đa thức $P(x)$ có hệ số nguyên và ba số nguyên phân biệt $a, b, c$ sao cho $P(a) = P(b) = P(c) = 2$. Chứng minh phương trình $P(x) = 3$ không có nghiệm nguyên.

**Bài 14 (HSG).** Tìm tất cả đa thức $P(x)$ hệ số thực thỏa mãn $xP(x - 1) = (x - 3)P(x)$ với mọi số thực $x$.

---

## III. Lời giải chi tiết

### Bài 1
Vì $x^3 - x$ có bậc $3$, dư có dạng $R(x) = rx^2 + sx + t$:
$$P(x) = x(x - 1)(x + 1)Q(x) + rx^2 + sx + t.$$
Thay $x = 0, 1, -1$:
- $x = 0$: $t = P(0) = 1$;
- $x = 1$: $r + s + t = P(1) = 3$;
- $x = -1$: $r - s + t = P(-1) = -1 + 1 + 1 = 1$.

Suy ra $r + s = 2$, $r - s = 0$, nên $r = s = 1$.

**Đáp số:** dư là $x^2 + x + 1$.

### Bài 2
$x^2 - 3x + 2 = (x - 1)(x - 2)$. $P(x)$ chia hết cho tích này khi và chỉ khi $P(1) = P(2) = 0$:
$$\begin{cases} 1 + a + b + 2 = 0 \\ 8 + 4a + 2b + 2 = 0 \end{cases} \iff \begin{cases} a + b = -3 \\ 2a + b = -5 \end{cases} \iff \begin{cases} a = -2 \\ b = -1. \end{cases}$$
Kiểm tra: $x^3 - 2x^2 - x + 2 = (x - 1)(x - 2)(x + 1)$.

**Đáp số:** $a = -2$, $b = -1$.

### Bài 3
$\Delta = 9 - 4 = 5 > 0$ nên phương trình có hai nghiệm. Mỗi nghiệm thỏa $x^2 = 3x - 1$, nên $S_n = x_1^n + x_2^n$ thỏa
$$S_n = 3S_{n-1} - S_{n-2}.$$
Với $S_0 = 2$, $S_1 = 3$: $S_2 = 9 - 2 = 7$, $S_3 = 21 - 3 = 18$, $S_4 = 54 - 7 = 47$, $S_5 = 141 - 18 = 123$.

**Đáp số:** $x_1^5 + x_2^5 = 123$.

### Bài 4
Theo Bézout: $P(1) = 2$, $P(2) = 3$, $P(3) = 6$. Dư khi chia cho $(x-1)(x-2)(x-3)$ có dạng $R(x) = rx^2 + sx + t$ và $R(1) = 2$, $R(2) = 3$, $R(3) = 6$:
$$\begin{cases} r + s + t = 2 \\ 4r + 2s + t = 3 \\ 9r + 3s + t = 6. \end{cases}$$
Trừ liên tiếp: $3r + s = 1$, $5r + s = 3$, nên $r = 1$, $s = -2$, $t = 3$.

**Đáp số:** dư là $x^2 - 2x + 3$.

### Bài 5
Giả sử tồn tại $P$ như vậy. Vì $P$ có hệ số nguyên nên $5 - 1 \mid P(5) - P(1)$, tức là $4 \mid 11$, vô lý. Vậy không tồn tại.

### Bài 6
Giả sử $x_0$ là nghiệm chung. Trừ hai phương trình:
$$(m - 1)x_0 + (1 - m) = 0 \iff (m - 1)(x_0 - 1) = 0.$$
- **$m = 1$:** hai phương trình cùng là $x^2 + x + 1 = 0$, có $\Delta = -3 < 0$, không có nghiệm thực. Loại.
- **$x_0 = 1$:** thay vào phương trình đầu: $2 + m = 0$, $m = -2$. Khi đó hai phương trình là $x^2 - 2x + 1 = 0$ (nghiệm $x = 1$) và $x^2 + x - 2 = 0$ (nghiệm $x = 1$, $x = -2$), có nghiệm chung $x = 1$.

**Đáp số:** $m = -2$.

### Bài 7
Gọi ba nghiệm là $x_1, x_2, x_3$ lập cấp số cộng, $x_1 + x_3 = 2x_2$. Theo Viète $x_1 + x_2 + x_3 = 6$, nên $3x_2 = 6$, $x_2 = 2$.
Vậy $x = 2$ là nghiệm: $8 - 24 + 2a - 6 = 0 \iff a = 11$.
**Kiểm tra (điều kiện đủ):** với $a = 11$, $x^3 - 6x^2 + 11x - 6 = (x - 1)(x - 2)(x - 3)$, ba nghiệm $1, 2, 3$ lập cấp số cộng.

**Đáp số:** $a = 11$.

*Nhận xét:* bước kiểm tra là bắt buộc, vì $x_2 = 2$ mới là điều kiện cần.

### Bài 8
Theo Viète: $a + b + c = 0$, $ab + bc + ca = -3$, $abc = -1$.

**a)** $a^2 + b^2 + c^2 = (a + b + c)^2 - 2(ab + bc + ca) = 0 + 6 = 6$.

**b)** Mỗi nghiệm thỏa $x^3 = 3x - 1$. Đặt $S_n = a^n + b^n + c^n$; nhân với $x^{n-3}$ rồi cộng: $S_n = 3S_{n-2} - S_{n-3}$. Với $S_0 = 3$, $S_1 = 0$, $S_2 = 6$:
$$S_3 = 3\cdot 0 - 3 = -3, \quad S_4 = 3\cdot 6 - 0 = 18, \quad S_5 = 3\cdot(-3) - 6 = -15.$$

**c)** Vì $1^3 - 3 + 1 = -1 \ne 0$ nên $a, b, c \ne 1$. Ta có $\frac{1 + x}{1 - x} = -1 + \frac{2}{1 - x}$, nên
$$T = -3 + 2\left(\frac{1}{1-a} + \frac{1}{1-b} + \frac{1}{1-c}\right).$$
Đặt $P(x) = x^3 - 3x + 1 = (x - a)(x - b)(x - c)$. Thì $(1 - a)(1 - b)(1 - c) = P(1) = -1$, và
$$(1 - b)(1 - c) + (1 - c)(1 - a) + (1 - a)(1 - b) = 3 - 2(a + b + c) + (ab + bc + ca) = 3 - 0 - 3 = 0.$$
Vậy tổng các nghịch đảo bằng $\frac{0}{-1} = 0$, và $T = -3$.

**Đáp số:** a) $6$; b) $-15$; c) $-3$.

### Bài 9
Giả sử $P(n) = 0$ với $n$ nguyên.
- Nếu $n$ chẵn: $n - 0 \mid P(n) - P(0)$, nên $P(n) - P(0)$ chẵn, tức là $P(n)$ cùng tính chẵn lẻ với $P(0)$, là số lẻ.
- Nếu $n$ lẻ: $n - 1$ chẵn và $n - 1 \mid P(n) - P(1)$, nên $P(n)$ cùng tính chẵn lẻ với $P(1)$, là số lẻ.

Trong cả hai trường hợp $P(n)$ lẻ, không thể bằng $0$. Vậy $P$ không có nghiệm nguyên.

### Bài 10
**a)** $\alpha^2 = 5 + 2\sqrt6$, nên $(\alpha^2 - 5)^2 = 24$, tức là $\alpha^4 - 10\alpha^2 + 1 = 0$. Chọn
$$P(x) = x^4 - 10x^2 + 1.$$

**b)** $P$ có hệ số nguyên, hệ số cao nhất bằng $1$. Theo định lý nghiệm hữu tỉ, mọi nghiệm hữu tỉ của $P$ là số nguyên và là ước của $1$, tức là $\pm 1$. Nhưng $P(1) = P(-1) = 1 - 10 + 1 = -8 \ne 0$. Vậy $P$ không có nghiệm hữu tỉ. Vì $\alpha$ là nghiệm của $P$ nên $\alpha$ vô tỉ.

### Bài 11
Đặt $P(x) = ax^3 + bx^2 + cx$ (vì $P(0) = 0$). Khai triển:
$$P(x) - P(x - 1) = a\left(3x^2 - 3x + 1\right) + b(2x - 1) + c = 3ax^2 + (2b - 3a)x + (a - b + c).$$
Đồng nhất với $x^2$: $3a = 1$, $2b - 3a = 0$, $a - b + c = 0$. Suy ra $a = \frac13$, $b = \frac12$, $c = \frac16$:
$$P(x) = \frac{2x^3 + 3x^2 + x}{6} = \frac{x(x + 1)(2x + 1)}{6}.$$
**Tính tổng:** thay $x = 1, 2, \dots, n$ vào $P(x) - P(x - 1) = x^2$ rồi cộng (các số hạng triệt tiêu xen kẽ):
$$1^2 + 2^2 + \dots + n^2 = P(n) - P(0) = \frac{n(n + 1)(2n + 1)}{6}.$$
Ví dụ $n = 10$: $\frac{10\cdot 11\cdot 21}{6} = 385$.

### Bài 12
Xét $Q(x) = P(x) - 10x$. Đây là đa thức bậc $4$, hệ số cao nhất bằng $1$, có ba nghiệm $1, 2, 3$. Do đó
$$Q(x) = (x - 1)(x - 2)(x - 3)(x - r)$$
với $r$ là một số thực nào đó. Khi đó
$$P(12) = 120 + 11\cdot 10\cdot 9\cdot(12 - r) = 120 + 990(12 - r),$$
$$P(-8) = -80 + (-9)(-10)(-11)(-8 - r) = -80 + 990(8 + r).$$
Cộng lại: $P(12) + P(-8) = 40 + 990\cdot 20 = 19840$.

**Đáp số:** $19840$.

*Nhận xét:* không cần biết $r$: hai điểm $12$ và $-8$ được chọn đối xứng để $r$ tự triệt tiêu.

### Bài 13
Đa thức $P(x) - 2$ có hệ số nguyên và có ba nghiệm nguyên phân biệt $a, b, c$. Chia liên tiếp cho các đa thức $x - a$, $x - b$, $x - c$ (hệ số cao nhất bằng $1$), ta được
$$P(x) - 2 = (x - a)(x - b)(x - c)Q(x),$$
với $Q$ có hệ số nguyên.
Giả sử $P(n) = 3$ với $n$ nguyên. Khi đó
$$(n - a)(n - b)(n - c)Q(n) = 1.$$
Bốn thừa số đều là số nguyên, tích bằng $1$, nên mỗi thừa số bằng $1$ hoặc $-1$. Nhưng $n - a$, $n - b$, $n - c$ là **ba số nguyên phân biệt**, không thể cùng thuộc tập hai phần tử $\{1; -1\}$. Mâu thuẫn. Vậy $P(x) = 3$ không có nghiệm nguyên.

### Bài 14
**Tìm nghiệm của $P$.**
- $x = 0$: $0 = -3P(0)$, nên $P(0) = 0$.
- $x = 1$: $P(0) = -2P(1)$, nên $P(1) = 0$.
- $x = 2$: $2P(1) = -P(2)$, nên $P(2) = 0$.

Vậy $P(x) = x(x - 1)(x - 2)Q(x)$. Thay vào đẳng thức:
$$x\cdot(x - 1)(x - 2)(x - 3)Q(x - 1) = (x - 3)\cdot x(x - 1)(x - 2)Q(x).$$
Với mọi $x \notin \{0; 1; 2; 3\}$, chia hai vế cho $x(x-1)(x-2)(x-3)$: $Q(x - 1) = Q(x)$.

**Chứng minh $Q$ là hằng số.** Đặt $c = Q(4)$. Từ $Q(x) = Q(x - 1)$ với mọi $x \ge 4$ suy ra $Q(4) = Q(5) = Q(6) = \dots = c$. Đa thức $Q(x) - c$ có vô số nghiệm nên $Q(x) - c \equiv 0$, tức là $Q \equiv c$.

**Thử lại:** $P(x) = cx(x - 1)(x - 2)$ thì $xP(x - 1) = cx(x-1)(x-2)(x-3) = (x - 3)P(x)$, đúng.

**Đáp số:** $P(x) = cx(x - 1)(x - 2)$ với $c$ là hằng số thực tùy ý (kể cả $c = 0$).

*Nhận xét:* thay các giá trị làm một vế bằng $0$ để tìm nghiệm, rồi "rút" nhân tử và dùng tính chất "đa thức có vô số nghiệm thì đồng nhất bằng $0$".

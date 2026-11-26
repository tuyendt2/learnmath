# Chủ đề 5. Đa thức một biến

> Đề HSG lớp 7 thường có một câu về đa thức: tìm nghiệm, tìm hệ số để đa thức có nghiệm hoặc chia hết, tính tổng các hệ số, hay suy luận từ một đẳng thức đúng với mọi $x$. Chủ đề này luyện các kỹ thuật đó, chỉ dùng phép tính đa thức của lớp 7.

## I. Kiến thức cần nắm

> **Ý tưởng xuyên suốt:** một đẳng thức đa thức đúng **với mọi $x$** thì ta được **chọn $x$ tùy ý**. Chọn những giá trị làm triệt tiêu nhiều số hạng ($x = 0$, $x = 1$, $x = -1$, nghiệm của một thừa số) là cách nhanh nhất để lấy thông tin.

### 1. Đa thức một biến
- Đa thức một biến là tổng của những đơn thức cùng một biến, ví dụ $P(x) = 2x^3 - x + 5$.
- **Thu gọn** (cộng các đơn thức đồng dạng) và **sắp xếp** theo lũy thừa giảm dần trước khi làm gì khác.
- **Bậc** là số mũ cao nhất **sau khi thu gọn**. **Hệ số cao nhất** là hệ số của lũy thừa bậc cao nhất, **hệ số tự do** là số hạng không chứa biến.
- Đa thức $P(x) = a_nx^n + \dots + a_1x + a_0$ có $P(0) = a_0$ (hệ số tự do).

*Ví dụ:* $x^3 + 2x - x^3 + 1$ thu gọn thành $2x + 1$, có bậc $1$ chứ không phải bậc $3$.

### 2. Tổng các hệ số
Với $P(x) = a_nx^n + \dots + a_1x + a_0$:
- $P(1) = a_n + \dots + a_1 + a_0$ là **tổng các hệ số**.
- $P(-1) = a_0 - a_1 + a_2 - a_3 + \dots$ là tổng hệ số bậc chẵn trừ tổng hệ số bậc lẻ.
- Do đó tổng hệ số bậc chẵn là $\frac{P(1) + P(-1)}{2}$, tổng hệ số bậc lẻ là $\frac{P(1) - P(-1)}{2}$.

Cách này dùng được cả khi chưa khai triển, ví dụ $P(x) = (2x - 1)^{10}$ có tổng các hệ số $P(1) = 1$.

### 3. Nghiệm của đa thức
$x = a$ là **nghiệm** của $P(x)$ nếu $P(a) = 0$.
- **Tìm nghiệm:** giải $P(x) = 0$. Tích bằng $0$ khi một thừa số bằng $0$.
- **Dấu hiệu nhanh:** tổng các hệ số bằng $0$ thì $x = 1$ là nghiệm; tổng hệ số bậc chẵn bằng tổng hệ số bậc lẻ thì $x = -1$ là nghiệm.
- **Chứng minh vô nghiệm:** chỉ ra $P(x) > 0$ (hoặc $< 0$) với mọi $x$. Ví dụ $x^2 + 1 \ge 1 > 0$, hoặc $x^2 + 2x + 3 = (x + 1)(x + 1) + 2 \ge 2$.
- **Tìm hệ số khi biết nghiệm:** thay nghiệm vào, được phương trình theo hệ số.

### 4. Phép chia đa thức và số dư
Chia $P(x)$ cho $B(x)$ ($B$ khác đa thức không) được thương $Q(x)$ và dư $R(x)$:
$$P(x) = B(x)\cdot Q(x) + R(x), \quad R = 0 \text{ hoặc bậc } R < \text{bậc } B.$$

**Số dư khi chia cho $x - a$ bằng $P(a)$.** Chia cho $x - a$ (bậc $1$) thì dư là một số $r$: $P(x) = (x - a)Q(x) + r$. Thay $x = a$ được $P(a) = 0\cdot Q(a) + r = r$.

**Hệ quả:** $P(x)$ chia hết cho $x - a$ khi và chỉ khi $P(a) = 0$.

**Chia cho đa thức bậc hai** thì dư có dạng $mx + n$. Ví dụ, chia cho $x^2 - 1 = (x - 1)(x + 1)$: từ $P(x) = (x^2 - 1)Q(x) + mx + n$, thay $x = 1$ và $x = -1$ được $P(1) = m + n$, $P(-1) = -m + n$.

*Ví dụ:* $x^3 - 2x + 4$ chia cho $x + 2$ có dư $(-2)^3 - 2\cdot(-2) + 4 = 0$, nên chia hết.

### 5. Xác định đa thức
- **Biết bậc và vài giá trị:** đa thức bậc hai $ax^2 + bx + c$ có $3$ hệ số, cần $3$ điều kiện. Thay $x = 0$ trước (cho ngay $c$).
- **Đồng nhất hệ số:** hai đa thức (đã thu gọn) bằng nhau với mọi $x$ khi và chỉ khi các hệ số của cùng lũy thừa bằng nhau.

*Ví dụ:* $ax + b = 3x - 2$ với mọi $x$ thì $a = 3$, $b = -2$.

### 6. Đẳng thức đúng với mọi $x$
Khi đề cho một đẳng thức chứa $P(x)$ đúng với mọi $x$:
- Chọn $x$ để **một vế mất đi**: ví dụ $x\cdot P(x + 2) = (x^2 - 9)P(x)$, chọn $x = 0$ thì vế trái bằng $0$, được $P(0) = 0$.
- Chọn $x$ và $-x$ (hoặc $x$ và $1 - x$) để được **hệ hai phương trình** với hai ẩn $P(a)$, $P(b)$.

### 7. Sai lầm hay gặp
- Xác định bậc khi chưa thu gọn.
- Nhầm "đa thức có nghiệm $x = a$" với "$P(0) = a$".
- Kết luận đa thức vô nghiệm chỉ vì thử vài giá trị thấy khác $0$.
- Khi chia cho đa thức bậc hai, cho rằng dư là một số. Dư có thể là đa thức bậc nhất.
- Thay $x = -1$ vào $x^{2n}$ được $-1$. Đúng: $(-1)^{2n} = 1$.

---

## II. Bài tập vận dụng

**Bài 1.** Cho $P(x) = 3x^3 - 2x + 5x^2 - x^3 + 4 - 2x^3 + x$.
a) Thu gọn, sắp xếp $P(x)$ và tìm bậc, hệ số cao nhất, hệ số tự do.
b) Tính $P(-1)$ và $P\left(\frac15\right)$.

**Bài 2.** a) Tìm nghiệm của các đa thức $A(x) = 2x - 6$ và $B(x) = x^2 - 3x$.
b) Chứng minh đa thức $C(x) = x^2 + 2x + 3$ không có nghiệm.

**Bài 3.** a) Tìm $m$ để $x = -1$ là nghiệm của $P(x) = 2x^3 - mx + 3$.
b) Tìm $m$ để $x = 2$ là nghiệm của $Q(x) = mx^2 - 3x + m - 1$.

**Bài 4.** Tìm đa thức bậc hai $f(x) = ax^2 + bx + c$, biết $f(0) = 2$, $f(1) = 5$, $f(2) = 12$. Tính $f(-2)$.

**Bài 5.** a) Chia đa thức $A(x) = 2x^3 - 3x^2 + 4x - 5$ cho $x - 2$, tìm thương và dư. So sánh số dư với $A(2)$.
b) Tìm $a$ để $2x^3 - 3x^2 + 4x + a$ chia hết cho $x - 2$.

**Bài 6.** Tìm $a$, $b$ để đa thức $P(x) = x^3 + ax^2 + bx - 6$ có hai nghiệm $x = 1$ và $x = 2$. Với $a$, $b$ vừa tìm, chứng minh $x = 3$ cũng là nghiệm của $P(x)$.

**Bài 7 (tổng các hệ số).** Cho $P(x) = (3x^2 - 2x - 2)^{2025}$. Sau khi khai triển và thu gọn, tính:
a) tổng các hệ số của $P(x)$;
b) tổng các hệ số của các lũy thừa bậc chẵn (kể cả hệ số tự do).

**Bài 8.** Cho đa thức $f(x)$ thỏa mãn $f(x) + x\cdot f(-x) = x + 1$ với mọi $x$. Tính $f(1)$ và $f(-1)$.

**Bài 9 (HSG).** Cho $P(x) = ax^2 + bx + c$ với $5a + b + 2c = 0$. Chứng minh $P(2)\cdot P(-1) \le 0$.

**Bài 10.** Tìm $a$, $b$ để $x^4 + ax^2 + b$ chia hết cho $x^2 - 3x + 2$.

**Bài 11 (HSG).** a) Tìm đa thức bậc hai $P(x)$ thỏa mãn $P(0) = 0$ và $P(x) - P(x - 1) = x$ với mọi $x$.
b) Áp dụng, tính $1 + 2 + 3 + \dots + n$ với $n$ nguyên dương.

**Bài 12 (HSG).** Cho đa thức $f(x)$ thỏa mãn $x\cdot f(x + 2) = (x^2 - 9)\cdot f(x)$ với mọi $x$. Chứng minh $f(x)$ có ít nhất ba nghiệm.

**Bài 13 (HSG).** Cho $f(x) = ax^2 + bx + c$ với $a, b, c$ là các số nguyên. Biết $f(x)$ chia hết cho $5$ với mọi số nguyên $x$. Chứng minh $a$, $b$, $c$ đều chia hết cho $5$.

**Bài 14 (HSG).** Tìm dư khi chia $P(x) = x^{2025} + x^{100} + x + 1$ cho $x^2 - 1$.

---

## III. Lời giải chi tiết

### Bài 1
a) Cộng các đơn thức đồng dạng:
$$P(x) = (3 - 1 - 2)x^3 + 5x^2 + (-2 + 1)x + 4 = 5x^2 - x + 4.$$
$P(x)$ có bậc $2$, hệ số cao nhất $5$, hệ số tự do $4$.

b) $P(-1) = 5 + 1 + 4 = 10$; $P\left(\frac15\right) = 5\cdot\frac1{25} - \frac15 + 4 = \frac15 - \frac15 + 4 = 4$.

*Nhận xét:* đa thức ban đầu có các số hạng bậc $3$ nhưng chúng triệt tiêu nhau. Bậc phải xác định sau khi thu gọn.

### Bài 2
a) $A(x) = 0 \iff 2x = 6 \iff x = 3$.
$B(x) = x(x - 3) = 0 \iff x = 0$ hoặc $x = 3$.

b) $C(x) = x^2 + x + x + 1 + 2 = x(x + 1) + (x + 1) + 2 = (x + 1)(x + 1) + 2$.
Vì $(x + 1)(x + 1) = (x + 1)^2 \ge 0$ nên $C(x) \ge 2 > 0$ với mọi $x$. Vậy $C(x)$ không có nghiệm.

### Bài 3
a) $P(-1) = 2\cdot(-1) - m\cdot(-1) + 3 = m + 1$. Cần $m + 1 = 0$, nên $m = -1$.

b) $Q(2) = 4m - 6 + m - 1 = 5m - 7$. Cần $5m - 7 = 0$, nên $m = \frac75$.

### Bài 4
- $f(0) = c = 2$.
- $f(1) = a + b + c = 5$, nên $a + b = 3$.
- $f(2) = 4a + 2b + c = 12$, nên $4a + 2b = 10$, tức là $2a + b = 5$.

Trừ hai đẳng thức $2a + b = 5$ và $a + b = 3$ được $a = 2$, suy ra $b = 1$.
Vậy $f(x) = 2x^2 + x + 2$ và $f(-2) = 8 - 2 + 2 = 8$.

### Bài 5
a) Đặt phép chia:
- $2x^3 : x = 2x^2$; $2x^2(x - 2) = 2x^3 - 4x^2$; hiệu: $x^2 + 4x - 5$.
- $x^2 : x = x$; $x(x - 2) = x^2 - 2x$; hiệu: $6x - 5$.
- $6x : x = 6$; $6(x - 2) = 6x - 12$; hiệu: $7$.

Thương là $2x^2 + x + 6$, dư là $7$. Kiểm tra: $A(2) = 16 - 12 + 8 - 5 = 7$, đúng bằng số dư.

b) Đa thức $2x^3 - 3x^2 + 4x + a$ chia cho $x - 2$ có dư bằng giá trị tại $x = 2$, tức là $16 - 12 + 8 + a = 12 + a$. Chia hết khi $12 + a = 0$, nên $a = -12$.

*Nhận xét:* số dư khi chia cho $x - a$ bằng $P(a)$, vì $P(x) = (x - a)Q(x) + r$ và thay $x = a$ làm mất số hạng đầu.

### Bài 6
- $P(1) = 1 + a + b - 6 = 0$, nên $a + b = 5$.
- $P(2) = 8 + 4a + 2b - 6 = 0$, nên $4a + 2b = -2$, tức là $2a + b = -1$.

Trừ hai đẳng thức: $a = -6$, suy ra $b = 11$. Khi đó $P(x) = x^3 - 6x^2 + 11x - 6$ và
$$P(3) = 27 - 54 + 33 - 6 = 0.$$
Vậy $x = 3$ cũng là nghiệm.

### Bài 7
a) Tổng các hệ số bằng $P(1) = (3 - 2 - 2)^{2025} = (-1)^{2025} = -1$.

b) $P(-1) = (3 + 2 - 2)^{2025} = 3^{2025}$. Gọi $E$ là tổng hệ số bậc chẵn, $O$ là tổng hệ số bậc lẻ. Khi đó $P(1) = E + O$ và $P(-1) = E - O$. Cộng lại:
$$E = \frac{P(1) + P(-1)}{2} = \frac{3^{2025} - 1}{2}.$$

*Nhận xét:* không cần khai triển. Thay $x = 1$ và $x = -1$ là đủ.

### Bài 8
- Thay $x = 1$: $f(1) + f(-1) = 2$.
- Thay $x = -1$: $f(-1) - f(1) = 0$, tức là $f(-1) = f(1)$.

Từ hai đẳng thức suy ra $2f(1) = 2$. Vậy $f(1) = f(-1) = 1$.

*Nhận xét:* khi đẳng thức chứa cả $f(x)$ và $f(-x)$, thay $x = a$ và $x = -a$ để được hệ hai phương trình hai ẩn $f(a)$, $f(-a)$.

### Bài 9
$P(2) = 4a + 2b + c$ và $P(-1) = a - b + c$. Cộng lại:
$$P(2) + P(-1) = 5a + b + 2c = 0,$$
nên $P(2) = -P(-1)$. Do đó
$$P(2)\cdot P(-1) = -P(-1)\cdot P(-1) = -\left[P(-1)\right]^2 \le 0.$$

*Nhận xét:* điều kiện $5a + b + 2c = 0$ "gợi ý" tìm hai giá trị $x$ sao cho tổng $P(x_1) + P(x_2)$ bằng đúng biểu thức đó. Thử các giá trị nhỏ như $x = 0, \pm 1, \pm 2$.

### Bài 10
Thực hiện phép chia $x^4 + ax^2 + b$ cho $x^2 - 3x + 2$:
- $x^4 : x^2 = x^2$; trừ $x^2(x^2 - 3x + 2) = x^4 - 3x^3 + 2x^2$, còn $3x^3 + (a - 2)x^2 + b$.
- $3x^3 : x^2 = 3x$; trừ $3x(x^2 - 3x + 2) = 3x^3 - 9x^2 + 6x$, còn $(a + 7)x^2 - 6x + b$.
- $(a + 7)x^2 : x^2 = a + 7$; trừ $(a + 7)(x^2 - 3x + 2)$, còn $(3a + 15)x + (b - 2a - 14)$.

Thương là $x^2 + 3x + a + 7$, dư là $(3a + 15)x + (b - 2a - 14)$. Phép chia hết khi dư bằng đa thức không:
$$3a + 15 = 0 \text{ và } b - 2a - 14 = 0 \iff a = -5,\ b = 4.$$
Khi đó $x^4 - 5x^2 + 4 = (x^2 - 3x + 2)(x^2 + 3x + 2)$.

*Cách nhanh:* $x^2 - 3x + 2 = (x - 1)(x - 2)$. Nếu $P(x) = (x - 1)(x - 2)Q(x)$ thì $P(1) = P(2) = 0$, tức là $1 + a + b = 0$ và $16 + 4a + b = 0$, cũng cho $a = -5$, $b = 4$. Sau đó kiểm tra lại bằng phép nhân như trên.

### Bài 11
a) Vì $P(0) = 0$ nên $P(x) = ax^2 + bx$ ($a \ne 0$). Khi đó
$$P(x) - P(x - 1) = ax^2 + bx - a(x - 1)(x - 1) - b(x - 1) = ax^2 + bx - a(x^2 - 2x + 1) - bx + b = 2ax - a + b.$$
Đẳng thức $2ax + (b - a) = x$ đúng với mọi $x$, nên $2a = 1$ và $b - a = 0$. Vậy $a = b = \frac12$ và
$$P(x) = \frac{x^2 + x}{2} = \frac{x(x + 1)}{2}.$$

b) Thay $x = 1, 2, \dots, n$ vào $x = P(x) - P(x - 1)$ rồi cộng lại:
$$1 + 2 + \dots + n = \left[P(1) - P(0)\right] + \left[P(2) - P(1)\right] + \dots + \left[P(n) - P(n - 1)\right] = P(n) - P(0) = \frac{n(n+1)}{2}.$$

*Nhận xét:* đây là cách "tìm công thức tổng" bằng đa thức. Muốn tính $1^2 + 2^2 + \dots + n^2$, tìm đa thức bậc ba $P$ với $P(x) - P(x - 1) = x^2$.

### Bài 12
Đẳng thức đúng với mọi $x$, ta chọn $x$ để một vế bằng $0$:
- $x = 0$: $0 = (0 - 9)f(0)$, nên $f(0) = 0$.
- $x = 3$: $3f(5) = 0\cdot f(3) = 0$, nên $f(5) = 0$.
- $x = -3$: $-3f(-1) = 0\cdot f(-3) = 0$, nên $f(-1) = 0$.

Vậy $f(x)$ có ít nhất ba nghiệm $0$, $5$, $-1$.

### Bài 13
- $f(0) = c$ chia hết cho $5$.
- $f(1) = a + b + c$ chia hết cho $5$, mà $c$ chia hết cho $5$, nên $a + b$ chia hết cho $5$.
- $f(-1) = a - b + c$ chia hết cho $5$, nên $a - b$ chia hết cho $5$.

Cộng lại: $(a + b) + (a - b) = 2a$ chia hết cho $5$. Vì ƯCLN$(2, 5) = 1$ nên $a$ chia hết cho $5$. Từ $a + b$ chia hết cho $5$ suy ra $b$ chia hết cho $5$.

Vậy $a$, $b$, $c$ đều chia hết cho $5$.

### Bài 14
Đa thức chia $x^2 - 1$ có bậc $2$ nên dư có dạng $mx + n$:
$$P(x) = (x^2 - 1)Q(x) + mx + n \quad\text{với mọi } x.$$
- Thay $x = 1$: $P(1) = 1 + 1 + 1 + 1 = 4 = m + n$.
- Thay $x = -1$: $P(-1) = -1 + 1 - 1 + 1 = 0 = -m + n$.

Suy ra $n = m$ và $2m = 4$, nên $m = n = 2$. Vậy dư là $2x + 2$.

*Nhận xét:* chọn $x$ là nghiệm của đa thức chia ($x = 1$ và $x = -1$) để số hạng $(x^2 - 1)Q(x)$ biến mất. Không cần biết thương $Q(x)$.

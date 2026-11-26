# Chủ đề 1. Phương trình và hệ phương trình

> Câu phương trình, hệ phương trình gần như luôn có mặt trong đề HSG lớp 10 cấp tỉnh, thường ở vị trí câu 1 hoặc câu 2. Chìa khóa là **nhận ra cấu trúc**: đối xứng, đẳng cấp, có biểu thức lặp lại để đặt ẩn phụ, hay có nghiệm "đẹp" để nhân liên hợp.

## I. Kiến thức cần nắm

### 1. Nguyên tắc chung và điều kiện xác định
- Trước khi biến đổi, **đặt điều kiện**: biểu thức dưới căn bậc chẵn không âm, mẫu khác $0$.
- Biến đổi **tương đương** khi bình phương hai vế không âm: $\sqrt{A} = B \iff \begin{cases} B \ge 0 \\ A = B^2 \end{cases}$.
- Nếu bình phương khi chưa biết dấu hai vế thì có thể **sinh nghiệm ngoại lai**, phải thử lại.
- $\sqrt[3]{A} = B \iff A = B^3$ (không cần điều kiện), vì hàm lập phương giữ thứ tự: $a < b \iff a^3 < b^3$.

*Vì sao bình phương hai vế không âm là tương đương:* với $u, v \ge 0$ thì $u^2 - v^2 = (u - v)(u + v)$, mà $u + v > 0$ (trừ khi $u = v = 0$), nên $u^2 = v^2 \iff u = v$.

> **Sai lầm hay gặp:** giải $\sqrt{x + 2} = x$ bằng cách bình phương thành $x^2 - x - 2 = 0$, được $x = 2$ và $x = -1$, rồi quên loại $x = -1$ (vế phải âm). Thử lại: $\sqrt{1} = 1 \ne -1$.

### 2. Đặt ẩn phụ
**Dạng 1: một biểu thức lặp lại.** Nếu phương trình chứa $f(x)$ và $\sqrt{f(x)}$, đặt $t = \sqrt{f(x)} \ge 0$.

*Ví dụ:* $x^2 + x + \sqrt{x^2 + x + 2} = 4$. Đặt $t = \sqrt{x^2 + x + 2} \ge 0$, ta được $t^2 + t - 6 = 0$, nên $t = 2$ (loại $t = -3$). Khi đó $x^2 + x - 2 = 0$, $x = 1$ hoặc $x = -2$.

**Dạng 2: tổng và tích của hai căn.** Với $\sqrt{a + x} + \sqrt{b - x}$, đặt $t = \sqrt{a + x} + \sqrt{b - x}$ thì
$$\sqrt{(a + x)(b - x)} = \frac{t^2 - (a + b)}{2}.$$
Cần tìm **miền giá trị của $t$**: $t^2 = (a + b) + 2\sqrt{(a+x)(b-x)} \ge a + b$, và theo Cauchy-Schwarz $t^2 \le 2(a + b)$. Vậy $\sqrt{a + b} \le t \le \sqrt{2(a + b)}$.

**Dạng 3: đưa về hệ.** Phương trình $x^3 + b = a\sqrt[3]{ax - b}$ đặt $y = \sqrt[3]{ax - b}$ thì được hệ $x^3 + b = ay$, $y^3 + b = ax$, là hệ đối xứng loại II.

**Dạng 4: đẳng cấp với căn.** Nếu phương trình có dạng $\alpha A + \beta B = \gamma\sqrt{AB}$ (với $A, B \ge 0$), đặt $u = \sqrt A$, $v = \sqrt B$ được $\alpha u^2 - \gamma uv + \beta v^2 = 0$, một phương trình đẳng cấp. Mẹo hay dùng: $x^3 + 1 = (x + 1)(x^2 - x + 1)$, $x^4 + 4 = (x^2 + 2x + 2)(x^2 - 2x + 2)$.

### 3. Nhân liên hợp
Khi đoán được nghiệm $x_0$ (thử các số nguyên nhỏ), ta tách để **mỗi nhóm triệt tiêu tại $x_0$**, rồi dùng
$$\sqrt{A} - B = \frac{A - B^2}{\sqrt{A} + B}\quad (\sqrt A + B > 0).$$
Sau khi rút nhân tử $(x - x_0)$, phần còn lại thường **luôn dương** (hoặc luôn âm) trên miền xác định, nên vô nghiệm.

*Ví dụ:* $\sqrt{x + 3} = 2x$ có nghiệm đoán $x = 1$. Viết $\sqrt{x+3} - 2 = 2(x - 1)$, tức là $\frac{x - 1}{\sqrt{x + 3} + 2} = 2(x - 1)$. Nếu $x \ne 1$ thì $\sqrt{x + 3} + 2 = \frac12$, vô lý. Vậy $x = 1$.

### 4. Phương pháp đánh giá
Nếu chứng minh được $VT \le m \le VP$ thì phương trình tương đương với **cả hai dấu "=" cùng xảy ra**. Công cụ: AM-GM, Cauchy-Schwarz, hằng đẳng thức bình phương.

*Ví dụ:* $\sqrt{x - 1} + \sqrt{3 - x} \le \sqrt{2\big((x - 1) + (3 - x)\big)} = 2$, dấu "=" khi $x = 2$.

### 5. Hệ đối xứng loại I
Hệ không đổi khi đổi chỗ $x$ và $y$. Đặt $S = x + y$, $P = xy$, giải hệ theo $S, P$, rồi $x, y$ là nghiệm của $X^2 - SX + P = 0$.
- **Điều kiện có nghiệm thực:** $S^2 \ge 4P$ (vì $(x - y)^2 = S^2 - 4P \ge 0$).
- Các biểu thức thường dùng: $x^2 + y^2 = S^2 - 2P$, $x^3 + y^3 = S^3 - 3SP$, $x^2y + xy^2 = SP$.

### 6. Hệ đối xứng loại II
Đổi chỗ $x$ và $y$ thì phương trình này biến thành phương trình kia. **Trừ vế theo vế** luôn được nhân tử $(x - y)$:
$$(x - y)\cdot g(x, y) = 0.$$
Xét hai trường hợp $x = y$ và $g(x, y) = 0$. Trường hợp sau thường vô nghiệm (do $g > 0$) hoặc kết hợp với một phương trình của hệ để giải.

*Vì sao luôn có nhân tử $x - y$:* hiệu hai phương trình là một biểu thức $h(x, y)$ thỏa $h(y, x) = -h(x, y)$, nên $h(x, x) = 0$, tức là $h$ chia hết cho $x - y$.

### 7. Hệ đẳng cấp
Mỗi phương trình có dạng (đa thức thuần nhất bậc $k$) $=$ hằng số, cùng bậc $k$ ở hai phương trình.
- **Cách 1:** khử hằng số (nhân rồi trừ) để được phương trình thuần nhất $= 0$, rồi chia cho $y^k$ (xét riêng $y = 0$), đặt $t = \frac xy$.
- **Cách 2:** xét $y = 0$, rồi đặt $x = ty$.

### 8. Hệ không mẫu mực
- **Chia cho một biểu thức** để lộ ẩn phụ (thường chia cho $y$, $xy$, $x^2$...).
- **Rút thế, cộng trừ** để tạo phương trình tích.
- **Biến đổi về dạng $f(x) = f(y)$**: ví dụ $x^3 + x = y^3 + y \iff (x - y)(x^2 + xy + y^2 + 1) = 0$, mà $x^2 + xy + y^2 + 1 = \left(x + \frac y2\right)^2 + \frac{3y^2}{4} + 1 > 0$, nên $x = y$.

> **Quy trình làm bài:** đặt điều kiện, nhận dạng (đối xứng, đẳng cấp, biểu thức lặp, nghiệm đẹp), chọn phép biến đổi, **thử lại hoặc đối chiếu điều kiện**, kết luận đầy đủ các cặp nghiệm.

---

## II. Bài tập vận dụng

**Bài 1.** Giải phương trình $(x^2 - x)(x^2 + 3x + 2) = 24$.

**Bài 2.** Giải phương trình $x^2 - 3x + \sqrt{x^2 - 3x + 5} = 7$.

**Bài 3.** Giải phương trình $\sqrt{x + 3} + \sqrt{6 - x} = 3 + \sqrt{(x + 3)(6 - x)}$.

**Bài 4 (đánh giá).** Giải phương trình $\sqrt{x - 2} + \sqrt{4 - x} = x^2 - 6x + 11$.

**Bài 5 (đối xứng loại I).** Giải hệ phương trình
$$\begin{cases} x + y + xy = 11 \\ x^2y + xy^2 = 30. \end{cases}$$

**Bài 6 (đối xứng loại II).** Giải hệ phương trình
$$\begin{cases} x^2 = 3x + 2y \\ y^2 = 3y + 2x. \end{cases}$$

**Bài 7 (đẳng cấp).** Giải hệ phương trình
$$\begin{cases} x^2 - xy + y^2 = 3 \\ 2x^2 - 3xy + 4y^2 = 6. \end{cases}$$

**Bài 8.** Giải phương trình $2(x^2 + 2) = 5\sqrt{x^3 + 1}$.

**Bài 9 (nhân liên hợp, đề tuyển sinh đại học 2010).** Giải phương trình $\sqrt{3x + 1} - \sqrt{6 - x} + 3x^2 - 14x - 8 = 0$.

**Bài 10.** Giải hệ phương trình
$$\begin{cases} \sqrt{x + y} + \sqrt{x - y} = 4 \\ x^2 + y^2 = 41. \end{cases}$$

**Bài 11.** Giải phương trình $x^3 + 1 = 2\sqrt[3]{2x - 1}$.

**Bài 12.** Giải hệ phương trình
$$\begin{cases} x^3 - 3x = y^3 - 3y \\ x^2 + y^2 = 1. \end{cases}$$

**Bài 13 (HSG).** Giải hệ phương trình
$$\begin{cases} x^2 + y^2 + xy + 1 = 4y \\ y(x + y)^2 = 2x^2 + 7y + 2. \end{cases}$$

---

## III. Lời giải chi tiết

### Bài 1
Ta có $x^2 - x = x(x - 1)$ và $x^2 + 3x + 2 = (x + 1)(x + 2)$. Ghép lại theo cặp:
$$x(x+1)\cdot(x - 1)(x + 2) = (x^2 + x)(x^2 + x - 2) = 24.$$
Đặt $t = x^2 + x$: $t(t - 2) = 24 \iff t^2 - 2t - 24 = 0 \iff t = 6$ hoặc $t = -4$.
- $t = 6$: $x^2 + x - 6 = 0 \iff x = 2$ hoặc $x = -3$.
- $t = -4$: $x^2 + x + 4 = 0$ có $\Delta = 1 - 16 < 0$, vô nghiệm.

**Đáp số:** $x \in \{2; -3\}$.

*Nhận xét:* với tích bốn thừa số bậc nhất, hãy ghép sao cho tổng các "hằng số" trong mỗi cặp bằng nhau ($0 + 1 = -1 + 2$) để hai tam thức có cùng phần $x^2 + x$.

### Bài 2
Vì $x^2 - 3x + 5 = \left(x - \frac32\right)^2 + \frac{11}{4} > 0$ nên phương trình xác định với mọi $x$.
Đặt $t = \sqrt{x^2 - 3x + 5} \ge 0$, khi đó $x^2 - 3x = t^2 - 5$. Phương trình thành
$$t^2 - 5 + t = 7 \iff t^2 + t - 12 = 0 \iff t = 3 \text{ hoặc } t = -4.$$
Loại $t = -4$. Với $t = 3$: $x^2 - 3x + 5 = 9 \iff x^2 - 3x - 4 = 0 \iff x = 4$ hoặc $x = -1$.

**Đáp số:** $x \in \{4; -1\}$.

### Bài 3
Điều kiện: $-3 \le x \le 6$. Đặt $t = \sqrt{x + 3} + \sqrt{6 - x}$.
- $t^2 = 9 + 2\sqrt{(x+3)(6-x)} \ge 9$, nên $t \ge 3$.
- Theo Cauchy-Schwarz, $t^2 \le 2\big((x + 3) + (6 - x)\big) = 18$, nên $t \le 3\sqrt2$.

Khi đó $\sqrt{(x+3)(6-x)} = \frac{t^2 - 9}{2}$. Phương trình thành
$$t = 3 + \frac{t^2 - 9}{2} \iff t^2 - 2t - 3 = 0 \iff t = 3 \text{ hoặc } t = -1.$$
Chỉ có $t = 3$ thỏa $3 \le t \le 3\sqrt2$. Khi đó $\sqrt{(x+3)(6-x)} = 0$, nên $x = -3$ hoặc $x = 6$.

**Đáp số:** $x \in \{-3; 6\}$.

### Bài 4
Điều kiện: $2 \le x \le 4$.
- **Vế trái:** theo Cauchy-Schwarz, $\left(1\cdot\sqrt{x - 2} + 1\cdot\sqrt{4 - x}\right)^2 \le (1 + 1)\big((x - 2) + (4 - x)\big) = 4$, nên $VT \le 2$. Dấu "=" khi $x - 2 = 4 - x$, tức là $x = 3$.
- **Vế phải:** $x^2 - 6x + 11 = (x - 3)^2 + 2 \ge 2$, dấu "=" khi $x = 3$.

Do đó $VT \le 2 \le VP$, phương trình xảy ra khi và chỉ khi hai dấu "=" cùng xảy ra, tức là $x = 3$.

**Đáp số:** $x = 3$.

*Nhận xét:* khi một vế chứa căn (bị chặn trên) và vế kia là tam thức (bị chặn dưới), hãy thử so sánh hai vế với cùng một hằng số.

### Bài 5
Đặt $S = x + y$, $P = xy$. Hệ thành $\begin{cases} S + P = 11 \\ SP = 30. \end{cases}$
Vậy $S, P$ là nghiệm của $X^2 - 11X + 30 = 0$, tức là $\{S; P\} = \{5; 6\}$.
- $S = 5$, $P = 6$: $S^2 - 4P = 1 \ge 0$. $x, y$ là nghiệm của $X^2 - 5X + 6 = 0$, được $\{x; y\} = \{2; 3\}$.
- $S = 6$, $P = 5$: $S^2 - 4P = 16 \ge 0$. $x, y$ là nghiệm của $X^2 - 6X + 5 = 0$, được $\{x; y\} = \{1; 5\}$.

**Đáp số:** $(x; y) \in \{(2; 3), (3; 2), (1; 5), (5; 1)\}$.

### Bài 6
Trừ vế theo vế hai phương trình:
$$x^2 - y^2 = 3(x - y) - 2(x - y) = x - y \iff (x - y)(x + y - 1) = 0.$$
- **$x = y$:** thay vào phương trình đầu: $x^2 = 5x$, nên $x = 0$ hoặc $x = 5$. Được $(0; 0)$, $(5; 5)$.
- **$y = 1 - x$:** thay vào phương trình đầu: $x^2 = 3x + 2 - 2x = x + 2 \iff x^2 - x - 2 = 0 \iff x = 2$ hoặc $x = -1$. Được $(2; -1)$, $(-1; 2)$.

Thử lại thấy cả bốn cặp đều thỏa mãn.

**Đáp số:** $(x; y) \in \{(0; 0), (5; 5), (2; -1), (-1; 2)\}$.

### Bài 7
Nhân phương trình đầu với $2$ rồi trừ phương trình thứ hai (để khử hằng số):
$$2x^2 - 2xy + 2y^2 - 2x^2 + 3xy - 4y^2 = 0 \iff xy - 2y^2 = 0 \iff y(x - 2y) = 0.$$
- **$y = 0$:** hệ thành $x^2 = 3$ và $2x^2 = 6$, nên $x = \pm\sqrt3$.
- **$x = 2y$:** phương trình đầu thành $4y^2 - 2y^2 + y^2 = 3y^2 = 3$, nên $y = \pm 1$, $x = \pm 2$ (cùng dấu). Phương trình thứ hai: $8y^2 - 6y^2 + 4y^2 = 6y^2 = 6$, thỏa mãn.

**Đáp số:** $(x; y) \in \{(\sqrt3; 0), (-\sqrt3; 0), (2; 1), (-2; -1)\}$.

*Nhận xét:* ở bài này phương trình thuần nhất thu được có nhân tử ngay. Trong trường hợp chung, chia cho $y^2$ và đặt $t = \frac xy$.

### Bài 8
Điều kiện: $x^3 + 1 \ge 0 \iff x \ge -1$.
Ta có $x^3 + 1 = (x + 1)(x^2 - x + 1)$ và $x^2 + 2 = (x + 1) + (x^2 - x + 1)$. Đặt $a = \sqrt{x + 1} \ge 0$, $b = \sqrt{x^2 - x + 1} > 0$. Phương trình thành
$$2(a^2 + b^2) = 5ab \iff 2a^2 - 5ab + 2b^2 = 0 \iff (2a - b)(a - 2b) = 0.$$
- **$a = 2b$:** $x + 1 = 4(x^2 - x + 1) \iff 4x^2 - 5x + 3 = 0$, có $\Delta = 25 - 48 < 0$, vô nghiệm.
- **$b = 2a$:** $x^2 - x + 1 = 4(x + 1) \iff x^2 - 5x - 3 = 0 \iff x = \frac{5 \pm \sqrt{37}}{2}$.

Cả hai giá trị đều thỏa $x \ge -1$ (vì $\sqrt{37} < 7$ nên $\frac{5 - \sqrt{37}}{2} > -1$).

**Đáp số:** $x = \frac{5 \pm \sqrt{37}}{2}$.

### Bài 9
Điều kiện: $-\frac13 \le x \le 6$. Thử thấy $x = 5$ là nghiệm ($\sqrt{16} = 4$, $\sqrt{1} = 1$). Tách để mỗi nhóm triệt tiêu tại $x = 5$:
$$\left(\sqrt{3x + 1} - 4\right) + \left(1 - \sqrt{6 - x}\right) + (3x^2 - 14x - 5) = 0.$$
Nhân liên hợp, và $3x^2 - 14x - 5 = (x - 5)(3x + 1)$:
$$\frac{3(x - 5)}{\sqrt{3x+1} + 4} + \frac{x - 5}{1 + \sqrt{6 - x}} + (x - 5)(3x + 1) = 0$$
$$\iff (x - 5)\left[\frac{3}{\sqrt{3x+1} + 4} + \frac{1}{1 + \sqrt{6 - x}} + 3x + 1\right] = 0.$$
Với $-\frac13 \le x \le 6$ thì $3x + 1 \ge 0$, còn hai phân số dương, nên biểu thức trong ngoặc vuông luôn dương. Do đó $x = 5$.

**Đáp số:** $x = 5$.

*Nhận xét:* khi tách, phần đa thức còn lại phải chứa đúng nhân tử $(x - x_0)$: ở đây hằng số $-8$ được tách thành $-4 + 1 - 5$.

### Bài 10
Điều kiện: $x + y \ge 0$, $x - y \ge 0$. Đặt $u = \sqrt{x + y} \ge 0$, $v = \sqrt{x - y} \ge 0$. Khi đó $x = \frac{u^2 + v^2}{2}$, $y = \frac{u^2 - v^2}{2}$ và
$$x^2 + y^2 = \frac{(u^2 + v^2)^2 + (u^2 - v^2)^2}{4} = \frac{u^4 + v^4}{2}.$$
Hệ thành $u + v = 4$ và $u^4 + v^4 = 82$. Đặt $p = uv$, ta có $0 \le p \le \frac{(u + v)^2}{4} = 4$ và
$$u^2 + v^2 = 16 - 2p, \qquad u^4 + v^4 = (16 - 2p)^2 - 2p^2 = 2p^2 - 64p + 256.$$
Phương trình $2p^2 - 64p + 256 = 82 \iff p^2 - 32p + 87 = 0 \iff p = 3$ hoặc $p = 29$. Chỉ nhận $p = 3$.
Khi đó $u, v$ là nghiệm của $X^2 - 4X + 3 = 0$, nên $\{u; v\} = \{1; 3\}$.
- $u = 3$, $v = 1$: $x + y = 9$, $x - y = 1$, được $(5; 4)$.
- $u = 1$, $v = 3$: $x + y = 1$, $x - y = 9$, được $(5; -4)$.

**Đáp số:** $(x; y) \in \{(5; 4), (5; -4)\}$.

### Bài 11
Đặt $y = \sqrt[3]{2x - 1}$, tức là $y^3 = 2x - 1$. Phương trình đã cho là $x^3 + 1 = 2y$. Ta có hệ đối xứng loại II:
$$\begin{cases} x^3 + 1 = 2y \\ y^3 + 1 = 2x. \end{cases}$$
Trừ vế theo vế: $x^3 - y^3 = -2(x - y) \iff (x - y)(x^2 + xy + y^2 + 2) = 0$.
Vì $x^2 + xy + y^2 + 2 = \left(x + \frac y2\right)^2 + \frac{3y^2}{4} + 2 > 0$ nên $x = y$. Khi đó
$$x^3 - 2x + 1 = 0 \iff (x - 1)(x^2 + x - 1) = 0 \iff x = 1 \text{ hoặc } x = \frac{-1 \pm \sqrt5}{2}.$$
(Phép đặt $y = \sqrt[3]{2x-1}$ không cần điều kiện, nên không phải thử lại.)

**Đáp số:** $x \in \left\{1; \frac{-1 + \sqrt5}{2}; \frac{-1 - \sqrt5}{2}\right\}$.

### Bài 12
Phương trình đầu tương đương với
$$(x^3 - y^3) - 3(x - y) = 0 \iff (x - y)(x^2 + xy + y^2 - 3) = 0.$$
Từ $x^2 + y^2 = 1$ ta có $\lvert xy\rvert \le \frac{x^2 + y^2}{2} = \frac12$, nên
$$x^2 + xy + y^2 - 3 = xy - 2 \le \frac12 - 2 < 0.$$
Do đó $x = y$. Thay vào phương trình thứ hai: $2x^2 = 1$, $x = \pm\frac{\sqrt2}{2}$.

**Đáp số:** $(x; y) \in \left\{\left(\frac{\sqrt2}{2}; \frac{\sqrt2}{2}\right), \left(-\frac{\sqrt2}{2}; -\frac{\sqrt2}{2}\right)\right\}$.

*Nhận xét:* phương trình đầu có dạng $f(x) = f(y)$ với $f(t) = t^3 - 3t$. Hàm này không đơn điệu trên $\mathbb R$, nhưng phương trình thứ hai giới hạn $x, y$ trong miền mà nhân tử thứ hai không thể bằng $0$.

### Bài 13
Nếu $y = 0$, phương trình đầu thành $x^2 + 1 = 0$, vô nghiệm. Vậy $y \ne 0$. Chia phương trình đầu cho $y$, phương trình thứ hai cho $y$:
$$\begin{cases} \dfrac{x^2 + 1}{y} + (x + y) = 4 \\ (x + y)^2 - 2\cdot\dfrac{x^2 + 1}{y} = 7. \end{cases}$$
Đặt $u = \frac{x^2 + 1}{y}$, $v = x + y$: $u = 4 - v$ và $v^2 - 2(4 - v) = 7 \iff v^2 + 2v - 15 = 0 \iff v = 3$ hoặc $v = -5$.
- **$v = 3$, $u = 1$:** $x^2 + 1 = y$ và $x + y = 3$, nên $x^2 + x - 2 = 0$, $x = 1$ hoặc $x = -2$. Được $(1; 2)$, $(-2; 5)$.
- **$v = -5$, $u = 9$:** $x^2 + 1 = 9y$ và $y = -5 - x$, nên $x^2 + 9x + 46 = 0$, có $\Delta = 81 - 184 < 0$, vô nghiệm.

**Đáp số:** $(x; y) \in \{(1; 2), (-2; 5)\}$.

*Nhận xét:* dấu hiệu để chia cho $y$: phương trình đầu có $x^2 + 1$ đứng riêng và các hạng tử còn lại đều chứa $y$; phương trình thứ hai có $2x^2 + 2 = 2(x^2 + 1)$.

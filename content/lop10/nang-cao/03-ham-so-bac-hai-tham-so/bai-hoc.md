# Chủ đề 3. Hàm số bậc hai và bài toán tham số

> Hàm số bậc hai là công cụ trung tâm của đại số lớp 10: tìm giá trị lớn nhất, nhỏ nhất trên một đoạn, biện luận số nghiệm, so sánh nghiệm với một số. Đề HSG thường cho tham số $m$ và đòi hỏi chia trường hợp chính xác.

## I. Kiến thức cần nắm

### 1. Hàm số bậc hai và bảng biến thiên
Hàm số $y = f(x) = ax^2 + bx + c$ ($a \ne 0$). **Đưa về dạng chính tắc:**
$$f(x) = a\left(x + \frac{b}{2a}\right)^2 - \frac{\Delta}{4a}, \qquad \Delta = b^2 - 4ac.$$
- Đồ thị là parabol có đỉnh $I\left(-\frac{b}{2a}; -\frac{\Delta}{4a}\right)$, trục đối xứng $x = -\frac{b}{2a}$.
- Nếu $a > 0$: hàm số nghịch biến trên $\left(-\infty; -\frac{b}{2a}\right)$, đồng biến trên $\left(-\frac{b}{2a}; +\infty\right)$, giá trị nhỏ nhất trên $\mathbb R$ là $-\frac{\Delta}{4a}$.
- Nếu $a < 0$: ngược lại, giá trị lớn nhất trên $\mathbb R$ là $-\frac{\Delta}{4a}$.

*Vì sao (với $a > 0$):* đặt $x_0 = -\frac{b}{2a}$. Với $x_0 \le x_1 < x_2$ thì $0 \le x_1 - x_0 < x_2 - x_0$, nên $(x_1 - x_0)^2 < (x_2 - x_0)^2$, tức là $f(x_1) < f(x_2)$.

### 2. Giá trị lớn nhất, nhỏ nhất trên một đoạn
Xét $f(x) = ax^2 + bx + c$ với $a > 0$ trên đoạn $[\alpha; \beta]$, đỉnh $x_0 = -\frac{b}{2a}$.
- **Giá trị lớn nhất** luôn đạt tại một đầu mút: $\max = \max\{f(\alpha), f(\beta)\}$, cụ thể là đầu mút **xa đỉnh hơn**.
- **Giá trị nhỏ nhất:**
  - nếu $x_0 \in [\alpha; \beta]$ thì $\min = f(x_0)$;
  - nếu $x_0 < \alpha$ thì $\min = f(\alpha)$;
  - nếu $x_0 > \beta$ thì $\min = f(\beta)$.

Khi có tham số, **chia trường hợp theo vị trí của đỉnh** so với đoạn, giải trong từng trường hợp rồi **đối chiếu** với điều kiện của trường hợp đó.

*Ví dụ:* $f(x) = x^2 - 2mx$ trên $[0; 1]$. Nếu $m \le 0$ thì $\min = f(0) = 0$; nếu $0 < m < 1$ thì $\min = f(m) = -m^2$; nếu $m \ge 1$ thì $\min = f(1) = 1 - 2m$.

### 3. Định lý Viète và so sánh nghiệm với một số
Nếu $ax^2 + bx + c = 0$ có hai nghiệm $x_1, x_2$ thì $S = x_1 + x_2 = -\frac ba$, $P = x_1x_2 = \frac ca$.

**So sánh nghiệm với số $\alpha$:** đặt $t = x - \alpha$, đưa về so sánh với $0$:
- Hai nghiệm phân biệt **cùng lớn hơn** $\alpha$ $\iff \Delta > 0$, $(x_1 - \alpha) + (x_2 - \alpha) > 0$, $(x_1 - \alpha)(x_2 - \alpha) > 0$.
- Hai nghiệm phân biệt **cùng nhỏ hơn** $\alpha$ $\iff \Delta > 0$, $(x_1 - \alpha) + (x_2 - \alpha) < 0$, $(x_1 - \alpha)(x_2 - \alpha) > 0$.
- $x_1 < \alpha < x_2$ $\iff (x_1 - \alpha)(x_2 - \alpha) < 0 \iff a\cdot f(\alpha) < 0$.

*Vì sao điều kiện cuối không cần $\Delta > 0$:* $a f(\alpha) = a^2(\alpha - x_1)(\alpha - x_2)$ khi có nghiệm; ngược lại, nếu $af(\alpha) < 0$ thì $f(\alpha)$ trái dấu với $a$, trong khi $f(x)$ cùng dấu với $a$ khi $\lvert x\rvert$ đủ lớn, nên parabol cắt trục hoành ở hai phía của $\alpha$.

Ta có $(x_1 - \alpha)(x_2 - \alpha) = P - \alpha S + \alpha^2$ và $(x_1 - \alpha) + (x_2 - \alpha) = S - 2\alpha$.

### 4. Biện luận số nghiệm bằng đồ thị
Phương trình $g(x) = m$ có số nghiệm bằng **số giao điểm** của đồ thị $y = g(x)$ với đường thẳng nằm ngang $y = m$. Các bước:
1. Đưa phương trình về dạng $g(x) = m$ (cô lập tham số).
2. Lập bảng biến thiên (hoặc vẽ) $y = g(x)$ trên miền xét.
3. Đọc số giao điểm theo từng khoảng giá trị của $m$, chú ý các giá trị **đặc biệt** (tung độ đỉnh, giá trị tại đầu mút).

**Đồ thị chứa giá trị tuyệt đối:**
- $y = \lvert f(x)\rvert$: giữ phần đồ thị phía trên trục hoành, **lấy đối xứng** phần phía dưới qua trục hoành.
- $y = f(\lvert x\rvert)$: giữ phần bên phải trục tung, lấy đối xứng sang trái.

### 5. Đặt ẩn phụ và quan hệ số nghiệm
Khi đặt $t = u(x)$, cần biết **mỗi giá trị $t$ cho bao nhiêu giá trị $x$**.

*Ví dụ:* $t = x^2 - 2x = (x - 1)^2 - 1$. Với $t > -1$ có đúng hai giá trị $x = 1 \pm \sqrt{t + 1}$; với $t = -1$ có một giá trị $x = 1$; với $t < -1$ không có $x$.

Sau đó biện luận số nghiệm $t$ (trong miền giá trị của $t$) rồi "dịch" sang số nghiệm $x$.

### 6. Bất phương trình đúng với mọi $x$ và cực trị hai biến
- $ax^2 + bx + c > 0$ với mọi $x$ $\iff \begin{cases} a > 0 \\ \Delta < 0 \end{cases}$ (khi $a \ne 0$; trường hợp $a = 0$ xét riêng).
- Biểu thức bậc hai hai biến $P(x, y)$: coi là tam thức theo $x$, **thêm bớt để tạo bình phương**, phần còn lại là tam thức theo $y$.
- Bài toán $f(x, y)$ với điều kiện đối xứng: đặt $t = xy$ hoặc $t = x + y$, tìm **miền giá trị của $t$** rồi đưa về hàm bậc hai của $t$ trên một đoạn.

### 7. Sai lầm hay gặp
- Giải được $m$ trong một trường hợp nhưng **quên đối chiếu** với điều kiện của trường hợp đó.
- Đòi "hai nghiệm phân biệt" nhưng chỉ đặt $\Delta \ge 0$.
- Đặt ẩn phụ mà không tìm điều kiện của ẩn phụ, hoặc nhầm số nghiệm $x$ ứng với mỗi $t$.
- Quên trường hợp hệ số $a = 0$ khi hệ số của $x^2$ chứa tham số.

---

## II. Bài tập vận dụng

**Bài 1.** Tìm giá trị lớn nhất và giá trị nhỏ nhất của $y = x^2 - 4x + 1$ trên đoạn $[-1; 3]$.

**Bài 2.** Tìm $m$ để hàm số $y = x^2 - 2(m + 1)x + 3$ đồng biến trên khoảng $(2; +\infty)$.

**Bài 3.** Tìm $m$ để phương trình $x^2 - 2(m - 1)x + m^2 - 3m = 0$ có hai nghiệm phân biệt $x_1, x_2$ thỏa mãn $x_1^2 + x_2^2 = 8$.

**Bài 4.** Tìm $m$ để phương trình $x^2 - 2mx + m + 2 = 0$ có hai nghiệm phân biệt đều lớn hơn $1$.

**Bài 5.** Biện luận theo $m$ số nghiệm của phương trình $\lvert x^2 - 4x + 3\rvert = m$.

**Bài 6.** Tìm $m$ để phương trình $x^2 - 4x + 5 - m = 0$ có hai nghiệm phân biệt thuộc đoạn $[0; 3]$.

**Bài 7.** Tìm giá trị nhỏ nhất của $P = x^2 + 2y^2 - 2xy + 2x - 8y + 20$ với $x, y$ là các số thực.

**Bài 8.** Tìm $m$ để giá trị nhỏ nhất của hàm số $f(x) = 4x^2 - 4mx + m^2 - 2m + 2$ trên đoạn $[0; 2]$ bằng $3$.

**Bài 9.** Biện luận theo $m$ số nghiệm của phương trình
$$(x^2 - 2x)^2 - 2(x^2 - 2x) + m = 0.$$

**Bài 10.** Tìm $m$ để bất phương trình $x^2 - 2mx + 2\lvert x - m\rvert + 2 \ge 0$ đúng với mọi số thực $x$.

**Bài 11.** Cho các số thực $x, y$ thỏa mãn $x^2 + y^2 - xy = 1$. Tìm giá trị lớn nhất và giá trị nhỏ nhất của $P = x^4 + y^4 - x^2y^2$.

**Bài 12 (HSG).** Với mỗi số thực $m$, gọi $M(m)$ là giá trị lớn nhất của $\lvert x^2 - 2x + m\rvert$ trên đoạn $[0; 3]$. Tìm $m$ để $M(m)$ nhỏ nhất.

**Bài 13 (HSG).** Cho $f(x) = ax^2 + bx + c$ thỏa mãn $\lvert f(x)\rvert \le 1$ với mọi $x \in [-1; 1]$. Chứng minh $\lvert a\rvert + \lvert b\rvert + \lvert c\rvert \le 3$ và chỉ ra một trường hợp có dấu "=".

---

## III. Lời giải chi tiết

### Bài 1
Hệ số $a = 1 > 0$, đỉnh $x_0 = 2 \in [-1; 3]$.
- Giá trị nhỏ nhất: $y(2) = 4 - 8 + 1 = -3$.
- Giá trị lớn nhất đạt tại đầu mút xa đỉnh hơn: $y(-1) = 1 + 4 + 1 = 6$, $y(3) = 9 - 12 + 1 = -2$.

**Đáp số:** $\max = 6$ tại $x = -1$; $\min = -3$ tại $x = 2$.

### Bài 2
Hệ số $a = 1 > 0$, hàm số đồng biến trên $(m + 1; +\infty)$. Hàm số đồng biến trên $(2; +\infty)$ khi và chỉ khi $(2; +\infty) \subset (m + 1; +\infty)$, tức là $m + 1 \le 2$.

**Đáp số:** $m \le 1$.

### Bài 3
$\Delta' = (m - 1)^2 - (m^2 - 3m) = m + 1$. Phương trình có hai nghiệm phân biệt $\iff m > -1$.
Theo Viète: $S = 2(m - 1)$, $P = m^2 - 3m$. Khi đó
$$x_1^2 + x_2^2 = S^2 - 2P = 4(m - 1)^2 - 2(m^2 - 3m) = 2m^2 - 2m + 4.$$
Giải $2m^2 - 2m + 4 = 8 \iff m^2 - m - 2 = 0 \iff m = 2$ hoặc $m = -1$.
Đối chiếu $m > -1$: loại $m = -1$ (khi đó phương trình có nghiệm kép).

**Đáp số:** $m = 2$.

### Bài 4
Gọi $x_1, x_2$ là hai nghiệm. Yêu cầu tương đương với
$$\begin{cases} \Delta' = m^2 - m - 2 > 0 \\ (x_1 - 1) + (x_2 - 1) = 2m - 2 > 0 \\ (x_1 - 1)(x_2 - 1) = P - S + 1 = (m + 2) - 2m + 1 = 3 - m > 0. \end{cases}$$
- $m^2 - m - 2 > 0 \iff m < -1$ hoặc $m > 2$;
- $m > 1$;
- $m < 3$.

Giao lại: $2 < m < 3$.

**Đáp số:** $2 < m < 3$.

*Nhận xét:* không được chỉ dùng $S > 2$ và $P > 1$; ví dụ $x_1 = 0{,}5$, $x_2 = 4$ có $S > 2$, $P > 1$ nhưng $x_1 < 1$.

### Bài 5
Số nghiệm là số giao điểm của $y = \lvert x^2 - 4x + 3\rvert$ với đường thẳng $y = m$.
Parabol $y = x^2 - 4x + 3$ cắt trục hoành tại $x = 1$, $x = 3$, đỉnh $(2; -1)$. Lấy đối xứng phần nằm dưới trục hoành (với $1 < x < 3$) lên trên, ta được đồ thị gồm hai nhánh parabol đi lên hai phía và một "vòm" trên $[1; 3]$ có đỉnh $(2; 1)$.

Đọc đồ thị:

| $m$ | $m < 0$ | $m = 0$ | $0 < m < 1$ | $m = 1$ | $m > 1$ |
|---|---|---|---|---|---|
| Số nghiệm | $0$ | $2$ | $4$ | $3$ | $2$ |

Kiểm tra $m = 1$: $x^2 - 4x + 3 = 1$ cho $x = 2 \pm \sqrt2$; $x^2 - 4x + 3 = -1$ cho $x = 2$. Đúng 3 nghiệm.

### Bài 6
Phương trình $\iff x^2 - 4x + 5 = m$. Xét $g(x) = x^2 - 4x + 5$ trên $[0; 3]$: đỉnh $x = 2$, $g(2) = 1$; $g(0) = 5$; $g(3) = 2$. Hàm số nghịch biến trên $[0; 2]$ (từ $5$ xuống $1$) và đồng biến trên $[2; 3]$ (từ $1$ lên $2$).

Đường thẳng $y = m$ cắt đồ thị trên $[0; 3]$ tại hai điểm phân biệt khi và chỉ khi nó cắt cả hai nhánh và không đi qua đỉnh: $1 < m \le 2$.

**Đáp số:** $1 < m \le 2$.

### Bài 7
Coi $P$ là tam thức bậc hai theo $x$:
$$P = x^2 - 2(y - 1)x + 2y^2 - 8y + 20 = (x - y + 1)^2 - (y - 1)^2 + 2y^2 - 8y + 20.$$
Phần còn lại: $-(y^2 - 2y + 1) + 2y^2 - 8y + 20 = y^2 - 6y + 19 = (y - 3)^2 + 10$. Vậy
$$P = (x - y + 1)^2 + (y - 3)^2 + 10 \ge 10.$$
Dấu "=" khi $y = 3$ và $x = y - 1 = 2$.

**Đáp số:** $P_{\min} = 10$ tại $(x; y) = (2; 3)$.

### Bài 8
Đỉnh của parabol: $x_0 = \frac m2$.
- **Trường hợp $\frac m2 \le 0$, tức là $m \le 0$:** $\min = f(0) = m^2 - 2m + 2$. Giải $m^2 - 2m + 2 = 3 \iff m = 1 \pm \sqrt2$. Chỉ nhận $m = 1 - \sqrt2$ (vì $1 - \sqrt2 < 0$).
- **Trường hợp $0 < \frac m2 < 2$, tức là $0 < m < 4$:** $\min = f\left(\frac m2\right) = -2m + 2$. Giải $-2m + 2 = 3 \iff m = -\frac12$, không thỏa $0 < m < 4$.
- **Trường hợp $\frac m2 \ge 2$, tức là $m \ge 4$:** $\min = f(2) = m^2 - 10m + 18$. Giải $m^2 - 10m + 15 = 0 \iff m = 5 \pm \sqrt{10}$. Vì $5 - \sqrt{10} < 4 < 5 + \sqrt{10}$, chỉ nhận $m = 5 + \sqrt{10}$.

**Đáp số:** $m = 1 - \sqrt2$ hoặc $m = 5 + \sqrt{10}$.

### Bài 9
Đặt $t = x^2 - 2x = (x - 1)^2 - 1$, điều kiện $t \ge -1$. Mỗi $t > -1$ cho đúng **hai** giá trị $x$, $t = -1$ cho **một** giá trị $x = 1$.
Phương trình thành $t^2 - 2t + m = 0 \iff m = -t^2 + 2t = h(t)$, với $t \ge -1$.

Hàm $h(t) = -(t - 1)^2 + 1$ đồng biến trên $[-1; 1]$ từ $h(-1) = -3$ lên $h(1) = 1$, rồi nghịch biến trên $[1; +\infty)$ từ $1$ xuống $-\infty$. Với mỗi $m$, các nghiệm $t$ là $t = 1 \pm \sqrt{1 - m}$ (khi $m \le 1$).
- **$m > 1$:** không có $t$, phương trình vô nghiệm.
- **$m = 1$:** $t = 1 > -1$, cho $2$ nghiệm $x = 1 \pm \sqrt2$.
- **$-3 < m < 1$:** $0 < \sqrt{1 - m} < 2$, nên $t_1 = 1 - \sqrt{1-m} \in (-1; 1)$ và $t_2 = 1 + \sqrt{1-m} > 1$. Cả hai đều lớn hơn $-1$: $4$ nghiệm.
- **$m = -3$:** $t_1 = -1$ (cho $x = 1$), $t_2 = 3$ (cho $x = -1$, $x = 3$): $3$ nghiệm.
- **$m < -3$:** $t_1 < -1$ bị loại, $t_2 > 3$ cho $2$ nghiệm.

**Kết luận:** $m > 1$: vô nghiệm; $m = 1$ hoặc $m < -3$: $2$ nghiệm; $m = -3$: $3$ nghiệm; $-3 < m < 1$: $4$ nghiệm.

### Bài 10
Đặt $t = \lvert x - m\rvert \ge 0$. Ta có $x^2 - 2mx = (x - m)^2 - m^2 = t^2 - m^2$. Bất phương trình thành
$$g(t) = t^2 + 2t + 2 - m^2 \ge 0.$$
Khi $x$ chạy trên $\mathbb R$, $t$ nhận mọi giá trị trong $[0; +\infty)$. Vậy yêu cầu tương đương với $g(t) \ge 0$ với mọi $t \ge 0$.
Trên $[0; +\infty)$, $g$ đồng biến (đỉnh tại $t = -1 < 0$), nên $\min g = g(0) = 2 - m^2$. Điều kiện: $2 - m^2 \ge 0 \iff -\sqrt2 \le m \le \sqrt2$.

**Đáp số:** $-\sqrt2 \le m \le \sqrt2$.

### Bài 11
Đặt $t = xy$. Từ điều kiện, $x^2 + y^2 = 1 + t$.
**Tìm miền giá trị của $t$.** Ta có $(x + y)^2 = 1 + 3t \ge 0$ và $(x - y)^2 = 1 - t \ge 0$, nên $-\frac13 \le t \le 1$. Ngược lại, với mỗi $t$ trong đoạn này, chọn $x + y = \sqrt{1 + 3t}$, $x - y = \sqrt{1 - t}$ thì được $x, y$ thỏa mãn. Vậy $t$ nhận mọi giá trị trong $\left[-\frac13; 1\right]$.

**Biểu diễn $P$:**
$$P = (x^2 + y^2)^2 - 3x^2y^2 = (1 + t)^2 - 3t^2 = -2t^2 + 2t + 1.$$
Đây là hàm bậc hai với $a = -2 < 0$, đỉnh $t = \frac12 \in \left[-\frac13; 1\right]$.
- $\max P = P\left(\frac12\right) = -\frac12 + 1 + 1 = \frac32$.
- $\min P = \min\left\{P\left(-\frac13\right), P(1)\right\} = \min\left\{\frac19; 1\right\} = \frac19$.

Đạt $\max$ khi $xy = \frac12$, $x^2 + y^2 = \frac32$, chẳng hạn $x = \frac{\sqrt5 + 1}{2\sqrt2}$, $y = \frac{\sqrt5 - 1}{2\sqrt2}$. Đạt $\min$ khi $xy = -\frac13$, $x = -y$, tức là $x = \frac{1}{\sqrt3}$, $y = -\frac{1}{\sqrt3}$.

**Đáp số:** $\max P = \frac32$, $\min P = \frac19$.

### Bài 12
Đặt $u = x^2 - 2x = (x - 1)^2 - 1$. Khi $x \in [0; 3]$, $u$ nhận mọi giá trị trong $[-1; 3]$ (nhỏ nhất $-1$ tại $x = 1$, lớn nhất $3$ tại $x = 3$). Vì vậy
$$M(m) = \max_{u \in [-1; 3]}\lvert u + m\rvert = \max\{\lvert m - 1\rvert, \lvert m + 3\rvert\}$$
(hàm bậc nhất $u + m$ đạt giá trị tuyệt đối lớn nhất tại một đầu mút). Ta có
$$2M(m) \ge \lvert m + 3\rvert + \lvert m - 1\rvert \ge \lvert (m + 3) - (m - 1)\rvert = 4,$$
nên $M(m) \ge 2$. Dấu "=" khi $\lvert m + 3\rvert = \lvert m - 1\rvert = 2$ và $(m+3)(1-m) \ge 0$, tức là $m = -1$. Kiểm tra: $M(-1) = \max\{2; 2\} = 2$.

**Đáp số:** $m = -1$, khi đó $M$ nhỏ nhất bằng $2$.

*Nhận xét:* đây là ý tưởng "dịch đồ thị lên xuống để cân bằng": giá trị lớn nhất của $\lvert f\rvert$ nhỏ nhất khi đường thẳng $y = -m$ nằm chính giữa giá trị lớn nhất và nhỏ nhất của $u$.

### Bài 13
Ta có $f(0) = c$, $f(1) = a + b + c$, $f(-1) = a - b + c$. Theo giả thiết, ba giá trị này đều có giá trị tuyệt đối không vượt quá $1$.

**Bổ đề:** $\lvert a\rvert + \lvert b\rvert = \max\{\lvert a + b\rvert, \lvert a - b\rvert\}$. *Vì sao:* nếu $a, b$ cùng dấu thì $\lvert a\rvert + \lvert b\rvert = \lvert a + b\rvert \ge \lvert a - b\rvert$; nếu trái dấu thì $\lvert a\rvert + \lvert b\rvert = \lvert a - b\rvert \ge \lvert a + b\rvert$.

Mà $a + b = f(1) - c$ và $a - b = f(-1) - c$, nên
$$\lvert a + b\rvert \le \lvert f(1)\rvert + \lvert c\rvert \le 1 + \lvert c\rvert, \qquad \lvert a - b\rvert \le 1 + \lvert c\rvert.$$
Do đó $\lvert a\rvert + \lvert b\rvert + \lvert c\rvert \le 1 + 2\lvert c\rvert = 1 + 2\lvert f(0)\rvert \le 3$.

**Dấu "=":** $f(x) = 2x^2 - 1$. Với $x \in [-1; 1]$ thì $0 \le x^2 \le 1$ nên $-1 \le 2x^2 - 1 \le 1$, và $\lvert 2\rvert + \lvert 0\rvert + \lvert -1\rvert = 3$.

*Nhận xét:* kỹ thuật chính là biểu diễn hệ số qua giá trị của hàm tại vài điểm (ở đây $-1, 0, 1$), rồi dùng giả thiết về các giá trị đó.

# Chủ đề 3. Bất đẳng thức và cực trị bằng phương pháp hàm số

> Đạo hàm biến bài bất đẳng thức thành bài khảo sát hàm số: khi đưa được về **một biến**, ta chỉ cần lập bảng biến thiên. Trong đề HSG lớp 12, câu bất đẳng thức hoặc tìm giá trị lớn nhất, nhỏ nhất thường được giải bằng cách đổi biến, dồn biến rồi khảo sát hàm.

## I. Kiến thức cần nắm

> **Ý tưởng xuyên suốt:** muốn chứng minh $f(x) \ge 0$ trên $D$, hãy tìm giá trị nhỏ nhất của $f$ trên $D$. Với nhiều biến, hãy **giảm số biến**: đổi biến theo tổng, tích; cố định các biến khác; hoặc đánh giá để còn một biến.

### 1. Chứng minh bất đẳng thức một biến
**Quy trình:** đặt $f(x) = VT - VP$, tính $f'(x)$, lập bảng biến thiên, chỉ ra $\min f \ge 0$.

**Kỹ thuật "đạo hàm nhiều lần":** nếu dấu của $f'$ chưa rõ, xét tiếp $f''$. Thường gặp: $f(a) = 0$ và $f' \ge 0$ trên $[a; +\infty)$ thì $f(x) \ge 0$ với $x \ge a$.

**Các bất đẳng thức kinh điển (nên thuộc cả cách chứng minh):**
- $e^x \ge 1 + x$ với mọi $x$, dấu "=" khi $x = 0$.
- $\ln x \le x - 1$ với mọi $x > 0$; tương đương $\ln(1 + u) \le u$ với $u > -1$.
- $\frac{u}{1 + u} \le \ln(1 + u) \le u$ với $u > -1$.
- $\sin x \le x$ với $x \ge 0$; $\cos x \ge 1 - \frac{x^2}{2}$ với mọi $x$.

**Ví dụ mẫu.** Chứng minh $e^x \ge 1 + x$. Xét $f(x) = e^x - 1 - x$, $f'(x) = e^x - 1$ đổi dấu từ âm sang dương tại $x = 0$, nên $\min f = f(0) = 0$.

### 2. Đổi biến về một biến
- **Hai biến đối xứng:** đặt $S = x + y$, $P = xy$. Điều kiện để tồn tại $x, y$ thực là $S^2 \ge 4P$; thêm $x, y \ge 0$ thì $S \ge 0$, $P \ge 0$.
  - Nếu $x^2 + y^2 = k$ thì $t = x + y \in [-\sqrt{2k}; \sqrt{2k}]$ và $xy = \frac{t^2 - k}{2}$.
  - Nếu $x + y = s$ ($x, y \ge 0$) thì $t = xy \in \left[0; \frac{s^2}{4}\right]$.
- **Lượng giác:** $t = \sin x + \cos x \in [-\sqrt2; \sqrt2]$, $t = \sin 2x \in [-1; 1]$, $t = \cos x$, ...
- **Bất đẳng thức thuần nhất hai biến:** chia cho lũy thừa của một biến, đặt $t = \frac xy$.

**Quan trọng nhất:** tìm **đúng** miền giá trị của biến mới. Sai miền thì sai đáp số.

**Ví dụ mẫu.** Với $x + y = 2$, tìm GTNN của $x^3 + y^3$: $x^3 + y^3 = 8 - 6xy$, mà $xy$ có thể nhỏ tùy ý ($x = 2 + a$, $y = -a$), nên không có GTNN. Nếu thêm $x, y \ge 0$ thì $xy \in [0; 1]$ và $x^3 + y^3 \in [2; 8]$.

### 3. Dồn biến và cố định biến
- **Cố định biến:** với biểu thức nhiều biến, coi một biến là ẩn, các biến khác là tham số; khảo sát theo ẩn đó (thường là hàm bậc nhất hoặc bậc hai, đạt cực trị ở biên).
- **Dồn biến:** chứng minh $P(a, b, c) \ge P\left(a, \frac{b+c}{2}, \frac{b+c}{2}\right)$ (hoặc một đánh giá tương tự) để đưa về hai biến bằng nhau, rồi khảo sát hàm một biến.
- **Sắp thứ tự:** do tính đối xứng, có thể giả sử $a = \min\{a, b, c\}$, từ đó có thêm điều kiện như $a \le \frac{a + b + c}{3}$.

### 4. Phương pháp tiếp tuyến
Cần chứng minh $f(a) + f(b) + f(c) \ge 3f(x_0)$ khi $a + b + c = 3x_0$. Viết tiếp tuyến tại điểm rơi:
$$f(x) \ge f(x_0) + f'(x_0)(x - x_0) \quad\text{với mọi } x \text{ trong miền xét}.$$
Cộng ba bất đẳng thức, phần $f'(x_0)(a + b + c - 3x_0)$ triệt tiêu. Hiệu $f(x) - f(x_0) - f'(x_0)(x - x_0)$ luôn có nhân tử $(x - x_0)^2$; phần còn lại phải không âm **trên miền xét**.

### 5. Các hàm "so sánh" thường dùng
- $h(x) = \frac{\ln x}{x}$ đồng biến trên $(0; e]$, nghịch biến trên $[e; +\infty)$. Dùng để so sánh $a^b$ và $b^a$: với $e \le a < b$ thì $a^b > b^a$.
- Điều kiện cần tại điểm cực trị: nếu $f(x) \ge f(x_0)$ với mọi $x$ và $x_0$ là điểm trong, $f$ có đạo hàm tại $x_0$ thì $f'(x_0) = 0$ (định lý Fermat). Dùng để tìm tham số trong bài "bất đẳng thức đúng với mọi $x$".

### 6. Sai lầm hay gặp
- Sai miền giá trị của biến mới (quên $S^2 \ge 4P$, quên điều kiện không âm).
- Dùng tiếp tuyến khi phần còn lại đổi dấu trong miền xét.
- Kết luận GTLN, GTNN mà không chỉ ra giá trị các biến tại đó.
- Đánh giá nhiều bước mà dấu "=" không xảy ra đồng thời.

---

## II. Bài tập vận dụng

**Bài 1.** Chứng minh rằng với mọi $x \ge 0$:
a) $e^x \ge 1 + x + \dfrac{x^2}{2}$;
b) $\ln(1 + x) \ge x - \dfrac{x^2}{2}$.

**Bài 2.** Chứng minh rằng:
a) $\cos x \ge 1 - \dfrac{x^2}{2}$ với mọi $x$;
b) $\sin x \ge x - \dfrac{x^3}{6}$ với mọi $x \ge 0$.

**Bài 3.** Chứng minh với mọi $x > 0$: $\left(1 + \dfrac1x\right)^x < e < \left(1 + \dfrac1x\right)^{x+1}$.

**Bài 4.** So sánh:
a) $e^\pi$ và $\pi^e$;
b) $2026^{2027}$ và $2027^{2026}$.

**Bài 5.** Tìm tất cả các số $a > 0$ sao cho $a^x \ge x + 1$ với mọi số thực $x$.

**Bài 6 (Đề tuyển sinh ĐH khối B 2008).** Cho $x, y$ thực thỏa mãn $x^2 + y^2 = 2$. Tìm giá trị lớn nhất và nhỏ nhất của $P = 2(x^3 + y^3) - 3xy$.

**Bài 7 (Đề tuyển sinh ĐH khối D 2009).** Cho $x, y \ge 0$ và $x + y = 1$. Tìm giá trị lớn nhất và nhỏ nhất của
$$S = (4x^2 + 3y)(4y^2 + 3x) + 25xy.$$

**Bài 8 (trung bình lôgarit).** Cho $0 < a < b$. Chứng minh
$$\sqrt{ab} < \frac{b - a}{\ln b - \ln a} < \frac{a + b}{2}.$$

**Bài 9 (Đề tuyển sinh ĐH khối B 2009).** Cho $x, y$ thực thỏa mãn $(x + y)^3 + 4xy \ge 2$. Tìm giá trị nhỏ nhất của
$$A = 3(x^4 + y^4 + x^2y^2) - 2(x^2 + y^2) + 1.$$

**Bài 10.** Cho $a, b, c$ thực thỏa mãn $a + b + c = 0$ và $a^2 + b^2 + c^2 = 6$. Tìm giá trị lớn nhất và nhỏ nhất của $P = a^3 + b^3 + c^3$.

**Bài 11 (tiếp tuyến).** Cho $a, b, c > 0$ và $a + b + c = 3$. Chứng minh
$$\frac{1}{a^2 + b + c} + \frac{1}{b^2 + c + a} + \frac{1}{c^2 + a + b} \le 1.$$

**Bài 12 (IMO 1984).** Cho $a, b, c \ge 0$ và $a + b + c = 1$. Chứng minh $ab + bc + ca - 2abc \le \dfrac{7}{27}$.

**Bài 13 (Đề tuyển sinh ĐH khối A 2011).** Cho $x, y, z \in [1; 4]$ và $x \ge y$, $x \ge z$. Tìm giá trị nhỏ nhất của
$$P = \frac{x}{2x + 3y} + \frac{y}{y + z} + \frac{z}{z + x}.$$

---

## III. Lời giải chi tiết

### Bài 1
a) Xét $f(x) = e^x - 1 - x - \frac{x^2}{2}$ trên $[0; +\infty)$. Có $f'(x) = e^x - 1 - x \ge 0$ (bất đẳng thức $e^x \ge 1 + x$ ở mục I.1). Vậy $f$ đồng biến, $f(x) \ge f(0) = 0$.

b) Xét $g(x) = \ln(1 + x) - x + \frac{x^2}{2}$ trên $[0; +\infty)$:
$$g'(x) = \frac{1}{1 + x} - 1 + x = \frac{1 - (1 + x) + x(1 + x)}{1 + x} = \frac{x^2}{1 + x} \ge 0.$$
Vậy $g$ đồng biến, $g(x) \ge g(0) = 0$. Dấu "=" ở cả hai câu khi $x = 0$.

### Bài 2
a) $f(x) = \cos x - 1 + \frac{x^2}{2}$ là hàm chẵn, chỉ cần xét $x \ge 0$. Có $f'(x) = x - \sin x$, và $(x - \sin x)' = 1 - \cos x \ge 0$, nên $x - \sin x \ge 0 - \sin 0 = 0$ với $x \ge 0$. Do đó $f$ đồng biến trên $[0; +\infty)$, $f(x) \ge f(0) = 0$. Vì $f$ chẵn nên đúng với mọi $x$.

b) $g(x) = \sin x - x + \frac{x^3}{6}$ có $g'(x) = \cos x - 1 + \frac{x^2}{2} \ge 0$ theo câu a). Vậy $g$ đồng biến trên $[0; +\infty)$, $g(x) \ge g(0) = 0$.

*Nhận xét:* mỗi bất đẳng thức được chứng minh bằng cách lấy đạo hàm và dùng bất đẳng thức "đứng trước" nó. Đây là chuỗi đạo hàm liên tiếp.

### Bài 3
Lấy lôgarit, đặt $u = \frac1x > 0$. Bất đẳng thức tương đương
$$x\ln(1 + u) < 1 < (x + 1)\ln(1 + u) \iff \frac{u}{1 + u} < \ln(1 + u) < u.$$
- $\varphi(u) = u - \ln(1 + u)$ có $\varphi'(u) = 1 - \frac{1}{1+u} = \frac{u}{1+u} > 0$ trên $(0; +\infty)$, nên $\varphi(u) > \varphi(0) = 0$.
- $\psi(u) = \ln(1 + u) - \frac{u}{1 + u}$ có $\psi'(u) = \frac{1}{1 + u} - \frac{1}{(1 + u)^2} = \frac{u}{(1 + u)^2} > 0$, nên $\psi(u) > \psi(0) = 0$.

(Với $\frac{u}{1+u} < \ln(1+u)$: nhân với $x + 1 = \frac{1 + u}{u}$ được $1 < (x + 1)\ln(1 + u)$.)

### Bài 4
Xét $h(x) = \frac{\ln x}{x}$ trên $(0; +\infty)$, $h'(x) = \frac{1 - \ln x}{x^2} < 0$ khi $x > e$. Vậy $h$ nghịch biến trên $[e; +\infty)$.

a) $e < \pi$ nên $h(\pi) < h(e)$: $\frac{\ln\pi}{\pi} < \frac1e \iff e\ln\pi < \pi \iff \pi^e < e^\pi$.

b) $e < 2026 < 2027$ nên $h(2026) > h(2027)$:
$$\frac{\ln 2026}{2026} > \frac{\ln 2027}{2027} \iff 2027\ln 2026 > 2026\ln 2027 \iff 2026^{2027} > 2027^{2026}.$$

**Đáp số:** a) $e^\pi > \pi^e$; b) $2026^{2027} > 2027^{2026}$.

### Bài 5
**Điều kiện cần.** Đặt $f(x) = a^x - x - 1$. Ta có $f(0) = 0$, nên giả thiết nói $f(x) \ge f(0)$ với mọi $x$: $x = 0$ là điểm cực tiểu của $f$ trên $\mathbb R$. Theo định lý Fermat, $f'(0) = 0$:
$$f'(0) = \ln a - 1 = 0 \iff a = e.$$

**Điều kiện đủ.** Với $a = e$: $e^x \ge 1 + x$ với mọi $x$ (mục I.1).

**Đáp số:** $a = e$.

*Nhận xét:* kỹ thuật "điều kiện cần tại điểm dấu bằng" rất mạnh: biết bất đẳng thức xảy ra dấu "=" tại một điểm trong, đạo hàm tại đó phải bằng 0.

### Bài 6
Đặt $t = x + y$. Từ $x^2 + y^2 = 2$: $xy = \frac{t^2 - 2}{2}$, và $t^2 \le 2(x^2 + y^2) = 4$, nên $t \in [-2; 2]$ (mọi $t$ trong đoạn này đều đạt được vì $t^2 \ge 4xy \iff t^2 \le 4$).

$x^3 + y^3 = t^3 - 3t\cdot xy = t^3 - \frac{3t(t^2 - 2)}{2} = \frac{-t^3 + 6t}{2}$. Do đó
$$P = f(t) = -t^3 + 6t - \frac{3(t^2 - 2)}{2} = -t^3 - \frac32t^2 + 6t + 3.$$
$f'(t) = -3t^2 - 3t + 6 = -3(t - 1)(t + 2)$. Trên $[-2; 2]$: $f(-2) = -7$, $f(1) = \frac{13}{2}$, $f(2) = 1$.

**Đáp số:** $\max P = \frac{13}{2}$ khi $x + y = 1$, $xy = -\frac12$ (tức là $\{x; y\} = \left\{\frac{1 + \sqrt3}{2}; \frac{1 - \sqrt3}{2}\right\}$); $\min P = -7$ khi $x = y = -1$.

### Bài 7
Đặt $t = xy$. Vì $x, y \ge 0$ và $x + y = 1$ nên $t \in \left[0; \frac14\right]$. Khai triển:
$$S = 16x^2y^2 + 12(x^3 + y^3) + 9xy + 25xy.$$
Với $x + y = 1$: $x^3 + y^3 = 1 - 3xy$. Do đó
$$S = 16t^2 + 12(1 - 3t) + 34t = 16t^2 - 2t + 12.$$
$f(t) = 16t^2 - 2t + 12$ có $f'(t) = 32t - 2 = 0 \iff t = \frac1{16} \in \left[0; \frac14\right]$. So sánh: $f(0) = 12$, $f\left(\frac1{16}\right) = \frac{191}{16}$, $f\left(\frac14\right) = \frac{25}{2}$.

**Đáp số:** $\max S = \frac{25}{2}$ khi $x = y = \frac12$; $\min S = \frac{191}{16}$ khi $xy = \frac1{16}$, tức là $\{x; y\} = \left\{\frac{2 + \sqrt3}{4}; \frac{2 - \sqrt3}{4}\right\}$.

### Bài 8
Chia cho $a$ và đặt $t = \frac ba > 1$. Bất đẳng thức tương đương
$$\sqrt t < \frac{t - 1}{\ln t} < \frac{t + 1}{2} \iff \frac{2(t - 1)}{t + 1} < \ln t < \frac{t - 1}{\sqrt t}.$$
- **Vế phải.** Đặt $s = \sqrt t > 1$, cần $2\ln s < s - \frac1s$. Hàm $h(s) = s - \frac1s - 2\ln s$ có $h'(s) = 1 + \frac{1}{s^2} - \frac2s = \frac{(s - 1)^2}{s^2} > 0$, nên $h(s) > h(1) = 0$.
- **Vế trái.** $g(t) = \ln t - \frac{2(t - 1)}{t + 1}$ có $g'(t) = \frac1t - \frac{4}{(t + 1)^2} = \frac{(t - 1)^2}{t(t + 1)^2} > 0$, nên $g(t) > g(1) = 0$.

*Nhận xét:* với bất đẳng thức thuần nhất hai biến, chia để đưa về một biến $t = \frac ba$ là bước đầu tiên nên nghĩ tới.

### Bài 9
**Bước 1: tìm điều kiện của $s = x + y$.** Vì $4xy \le (x + y)^2$ nên $2 \le (x + y)^3 + 4xy \le s^3 + s^2$, tức là
$$s^3 + s^2 - 2 \ge 0 \iff (s - 1)(s^2 + 2s + 2) \ge 0 \iff s \ge 1.$$

**Bước 2: đánh giá $A$.** Đặt $u = x^2 + y^2 \ge \frac{s^2}{2} \ge \frac12$. Có $x^4 + y^4 + x^2y^2 = u^2 - x^2y^2 \ge u^2 - \frac{u^2}{4} = \frac{3u^2}{4}$ (vì $x^2y^2 \le \frac{(x^2 + y^2)^2}{4}$). Do đó
$$A \ge f(u) = \frac94u^2 - 2u + 1, \quad u \ge \frac12.$$

**Bước 3: khảo sát.** $f'(u) = \frac92u - 2 > 0$ với $u \ge \frac12$, nên $f(u) \ge f\left(\frac12\right) = \frac{9}{16} - 1 + 1 = \frac{9}{16}$.

Dấu "=" khi $x = y = \frac12$ (kiểm tra: $(x + y)^3 + 4xy = 1 + 1 = 2$, thỏa mãn).

**Đáp số:** $\min A = \frac{9}{16}$.

### Bài 10
Vì $a + b + c = 0$ nên $a^3 + b^3 + c^3 = 3abc$ (hằng đẳng thức $a^3 + b^3 + c^3 - 3abc = (a + b + c)(\dots)$).

Ta có $ab + bc + ca = \frac{(a + b + c)^2 - (a^2 + b^2 + c^2)}{2} = -3$. Vì $a + b = -c$: $ab = -3 - c(a + b) = c^2 - 3$.

**Miền của $c$:** $a, b$ là nghiệm thực của $X^2 + cX + c^2 - 3 = 0$, cần $\Delta = c^2 - 4(c^2 - 3) = 12 - 3c^2 \ge 0 \iff c \in [-2; 2]$.

Do đó $P = 3abc = 3c(c^2 - 3) = 3g(c)$ với $g(c) = c^3 - 3c$, $c \in [-2; 2]$. $g'(c) = 3(c^2 - 1)$; $g(-2) = -2$, $g(-1) = 2$, $g(1) = -2$, $g(2) = 2$. Vậy $g(c) \in [-2; 2]$.

**Đáp số:** $\max P = 6$, chẳng hạn khi $a = b = -1$, $c = 2$; $\min P = -6$, chẳng hạn khi $a = b = 1$, $c = -2$.

### Bài 11
Vì $b + c = 3 - a$, ta có $\frac{1}{a^2 + b + c} = f(a)$ với $f(x) = \frac{1}{x^2 - x + 3}$, $x \in (0; 3)$.

Điểm rơi $x = 1$: $f(1) = \frac13$, $f'(x) = -\frac{2x - 1}{(x^2 - x + 3)^2}$, $f'(1) = -\frac19$. Tiếp tuyến: $y = \frac13 - \frac{x - 1}{9} = \frac{4 - x}{9}$.

**Chứng minh** $f(x) \le \frac{4 - x}{9}$ với $x \in (0; 3)$. Vì $x^2 - x + 3 > 0$ và $4 - x > 0$:
$$9 \le (4 - x)(x^2 - x + 3) \iff -x^3 + 5x^2 - 7x + 3 \ge 0 \iff (x - 1)^2(3 - x) \ge 0,$$
đúng với $x < 3$. (Kiểm tra: $(x^2 - 2x + 1)(3 - x) = -x^3 + 5x^2 - 7x + 3$.)

Cộng ba bất đẳng thức: $VT \le \frac{12 - (a + b + c)}{9} = \frac{9}{9} = 1$. Dấu "=" khi $a = b = c = 1$.

### Bài 12
Do vai trò như nhau, giả sử $a = \min\{a; b; c\}$, khi đó $0 \le a \le \frac13$ và $1 - 2a > 0$. Viết
$$Q = ab + bc + ca - 2abc = a(b + c) + bc(1 - 2a) = a(1 - a) + bc(1 - 2a).$$
Vì $1 - 2a > 0$ và $bc \le \frac{(b + c)^2}{4} = \frac{(1 - a)^2}{4}$:
$$Q \le a(1 - a) + \frac{(1 - a)^2(1 - 2a)}{4} = \frac{(1 - a)(2a^2 + a + 1)}{4} = \frac{-2a^3 + a^2 + 1}{4} = f(a).$$
$f'(a) = \frac{-6a^2 + 2a}{4} = \frac{a(1 - 3a)}{2} \ge 0$ trên $\left[0; \frac13\right]$, nên
$$f(a) \le f\left(\frac13\right) = \frac{-\frac{2}{27} + \frac19 + 1}{4} = \frac{28}{108} = \frac{7}{27}.$$
Dấu "=" khi $a = b = c = \frac13$.

*Nhận xét:* "cố định $a$, đánh giá $bc$ theo $b + c$" là bước dồn biến; sau đó chỉ còn hàm một biến $a$ trên đoạn $\left[0; \frac13\right]$, có được nhờ giả sử $a$ nhỏ nhất.

### Bài 13
**Bổ đề.** Với $p, q > 0$ và $pq \ge 1$: $\frac{1}{1 + p} + \frac{1}{1 + q} \ge \frac{2}{1 + \sqrt{pq}}$.

*Chứng minh:* quy đồng, bất đẳng thức tương đương $(\sqrt p - \sqrt q)^2(\sqrt{pq} - 1) \ge 0$, đúng. Dấu "=" khi $p = q$ hoặc $pq = 1$.

**Áp dụng** với $p = \frac zy$, $q = \frac xz$, $pq = \frac xy \ge 1$:
$$\frac{y}{y + z} + \frac{z}{z + x} = \frac{1}{1 + p} + \frac{1}{1 + q} \ge \frac{2}{1 + \sqrt{x/y}}.$$
Đặt $t = \sqrt{\frac xy}$; vì $1 \le y \le x \le 4$ nên $t \in [1; 2]$. Có $\frac{x}{2x + 3y} = \frac{t^2}{2t^2 + 3}$. Do đó
$$P \ge f(t) = \frac{t^2}{2t^2 + 3} + \frac{2}{1 + t}, \quad t \in [1; 2].$$
$$f'(t) = \frac{6t}{(2t^2 + 3)^2} - \frac{2}{(1 + t)^2} = \frac{-2\left[t^3(4t - 3) + 3t(2t - 1) + 9\right]}{(2t^2 + 3)^2(1 + t)^2} < 0 \quad\text{trên } [1; 2].$$
Vậy $f$ nghịch biến, $P \ge f(2) = \frac{4}{11} + \frac23 = \frac{34}{33}$.

**Dấu "=":** $t = 2$ tức là $x = 4$, $y = 1$; bổ đề có dấu "=" khi $p = q$, tức là $z^2 = xy = 4$, $z = 2$. Kiểm tra: $P = \frac{4}{11} + \frac13 + \frac13 = \frac{34}{33}$.

**Đáp số:** $\min P = \frac{34}{33}$ tại $(x; y; z) = (4; 1; 2)$.

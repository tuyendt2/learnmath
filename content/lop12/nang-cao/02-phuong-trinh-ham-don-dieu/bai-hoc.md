# Chủ đề 2. Phương trình, bất phương trình, hệ phương trình giải bằng tính đơn điệu của hàm số

> Đây là "vũ khí" chính cho câu phương trình, hệ phương trình trong đề HSG lớp 12: nhiều phương trình vô tỉ, mũ, lôgarit trông rất phức tạp nhưng thực chất có dạng $f(u) = f(v)$ với $f$ đơn điệu. Chủ đề dạy cách nhận ra hàm đặc trưng, cách dùng đạo hàm để chặn số nghiệm, và cách biện luận tham số.

## I. Kiến thức cần nắm

> **Ý tưởng xuyên suốt:** một hàm đơn điệu là một **song ánh** từ tập xác định lên tập giá trị của nó. Vì vậy nó "không bao giờ nhận cùng một giá trị hai lần". Mọi kỹ thuật trong chủ đề đều khai thác điều này.

### 1. Ba mệnh đề cơ bản và vì sao đúng
Cho $f$ đồng biến (hoặc nghịch biến) **trên khoảng** $D$.
1. Phương trình $f(x) = k$ có **nhiều nhất một nghiệm** trên $D$.
2. Với $u, v \in D$: $f(u) = f(v) \iff u = v$.
3. Nếu $f$ đồng biến: $f(u) < f(v) \iff u < v$. Nếu $f$ nghịch biến thì đổi chiều.

*Vì sao:* nếu $u < v$ thì $f(u) < f(v)$ (đồng biến), nên $u \ne v$ kéo theo $f(u) \ne f(v)$. Mệnh đề 1 là trường hợp riêng của 2.

**Hệ quả:** nếu $f$ đồng biến và $g$ nghịch biến trên $D$ thì $f(x) = g(x)$ có nhiều nhất một nghiệm (vì $f - g$ đồng biến).

**Cách chứng minh một hàm đồng biến:** dùng $f'(x) > 0$ (có thể bằng 0 tại hữu hạn điểm), hoặc dùng tính chất: tổng các hàm đồng biến là hàm đồng biến; $\sqrt[n]{x}$, $a^x$ ($a > 1$), $\log_a x$ ($a > 1$), $x^{2k+1}$ đều đồng biến.

### 2. Dạng 1: nhẩm nghiệm rồi chứng minh nghiệm duy nhất
1. Chuyển phương trình về $f(x) = k$ (hoặc $f(x) = g(x)$ với $f$, $g$ đơn điệu ngược chiều).
2. Chứng minh $f$ đơn điệu trên tập xác định.
3. Nhẩm một nghiệm $x_0$; kết luận đó là nghiệm duy nhất.

**Ví dụ mẫu.** Giải $\sqrt{x} + \sqrt{x + 5} = 5$. Vế trái đồng biến trên $[0; +\infty)$, $x = 4$ thỏa mãn ($2 + 3 = 5$). Nghiệm duy nhất $x = 4$.

**Mẹo nhẩm nghiệm:** thử các giá trị làm các căn, các lũy thừa "đẹp" cùng lúc. Với phương trình mũ dạng $a^x + b^x = c^x$, chia hai vế cho $c^x$ để được một vế đơn điệu.

### 3. Dạng 2: hàm đặc trưng $f(u) = f(v)$
Biến đổi phương trình về dạng $f(u(x)) = f(v(x))$ với $f$ đơn điệu, rồi suy ra $u(x) = v(x)$.

**Cách tìm hàm đặc trưng:**
- Có căn $\sqrt{ax + b}$ thì đặt $t = \sqrt{ax + b}$, khi đó $ax + b = t^2$, $(ax + b)\sqrt{ax + b} = t^3$. Thử viết vế còn lại theo một biểu thức $u(x)$ có **cùng cấu trúc** $u^3 + u$, $u^3 + 3u$, ...
- Có $\log$ của một thương $\log\frac uv$ và một hiệu $v - u$ thì đưa về $\log u + u = \log v + v$.
- Có hai vế đối xứng theo $x$ và $y$ (trong hệ) thì gom về $f(x) = f(y)$.

**Ví dụ mẫu.** $x^3 + x = (2x - 1)^3 + 2x - 1$: hàm $f(t) = t^3 + t$ đồng biến ($f' = 3t^2 + 1 > 0$) nên $x = 2x - 1$, $x = 1$.

### 4. Dạng 3: hàm có đạo hàm cấp hai không đổi dấu
Nếu $f''(x) > 0$ trên khoảng $D$ thì $f'$ đồng biến, nên $f'$ có nhiều nhất một nghiệm. Khi đó $f$ hoặc đơn điệu, hoặc nghịch biến rồi đồng biến trên $D$; trong cả hai trường hợp **$f(x) = 0$ có nhiều nhất hai nghiệm**. Nhẩm được hai nghiệm thì đó là tất cả các nghiệm.

**Ví dụ mẫu.** $2^x = x + 1$: $f(x) = 2^x - x - 1$ có $f''(x) = 2^x\ln^2 2 > 0$, và $f(0) = f(1) = 0$. Tập nghiệm $\{0; 1\}$.

(Tổng quát: nếu $f^{(k)}$ không đổi dấu thì $f$ có nhiều nhất $k$ nghiệm, chứng minh bằng định lý Rolle.)

### 5. Hệ phương trình
- **Một phương trình có dạng $f(x) = f(y)$:** suy ra $x = y$ (nếu $f$ đơn điệu trên miền chứa cả $x$ và $y$), thế vào phương trình còn lại.
- **Hệ hoán vị vòng quanh** $y = f(x)$, $z = f(y)$, $x = f(z)$ với $f$ đồng biến: giả sử $x > y$ thì $f(x) > f(y)$, tức là $y > z$, rồi $z > x$, mâu thuẫn. Tương tự với $x < y$. Vậy $x = y = z$.
- Thường phải **xác định miền giá trị** của $x$, $y$ từ điều kiện xác định để biết hàm đặc trưng đơn điệu trên miền đó (ví dụ $t^3 - 3t$ chỉ nghịch biến trên $[-1; 1]$).

### 6. Bài toán chứa tham số
1. Đặt ẩn phụ (nếu cần) và **tìm chính xác miền giá trị** của ẩn phụ.
2. Cô lập tham số: $m = g(t)$.
3. Lập bảng biến thiên của $g$ trên miền của $t$; số nghiệm bằng số giao điểm của đường thẳng $y = m$ với đồ thị $y = g(t)$.
4. Nếu mỗi giá trị $t$ ứng với nhiều giá trị $x$, phải đếm lại số nghiệm $x$.

### 7. Sai lầm hay gặp
- Kết luận $f(u) = f(v) \Rightarrow u = v$ khi $f$ chỉ đơn điệu trên từng khoảng, còn $u$, $v$ có thể nằm ở hai khoảng khác nhau.
- Quên tìm tập xác định, nên không biết hàm đơn điệu trên miền nào.
- Nhẩm được nghiệm nhưng không chứng minh tính đơn điệu (hoặc chứng minh sai vì có hàm nghịch biến bị cộng vào).
- Đặt ẩn phụ nhưng lấy sai miền giá trị của ẩn phụ trong bài tham số.

---

## II. Bài tập vận dụng

**Bài 1.** Giải phương trình $\sqrt{x - 1} + \sqrt{x + 4} + x^3 = 130$.

**Bài 2.** Giải các phương trình:
a) $3^x + 4^x = 5^x$;
b) $2^x = 3 - x$.

**Bài 3.** Giải phương trình $3^x = 2x + 1$.

**Bài 4.** Giải bất phương trình $\sqrt{x + 1} + \sqrt[3]{5x - 7} + \sqrt[4]{7x - 5} + \sqrt[5]{13x - 7} < 8$.

**Bài 5.** Giải phương trình $x^3 + 3x^2 + 4x + 2 = (3x + 2)\sqrt{3x + 1}$.

**Bài 6.** Giải phương trình $8x^3 - 36x^2 + 53x - 25 = \sqrt[3]{3x - 5}$.

**Bài 7.** Giải phương trình $\log_2\dfrac{x^2 + x + 1}{2x^2 - 2x + 3} = x^2 - 3x + 2$.

**Bài 8.** Giải hệ phương trình $\begin{cases} 2^x - 2^y = y - x \\ x^2 + xy + y^2 = 12. \end{cases}$

**Bài 9 (tham số).** Tìm $m$ để phương trình $m\sqrt{x^2 + 2} = x + m$ có đúng hai nghiệm thực phân biệt.

**Bài 10 (Đề tuyển sinh ĐH khối A 2010).** Giải hệ phương trình
$$\begin{cases} (4x^2 + 1)x + (y - 3)\sqrt{5 - 2y} = 0 \\ 4x^2 + y^2 + 2\sqrt{3 - 4x} = 7. \end{cases}$$

**Bài 11 (tham số).** Tìm $m$ để hệ phương trình sau có nghiệm:
$$\begin{cases} x^3 - y^3 + 3y^2 - 3x - 2 = 0 \\ x^2 + \sqrt{1 - x^2} - 3\sqrt{2y - y^2} + m = 0. \end{cases}$$

**Bài 12 (HSG).** Giải hệ phương trình
$$\begin{cases} x^3 + 3x - 3 + \ln(x^2 - x + 1) = y \\ y^3 + 3y - 3 + \ln(y^2 - y + 1) = z \\ z^3 + 3z - 3 + \ln(z^2 - z + 1) = x. \end{cases}$$

---

## III. Lời giải chi tiết

### Bài 1
Điều kiện $x \ge 1$. Hàm $f(x) = \sqrt{x - 1} + \sqrt{x + 4} + x^3$ là tổng của ba hàm đồng biến trên $[1; +\infty)$ nên đồng biến.

Thử $x = 5$: $\sqrt4 + \sqrt9 + 125 = 2 + 3 + 125 = 130$. Vậy $x = 5$ là nghiệm, và là nghiệm duy nhất.

**Đáp số:** $x = 5$.

### Bài 2
a) Chia hai vế cho $5^x > 0$: $\left(\frac35\right)^x + \left(\frac45\right)^x = 1$. Vế trái là tổng hai hàm nghịch biến (cơ số nhỏ hơn 1) nên nghịch biến trên $\mathbb R$. Thử $x = 2$: $\frac{9}{25} + \frac{16}{25} = 1$. Nghiệm duy nhất $x = 2$.

b) Vế trái $2^x$ đồng biến, vế phải $3 - x$ nghịch biến, nên phương trình có nhiều nhất một nghiệm. Thử $x = 1$: $2 = 2$. Nghiệm duy nhất $x = 1$.

*Nhận xét:* ở câu a), nếu để nguyên thì cả hai vế đều đồng biến, không kết luận được gì. Chia cho $5^x$ là bước then chốt.

### Bài 3
Xét $f(x) = 3^x - 2x - 1$ trên $\mathbb R$. Có $f'(x) = 3^x\ln3 - 2$ và $f''(x) = 3^x\ln^2 3 > 0$.

Vì $f'$ đồng biến nên $f'(x) = 0$ có nhiều nhất một nghiệm. Do đó $f$ hoặc đơn điệu trên $\mathbb R$, hoặc nghịch biến rồi đồng biến; trong mọi trường hợp $f(x) = 0$ có nhiều nhất hai nghiệm.

Thử: $f(0) = 1 - 0 - 1 = 0$, $f(1) = 3 - 2 - 1 = 0$.

**Đáp số:** $x = 0$ hoặc $x = 1$.

### Bài 4
Điều kiện: $x + 1 \ge 0$ và $7x - 5 \ge 0$, tức là $x \ge \frac57$ (căn bậc ba, bậc năm xác định với mọi số thực).

Vế trái $f(x)$ là tổng bốn hàm đồng biến trên $\left[\frac57; +\infty\right)$, nên $f$ đồng biến. Tại $x = 3$:
$$f(3) = \sqrt4 + \sqrt[3]8 + \sqrt[4]{16} + \sqrt[5]{32} = 2 + 2 + 2 + 2 = 8.$$
Bất phương trình là $f(x) < f(3) \iff x < 3$.

**Đáp số:** $\frac57 \le x < 3$.

### Bài 5
Điều kiện $x \ge -\frac13$. Đặt $t = \sqrt{3x + 1} \ge 0$, thì $3x + 2 = t^2 + 1$ và vế phải bằng $(t^2 + 1)t = t^3 + t$.

Vế trái: $x^3 + 3x^2 + 4x + 2 = (x^3 + 3x^2 + 3x + 1) + (x + 1) = (x + 1)^3 + (x + 1)$.

Phương trình thành $f(x + 1) = f(t)$ với $f(u) = u^3 + u$, $f'(u) = 3u^2 + 1 > 0$. Vậy $f$ đồng biến trên $\mathbb R$, suy ra
$$x + 1 = \sqrt{3x + 1} \iff \begin{cases} x \ge -1 \\ x^2 + 2x + 1 = 3x + 1 \end{cases} \iff x^2 - x = 0 \iff x \in \{0; 1\}.$$
Cả hai đều thỏa điều kiện.

**Đáp số:** $x = 0$ hoặc $x = 1$.

*Nhận xét:* cách tìm hàm đặc trưng: vế phải "tự nhiên" có dạng $t^3 + t$ với $t = \sqrt{3x+1}$; ta chỉ cần viết vế trái theo cùng cấu trúc $u^3 + u$.

### Bài 6
Có $(2x - 3)^3 = 8x^3 - 36x^2 + 54x - 27$, nên vế trái bằng
$$(2x - 3)^3 - x + 2 = (2x - 3)^3 + (2x - 3) - (3x - 5).$$
Đặt $t = \sqrt[3]{3x - 5}$, phương trình trở thành
$$(2x - 3)^3 + (2x - 3) = t^3 + t.$$
Hàm $f(u) = u^3 + u$ đồng biến trên $\mathbb R$ nên $2x - 3 = \sqrt[3]{3x - 5}$, tức là
$$(2x - 3)^3 = 3x - 5 \iff 8x^3 - 36x^2 + 51x - 22 = 0 \iff (x - 2)(8x^2 - 20x + 11) = 0.$$
$8x^2 - 20x + 11 = 0$ có $\Delta' = 100 - 88 = 12$, nên $x = \frac{10 \pm 2\sqrt3}{8} = \frac{5 \pm \sqrt3}{4}$.

**Đáp số:** $x = 2$, $x = \dfrac{5 + \sqrt3}{4}$, $x = \dfrac{5 - \sqrt3}{4}$.

### Bài 7
Đặt $u = x^2 + x + 1 > 0$ và $v = 2x^2 - 2x + 3 > 0$ (cả hai có biệt thức âm). Khi đó $v - u = x^2 - 3x + 2$. Phương trình thành
$$\log_2 u - \log_2 v = v - u \iff \log_2 u + u = \log_2 v + v.$$
Hàm $f(t) = \log_2 t + t$ đồng biến trên $(0; +\infty)$, nên $u = v$, tức là $x^2 - 3x + 2 = 0$.

**Đáp số:** $x = 1$ hoặc $x = 2$.

### Bài 8
Phương trình đầu tương đương $2^x + x = 2^y + y$. Hàm $f(t) = 2^t + t$ đồng biến trên $\mathbb R$, nên $x = y$.

Thế vào phương trình thứ hai: $3x^2 = 12 \iff x = \pm2$.

**Đáp số:** $(x; y) = (2; 2)$ hoặc $(-2; -2)$.

### Bài 9
Vì $\sqrt{x^2 + 2} - 1 > 0$ với mọi $x$, phương trình tương đương
$$m = g(x) = \frac{x}{\sqrt{x^2 + 2} - 1}.$$
Đạo hàm (đặt $s = \sqrt{x^2 + 2}$):
$$g'(x) = \frac{(s - 1) - \frac{x^2}{s}}{(s - 1)^2} = \frac{s^2 - s - x^2}{s(s - 1)^2} = \frac{2 - \sqrt{x^2 + 2}}{s(s - 1)^2}.$$
$g'(x) = 0 \iff x^2 = 2 \iff x = \pm\sqrt2$; $g'(x) > 0$ khi $\lvert x\rvert < \sqrt2$ và $g'(x) < 0$ khi $\lvert x\rvert > \sqrt2$.

Giá trị: $g(\sqrt2) = \sqrt2$, $g(-\sqrt2) = -\sqrt2$. Giới hạn: $g(x) = \frac{x}{\lvert x\rvert\sqrt{1 + 2/x^2} - 1} \to 1$ khi $x \to +\infty$ và $\to -1$ khi $x \to -\infty$.

Bảng biến thiên:
- trên $(-\infty; -\sqrt2)$: $g$ giảm từ $-1$ xuống $-\sqrt2$, nhận mọi giá trị trong $(-\sqrt2; -1)$;
- trên $(-\sqrt2; \sqrt2)$: $g$ tăng từ $-\sqrt2$ lên $\sqrt2$;
- trên $(\sqrt2; +\infty)$: $g$ giảm từ $\sqrt2$ xuống $1$, nhận mọi giá trị trong $(1; \sqrt2)$.

Đường thẳng $y = m$ cắt đồ thị $g$ tại đúng hai điểm khi và chỉ khi $-\sqrt2 < m < -1$ hoặc $1 < m < \sqrt2$. (Khi $\lvert m\rvert \le 1$ hoặc $\lvert m\rvert = \sqrt2$ chỉ có một nghiệm; khi $\lvert m\rvert > \sqrt2$ vô nghiệm.)

**Đáp số:** $1 < \lvert m\rvert < \sqrt2$.

### Bài 10
Điều kiện $x \le \frac34$, $y \le \frac52$.

**Phương trình đầu.** Đặt $t = \sqrt{5 - 2y} \ge 0$, thì $y = \frac{5 - t^2}{2}$ và $3 - y = \frac{t^2 + 1}{2}$. Phương trình đầu viết lại:
$$(4x^2 + 1)x = (3 - y)\sqrt{5 - 2y} \iff \frac{(2x)^3 + 2x}{2} = \frac{t^3 + t}{2}.$$
Hàm $f(u) = u^3 + u$ đồng biến, nên $2x = t = \sqrt{5 - 2y}$. Do đó $x \ge 0$ và $y = \frac{5 - 4x^2}{2}$.

**Phương trình thứ hai** trở thành, với $x \in \left[0; \frac34\right]$:
$$g(x) = 4x^2 + \left(\frac52 - 2x^2\right)^2 + 2\sqrt{3 - 4x} - 7 = 0.$$
$$g'(x) = 8x - 8x\left(\frac52 - 2x^2\right) - \frac{4}{\sqrt{3 - 4x}} = 4x(4x^2 - 3) - \frac{4}{\sqrt{3 - 4x}} < 0$$
trên $\left[0; \frac34\right)$, vì $4x^2 - 3 < 0$ ở đó. Vậy $g$ nghịch biến, có nhiều nhất một nghiệm. Thử $x = \frac12$: $1 + 4 + 2 - 7 = 0$.

Khi $x = \frac12$ thì $y = \frac{5 - 1}{2} = 2$.

**Đáp số:** $(x; y) = \left(\frac12; 2\right)$.

### Bài 11
Điều kiện: $-1 \le x \le 1$ và $0 \le y \le 2$.

**Phương trình đầu.** Viết lại $x^3 - 3x = y^3 - 3y^2 + 2 = (y - 1)^3 - 3(y - 1)$. Đặt $f(t) = t^3 - 3t$, có $f'(t) = 3(t^2 - 1) \le 0$ trên $[-1; 1]$, nên $f$ nghịch biến trên $[-1; 1]$. Vì $x$ và $y - 1$ đều thuộc $[-1; 1]$, ta được $x = y - 1$.

**Phương trình thứ hai.** Có $2y - y^2 = 1 - (y - 1)^2 = 1 - x^2$. Thay vào:
$$x^2 + \sqrt{1 - x^2} - 3\sqrt{1 - x^2} + m = 0 \iff m = 2\sqrt{1 - x^2} - x^2.$$
Đặt $t = \sqrt{1 - x^2} \in [0; 1]$ (khi $x$ chạy trên $[-1; 1]$, $t$ nhận mọi giá trị trong $[0; 1]$), thì $x^2 = 1 - t^2$ và
$$m = h(t) = t^2 + 2t - 1.$$
$h$ đồng biến trên $[0; 1]$, $h(0) = -1$, $h(1) = 2$.

**Đáp số:** $-1 \le m \le 2$.

*Nhận xét:* hàm $t^3 - 3t$ không đơn điệu trên $\mathbb R$; chính điều kiện xác định giới hạn $x$ và $y - 1$ trong $[-1; 1]$ mới cho phép dùng tính đơn điệu.

### Bài 12
Đặt $f(t) = t^3 + 3t - 3 + \ln(t^2 - t + 1)$, xác định trên $\mathbb R$ vì $t^2 - t + 1 > 0$. Hệ là $y = f(x)$, $z = f(y)$, $x = f(z)$.

**Một bất đẳng thức phụ.** Đặt $s = t - \frac12$ thì $\dfrac{2t - 1}{t^2 - t + 1} = \dfrac{2s}{s^2 + \frac34}$. Theo AM-GM, $s^2 + \frac34 \ge \sqrt3\,\lvert s\rvert$, nên
$$\frac{2t - 1}{t^2 - t + 1} \ge -\frac{2\lvert s\rvert}{\sqrt3\,\lvert s\rvert} = -\frac{2}{\sqrt3} \quad\text{với mọi } t$$
(với $s = 0$ thì phân thức bằng $0$, vẫn đúng).

**$f$ đồng biến.** $f'(t) = 3t^2 + 3 + \dfrac{2t - 1}{t^2 - t + 1} \ge 3t^2 + 3 - \dfrac{2}{\sqrt3} > 0$. Vậy $f$ đồng biến trên $\mathbb R$.

**$x = y = z$.** Giả sử $x > y$. Vì $f$ đồng biến: $f(x) > f(y)$, tức là $y > z$; lại có $f(y) > f(z)$, tức là $z > x$. Suy ra $x > y > z > x$, mâu thuẫn. Tương tự $x < y$ cũng vô lý. Vậy $x = y$, kéo theo $z = f(y) = f(x) = y$.

**Giải $f(x) = x$**, tức là $g(x) = x^3 + 2x - 3 + \ln(x^2 - x + 1) = 0$. Theo bất đẳng thức phụ, $g'(x) = f'(x) - 1 \ge 3x^2 + 2 - \frac{2}{\sqrt3} > 0$, nên $g$ đồng biến và có nhiều nhất một nghiệm. Thử $x = 1$: $1 + 2 - 3 + \ln 1 = 0$.

**Đáp số:** $(x; y; z) = (1; 1; 1)$.

*Nhận xét:* với hệ hoán vị vòng quanh, chỉ cần $f$ đồng biến là suy ra được ba ẩn bằng nhau. Nếu $f$ nghịch biến thì lập luận trên không dùng được: mỗi bước đổi chiều bất đẳng thức, nên không dẫn tới mâu thuẫn.

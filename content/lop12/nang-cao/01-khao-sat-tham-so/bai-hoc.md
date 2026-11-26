# Chủ đề 1. Khảo sát hàm số nâng cao (tham số, tiếp tuyến, tương giao)

> Bài toán chứa tham số về cực trị, tiếp tuyến và giao điểm của đồ thị gần như luôn có mặt trong câu 1 của đề HSG lớp 12. Chủ đề này tổng hợp các công cụ: chia đa thức lấy đường thẳng qua cực trị, tâm đối xứng của đồ thị bậc ba, định lý Viète cho phương trình hoành độ giao điểm, và cách đếm tiếp tuyến kẻ từ một điểm.

## I. Kiến thức cần nắm

> **Ý tưởng xuyên suốt:** mọi câu hỏi hình học về đồ thị (cực trị, tiếp tuyến, giao điểm) đều được dịch thành một **phương trình đại số** theo hoành độ. Sau đó ta dùng Viète, nhẩm nghiệm, tách nhân tử hoặc cô lập tham số để xử lý phương trình đó.

### 1. Cực trị của hàm bậc ba và tâm đối xứng
Xét $y = f(x) = ax^3 + bx^2 + cx + d$ với $a \ne 0$, có $f'(x) = 3ax^2 + 2bx + c$.
- **Có hai cực trị** khi và chỉ khi $f'(x) = 0$ có hai nghiệm phân biệt, tức là $b^2 - 3ac > 0$.
- **Đường thẳng qua hai điểm cực trị.** Chia $f(x)$ cho $f'(x)$: $f(x) = q(x)\,f'(x) + r(x)$ với $r(x)$ bậc nhất. Tại hai điểm cực trị $x_1, x_2$ có $f'(x_i) = 0$ nên $f(x_i) = r(x_i)$. Vậy hai điểm cực trị nằm trên đường thẳng $y = r(x)$.
- **Tâm đối xứng.** Đồ thị nhận điểm uốn $I\left(-\frac{b}{3a}; f\left(-\frac{b}{3a}\right)\right)$ làm tâm đối xứng. *Vì sao:* đặt $x = X - \frac{b}{3a}$ thì $f$ trở thành $aX^3 + pX + f(x_I)$, mà $aX^3 + pX$ là hàm lẻ theo $X$. Hệ quả: hai điểm cực trị đối xứng qua $I$, trung điểm của chúng là $I$.

**Ví dụ mẫu.** $y = x^3 - 3x^2 + 2$. Chia cho $y' = 3x^2 - 6x$: $y = \left(\frac x3 - \frac13\right)y' - 2x + 2$. Đường thẳng qua hai cực trị là $y = -2x + 2$. Kiểm tra: cực trị $(0; 2)$ và $(2; -2)$ đều thuộc đường thẳng này. Điểm uốn $I(1; 0)$ là trung điểm của chúng.

### 2. Hàm trùng phương và tam giác cực trị
Xét $y = ax^4 + bx^2 + c$. Có $y' = 2x(2ax^2 + b)$, nên hàm có **ba cực trị** khi và chỉ khi $ab < 0$.

Với dạng hay gặp $y = x^4 - 2mx^2 + c$ ($m > 0$), ba điểm cực trị là
$$A(0; c),\quad B(\sqrt m; c - m^2),\quad C(-\sqrt m; c - m^2).$$
Tam giác $ABC$ cân tại $A$, và
$$BC = 2\sqrt m,\qquad AB^2 = AC^2 = m + m^4,\qquad \text{đường cao } AH = m^2,\qquad S = m^2\sqrt m.$$
Các điều kiện thường gặp:
- vuông tại $A$: $AB^2 + AC^2 = BC^2 \iff 2(m + m^4) = 4m \iff m^3 = 1$;
- đều: $AB^2 = BC^2 \iff m + m^4 = 4m \iff m^3 = 3$;
- bán kính đường tròn ngoại tiếp: $R = \frac{AB\cdot AC\cdot BC}{4S} = \frac{AB^2}{2AH}$.

**Ví dụ mẫu.** $y = x^4 - 2mx^2 + 1$ có ba cực trị tạo thành tam giác vuông khi $m^3 = 1$, tức là $m = 1$.

### 3. Tiếp tuyến
- **Tiếp tuyến tại** $M(x_0; f(x_0))$: $y = f'(x_0)(x - x_0) + f(x_0)$.
- **Tiếp tuyến đi qua điểm** $A(\alpha; \beta)$: thay tọa độ $A$ vào phương trình tiếp tuyến tại $x_0$ được phương trình ẩn $x_0$:
  $$\beta = f'(x_0)(\alpha - x_0) + f(x_0).$$
  Mỗi nghiệm $x_0$ cho một tiếp tuyến. Với **hàm bậc ba**, hai tiếp điểm khác nhau luôn cho hai tiếp tuyến khác nhau (một đường thẳng không thể tiếp xúc đồ thị bậc ba tại hai điểm, vì khi đó phương trình hoành độ bậc ba có hai nghiệm kép). Vậy **số tiếp tuyến bằng số nghiệm $x_0$**.
- **Điều kiện tiếp xúc** của hai đồ thị $y = f(x)$ và $y = g(x)$: hệ $f(x) = g(x)$, $f'(x) = g'(x)$ có nghiệm. Với đa thức, điều này nghĩa là $f(x) - g(x)$ có nghiệm bội.
- **Tiếp tuyến của đồ thị bậc ba cắt lại đồ thị.** Tiếp tuyến tại $x_0$ cắt đồ thị $y = ax^3 + bx^2 + cx + d$ tại điểm thứ hai có hoành độ $x_1$ với
  $$2x_0 + x_1 = -\frac ba.$$
  *Vì sao:* phương trình hoành độ là bậc ba, có nghiệm kép $x_0$ và nghiệm $x_1$; theo Viète tổng ba nghiệm bằng $-\frac ba$.
- **Hàm phân thức** $y = \frac{ax + b}{cx + d}$ (với $c \ne 0$, $ad - bc \ne 0$), giao hai tiệm cận là $I$. Tiếp tuyến tại $M$ bất kỳ cắt hai tiệm cận tại $A$, $B$ thì $M$ là trung điểm $AB$ và diện tích tam giác $IAB$ không đổi.

**Ví dụ mẫu.** Tiếp tuyến của $y = x^3 - 3x^2 + 1$ tại điểm có hoành độ $x_0 = 2$ cắt lại đồ thị tại điểm có hoành độ $x_1 = 3 - 2\cdot 2 = -1$.

### 4. Tương giao và cô lập tham số
- **Phương trình hoành độ giao điểm** của $y = f(x)$ và $y = g(x)$ là $f(x) = g(x)$. Số giao điểm bằng số nghiệm.
- Nếu nhẩm được một nghiệm (thường là nghiệm không phụ thuộc tham số), **tách nhân tử** đưa về phương trình bậc hai, rồi dùng điều kiện có hai nghiệm phân biệt khác nghiệm đã nhẩm và định lý Viète.
- **Ba giao điểm cách đều (hoành độ lập cấp số cộng)** của đồ thị bậc ba với trục hoành: nghiệm giữa bằng $\frac{x_1 + x_2 + x_3}{3} = -\frac{b}{3a}$, tức là **điểm uốn phải nằm trên trục hoành**. Đây chỉ là điều kiện cần, phải thử lại xem có đủ ba nghiệm phân biệt không.
- **Cô lập tham số:** đưa phương trình về $m = g(x)$; số nghiệm bằng số giao điểm của đường thẳng nằm ngang $y = m$ với đồ thị $y = g(x)$, đọc từ bảng biến thiên.
- **Điểm cố định của họ đồ thị:** viết $y = m\,P(x) + Q(x)$. Điểm $(x; y)$ thuộc mọi đồ thị khi và chỉ khi $P(x) = 0$ và $y = Q(x)$.

### 5. Đồ thị chứa giá trị tuyệt đối
- $y = \lvert f(x)\rvert$: giữ phần đồ thị phía trên $Ox$, lấy đối xứng phần phía dưới qua $Ox$. **Số điểm cực trị** của $\lvert f\rvert$ bằng số cực trị của $f$ cộng số nghiệm bội lẻ của $f(x) = 0$ (không trùng điểm cực trị).
- $y = f(\lvert x\rvert)$: giữ phần đồ thị bên phải $Oy$, lấy đối xứng qua $Oy$. Nếu $f$ có $k$ điểm cực trị dương thì $f(\lvert x\rvert)$ có $2k + 1$ điểm cực trị (tính cả $x = 0$).

### 6. Sai lầm hay gặp
- Quên điều kiện tồn tại (có hai cực trị, phương trình có hai nghiệm phân biệt) trước khi dùng Viète.
- Quên điều kiện nghiệm của phương trình bậc hai **khác** nghiệm đã nhẩm, hoặc khác điểm mà hàm không xác định.
- "Song song" khác "trùng nhau": hai đường thẳng song song phải có cùng hệ số góc **và** khác tung độ gốc.
- Dùng điều kiện cần (điểm uốn thuộc $Ox$) mà không thử lại.
- Với hàm phân thức, quên rằng hàm chỉ đơn điệu trên **từng khoảng** xác định; khoảng đang xét không được chứa điểm $x = -\frac dc$.

---

## II. Bài tập vận dụng

**Bài 1.** Tìm $m$ để hàm số $y = \dfrac{mx + 4}{x + m}$ nghịch biến trên khoảng $(-\infty; 1)$.

**Bài 2.** Cho hàm số $y = x^3 - 3mx^2 + 3(m^2 - 1)x - m^3 + m$. Tìm $m$ để hàm số có cực đại tại $A$, cực tiểu tại $B$ sao cho $OA = \sqrt2\,OB$ ($O$ là gốc tọa độ).

**Bài 3.** Tìm $m$ để đồ thị hàm số $y = x^3 - 3x^2 + mx$ có hai điểm cực trị và đường thẳng đi qua hai điểm cực trị song song với đường thẳng $y = -4x + 1$.

**Bài 4.** Cho hàm số $y = x^4 - 2mx^2 + 2m - 1$. Tìm $m$ để đồ thị có ba điểm cực trị tạo thành
a) một tam giác đều;
b) một tam giác có diện tích bằng $4\sqrt2$;
c) một tam giác có bán kính đường tròn ngoại tiếp bằng $1$.

**Bài 5.** Tìm $m$ để đồ thị hàm số $y = x^3 - 3mx^2 + 2m(m - 4)x + 9m^2 - m$ cắt trục hoành tại ba điểm phân biệt có hoành độ lập thành cấp số cộng.

**Bài 6.** Cho hàm số $y = \dfrac{2x + 1}{x + 1}$ có đồ thị $(C)$. Chứng minh đường thẳng $d: y = -x + m$ luôn cắt $(C)$ tại hai điểm phân biệt $A$, $B$. Tìm $m$ để đoạn $AB$ ngắn nhất.

**Bài 7.** Cho hàm số $y = \dfrac{2x - 1}{x - 1}$ có đồ thị $(C)$, $I$ là giao điểm hai tiệm cận. Tiếp tuyến tại điểm $M$ bất kỳ thuộc $(C)$ cắt hai tiệm cận tại $A$ và $B$.
a) Chứng minh $M$ là trung điểm $AB$ và diện tích tam giác $IAB$ không đổi.
b) Tìm $M$ để đoạn $AB$ ngắn nhất.

**Bài 8.** Cho hàm số $y = x^3 - 3x$ có đồ thị $(C)$. Tìm $m$ để từ điểm $A(2; m)$ kẻ được đúng ba tiếp tuyến đến $(C)$.

**Bài 9.** Tìm $m$ để đồ thị hàm số $y = x^3 - 3mx^2 + 4m^3$ có hai điểm cực trị đối xứng nhau qua đường thẳng $y = x$.

**Bài 10 (điểm cố định).** Cho họ đồ thị $(C_m): y = (m + 1)x^3 - (2m + 1)x - m + 1$. Chứng minh khi $m$ thay đổi, $(C_m)$ luôn đi qua ba điểm cố định và ba điểm đó thẳng hàng.

**Bài 11 (giá trị tuyệt đối).**
a) Tìm $m$ để hàm số $y = \lvert x^3 - 3x^2 + m\rvert$ có đúng 5 điểm cực trị.
b) Tìm $m$ để hàm số $y = \lvert x\rvert^3 - 3mx^2 + 3(m^2 - 1)\lvert x\rvert + 1$ có đúng 5 điểm cực trị.

**Bài 12 (hàm hợp).** Cho $f(x) = x^3 - 3x + 1$. Hỏi phương trình $f(f(x)) = 1$ có bao nhiêu nghiệm thực?

**Bài 13 (HSG).** Cho hàm số $y = x^3 - 3x^2 + 2$ có đồ thị $(C)$. Tìm trên đường thẳng $y = -2$ những điểm mà từ đó kẻ được đến $(C)$ hai tiếp tuyến vuông góc với nhau.

**Bài 14 (HSG).** Cho $(C): y = x^3 - 3x^2 + 1$. Điểm $M_1 \in (C)$ có hoành độ $x_1 = 2$. Tiếp tuyến của $(C)$ tại $M_1$ cắt $(C)$ tại điểm thứ hai $M_2$; tiếp tuyến tại $M_2$ cắt $(C)$ tại điểm thứ hai $M_3$; cứ tiếp tục như vậy. Gọi $x_n$ là hoành độ của $M_n$. Tìm $x_n$ theo $n$ và tìm số $n$ nhỏ nhất để $\lvert x_n\rvert > 2026$.

---

## III. Lời giải chi tiết

### Bài 1
Tập xác định $x \ne -m$, và $y' = \dfrac{m^2 - 4}{(x + m)^2}$.

Hàm số nghịch biến trên $(-\infty; 1)$ khi và chỉ khi:
- $y' < 0$, tức là $m^2 - 4 < 0 \iff -2 < m < 2$;
- hàm xác định trên cả khoảng $(-\infty; 1)$, tức là $-m \notin (-\infty; 1) \iff -m \ge 1 \iff m \le -1$.

**Đáp số:** $-2 < m \le -1$.

*Nhận xét:* điều kiện thứ hai hay bị quên. Với $m = 0$ chẳng hạn, $y' < 0$ nhưng hàm không xác định tại $x = 0 \in (-\infty; 1)$.

### Bài 2
Viết lại: $y = (x - m)^3 - 3(x - m) - 2m$ (khai triển để kiểm tra: $(x - m)^3 - 3(x - m) = x^3 - 3mx^2 + 3(m^2 - 1)x - m^3 + 3m$).

$y' = 3(x - m)^2 - 3 = 0 \iff x = m \pm 1$. Hàm luôn có hai cực trị với mọi $m$. Vì hệ số của $x^3$ dương nên cực đại tại $x = m - 1$, cực tiểu tại $x = m + 1$:
$$A(m - 1;\; 2 - 2m),\qquad B(m + 1;\; -2 - 2m).$$
Do đó $OA^2 = (m - 1)^2 + 4(m - 1)^2 = 5(m - 1)^2$ và $OB^2 = 5(m + 1)^2$.

$OA = \sqrt2\,OB \iff (m - 1)^2 = 2(m + 1)^2 \iff m^2 + 6m + 1 = 0 \iff m = -3 \pm 2\sqrt2$.

**Đáp số:** $m = -3 \pm 2\sqrt2$.

### Bài 3
$y' = 3x^2 - 6x + m$. Có hai cực trị khi $\Delta' = 9 - 3m > 0 \iff m < 3$.

Chia $y$ cho $y'$:
$$y = \left(\frac x3 - \frac13\right)(3x^2 - 6x + m) + \left(\frac{2m}{3} - 2\right)x + \frac m3.$$
Đường thẳng qua hai cực trị: $\Delta: y = \left(\frac{2m}{3} - 2\right)x + \frac m3$.

$\Delta$ song song với $y = -4x + 1$ khi $\frac{2m}{3} - 2 = -4$ và $\frac m3 \ne 1$, tức là $m = -3$ (thỏa mãn $m < 3$ và $\frac m3 = -1 \ne 1$).

**Đáp số:** $m = -3$.

### Bài 4
$y' = 4x(x^2 - m)$. Có ba cực trị khi $m > 0$. Ba điểm cực trị:
$$A(0; 2m - 1),\quad B(\sqrt m; -m^2 + 2m - 1),\quad C(-\sqrt m; -m^2 + 2m - 1).$$
Ta có $BC = 2\sqrt m$, $AB^2 = AC^2 = m + m^4$, đường cao từ $A$ là $AH = m^2$, diện tích $S = \frac12\cdot 2\sqrt m\cdot m^2 = m^2\sqrt m$.

a) Đều $\iff AB^2 = BC^2 \iff m + m^4 = 4m \iff m^3 = 3 \iff m = \sqrt[3]3$.

b) $S = 4\sqrt2 \iff m^{5/2} = 2^{5/2} \iff m = 2$.

c) Với tam giác cân tại $A$, $R = \dfrac{AB\cdot AC\cdot BC}{4S} = \dfrac{AB^2\cdot BC}{4\cdot\frac12 BC\cdot AH} = \dfrac{AB^2}{2AH}$. Do đó
$$R = 1 \iff m + m^4 = 2m^2 \iff m(m^3 - 2m + 1) = 0 \iff m(m - 1)(m^2 + m - 1) = 0.$$
Với $m > 0$: $m = 1$ hoặc $m = \dfrac{-1 + \sqrt5}{2}$.

**Đáp số:** a) $m = \sqrt[3]3$; b) $m = 2$; c) $m = 1$ hoặc $m = \frac{\sqrt5 - 1}{2}$.

### Bài 5
**Điều kiện cần.** Nếu ba nghiệm $x_1 < x_2 < x_3$ lập cấp số cộng thì $x_2 = \frac{x_1 + x_2 + x_3}{3} = \frac{3m}{3} = m$ (Viète). Vậy $x = m$ là nghiệm:
$$m^3 - 3m^3 + 2m^2(m - 4) + 9m^2 - m = 0 \iff m^2 - m = 0 \iff m = 0 \text{ hoặc } m = 1.$$

**Thử lại.**
- $m = 0$: $y = x^3$, chỉ cắt trục hoành tại một điểm. Loại.
- $m = 1$: $y = x^3 - 3x^2 - 6x + 8 = (x - 1)(x^2 - 2x - 8) = (x - 1)(x - 4)(x + 2)$. Ba nghiệm $-2, 1, 4$ lập cấp số cộng. Nhận.

**Đáp số:** $m = 1$.

*Nhận xét:* điều kiện "điểm uốn nằm trên $Ox$" chỉ là điều kiện cần; bước thử lại là bắt buộc.

### Bài 6
Phương trình hoành độ giao điểm ($x \ne -1$):
$$\frac{2x + 1}{x + 1} = -x + m \iff x^2 + (3 - m)x + 1 - m = 0. \quad (*)$$
$(*)$ có $\Delta = (3 - m)^2 - 4(1 - m) = m^2 - 2m + 5 = (m - 1)^2 + 4 > 0$, và $x = -1$ không là nghiệm (thay vào được $-1 \ne 0$). Vậy $d$ luôn cắt $(C)$ tại hai điểm phân biệt $A(x_1; -x_1 + m)$, $B(x_2; -x_2 + m)$.

$$AB^2 = (x_1 - x_2)^2 + (x_1 - x_2)^2 = 2\left[(x_1 + x_2)^2 - 4x_1x_2\right] = 2\Delta = 2\left[(m - 1)^2 + 4\right] \ge 8.$$

**Đáp số:** $AB$ ngắn nhất bằng $2\sqrt2$ khi $m = 1$.

### Bài 7
$y = 2 + \frac{1}{x - 1}$. Tiệm cận đứng $x = 1$, tiệm cận ngang $y = 2$, $I(1; 2)$.

a) Lấy $M\left(1 + t;\; 2 + \frac1t\right)$ với $t \ne 0$. Có $y' = -\frac{1}{(x - 1)^2}$, tiếp tuyến tại $M$:
$$y = -\frac{1}{t^2}(x - 1 - t) + 2 + \frac1t.$$
- Cho $x = 1$: $y = \frac1t + 2 + \frac1t = 2 + \frac2t$, nên $A\left(1; 2 + \frac2t\right)$.
- Cho $y = 2$: $\frac{1}{t^2}(x - 1 - t) = \frac1t \iff x = 1 + 2t$, nên $B(1 + 2t; 2)$.

Trung điểm $AB$ là $\left(\frac{2 + 2t}{2}; \frac{4 + \frac2t}{2}\right) = \left(1 + t; 2 + \frac1t\right) = M$.

Tam giác $IAB$ vuông tại $I$ với $IA = \frac{2}{\lvert t\rvert}$, $IB = 2\lvert t\rvert$, nên $S_{IAB} = \frac12\cdot\frac{2}{\lvert t\rvert}\cdot 2\lvert t\rvert = 2$, không đổi.

b) $AB^2 = IA^2 + IB^2 = \frac{4}{t^2} + 4t^2 \ge 2\sqrt{16} = 8$, dấu "=" khi $t^2 = 1$.

**Đáp số:** $AB_{\min} = 2\sqrt2$, đạt tại $M(2; 3)$ hoặc $M(0; 1)$.

### Bài 8
Tiếp tuyến tại điểm có hoành độ $x_0$: $y = (3x_0^2 - 3)(x - x_0) + x_0^3 - 3x_0$. Tiếp tuyến đi qua $A(2; m)$ khi
$$m = (3x_0^2 - 3)(2 - x_0) + x_0^3 - 3x_0 = -2x_0^3 + 6x_0^2 - 6.$$
Vì $(C)$ là đồ thị bậc ba nên mỗi tiếp điểm cho một tiếp tuyến khác nhau. Do đó số tiếp tuyến bằng số nghiệm của $m = g(x_0)$ với $g(t) = -2t^3 + 6t^2 - 6$.

$g'(t) = -6t^2 + 12t = 0 \iff t = 0$ hoặc $t = 2$; $g(0) = -6$ (cực tiểu), $g(2) = 2$ (cực đại); $g(t) \to +\infty$ khi $t \to -\infty$ và $g(t) \to -\infty$ khi $t \to +\infty$.

Đường thẳng $y = m$ cắt đồ thị $g$ tại ba điểm khi và chỉ khi $-6 < m < 2$.

**Đáp số:** $-6 < m < 2$.

### Bài 9
$y' = 3x^2 - 6mx = 3x(x - 2m)$. Có hai cực trị khi $m \ne 0$. Hai điểm cực trị: $A(0; 4m^3)$ và $B(2m; 0)$.

$A$ và $B$ đối xứng qua $\Delta: y = x$ khi và chỉ khi trung điểm $I(m; 2m^3)$ thuộc $\Delta$ và $\overrightarrow{AB} \perp \Delta$.
- $I \in \Delta \iff 2m^3 = m \iff m^2 = \frac12$ (vì $m \ne 0$).
- $\overrightarrow{AB} = (2m; -4m^3)$, vectơ chỉ phương của $\Delta$ là $(1; 1)$: $2m - 4m^3 = 0 \iff m^2 = \frac12$.

**Đáp số:** $m = \pm\dfrac{\sqrt2}{2}$.

### Bài 10
Viết $y = m(x^3 - 2x - 1) + (x^3 - x + 1)$. Điểm $(x_0; y_0)$ thuộc $(C_m)$ với mọi $m$ khi và chỉ khi
$$\begin{cases} x_0^3 - 2x_0 - 1 = 0 \\ y_0 = x_0^3 - x_0 + 1. \end{cases}$$
Phương trình đầu: $(x_0 + 1)(x_0^2 - x_0 - 1) = 0$, có ba nghiệm phân biệt $x_0 = -1$, $x_0 = \frac{1 \pm \sqrt5}{2}$. Vậy có đúng ba điểm cố định.

Tại các điểm đó $x_0^3 = 2x_0 + 1$, nên $y_0 = (2x_0 + 1) - x_0 + 1 = x_0 + 2$. Ba điểm cố định cùng nằm trên đường thẳng $y = x + 2$.

*Nhận xét:* mẹo "hạ bậc nhờ phương trình của hoành độ" giúp chứng minh thẳng hàng mà không cần tính tung độ cụ thể.

### Bài 11
a) Đặt $g(x) = x^3 - 3x^2 + m$, $g'(x) = 3x(x - 2)$: $g$ có hai cực trị tại $x = 0$ và $x = 2$, với $g(0) = m$, $g(2) = m - 4$.

Số cực trị của $\lvert g\rvert$ bằng số cực trị của $g$ (là 2) cộng số nghiệm bội lẻ của $g(x) = 0$ khác $0$ và $2$. Để có 5 cực trị, $g(x) = 0$ phải có ba nghiệm phân biệt, tức là hai giá trị cực trị trái dấu:
$$g(0)\cdot g(2) < 0 \iff m(m - 4) < 0 \iff 0 < m < 4.$$
(Khi $m = 0$ hoặc $m = 4$, $g$ có một nghiệm kép trùng điểm cực trị và một nghiệm đơn, $\lvert g\rvert$ chỉ có 3 cực trị.)

b) Đặt $f(x) = x^3 - 3mx^2 + 3(m^2 - 1)x + 1$, thì hàm đã cho là $f(\lvert x\rvert)$. Có $f'(x) = 3(x^2 - 2mx + m^2 - 1) = 0 \iff x = m - 1$ hoặc $x = m + 1$.

$f(\lvert x\rvert)$ là hàm chẵn. Nếu $f$ có $k$ điểm cực trị dương thì $f(\lvert x\rvert)$ có $2k + 1$ điểm cực trị. Cần $k = 2$, tức là $m - 1 > 0$.

Kiểm tra trường hợp biên $m = 1$: cực trị của $f$ là $0$ và $2$, hàm $f(\lvert x\rvert)$ chỉ có 3 cực trị ($x = 0, \pm2$). Loại.

**Đáp số:** a) $0 < m < 4$; b) $m > 1$.

### Bài 12
Đặt $t = f(x)$. Phương trình $f(t) = 1 \iff t^3 - 3t = 0 \iff t \in \{0; \sqrt3; -\sqrt3\}$.

Giải $f(x) = t$, tức là $x^3 - 3x = t - 1$. Hàm $h(x) = x^3 - 3x$ có cực đại $h(-1) = 2$, cực tiểu $h(1) = -2$, nên $h(x) = c$ có 3 nghiệm khi $-2 < c < 2$ và 1 nghiệm khi $\lvert c\rvert > 2$.
- $t = 0$: $c = -1 \in (-2; 2)$, có 3 nghiệm.
- $t = \sqrt3$: $c = \sqrt3 - 1 \approx 0{,}73 \in (-2; 2)$, có 3 nghiệm.
- $t = -\sqrt3$: $c = -\sqrt3 - 1 \approx -2{,}73 < -2$, có 1 nghiệm.

Các nghiệm ứng với các giá trị $t$ khác nhau thì khác nhau (vì $f(x)$ khác nhau).

**Đáp số:** 7 nghiệm.

### Bài 13
Gọi $A(a; -2)$. Có $y' = 3x^2 - 6x$. Tiếp tuyến tại $x_0$ đi qua $A$ khi
$$-2 = (3x_0^2 - 6x_0)(a - x_0) + x_0^3 - 3x_0^2 + 2 \iff 2x_0^3 - 3(a + 1)x_0^2 + 6ax_0 - 4 = 0.$$
Nhẩm thấy $x_0 = 2$ là nghiệm, phân tích:
$$(x_0 - 2)\left[2x_0^2 - (3a - 1)x_0 + 2\right] = 0.$$
Nghiệm $x_0 = 2$ cho tiếp tuyến $y = -2$ (hệ số góc $0$), không vuông góc được với tiếp tuyến nào khác (vì không có tiếp tuyến thẳng đứng). Vậy hai tiếp tuyến vuông góc phải ứng với hai nghiệm $x_1, x_2$ của
$$2x^2 - (3a - 1)x + 2 = 0, \quad\text{với } x_1 + x_2 = \frac{3a - 1}{2},\; x_1x_2 = 1.$$
Điều kiện vuông góc $y'(x_1)\cdot y'(x_2) = -1$:
$$9x_1x_2(x_1 - 2)(x_2 - 2) = 9\cdot 1\cdot\left[1 - (3a - 1) + 4\right] = 9(6 - 3a) = -1 \iff a = \frac{55}{27}.$$
Kiểm tra: khi đó $3a - 1 = \frac{46}{9}$, $\Delta = \left(\frac{46}{9}\right)^2 - 16 > 0$ nên có hai nghiệm phân biệt, và $x = 2$ không là nghiệm ($8 - \frac{92}{9} + 2 \ne 0$).

**Đáp số:** $A\left(\dfrac{55}{27}; -2\right)$.

### Bài 14
Theo tính chất ở mục I.3, với $y = x^3 - 3x^2 + 1$ thì $-\frac ba = 3$, nên tiếp tuyến tại điểm có hoành độ $x_n$ cắt lại $(C)$ tại điểm có hoành độ
$$x_{n+1} = 3 - 2x_n \iff x_{n+1} - 1 = -2(x_n - 1).$$
(Điểm thứ hai luôn khác $M_n$ vì $x_{n+1} = x_n \iff x_n = 1$, mà $x_1 - 1 = 1 \ne 0$ nên mọi $x_n \ne 1$.)

Dãy $x_n - 1$ là cấp số nhân công bội $-2$, số hạng đầu $x_1 - 1 = 1$:
$$x_n = 1 + (-2)^{n-1}.$$
- $n$ lẻ: $x_n = 1 + 2^{n-1}$; $\lvert x_n\rvert > 2026 \iff 2^{n-1} > 2025 \iff n - 1 \ge 11$, nên $n \ge 13$ (lẻ).
- $n$ chẵn: $x_n = 1 - 2^{n-1}$; $\lvert x_n\rvert > 2026 \iff 2^{n-1} > 2027 \iff n - 1 \ge 11$, nên $n \ge 12$.

**Đáp số:** $x_n = 1 + (-2)^{n-1}$; $n$ nhỏ nhất là $12$ (khi đó $x_{12} = -2047$).

*Nhận xét:* "điểm uốn" $x = 1$ là điểm bất động của phép biến đổi $x \mapsto 3 - 2x$, nên dãy hoành độ "xoáy" ra xa điểm uốn với tỉ số $-2$.

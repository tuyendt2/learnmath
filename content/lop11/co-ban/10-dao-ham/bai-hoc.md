# Chủ đề 10. Đạo hàm

> Đạo hàm đo tốc độ thay đổi tức thời của một đại lượng: vận tốc, gia tốc, chi phí biên, hệ số góc tiếp tuyến. Chủ đề này gồm định nghĩa, các quy tắc tính đạo hàm (tổng, tích, thương, hàm hợp), đạo hàm của các hàm sơ cấp, đạo hàm cấp hai, phương trình tiếp tuyến và ý nghĩa vật lý.

## I. Kiến thức cần nắm

### 1. Định nghĩa

$$f'(x_0) = \lim_{x \to x_0} \dfrac{f(x) - f(x_0)}{x - x_0}.$$
- Ý nghĩa hình học: $f'(x_0)$ là hệ số góc tiếp tuyến của đồ thị tại $M(x_0; f(x_0))$.
- Ý nghĩa vật lý: $s'(t) = v(t)$ là vận tốc tức thời; $v'(t) = s''(t) = a(t)$ là gia tốc.

### 2. Bảng đạo hàm

| Hàm số | Đạo hàm | Hàm hợp ($u = u(x)$) |
|---|---|---|
| $x^n$ | $nx^{n - 1}$ | $nu^{n - 1}u'$ |
| $\sqrt{x}$ | $\dfrac{1}{2\sqrt{x}}$ | $\dfrac{u'}{2\sqrt{u}}$ |
| $\sin x$, $\cos x$ | $\cos x$, $-\sin x$ | $u'\cos u$, $-u'\sin u$ |
| $\tan x$ | $\dfrac{1}{\cos^2 x}$ | $\dfrac{u'}{\cos^2 u}$ |
| $e^x$, $a^x$ | $e^x$, $a^x\ln a$ | $u'e^u$, $u'a^u\ln a$ |
| $\ln x$, $\log_a x$ | $\dfrac{1}{x}$, $\dfrac{1}{x\ln a}$ | $\dfrac{u'}{u}$, $\dfrac{u'}{u\ln a}$ |

### 3. Quy tắc tính

$(u \pm v)' = u' \pm v'$; $(uv)' = u'v + uv'$; $\left(\dfrac{u}{v}\right)' = \dfrac{u'v - uv'}{v^2}$; $(ku)' = ku'$. Hàm hợp: $[f(u(x))]' = f'(u) \cdot u'(x)$.
Đặc biệt $\left(\dfrac{ax + b}{cx + d}\right)' = \dfrac{ad - bc}{(cx + d)^2}$.

### 4. Tiếp tuyến

Tiếp tuyến tại $M(x_0; y_0)$: $y = f'(x_0)(x - x_0) + y_0$.
- Biết hệ số góc $k$: giải $f'(x_0) = k$. Song song với $y = kx + b$: hệ số góc $k$ (loại trường hợp trùng); vuông góc: hệ số góc $-\dfrac{1}{k}$.
- Đi qua điểm $A$ cho trước: viết tiếp tuyến tại $x_0$ tổng quát rồi thay tọa độ $A$.

### 5. Đạo hàm cấp hai

$f''(x) = (f'(x))'$. Gia tốc tức thời $a(t) = s''(t)$.

### 6. Sai lầm hay gặp

- Quên nhân $u'$ khi đạo hàm hàm hợp.
- Đạo hàm của thương viết sai thứ tự $u'v - uv'$.
- Viết tiếp tuyến "đi qua $A$" như tiếp tuyến "tại $A$" khi $A$ không thuộc đồ thị.

## II. Bài tập vận dụng

**Bài 1.** Dùng định nghĩa, tính đạo hàm của $f(x) = x^2$ tại $x_0 = 3$.

**Bài 2.** Tính đạo hàm của $y = x^3 - 3x^2 + 2x - 1$ và $y = \dfrac{2x + 1}{x - 1}$.

**Bài 3.** Tính đạo hàm của $y = \sqrt{x^2 + 1}$ và $y = (x^2 + 1)^5$.

**Bài 4.** Tính đạo hàm của $y = \sin 2x + \cos^2 x$ và $y = x\tan x$.

**Bài 5.** Tính đạo hàm của $y = e^{2x}\ln x$ và $y = \log_2(x^2 + 1)$.

**Bài 6.** Tính đạo hàm cấp hai của $y = x^4 - 2x^2$ và $y = \sin x$.

**Bài 7.** Viết phương trình tiếp tuyến của đồ thị $y = x^3 - 3x$ tại điểm có hoành độ $x_0 = 2$.

**Bài 8.** Viết phương trình tiếp tuyến của parabol $y = x^2 - 2x + 3$ song song với đường thẳng $y = 4x + 1$.

**Bài 9.** Viết phương trình tiếp tuyến của đồ thị $y = \dfrac{2x + 1}{x - 1}$ tại giao điểm của đồ thị với trục tung.

**Bài 10 (vật lý).** Một chất điểm chuyển động với phương trình $s(t) = t^3 - 6t^2 + 9t$ ($s$ tính bằng mét, $t$ bằng giây). Tính vận tốc và gia tốc tại $t = 2$; tìm các thời điểm vận tốc bằng 0.

**Bài 11 (thực tế).** Một quả bóng được ném thẳng đứng lên, độ cao $h(t) = -4{,}9t^2 + 19{,}6t + 1$ (m). Tính vận tốc tức thời của quả bóng tại $t = 1$ giây. Khi nào quả bóng đạt độ cao lớn nhất?

**Bài 12 (vận dụng cao).** Viết phương trình các tiếp tuyến của đồ thị $y = x^3$ đi qua điểm $A(2; 0)$.

**Bài 13 (vận dụng cao).** a) Biết $\lim_{x \to 0}\dfrac{\sin x}{x} = 1$, tính $\lim_{x \to 0}\dfrac{\sin 3x}{x}$. b) Chứng minh hàm số $f(x) = \lvert x\rvert$ liên tục nhưng không có đạo hàm tại $x = 0$.

---

## III. Lời giải chi tiết

### Bài 1
$\dfrac{f(x) - f(3)}{x - 3} = \dfrac{x^2 - 9}{x - 3} = x + 3 \to 6$. $f'(3) = 6$.

### Bài 2
$y' = 3x^2 - 6x + 2$. $y' = \dfrac{2 \cdot (-1) - 1 \cdot 1}{(x - 1)^2} = -\dfrac{3}{(x - 1)^2}$.

### Bài 3
$y' = \dfrac{2x}{2\sqrt{x^2 + 1}} = \dfrac{x}{\sqrt{x^2 + 1}}$. $y' = 5(x^2 + 1)^4 \cdot 2x = 10x(x^2 + 1)^4$.

### Bài 4
$y' = 2\cos 2x - 2\cos x\sin x = 2\cos 2x - \sin 2x$. $y' = \tan x + \dfrac{x}{\cos^2 x}$.

### Bài 5
$y' = 2e^{2x}\ln x + \dfrac{e^{2x}}{x}$. $y' = \dfrac{2x}{(x^2 + 1)\ln 2}$.

### Bài 6
$y' = 4x^3 - 4x$, $y'' = 12x^2 - 4$. $(\sin x)'' = (\cos x)' = -\sin x$.

### Bài 7
$y(2) = 2$, $y' = 3x^2 - 3$, $y'(2) = 9$. Tiếp tuyến $y = 9(x - 2) + 2 = 9x - 16$.

### Bài 8
$y' = 2x - 2 = 4 \iff x = 3$, $y(3) = 6$. Tiếp tuyến $y = 4(x - 3) + 6 = 4x - 6$ (khác đường $y = 4x + 1$).

### Bài 9
Giao với $Oy$: $x = 0$, $y = -1$. $y'(0) = -3$. Tiếp tuyến $y = -3x - 1$.

### Bài 10
$v(t) = 3t^2 - 12t + 9$, $v(2) = -3$ m/s. $a(t) = 6t - 12$, $a(2) = 0$ m/s². $v = 0 \iff t = 1$ hoặc $t = 3$.

### Bài 11
$v(t) = h'(t) = -9{,}8t + 19{,}6$, $v(1) = 9{,}8$ m/s. Độ cao lớn nhất khi $v = 0$: $t = 2$ giây.

### Bài 12
Tiếp tuyến tại $M(m; m^3)$: $y = 3m^2(x - m) + m^3$. Đi qua $A(2; 0)$: $0 = 3m^2(2 - m) + m^3 = 6m^2 - 2m^3 \iff m = 0$ hoặc $m = 3$.
**Đáp số:** $y = 0$ và $y = 27x - 54$.

### Bài 13
a) $\dfrac{\sin 3x}{x} = 3 \cdot \dfrac{\sin 3x}{3x} \to 3$.
b) $\lim_{x \to 0}\lvert x\rvert = 0 = f(0)$: liên tục. $\dfrac{f(x) - f(0)}{x} = \dfrac{\lvert x\rvert}{x}$ bằng 1 khi $x > 0$ và $-1$ khi $x < 0$: hai giới hạn một bên khác nhau, không có đạo hàm tại 0.

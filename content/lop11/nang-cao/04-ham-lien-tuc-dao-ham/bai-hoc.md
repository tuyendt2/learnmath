# Chủ đề 4. Hàm liên tục và đạo hàm

> Đề HSG lớp 11 thường có một câu về giới hạn hàm số và tính liên tục (tìm tham số, chứng minh phương trình có nghiệm), và một câu về đạo hàm (đạo hàm cấp $n$, tiếp tuyến, tính tổng tổ hợp). Chủ đề này chỉ dùng kiến thức lớp 11: chưa dùng đạo hàm để xét tính đơn điệu hay cực trị.

## I. Kiến thức cần nắm

### 1. Giới hạn hàm số và các dạng vô định
- **Giới hạn một bên:** $\lim_{x\to a}f(x) = L \iff \lim_{x\to a^-}f(x) = \lim_{x\to a^+}f(x) = L$.
- **Dạng $\frac00$ với căn:** nhân liên hợp. Khi có **hai loại căn khác bậc**, thêm bớt một biểu thức trung gian (thường là đa thức bậc nhất) để tách thành hai giới hạn dễ.
- **Giới hạn lượng giác cơ bản:** $\lim_{x\to 0}\frac{\sin x}{x} = 1$. Hệ quả: $\lim_{x\to 0}\frac{1 - \cos x}{x^2} = \frac12$ (vì $1 - \cos x = 2\sin^2\frac x2$), $\lim_{x\to 0}\frac{\tan x}{x} = 1$.
- **Giới hạn từ định nghĩa đạo hàm:** $\lim_{x\to x_0}\frac{f(x) - f(x_0)}{x - x_0} = f'(x_0)$. Ví dụ $\lim_{x\to 0}\frac{e^x - 1}{x} = (e^x)'\big|_{x = 0} = 1$, $\lim_{x\to 0}\frac{\ln(1 + x)}{x} = 1$.

*Ví dụ mẫu:* $\lim_{x\to 0}\frac{1 - \cos 3x}{x^2} = \lim\frac{2\sin^2\frac{3x}{2}}{x^2} = 2\cdot\frac94 = \frac92$.

> **Mẹo kiểm tra:** với $x$ nhỏ, $\sqrt{1 + ax} \approx 1 + \frac a2x - \frac{a^2}{8}x^2$, $\sqrt[3]{1 + ax} \approx 1 + \frac a3x - \frac{a^2}{9}x^2$, $\cos ax \approx 1 - \frac{a^2}{2}x^2$. Dùng để **đoán đáp số** trước, không dùng thay lời giải.

### 2. Hàm số liên tục
- $f$ liên tục tại $x_0$ nếu $\lim_{x\to x_0}f(x) = f(x_0)$. Với hàm cho bởi nhiều công thức: cần **giới hạn trái = giới hạn phải = giá trị tại điểm**.
- Đa thức, phân thức, căn, hàm lượng giác, mũ, lôgarit liên tục trên tập xác định của chúng; tổng, hiệu, tích, thương (mẫu khác 0) của hàm liên tục là hàm liên tục.

**Định lý giá trị trung gian.** Nếu $f$ liên tục trên $[a; b]$ và $f(a)f(b) < 0$ thì phương trình $f(x) = 0$ có ít nhất một nghiệm thuộc $(a; b)$.
*Ý nghĩa hình học:* đồ thị liền nét đi từ dưới trục hoành lên trên (hoặc ngược lại) thì phải cắt trục hoành.

**Các kỹ thuật dùng định lý:**
- **Đếm nghiệm đa thức:** tìm $k$ khoảng rời nhau mà $f$ đổi dấu; nếu $k$ bằng bậc của đa thức thì phương trình có **đúng** $k$ nghiệm (đa thức bậc $n$ có không quá $n$ nghiệm).
- **Phương trình chứa tham số:** chọn điểm làm **biến mất số hạng chứa tham số** (thường là nghiệm của nhân tử đi kèm tham số), khi đó dấu của $f$ không phụ thuộc tham số.
- **Hệ số thỏa mãn một đẳng thức:** chọn các điểm $x_1, x_2$ sao cho tổ hợp $f(x_1), f(x_2)$ dùng được giả thiết, ví dụ $f(x_1) + kf(x_2) = 0$ với $k > 0$ thì $f(x_1)f(x_2) \le 0$.
- **Hàm phụ:** muốn chứng minh $f(c) = g(c)$ thì xét $h = f - g$. Muốn chứng minh $f(c) = f(c + d)$ thì xét $h(x) = f(x + d) - f(x)$.

> **Chú ý:** $f(a)f(b) \le 0$ chỉ cho nghiệm trên **đoạn** $[a; b]$; muốn nghiệm thuộc khoảng mở thì xét riêng trường hợp bằng 0.

### 3. Đạo hàm: định nghĩa và quy tắc
$$f'(x_0) = \lim_{x\to x_0}\frac{f(x) - f(x_0)}{x - x_0} = \lim_{h\to 0}\frac{f(x_0 + h) - f(x_0)}{h}.$$
- Có đạo hàm tại $x_0$ thì liên tục tại $x_0$ (điều ngược lại sai: $\lvert x\rvert$ liên tục nhưng không có đạo hàm tại 0).
- Với hàm nhiều công thức, tại điểm nối phải dùng **định nghĩa** (đạo hàm trái, đạo hàm phải), không được đạo hàm từng công thức rồi thay số khi chưa chứng minh liên tục.

**Bảng đạo hàm:** $(x^n)' = nx^{n-1}$, $(\sqrt x)' = \frac{1}{2\sqrt x}$, $(\sin x)' = \cos x$, $(\cos x)' = -\sin x$, $(\tan x)' = \frac{1}{\cos^2 x}$, $(e^x)' = e^x$, $(a^x)' = a^x\ln a$, $(\ln x)' = \frac1x$, $(\log_a x)' = \frac{1}{x\ln a}$.

**Quy tắc:** $(uv)' = u'v + uv'$, $\left(\frac uv\right)' = \frac{u'v - uv'}{v^2}$, hàm hợp $[f(u(x))]' = f'(u)\cdot u'(x)$.

### 4. Đạo hàm cấp hai, cấp $n$
- $f''(x) = (f'(x))'$; đạo hàm cấp $n$: $f^{(n)} = \left(f^{(n-1)}\right)'$.
- **Công thức cơ bản** (chứng minh bằng quy nạp):
  - $\left(\frac{1}{x + a}\right)^{(n)} = \frac{(-1)^nn!}{(x + a)^{n+1}}$;
  - $(\sin ax)^{(n)} = a^n\sin\left(ax + \frac{n\pi}{2}\right)$, $\ (\cos ax)^{(n)} = a^n\cos\left(ax + \frac{n\pi}{2}\right)$ (vì mỗi lần đạo hàm $\sin$ thì "cộng thêm góc $\frac\pi2$");
  - $(e^{ax})^{(n)} = a^ne^{ax}$.
- **Quy trình:** tách hàm thành tổng các hàm cơ bản (phân thức đơn giản, hạ bậc lượng giác), tính vài đạo hàm đầu, dự đoán và chứng minh bằng quy nạp.

*Ví dụ mẫu:* $y = \cos^2 x = \frac{1 + \cos 2x}{2}$, nên $y^{(n)} = 2^{n-1}\cos\left(2x + \frac{n\pi}{2}\right)$ với $n \ge 1$.

### 5. Đạo hàm và tổng tổ hợp
Từ $(1 + x)^n = \sum_{k=0}^nC_n^kx^k$, lấy đạo hàm hai vế:
$$n(1 + x)^{n-1} = \sum_{k=1}^nkC_n^kx^{k-1}.$$
Thay $x = 1$: $\sum_{k=1}^nkC_n^k = n2^{n-1}$. Nhân với $x$ rồi đạo hàm lần nữa sẽ được tổng có $k^2$. Thay $x = -1$, $x = 2$, ... cho các tổng đan dấu hoặc có lũy thừa.
*Vì sao được:* hai vế là cùng một đa thức, nên đạo hàm của chúng bằng nhau.

Cách kiểm tra không dùng đạo hàm: $kC_n^k = nC_{n-1}^{k-1}$ (chọn đội $k$ người rồi chọn đội trưởng, hoặc chọn đội trưởng trước).

### 6. Tiếp tuyến và ý nghĩa vật lý
- **Tiếp tuyến tại** $M(x_0; f(x_0))$: $y = f'(x_0)(x - x_0) + f(x_0)$.
- **Tiếp tuyến có hệ số góc $k$:** giải $f'(x_0) = k$ để tìm các tiếp điểm.
- **Tiếp tuyến đi qua** điểm $A(x_A; y_A)$: gọi tiếp điểm $x_0$, thay tọa độ $A$ vào phương trình tiếp tuyến, giải phương trình ẩn $x_0$. Mỗi nghiệm $x_0$ cho một tiếp tuyến. **Kể cả khi $A$ nằm trên đồ thị**, có thể có thêm tiếp tuyến tại điểm khác đi qua $A$.
- **Vật lý:** $s(t)$ là quãng đường (tọa độ) thì vận tốc tức thời $v(t) = s'(t)$, gia tốc $a(t) = v'(t) = s''(t)$. Khi $v$ đổi dấu, vật đổi chiều chuyển động; **quãng đường đi được** bằng tổng độ dài các đoạn giữa các thời điểm đổi chiều.

### 7. Sai lầm hay gặp
- Dùng quy tắc L'Hôpital, xét đơn điệu bằng đạo hàm: đó là kiến thức lớp 12 trở lên, không dùng ở đây.
- Kết luận "phương trình vô nghiệm" khi $f(a)f(b) > 0$: định lý chỉ cho chiều có nghiệm.
- Tính đạo hàm tại điểm nối của hàm nhiều công thức bằng cách thay số vào đạo hàm từng công thức.
- Nhầm "tiếp tuyến tại $A$" với "tiếp tuyến đi qua $A$".

---

## II. Bài tập vận dụng

**Bài 1.** Tính:
a) $\displaystyle\lim_{x\to 0}\frac{\sqrt{1 + 2x} - \sqrt[3]{1 + 3x}}{x^2}$;
b) $\displaystyle\lim_{x\to 0}\frac{\sqrt{1 + 2x}\cdot\sqrt[3]{1 + 3x} - 1}{x}$.

**Bài 2.** Tính:
a) $\displaystyle\lim_{x\to 0}\frac{1 - \cos x\cos 2x}{x^2}$;
b) $\displaystyle\lim_{x\to 0}\frac{1 - \cos x\cos 2x\cos 3x}{x^2}$.

**Bài 3.** Tìm $a$, $b$ để hàm số sau liên tục trên $\mathbb R$:
$$f(x) = \begin{cases}\dfrac{1 - \cos 4x}{x^2} & \text{khi } x < 0\\ a & \text{khi } x = 0\\ \dfrac{b\left(\sqrt{x + 1} - 1\right)}{x} & \text{khi } x > 0.\end{cases}$$

**Bài 4.** Chứng minh phương trình $x^5 - 5x^3 + 4x - 1 = 0$ có đúng 5 nghiệm thực.

**Bài 5.** Chứng minh với mọi $m$, phương trình $m(x - 1)^3(x^2 - 4) + x^4 - 3 = 0$ có ít nhất hai nghiệm.

**Bài 6.** Cho các số thực $a, b, c$ thỏa mãn $2a + 3b + 6c = 0$. Chứng minh phương trình $ax^2 + bx + c = 0$ có ít nhất một nghiệm thuộc khoảng $(0; 1)$.

**Bài 7.** a) Tìm $a$, $b$ để hàm số $f(x) = \begin{cases}x^2 + 1 & \text{khi } x \le 1\\ ax + b & \text{khi } x > 1\end{cases}$ có đạo hàm tại $x = 1$.
b) Cho $g(x) = x^2\sin\frac1x$ khi $x \ne 0$ và $g(0) = 0$. Chứng minh $g$ có đạo hàm tại $x = 0$ và tính $g'(0)$.

**Bài 8 (đạo hàm cấp $n$).** Tính đạo hàm cấp $n$ ($n \ge 1$) của:
a) $y = \dfrac{1}{x^2 - 3x + 2}$;
b) $y = \sin^2 x$.

**Bài 9 (tổng tổ hợp).** Với số nguyên dương $n \ge 2$, tính:
a) $S_1 = C_n^1 + 2C_n^2 + 3C_n^3 + \dots + nC_n^n$;
b) $S_2 = 1^2C_n^1 + 2^2C_n^2 + \dots + n^2C_n^n$.

**Bài 10.** Cho đồ thị $(C)$: $y = x^3 - 3x^2 + 2$ và điểm $A(2; -2)$. Viết phương trình các tiếp tuyến của $(C)$ đi qua $A$.

**Bài 11.** Cho đồ thị $(H)$: $y = \dfrac4x$. Tiếp tuyến tại điểm $M$ bất kỳ của $(H)$ cắt $Ox$, $Oy$ lần lượt tại $A$, $B$. Chứng minh $M$ là trung điểm của $AB$ và diện tích tam giác $OAB$ không đổi.

**Bài 12 (ý nghĩa vật lý).** Một chất điểm chuyển động thẳng có tọa độ $s(t) = t^3 - 6t^2 + 9t$ (mét), $t$ tính bằng giây.
a) Tính vận tốc tại thời điểm gia tốc bằng 0.
b) Tính quãng đường chất điểm đi được trong 4 giây đầu.

**Bài 13 (HSG cấp tỉnh).** Với mỗi số nguyên $n \ge 2$, chứng minh phương trình $x^n + x^{n-1} + \dots + x = 1$ có đúng một nghiệm dương $x_n$. Tính $\lim x_n$.

**Bài 14 (HSG cấp tỉnh).** Cho hàm số $f$ liên tục trên $[0; 1]$ và $f(0) = f(1)$. Chứng minh tồn tại $c \in \left[0; \frac12\right]$ sao cho $f(c) = f\left(c + \frac12\right)$.

---

## III. Lời giải chi tiết

### Bài 1
a) Thêm bớt $1 + x$ (cả hai căn đều xấp xỉ $1 + x$ khi $x$ nhỏ):
$$\frac{\sqrt{1 + 2x} - \sqrt[3]{1 + 3x}}{x^2} = \frac{\sqrt{1 + 2x} - (1 + x)}{x^2} + \frac{(1 + x) - \sqrt[3]{1 + 3x}}{x^2}.$$
- $\sqrt{1 + 2x} - (1 + x) = \dfrac{1 + 2x - (1 + x)^2}{\sqrt{1 + 2x} + 1 + x} = \dfrac{-x^2}{\sqrt{1 + 2x} + 1 + x}$, nên số hạng đầu dần tới $-\frac12$.
- Đặt $B = \sqrt[3]{1 + 3x}$: $(1 + x) - B = \dfrac{(1 + x)^3 - (1 + 3x)}{(1 + x)^2 + (1 + x)B + B^2} = \dfrac{3x^2 + x^3}{(1 + x)^2 + (1 + x)B + B^2}$, nên số hạng sau dần tới $\frac33 = 1$.

Vậy giới hạn bằng $-\frac12 + 1 = \frac12$.

b) Thêm bớt $\sqrt{1 + 2x}$:
$$\frac{\sqrt{1 + 2x}\sqrt[3]{1 + 3x} - 1}{x} = \sqrt{1 + 2x}\cdot\frac{\sqrt[3]{1 + 3x} - 1}{x} + \frac{\sqrt{1 + 2x} - 1}{x}.$$
Nhân liên hợp: $\frac{\sqrt[3]{1 + 3x} - 1}{x} = \frac{3}{B^2 + B + 1} \to 1$ và $\frac{\sqrt{1 + 2x} - 1}{x} = \frac{2}{\sqrt{1 + 2x} + 1} \to 1$. Giới hạn bằng $1\cdot 1 + 1 = 2$.

**Đáp số:** a) $\frac12$; b) $2$.

*Nhận xét:* b) chính là $g'(0)$ với $g(x) = \sqrt{1 + 2x}\sqrt[3]{1 + 3x}$, và cách thêm bớt ở trên chính là cách chứng minh quy tắc đạo hàm của tích.

### Bài 2
a) Thêm bớt $\cos x$: $1 - \cos x\cos 2x = (1 - \cos x) + \cos x(1 - \cos 2x)$. Do đó
$$\frac{1 - \cos x\cos 2x}{x^2} = \frac{1 - \cos x}{x^2} + \cos x\cdot\frac{1 - \cos 2x}{x^2} \to \frac12 + 1\cdot\frac{4}{2} = \frac52.$$
(Dùng $\frac{1 - \cos ax}{x^2} = \frac{2\sin^2\frac{ax}{2}}{x^2} \to \frac{a^2}{2}$.)

b) Tương tự: $1 - \cos x\cos 2x\cos 3x = (1 - \cos x\cos 2x) + \cos x\cos 2x(1 - \cos 3x)$, nên giới hạn bằng $\frac52 + \frac92 = 7$.

**Đáp số:** a) $\frac52$; b) $7$.

*Nhận xét:* tổng quát $\lim_{x\to 0}\frac{1 - \cos a_1x\cdots\cos a_nx}{x^2} = \frac{a_1^2 + \dots + a_n^2}{2}$ (quy nạp theo $n$).

### Bài 3
Trên mỗi khoảng $(-\infty; 0)$ và $(0; +\infty)$, $f$ là thương của các hàm liên tục với mẫu khác 0, nên liên tục. Chỉ cần xét tại $x = 0$:
- $\lim_{x\to 0^-}\dfrac{1 - \cos 4x}{x^2} = \lim\dfrac{2\sin^2 2x}{x^2} = \lim 8\left(\dfrac{\sin 2x}{2x}\right)^2 = 8$.
- $\lim_{x\to 0^+}\dfrac{b(\sqrt{x + 1} - 1)}{x} = \lim\dfrac{b}{\sqrt{x + 1} + 1} = \dfrac b2$.

$f$ liên tục tại 0 khi và chỉ khi $8 = a = \frac b2$.

**Đáp số:** $a = 8$, $b = 16$.

### Bài 4
Đặt $f(x) = x^5 - 5x^3 + 4x - 1 = x(x^2 - 1)(x^2 - 4) - 1$, liên tục trên $\mathbb R$. Tính:

| $x$ | $-2$ | $-\frac32$ | $-1$ | $0$ | $\frac12$ | $1$ | $2$ | $3$ |
|---|---|---|---|---|---|---|---|---|
| $f(x)$ | $-1$ | $\frac{73}{32}$ | $-1$ | $-1$ | $\frac{13}{32}$ | $-1$ | $-1$ | $119$ |

$f$ đổi dấu trên 5 khoảng rời nhau $\left(-2; -\frac32\right)$, $\left(-\frac32; -1\right)$, $\left(0; \frac12\right)$, $\left(\frac12; 1\right)$, $(2; 3)$, nên phương trình có ít nhất 5 nghiệm. Đa thức bậc 5 có không quá 5 nghiệm.

**Kết luận:** phương trình có đúng 5 nghiệm.

*Nhận xét:* viết $f(x) + 1 = x(x^2 - 1)(x^2 - 4)$ giúp tính nhanh: tại $x = 0, \pm1, \pm2$ thì $f = -1$, và chỉ cần chọn thêm một điểm giữa mỗi cặp nghiệm của $f + 1$.

### Bài 5
Đặt $f(x) = m(x - 1)^3(x^2 - 4) + x^4 - 3$, liên tục trên $\mathbb R$. Chọn các điểm làm số hạng chứa $m$ bằng 0:
$f(1) = 1 - 3 = -2$, $\ f(2) = 16 - 3 = 13$, $\ f(-2) = 16 - 3 = 13$.
Vì $f(-2)f(1) < 0$ và $f(1)f(2) < 0$, phương trình có nghiệm thuộc $(-2; 1)$ và nghiệm thuộc $(1; 2)$. Hai khoảng rời nhau nên đó là hai nghiệm phân biệt, với mọi $m$.

### Bài 6
Đặt $f(x) = ax^2 + bx + c$, liên tục trên $\mathbb R$. Ta tìm điểm $x_1$ để $f(x_1)$ liên hệ với $f(0) = c$ qua giả thiết. Thử $x_1 = \frac23$:
$$f\left(\tfrac23\right) = \frac{4a}{9} + \frac{2b}{3} + c = \frac{4a + 6b + 9c}{9} = \frac{2(2a + 3b + 6c) - 3c}{9} = -\frac c3.$$
Do đó $f(0)\cdot f\left(\frac23\right) = -\frac{c^2}{3} \le 0$.
- Nếu $c \ne 0$: tích âm, phương trình có nghiệm thuộc $\left(0; \frac23\right) \subset (0; 1)$.
- Nếu $c = 0$: giả thiết thành $2a + 3b = 0$. Nếu $a \ne 0$ thì $f(x) = x(ax + b)$ có nghiệm $x = -\frac ba = \frac23 \in (0; 1)$. Nếu $a = 0$ thì $b = 0$, $f \equiv 0$, mọi $x$ đều là nghiệm.

*Nhận xét:* giả thiết $2a + 3b + 6c = 0$ thực chất là $\frac a3 + \frac b2 + c = 0$. Mẹo chung: tìm điểm $x_1$ sao cho $f(x_1)$ là bội **âm** của $f(0)$ nhờ giả thiết; khi đó $f(0)f(x_1) \le 0$.

### Bài 7
a) **Liên tục tại 1:** $\lim_{x\to 1^-}f(x) = 2 = f(1)$, $\lim_{x\to 1^+}f(x) = a + b$. Cần $a + b = 2$.
**Đạo hàm trái và phải** (khi $a + b = 2$):
$$\lim_{x\to 1^-}\frac{x^2 + 1 - 2}{x - 1} = \lim(x + 1) = 2, \qquad \lim_{x\to 1^+}\frac{ax + b - 2}{x - 1} = \lim\frac{a(x - 1)}{x - 1} = a.$$
Cần $a = 2$, nên $b = 0$.

**Đáp số:** $a = 2$, $b = 0$.

b) $\dfrac{g(x) - g(0)}{x - 0} = x\sin\dfrac1x$ và $\left\lvert x\sin\dfrac1x\right\rvert \le \lvert x\rvert \to 0$. Theo nguyên lý kẹp, $g'(0) = 0$.

*Nhận xét:* với $x \ne 0$, $g'(x) = 2x\sin\frac1x - \cos\frac1x$ không có giới hạn khi $x \to 0$. Vậy không thể tính $g'(0)$ bằng cách "thay $x = 0$ vào công thức đạo hàm": phải dùng định nghĩa.

### Bài 8
a) $\dfrac{1}{x^2 - 3x + 2} = \dfrac{1}{(x - 1)(x - 2)} = \dfrac{1}{x - 2} - \dfrac{1}{x - 1}$.
**Bổ đề:** $\left(\frac{1}{x - a}\right)^{(n)} = \frac{(-1)^nn!}{(x - a)^{n+1}}$. Đúng với $n = 1$; nếu đúng với $n$ thì đạo hàm thêm một lần được $(-1)^nn!\cdot\frac{-(n + 1)}{(x - a)^{n+2}} = \frac{(-1)^{n+1}(n + 1)!}{(x - a)^{n+2}}$.
$$y^{(n)} = (-1)^nn!\left[\frac{1}{(x - 2)^{n+1}} - \frac{1}{(x - 1)^{n+1}}\right].$$

b) $y = \sin^2 x = \frac12 - \frac12\cos 2x$. Vì $(\cos 2x)' = -2\sin 2x = 2\cos\left(2x + \frac\pi2\right)$, quy nạp được $(\cos 2x)^{(n)} = 2^n\cos\left(2x + \frac{n\pi}{2}\right)$. Do đó
$$y^{(n)} = -2^{n-1}\cos\left(2x + \frac{n\pi}{2}\right) \quad (n \ge 1).$$
(Kiểm tra $n = 1$: $-\cos\left(2x + \frac\pi2\right) = \sin 2x = 2\sin x\cos x$, đúng.)

### Bài 9
Xét $P(x) = (1 + x)^n = \sum_{k=0}^nC_n^kx^k$.
a) Đạo hàm hai vế: $n(1 + x)^{n-1} = \sum_{k=1}^nkC_n^kx^{k-1}$. Thay $x = 1$: $S_1 = n\cdot 2^{n-1}$.
b) Nhân hai vế đẳng thức trên với $x$: $nx(1 + x)^{n-1} = \sum_{k=1}^nkC_n^kx^k$. Đạo hàm lần nữa:
$$n(1 + x)^{n-1} + n(n - 1)x(1 + x)^{n-2} = \sum_{k=1}^nk^2C_n^kx^{k-1}.$$
Thay $x = 1$: $S_2 = n2^{n-1} + n(n - 1)2^{n-2} = n2^{n-2}(2 + n - 1) = n(n + 1)2^{n-2}$.

**Đáp số:** $S_1 = n2^{n-1}$, $S_2 = n(n + 1)2^{n-2}$. (Kiểm tra $n = 2$: $S_2 = 1\cdot 2 + 4\cdot 1 = 6 = 2\cdot 3\cdot 1$.)

### Bài 10
$y' = 3x^2 - 6x$. Tiếp tuyến tại điểm có hoành độ $x_0$:
$$y = (3x_0^2 - 6x_0)(x - x_0) + x_0^3 - 3x_0^2 + 2.$$
Tiếp tuyến đi qua $A(2; -2)$ khi và chỉ khi
$$-2 = (3x_0^2 - 6x_0)(2 - x_0) + x_0^3 - 3x_0^2 + 2 \iff 2x_0^3 - 9x_0^2 + 12x_0 - 4 = 0 \iff (x_0 - 2)^2(2x_0 - 1) = 0.$$
- $x_0 = 2$: hệ số góc $y'(2) = 0$, tiếp tuyến $y = -2$ (tiếp tuyến tại chính $A$).
- $x_0 = \frac12$: $y'\left(\frac12\right) = \frac34 - 3 = -\frac94$, $y\left(\frac12\right) = \frac{11}{8}$, tiếp tuyến $y = -\frac94\left(x - \frac12\right) + \frac{11}{8} = -\frac94x + \frac52$.

**Đáp số:** $y = -2$ và $y = -\frac94x + \frac52$.

*Nhận xét:* $A$ nằm trên $(C)$ nhưng vẫn có **hai** tiếp tuyến đi qua $A$. Nghiệm kép $x_0 = 2$ ứng với tiếp tuyến tại $A$; đây là lí do phải giải phương trình theo $x_0$, không chỉ viết tiếp tuyến tại $A$.

### Bài 11
Gọi $M\left(m; \frac4m\right)$ với $m \ne 0$. $y' = -\frac{4}{x^2}$, tiếp tuyến tại $M$: $y = -\frac{4}{m^2}(x - m) + \frac4m$.
- Cho $y = 0$: $x - m = m$, nên $A(2m; 0)$.
- Cho $x = 0$: $y = \frac4m + \frac4m = \frac8m$, nên $B\left(0; \frac8m\right)$.

Trung điểm $AB$ là $\left(m; \frac4m\right) = M$. Diện tích $S_{OAB} = \frac12\lvert 2m\rvert\cdot\left\lvert\frac8m\right\rvert = 8$, không phụ thuộc $m$.

### Bài 12
$v(t) = s'(t) = 3t^2 - 12t + 9 = 3(t - 1)(t - 3)$, $\ a(t) = v'(t) = 6t - 12$.
a) $a(t) = 0 \iff t = 2$. Khi đó $v(2) = 12 - 24 + 9 = -3$ (m/s): chất điểm đang chuyển động theo chiều âm với tốc độ $3$ m/s.
b) $v$ đổi dấu tại $t = 1$ và $t = 3$: chất điểm đổi chiều hai lần. Ta có $s(0) = 0$, $s(1) = 4$, $s(3) = 0$, $s(4) = 4$. Quãng đường đi được:
$$\lvert s(1) - s(0)\rvert + \lvert s(3) - s(1)\rvert + \lvert s(4) - s(3)\rvert = 4 + 4 + 4 = 12 \text{ (m)}.$$

**Đáp số:** a) $-3$ m/s; b) $12$ m.

*Nhận xét:* $s(4) - s(0) = 4$ chỉ là **độ dời**, không phải quãng đường. Đây là bẫy hay gặp.

### Bài 13
Đặt $f_n(x) = x^n + x^{n-1} + \dots + x - 1$.
**Duy nhất:** trên $(0; +\infty)$ mỗi hàm $x^k$ đồng biến, nên $f_n$ đồng biến; phương trình có không quá một nghiệm dương.
**Tồn tại:** $f_n$ liên tục, $f_n(0) = -1 < 0$, $f_n(1) = n - 1 > 0$, nên có nghiệm $x_n \in (0; 1)$.
**Chặn $x_n$:**
- $f_n\left(\frac12\right) = \frac12 + \dots + \frac{1}{2^n} - 1 = -\frac{1}{2^n} < 0$, nên $x_n > \frac12$.
- $f_n\left(\frac23\right) = 2\left(1 - \left(\frac23\right)^n\right) - 1 = 1 - 2\left(\frac23\right)^n > 0$ với $n \ge 2$ (vì $\left(\frac23\right)^2 = \frac49 < \frac12$), nên $x_n < \frac23$.

**Tính giới hạn:** vì $x_n \ne 1$, tổng cấp số nhân cho $\frac{x_n(1 - x_n^n)}{1 - x_n} = 1 \iff x_n - x_n^{n+1} = 1 - x_n \iff 2x_n - 1 = x_n^{n+1}$. Do đó
$$0 < 2x_n - 1 = x_n^{n+1} < \left(\tfrac23\right)^{n+1} \to 0.$$
Theo nguyên lý kẹp, $\lim(2x_n - 1) = 0$.

**Đáp số:** $\lim x_n = \frac12$.

*Nhận xét:* chặn $x_n$ bởi một số **cố định** nhỏ hơn 1 (ở đây $\frac23$) là bước then chốt; chỉ biết $x_n < 1$ thì chưa kết luận được $x_n^{n+1} \to 0$.

### Bài 14
Xét $h(x) = f\left(x + \frac12\right) - f(x)$ trên $\left[0; \frac12\right]$; $h$ liên tục vì $f$ liên tục trên $[0; 1]$. Ta có
$$h(0) + h\left(\tfrac12\right) = \left[f\left(\tfrac12\right) - f(0)\right] + \left[f(1) - f\left(\tfrac12\right)\right] = f(1) - f(0) = 0.$$
- Nếu $h(0) = 0$ thì chọn $c = 0$.
- Nếu $h(0) \ne 0$ thì $h(0)$ và $h\left(\frac12\right) = -h(0)$ trái dấu, nên có $c \in \left(0; \frac12\right)$ với $h(c) = 0$.

Trong mọi trường hợp có $c \in \left[0; \frac12\right]$ với $f(c) = f\left(c + \frac12\right)$.

*Nhận xét (ý nghĩa thực tế):* một người đi bộ quay về điểm xuất phát sau một giờ thì có một khoảng nửa giờ mà độ cao lúc đầu và lúc cuối bằng nhau. Kết quả vẫn đúng khi thay $\frac12$ bởi $\frac1n$: xét $h(x) = f\left(x + \frac1n\right) - f(x)$, tổng $h(0) + h\left(\frac1n\right) + \dots + h\left(\frac{n-1}{n}\right) = 0$ nên có hai số hạng trái dấu (hoặc một số hạng bằng 0).

# Thẻ ghi nhớ Giá trị lượng giác của góc lượng giác và công thức lượng giác

## Góc lượng giác

### Đổi giữa độ và radian thế nào?
$\pi$ rad $= 180^\circ$. Nhân với $\frac{\pi}{180}$ để đổi độ sang radian, nhân với $\frac{180}{\pi}$ để đổi radian sang độ.

Ví dụ: $150^\circ = \frac{5\pi}{6}$; $1$ rad $\approx 57^\circ 18'$.

### Công thức độ dài cung tròn?
$l = R\alpha$, với $\alpha$ là số đo cung tính bằng **radian**.

### Các góc lượng giác cùng tia đầu, tia cuối có số đo liên hệ ra sao?
Hơn kém nhau một bội của $2\pi$: $\alpha + k2\pi$ (hay $a^\circ + k360^\circ$), $k \in \mathbb{Z}$.

## Giá trị lượng giác

### Trên đường tròn lượng giác, $\cos\alpha$ và $\sin\alpha$ là gì?
Nếu $M$ là điểm cuối của góc $\alpha$ thì $\cos\alpha$ là **hoành độ**, $\sin\alpha$ là **tung độ** của $M$. Do đó $-1 \le \sin\alpha, \cos\alpha \le 1$.

### Dấu của các giá trị lượng giác theo góc phần tư?
"Nhất cả, nhì sin, tam tan, tứ cos": góc phần tư I tất cả dương; II chỉ $\sin$ dương; III chỉ $\tan$, $\cot$ dương; IV chỉ $\cos$ dương.

### $\sin$, $\cos$, $\tan$ của $\frac{\pi}{6}$, $\frac{\pi}{4}$, $\frac{\pi}{3}$?
$\frac{\pi}{6}$: $\frac12$, $\frac{\sqrt3}{2}$, $\frac{\sqrt3}{3}$. $\quad\frac{\pi}{4}$: $\frac{\sqrt2}{2}$, $\frac{\sqrt2}{2}$, $1$. $\quad\frac{\pi}{3}$: $\frac{\sqrt3}{2}$, $\frac12$, $\sqrt3$.

### Chu kỳ lặp lại của $\sin$, $\cos$ và của $\tan$, $\cot$?
$\sin$, $\cos$ lặp lại sau $2\pi$; $\tan$, $\cot$ lặp lại sau $\pi$.

## Hệ thức cơ bản

### Bốn hệ thức lượng giác cơ bản?
$\sin^2\alpha + \cos^2\alpha = 1$; $\;1 + \tan^2\alpha = \frac{1}{\cos^2\alpha}$; $\;1 + \cot^2\alpha = \frac{1}{\sin^2\alpha}$; $\;\tan\alpha\cot\alpha = 1$.

*Vì sao:* $OM^2 = \cos^2\alpha + \sin^2\alpha = 1$.

### Biết $\sin\alpha$, tính $\cos\alpha$ cần chú ý gì?
$\cos\alpha = \pm\sqrt{1 - \sin^2\alpha}$: phải **xét dấu** theo góc phần tư chứa $\alpha$ trước khi chọn.

### Biết $\tan\alpha$, tính nhanh biểu thức $\frac{a\sin\alpha + b\cos\alpha}{c\sin\alpha + d\cos\alpha}$ thế nào?
Chia tử và mẫu cho $\cos\alpha$: được $\frac{a\tan\alpha + b}{c\tan\alpha + d}$. Biểu thức bậc hai thì chia cho $\cos^2\alpha$ (thêm mẫu $\sin^2\alpha + \cos^2\alpha$ nếu cần).

## Góc liên quan đặc biệt

### "Cos đối, sin bù, phụ chéo" nghĩa là gì?
$\cos(-\alpha) = \cos\alpha$; $\;\sin(\pi - \alpha) = \sin\alpha$; $\;\sin\left(\frac{\pi}{2} - \alpha\right) = \cos\alpha$, $\cos\left(\frac{\pi}{2} - \alpha\right) = \sin\alpha$. Các giá trị còn lại thì đổi dấu (với góc đối, bù).

### Hai góc hơn kém $\pi$ có giá trị lượng giác liên hệ thế nào?
$\sin(\pi + \alpha) = -\sin\alpha$, $\cos(\pi + \alpha) = -\cos\alpha$, nhưng $\tan(\pi + \alpha) = \tan\alpha$, $\cot(\pi + \alpha) = \cot\alpha$.

## Công thức cộng và hệ quả

### Công thức cộng cho $\cos(a \pm b)$ và $\sin(a \pm b)$?
$\cos(a \pm b) = \cos a\cos b \mp \sin a\sin b$; $\;\sin(a \pm b) = \sin a\cos b \pm \cos a\sin b$.

Mẹo: "cos thì cos cos, sin sin, đổi dấu"; "sin thì sin cos, cos sin, giữ dấu".

### Công thức cộng cho $\tan(a \pm b)$?
$\tan(a \pm b) = \frac{\tan a \pm \tan b}{1 \mp \tan a\tan b}$.

### Ba dạng của $\cos 2a$?
$\cos 2a = \cos^2 a - \sin^2 a = 2\cos^2 a - 1 = 1 - 2\sin^2 a$.

### Công thức hạ bậc?
$\cos^2 a = \frac{1 + \cos 2a}{2}$, $\;\sin^2 a = \frac{1 - \cos 2a}{2}$.

### $a\sin x + b\cos x$ viết gọn thành gì? Nằm trong khoảng nào?
$a\sin x + b\cos x = \sqrt{a^2 + b^2}\sin(x + \varphi)$ với $\cos\varphi = \frac{a}{\sqrt{a^2 + b^2}}$, $\sin\varphi = \frac{b}{\sqrt{a^2 + b^2}}$. Do đó nó thuộc đoạn $\left[-\sqrt{a^2 + b^2}; \sqrt{a^2 + b^2}\right]$.

Ví dụ: $3\sin x + 4\cos x \in [-5; 5]$.

## Tích và tổng

### Công thức biến tổng $\sin u + \sin v$ và $\cos u + \cos v$ thành tích?
$\sin u + \sin v = 2\sin\frac{u + v}{2}\cos\frac{u - v}{2}$; $\;\cos u + \cos v = 2\cos\frac{u + v}{2}\cos\frac{u - v}{2}$.

### $\cos u - \cos v$ bằng gì? Bẫy ở đâu?
$\cos u - \cos v = -2\sin\frac{u + v}{2}\sin\frac{u - v}{2}$. Bẫy: quên dấu trừ ở đầu.

### Biến tích $\cos a\cos b$, $\sin a\sin b$ thành tổng?
$\cos a\cos b = \frac12[\cos(a - b) + \cos(a + b)]$; $\;\sin a\sin b = \frac12[\cos(a - b) - \cos(a + b)]$.

### Tính tích $\cos a\cos 2a\cos 4a$ bằng mẹo nào?
Nhân thêm $\sin a$ rồi dùng $\sin x\cos x = \frac12\sin 2x$ liên tiếp: $\sin a\cos a\cos 2a\cos 4a = \frac18\sin 8a$.

### Trong tam giác $ABC$, $\sin\frac{A + B}{2}$ bằng gì?
$\sin\frac{A + B}{2} = \cos\frac C2$ và $\cos\frac{A + B}{2} = \sin\frac C2$, vì $\frac{A + B}{2} = \frac{\pi}{2} - \frac C2$. Tương tự $\sin(A + B) = \sin C$, $\cos(A + B) = -\cos C$.

### Sai lầm hay gặp với công thức lượng giác?
- $\sin(a + b) \ne \sin a + \sin b$.
- $\sin 2a = 2\sin a\cos a$, không phải $2\sin a$.
- Khi tính giá trị của $\frac{\alpha}{2}$, xét dấu theo khoảng chứa $\frac{\alpha}{2}$, không theo $\alpha$.

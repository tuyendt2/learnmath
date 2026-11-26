# Thẻ ghi nhớ Lượng giác nâng cao

## Công thức

### Công thức nào là gốc của mọi công thức lượng giác, và vì sao nó đúng?
$\cos(a - b) = \cos a\cos b + \sin a\sin b$.

*Vì sao:* tích vô hướng của hai vectơ đơn vị $(\cos a; \sin a)$ và $(\cos b; \sin b)$ vừa bằng $\cos(a - b)$, vừa bằng $\cos a\cos b + \sin a\sin b$.

### Công thức nhân ba của $\sin$ và $\cos$?
$\sin 3a = 3\sin a - 4\sin^3 a$, $\quad\cos 3a = 4\cos^3 a - 3\cos a$.

### $\cos u + \cos v$ và $\cos u - \cos v$ biến thành tích như thế nào?
$\cos u + \cos v = 2\cos\frac{u+v}{2}\cos\frac{u-v}{2}$, $\quad\cos u - \cos v = -2\sin\frac{u+v}{2}\sin\frac{u-v}{2}$.

### $\sin u + \sin v$ và $\sin u - \sin v$ biến thành tích như thế nào?
$\sin u + \sin v = 2\sin\frac{u+v}{2}\cos\frac{u-v}{2}$, $\quad\sin u - \sin v = 2\cos\frac{u+v}{2}\sin\frac{u-v}{2}$.

### Viết $\sin x + \cos x$ gọn thành một hàm $\sin$?
$\sin x + \cos x = \sqrt2\sin\left(x + \frac\pi4\right)$, nên $\lvert\sin x + \cos x\rvert \le \sqrt2$.

### Biểu diễn $\sin x$, $\cos x$ theo $t = \tan\frac x2$?
$\sin x = \frac{2t}{1 + t^2}$, $\cos x = \frac{1 - t^2}{1 + t^2}$ (cần $\cos\frac x2 \ne 0$, tức $x \ne \pi + k2\pi$).

## Phương trình lượng giác

### Điều kiện có nghiệm của $a\sin x + b\cos x = c$?
$a^2 + b^2 \ge c^2$.

*Vì sao:* theo Cauchy-Schwarz, $\lvert a\sin x + b\cos x\rvert \le \sqrt{a^2 + b^2}$, và mọi giá trị trong đoạn đó đều đạt được.

### Phương trình đối xứng theo $\sin x$, $\cos x$ giải bằng ẩn phụ nào?
$t = \sin x + \cos x$, $\lvert t\rvert \le \sqrt2$, $\sin x\cos x = \frac{t^2 - 1}{2}$.
Nếu có $\sin x - \cos x$ thì $\sin x\cos x = \frac{1 - t^2}{2}$.

### Giải phương trình đẳng cấp bậc hai theo $\sin x$, $\cos x$ thế nào?
Xét riêng $\cos x = 0$. Khi $\cos x \ne 0$, chia hai vế cho $\cos^2 x$ (viết hằng số $d = d(\sin^2 x + \cos^2 x)$) để được phương trình bậc hai theo $\tan x$.

### Khi nào nên ghép các số hạng $\cos$ thành cặp?
Khi các cặp có **cùng tổng góc** hoặc **cùng hiệu góc**, ví dụ $(x; 4x)$ và $(2x; 3x)$ cùng tổng $5x$. Tổng thành tích sẽ cho nhân tử chung.

### Gặp phương trình chứa $x + \alpha$ và $3x$ thì làm gì?
Đặt $t = x + \alpha$, viết $3x = 3t - 3\alpha$ để dùng công thức nhân ba theo $t$.

### Phương trình $\sin^m x + \cos^n x = 1$ với $m, n \ge 3$ giải thế nào?
Đánh giá $\sin^m x \le \sin^2 x$, $\cos^n x \le \cos^2 x$. Dấu "=" khi $\sin x, \cos x$ chỉ nhận giá trị $0$ hoặc $\pm 1$ (chú ý dấu khi số mũ lẻ).

### Hai cách lọc nghiệm khi có điều kiện $\cos x \ne 0$?
1. Biểu diễn các họ nghiệm trên đường tròn lượng giác, gạch bỏ điểm vi phạm.
2. Giải phương trình nghiệm nguyên, như $\frac\pi6 + \frac{k\pi}{3} = \frac\pi2 + m\pi \iff k = 3m + 1$.

### Tìm GTLN, GTNN của $y = \frac{a_1\sin x + b_1\cos x + c_1}{a_2\sin x + b_2\cos x + c_2}$ thế nào?
Phương pháp miền giá trị: nhân chéo được $(a_1 - ya_2)\sin x + (b_1 - yb_2)\cos x = yc_2 - c_1$, rồi dùng điều kiện có nghiệm $a^2 + b^2 \ge c^2$ để có bất phương trình bậc hai theo $y$.

## Tổng và tích

### Tính tổng $\cos a + \cos(a + d) + \dots + \cos(a + nd)$ bằng mẹo nào?
Nhân với $2\sin\frac d2$: mỗi số hạng thành hiệu hai $\sin$, tổng triệt tiêu.

### $\cos x\cos 2x\cos 4x\cdots\cos 2^{n-1}x = \;?$
$\frac{\sin 2^n x}{2^n\sin x}$ (nhân với $\sin x$ rồi nhân đôi liên tiếp).

### $\tan x\tan(60^\circ - x)\tan(60^\circ + x) = \;?$
$\tan 3x$. Ví dụ: $\tan 20^\circ\tan 40^\circ\tan 80^\circ = \tan 60^\circ = \sqrt3$.

### $\tan(k + 1)x - \tan kx = \;?$
$\frac{\sin x}{\cos kx\cos(k + 1)x}$. Dùng để tính tổng $\sum\frac{1}{\cos kx\cos(k+1)x}$.

## Tam giác

### $\sin A + \sin B + \sin C$ trong tam giác bằng gì?
$4\cos\frac A2\cos\frac B2\cos\frac C2$.

### $\cos A + \cos B + \cos C$ trong tam giác bằng gì?
$1 + 4\sin\frac A2\sin\frac B2\sin\frac C2$.

### Hệ thức "tổng bằng tích" của $\tan$ trong tam giác?
Tam giác không vuông: $\tan A + \tan B + \tan C = \tan A\tan B\tan C$.

*Vì sao:* $\tan C = -\tan(A + B) = -\frac{\tan A + \tan B}{1 - \tan A\tan B}$, quy đồng.

### $\cos^2 A + \cos^2 B + \cos^2 C$ trong tam giác bằng gì?
$1 - 2\cos A\cos B\cos C$. Do đó tổng này bằng 1 khi và chỉ khi tam giác vuông.

### Chứng minh $\cos A + \cos B + \cos C \le \frac32$ theo cách nào?
$\cos A + \cos B \le 2\sin\frac C2$ (bỏ $\cos\frac{A - B}{2} \le 1$), rồi $2s + 1 - 2s^2 \le \frac32$ với $s = \sin\frac C2$. Dấu "=" khi tam giác đều.

## Bẫy

### Vì sao không được chia hai vế cho $\cos x$ một cách tùy tiện?
Vì có thể làm mất nghiệm $\cos x = 0$. Hãy đặt nhân tử chung, hoặc xét riêng trường hợp $\cos x = 0$.

### Đặt $t = \sin x + \cos x$ thì hay quên điều gì?
Điều kiện $\lvert t\rvert \le \sqrt2$. Nghiệm $t$ ngoài đoạn $\left[-\sqrt2; \sqrt2\right]$ phải loại.

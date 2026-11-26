# Thẻ ghi nhớ Hàm số lượng giác và phương trình lượng giác

## Tính chất hàm số

### Hàm số chẵn, hàm số lẻ được định nghĩa thế nào?
Tập xác định $D$ đối xứng ($x \in D \Rightarrow -x \in D$) và: chẵn nếu $f(-x) = f(x)$; lẻ nếu $f(-x) = -f(x)$. Đồ thị hàm chẵn đối xứng qua $Oy$, hàm lẻ đối xứng qua gốc $O$.

### Làm sao chứng minh một hàm số không chẵn, không lẻ?
Chỉ ra một $x_0$ với $f(-x_0) \ne f(x_0)$ và $f(-x_0) \ne -f(x_0)$. Ví dụ $y = \sin x + \cos x$ tại $x_0 = \frac{\pi}{4}$.

### Bốn hàm số lượng giác, hàm nào chẵn, hàm nào lẻ?
Chỉ $y = \cos x$ là hàm chẵn; $y = \sin x$, $y = \tan x$, $y = \cot x$ là hàm lẻ.

### Tập xác định của $y = \tan x$ và $y = \cot x$?
$\tan x$: $x \ne \frac{\pi}{2} + k\pi$ (cần $\cos x \ne 0$). $\;\cot x$: $x \ne k\pi$ (cần $\sin x \ne 0$).

### Chu kỳ của $y = \sin(ax + b)$ và $y = \tan(ax + b)$?
$\sin(ax + b)$, $\cos(ax + b)$: chu kỳ $\frac{2\pi}{\lvert a\rvert}$. $\;\tan(ax + b)$, $\cot(ax + b)$: chu kỳ $\frac{\pi}{\lvert a\rvert}$.

### $y = \sin x$ đồng biến, nghịch biến trên những khoảng nào?
Đồng biến trên $\left(-\frac{\pi}{2} + k2\pi; \frac{\pi}{2} + k2\pi\right)$, nghịch biến trên $\left(\frac{\pi}{2} + k2\pi; \frac{3\pi}{2} + k2\pi\right)$.

### $y = \cos x$ đồng biến, nghịch biến trên những khoảng nào?
Đồng biến trên $(-\pi + k2\pi; k2\pi)$, nghịch biến trên $(k2\pi; \pi + k2\pi)$.

### Tìm giá trị lớn nhất, nhỏ nhất của $y = a + b\sin x$ thế nào?
Dùng $-1 \le \sin x \le 1$, nhân với $b$ (đổi chiều nếu $b < 0$) rồi cộng $a$. Kết quả: $y$ thuộc đoạn từ $a - \lvert b\rvert$ đến $a + \lvert b\rvert$.

## Phương trình cơ bản

### Công thức nghiệm của $\sin x = \sin\alpha$?
$x = \alpha + k2\pi$ hoặc $x = \pi - \alpha + k2\pi$, $k \in \mathbb{Z}$.

### Công thức nghiệm của $\cos x = \cos\alpha$?
$x = \alpha + k2\pi$ hoặc $x = -\alpha + k2\pi$, $k \in \mathbb{Z}$.

### Công thức nghiệm của $\tan x = \tan\alpha$ và $\cot x = \cot\alpha$?
$x = \alpha + k\pi$ (chu kỳ $\pi$), kèm điều kiện xác định.

### Khi nào $\sin x = m$ (hoặc $\cos x = m$) vô nghiệm?
Khi $\lvert m\rvert > 1$. Ví dụ $\cos x = -\frac32$ vô nghiệm.

### Nghiệm của $\sin x = 0$, $\sin x = 1$, $\cos x = 0$, $\cos x = -1$?
$\sin x = 0 \iff x = k\pi$; $\;\sin x = 1 \iff x = \frac{\pi}{2} + k2\pi$; $\;\cos x = 0 \iff x = \frac{\pi}{2} + k\pi$; $\;\cos x = -1 \iff x = \pi + k2\pi$.

### Đề cho góc bằng độ thì viết nghiệm thế nào?
Giữ đơn vị độ: $\sin x = \sin a^\circ \iff x = a^\circ + k360^\circ$ hoặc $x = 180^\circ - a^\circ + k360^\circ$. Không viết lẫn $30^\circ + k\pi$.

## Phương trình quy về cơ bản

### Gặp $\sin u = \cos v$ hoặc $\cos u = -\cos v$ thì biến đổi thế nào?
$\cos v = \sin\left(\frac{\pi}{2} - v\right)$; $\;-\cos v = \cos(\pi - v)$; $\;-\sin v = \sin(-v)$. Đưa về cùng một hàm rồi dùng công thức nghiệm.

### Giải phương trình bậc hai theo $\sin x$ cần nhớ gì?
Đặt $t = \sin x$ với điều kiện $-1 \le t \le 1$, loại nghiệm $t$ ngoài đoạn. Nếu có $\cos 2x$ thì thay $\cos 2x = 1 - 2\sin^2 x$.

### Cách giải $a\sin x + b\cos x = c$? Điều kiện có nghiệm?
Chia hai vế cho $\sqrt{a^2 + b^2}$, đưa về $\sin(x + \varphi) = \frac{c}{\sqrt{a^2 + b^2}}$. Có nghiệm khi và chỉ khi $a^2 + b^2 \ge c^2$.

### $\tan x + \cot x$ rút gọn thành gì?
$\tan x + \cot x = \frac{2}{\sin 2x}$ (với $\sin 2x \ne 0$).

### Đếm nghiệm của phương trình lượng giác trên một đoạn thế nào?
Với mỗi họ $x = \alpha + k\cdot T$, giải bất phương trình $a \le \alpha + kT \le b$ theo $k$, rồi đếm các số nguyên $k$.

### Những lỗi hay gặp khi giải phương trình lượng giác?
Quên một họ nghiệm của $\sin x = m$; quên điều kiện của $\tan$, $\cot$, mẫu số; chia hai vế cho $\sin x$ hay $\cos x$ làm mất nghiệm; trộn độ với radian.

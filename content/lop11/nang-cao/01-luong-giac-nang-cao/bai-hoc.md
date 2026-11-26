# Chủ đề 1. Lượng giác nâng cao

> Câu lượng giác gần như luôn có trong đề HSG lớp 11: một phương trình lượng giác cần biến đổi khéo, hoặc một hệ thức, bất đẳng thức trong tam giác. Chìa khóa là thuộc lòng công thức và biết **nhìn ra cấu trúc** (tổng thành tích, ẩn phụ, đánh giá) trước khi khai triển.

## I. Kiến thức cần nắm

### 1. Hệ thống công thức và vì sao đúng
**Công thức cộng** (gốc của mọi công thức khác):
$$\cos(a - b) = \cos a\cos b + \sin a\sin b.$$
*Vì sao:* lấy hai điểm $M(\cos a; \sin a)$, $N(\cos b; \sin b)$ trên đường tròn lượng giác. Tích vô hướng $\overrightarrow{OM}\cdot\overrightarrow{ON} = \cos(a - b)$ (góc giữa hai vectơ đơn vị), đồng thời bằng $\cos a\cos b + \sin a\sin b$ theo tọa độ. Thay $b$ bởi $-b$, thay $a$ bởi $\frac\pi2 - a$ ta được các công thức còn lại:
$\cos(a + b) = \cos a\cos b - \sin a\sin b$, $\ \sin(a \pm b) = \sin a\cos b \pm \cos a\sin b$, $\ \tan(a \pm b) = \frac{\tan a \pm \tan b}{1 \mp \tan a\tan b}$.

**Nhân đôi, nhân ba, hạ bậc** (cho $b = a$, rồi $b = 2a$):
- $\sin 2a = 2\sin a\cos a$, $\ \cos 2a = \cos^2 a - \sin^2 a = 2\cos^2 a - 1 = 1 - 2\sin^2 a$.
- $\sin 3a = 3\sin a - 4\sin^3 a$, $\ \cos 3a = 4\cos^3 a - 3\cos a$.
- $\cos^2 a = \frac{1 + \cos 2a}{2}$, $\ \sin^2 a = \frac{1 - \cos 2a}{2}$.

**Tích thành tổng** (cộng, trừ hai công thức cộng):
$\cos a\cos b = \frac12[\cos(a - b) + \cos(a + b)]$, $\ \sin a\sin b = \frac12[\cos(a - b) - \cos(a + b)]$, $\ \sin a\cos b = \frac12[\sin(a - b) + \sin(a + b)]$.

**Tổng thành tích** (đặt $a = \frac{u + v}{2}$, $b = \frac{u - v}{2}$ trong công thức trên):
$$\cos u + \cos v = 2\cos\tfrac{u + v}{2}\cos\tfrac{u - v}{2}, \qquad \cos u - \cos v = -2\sin\tfrac{u + v}{2}\sin\tfrac{u - v}{2},$$
$$\sin u + \sin v = 2\sin\tfrac{u + v}{2}\cos\tfrac{u - v}{2}, \qquad \sin u - \sin v = 2\cos\tfrac{u + v}{2}\sin\tfrac{u - v}{2}.$$

**Hai đẳng thức hay dùng:**
- $\sin x + \cos x = \sqrt2\sin\left(x + \frac\pi4\right)$; $\ \sin x - \cos x = \sqrt2\sin\left(x - \frac\pi4\right)$.
- Với $t = \tan\frac x2$: $\sin x = \frac{2t}{1 + t^2}$, $\cos x = \frac{1 - t^2}{1 + t^2}$ (khi $\cos\frac x2 \ne 0$).

### 2. Phương trình lượng giác: các dạng chính
**Phương trình cơ bản.** $\sin x = \sin\alpha \iff x = \alpha + k2\pi$ hoặc $x = \pi - \alpha + k2\pi$; $\ \cos x = \cos\alpha \iff x = \pm\alpha + k2\pi$; $\ \tan x = \tan\alpha \iff x = \alpha + k\pi$ (với điều kiện $\cos x \ne 0$).

**a) Phương trình $a\sin x + b\cos x = c$** ($a^2 + b^2 > 0$). Chia hai vế cho $\sqrt{a^2 + b^2}$ rồi đưa về $\sin(x + \varphi) = \frac{c}{\sqrt{a^2 + b^2}}$.
- **Điều kiện có nghiệm:** $a^2 + b^2 \ge c^2$.
- *Vì sao:* theo Cauchy-Schwarz, $(a\sin x + b\cos x)^2 \le (a^2 + b^2)(\sin^2 x + \cos^2 x) = a^2 + b^2$, nên vế trái chạy trên đúng đoạn $\left[-\sqrt{a^2 + b^2}; \sqrt{a^2 + b^2}\right]$.
- *Ứng dụng:* tìm giá trị lớn nhất, nhỏ nhất của $y = \frac{a_1\sin x + b_1\cos x + c_1}{a_2\sin x + b_2\cos x + c_2}$: chuyển thành phương trình ẩn $x$ tham số $y$, rồi dùng điều kiện có nghiệm.

**b) Phương trình đẳng cấp** $a\sin^2 x + b\sin x\cos x + c\cos^2 x = d$: xét $\cos x = 0$ riêng, rồi chia cho $\cos^2 x$, thay $d = d(\sin^2 x + \cos^2 x)$ để được phương trình bậc hai theo $\tan x$.

**c) Phương trình đối xứng** theo $\sin x$ và $\cos x$: đặt $t = \sin x + \cos x = \sqrt2\sin\left(x + \frac\pi4\right)$, $\lvert t\rvert \le \sqrt2$, khi đó $\sin x\cos x = \frac{t^2 - 1}{2}$. Với $\sin x - \cos x$ thì $\sin x\cos x = \frac{1 - t^2}{2}$.

**d) Đưa về phương trình tích.** Dùng tổng thành tích, ghép cặp các số hạng có **cùng tổng góc** hoặc **cùng hiệu góc**, hoặc tìm nhân tử chung như $\sin x + \cos x$, $1 + 2\cos x$, $\cos x - \sin x$ (chú ý $\cos 2x = (\cos x - \sin x)(\cos x + \sin x)$).

**e) Đặt ẩn phụ theo góc.** Khi các góc có dạng $x + \alpha$ và $3x$, đặt $t = x + \alpha$ để dùng công thức nhân ba.

**f) Đánh giá hai vế.** Dùng $\lvert\sin x\rvert \le 1$, $\lvert\cos x\rvert \le 1$; ví dụ $\sin^m x \le \sin^2 x$ khi $m \ge 2$ (vì $\lvert\sin x\rvert \le 1$). Phương trình $A = B$ với $A \le M \le B$ tương đương hệ $A = M$, $B = M$.

*Ví dụ mẫu:* giải $\sin x + \sin 3x = \cos x + \cos 3x$. Tổng thành tích: $2\sin 2x\cos x = 2\cos 2x\cos x$, nên $\cos x = 0$ hoặc $\tan 2x = 1$. Nghiệm: $x = \frac\pi2 + k\pi$, $x = \frac\pi8 + \frac{k\pi}{2}$.

### 3. Phương trình có điều kiện và lọc nghiệm
Phương trình chứa $\tan$, $\cot$, mẫu số, căn phải **đặt điều kiện trước** và **lọc nghiệm sau**. Hai cách lọc:
- **Biểu diễn trên đường tròn lượng giác:** họ $x = \alpha + \frac{k2\pi}{n}$ cho $n$ điểm cách đều; gạch bỏ các điểm vi phạm điều kiện.
- **Giải phương trình nghiệm nguyên:** nghiệm $x = \frac\pi6 + \frac{k\pi}{3}$ vi phạm $\cos x \ne 0$ khi $\frac\pi6 + \frac{k\pi}{3} = \frac\pi2 + m\pi \iff k = 1 + 3m$. Vậy chỉ giữ $k \not\equiv 1 \pmod 3$.

*Ví dụ mẫu:* $\tan 3x = \tan x$. Điều kiện $\cos x \ne 0$, $\cos 3x \ne 0$. Ta có $3x = x + k\pi$, tức $x = \frac{k\pi}{2}$. Với $k$ lẻ thì $\cos x = 0$, loại. Nghiệm: $x = m\pi$.

### 4. Tính tổng và tích lượng giác
- **Tổng $\cos$ cách đều:** nhân với $2\sin\frac d2$ ($d$ là công sai của góc), mỗi số hạng thành hiệu hai $\sin$ rồi triệt tiêu:
  $2\sin\frac d2\cos(a + kd) = \sin\left(a + kd + \frac d2\right) - \sin\left(a + kd - \frac d2\right)$.
- **Tích $\cos$ gấp đôi góc:** nhân với $\sin x$ và dùng $2\sin x\cos x = \sin 2x$ liên tiếp:
  $\cos x\cos 2x\cos 4x\cdots\cos 2^{n-1}x = \frac{\sin 2^n x}{2^n\sin x}$.
- **Tổng sai phân:** viết số hạng thành hiệu $f(k + 1) - f(k)$, chẳng hạn $\tan(k + 1)x - \tan kx = \frac{\sin x}{\cos kx\cos(k + 1)x}$ (quy đồng và dùng $\sin(a - b)$).

*Ví dụ mẫu:* $\cos\frac{2\pi}{5} + \cos\frac{4\pi}{5}$. Nhân với $2\sin\frac\pi5$: $\left(\sin\frac{3\pi}{5} - \sin\frac\pi5\right) + \left(\sin\pi - \sin\frac{3\pi}{5}\right) = -\sin\frac\pi5$. Vậy tổng bằng $-\frac12$.

### 5. Hệ thức lượng giác trong tam giác
Trong tam giác $ABC$: $A + B + C = \pi$, nên $\sin(A + B) = \sin C$, $\cos(A + B) = -\cos C$, $\sin\frac{A + B}{2} = \cos\frac C2$.

| Hệ thức | Chứng minh nhanh |
|---|---|
| $\sin A + \sin B + \sin C = 4\cos\frac A2\cos\frac B2\cos\frac C2$ | $\sin A + \sin B = 2\cos\frac C2\cos\frac{A - B}{2}$, $\sin C = 2\cos\frac C2\cos\frac{A + B}{2}$, cộng rồi dùng tổng thành tích |
| $\cos A + \cos B + \cos C = 1 + 4\sin\frac A2\sin\frac B2\sin\frac C2$ | Tương tự, với $\cos C = 1 - 2\sin^2\frac C2$ |
| $\tan A + \tan B + \tan C = \tan A\tan B\tan C$ (tam giác không vuông) | Từ $\tan(A + B) = -\tan C$, quy đồng |
| $\tan\frac A2\tan\frac B2 + \tan\frac B2\tan\frac C2 + \tan\frac C2\tan\frac A2 = 1$ | Từ $\tan\left(\frac A2 + \frac B2\right) = \cot\frac C2$ |
| $\cos^2 A + \cos^2 B + \cos^2 C + 2\cos A\cos B\cos C = 1$ | Xem Bài 12 |

**Bất đẳng thức cơ bản:** $\cos A + \cos B + \cos C \le \frac32$.
*Chứng minh:* $\cos A + \cos B = 2\sin\frac C2\cos\frac{A - B}{2} \le 2\sin\frac C2$. Đặt $s = \sin\frac C2 \in (0; 1)$:
$\cos A + \cos B + \cos C \le 2s + 1 - 2s^2 = \frac32 - 2\left(s - \frac12\right)^2 \le \frac32$. Dấu "=" khi tam giác đều.
*Kỹ thuật này* (gộp hai góc bằng tổng thành tích, bỏ $\cos\frac{A - B}{2} \le 1$, rồi xét tam thức bậc hai theo góc còn lại) giải được rất nhiều bài cực trị trong tam giác.

**Nhận dạng tam giác:** biến đổi giả thiết về dạng tích bằng 0 hoặc tổng bình phương bằng 0, như $\cos C = 0$ (vuông tại $C$), $\sin(A - B) = 0$ (cân tại $C$).

### 6. Sai lầm hay gặp
- **Chia hai vế cho biểu thức có thể bằng 0** (như $\cos x$) làm mất nghiệm. Hãy đặt nhân tử chung.
- **Quên điều kiện** của $\tan$, $\cot$, mẫu số, rồi giữ nghiệm làm mẫu bằng 0.
- **Viết thiếu họ nghiệm:** $\sin x = \sin\alpha$ có hai họ, $\cos x = \cos\alpha$ có dấu $\pm$.
- **Đặt $t = \sin x + \cos x$ mà quên $\lvert t\rvert \le \sqrt2$**, nên giữ nghiệm $t$ ngoại lai.
- Bình phương hai vế khi chưa chắc hai vế cùng dấu.

---

## II. Bài tập vận dụng

**Bài 1.** Giải phương trình $\sqrt3\sin 2x - \cos 2x = 2\sin x$.

**Bài 2.** Giải phương trình $\sin^3 x + \cos^3 x = 1$.

**Bài 3.** Giải phương trình $\cos x + \cos 2x + \cos 3x + \cos 4x = 0$.

**Bài 4 (lọc nghiệm).** Giải phương trình $\tan 2x\tan x = 1$.

**Bài 5 (đặt ẩn phụ theo góc).** Giải phương trình $8\cos^3\left(x + \frac\pi3\right) = \cos 3x$.

**Bài 6 (đánh giá).** Giải phương trình $\sin^{13}x + \cos^{14}x = 1$.

**Bài 7.** Tìm giá trị lớn nhất và giá trị nhỏ nhất của $y = \dfrac{\sin x + 2\cos x + 1}{\sin x + \cos x + 2}$.

**Bài 8.** Chứng minh $\cos\frac\pi7 - \cos\frac{2\pi}{7} + \cos\frac{3\pi}{7} = \frac12$.

**Bài 9.** Tính:
a) $P = \cos\frac\pi9\cos\frac{2\pi}{9}\cos\frac{4\pi}{9}$;
b) $Q = \tan 20^\circ\tan 40^\circ\tan 80^\circ$.

**Bài 10 (tổng sai phân).** Cho $x$ thỏa mãn $\sin x \ne 0$ và $\cos kx \ne 0$ với $k = 1, 2, \dots, n + 1$. Rút gọn
$$S_n = \frac{1}{\cos x\cos 2x} + \frac{1}{\cos 2x\cos 3x} + \dots + \frac{1}{\cos nx\cos(n + 1)x}.$$

**Bài 11 (nhận dạng tam giác).** Tam giác $ABC$ thỏa mãn $\dfrac{\sin A + \sin B}{\cos A + \cos B} = \sin C$. Chứng minh tam giác $ABC$ vuông.

**Bài 12.** Chứng minh trong mọi tam giác $ABC$:
$$\cos^2 A + \cos^2 B + \cos^2 C + 2\cos A\cos B\cos C = 1.$$
Suy ra: nếu $\sin^2 A + \sin^2 B + \sin^2 C = 2$ thì tam giác $ABC$ vuông.

**Bài 13 (HSG cấp tỉnh).** Tìm giá trị lớn nhất của $P = \sqrt3\cos A + \cos B + \cos C$, với $A, B, C$ là ba góc của một tam giác.

**Bài 14 (HSG cấp tỉnh).** Cho tam giác nhọn $ABC$. Chứng minh $\tan A\tan B\tan C \ge 3\sqrt3$. Khi nào xảy ra dấu "="?

---

## III. Lời giải chi tiết

### Bài 1
Vế trái: $\sqrt3\sin 2x - \cos 2x = 2\left(\frac{\sqrt3}{2}\sin 2x - \frac12\cos 2x\right) = 2\sin\left(2x - \frac\pi6\right)$.
Phương trình trở thành $\sin\left(2x - \frac\pi6\right) = \sin x$, nên
- $2x - \frac\pi6 = x + k2\pi \iff x = \frac\pi6 + k2\pi$;
- $2x - \frac\pi6 = \pi - x + k2\pi \iff 3x = \frac{7\pi}{6} + k2\pi \iff x = \frac{7\pi}{18} + \frac{k2\pi}{3}$.

**Đáp số:** $x = \frac\pi6 + k2\pi$, $x = \frac{7\pi}{18} + \frac{k2\pi}{3}$ ($k \in \mathbb Z$).

### Bài 2
Đặt $t = \sin x + \cos x$, $\lvert t\rvert \le \sqrt2$, thì $\sin x\cos x = \frac{t^2 - 1}{2}$. Ta có
$$\sin^3 x + \cos^3 x = (\sin x + \cos x)(1 - \sin x\cos x) = t\cdot\frac{3 - t^2}{2}.$$
Phương trình thành $t(3 - t^2) = 2 \iff t^3 - 3t + 2 = 0 \iff (t - 1)^2(t + 2) = 0$.
Vì $\lvert t\rvert \le \sqrt2$ nên $t = 1$: $\sqrt2\sin\left(x + \frac\pi4\right) = 1 \iff \sin\left(x + \frac\pi4\right) = \frac{\sqrt2}{2}$.

**Đáp số:** $x = k2\pi$, $x = \frac\pi2 + k2\pi$.

*Nhận xét:* cũng có thể đánh giá: $\sin^3 x \le \sin^2 x$, $\cos^3 x \le \cos^2 x$, nên vế trái $\le 1$, dấu "=" khi $\sin x, \cos x \in \{0; 1\}$. Đây chính là ý tưởng của Bài 6.

### Bài 3
Ghép các cặp có cùng tổng góc ($1 + 4 = 2 + 3 = 5$):
$$\cos x + \cos 4x = 2\cos\frac{5x}{2}\cos\frac{3x}{2}, \qquad \cos 2x + \cos 3x = 2\cos\frac{5x}{2}\cos\frac x2.$$
Do đó vế trái bằng $2\cos\frac{5x}{2}\left(\cos\frac{3x}{2} + \cos\frac x2\right) = 4\cos\frac{5x}{2}\cos x\cos\frac x2$.
- $\cos\frac{5x}{2} = 0 \iff x = \frac\pi5 + \frac{k2\pi}{5}$;
- $\cos x = 0 \iff x = \frac\pi2 + k\pi$;
- $\cos\frac x2 = 0 \iff x = \pi + k2\pi$. Họ này nằm trong họ thứ nhất (ứng với $k = 2 + 5m$).

**Đáp số:** $x = \frac\pi5 + \frac{k2\pi}{5}$, $x = \frac\pi2 + k\pi$.

### Bài 4
**Điều kiện:** $\cos x \ne 0$ và $\cos 2x \ne 0$.
Phương trình tương đương $\sin 2x\sin x = \cos 2x\cos x \iff \cos 2x\cos x - \sin 2x\sin x = 0 \iff \cos 3x = 0 \iff x = \frac\pi6 + \frac{k\pi}{3}$.

**Lọc nghiệm.** Trên đường tròn lượng giác, họ này gồm 6 điểm $\frac\pi6, \frac\pi2, \frac{5\pi}{6}, \frac{7\pi}{6}, \frac{3\pi}{2}, \frac{11\pi}{6}$.
- Hai điểm $\frac\pi2$ và $\frac{3\pi}{2}$ làm $\cos x = 0$: loại.
- Bốn điểm còn lại có $2x \in \left\{\frac\pi3; \frac{5\pi}{3}; \frac{7\pi}{3}; \frac{11\pi}{3}\right\}$, đều có $\cos 2x = \frac12 \ne 0$: nhận.

**Đáp số:** $x = \pm\frac\pi6 + k\pi$.

*Nhận xét:* nếu bỏ qua điều kiện, ta giữ nhầm $x = \frac\pi2 + k\pi$, là chỗ $\tan x$ không xác định.

### Bài 5
Đặt $t = x + \frac\pi3$, thì $3x = 3t - \pi$ và $\cos 3x = -\cos 3t = -(4\cos^3 t - 3\cos t)$.
Phương trình thành $8\cos^3 t = -4\cos^3 t + 3\cos t \iff 3\cos t(4\cos^2 t - 1) = 0$.
- $\cos t = 0 \iff t = \frac\pi2 + k\pi \iff x = \frac\pi6 + k\pi$.
- $4\cos^2 t = 1 \iff 2(1 + \cos 2t) = 1 \iff \cos 2t = -\frac12 \iff t = \pm\frac\pi3 + k\pi$, tức $x = k\pi$ hoặc $x = -\frac{2\pi}{3} + k\pi = \frac\pi3 + (k - 1)\pi$.

**Đáp số:** $x = k\pi$, $x = \frac\pi6 + k\pi$, $x = \frac\pi3 + k\pi$.

### Bài 6
Vì $\lvert\sin x\rvert \le 1$ nên $\sin^{13}x \le \lvert\sin x\rvert^{13} \le \sin^2 x$; tương tự $\cos^{14}x \le \cos^2 x$. Cộng lại: $\sin^{13}x + \cos^{14}x \le \sin^2 x + \cos^2 x = 1$.
Dấu "=" xảy ra khi và chỉ khi đồng thời
- $\sin^{13}x = \sin^2 x \iff \sin x = 0$ hoặc $\sin x = 1$ (với $\sin x = -1$ thì vế trái bằng $-1$);
- $\cos^{14}x = \cos^2 x \iff \cos x \in \{0; 1; -1\}$, luôn đúng khi $\sin x \in \{0; 1\}$.

**Đáp số:** $x = k\pi$, $x = \frac\pi2 + k2\pi$.

### Bài 7
Mẫu số $\sin x + \cos x + 2 \ge 2 - \sqrt2 > 0$ nên hàm số xác định trên $\mathbb R$.
$y$ là một giá trị của hàm số khi và chỉ khi phương trình ẩn $x$ sau có nghiệm:
$$y(\sin x + \cos x + 2) = \sin x + 2\cos x + 1 \iff (y - 1)\sin x + (y - 2)\cos x = 1 - 2y.$$
Điều kiện có nghiệm: $(y - 1)^2 + (y - 2)^2 \ge (1 - 2y)^2 \iff 2y^2 - 6y + 5 \ge 4y^2 - 4y + 1 \iff y^2 + y - 2 \le 0 \iff -2 \le y \le 1$.

**Đáp số:** $\max y = 1$, $\min y = -2$.

*Nhận xét:* $y = 1$ khi $\cos x = 1$; $y = -2$ khi $\sin x = -\frac35$, $\cos x = -\frac45$. Đây là phương pháp **miền giá trị**: tìm $y$ để phương trình $f(x) = y$ có nghiệm.

### Bài 8
Ta có $-\cos\frac{2\pi}{7} = \cos\frac{5\pi}{7}$, nên $S = \cos\frac\pi7 + \cos\frac{3\pi}{7} + \cos\frac{5\pi}{7}$, ba góc cách đều với công sai $\frac{2\pi}{7}$. Nhân với $2\sin\frac\pi7$:
$$2\sin\tfrac\pi7\,S = \sin\tfrac{2\pi}{7} + \left(\sin\tfrac{4\pi}{7} - \sin\tfrac{2\pi}{7}\right) + \left(\sin\tfrac{6\pi}{7} - \sin\tfrac{4\pi}{7}\right) = \sin\tfrac{6\pi}{7} = \sin\tfrac\pi7.$$
Vì $\sin\frac\pi7 \ne 0$ nên $S = \frac12$.

### Bài 9
a) Nhân với $\sin\frac\pi9 \ne 0$ và dùng $2\sin a\cos a = \sin 2a$ ba lần:
$$8\sin\tfrac\pi9\,P = 4\sin\tfrac{2\pi}{9}\cos\tfrac{2\pi}{9}\cos\tfrac{4\pi}{9} = 2\sin\tfrac{4\pi}{9}\cos\tfrac{4\pi}{9} = \sin\tfrac{8\pi}{9} = \sin\tfrac\pi9.$$
Vậy $P = \frac18$.

b) **Bổ đề:** $\tan x\tan(60^\circ - x)\tan(60^\circ + x) = \tan 3x$.
*Chứng minh:* $\sin(60^\circ - x)\sin(60^\circ + x) = \frac12(\cos 2x - \cos 120^\circ) = \frac{2\cos 2x + 1}{4} = \frac{3 - 4\sin^2 x}{4}$, và tương tự $\cos(60^\circ - x)\cos(60^\circ + x) = \frac{4\cos^2 x - 3}{4}$. Nhân với $\frac{\sin x}{\cos x}$:
$$\frac{\sin x(3 - 4\sin^2 x)}{\cos x(4\cos^2 x - 3)} = \frac{\sin 3x}{\cos 3x}.$$
Áp dụng với $x = 20^\circ$: $Q = \tan 20^\circ\tan 40^\circ\tan 80^\circ = \tan 60^\circ = \sqrt3$.

**Đáp số:** $P = \frac18$, $Q = \sqrt3$.

### Bài 10
Ta có $\tan(k + 1)x - \tan kx = \dfrac{\sin(k + 1)x\cos kx - \cos(k + 1)x\sin kx}{\cos kx\cos(k + 1)x} = \dfrac{\sin x}{\cos kx\cos(k + 1)x}$.
Do đó $\dfrac{1}{\cos kx\cos(k + 1)x} = \dfrac{\tan(k + 1)x - \tan kx}{\sin x}$. Cộng với $k = 1, 2, \dots, n$, các số hạng giữa triệt tiêu:
$$S_n = \frac{\tan(n + 1)x - \tan x}{\sin x}.$$

*Nhận xét:* mẹo "viết số hạng thành hiệu" (sai phân) sẽ gặp lại nhiều lần ở chủ đề dãy số và giới hạn.

### Bài 11
Trong tam giác, $0 < \frac{A + B}{2} < \frac\pi2$ và $\lvert\frac{A - B}{2}\rvert < \frac\pi2$, nên $\cos A + \cos B = 2\cos\frac{A + B}{2}\cos\frac{A - B}{2} > 0$. Ta có
$$\frac{\sin A + \sin B}{\cos A + \cos B} = \frac{2\sin\frac{A + B}{2}\cos\frac{A - B}{2}}{2\cos\frac{A + B}{2}\cos\frac{A - B}{2}} = \tan\frac{A + B}{2} = \cot\frac C2.$$
Giả thiết thành $\dfrac{\cos\frac C2}{\sin\frac C2} = 2\sin\frac C2\cos\frac C2$. Vì $\cos\frac C2 > 0$ nên $2\sin^2\frac C2 = 1$, tức $\cos C = 1 - 2\sin^2\frac C2 = 0$.

**Kết luận:** $C = 90^\circ$, tam giác vuông tại $C$.

### Bài 12
Dùng hạ bậc và tổng thành tích:
$$\cos^2 A + \cos^2 B = 1 + \frac{\cos 2A + \cos 2B}{2} = 1 + \cos(A + B)\cos(A - B) = 1 - \cos C\cos(A - B).$$
Do đó
$$\cos^2 A + \cos^2 B + \cos^2 C = 1 - \cos C\left[\cos(A - B) - \cos C\right] = 1 - \cos C\left[\cos(A - B) + \cos(A + B)\right] = 1 - 2\cos A\cos B\cos C.$$
(Dùng $\cos C = -\cos(A + B)$.) Đẳng thức được chứng minh.

**Hệ quả.** $\sin^2 A + \sin^2 B + \sin^2 C = 2 \iff \cos^2 A + \cos^2 B + \cos^2 C = 1 \iff \cos A\cos B\cos C = 0$. Vậy một góc bằng $90^\circ$, tam giác vuông.

### Bài 13
Gộp $B$ và $C$: $\cos B + \cos C = 2\cos\frac{B + C}{2}\cos\frac{B - C}{2} = 2\sin\frac A2\cos\frac{B - C}{2} \le 2\sin\frac A2$ (vì $\sin\frac A2 > 0$).
Đặt $s = \sin\frac A2 \in (0; 1)$, ta có $\cos A = 1 - 2s^2$, nên
$$P \le \sqrt3(1 - 2s^2) + 2s = -2\sqrt3\,s^2 + 2s + \sqrt3.$$
Tam thức bậc hai theo $s$ có hệ số $s^2$ âm, đạt giá trị lớn nhất tại $s = \frac{2}{4\sqrt3} = \frac{\sqrt3}{6} \in (0; 1)$, giá trị đó bằng
$$-2\sqrt3\cdot\frac{1}{12} + \frac{\sqrt3}{3} + \sqrt3 = -\frac{\sqrt3}{6} + \frac{2\sqrt3}{6} + \frac{6\sqrt3}{6} = \frac{7\sqrt3}{6}.$$
Dấu "=" khi $B = C$ và $\sin\frac A2 = \frac{\sqrt3}{6}$ (góc $A \approx 33{,}6^\circ$, $B = C \approx 73{,}2^\circ$).

**Đáp số:** $\max P = \frac{7\sqrt3}{6}$.

*Nhận xét:* đây đúng là kỹ thuật ở mục I.5. Hệ số $\sqrt3$ lệch khỏi đối xứng nên điểm rơi không phải tam giác đều.

### Bài 14
Tam giác nhọn nên $\tan A, \tan B, \tan C > 0$. Từ $\tan C = -\tan(A + B) = -\dfrac{\tan A + \tan B}{1 - \tan A\tan B}$, quy đồng ta được
$$\tan A + \tan B + \tan C = \tan A\tan B\tan C = T.$$
Theo AM-GM cho ba số dương: $T = \tan A + \tan B + \tan C \ge 3\sqrt[3]{\tan A\tan B\tan C} = 3\sqrt[3]{T}$.
Lập phương hai vế: $T^3 \ge 27T$, mà $T > 0$ nên $T^2 \ge 27$, tức $T \ge 3\sqrt3$.
Dấu "=" khi $\tan A = \tan B = \tan C$, tức tam giác đều.

*Nhận xét:* mấu chốt là hệ thức "tổng bằng tích", biến AM-GM thành một bất phương trình theo một ẩn $T$.

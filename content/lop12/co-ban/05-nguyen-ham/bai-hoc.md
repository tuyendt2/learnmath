# Chủ đề 5. Nguyên hàm

> Nguyên hàm là phép toán ngược của đạo hàm: biết tốc độ thay đổi, tìm lại đại lượng ban đầu (biết vận tốc tìm quãng đường, biết tốc độ tăng trưởng tìm số lượng). Chủ đề này luyện bảng nguyên hàm cơ bản, các tính chất, và bài toán tìm nguyên hàm thỏa điều kiện cho trước — nền tảng của tích phân ở chủ đề sau.

## I. Kiến thức cần nắm

### 1. Định nghĩa

$F$ là một nguyên hàm của $f$ trên $K$ nếu $F'(x) = f(x)$ với mọi $x \in K$. Khi đó mọi nguyên hàm của $f$ có dạng $F(x) + C$:
$$\int f(x)\,dx = F(x) + C.$$

### 2. Tính chất

- $\int f'(x)\,dx = f(x) + C$.
- $\int kf(x)\,dx = k\int f(x)\,dx$ ($k \ne 0$); $\int[f(x) \pm g(x)]\,dx = \int f(x)\,dx \pm \int g(x)\,dx$.

### 3. Bảng nguyên hàm

| Hàm số | Nguyên hàm |
|---|---|
| $x^\alpha$ ($\alpha \ne -1$) | $\dfrac{x^{\alpha + 1}}{\alpha + 1} + C$ |
| $\dfrac{1}{x}$ | $\ln\lvert x\rvert + C$ |
| $e^x$; $a^x$ | $e^x + C$; $\dfrac{a^x}{\ln a} + C$ |
| $\sin x$; $\cos x$ | $-\cos x + C$; $\sin x + C$ |
| $\dfrac{1}{\cos^2 x}$; $\dfrac{1}{\sin^2 x}$ | $\tan x + C$; $-\cot x + C$ |

Mở rộng với $ax + b$ ($a \ne 0$): $\int f(ax + b)\,dx = \dfrac{1}{a}F(ax + b) + C$. Ví dụ $\int e^{3x}\,dx = \dfrac{e^{3x}}{3} + C$, $\int\cos 2x\,dx = \dfrac{\sin 2x}{2} + C$.

### 4. Kỹ thuật biến đổi

- Khai triển, chia đa thức để đưa về tổng các hàm trong bảng.
- Hạ bậc lượng giác: $\sin^2 x = \dfrac{1 - \cos 2x}{2}$, $\cos^2 x = \dfrac{1 + \cos 2x}{2}$; $\tan^2 x = \dfrac{1}{\cos^2 x} - 1$.

### 5. Nguyên hàm thỏa điều kiện

Tìm $F(x) = G(x) + C$ rồi dùng điều kiện $F(x_0) = y_0$ để tìm $C$.

### 6. Sai lầm hay gặp

- Quên hằng số $C$.
- $\int e^{-x}\,dx$ viết thành $e^{-x}$ (đúng là $-e^{-x} + C$); quên chia hệ số $a$ khi gặp $ax + b$.
- $\int\dfrac{1}{x}\,dx$ viết thành $\ln x$ (thiếu giá trị tuyệt đối).

## II. Bài tập vận dụng

**Bài 1.** Tìm $\int(3x^2 - 4x + 5)\,dx$.

**Bài 2.** Tìm $\int\left(\sqrt{x} + \dfrac{1}{x^2}\right)dx$ (với $x > 0$).

**Bài 3.** Tìm $\int(\sin x + 2\cos x)\,dx$ và $\int\dfrac{3}{\cos^2 x}\,dx$.

**Bài 4.** Tìm $\int(e^x + 2^x)\,dx$ và $\int\dfrac{x^2 + 1}{x}\,dx$.

**Bài 5.** Tìm nguyên hàm $F(x)$ của $f(x) = 2x + 1$ thỏa mãn $F(1) = 3$.

**Bài 6.** Tìm $\int e^{3x}\,dx$, $\int\cos 2x\,dx$ và $\int\dfrac{1}{2x - 1}\,dx$.

**Bài 7.** Tìm $\int\sin^2 x\,dx$ và $\int\tan^2 x\,dx$.

**Bài 8 (đúng/sai).** Xét tính đúng sai, giải thích:
a) $\int e^{-x}\,dx = e^{-x} + C$.
b) $\int 2^x\ln 2\,dx = 2^x + C$.
c) $\int(2x + 1)^5\,dx = \dfrac{(2x + 1)^6}{6} + C$.
d) $F(x) = \sin^2 x$ và $G(x) = -\dfrac{\cos 2x}{2}$ là nguyên hàm của cùng một hàm số.

**Bài 9 (vật lý).** Một vật chuyển động với vận tốc $v(t) = 3t^2 + 2$ (m/s). Tìm quãng đường $s(t)$ biết $s(0) = 0$, và tính quãng đường đi được sau 2 giây.

**Bài 10 (thực tế).** Số lượng vi khuẩn $N(t)$ trong một mẻ nuôi cấy tăng với tốc độ $N'(t) = 200e^{0{,}2t}$ (con/giờ), ban đầu có 1 000 con. Tìm $N(t)$ và số vi khuẩn sau 10 giờ (làm tròn đến hàng đơn vị).

**Bài 11 (trả lời ngắn).** Cho $F(x)$ là nguyên hàm của $f(x) = 4x^3 - 2x$ với $F(0) = 1$. Tính $F(2)$.

**Bài 12 (trả lời ngắn).** Hàm số $f$ có $f'(x) = 2\cos x - 1$ và $f(0) = 2$. Tính $f\left(\dfrac{\pi}{2}\right)$ (làm tròn đến hàng phần trăm).

**Bài 13 (vận dụng cao).** Tìm hàm số $f$ biết $f''(x) = 6x$, $f'(1) = 4$ và $f(0) = 1$.

---

## III. Lời giải chi tiết

### Bài 1
$x^3 - 2x^2 + 5x + C$.

### Bài 2
$\int(x^{\frac{1}{2}} + x^{-2})\,dx = \dfrac{2}{3}x\sqrt{x} - \dfrac{1}{x} + C$.

### Bài 3
$-\cos x + 2\sin x + C$; $3\tan x + C$.

### Bài 4
$e^x + \dfrac{2^x}{\ln 2} + C$. $\int\left(x + \dfrac{1}{x}\right)dx = \dfrac{x^2}{2} + \ln\lvert x\rvert + C$.

### Bài 5
$F(x) = x^2 + x + C$; $F(1) = 2 + C = 3$, $C = 1$. $F(x) = x^2 + x + 1$.

### Bài 6
$\dfrac{e^{3x}}{3} + C$; $\dfrac{\sin 2x}{2} + C$; $\dfrac{1}{2}\ln\lvert 2x - 1\rvert + C$.

### Bài 7
$\int\dfrac{1 - \cos 2x}{2}\,dx = \dfrac{x}{2} - \dfrac{\sin 2x}{4} + C$. $\int\left(\dfrac{1}{\cos^2 x} - 1\right)dx = \tan x - x + C$.

### Bài 8
a) **Sai.** $(e^{-x})' = -e^{-x}$; đúng là $\int e^{-x}\,dx = -e^{-x} + C$.
b) **Đúng.** $(2^x)' = 2^x\ln 2$.
c) **Sai.** $\left(\dfrac{(2x + 1)^6}{6}\right)' = 2(2x + 1)^5$; đúng là $\dfrac{(2x + 1)^6}{12} + C$.
d) **Đúng.** $F'(x) = 2\sin x\cos x = \sin 2x$ và $G'(x) = \sin 2x$ (thực vậy $F - G = \dfrac{1}{2}$ là hằng số).

### Bài 9
$s(t) = t^3 + 2t + C$, $s(0) = 0$ nên $C = 0$. $s(2) = 8 + 4 = 12$ (m).

### Bài 10
$N(t) = 1\,000e^{0{,}2t} + C$; $N(0) = 1\,000 + C = 1\,000$, $C = 0$. $N(10) = 1\,000e^2 \approx 7\,389$ con.

### Bài 11
$F(x) = x^4 - x^2 + C$, $F(0) = 1$: $C = 1$. $F(2) = 16 - 4 + 1 = 13$.
**Đáp số:** 13.

### Bài 12
$f(x) = 2\sin x - x + C$, $f(0) = 2$: $C = 2$. $f\left(\dfrac{\pi}{2}\right) = 2 - \dfrac{\pi}{2} + 2 = 4 - \dfrac{\pi}{2} \approx 2{,}43$.
**Đáp số:** 2,43.

### Bài 13
$f'(x) = 3x^2 + C_1$, $f'(1) = 3 + C_1 = 4$, $C_1 = 1$. $f(x) = x^3 + x + C_2$, $f(0) = 1$: $C_2 = 1$. $f(x) = x^3 + x + 1$.

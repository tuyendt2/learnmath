# Chủ đề 5. Tích phân nâng cao

> Câu tích phân trong đề học sinh giỏi lớp 12 đòi hỏi các kỹ thuật vượt ngoài bảng nguyên hàm: đổi biến số, tích phân từng phần, khai thác tính đối xứng, tích phân hàm ẩn (biết hệ thức của $f$ mà không biết $f$), công thức truy hồi và đánh giá tích phân bằng bất đẳng thức.

## I. Kiến thức cần nắm

### 1. Đổi biến số

- Dạng 1: $\int_a^b f(u(x))u'(x)\,dx = \int_{u(a)}^{u(b)} f(t)\,dt$ (đặt $t = u(x)$, nhớ đổi cận).
- Dạng 2: đặt $x = \varphi(t)$: $\sqrt{a^2 - x^2}$ → $x = a\sin t$; $\dfrac{1}{a^2 + x^2}$ → $x = a\tan t$.

### 2. Tích phân từng phần

$\int_a^b u\,dv = uv\Big|_a^b - \int_a^b v\,du$. Ưu tiên đặt $u$ theo thứ tự: lôgarit, đa thức, lượng giác, mũ ("nhất log, nhì đa, tam lượng, tứ mũ").

### 3. Tính đối xứng

- $f$ lẻ: $\int_{-a}^a f = 0$; $f$ chẵn: $\int_{-a}^a f = 2\int_0^a f$.
- $\int_a^b f(x)\,dx = \int_a^b f(a + b - x)\,dx$. Hệ quả: $\int_0^\pi xf(\sin x)\,dx = \dfrac{\pi}{2}\int_0^\pi f(\sin x)\,dx$.
- Với $f$ chẵn: $\int_{-a}^a\dfrac{f(x)}{1 + b^x}\,dx = \int_0^a f(x)\,dx$ ($b > 0$).

### 4. Tích phân hàm ẩn

Từ hệ thức chứa $f(x)$, $f(u(x))$: đổi biến để đưa về $\int f$, hoặc cộng các hệ thức thu được khi thay $x$ bởi biểu thức đối xứng.

### 5. Truy hồi và bất đẳng thức

- $I_n = \int x^ne^x\,dx$, $\int\sin^n x\,dx$…: dùng từng phần để lập công thức truy hồi.
- $m \le f(x) \le M$ trên $[a; b]$ thì $m(b - a) \le \int_a^b f \le M(b - a)$; $f \le g$ thì $\int f \le \int g$.

### 6. Sai lầm hay gặp

- Đổi biến mà quên đổi cận.
- Chọn sai $u$, $dv$ khiến tích phân phức tạp hơn.
- Dùng đối xứng mà không kiểm tra hàm chẵn, lẻ.

## II. Bài tập vận dụng

**Bài 1.** Tính $\int_0^1 x\sqrt{1 - x^2}\,dx$.

**Bài 2.** Tính $\int_0^{\frac{\pi}{2}}\sin x\cos^2 x\,dx$.

**Bài 3.** Tính $\int_0^1 xe^x\,dx$.

**Bài 4.** Tính $\int_1^e\ln x\,dx$.

**Bài 5.** Tính $\int_0^{\frac{\pi}{2}}x\cos x\,dx$.

**Bài 6.** Tính $\int_0^1\dfrac{dx}{1 + x^2}$.

**Bài 7.** Tính $\int_0^2\sqrt{4 - x^2}\,dx$.

**Bài 8 (hàm ẩn).** Cho $f$ liên tục và $\int_0^1 f(x)\,dx = 3$. Tính $\int_0^2 f\left(\dfrac{x}{2}\right)dx$ và $\int_0^{\frac{\pi}{2}} f(\sin x)\cos x\,dx$.

**Bài 9 (hàm ẩn).** Cho $f$ liên tục trên $[0; 1]$ thỏa mãn $f(x) + f(1 - x) = x^2 - x + 1$. Tính $\int_0^1 f(x)\,dx$.

**Bài 10.** Tính $\int_0^\pi x\sin x\,dx$ bằng hai cách: từng phần và dùng tính đối xứng.

**Bài 11.** Tính $\int_{-1}^1\dfrac{x^2}{1 + 2^x}\,dx$.

**Bài 12.** Chứng minh $1 \le \int_0^1 e^{x^2}\,dx \le e - 1$.

**Bài 13 (truy hồi).** Đặt $I_n = \int_0^1 x^ne^x\,dx$ ($n \ge 0$). Chứng minh $I_n = e - nI_{n - 1}$ với $n \ge 1$ và tính $I_2$.

**Bài 14 (HSG).** Tính $\lim_{n \to \infty}\int_0^1\dfrac{x^n}{1 + x}\,dx$.

---

## III. Lời giải chi tiết

### Bài 1
Đặt $t = 1 - x^2$, $dt = -2x\,dx$; $x = 0 \to t = 1$, $x = 1 \to t = 0$: $\int_0^1 x\sqrt{1 - x^2}\,dx = \dfrac{1}{2}\int_0^1\sqrt{t}\,dt = \dfrac{1}{2} \cdot \dfrac{2}{3} = \dfrac{1}{3}$.

### Bài 2
Đặt $t = \cos x$: $\int_0^1 t^2\,dt = \dfrac{1}{3}$.

### Bài 3
$u = x$, $dv = e^x\,dx$: $xe^x\Big|_0^1 - \int_0^1 e^x\,dx = e - (e - 1) = 1$.

### Bài 4
$u = \ln x$, $dv = dx$: $x\ln x\Big|_1^e - \int_1^e dx = e - (e - 1) = 1$.

### Bài 5
$u = x$, $dv = \cos x\,dx$: $x\sin x\Big|_0^{\frac{\pi}{2}} - \int_0^{\frac{\pi}{2}}\sin x\,dx = \dfrac{\pi}{2} - 1$.

### Bài 6
$x = \tan t$, $dx = \dfrac{dt}{\cos^2 t}$, $1 + x^2 = \dfrac{1}{\cos^2 t}$: $\int_0^{\frac{\pi}{4}}dt = \dfrac{\pi}{4}$.

### Bài 7
$x = 2\sin t$: $\int_0^{\frac{\pi}{2}} 4\cos^2 t\,dt = 2\int_0^{\frac{\pi}{2}}(1 + \cos 2t)\,dt = \pi$. (Đây là diện tích một phần tư hình tròn bán kính 2.)

### Bài 8
$t = \dfrac{x}{2}$: $\int_0^2 f\left(\dfrac{x}{2}\right)dx = 2\int_0^1 f(t)\,dt = 6$. $t = \sin x$: $\int_0^{\frac{\pi}{2}} f(\sin x)\cos x\,dx = \int_0^1 f(t)\,dt = 3$.

### Bài 9
Đặt $I = \int_0^1 f(x)\,dx$. Đổi biến $x \to 1 - x$: $\int_0^1 f(1 - x)\,dx = I$. Lấy tích phân hai vế hệ thức: $2I = \int_0^1(x^2 - x + 1)\,dx = \dfrac{1}{3} - \dfrac{1}{2} + 1 = \dfrac{5}{6}$, $I = \dfrac{5}{12}$.

### Bài 10
Từng phần: $-x\cos x\Big|_0^\pi + \int_0^\pi\cos x\,dx = \pi + 0 = \pi$.
Đối xứng: $I = \int_0^\pi(\pi - x)\sin x\,dx = \pi\int_0^\pi\sin x\,dx - I$, nên $2I = 2\pi$, $I = \pi$.

### Bài 11
Đặt $x = -t$: $I = \int_{-1}^1\dfrac{t^2}{1 + 2^{-t}}\,dt = \int_{-1}^1\dfrac{2^tt^2}{2^t + 1}\,dt$. Cộng với $I$ ban đầu: $2I = \int_{-1}^1 x^2\,dx = \dfrac{2}{3}$, $I = \dfrac{1}{3}$.

### Bài 12
Trên $[0; 1]$: $0 \le x^2 \le x$, nên $1 \le e^{x^2} \le e^x$. Lấy tích phân: $1 \le \int_0^1 e^{x^2}\,dx \le \int_0^1 e^x\,dx = e - 1$.

### Bài 13
$u = x^n$, $dv = e^x\,dx$: $I_n = x^ne^x\Big|_0^1 - n\int_0^1 x^{n - 1}e^x\,dx = e - nI_{n - 1}$.
$I_0 = e - 1$, $I_1 = e - (e - 1) = 1$, $I_2 = e - 2$.

### Bài 14
$0 \le \dfrac{x^n}{1 + x} \le x^n$ trên $[0; 1]$, nên $0 \le \int_0^1\dfrac{x^n}{1 + x}\,dx \le \dfrac{1}{n + 1} \to 0$. Theo nguyên lý kẹp, giới hạn bằng 0.

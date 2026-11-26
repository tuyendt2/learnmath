# Chủ đề 4. Dãy số và giới hạn (HSG lớp 12)

> Câu dãy số là câu "đặc sản" của đề HSG lớp 12: chứng minh dãy hội tụ, tìm giới hạn, tính giới hạn của một tổng hoặc của $n\cdot u_n$. Lớp 12 có thêm đạo hàm và tích phân, nên ngoài các công cụ lớp 11 (đơn điệu bị chặn, kẹp, công thức tổng quát) ta dùng được định lý Lagrange, tổng tích phân và định lý Stolz.

## I. Kiến thức cần nắm

> **Ý tưởng xuyên suốt:** muốn tìm giới hạn, trước hết phải **chứng minh dãy hội tụ** (hoặc chỉ ra dãy dần tới vô cực), sau đó mới qua giới hạn trong hệ thức truy hồi. Viết $L = f(L)$ khi chưa biết dãy hội tụ là sai lầm phổ biến nhất.

### 1. Dãy đơn điệu bị chặn và dãy $u_{n+1} = f(u_n)$
**Định lý Weierstrass:** dãy tăng và bị chặn trên thì hội tụ; dãy giảm và bị chặn dưới thì hội tụ.

**Dãy $u_{n+1} = f(u_n)$ với $f$ liên tục trên đoạn $D$, $f(D) \subset D$:**
- Nếu dãy hội tụ về $L$ thì $L = f(L)$ (qua giới hạn hai vế).
- **$f$ đồng biến trên $D$:** dãy đơn điệu. Nếu $u_2 \ge u_1$ thì dãy tăng, nếu $u_2 \le u_1$ thì dãy giảm. *Vì sao:* quy nạp, $u_{n+1} \ge u_n \Rightarrow f(u_{n+1}) \ge f(u_n)$, tức là $u_{n+2} \ge u_{n+1}$.
- **$f$ nghịch biến trên $D$:** hai dãy con $(u_{2k})$ và $(u_{2k+1})$ đơn điệu ngược chiều (vì $f\circ f$ đồng biến). Dãy hội tụ khi hai dãy con có cùng giới hạn.

**Ví dụ mẫu.** $u_1 = 3$, $u_{n+1} = \frac{u_n + 2}{2}$: $f(x) = \frac{x + 2}{2}$ đồng biến, $u_2 = \frac52 < u_1$, nên dãy giảm; bị chặn dưới bởi $2$ (quy nạp: $u_n > 2 \Rightarrow u_{n+1} > 2$). Dãy hội tụ về $L$ với $L = \frac{L + 2}{2}$, $L = 2$.

### 2. Nguyên lý kẹp và định lý Lagrange (ánh xạ co)
**Nguyên lý kẹp:** $a_n \le u_n \le b_n$ và $\lim a_n = \lim b_n = L$ thì $\lim u_n = L$.

**Định lý Lagrange:** nếu $f$ liên tục trên $[a; b]$, có đạo hàm trên $(a; b)$ thì có $c \in (a; b)$ với $f(b) - f(a) = f'(c)(b - a)$.

**Hệ quả (ánh xạ co):** nếu $\lvert f'(x)\rvert \le q < 1$ trên $D$, $f(D) \subset D$ và $L = f(L) \in D$, thì với dãy $u_{n+1} = f(u_n)$, $u_1 \in D$:
$$\lvert u_{n+1} - L\rvert = \lvert f(u_n) - f(L)\rvert \le q\lvert u_n - L\rvert \;\Rightarrow\; \lvert u_n - L\rvert \le q^{n-1}\lvert u_1 - L\rvert \to 0.$$
Không cần xét tính đơn điệu; dùng tốt khi $f$ nghịch biến.

### 3. Tìm công thức tổng quát
- **Tuyến tính cấp một** $u_{n+1} = au_n + g(n)$: tìm một nghiệm riêng $v_n$ cùng dạng với $g(n)$ (đa thức, mũ), khi đó $u_n - v_n$ là cấp số nhân công bội $a$ (với $a \ne 1$).
- **Tuyến tính cấp hai** $u_{n+2} = pu_{n+1} + qu_n$: giải phương trình đặc trưng $x^2 = px + q$. Hai nghiệm phân biệt $x_1, x_2$ thì $u_n = Ax_1^n + Bx_2^n$; nghiệm kép $x_0$ thì $u_n = (A + Bn)x_0^n$. Tìm $A$, $B$ từ hai số hạng đầu.
- **Đổi biến lượng giác:** $u_{n+1} = \sqrt{2 + u_n}$ gợi ý $u_n = 2\cos\alpha_n$ (vì $\sqrt{2 + 2\cos\alpha} = 2\cos\frac\alpha2$); $u_{n+1} = 2u_n^2 - 1$ gợi ý $\cos 2\alpha$.
- **Đổi biến khử bậc:** $u_{n+1} - c = (u_n - c)^2$ thì $v_n = u_n - c$ thỏa $v_{n+1} = v_n^2$, $v_n = v_1^{2^{n-1}}$.

**Ví dụ mẫu.** $u_1 = 1$, $u_{n+1} = 3u_n + 2$: nghiệm riêng hằng $v = -1$, nên $u_n + 1 = 2\cdot 3^{n-1}$, $u_n = 2\cdot 3^{n-1} - 1$.

### 4. Giới hạn của tổng: sai phân và tổng tích phân
- **Tổng sai phân:** nếu viết được $a_k = b_k - b_{k+1}$ thì $\sum_{k=1}^n a_k = b_1 - b_{n+1}$.
- **Tổng tích phân:** với $f$ liên tục trên $[0; 1]$,
  $$\lim_{n\to\infty}\frac1n\sum_{k=1}^n f\left(\frac kn\right) = \int_0^1 f(x)\,dx.$$
  *Vì sao (khi $f$ đồng biến):* $\int_{(k-1)/n}^{k/n} f(x)\,dx \le \frac1n f\left(\frac kn\right) \le \int_{k/n}^{(k+1)/n} f(x)\,dx$. Cộng lại, tổng bị kẹp giữa $\int_0^1 f$ và $\int_{1/n}^{1 + 1/n} f$, hai số này cùng dần tới $\int_0^1 f$. Trường hợp $f$ nghịch biến làm tương tự.
- **Nhận dạng:** tổng có $n$ số hạng, mỗi số hạng viết được dạng $\frac1n f\left(\frac kn\right)$. Với tích, lấy lôgarit để đưa về tổng.

### 5. Giới hạn cơ bản và định lý Stolz
**Giới hạn cơ bản:** $\lim\limits_{x\to0}\frac{\sin x}{x} = 1$, $\lim\limits_{x\to0}\frac{\ln(1 + x)}{x} = 1$, $\lim\limits_{x\to0}\frac{e^x - 1}{x} = 1$ (đều là đạo hàm tại $0$ của $\sin x$, $\ln(1 + x)$, $e^x$).

**Định lý Stolz:** nếu $(b_n)$ tăng ngặt, $b_n \to +\infty$ và $\lim\frac{a_{n+1} - a_n}{b_{n+1} - b_n} = L$ thì $\lim\frac{a_n}{b_n} = L$.

*Ý chứng minh:* với $\varepsilon > 0$, từ một chỉ số $N$ trở đi $(L - \varepsilon)(b_{k+1} - b_k) < a_{k+1} - a_k < (L + \varepsilon)(b_{k+1} - b_k)$. Cộng từ $k = N$ đến $n - 1$ rồi chia cho $b_n$; vì $b_n \to +\infty$ nên phần $\frac{a_N - Lb_N}{b_n} \to 0$.

**Ứng dụng điển hình:** tìm "tốc độ" của dãy dần về $0$ hoặc ra vô cực, như $\lim n u_n^2$, bằng cách tính $\frac{1}{u_{n+1}^2} - \frac{1}{u_n^2}$.

### 6. Sai lầm hay gặp
- Viết $L = f(L)$ khi chưa chứng minh dãy hội tụ. Ví dụ $u_1 = 2$, $u_{n+1} = u_n^2$: phương trình $L = L^2$ cho $L \in \{0; 1\}$, nhưng dãy dần tới $+\infty$.
- Phương trình $L = f(L)$ có nhiều nghiệm mà không chỉ ra giới hạn là nghiệm nào (dùng miền chứa dãy để loại).
- Áp dụng "tổng các giới hạn bằng giới hạn của tổng" cho tổng có số số hạng phụ thuộc $n$: $\frac1{n^2} + \dots + \frac{n}{n^2}$ không dần tới $0 + \dots + 0$.
- Dùng tổng tích phân khi số hạng không có dạng $\frac1n f\left(\frac kn\right)$.

---

## II. Bài tập vận dụng

**Bài 1.** Cho dãy $u_1 = 1$, $u_{n+1} = \sqrt{2 + u_n}$. Chứng minh dãy hội tụ và tìm giới hạn. Chứng minh thêm $u_n = 2\cos\dfrac{\pi}{3\cdot 2^{n-1}}$.

**Bài 2.** Tìm công thức tổng quát và giới hạn:
a) $u_1 = 1$, $u_2 = 5$, $u_{n+2} = 5u_{n+1} - 6u_n$. Tính $\lim\dfrac{u_{n+1}}{u_n}$.
b) $u_1 = 1$, $u_{n+1} = 2u_n + n$. Tính $\lim\dfrac{u_n}{2^n}$.

**Bài 3.** Cho dãy $u_1 = 1$, $u_{n+1} = 1 + \dfrac{1}{u_n}$. Chứng minh dãy hội tụ và tìm giới hạn.

**Bài 4.** Tính $\lim\limits_{n\to\infty}\left(\dfrac{1}{n^2 + 1} + \dfrac{2}{n^2 + 2} + \dots + \dfrac{n}{n^2 + n}\right)$.

**Bài 5 (tổng tích phân).** Tính
a) $\lim\limits_{n\to\infty}\displaystyle\sum_{k=1}^n\frac{n}{n^2 + k^2}$;
b) $\lim\limits_{n\to\infty}\dfrac1n\sqrt[n]{(n + 1)(n + 2)\cdots(2n)}$.

**Bài 6.** Cho dãy $u_1 = 2$, $u_{n+1} = u_n^2 - u_n + 1$. Tính $\lim\limits_{n\to\infty}\left(\dfrac{1}{u_1} + \dfrac{1}{u_2} + \dots + \dfrac{1}{u_n}\right)$.

**Bài 7.** Cho dãy $u_1 = 1$, $u_{n+1} = u_n + \dfrac{1}{u_n}$. Chứng minh $\lim u_n = +\infty$ và tính $\lim\dfrac{u_n}{\sqrt n}$.

**Bài 8.** Cho dãy $u_1 = \dfrac{\sqrt2}{2}$, $u_{n+1} = \sqrt{\dfrac{1 + u_n}{2}}$. Tính $\lim u_n$ và $\lim\limits_{n\to\infty}(u_1u_2\cdots u_n)$.

**Bài 9 (ánh xạ co).** Chứng minh phương trình $\cos x = x$ có nghiệm duy nhất $L$, và dãy $u_1 = 0$, $u_{n+1} = \cos u_n$ hội tụ về $L$.

**Bài 10 (tham số).** Cho dãy $u_1 = a$, $u_{n+1} = u_n^2 - 2u_n + 2$. Tìm $a$ để dãy hội tụ và tìm giới hạn trong từng trường hợp.

**Bài 11 (dãy nghiệm).** Với mỗi số nguyên $n \ge 2$, chứng minh phương trình $x^n = x + 1$ có đúng một nghiệm dương $x_n$. Tính $\lim x_n$ và $\lim n(x_n - 1)$.

**Bài 12 (Stolz).** Cho dãy $u_1 = 1$, $u_{n+1} = \sin u_n$. Chứng minh $\lim u_n = 0$ và tính $\lim\sqrt n\,u_n$.

---

## III. Lời giải chi tiết

### Bài 1
**Bị chặn:** $0 < u_n < 2$ với mọi $n$. Quy nạp: $u_1 = 1$; nếu $0 < u_n < 2$ thì $0 < u_{n+1} = \sqrt{2 + u_n} < \sqrt4 = 2$.

**Tăng:** $u_{n+1}^2 - u_n^2 = 2 + u_n - u_n^2 = (2 - u_n)(1 + u_n) > 0$, nên $u_{n+1} > u_n$.

Dãy tăng, bị chặn trên nên hội tụ về $L \in [1; 2]$. Qua giới hạn: $L = \sqrt{2 + L} \iff L^2 - L - 2 = 0$, $L \ge 0$, nên $L = 2$.

**Công thức:** $u_1 = 1 = 2\cos\frac\pi3$. Nếu $u_n = 2\cos\alpha$ với $\alpha \in \left(0; \frac\pi2\right)$ thì
$$u_{n+1} = \sqrt{2 + 2\cos\alpha} = \sqrt{4\cos^2\frac\alpha2} = 2\cos\frac\alpha2.$$
Vậy $\alpha$ giảm một nửa sau mỗi bước: $u_n = 2\cos\frac{\pi}{3\cdot 2^{n-1}}$. Công thức này cũng cho ngay $\lim u_n = 2\cos 0 = 2$.

**Đáp số:** $\lim u_n = 2$.

### Bài 2
a) Phương trình đặc trưng $x^2 = 5x - 6$ có nghiệm $2$ và $3$, nên $u_n = A\cdot 2^n + B\cdot 3^n$. Từ $u_1 = 2A + 3B = 1$, $u_2 = 4A + 9B = 5$: $B = 1$, $A = -1$. Vậy $u_n = 3^n - 2^n$ và
$$\frac{u_{n+1}}{u_n} = \frac{3^{n+1} - 2^{n+1}}{3^n - 2^n} = \frac{3 - 2\left(\frac23\right)^n}{1 - \left(\frac23\right)^n} \to 3.$$

b) Tìm nghiệm riêng $v_n = an + b$: $a(n + 1) + b = 2(an + b) + n$ với mọi $n$, nên $a = 2a + 1$ và $a + b = 2b$, tức là $a = -1$, $b = -1$. Khi đó $w_n = u_n + n + 1$ thỏa $w_{n+1} = 2w_n$, $w_1 = 3$. Vậy
$$u_n = 3\cdot 2^{n-1} - n - 1, \qquad \frac{u_n}{2^n} = \frac32 - \frac{n + 1}{2^n} \to \frac32$$
(vì $2^n \ge \frac{n(n-1)}{2}$ với $n \ge 2$ nên $\frac{n+1}{2^n} \to 0$).

**Đáp số:** a) $u_n = 3^n - 2^n$, giới hạn $3$; b) $u_n = 3\cdot 2^{n-1} - n - 1$, giới hạn $\frac32$.

### Bài 3
Quy nạp: $1 \le u_n \le 2$ (vì $u_n \ge 1 \Rightarrow u_{n+1} = 1 + \frac1{u_n} \in (1; 2]$).

Gọi $L = \frac{1 + \sqrt5}{2}$, nghiệm dương của $L = 1 + \frac1L$. Ta có
$$\lvert u_{n+1} - L\rvert = \left\lvert\frac1{u_n} - \frac1L\right\rvert = \frac{\lvert u_n - L\rvert}{u_nL} \le \frac{\lvert u_n - L\rvert}{L},$$
vì $u_n \ge 1$. Do $L > 1$, $\lvert u_n - L\rvert \le \frac{\lvert u_1 - L\rvert}{L^{n-1}} \to 0$.

**Đáp số:** $\lim u_n = \frac{1 + \sqrt5}{2}$.

*Nhận xét:* $f(x) = 1 + \frac1x$ nghịch biến nên dãy không đơn điệu (các số hạng lần lượt $1; 2; \frac32; \frac53; \dots$ dao động quanh $L$). Đánh giá kiểu ánh xạ co tránh được việc tách hai dãy con.

### Bài 4
Với $1 \le k \le n$: $\frac{k}{n^2 + n} \le \frac{k}{n^2 + k} \le \frac{k}{n^2 + 1}$. Cộng lại, với $S_n$ là tổng cần tính:
$$\frac{n(n+1)}{2(n^2 + n)} \le S_n \le \frac{n(n + 1)}{2(n^2 + 1)}.$$
Vế trái bằng $\frac12$, vế phải dần tới $\frac12$.

**Đáp số:** $\frac12$.

### Bài 5
a) $\sum_{k=1}^n\frac{n}{n^2 + k^2} = \frac1n\sum_{k=1}^n\frac{1}{1 + (k/n)^2}$, là tổng tích phân của $f(x) = \frac{1}{1 + x^2}$ trên $[0; 1]$. Do đó giới hạn bằng
$$\int_0^1\frac{dx}{1 + x^2} = \int_0^{\pi/4}\frac{(1 + \tan^2t)\,dt}{1 + \tan^2t} = \frac\pi4 \quad (x = \tan t).$$

b) Gọi $A_n$ là biểu thức. Có $\ln A_n = \frac1n\sum_{k=1}^n\ln(n + k) - \ln n = \frac1n\sum_{k=1}^n\ln\left(1 + \frac kn\right)$, là tổng tích phân của $\ln(1 + x)$. Từng phần:
$$\int_0^1\ln(1 + x)\,dx = \big[(1 + x)\ln(1 + x) - x\big]_0^1 = 2\ln2 - 1.$$
Vậy $\lim A_n = e^{2\ln2 - 1} = \frac4e$.

**Đáp số:** a) $\frac\pi4$; b) $\frac4e$.

### Bài 6
**Dãy dần tới vô cực.** $u_{n+1} - u_n = (u_n - 1)^2$. Quy nạp $u_n$ là số nguyên $\ge 2$, nên $u_{n+1} - u_n \ge 1$ và $u_n \ge n + 1 \to +\infty$.

**Tách sai phân.** $u_{n+1} - 1 = u_n(u_n - 1)$, nên
$$\frac{1}{u_{n+1} - 1} = \frac{1}{u_n(u_n - 1)} = \frac{1}{u_n - 1} - \frac{1}{u_n} \;\Rightarrow\; \frac1{u_n} = \frac{1}{u_n - 1} - \frac{1}{u_{n+1} - 1}.$$
Cộng từ $1$ đến $n$:
$$\sum_{k=1}^n\frac{1}{u_k} = \frac{1}{u_1 - 1} - \frac{1}{u_{n+1} - 1} = 1 - \frac{1}{u_{n+1} - 1} \to 1.$$

**Đáp số:** $1$.

### Bài 7
Rõ ràng $u_n \ge 1$ và dãy tăng. Bình phương hệ thức truy hồi:
$$u_{k+1}^2 = u_k^2 + 2 + \frac{1}{u_k^2}.$$
**Chặn dưới.** $u_{k+1}^2 \ge u_k^2 + 2$, nên $u_n^2 \ge 1 + 2(n - 1) = 2n - 1$. Suy ra $u_n \to +\infty$.

**Chặn trên.** Cộng từ $k = 1$ đến $n - 1$:
$$u_n^2 = 2n - 1 + \sum_{k=1}^{n-1}\frac1{u_k^2} \le 2n - 1 + \sum_{k=1}^{n-1}\frac{1}{2k - 1} \le 2n - 1 + \sum_{k=1}^{n-1}\frac1{\sqrt k}.$$
Mà $\frac{1}{\sqrt k} < \frac{2}{\sqrt k + \sqrt{k - 1}} = 2(\sqrt k - \sqrt{k - 1})$, nên tổng cuối nhỏ hơn $2\sqrt{n - 1} < 2\sqrt n$.

Vậy $2 - \frac1n \le \frac{u_n^2}{n} \le 2 - \frac1n + \frac{2}{\sqrt n}$, theo nguyên lý kẹp $\frac{u_n^2}{n} \to 2$.

**Đáp số:** $\lim\frac{u_n}{\sqrt n} = \sqrt2$.

### Bài 8
**Công thức.** $u_1 = \cos\frac\pi4$. Nếu $u_n = \cos\alpha$ với $\alpha \in \left(0; \frac\pi2\right)$ thì $u_{n+1} = \sqrt{\frac{1 + \cos\alpha}{2}} = \cos\frac\alpha2$. Vậy $u_n = \cos\frac{\pi}{2^{n+1}}$ và $\lim u_n = 1$.

**Tích.** Đặt $P_n = u_1u_2\cdots u_n$ và $\beta = \frac{\pi}{2^{n+1}}$. Dùng $\sin2x = 2\sin x\cos x$ liên tiếp:
$$P_n\sin\beta = \cos\frac{\pi}{4}\cdots\cos\frac{\pi}{2^{n+1}}\sin\frac{\pi}{2^{n+1}} = \frac{1}{2^n}\sin\frac\pi2 = \frac1{2^n}.$$
Do đó
$$P_n = \frac{1}{2^n\sin\frac{\pi}{2^{n+1}}} = \frac2\pi\cdot\frac{\frac{\pi}{2^{n+1}}}{\sin\frac{\pi}{2^{n+1}}} \to \frac2\pi.$$

**Đáp số:** $\lim u_n = 1$, $\lim P_n = \frac2\pi$.

*Nhận xét:* đây là công thức Viète: $\frac2\pi = \frac{\sqrt2}{2}\cdot\frac{\sqrt{2 + \sqrt2}}{2}\cdot\frac{\sqrt{2 + \sqrt{2 + \sqrt2}}}{2}\cdots$

### Bài 9
**Nghiệm duy nhất.** $g(x) = x - \cos x$ có $g'(x) = 1 + \sin x \ge 0$, chỉ bằng $0$ tại các điểm rời rạc, nên $g$ đồng biến trên $\mathbb R$. Có $g(0) = -1 < 0$, $g(1) = 1 - \cos1 > 0$, nên $g$ có đúng một nghiệm $L \in (0; 1)$.

**Hội tụ.** Với $x \in [0; 1]$ thì $\cos x \in [\cos1; 1] \subset [0; 1]$. Vì $u_1 = 0$, quy nạp mọi $u_n \in [0; 1]$. Theo định lý Lagrange, với $a, b \in [0; 1]$ có $c$ nằm giữa $a$ và $b$ sao cho
$$\lvert\cos a - \cos b\rvert = \lvert\sin c\rvert\cdot\lvert a - b\rvert \le \sin1\cdot\lvert a - b\rvert.$$
Áp dụng với $a = u_n$, $b = L$: $\lvert u_{n+1} - L\rvert \le \sin1\cdot\lvert u_n - L\rvert$, nên $\lvert u_n - L\rvert \le (\sin1)^{n-1}\lvert u_1 - L\rvert \to 0$ (vì $0 < \sin1 < 1$).

**Kết luận:** $\lim u_n = L \approx 0{,}739$.

### Bài 10
Đặt $v_n = u_n - 1$. Hệ thức thành $v_{n+1} = u_n^2 - 2u_n + 1 = v_n^2$, nên $v_n = v_1^{2^{n-1}} = (a - 1)^{2^{n-1}}$ (với $n \ge 2$ thì $v_n \ge 0$).
- $\lvert a - 1\rvert < 1$, tức là $0 < a < 2$: $v_n \to 0$, $\lim u_n = 1$.
- $\lvert a - 1\rvert = 1$, tức là $a = 0$ hoặc $a = 2$: $v_n = 1$ với $n \ge 2$, $\lim u_n = 2$.
- $\lvert a - 1\rvert > 1$: $v_n \to +\infty$, dãy không hội tụ.

**Đáp số:** dãy hội tụ khi và chỉ khi $0 \le a \le 2$; giới hạn là $1$ nếu $0 < a < 2$, là $2$ nếu $a \in \{0; 2\}$.

### Bài 11
**Nghiệm duy nhất.** Xét $h(x) = x^n - x - 1$ trên $(0; +\infty)$.
- Với $0 < x \le 1$: $x^n \le 1 < x + 1$, nên $h(x) < 0$, không có nghiệm.
- Với $x > 1$: $h'(x) = nx^{n-1} - 1 > 0$, $h$ đồng biến; $h(1) = -1 < 0$, $h(2) = 2^n - 3 > 0$. Có đúng một nghiệm $x_n \in (1; 2)$.

**Giới hạn của $x_n$.** $x_n^n = x_n + 1 < 3$, nên $1 < x_n < \sqrt[n]3 \to 1$. Vậy $\lim x_n = 1$.

**Giới hạn của $n(x_n - 1)$.** Lấy lôgarit: $n\ln x_n = \ln(x_n + 1) \to \ln 2$. Đặt $t_n = x_n - 1 \to 0^+$, thì $\frac{\ln x_n}{x_n - 1} = \frac{\ln(1 + t_n)}{t_n} \to 1$. Do đó
$$n(x_n - 1) = n\ln x_n\cdot\frac{x_n - 1}{\ln x_n} \to \ln2\cdot 1 = \ln2.$$

**Đáp số:** $\lim x_n = 1$, $\lim n(x_n - 1) = \ln2$.

### Bài 12
**$u_n \to 0$.** Vì $0 < \sin x < x$ với $x \in (0; 1]$, quy nạp $0 < u_{n+1} < u_n \le 1$. Dãy giảm, bị chặn dưới, hội tụ về $L \in [0; 1]$ với $L = \sin L$, nên $L = 0$.

**Bổ đề.** $\lim\limits_{x\to0}\left(\frac1{\sin^2x} - \frac1{x^2}\right) = \frac13$.

*Chứng minh:* $\frac1{\sin^2x} - \frac1{x^2} = \frac{x - \sin x}{x^3}\cdot\frac{x + \sin x}{x}\cdot\frac{x^2}{\sin^2x}$. Thừa số thứ hai dần tới $2$, thừa số thứ ba dần tới $1$. Với thừa số đầu, khi $x > 0$, theo chuỗi đạo hàm như ở Chủ đề 3:
$$x - \frac{x^3}{6} \le \sin x \le x - \frac{x^3}{6} + \frac{x^5}{120} \;\Rightarrow\; \frac16 - \frac{x^2}{120} \le \frac{x - \sin x}{x^3} \le \frac16,$$
nên nó dần tới $\frac16$ (biểu thức chẵn theo $x$, nên xét $x > 0$ là đủ). Tích các giới hạn: $\frac16\cdot 2\cdot 1 = \frac13$.

**Áp dụng Stolz** với $a_n = n$, $b_n = \frac{1}{u_n^2}$ (tăng ngặt, dần tới $+\infty$):
$$\frac{a_{n+1} - a_n}{b_{n+1} - b_n} = \frac{1}{\frac{1}{\sin^2u_n} - \frac{1}{u_n^2}} \to \frac{1}{1/3} = 3.$$
Vậy $\lim nu_n^2 = 3$, tức là $\lim\sqrt n\,u_n = \sqrt3$.

**Đáp số:** $\lim\sqrt n\,u_n = \sqrt3$.

*Nhận xét:* bất đẳng thức $\sin x \le x - \frac{x^3}{6} + \frac{x^5}{120}$ chứng minh bằng cách lấy đạo hàm liên tiếp, đưa về $\cos x \le 1 - \frac{x^2}{2} + \frac{x^4}{24}$, rồi về $\sin x \ge x - \frac{x^3}{6}$ đã biết.

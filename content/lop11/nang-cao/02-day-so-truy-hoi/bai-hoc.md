# Chủ đề 2. Dãy số truy hồi

> Dãy số cho bởi hệ thức truy hồi là câu quen thuộc của đề HSG lớp 11: tìm số hạng tổng quát, tính tổng, chứng minh tính chất số học (mọi số hạng nguyên, chính phương). Đây cũng là bước chuẩn bị bắt buộc cho chủ đề giới hạn dãy số.

## I. Kiến thức cần nắm

### 1. Quy nạp toán học
Để chứng minh mệnh đề $P(n)$ đúng với mọi $n \ge n_0$:
1. **Cơ sở:** kiểm tra $P(n_0)$ đúng.
2. **Bước quy nạp:** giả sử $P(k)$ đúng ($k \ge n_0$), chứng minh $P(k + 1)$ đúng.

*Vì sao đúng:* nếu có $n$ làm $P(n)$ sai, lấy $n$ nhỏ nhất như vậy. Khi đó $n > n_0$ và $P(n - 1)$ đúng, nên theo bước quy nạp $P(n)$ đúng: mâu thuẫn.

**Quy nạp mạnh:** ở bước quy nạp được giả sử $P(n_0), P(n_0 + 1), \dots, P(k)$ đều đúng. Dùng khi hệ thức truy hồi liên quan đến **hai số hạng trước** trở lên, khi đó phần cơ sở phải kiểm tra **hai** giá trị đầu.

**Dãy tăng, giảm, bị chặn.** $(u_n)$ tăng nếu $u_{n+1} > u_n$ với mọi $n$; bị chặn trên nếu có $M$ với $u_n \le M$ với mọi $n$. Với dãy truy hồi, các tính chất này thường được chứng minh bằng quy nạp.

### 2. Dãy truy hồi cấp một $u_{n+1} = au_n + b$
- $a = 1$: cấp số cộng, $u_n = u_1 + (n - 1)b$.
- $b = 0$: cấp số nhân, $u_n = u_1a^{n-1}$.
- $a \ne 1$: tìm **điểm bất động** $c$ thỏa mãn $c = ac + b$, tức $c = \frac{b}{1 - a}$. Trừ hai đẳng thức: $u_{n+1} - c = a(u_n - c)$. Vậy $(u_n - c)$ là cấp số nhân công bội $a$:
$$u_n = c + (u_1 - c)a^{n-1}.$$

*Ví dụ mẫu:* $u_1 = 2$, $u_{n+1} = \frac12u_n + 3$. Điểm bất động $c = 6$, nên $u_n = 6 - 4\cdot\left(\frac12\right)^{n-1}$.

### 3. Dãy $u_{n+1} = au_n + f(n)$: tìm một nghiệm riêng
Nếu tìm được **một** dãy $(w_n)$ thỏa mãn $w_{n+1} = aw_n + f(n)$ (nghiệm riêng), thì $v_n = u_n - w_n$ thỏa mãn $v_{n+1} = av_n$, nên $u_n = w_n + Ca^{n-1}$; hằng số $C$ tìm từ $u_1$.

Cách đoán nghiệm riêng ($a \ne 1$):

| $f(n)$ | Thử $w_n$ |
|---|---|
| đa thức bậc $m$ theo $n$ | đa thức bậc $m$ |
| $\lambda\cdot q^n$ với $q \ne a$ | $c\cdot q^n$ |
| $\lambda\cdot a^n$ (trùng công bội) | $c\cdot n\,a^n$ |

Nếu $a = 1$ thì $u_n = u_1 + \sum_{k=1}^{n-1}f(k)$: bài toán trở thành **tính tổng**.

*Ví dụ mẫu:* $u_1 = 1$, $u_{n+1} = u_n + 2n + 1$. Ta có $u_n = 1 + \sum_{k=1}^{n-1}(2k + 1) = 1 + (n - 1)n + (n - 1) = n^2$.

### 4. Truy hồi tuyến tính cấp hai $u_{n+2} = pu_{n+1} + qu_n$
**Phương trình đặc trưng:** $x^2 = px + q$, nghiệm $\alpha$, $\beta$.
- $\alpha \ne \beta$ (thực): $u_n = A\alpha^n + B\beta^n$.
- $\alpha = \beta$: $u_n = (A + Bn)\alpha^n$.

Hằng số $A$, $B$ tìm từ $u_1$, $u_2$.

**Vì sao đúng.** Theo Viète, $p = \alpha + \beta$, $q = -\alpha\beta$. Hệ thức truy hồi viết được thành
$$u_{n+2} - \alpha u_{n+1} = \beta(u_{n+1} - \alpha u_n).$$
Vậy $v_n = u_{n+1} - \alpha u_n$ là cấp số nhân công bội $\beta$: $v_n = v_1\beta^{n-1}$. Bài toán trở về dạng cấp một $u_{n+1} = \alpha u_n + v_1\beta^{n-1}$ ở mục 3: nếu $\beta \ne \alpha$ thì nghiệm riêng có dạng $c\beta^n$, ra công thức $A\alpha^n + B\beta^n$; nếu $\beta = \alpha$ thì nghiệm riêng có dạng $cn\alpha^n$, ra $(A + Bn)\alpha^n$.

*Ví dụ mẫu (Fibonacci):* $F_1 = F_2 = 1$, $F_{n+2} = F_{n+1} + F_n$. Phương trình $x^2 = x + 1$ có nghiệm $\frac{1 \pm \sqrt5}{2}$, và
$$F_n = \frac{1}{\sqrt5}\left[\left(\frac{1 + \sqrt5}{2}\right)^n - \left(\frac{1 - \sqrt5}{2}\right)^n\right].$$

**Nhận xét:** dãy cho bởi hệ hai dãy $x_{n+1} = ax_n + by_n$, $y_{n+1} = cx_n + dy_n$ cũng đưa được về dạng cấp hai bằng cách khử $y$.

### 5. Đổi biến để tuyến tính hóa
| Dạng | Đổi biến |
|---|---|
| $u_{n+1} = \frac{u_n}{1 + cu_n}$ | $v_n = \frac1{u_n}$: $v_{n+1} = v_n + c$ |
| $u_{n+1} = \frac{au_n + b}{cu_n + d}$, phương trình $x = \frac{ax + b}{cx + d}$ có hai nghiệm $x_1 \ne x_2$ | $v_n = \frac{u_n - x_1}{u_n - x_2}$ là cấp số nhân |
| như trên nhưng có nghiệm kép $x_0$ | $v_n = \frac{1}{u_n - x_0}$ là cấp số cộng |
| $u_{n+1} = 2u_n^2 - 1$, $u_{n+1} = \sqrt{\frac{1 + u_n}{2}}$, $\lvert u_1\rvert \le 1$ | $u_n = \cos\varphi_n$ (nhân đôi, chia đôi góc) |
| $u_{n+1} = \frac{u_n + a}{1 - au_n}$ | $u_n = \tan\varphi_n$, $a = \tan\alpha$: $\varphi_{n+1} = \varphi_n + \alpha$ |
| $u_{n+1} - c = (u_n - c)^2$ hoặc $u_{n+1} = ku_n^2$ | bình phương lặp: $u_n - c = (u_1 - c)^{2^{n-1}}$ |

*Vì sao dạng phân tuyến tính đúng:* trừ $x_i = \frac{ax_i + b}{cx_i + d}$ khỏi hệ thức truy hồi được $u_{n+1} - x_i = \frac{(ad - bc)(u_n - x_i)}{(cu_n + d)(cx_i + d)}$; lấy thương với $i = 1, 2$ thì mẫu $(cu_n + d)$ triệt tiêu, còn lại $v_{n+1} = \frac{cx_2 + d}{cx_1 + d}v_n$.

### 6. Sai phân và tổng triệt tiêu
Nếu viết được $a_k = g(k + 1) - g(k)$ (hoặc $g(k) - g(k + 1)$) thì
$$a_1 + a_2 + \dots + a_n = g(n + 1) - g(1).$$
Với dãy truy hồi, hệ thức thường **tự sinh ra** sai phân. Ví dụ $u_{n+1} = u_n^2 + u_n$ cho $\frac1{u_{n+1}} = \frac{1}{u_n(u_n + 1)} = \frac1{u_n} - \frac{1}{u_n + 1}$, nên $\frac{1}{u_n + 1} = \frac1{u_n} - \frac1{u_{n+1}}$.

Hệ thức $S_n = f(n, u_n)$ giữa tổng và số hạng: dùng $u_n = S_n - S_{n-1}$ ($n \ge 2$) để có hệ thức truy hồi giữa $u_n$ và $u_{n-1}$.

### 7. Tính chất số học của dãy truy hồi
- **Dãy nguyên:** truy hồi phi tuyến kiểu $u_{n+1} = \frac{u_n^2 + c}{u_{n-1}}$ thường **ẩn một hệ thức tuyến tính** $u_{n+1} = ku_n - u_{n-1}$ với $k$ nguyên. Cách tìm: chứng minh một đại lượng bất biến, rồi trừ hai bất biến liên tiếp.
- **Bất biến dạng toàn phương:** với $x_{n+2} = kx_{n+1} - x_n$, đại lượng $x_{n+1}^2 - kx_{n+1}x_n + x_n^2$ không đổi.
- **Dãy tuần hoàn:** tính vài số hạng đầu; nếu $u_{T+1} = u_1$ (với truy hồi cấp một) thì dãy tuần hoàn chu kỳ $T$, và $u_n = u_r$ với $r$ là số dư của $n$ khi chia cho $T$ (lấy $r = T$ nếu chia hết).

### 8. Sai lầm hay gặp
- Quy nạp với truy hồi cấp hai mà chỉ kiểm tra **một** giá trị đầu.
- Đoán công thức từ vài số hạng rồi **không chứng minh**. Công thức đoán phải được chứng minh bằng quy nạp hoặc suy ra từ phép biến đổi.
- Lệch chỉ số: công thức $u_n = A\alpha^n + B\beta^n$ hay $A\alpha^{n-1} + B\beta^{n-1}$ đều được, nhưng phải giải hệ tìm $A$, $B$ cho đúng với cách viết đã chọn.
- Chia cho $u_n$ mà chưa chứng minh $u_n \ne 0$.

---

## II. Bài tập vận dụng

**Bài 1.** Cho dãy $u_1 = 1$, $u_{n+1} = 3u_n + 2$. Tìm $u_n$ và tính $S_n = u_1 + u_2 + \dots + u_n$.

**Bài 2.** Cho dãy $u_1 = 1$, $u_{n+1} = 2u_n + n - 1$. Tìm công thức số hạng tổng quát.

**Bài 3.** Cho dãy $u_1 = 1$, $u_{n+1} = 2u_n + 3^n$. Tìm công thức số hạng tổng quát.

**Bài 4.** Cho dãy $u_1 = 2$, $u_2 = 8$, $u_{n+2} = 5u_{n+1} - 6u_n$. Tìm $u_n$.

**Bài 5 (nghiệm kép).** Cho dãy $u_1 = 1$, $u_2 = 4$, $u_{n+2} = 4u_{n+1} - 4u_n$. Tìm $u_n$.

**Bài 6.** Dãy $(u_n)$ có $u_1 = 1$ và $u_1 + u_2 + \dots + u_n = n^2u_n$ với mọi $n \ge 1$. Tìm $u_n$.

**Bài 7 (dãy tuần hoàn).** Cho dãy $u_1 = 2$, $u_{n+1} = \dfrac{1 + u_n}{1 - u_n}$. Tính $u_{2025}$.

**Bài 8.** Cho dãy $u_1 = 3$, $u_{n+1} = \dfrac{3u_n - 2}{u_n}$. Tìm công thức số hạng tổng quát.

**Bài 9 (lượng giác hóa).** Cho dãy $u_1 = \dfrac{\sqrt3}{2}$, $u_{n+1} = \sqrt{\dfrac{1 + u_n}{2}}$. Tìm $u_n$.

**Bài 10.** Cho dãy $u_1 = 3$, $u_{n+1} = u_n^2 - 2u_n + 2$.
a) Tìm công thức số hạng tổng quát.
b) Chứng minh $u_1u_2\cdots u_n = u_{n+1} - 2$ với mọi $n \ge 1$.

**Bài 11 (sai phân).** Cho dãy $u_1 = 1$, $u_{n+1} = u_n^2 + u_n$. Đặt $S_n = \dfrac{1}{u_1 + 1} + \dfrac{1}{u_2 + 1} + \dots + \dfrac{1}{u_n + 1}$. Rút gọn $S_n$ và tìm phần nguyên của $S_{2025}$.

**Bài 12 (hệ hai dãy).** Cho hai dãy $x_1 = y_1 = 1$, $x_{n+1} = x_n + 2y_n$, $y_{n+1} = x_n + y_n$.
a) Chứng minh $x_n^2 - 2y_n^2 = (-1)^n$.
b) Tìm công thức của $x_n$ và $y_n$.

**Bài 13 (HSG cấp tỉnh).** Cho dãy $u_1 = u_2 = 1$, $u_{n+2} = 7u_{n+1} - u_n - 2$. Chứng minh mọi số hạng của dãy đều là số chính phương.

**Bài 14 (HSG cấp tỉnh).** Cho dãy $u_1 = u_2 = 1$, $u_{n+1} = \dfrac{u_n^2 + 2}{u_{n-1}}$ với $n \ge 2$. Chứng minh mọi số hạng của dãy đều là số nguyên.

---

## III. Lời giải chi tiết

### Bài 1
Điểm bất động: $c = 3c + 2 \iff c = -1$. Trừ: $u_{n+1} + 1 = 3(u_n + 1)$, nên $(u_n + 1)$ là cấp số nhân với số hạng đầu $2$, công bội $3$:
$$u_n = 2\cdot 3^{n-1} - 1.$$
Tổng: $S_n = 2(1 + 3 + \dots + 3^{n-1}) - n = 2\cdot\frac{3^n - 1}{2} - n = 3^n - n - 1$.

**Đáp số:** $u_n = 2\cdot 3^{n-1} - 1$, $S_n = 3^n - n - 1$. (Kiểm tra: $u_1 = 1$, $u_2 = 5$, $S_2 = 6 = 9 - 2 - 1$.)

### Bài 2
Tìm nghiệm riêng dạng $w_n = an + b$: $a(n + 1) + b = 2(an + b) + n - 1$ với mọi $n$.
So sánh hệ số của $n$: $a = 2a + 1$, nên $a = -1$. Hệ số tự do: $a + b = 2b - 1$, nên $b = a + 1 = 0$. Vậy $w_n = -n$.
Đặt $v_n = u_n + n$, ta có $v_{n+1} = 2v_n$ và $v_1 = 2$, nên $v_n = 2^n$.

**Đáp số:** $u_n = 2^n - n$. (Kiểm tra: $u_2 = 2\cdot 1 + 0 = 2 = 4 - 2$, $u_3 = 2\cdot 2 + 1 = 5 = 8 - 3$.)

### Bài 3
Vì $3 \ne 2$, tìm nghiệm riêng dạng $w_n = c\cdot 3^n$: $c\cdot 3^{n+1} = 2c\cdot 3^n + 3^n \iff 3c = 2c + 1 \iff c = 1$.
Đặt $v_n = u_n - 3^n$ thì $v_{n+1} = 2v_n$, $v_1 = 1 - 3 = -2$, nên $v_n = -2^n$.

**Đáp số:** $u_n = 3^n - 2^n$.

*Nhận xét:* nếu đề là $u_{n+1} = 2u_n + 2^n$ (trùng công bội) thì phải thử $w_n = cn\cdot 2^n$; ra $c = \frac12$.

### Bài 4
Phương trình đặc trưng $x^2 = 5x - 6$ có nghiệm $2$ và $3$, nên $u_n = A\cdot 2^n + B\cdot 3^n$.
Từ $u_1 = 2$, $u_2 = 8$: $\begin{cases}2A + 3B = 2\\ 4A + 9B = 8\end{cases}$. Nhân phương trình đầu với 2 rồi trừ: $3B = 4$, $B = \frac43$, $A = -1$.

**Đáp số:** $u_n = 4\cdot 3^{n-1} - 2^n$. (Kiểm tra: $u_3 = 5\cdot 8 - 6\cdot 2 = 28 = 36 - 8$.)

### Bài 5
Phương trình đặc trưng $x^2 - 4x + 4 = 0$ có nghiệm kép $x = 2$, nên $u_n = (A + Bn)2^n$.
Từ $u_1 = 1$, $u_2 = 4$: $2(A + B) = 1$ và $4(A + 2B) = 4$, nên $A + B = \frac12$, $A + 2B = 1$. Suy ra $B = \frac12$, $A = 0$.

**Đáp số:** $u_n = n\cdot 2^{n-1}$. (Kiểm tra: $u_3 = 16 - 4 = 12 = 3\cdot 4$.)

### Bài 6
Với $n \ge 2$: $u_n = S_n - S_{n-1} = n^2u_n - (n - 1)^2u_{n-1}$, nên $(n^2 - 1)u_n = (n - 1)^2u_{n-1}$, tức
$$u_n = \frac{n - 1}{n + 1}u_{n-1}.$$
Nhân các đẳng thức từ $2$ đến $n$:
$$u_n = u_1\cdot\frac13\cdot\frac24\cdot\frac35\cdots\frac{n - 1}{n + 1} = \frac{1\cdot 2}{n(n + 1)}.$$

**Đáp số:** $u_n = \dfrac{2}{n(n + 1)}$.

*Nhận xét:* tích "nhảy hai bậc" $\frac13\cdot\frac24\cdot\frac35\cdots$ chỉ còn hai thừa số đầu ở tử và hai thừa số cuối ở mẫu.

### Bài 7
Tính trực tiếp: $u_1 = 2$, $u_2 = \frac{3}{-1} = -3$, $u_3 = \frac{-2}{4} = -\frac12$, $u_4 = \frac{1/2}{3/2} = \frac13$, $u_5 = \frac{4/3}{2/3} = 2 = u_1$.
Vì $u_{n+1}$ chỉ phụ thuộc $u_n$, từ $u_5 = u_1$ suy ra (quy nạp) $u_{n+4} = u_n$ với mọi $n$: dãy tuần hoàn chu kỳ 4.
Ta có $2025 = 4\cdot 506 + 1$ nên $u_{2025} = u_1 = 2$.

**Đáp số:** $u_{2025} = 2$.

*Nhận xét:* vì sao chu kỳ 4? Đặt $u_n = \tan\varphi_n$, thì $u_{n+1} = \frac{\tan\frac\pi4 + \tan\varphi_n}{1 - \tan\frac\pi4\tan\varphi_n} = \tan\left(\varphi_n + \frac\pi4\right)$. Sau 4 bước góc tăng $\pi$, mà $\tan$ tuần hoàn chu kỳ $\pi$.

### Bài 8
Phương trình điểm bất động $x = \frac{3x - 2}{x} \iff x^2 - 3x + 2 = 0 \iff x = 1$ hoặc $x = 2$.
Bằng quy nạp, $u_n > 2$ với mọi $n$: $u_1 = 3$, và nếu $u_n > 2$ thì $u_{n+1} - 2 = \frac{u_n - 2}{u_n} > 0$. Do đó các mẫu dưới đây khác 0. Ta có
$$u_{n+1} - 2 = \frac{u_n - 2}{u_n}, \qquad u_{n+1} - 1 = \frac{2(u_n - 1)}{u_n}.$$
Đặt $v_n = \frac{u_n - 2}{u_n - 1}$, chia hai đẳng thức: $v_{n+1} = \frac12v_n$, $v_1 = \frac12$. Vậy $v_n = \frac{1}{2^n}$.
Từ $v_n = \frac{u_n - 2}{u_n - 1}$ giải ra $u_n = \frac{2 - v_n}{1 - v_n} = \frac{2^{n+1} - 1}{2^n - 1}$.

**Đáp số:** $u_n = \dfrac{2^{n+1} - 1}{2^n - 1}$. (Kiểm tra: $u_2 = \frac73$ và $\frac{3\cdot 3 - 2}{3} = \frac73$.)

### Bài 9
$u_1 = \frac{\sqrt3}{2} = \cos\frac\pi6$. Giả sử $u_n = \cos\alpha$ với $\alpha \in \left(0; \frac\pi2\right)$. Khi đó
$$u_{n+1} = \sqrt{\frac{1 + \cos\alpha}{2}} = \sqrt{\cos^2\frac\alpha2} = \cos\frac\alpha2 \quad\left(\text{vì } \cos\tfrac\alpha2 > 0\right).$$
Vậy góc giảm một nửa sau mỗi bước, bằng quy nạp:

**Đáp số:** $u_n = \cos\dfrac{\pi}{3\cdot 2^n}$.

*Nhận xét:* từ công thức này thấy ngay $u_n$ tăng và dần tới $\cos 0 = 1$ (chủ đề 3).

### Bài 10
a) $u_{n+1} - 1 = u_n^2 - 2u_n + 1 = (u_n - 1)^2$. Đặt $v_n = u_n - 1$: $v_{n+1} = v_n^2$, $v_1 = 2$. Bằng quy nạp $v_n = 2^{2^{n-1}}$ (vì $\left(2^{2^{n-1}}\right)^2 = 2^{2^n}$).

**Đáp số:** $u_n = 2^{2^{n-1}} + 1$ (đây là các số Fermat $3, 5, 17, 257, \dots$).

b) Hệ thức truy hồi viết được thành $u_{n+1} - 2 = u_n^2 - 2u_n = u_n(u_n - 2)$.
Quy nạp: với $n = 1$, $u_1 = 3 = 5 - 2 = u_2 - 2$. Giả sử $u_1\cdots u_n = u_{n+1} - 2$, thì
$$u_1\cdots u_nu_{n+1} = (u_{n+1} - 2)u_{n+1} = u_{n+2} - 2.$$

*Nhận xét:* từ b) suy ra hai số Fermat khác nhau luôn nguyên tố cùng nhau: ước chung $d$ của $u_m$ và $u_{n+1}$ ($m \le n$) chia hết $u_{n+1} - u_1\cdots u_n = 2$, mà các số đều lẻ nên $d = 1$.

### Bài 11
Bằng quy nạp $u_n \ge 1$, nên các phân số xác định. Ta có
$$\frac{1}{u_{k+1}} = \frac{1}{u_k(u_k + 1)} = \frac{1}{u_k} - \frac{1}{u_k + 1} \implies \frac{1}{u_k + 1} = \frac{1}{u_k} - \frac{1}{u_{k+1}}.$$
Cộng với $k = 1, \dots, n$: $S_n = \frac1{u_1} - \frac{1}{u_{n+1}} = 1 - \frac{1}{u_{n+1}}$.
Vì $u_{n+1} = u_n(u_n + 1) > u_n$ nên dãy tăng, $u_{2026} > u_2 = 2$. Suy ra $0 < \frac{1}{u_{2026}} < 1$, do đó $0 < S_{2025} < 1$.

**Đáp số:** $S_n = 1 - \dfrac{1}{u_{n+1}}$; phần nguyên của $S_{2025}$ bằng $0$.

### Bài 12
a) $x_{n+1}^2 - 2y_{n+1}^2 = (x_n + 2y_n)^2 - 2(x_n + y_n)^2 = x_n^2 + 4x_ny_n + 4y_n^2 - 2x_n^2 - 4x_ny_n - 2y_n^2 = -(x_n^2 - 2y_n^2)$.
Vậy $(x_n^2 - 2y_n^2)$ là cấp số nhân công bội $-1$, số hạng đầu $1 - 2 = -1$, nên $x_n^2 - 2y_n^2 = (-1)^n$.

b) **Khử $y$:** $x_{n+2} = x_{n+1} + 2y_{n+1} = x_{n+1} + 2x_n + 2y_n = x_{n+1} + 2x_n + (x_{n+1} - x_n) = 2x_{n+1} + x_n$.
Phương trình đặc trưng $t^2 = 2t + 1$ có nghiệm $1 \pm \sqrt2$. Với $x_1 = 1$, $x_2 = 3$, giải hệ được
$$x_n = \frac{(1 + \sqrt2)^n + (1 - \sqrt2)^n}{2}.$$
Từ $2y_n = x_{n+1} - x_n$ (theo định nghĩa $x_{n+1}$) và tính toán tương tự:
$$y_n = \frac{(1 + \sqrt2)^n - (1 - \sqrt2)^n}{2\sqrt2}.$$
*Kiểm tra nhanh hơn:* đặt $\alpha = 1 + \sqrt2$. Ta có $x_{n+1} + y_{n+1}\sqrt2 = (x_n + y_n\sqrt2)(1 + \sqrt2)$ (khai triển vế phải: $x_n + 2y_n + (x_n + y_n)\sqrt2$), nên $x_n + y_n\sqrt2 = \alpha^n$; tương tự $x_n - y_n\sqrt2 = (1 - \sqrt2)^n$. Cộng và trừ hai đẳng thức ra công thức trên.

*Nhận xét:* a) cũng suy ra từ đây: $x_n^2 - 2y_n^2 = \left[(1 + \sqrt2)(1 - \sqrt2)\right]^n = (-1)^n$.

### Bài 13
Tính vài số hạng: $1, 1, 4, 25, 169, 1156$, là bình phương của $1, 1, 2, 5, 13, 34$. Dãy căn có dạng $x_{n+2} = 3x_{n+1} - x_n$.

Xét dãy $x_1 = x_2 = 1$, $x_{n+2} = 3x_{n+1} - x_n$ (dãy số nguyên). Ta chứng minh $u_n = x_n^2$.

**Bước 1: bất biến.** Đặt $D_n = x_{n+1}^2 - 3x_{n+1}x_n + x_n^2$. Ta có $D_n = x_{n+1}^2 - x_n(3x_{n+1} - x_n) = x_{n+1}^2 - x_nx_{n+2}$, và
$$D_{n+1} = x_{n+2}^2 - 3x_{n+2}x_{n+1} + x_{n+1}^2 = x_{n+2}(x_{n+2} - 3x_{n+1}) + x_{n+1}^2 = -x_{n+2}x_n + x_{n+1}^2 = D_n.$$
Vậy $D_n = D_1 = 1 - 3 + 1 = -1$ với mọi $n$.

**Bước 2: dãy $a_n = x_n^2$ thỏa mãn cùng hệ thức với $(u_n)$.**
$$x_{n+2}^2 = (3x_{n+1} - x_n)^2 = 9x_{n+1}^2 - 6x_{n+1}x_n + x_n^2.$$
Theo bước 1, $6x_{n+1}x_n = 2x_{n+1}^2 + 2x_n^2 + 2$. Thay vào: $x_{n+2}^2 = 7x_{n+1}^2 - x_n^2 - 2$.

**Bước 3: quy nạp mạnh.** $u_1 = x_1^2$, $u_2 = x_2^2$; nếu $u_n = x_n^2$ và $u_{n+1} = x_{n+1}^2$ thì $u_{n+2} = 7x_{n+1}^2 - x_n^2 - 2 = x_{n+2}^2$.

Vậy mọi $u_n$ là số chính phương.

*Nhận xét:* $x_n$ là các số Fibonacci chỉ số lẻ $F_1, F_1, F_3, F_5, \dots$ Mẹo chung: **đoán căn bậc hai, tìm truy hồi tuyến tính của căn, rồi dùng bất biến toàn phương** để chứng minh.

### Bài 14
**Bước 1: các số hạng dương.** Quy nạp: $u_1, u_2 > 0$, và nếu $u_{n-1}, u_n > 0$ thì $u_{n+1} = \frac{u_n^2 + 2}{u_{n-1}} > 0$. Do đó phép chia luôn thực hiện được.

**Bước 2: bất biến.** Giả thiết cho $u_{n+1}u_{n-1} - u_n^2 = 2$ với mọi $n \ge 2$. Viết cho $n$ và $n + 1$ rồi trừ:
$$u_{n+2}u_n - u_{n+1}^2 = u_{n+1}u_{n-1} - u_n^2 \iff u_n(u_{n+2} + u_n) = u_{n+1}(u_{n+1} + u_{n-1}).$$
Chia cho $u_nu_{n+1} > 0$: $\dfrac{u_{n+2} + u_n}{u_{n+1}} = \dfrac{u_{n+1} + u_{n-1}}{u_n}$.

**Bước 3: hệ thức tuyến tính.** Vậy $\frac{u_{n+1} + u_{n-1}}{u_n}$ không đổi với $n \ge 2$, bằng giá trị tại $n = 2$: $u_3 = \frac{1 + 2}{1} = 3$, nên hằng số là $\frac{3 + 1}{1} = 4$. Do đó
$$u_{n+1} = 4u_n - u_{n-1} \quad (n \ge 2).$$
Từ $u_1 = u_2 = 1$ nguyên và hệ thức này, bằng quy nạp mạnh mọi $u_n$ đều nguyên. (Các số hạng đầu: $1, 1, 3, 11, 41, 153, \dots$)

*Nhận xét:* đây là kỹ thuật chuẩn cho dãy "nguyên ẩn": biến hệ thức phi tuyến thành bất biến, rồi trừ hai bất biến liên tiếp để lộ ra hệ thức tuyến tính hệ số nguyên.

# Chủ đề 3. Giới hạn dãy số

> Câu dãy số và giới hạn là câu phân loại trong đề HSG lớp 11. Dạng hay gặp nhất: cho dãy $u_{n+1} = f(u_n)$, chứng minh dãy có giới hạn và tìm giới hạn đó; hoặc tính giới hạn của một tổng bằng nguyên lý kẹp và tổng triệt tiêu.

## I. Kiến thức cần nắm

### 1. Giới hạn hữu hạn, giới hạn vô cực và các giới hạn cơ bản
- $\lim u_n = 0$ nếu $\lvert u_n\rvert$ nhỏ hơn mọi số dương cho trước, kể từ một số hạng nào đó trở đi. $\lim u_n = L \iff \lim(u_n - L) = 0$.
- $\lim u_n = +\infty$ nếu $u_n$ lớn hơn mọi số dương cho trước, kể từ một số hạng nào đó trở đi.
- **Giới hạn cơ bản:** $\lim\frac{1}{n^k} = 0$ ($k > 0$); $\lim q^n = 0$ nếu $\lvert q\rvert < 1$; $\lim q^n = +\infty$ nếu $q > 1$; $\lim c = c$.
- **Phép toán:** nếu $\lim u_n = a$, $\lim v_n = b$ (hữu hạn) thì $\lim(u_n \pm v_n) = a \pm b$, $\lim u_nv_n = ab$, $\lim\frac{u_n}{v_n} = \frac ab$ ($b \ne 0$), $\lim\sqrt{u_n} = \sqrt a$ ($u_n \ge 0$).
- Nếu $\lim u_n = a \ne 0$ và $\lim v_n = 0$, $v_n > 0$ thì $\frac{u_n}{v_n}$ dần tới $+\infty$ hoặc $-\infty$ theo dấu của $a$.
- **Tổng cấp số nhân lùi vô hạn:** $u_1 + u_1q + u_1q^2 + \dots = \frac{u_1}{1 - q}$ ($\lvert q\rvert < 1$).

**Vì sao $q^n \to 0$ khi $0 < q < 1$:** viết $\frac1q = 1 + h$ với $h > 0$. Theo bất đẳng thức Bernoulli (quy nạp), $(1 + h)^n \ge 1 + nh > nh$, nên $0 < q^n < \frac{1}{nh} \to 0$.

### 2. Khử dạng vô định
| Dạng | Cách làm | Ví dụ |
|---|---|---|
| $\frac\infty\infty$ (đa thức, căn) | Chia tử và mẫu cho lũy thừa cao nhất của $n$ | $\lim\frac{2n^2 + 1}{3n^2 - n} = \frac23$ |
| $\frac\infty\infty$ (mũ) | Chia cho lũy thừa có **cơ số lớn nhất** | $\lim\frac{2^n + 3^n}{3^n} = 1$ |
| $\infty - \infty$ (căn bậc hai) | Nhân liên hợp $\sqrt A - B = \frac{A - B^2}{\sqrt A + B}$ | $\lim(\sqrt{n^2 + n} - n) = \frac12$ |
| $\infty - \infty$ (căn bậc ba) | $\sqrt[3]A - B = \frac{A - B^3}{\sqrt[3]{A^2} + B\sqrt[3]A + B^2}$ | Bài 1b |
| Tổng $n$ số hạng | Tính tổng bằng công thức rồi mới lấy giới hạn | Bài 2 |

**Công thức tổng hay dùng:** $\sum_{k=1}^n k = \frac{n(n + 1)}{2}$, $\sum_{k=1}^n k^2 = \frac{n(n + 1)(2n + 1)}{6}$, $\sum_{k=1}^n k^3 = \left[\frac{n(n+1)}{2}\right]^2$, $\sum\frac{1}{k(k + 1)} = 1 - \frac{1}{n + 1}$.

> **Sai lầm:** "mỗi số hạng dần tới 0 nên tổng dần tới 0" là sai khi số số hạng tăng theo $n$. Ví dụ $\frac1n + \frac1n + \dots + \frac1n$ ($n$ số hạng) bằng $1$.

### 3. Nguyên lý kẹp
Nếu $v_n \le u_n \le w_n$ (kể từ một chỉ số nào đó) và $\lim v_n = \lim w_n = L$ thì $\lim u_n = L$.
- **Dạng hay dùng:** $\lvert u_n\rvert \le w_n$, $\lim w_n = 0$ thì $\lim u_n = 0$. Ví dụ $\left\lvert\frac{\sin n}{n}\right\rvert \le \frac1n$.
- **Kẹp tổng:** tổng $n$ số hạng, mỗi số hạng nằm giữa số hạng nhỏ nhất và lớn nhất, nên tổng nằm giữa $n\cdot\min$ và $n\cdot\max$.
- **Kẹp bằng nhị thức Newton:** $(1 + h)^n \ge 1 + nh + \frac{n(n - 1)}{2}h^2$ với $h \ge 0$. Dùng để chứng minh $\frac{n}{2^n} \to 0$, $\sqrt[n]{n} \to 1$.
- **Bất đẳng thức hay dùng:** $\frac{1}{\sqrt k} < 2(\sqrt k - \sqrt{k - 1})$, nên $1 + \frac{1}{\sqrt2} + \dots + \frac{1}{\sqrt n} < 2\sqrt n$; cũng suy ra $1 + \frac12 + \dots + \frac1n < 2\sqrt n$.

### 4. Định lý Weierstrass: dãy đơn điệu và bị chặn
**Định lý (thừa nhận).** Dãy tăng và bị chặn trên thì có giới hạn hữu hạn; dãy giảm và bị chặn dưới thì có giới hạn hữu hạn.
- Định lý chỉ cho biết **giới hạn tồn tại**; giá trị phải tìm bằng cách khác (thường là qua phương trình $L = f(L)$).
- Dãy tăng mà **không** bị chặn trên thì dần tới $+\infty$.
- *Ví dụ quan trọng:* $\left(1 + \frac1n\right)^n$ tăng và bị chặn trên bởi 3, giới hạn của nó là số $e \approx 2{,}718$.

**Tính chất giữ thứ tự:** nếu $u_n \ge a$ với mọi $n$ và $\lim u_n = L$ thì $L \ge a$ (chú ý: $u_n > a$ chỉ cho $L \ge a$, không cho $L > a$).

### 5. Dãy $u_{n+1} = f(u_n)$: quy trình chuẩn
1. **Tìm các điểm bất động:** nghiệm của $f(x) = x$. Giới hạn (nếu có) phải là một điểm bất động, khi $f$ liên tục: từ $u_{n+1} = f(u_n)$ cho $n \to \infty$ được $L = f(L)$.
2. **Tìm khoảng bất biến:** chứng minh bằng quy nạp $u_n \in [a; b]$ với mọi $n$.
3. **Xét tính đơn điệu:**
   - xét dấu $u_{n+1} - u_n = f(u_n) - u_n$: nếu $f(x) - x$ không đổi dấu trên khoảng bất biến thì dãy đơn điệu;
   - hoặc nếu $f$ **đồng biến** trên khoảng bất biến thì $u_{n+1} - u_n$ cùng dấu với $u_n - u_{n-1}$ (quy nạp), nên dãy đơn điệu theo dấu của $u_2 - u_1$.
4. **Kết luận** theo Weierstrass, rồi giải $L = f(L)$ và chọn nghiệm thuộc khoảng phù hợp.

**Khi $f$ nghịch biến** (như $f(x) = 1 + \frac1x$), dãy dao động quanh giới hạn. Khi đó dùng **phương pháp co**: chứng minh $\lvert u_{n+1} - L\rvert \le q\lvert u_n - L\rvert$ với hằng số $0 < q < 1$, suy ra $\lvert u_n - L\rvert \le q^{n-1}\lvert u_1 - L\rvert \to 0$.

### 6. Dãy dần tới vô cực và tốc độ
- Dãy $u_{n+1} = u_n + g(u_n)$ với $g > 0$: dãy tăng; nếu nó bị chặn thì giới hạn $L$ thỏa $g(L) = 0$. Khi phương trình này vô nghiệm trên miền xét, dãy dần tới $+\infty$ (**phản chứng**).
- Để đánh giá **tốc độ** (như $\lim\frac{u_n}{\sqrt n}$), bình phương hoặc nghịch đảo hệ thức để được hiệu $u_{n+1}^2 - u_n^2$ hoặc $\frac{1}{u_{n+1}} - \frac{1}{u_n}$ gần một hằng số, rồi cộng dồn và kẹp.
- **Tổng có truy hồi:** biến số hạng của tổng thành hiệu $g(u_k) - g(u_{k+1})$ (như chủ đề 2), rồi dùng $\lim u_n = +\infty$.

*Ví dụ mẫu:* $u_1 = 1$, $u_{n+1} = u_n + \frac{1}{2^n}$. Dãy tăng, $u_n = 1 + \frac12 + \dots + \frac{1}{2^{n-1}} = 2 - \frac{1}{2^{n-1}} < 2$, nên $\lim u_n = 2$.

### 7. Sai lầm hay gặp
- **Giải $L = f(L)$ khi chưa chứng minh giới hạn tồn tại.** Ví dụ $u_1 = 2$, $u_{n+1} = 2u_n$: giải $L = 2L$ được $L = 0$, nhưng dãy dần tới $+\infty$.
- Quên kiểm tra $u_n$ thuộc miền xác định của $f$ (căn, mẫu).
- Từ $u_n > a$ suy ra $L > a$ (chỉ được $L \ge a$).
- Chọn nhầm nghiệm của $L = f(L)$: phải dựa vào khoảng bất biến và chiều đơn điệu.

---

## II. Bài tập vận dụng

**Bài 1.** Tính:
a) $\lim\left(\sqrt{n^2 + 3n} - n\right)$;
b) $\lim\left(\sqrt[3]{n^3 + 2n^2} - n\right)$.

**Bài 2.** Tính:
a) $\lim\dfrac{1^2 + 2^2 + \dots + n^2}{n^3}$;
b) $\lim\left(\dfrac{1}{1\cdot 2} + \dfrac{1}{2\cdot 3} + \dots + \dfrac{1}{n(n + 1)}\right)$.

**Bài 3.** Tính $\lim\dfrac{3^n - 4^{n+1}}{2^n + 4^n}$.

**Bài 4 (kẹp).** Tính $\lim\left(\dfrac{1}{\sqrt{n^2 + 1}} + \dfrac{1}{\sqrt{n^2 + 2}} + \dots + \dfrac{1}{\sqrt{n^2 + n}}\right)$.

**Bài 5 (kẹp bằng nhị thức Newton).** Chứng minh:
a) $\lim\dfrac{n}{2^n} = 0$;
b) $\lim\sqrt[n]{n} = 1$.

**Bài 6.** Cho dãy $u_1 = \sqrt2$, $u_{n+1} = \sqrt{2 + u_n}$. Chứng minh dãy có giới hạn và tìm giới hạn đó.

**Bài 7 (dãy Heron).** Cho dãy $u_1 = 1$, $u_{n+1} = \dfrac12\left(u_n + \dfrac{3}{u_n}\right)$. Chứng minh dãy có giới hạn và tìm giới hạn đó.

**Bài 8 (phương pháp co).** Cho dãy $u_1 = 1$, $u_{n+1} = 1 + \dfrac{1}{u_n}$. Chứng minh $\lim u_n = \dfrac{1 + \sqrt5}{2}$.

**Bài 9 (biện luận theo giá trị đầu).** Cho dãy $u_1 = a$, $u_{n+1} = \dfrac{u_n^2 + 3}{4}$. Tìm tất cả các số thực $a$ để dãy có giới hạn hữu hạn, và tìm giới hạn đó.

**Bài 10.** Cho $x \ne 0$. Tính $\lim\left(\cos\dfrac x2\cos\dfrac x4\cdots\cos\dfrac{x}{2^n}\right)$.

**Bài 11 (tổng có truy hồi).** Cho dãy $u_1 = 2$, $u_{n+1} = u_n^2 - u_n + 1$. Tính $\lim\left(\dfrac1{u_1} + \dfrac1{u_2} + \dots + \dfrac1{u_n}\right)$.

**Bài 12 (HSG cấp tỉnh).** Cho dãy $u_1 = 1$, $u_{n+1} = u_n + \dfrac{u_n^2}{2024}$. Tính $\lim\left(\dfrac{u_1}{u_2} + \dfrac{u_2}{u_3} + \dots + \dfrac{u_n}{u_{n+1}}\right)$.

**Bài 13 (HSG cấp tỉnh).** Cho dãy $u_1 = \dfrac12$, $u_{n+1} = u_n - u_n^2$.
a) Chứng minh $\lim u_n = 0$.
b) Chứng minh $\lim nu_n = 1$.

**Bài 14 (HSG cấp tỉnh).** Cho dãy $u_1 = 1$, $u_{n+1} = u_n + \dfrac{1}{u_n}$. Chứng minh $\lim u_n = +\infty$ và tính $\lim\dfrac{u_n}{\sqrt n}$.

---

## III. Lời giải chi tiết

### Bài 1
a) Nhân liên hợp:
$$\sqrt{n^2 + 3n} - n = \frac{3n}{\sqrt{n^2 + 3n} + n} = \frac{3}{\sqrt{1 + \frac3n} + 1} \to \frac{3}{2}.$$
b) Đặt $A = \sqrt[3]{n^3 + 2n^2}$. Dùng $A - n = \frac{A^3 - n^3}{A^2 + An + n^2}$:
$$A - n = \frac{2n^2}{A^2 + An + n^2} = \frac{2}{\left(\frac An\right)^2 + \frac An + 1},$$
mà $\frac An = \sqrt[3]{1 + \frac2n} \to 1$. Vậy giới hạn bằng $\frac{2}{3}$.

**Đáp số:** a) $\frac32$; b) $\frac23$.

### Bài 2
a) $\dfrac{1^2 + \dots + n^2}{n^3} = \dfrac{n(n + 1)(2n + 1)}{6n^3} = \dfrac16\left(1 + \dfrac1n\right)\left(2 + \dfrac1n\right) \to \dfrac{2}{6} = \dfrac13$.
b) $\dfrac{1}{k(k + 1)} = \dfrac1k - \dfrac{1}{k + 1}$, nên tổng bằng $1 - \dfrac{1}{n + 1} \to 1$.

**Đáp số:** a) $\frac13$; b) $1$.

### Bài 3
Chia tử và mẫu cho $4^n$ (cơ số lớn nhất):
$$\frac{3^n - 4\cdot 4^n}{2^n + 4^n} = \frac{\left(\frac34\right)^n - 4}{\left(\frac12\right)^n + 1} \to \frac{0 - 4}{0 + 1} = -4.$$

**Đáp số:** $-4$.

### Bài 4
Gọi tổng là $S_n$. Tổng có $n$ số hạng; số hạng lớn nhất là $\frac{1}{\sqrt{n^2 + 1}}$, nhỏ nhất là $\frac{1}{\sqrt{n^2 + n}}$. Do đó
$$\frac{n}{\sqrt{n^2 + n}} \le S_n \le \frac{n}{\sqrt{n^2 + 1}}.$$
Hai vế ngoài bằng $\frac{1}{\sqrt{1 + \frac1n}}$ và $\frac{1}{\sqrt{1 + \frac{1}{n^2}}}$, đều dần tới $1$. Theo nguyên lý kẹp, $\lim S_n = 1$.

*Nhận xét:* mỗi số hạng dần tới 0 nhưng tổng lại dần tới 1, đúng như cảnh báo ở mục I.2.

### Bài 5
a) Với $n \ge 2$, theo nhị thức Newton $2^n = (1 + 1)^n \ge 1 + n + \frac{n(n - 1)}{2} > \frac{n(n - 1)}{2}$. Do đó
$$0 < \frac{n}{2^n} < \frac{2}{n - 1} \to 0.$$
Theo nguyên lý kẹp, $\lim\frac{n}{2^n} = 0$.

b) Đặt $\sqrt[n]{n} = 1 + h_n$, với $h_n \ge 0$ (vì $n \ge 1$). Với $n \ge 2$:
$$n = (1 + h_n)^n \ge \frac{n(n - 1)}{2}h_n^2 \implies 0 \le h_n \le \sqrt{\frac{2}{n - 1}} \to 0.$$
Vậy $\lim h_n = 0$, tức $\lim\sqrt[n]{n} = 1$.

*Nhận xét:* giữ đúng **một** số hạng của khai triển Newton (số hạng bậc 2) là đủ để kẹp. Đây là cách chứng minh "mũ thắng đa thức" ở lớp 11.

### Bài 6
**Bị chặn:** quy nạp $0 < u_n < 2$. Đúng với $n = 1$. Nếu $0 < u_n < 2$ thì $0 < u_{n+1} = \sqrt{2 + u_n} < \sqrt4 = 2$.
**Tăng:** $u_{n+1} - u_n = \sqrt{2 + u_n} - u_n = \dfrac{2 + u_n - u_n^2}{\sqrt{2 + u_n} + u_n} = \dfrac{(2 - u_n)(1 + u_n)}{\sqrt{2 + u_n} + u_n} > 0$.
Theo Weierstrass, dãy có giới hạn $L$, với $0 < \sqrt2 \le L \le 2$. Từ $u_{n+1}^2 = 2 + u_n$ cho $n \to \infty$: $L^2 = L + 2$, nên $L = 2$ (loại $L = -1$).

**Đáp số:** $\lim u_n = 2$.

*Nhận xét:* có thể thấy ngay bằng chủ đề 2: $u_n = 2\cos\frac{\pi}{2^{n+1}}$, dần tới $2\cos 0 = 2$.

### Bài 7
Dễ thấy $u_n > 0$ với mọi $n$ (quy nạp). Ta có $u_2 = 2$.
**Bị chặn dưới:** với $n \ge 1$, theo AM-GM $u_{n+1} = \frac12\left(u_n + \frac{3}{u_n}\right) \ge \sqrt{u_n\cdot\frac{3}{u_n}} = \sqrt3$. Vậy $u_n \ge \sqrt3$ với mọi $n \ge 2$.
**Giảm từ $n = 2$:** $u_{n+1} - u_n = \frac{3 - u_n^2}{2u_n} \le 0$ khi $u_n \ge \sqrt3$.
Dãy $(u_n)_{n \ge 2}$ giảm, bị chặn dưới bởi $\sqrt3$, nên có giới hạn $L \ge \sqrt3$. Cho $n \to \infty$: $L = \frac12\left(L + \frac3L\right) \iff L^2 = 3$, nên $L = \sqrt3$.

**Đáp số:** $\lim u_n = \sqrt3$.

*Nhận xét:* bỏ qua số hạng đầu không ảnh hưởng tới giới hạn. Đây là thuật toán khai căn của Heron, hội tụ rất nhanh: $u_4 \approx 1{,}73214$.

### Bài 8
Đặt $\varphi = \frac{1 + \sqrt5}{2}$, nghiệm dương của $x = 1 + \frac1x$ (tức $x^2 = x + 1$). Bằng quy nạp $u_n \ge 1$ (vì $u_1 = 1$ và $1 + \frac{1}{u_n} > 1$). Hàm $f(x) = 1 + \frac1x$ nghịch biến nên dãy không đơn điệu ($1, 2, \frac32, \frac53, \dots$); ta dùng phương pháp co:
$$\lvert u_{n+1} - \varphi\rvert = \left\lvert\frac1{u_n} - \frac1\varphi\right\rvert = \frac{\lvert u_n - \varphi\rvert}{u_n\varphi} \le \frac1\varphi\lvert u_n - \varphi\rvert.$$
Với $q = \frac1\varphi \in (0; 1)$, quy nạp: $\lvert u_n - \varphi\rvert \le q^{n-1}\lvert u_1 - \varphi\rvert \to 0$. Vậy $\lim u_n = \varphi$.

*Nhận xét:* $u_n = \frac{F_{n+1}}{F_n}$ (tỉ số hai số Fibonacci liên tiếp), nên tỉ số này dần tới tỉ lệ vàng.

### Bài 9
Ta có $u_{n+1} - u_n = \frac{(u_n - 1)(u_n - 3)}{4}$, $\ u_{n+1} - 1 = \frac{(u_n - 1)(u_n + 1)}{4}$, $\ u_{n+1} - 3 = \frac{(u_n - 3)(u_n + 3)}{4}$. Điểm bất động là $1$ và $3$. Mọi số hạng từ $u_2$ đều dương, $u_2 = \frac{a^2 + 3}{4} \ge \frac34$.
- **$\lvert a\rvert < 3$:** $\frac34 \le u_2 < 3$.
  - Nếu $u_2 < 1$: quy nạp $0 < u_n < 1$ với $n \ge 2$ (từ $u_{n+1} - 1 = \frac{(u_n - 1)(u_n + 1)}{4} < 0$), và dãy tăng (vì $(u_n - 1)(u_n - 3) > 0$). Dãy tăng, bị chặn trên bởi 1, giới hạn $L \in \{1; 3\}$ với $L \le 1$, nên $L = 1$.
  - Nếu $u_2 = 1$: dãy không đổi bằng 1 từ $n = 2$.
  - Nếu $1 < u_2 < 3$: quy nạp $1 < u_n < 3$, dãy giảm, giới hạn $L \in [1; 3)$, nên $L = 1$.
- **$\lvert a\rvert = 3$:** $u_2 = 3$, dãy không đổi bằng 3 từ $n = 2$, giới hạn là 3.
- **$\lvert a\rvert > 3$:** $u_2 > 3$, quy nạp $u_n > 3$ và dãy tăng. Nếu dãy có giới hạn hữu hạn $L$ thì $L \ge u_2 > 3$ và $L \in \{1; 3\}$: mâu thuẫn. Vậy $\lim u_n = +\infty$.

**Đáp số:** dãy có giới hạn hữu hạn khi và chỉ khi $-3 \le a \le 3$; giới hạn bằng $1$ nếu $\lvert a\rvert < 3$ và bằng $3$ nếu $\lvert a\rvert = 3$.

*Nhận xét:* điểm bất động $1$ "hút" các dãy gần nó, còn $3$ "đẩy" các dãy ra xa. Ba đẳng thức phân tích ở đầu lời giải là chìa khóa của mọi bài biện luận kiểu này.

### Bài 10
Đặt $P_n = \cos\frac x2\cos\frac x4\cdots\cos\frac{x}{2^n}$. Với $n$ đủ lớn, $\sin\frac{x}{2^n} \ne 0$. Nhân với $\sin\frac{x}{2^n}$ và nhân đôi liên tiếp $n$ lần (như chủ đề 1):
$$P_n\sin\frac{x}{2^n} = \frac{\sin x}{2^n} \implies P_n = \frac{\sin x}{2^n\sin\frac{x}{2^n}} = \frac{\sin x}{x}\cdot\frac{\frac{x}{2^n}}{\sin\frac{x}{2^n}}.$$
Vì $t = \frac{x}{2^n} \to 0$ và $\lim_{t\to 0}\frac{\sin t}{t} = 1$, ta có $\lim P_n = \frac{\sin x}{x}$.

**Đáp số:** $\dfrac{\sin x}{x}$.

*Nhận xét:* với $x = \frac\pi2$ ta được công thức Viète $\frac2\pi = \frac{\sqrt2}{2}\cdot\frac{\sqrt{2 + \sqrt2}}{2}\cdots$

### Bài 11
Quy nạp: $u_n \ge 2$ và dãy tăng, vì $u_{n+1} - u_n = (u_n - 1)^2 > 0$. Nếu dãy bị chặn thì có giới hạn $L \ge 2$ với $L = L^2 - L + 1$, tức $L = 1$: mâu thuẫn. Vậy $\lim u_n = +\infty$.
**Sai phân:** $u_{n+1} - 1 = u_n(u_n - 1)$, nên
$$\frac{1}{u_{n+1} - 1} = \frac{1}{u_n(u_n - 1)} = \frac{1}{u_n - 1} - \frac{1}{u_n} \implies \frac{1}{u_n} = \frac{1}{u_n - 1} - \frac{1}{u_{n+1} - 1}.$$
Cộng từ $1$ đến $n$: $\sum_{k=1}^n\frac{1}{u_k} = \frac{1}{u_1 - 1} - \frac{1}{u_{n+1} - 1} = 1 - \frac{1}{u_{n+1} - 1} \to 1$.

**Đáp số:** $1$. (Dãy là $2, 3, 7, 43, \dots$ và $\frac12 + \frac13 + \frac17 + \frac1{43} + \dots = 1$.)

### Bài 12
Dãy dương và tăng vì $u_{n+1} - u_n = \frac{u_n^2}{2024} > 0$. Nếu dãy bị chặn thì có giới hạn $L \ge 1$ với $L = L + \frac{L^2}{2024}$, tức $L = 0$: mâu thuẫn. Vậy $\lim u_n = +\infty$.
Từ hệ thức: $u_{k+1} - u_k = \frac{u_k^2}{2024}$. Chia hai vế cho $u_ku_{k+1}$:
$$\frac1{u_k} - \frac{1}{u_{k+1}} = \frac{u_k}{2024u_{k+1}} \implies \frac{u_k}{u_{k+1}} = 2024\left(\frac1{u_k} - \frac1{u_{k+1}}\right).$$
Do đó tổng bằng $2024\left(1 - \frac{1}{u_{n+1}}\right) \to 2024$.

**Đáp số:** $2024$.

*Nhận xét:* đây là dạng kinh điển của đề HSG. Mẹo: **chia hệ thức truy hồi cho tích hai số hạng liên tiếp**.

### Bài 13
a) Quy nạp: $0 < u_n \le \frac12$ (vì nếu $0 < u_n \le \frac12$ thì $u_{n+1} = u_n(1 - u_n) \in \left(0; \frac14\right]$). Dãy giảm vì $u_{n+1} - u_n = -u_n^2 < 0$. Vậy dãy có giới hạn $L \in \left[0; \frac12\right]$ với $L = L - L^2$, nên $L = 0$.

b) **Bước 1: hệ thức cho nghịch đảo.**
$$\frac{1}{u_{k+1}} - \frac{1}{u_k} = \frac{1}{u_k(1 - u_k)} - \frac{1}{u_k} = \frac{1}{1 - u_k}.$$
Cộng từ $k = 1$ đến $n - 1$: $\frac1{u_n} = 2 + \sum_{k=1}^{n-1}\frac{1}{1 - u_k}$.

**Bước 2: chặn dưới.** Mỗi số hạng $\frac{1}{1 - u_k} > 1$, nên $\frac1{u_n} > n + 1$, tức $u_n < \frac{1}{n + 1}$ với $n \ge 2$; với $n = 1$ thì $u_1 = \frac12$. Vậy $u_k \le \frac{1}{k + 1}$ với mọi $k$.

**Bước 3: chặn trên.** Vì $u_k \le \frac12$ nên $\frac{1}{1 - u_k} = 1 + \frac{u_k}{1 - u_k} \le 1 + 2u_k \le 1 + \frac{2}{k + 1}$. Do đó
$$\frac{1}{u_n} \le n + 1 + 2\left(\frac12 + \frac13 + \dots + \frac1n\right) < n + 1 + 4\sqrt n,$$
dùng $\frac1j \le \frac{1}{\sqrt j} < 2(\sqrt j - \sqrt{j - 1})$ (tổng triệt tiêu, không quá $2\sqrt n$).

**Bước 4: kẹp.** $n + 1 < \frac1{u_n} < n + 1 + 4\sqrt n$, chia cho $n$: $\frac{1}{nu_n}$ nằm giữa $1 + \frac1n$ và $1 + \frac1n + \frac{4}{\sqrt n}$, cả hai dần tới 1. Vậy $\lim\frac{1}{nu_n} = 1$, tức $\lim nu_n = 1$.

*Nhận xét:* ý tưởng then chốt là **nghịch đảo**: hiệu $\frac{1}{u_{k+1}} - \frac1{u_k}$ gần bằng 1, nên $\frac1{u_n} \approx n$.

### Bài 14
**Dần tới vô cực.** Quy nạp $u_n \ge 1$; dãy tăng vì $u_{n+1} - u_n = \frac{1}{u_n} > 0$. Nếu dãy bị chặn thì có giới hạn $L \ge 1$ với $L = L + \frac1L$: vô lí. Vậy $\lim u_n = +\infty$.

**Bình phương hệ thức:** $u_{k+1}^2 = u_k^2 + 2 + \frac{1}{u_k^2}$. Cộng từ $k = 1$ đến $n - 1$:
$$u_n^2 = 1 + 2(n - 1) + \sum_{k=1}^{n-1}\frac{1}{u_k^2} = 2n - 1 + \sum_{k=1}^{n-1}\frac{1}{u_k^2}.$$
- **Chặn dưới:** $u_n^2 \ge 2n - 1$ với mọi $n$.
- **Chặn trên:** từ chặn dưới, $\frac{1}{u_k^2} \le \frac{1}{2k - 1} \le \frac1k$, nên $\sum_{k=1}^{n-1}\frac{1}{u_k^2} \le 1 + \frac12 + \dots + \frac{1}{n - 1} < 2\sqrt{n - 1}$.

Vậy $2n - 1 \le u_n^2 < 2n - 1 + 2\sqrt{n - 1}$. Chia cho $n$, hai vế ngoài đều dần tới 2, nên $\lim\frac{u_n^2}{n} = 2$ và $\lim\frac{u_n}{\sqrt n} = \sqrt2$.

**Đáp số:** $\lim\dfrac{u_n}{\sqrt n} = \sqrt2$.

*Nhận xét:* khi $u_{n+1} - u_n \approx \frac{1}{u_n}$, hãy xét $u_n^2$: hiệu $u_{n+1}^2 - u_n^2 \approx 2$ gần như không đổi. Tổng quát: tìm số mũ $\alpha$ sao cho $u_{n+1}^\alpha - u_n^\alpha$ dần tới một hằng số khác 0.

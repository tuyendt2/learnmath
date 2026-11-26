# Chủ đề 6. Giới hạn của dãy số, của hàm số; hàm số liên tục

> Giới hạn mô tả giá trị mà một dãy số hoặc một hàm số "tiến dần tới". Chủ đề này luyện các kỹ thuật tính giới hạn thường gặp (chia cho lũy thừa cao nhất, nhân liên hợp, phân tích nhân tử), tổng cấp số nhân lùi vô hạn, giới hạn một bên, tính liên tục và ứng dụng chứng minh phương trình có nghiệm.

## I. Kiến thức cần nắm

### 1. Giới hạn dãy số

- $\lim \dfrac{1}{n^k} = 0$ ($k > 0$); $\lim q^n = 0$ khi $\lvert q\rvert < 1$; $\lim c = c$.
- Phân thức bậc tử, mẫu: chia cả tử và mẫu cho lũy thừa cao nhất của $n$ (hoặc cho $a^n$ lớn nhất).
- Dạng $\infty - \infty$ có căn: nhân liên hợp.
- **Cấp số nhân lùi vô hạn** ($\lvert q\rvert < 1$): $S = u_1 + u_1q + u_1q^2 + \dots = \dfrac{u_1}{1 - q}$.

### 2. Giới hạn hàm số

- Nếu $f$ là hàm sơ cấp xác định tại $x_0$ thì $\lim_{x \to x_0} f(x) = f(x_0)$.
- Dạng $\dfrac{0}{0}$: phân tích nhân tử để rút gọn, hoặc nhân liên hợp nếu có căn.
- $x \to \pm\infty$: chia cho lũy thừa cao nhất; chú ý $\sqrt{x^2} = \lvert x\rvert = -x$ khi $x \to -\infty$.
- Dạng $\dfrac{L}{0}$ ($L \ne 0$): kết quả là $\pm\infty$, xét dấu mẫu khi $x \to x_0^+$ hoặc $x_0^-$.

### 3. Giới hạn một bên

$\lim_{x \to x_0} f(x) = L \iff \lim_{x \to x_0^+} f(x) = \lim_{x \to x_0^-} f(x) = L$.

### 4. Hàm số liên tục

- $f$ liên tục tại $x_0$ khi $\lim_{x \to x_0} f(x) = f(x_0)$.
- Hàm đa thức, phân thức, lượng giác, căn thức liên tục trên từng khoảng của tập xác định.
- **Định lý giá trị trung gian:** $f$ liên tục trên $[a; b]$ và $f(a)f(b) < 0$ thì phương trình $f(x) = 0$ có ít nhất một nghiệm trong $(a; b)$.

### 5. Sai lầm hay gặp

- Thay số trực tiếp vào dạng $\dfrac{0}{0}$.
- Quên dấu khi đưa $x$ ra khỏi căn với $x \to -\infty$.
- Hàm cho bởi nhiều công thức: không xét giới hạn hai bên tại điểm nối.

## II. Bài tập vận dụng

**Bài 1.** Tính $\lim \dfrac{3n^2 + n - 1}{2n^2 + 5}$.

**Bài 2.** Tính $\lim \left(\sqrt{n^2 + 3n} - n\right)$.

**Bài 3.** Tính $\lim \dfrac{2^n + 3^{n + 1}}{3^n - 1}$.

**Bài 4.** a) Tính tổng $S = 1 + \dfrac{1}{3} + \dfrac{1}{9} + \dots + \dfrac{1}{3^n} + \dots$ b) Viết số thập phân vô hạn tuần hoàn $0{,}272727\ldots$ dưới dạng phân số.

**Bài 5.** Tính $\lim_{x \to 2} \dfrac{x^2 - 4}{x - 2}$ và $\lim_{x \to 3} \dfrac{x^2 - 5x + 6}{x^2 - 9}$.

**Bài 6.** Tính $\lim_{x \to 1} \dfrac{\sqrt{x + 3} - 2}{x - 1}$.

**Bài 7.** Tính $\lim_{x \to +\infty} \dfrac{2x^2 - x}{x^2 + 1}$ và $\lim_{x \to -\infty} \dfrac{\sqrt{x^2 + 1}}{x}$.

**Bài 8.** Tính $\lim_{x \to 2^+} \dfrac{x + 1}{x - 2}$ và $\lim_{x \to 2^-} \dfrac{x + 1}{x - 2}$.

**Bài 9.** Cho $f(x) = \dfrac{x^2 - 1}{x - 1}$ khi $x \ne 1$ và $f(1) = a$. Tìm $a$ để $f$ liên tục tại $x = 1$.

**Bài 10.** Chứng minh phương trình $x^3 - 3x + 1 = 0$ có ba nghiệm phân biệt trong khoảng $(-2; 2)$.

**Bài 11 (thực tế).** Từ một hình vuông cạnh 1, nối trung điểm các cạnh được hình vuông thứ hai; lặp lại mãi. Tính tổng diện tích của tất cả các hình vuông.

**Bài 12 (vận dụng cao).** Tìm $a$, $b$ để $\lim_{x \to 1} \dfrac{x^2 + ax + b}{x - 1} = 3$.

**Bài 13 (vận dụng cao).** Tính $\lim_{x \to 0} \dfrac{\sqrt{1 + 2x} - \sqrt[3]{1 + 3x}}{x^2}$.

---

## III. Lời giải chi tiết

### Bài 1
Chia tử và mẫu cho $n^2$: $\lim \dfrac{3 + \frac{1}{n} - \frac{1}{n^2}}{2 + \frac{5}{n^2}} = \dfrac{3}{2}$.

### Bài 2
$\sqrt{n^2 + 3n} - n = \dfrac{3n}{\sqrt{n^2 + 3n} + n} = \dfrac{3}{\sqrt{1 + \frac{3}{n}} + 1} \to \dfrac{3}{2}$.

### Bài 3
Chia cho $3^n$: $\dfrac{\left(\frac{2}{3}\right)^n + 3}{1 - \left(\frac{1}{3}\right)^n} \to 3$.

### Bài 4
a) Cấp số nhân lùi vô hạn $u_1 = 1$, $q = \dfrac{1}{3}$: $S = \dfrac{1}{1 - \frac{1}{3}} = \dfrac{3}{2}$.
b) $0{,}2727\ldots = \dfrac{27}{100} + \dfrac{27}{100^2} + \dots = \dfrac{\frac{27}{100}}{1 - \frac{1}{100}} = \dfrac{27}{99} = \dfrac{3}{11}$.

### Bài 5
$\dfrac{x^2 - 4}{x - 2} = x + 2 \to 4$. $\dfrac{(x - 2)(x - 3)}{(x - 3)(x + 3)} = \dfrac{x - 2}{x + 3} \to \dfrac{1}{6}$.

### Bài 6
$\dfrac{\sqrt{x + 3} - 2}{x - 1} = \dfrac{x - 1}{(x - 1)(\sqrt{x + 3} + 2)} = \dfrac{1}{\sqrt{x + 3} + 2} \to \dfrac{1}{4}$.

### Bài 7
$\dfrac{2 - \frac{1}{x}}{1 + \frac{1}{x^2}} \to 2$. Với $x < 0$: $\sqrt{x^2 + 1} = \lvert x\rvert\sqrt{1 + \frac{1}{x^2}} = -x\sqrt{1 + \frac{1}{x^2}}$, nên $\dfrac{\sqrt{x^2 + 1}}{x} = -\sqrt{1 + \frac{1}{x^2}} \to -1$.

### Bài 8
Tử $\to 3 > 0$. Khi $x \to 2^+$, mẫu $\to 0$ và dương: giới hạn $+\infty$. Khi $x \to 2^-$, mẫu âm: giới hạn $-\infty$.

### Bài 9
$\lim_{x \to 1} f(x) = \lim_{x \to 1}(x + 1) = 2$. Liên tục khi $a = 2$.

### Bài 10
$f(x) = x^3 - 3x + 1$ liên tục trên $\mathbb{R}$. $f(-2) = -1$, $f(0) = 1$, $f(1) = -1$, $f(2) = 3$. Ba cặp đổi dấu trên $(-2; 0)$, $(0; 1)$, $(1; 2)$ cho ba nghiệm phân biệt; phương trình bậc ba có nhiều nhất ba nghiệm.

### Bài 11
Mỗi hình vuông mới có diện tích bằng nửa hình trước: $1 + \dfrac{1}{2} + \dfrac{1}{4} + \dots = \dfrac{1}{1 - \frac{1}{2}} = 2$.

### Bài 12
Mẫu $\to 0$ nên tử phải $\to 0$: $1 + a + b = 0$, $b = -1 - a$. Khi đó $x^2 + ax - 1 - a = (x - 1)(x + 1 + a)$, giới hạn bằng $2 + a = 3$. $a = 1$, $b = -2$.

### Bài 13
Thêm bớt 1 + x:
$$\dfrac{\sqrt{1 + 2x} - (1 + x)}{x^2} + \dfrac{(1 + x) - \sqrt[3]{1 + 3x}}{x^2}.$$
- $\sqrt{1 + 2x} - (1 + x) = \dfrac{1 + 2x - (1 + x)^2}{\sqrt{1 + 2x} + 1 + x} = \dfrac{-x^2}{\sqrt{1 + 2x} + 1 + x}$, chia $x^2$ được giới hạn $-\dfrac{1}{2}$.
- $(1 + x)^3 - (1 + 3x) = 3x^2 + x^3$; với $a = 1 + x$, $b = \sqrt[3]{1 + 3x}$: $a - b = \dfrac{a^3 - b^3}{a^2 + ab + b^2} = \dfrac{3x^2 + x^3}{a^2 + ab + b^2}$, chia $x^2$ được giới hạn $\dfrac{3}{3} = 1$.

Kết quả: $-\dfrac{1}{2} + 1 = \dfrac{1}{2}$.

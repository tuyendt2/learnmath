# Chủ đề 3. Dãy số, cấp số cộng, cấp số nhân

> Cấp số cộng và cấp số nhân là hai mô hình đơn giản nhất của "sự thay đổi đều": tăng thêm một lượng cố định hoặc nhân lên một tỉ lệ cố định. Chúng xuất hiện trong các bài toán lãi suất, dân số, sắp xếp chỗ ngồi, và là nền tảng cho giới hạn dãy số ở Chủ đề 6.

## I. Kiến thức cần nắm

### 1. Dãy số
- **Dãy số** là hàm số $u: \mathbb{N}^* \to \mathbb{R}$, viết $u_n = u(n)$; $u_n$ là **số hạng tổng quát**. Dãy hữu hạn có số hạng đầu $u_1$ và số hạng cuối $u_m$.
- **Cách cho dãy số:** bằng công thức của số hạng tổng quát ($u_n = \frac{n}{n + 1}$); bằng hệ thức truy hồi ($u_1 = 1$, $u_{n+1} = 2u_n + 1$); bằng mô tả.
- **Dãy tăng** nếu $u_{n+1} > u_n$ với mọi $n$; **dãy giảm** nếu $u_{n+1} < u_n$ với mọi $n$. Cách xét: tính hiệu $u_{n+1} - u_n$, hoặc (khi $u_n > 0$) so sánh tỉ số $\frac{u_{n+1}}{u_n}$ với $1$.
- **Bị chặn trên** nếu có $M$ để $u_n \le M$ với mọi $n$; **bị chặn dưới** nếu có $m$ để $u_n \ge m$ với mọi $n$; **bị chặn** nếu vừa bị chặn trên vừa bị chặn dưới.

*Ví dụ:* $u_n = \frac{n}{n + 1} = 1 - \frac{1}{n + 1}$. Ta có $u_{n+1} - u_n = \frac{1}{n + 1} - \frac{1}{n + 2} > 0$ nên dãy tăng; và $\frac12 \le u_n < 1$ nên dãy bị chặn.

### 2. Cấp số cộng
**Định nghĩa:** $(u_n)$ là cấp số cộng với **công sai** $d$ nếu $u_{n+1} = u_n + d$ với mọi $n \ge 1$.
- Số hạng tổng quát: $u_n = u_1 + (n - 1)d$.
- Tính chất: $u_k = \frac{u_{k-1} + u_{k+1}}{2}$ với $k \ge 2$ (mỗi số hạng, trừ số hạng đầu và cuối, là trung bình cộng của hai số hạng kề nó). Ba số $a, b, c$ theo thứ tự lập cấp số cộng $\iff a + c = 2b$.
- Tổng $n$ số hạng đầu:
$$S_n = u_1 + u_2 + \dots + u_n = \frac{n(u_1 + u_n)}{2} = \frac{n[2u_1 + (n - 1)d]}{2}.$$
*Vì sao:* viết $S_n$ theo thứ tự xuôi và ngược rồi cộng lại; mỗi cặp $u_k + u_{n+1-k}$ đều bằng $u_1 + u_n$, có $n$ cặp nên $2S_n = n(u_1 + u_n)$.

*Ví dụ:* $1 + 2 + \dots + 100 = \frac{100\cdot 101}{2} = 5050$.

### 3. Cấp số nhân
**Định nghĩa:** $(u_n)$ là cấp số nhân với **công bội** $q$ nếu $u_{n+1} = u_n\cdot q$ với mọi $n \ge 1$.
- Số hạng tổng quát: $u_n = u_1q^{n-1}$.
- Tính chất: $u_k^2 = u_{k-1}u_{k+1}$ với $k \ge 2$. Ba số khác $0$ là $a, b, c$ lập cấp số nhân $\iff b^2 = ac$.
- Tổng $n$ số hạng đầu (với $q \ne 1$):
$$S_n = u_1 + u_1q + \dots + u_1q^{n-1} = \frac{u_1(1 - q^n)}{1 - q}.$$
Nếu $q = 1$ thì $S_n = nu_1$.

*Vì sao:* $S_n - qS_n = u_1 - u_1q^n$ (các số hạng ở giữa triệt tiêu), nên $(1 - q)S_n = u_1(1 - q^n)$.

*Ví dụ:* $1 + 2 + 4 + \dots + 2^9 = \frac{1 - 2^{10}}{1 - 2} = 1023$.

### 4. Bài toán thực tế
- **Tăng đều một lượng cố định** (số ghế mỗi hàng tăng $2$, lương tăng $500$ nghìn mỗi năm): cấp số cộng.
- **Tăng theo tỉ lệ phần trăm cố định** (lãi kép, dân số, vi khuẩn): cấp số nhân. Gửi $A$ đồng, lãi suất $r$ mỗi kỳ, theo hình thức lãi kép thì sau $n$ kỳ có
$$A_n = A(1 + r)^n.$$
- **Giảm theo tỉ lệ** (bóng nảy lên bằng $\frac34$ độ cao trước, giá trị máy giảm $10\%$ mỗi năm): cấp số nhân với $0 < q < 1$.

### 5. Phương pháp và sai lầm hay gặp
- Bài cho hai điều kiện về các số hạng: viết mọi số hạng theo $u_1$ và $d$ (hoặc $u_1$ và $q$), giải hệ.
- Ba số lập cấp số cộng có tổng biết trước: đặt $a - d, a, a + d$. Ba số lập cấp số nhân: đặt $a, aq, aq^2$ hoặc dùng $b^2 = ac$.
- Chứng minh một dãy là cấp số cộng (nhân): chứng minh $u_{n+1} - u_n$ (hoặc $\frac{u_{n+1}}{u_n}$) là hằng số **không phụ thuộc $n$**.

> **Sai lầm hay gặp:**
> - Viết $u_n = u_1 + nd$ hoặc $u_n = u_1q^n$ (đúng là $n - 1$).
> - Dùng công thức $S_n$ của cấp số nhân khi $q = 1$ (mẫu bằng $0$).
> - Nhầm $S_n$ là tổng $n$ số hạng đầu với số hạng thứ $n$.
> - Lãi kép sau $n$ kỳ là $A(1 + r)^n$ chứ không phải $A(1 + nr)$ (đó là lãi đơn).

---

## II. Bài tập vận dụng

**Bài 1.** Cho dãy số $(u_n)$ với $u_n = \frac{2n - 1}{n + 1}$.
a) Viết năm số hạng đầu của dãy.
b) Số $\frac{19}{11}$ là số hạng thứ mấy của dãy?
c) Chứng minh dãy số tăng và bị chặn.

**Bài 2.** Cho dãy số $(u_n)$ xác định bởi $u_1 = 2$, $u_{n+1} = 2u_n - 1$ với $n \ge 1$.
a) Tính $u_2, u_3, u_4, u_5$.
b) Đặt $v_n = u_n - 1$. Chứng minh $(v_n)$ là cấp số nhân, từ đó tìm công thức của $u_n$.

**Bài 3.** Cho cấp số cộng có $u_1 = -3$, $d = 4$.
a) Tính $u_{15}$ và tổng $20$ số hạng đầu.
b) Số $97$ có phải là một số hạng của cấp số cộng này không? Nếu có thì là số hạng thứ mấy?

**Bài 4.** Tìm số hạng đầu và công sai của cấp số cộng $(u_n)$ biết $u_2 + u_5 = 17$ và $u_3 + u_9 = 32$. Tính tổng $10$ số hạng đầu.

**Bài 5.** Cho cấp số nhân có $u_1 = 3$, $q = -2$.
a) Tính $u_6$ và tổng $8$ số hạng đầu.
b) Số $192$ là số hạng thứ mấy?

**Bài 6.** Tìm số hạng đầu và công bội của cấp số nhân $(u_n)$ biết $u_2 = 6$ và $u_5 = 48$. Tính tổng $10$ số hạng đầu.

**Bài 7.** Tìm ba số lập thành cấp số cộng, biết tổng của chúng bằng $15$ và tổng các bình phương của chúng bằng $83$.

**Bài 8 (thực tế).** Một hội trường có $25$ hàng ghế. Hàng đầu tiên có $20$ ghế, mỗi hàng sau nhiều hơn hàng liền trước $2$ ghế. Hỏi hàng cuối có bao nhiêu ghế và hội trường có tất cả bao nhiêu ghế?

**Bài 9 (thực tế).** Một người gửi $100$ triệu đồng vào ngân hàng với lãi suất $6\%$ một năm theo hình thức lãi kép (tiền lãi mỗi năm được nhập vào vốn).
a) Sau $5$ năm người đó có bao nhiêu tiền (làm tròn đến hàng phần trăm của triệu đồng)?
b) Sau ít nhất bao nhiêu năm thì số tiền vượt quá $150$ triệu đồng?

**Bài 10 (thực tế).** Thả một quả bóng từ độ cao $10$ m xuống mặt đất. Mỗi lần chạm đất, quả bóng nảy lên đến độ cao bằng $\frac34$ độ cao của lần rơi ngay trước đó. Tính tổng quãng đường quả bóng đã đi được từ lúc thả đến lúc chạm đất lần thứ năm.

**Bài 11 (vận dụng cao).** Một dãy số $(u_n)$ có tổng $n$ số hạng đầu là $S_n = 2n^2 + 3n$ với mọi $n \ge 1$. Chứng minh $(u_n)$ là cấp số cộng và tìm số hạng đầu, công sai.

**Bài 12 (vận dụng cao).** Ba số có tổng bằng $26$ lập thành một cấp số nhân. Nếu cộng thêm lần lượt $1$, $6$, $3$ vào ba số đó thì được ba số lập thành một cấp số cộng. Tìm ba số đó.

**Bài 13 (vận dụng cao).** Tính tổng $S_n = 1 + 11 + 111 + \dots + \underbrace{11\ldots1}_{n \text{ chữ số } 1}$.

---

## III. Lời giải chi tiết

### Bài 1
a) $u_1 = \frac12$, $u_2 = \frac33 = 1$, $u_3 = \frac54$, $u_4 = \frac75$, $u_5 = \frac96 = \frac32$.

b) $\frac{2n - 1}{n + 1} = \frac{19}{11} \iff 22n - 11 = 19n + 19 \iff 3n = 30 \iff n = 10$. Vậy $\frac{19}{11}$ là số hạng thứ $10$.

c) Viết $u_n = \frac{2(n + 1) - 3}{n + 1} = 2 - \frac{3}{n + 1}$.
- $u_{n+1} - u_n = \frac{3}{n + 1} - \frac{3}{n + 2} = \frac{3}{(n + 1)(n + 2)} > 0$, nên dãy tăng.
- $\frac{3}{n + 1} > 0$ nên $u_n < 2$; dãy tăng nên $u_n \ge u_1 = \frac12$. Vậy $\frac12 \le u_n < 2$, dãy bị chặn.

### Bài 2
a) $u_2 = 2\cdot 2 - 1 = 3$, $u_3 = 5$, $u_4 = 9$, $u_5 = 17$.

b) $v_{n+1} = u_{n+1} - 1 = 2u_n - 2 = 2(u_n - 1) = 2v_n$ với mọi $n \ge 1$. Vậy $(v_n)$ là cấp số nhân với $v_1 = u_1 - 1 = 1$, $q = 2$.
Do đó $v_n = 2^{n-1}$ và $u_n = 2^{n-1} + 1$. (Kiểm tra: $u_5 = 2^4 + 1 = 17$, đúng.)

*Nhận xét:* với dãy truy hồi $u_{n+1} = au_n + b$ ($a \ne 1$), ta trừ đi một hằng số thích hợp để được cấp số nhân. Hằng số đó là nghiệm của $c = ac + b$; ở đây $c = 2c - 1 \iff c = 1$.

### Bài 3
a) $u_{15} = u_1 + 14d = -3 + 56 = 53$.
$S_{20} = \frac{20[2u_1 + 19d]}{2} = 10(-6 + 76) = 700$.

b) $u_n = -3 + 4(n - 1) = 4n - 7$. Giải $4n - 7 = 97 \iff n = 26$ (số nguyên dương). Vậy $97$ là số hạng thứ $26$.

### Bài 4
Viết theo $u_1$ và $d$:
$$\begin{cases} (u_1 + d) + (u_1 + 4d) = 17 \\ (u_1 + 2d) + (u_1 + 8d) = 32 \end{cases} \iff \begin{cases} 2u_1 + 5d = 17 \\ 2u_1 + 10d = 32 \end{cases} \iff \begin{cases} d = 3 \\ u_1 = 1. \end{cases}$$
$S_{10} = \frac{10(2\cdot 1 + 9\cdot 3)}{2} = 5\cdot 29 = 145$.

### Bài 5
a) $u_6 = u_1q^5 = 3\cdot(-32) = -96$.
$S_8 = \frac{u_1(1 - q^8)}{1 - q} = \frac{3(1 - 256)}{1 + 2} = -255$.

b) $3\cdot(-2)^{n-1} = 192 \iff (-2)^{n-1} = 64 = (-2)^6 \iff n = 7$. Vậy $192$ là số hạng thứ $7$.

### Bài 6
$\frac{u_5}{u_2} = q^3 = \frac{48}{6} = 8 \Rightarrow q = 2$, $u_1 = \frac{u_2}{q} = 3$.
$S_{10} = \frac{3(1 - 2^{10})}{1 - 2} = 3(2^{10} - 1) = 3\cdot 1023 = 3069$.

### Bài 7
Gọi ba số là $a - d$, $a$, $a + d$.
- Tổng: $3a = 15 \Rightarrow a = 5$.
- Tổng bình phương: $(a - d)^2 + a^2 + (a + d)^2 = 3a^2 + 2d^2 = 75 + 2d^2 = 83 \Rightarrow d^2 = 4 \Rightarrow d = \pm 2$.

Vậy ba số là $3, 5, 7$ (hoặc theo thứ tự ngược lại $7, 5, 3$).

*Nhận xét:* đặt ba số đối xứng quanh số giữa giúp tổng triệt tiêu $d$, hệ trở nên rất gọn.

### Bài 8
Số ghế các hàng lập cấp số cộng với $u_1 = 20$, $d = 2$, $n = 25$.
- Hàng cuối: $u_{25} = 20 + 24\cdot 2 = 68$ ghế.
- Tổng số ghế: $S_{25} = \frac{25(u_1 + u_{25})}{2} = \frac{25\cdot 88}{2} = 1100$ ghế.

### Bài 9
Gọi $A_n$ là số tiền (triệu đồng) sau $n$ năm. Mỗi năm số tiền được nhân với $1{,}06$, nên $(A_n)$ là cấp số nhân với công bội $1{,}06$ và $A_n = 100\cdot 1{,}06^n$.

a) $A_5 = 100\cdot 1{,}06^5 \approx 133{,}82$ (triệu đồng).

b) Tính lần lượt: $A_6 \approx 141{,}85$; $A_7 \approx 150{,}36$. Vì dãy tăng, $A_6 < 150 < A_7$, nên sau ít nhất $7$ năm số tiền vượt quá $150$ triệu đồng.

### Bài 10
Độ cao các lần nảy lên lập cấp số nhân với số hạng đầu $10\cdot\frac34 = 7{,}5$ và công bội $\frac34$.

Đến lúc chạm đất lần thứ năm, quả bóng đã rơi $5$ lần và nảy lên $4$ lần; mỗi lần nảy lên độ cao $h$ thì cũng rơi xuống đúng $h$. Vậy quãng đường là
$$L = 10 + 2(h_1 + h_2 + h_3 + h_4), \quad\text{với}\quad h_1 + h_2 + h_3 + h_4 = \frac{7{,}5\left(1 - \left(\frac34\right)^4\right)}{1 - \frac34} = 30\left(1 - \frac{81}{256}\right) = \frac{30\cdot 175}{256} = \frac{2625}{128}.$$
$$L = 10 + \frac{2625}{64} = \frac{3265}{64} \approx 51{,}02 \text{ (m)}.$$

### Bài 11
Với $n \ge 2$: $u_n = S_n - S_{n-1} = 2n^2 + 3n - [2(n - 1)^2 + 3(n - 1)] = 4n + 1$.
Với $n = 1$: $u_1 = S_1 = 5 = 4\cdot 1 + 1$, nên công thức $u_n = 4n + 1$ đúng với mọi $n \ge 1$.
Khi đó $u_{n+1} - u_n = 4$ không phụ thuộc $n$, nên $(u_n)$ là cấp số cộng với $u_1 = 5$, $d = 4$.

*Nhận xét:* luôn kiểm tra riêng $n = 1$ vì công thức $u_n = S_n - S_{n-1}$ chỉ dùng được khi $n \ge 2$.

### Bài 12
Gọi ba số là $a$, $aq$, $aq^2$. Theo đề:
- $a + aq + aq^2 = 26$, tức là $a(1 + q + q^2) = 26$.
- $a + 1$, $aq + 6$, $aq^2 + 3$ lập cấp số cộng: $2(aq + 6) = (a + 1) + (aq^2 + 3) \iff a(q^2 - 2q + 1) = 8 \iff a(q - 1)^2 = 8$.

Chia vế theo vế (ở đây $a \ne 0$ và $q \ne 1$): $\frac{1 + q + q^2}{(q - 1)^2} = \frac{13}{4} \iff 4 + 4q + 4q^2 = 13q^2 - 26q + 13 \iff 3q^2 - 10q + 3 = 0$, nên $q = 3$ hoặc $q = \frac13$.
- $q = 3$: $a = \frac{8}{4} = 2$, ba số là $2, 6, 18$. Thử lại: $3, 12, 21$ lập cấp số cộng.
- $q = \frac13$: $a = \frac{8}{4/9} = 18$, ba số là $18, 6, 2$. Thử lại: $19, 12, 5$ lập cấp số cộng.

Vậy ba số là $2, 6, 18$ hoặc $18, 6, 2$.

### Bài 13
Số có $k$ chữ số $1$ bằng $\frac{10^k - 1}{9}$. Do đó
$$S_n = \frac19\left[(10 + 10^2 + \dots + 10^n) - n\right].$$
Tổng trong ngoặc là tổng cấp số nhân với $u_1 = 10$, $q = 10$: $10 + \dots + 10^n = \frac{10(10^n - 1)}{9}$. Vậy
$$S_n = \frac19\left[\frac{10^{n+1} - 10}{9} - n\right] = \frac{10^{n+1} - 10 - 9n}{81}.$$
Kiểm tra: $n = 3$ cho $\frac{10000 - 10 - 27}{81} = \frac{9963}{81} = 123 = 1 + 11 + 111$, đúng.

*Nhận xét:* đưa từng số hạng về dạng "lũy thừa trừ hằng số" để tách thành tổng cấp số nhân và tổng các hằng số.

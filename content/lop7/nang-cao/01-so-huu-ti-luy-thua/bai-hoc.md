# Chủ đề 1. Số hữu tỉ, lũy thừa, tổng dãy

> Câu 1 của đề HSG lớp 7 cấp huyện gần như luôn là một bài tính giá trị biểu thức chứa lũy thừa, một tổng dãy phân số hoặc một bài tìm $x$. Chủ đề này luyện các kỹ năng đó: tính hợp lý, so sánh lũy thừa, tách phân số và "nhân rồi trừ" để tính tổng.

## I. Kiến thức cần nắm

> **Ý tưởng xuyên suốt:** đừng tính thẳng. Hãy **đưa về cùng cơ số**, **đặt thừa số chung**, hoặc **tách mỗi số hạng thành hiệu** để các số hạng triệt tiêu nhau.

### 1. Số hữu tỉ và tính hợp lý
- Số hữu tỉ là số viết được dưới dạng $\frac ab$ với $a, b \in \mathbb Z$, $b \ne 0$. Tập hợp số hữu tỉ kí hiệu là $\mathbb Q$.
- Phép cộng và phép nhân có tính chất giao hoán, kết hợp và **tính chất phân phối** $a(b + c) = ab + ac$. Tính hợp lý chủ yếu là dùng chiều ngược lại: $ab + ac = a(b + c)$ (đặt thừa số chung).
- **Quy tắc chuyển vế:** chuyển một số hạng từ vế này sang vế kia thì đổi dấu số hạng đó.
- **Quy tắc dấu ngoặc:** bỏ ngoặc có dấu "$-$" đằng trước thì đổi dấu mọi số hạng trong ngoặc.

*Ví dụ:* $\frac{5}{7}\cdot\frac{3}{11} + \frac57\cdot\frac{8}{11} - \frac57 = \frac57\left(\frac{3}{11} + \frac{8}{11} - 1\right) = \frac57\cdot 0 = 0$.

### 2. Lũy thừa với số mũ tự nhiên
Với $x, y \in \mathbb Q$ và $m, n \in \mathbb N$: $x^n = \underbrace{x\cdot x\cdots x}_{n \text{ thừa số}}$ ($n \ge 1$), quy ước $x^0 = 1$ với $x \ne 0$.

| Công thức | Vì sao đúng |
|---|---|
| $x^m\cdot x^n = x^{m+n}$ | $m$ thừa số $x$ nhân với $n$ thừa số $x$ được $m + n$ thừa số |
| $x^m : x^n = x^{m-n}$ ($x \ne 0$, $m \ge n$) | Phép chia ngược của công thức trên |
| $(x^m)^n = x^{mn}$ | $n$ nhóm, mỗi nhóm $m$ thừa số $x$ |
| $(xy)^n = x^ny^n$ | Đổi chỗ và nhóm lại các thừa số |
| $\left(\frac xy\right)^n = \frac{x^n}{y^n}$ ($y \ne 0$) | Nhân tử với tử, mẫu với mẫu |

**Dấu của lũy thừa:** lũy thừa bậc **chẵn** của một số âm là số dương, lũy thừa bậc **lẻ** của một số âm là số âm. Do đó $x^{2n} \ge 0$ với mọi $x$, và $x^{2n} = a^{2n}$ (với $a \ge 0$) khi và chỉ khi $x = a$ hoặc $x = -a$.

**Hai lũy thừa bằng nhau:**
- Cùng cơ số $a$ (với $a \ne 0$, $a \ne 1$, $a \ne -1$): $a^m = a^n \iff m = n$.
- Cùng số mũ lẻ: $x^n = y^n \iff x = y$.

*Ví dụ:* $2^{x+2} - 2^x = 96 \iff 2^x(4 - 1) = 96 \iff 2^x = 32 = 2^5 \iff x = 5$.

### 3. So sánh hai lũy thừa
- **Cùng cơ số** $a > 1$: số mũ lớn hơn thì lũy thừa lớn hơn. Với $0 < a < 1$ thì ngược lại.
- **Cùng số mũ** $n \ge 1$, cơ số dương: cơ số lớn hơn thì lũy thừa lớn hơn.
- **Không cùng gì cả:** đưa về cùng số mũ (thường dùng ƯCLN của các số mũ), hoặc dùng **số trung gian**: $A < C$ và $C < B$ thì $A < B$.

*Ví dụ:* $2^{300} = (2^3)^{100} = 8^{100}$ và $3^{200} = (3^2)^{100} = 9^{100}$, nên $2^{300} < 3^{200}$.

### 4. Tổng dãy phân số: tách thành hiệu
Chìa khóa là đẳng thức (kiểm tra bằng cách quy đồng vế phải):
$$\frac{k}{n(n+k)} = \frac1n - \frac1{n+k}, \qquad \frac{1}{n(n+1)} = \frac1n - \frac1{n+1}.$$
Khi cộng nhiều số hạng như vậy, các số hạng ở giữa triệt tiêu nhau, chỉ còn số đầu và số cuối.

*Ví dụ:* $\frac{1}{1\cdot2} + \frac{1}{2\cdot 3} + \dots + \frac{1}{9\cdot 10} = 1 - \frac12 + \frac12 - \frac13 + \dots + \frac19 - \frac{1}{10} = \frac{9}{10}$.

**Mở rộng cho tích ba thừa số:** $\frac{2}{n(n+1)(n+2)} = \frac{1}{n(n+1)} - \frac{1}{(n+1)(n+2)}$.

**Nếu tử không bằng hiệu hai thừa số ở mẫu**, ta nhân và chia cho một số thích hợp: $\frac{1}{n(n+3)} = \frac13\cdot\frac{3}{n(n+3)} = \frac13\left(\frac1n - \frac1{n+3}\right)$.

### 5. Tổng các lũy thừa: nhân rồi trừ
Xét $S = 1 + a + a^2 + \dots + a^n$. Nhân hai vế với $a$:
$$aS = a + a^2 + \dots + a^n + a^{n+1}.$$
Trừ hai đẳng thức, mọi số hạng ở giữa mất đi: $aS - S = a^{n+1} - 1$, nên với $a \ne 1$:
$$\boxed{S = \frac{a^{n+1} - 1}{a - 1}}.$$
*Ví dụ:* $1 + 2 + 2^2 + \dots + 2^{10} = 2^{11} - 1 = 2047$.

**Chứng minh chia hết bằng cách nhóm:** $3 + 3^2 + \dots + 3^{100}$ có $100$ số hạng, nhóm từng cặp $3^k + 3^{k+1} = 3^k\cdot 4$, nên tổng chia hết cho $4$.

### 6. Tổng dạng $1\cdot 2 + 2\cdot 3 + \dots$
Nhân mỗi số hạng với $3$ rồi viết thành hiệu:
$$3k(k+1) = k(k+1)(k+2) - (k-1)k(k+1).$$
Cộng lại từ $k = 1$ đến $k = n$, các số hạng triệt tiêu: $3\left[1\cdot 2 + 2\cdot 3 + \dots + n(n+1)\right] = n(n+1)(n+2)$.

### 7. Sai lầm hay gặp
- Viết $2^3\cdot 2^4 = 2^{12}$ (nhân số mũ). Đúng: $2^{3+4} = 2^7$.
- Viết $2^3 + 2^4 = 2^7$. Tổng lũy thừa **không** cộng số mũ: $2^3 + 2^4 = 2^3(1 + 2) = 24$.
- Giải $x^2 = \frac49$ chỉ được $x = \frac23$, quên $x = -\frac23$.
- Viết $(-2)^4 = -16$. Đúng: $(-2)^4 = 16$, còn $-2^4 = -16$.
- Đếm sai số số hạng của dãy cách đều. Số số hạng bằng $\frac{\text{số cuối} - \text{số đầu}}{\text{khoảng cách}} + 1$.

---

## II. Bài tập vận dụng

**Bài 1.** Tính giá trị biểu thức
$$A = \frac{2^{12}\cdot 3^5 - 4^6\cdot 9^2}{(2^2\cdot 3)^6 + 8^4\cdot 3^5}.$$

**Bài 2.** Tìm $x$, biết:
a) $\left(2x - \frac13\right)^2 = \frac{25}{9}$;
b) $3^{x+2} - 3^x = 216$;
c) $(x - 1)^{x+2} = (x - 1)^{x+4}$ với $x \in \mathbb N$.

**Bài 3 (so sánh lũy thừa).** So sánh:
a) $2^{300}$ và $3^{200}$;
b) $2^{332}$ và $3^{223}$.

**Bài 4.** Tính $B = \frac{3}{2\cdot 5} + \frac{3}{5\cdot 8} + \frac{3}{8\cdot 11} + \dots + \frac{3}{98\cdot 101}$.

**Bài 5.** Tìm số nguyên dương $n$, biết
$$\frac{1}{1\cdot 3} + \frac{1}{3\cdot 5} + \frac{1}{5\cdot 7} + \dots + \frac{1}{(2n-1)(2n+1)} = \frac{49}{99}.$$

**Bài 6.** Cho $C = 3 + 3^2 + 3^3 + \dots + 3^{100}$.
a) Tìm số tự nhiên $x$, biết $2C + 3 = 3^x$.
b) Chứng minh $C$ chia hết cho $120$.

**Bài 7 (thêm bớt).** Tìm $x$, biết
$$\frac{x+1}{2024} + \frac{x+2}{2023} = \frac{x+3}{2022} + \frac{x+4}{2021}.$$

**Bài 8.** Tính $D = \frac{1}{1\cdot 2\cdot 3} + \frac{1}{2\cdot 3\cdot 4} + \dots + \frac{1}{98\cdot 99\cdot 100}$.

**Bài 9.** Tính $E = 1\cdot 2 + 2\cdot 3 + 3\cdot 4 + \dots + 99\cdot 100$.

**Bài 10 (đánh giá tổng).** Cho $S = \frac{1}{2^2} + \frac{1}{3^2} + \frac{1}{4^2} + \dots + \frac{1}{100^2}$. Chứng minh $\frac{99}{202} < S < \frac{99}{100}$.

**Bài 11.** So sánh $M = \frac{10^{11} - 1}{10^{12} - 1}$ và $N = \frac{10^{10} + 1}{10^{11} + 1}$.

**Bài 12 (đẳng thức Catalan).** Cho
$$P = \frac{1}{1\cdot 2} + \frac{1}{3\cdot 4} + \frac{1}{5\cdot 6} + \dots + \frac{1}{99\cdot 100}, \qquad Q = \frac{1}{51} + \frac{1}{52} + \dots + \frac{1}{100}.$$
a) Chứng minh $P = Q$.
b) Chứng minh $\frac{7}{12} < P < \frac56$.

**Bài 13 (HSG).** Chứng minh
$$T = \frac13 + \frac{2}{3^2} + \frac{3}{3^3} + \dots + \frac{100}{3^{100}} < \frac34.$$

---

## III. Lời giải chi tiết

### Bài 1
Đưa mọi thừa số về lũy thừa của $2$ và $3$:
- $4^6\cdot 9^2 = 2^{12}\cdot 3^4$;
- $(2^2\cdot 3)^6 = 2^{12}\cdot 3^6$;
- $8^4\cdot 3^5 = 2^{12}\cdot 3^5$.

Tử số: $2^{12}\cdot 3^5 - 2^{12}\cdot 3^4 = 2^{12}\cdot 3^4(3 - 1) = 2^{13}\cdot 3^4$.
Mẫu số: $2^{12}\cdot 3^6 + 2^{12}\cdot 3^5 = 2^{12}\cdot 3^5(3 + 1) = 2^{14}\cdot 3^5$.

Vậy $A = \frac{2^{13}\cdot 3^4}{2^{14}\cdot 3^5} = \frac{1}{2\cdot 3} = \frac16$.

*Nhận xét:* với biểu thức lũy thừa, luôn phân tích các cơ số ra thừa số nguyên tố, rồi đặt thừa số chung ở tử và ở mẫu.

### Bài 2
a) $2x - \frac13 = \frac53$ hoặc $2x - \frac13 = -\frac53$.
- $2x = 2$, nên $x = 1$.
- $2x = -\frac43$, nên $x = -\frac23$.

Vậy $x = 1$ hoặc $x = -\frac23$.

b) $3^{x+2} - 3^x = 3^x(9 - 1) = 8\cdot 3^x = 216$, nên $3^x = 27 = 3^3$. Vậy $x = 3$.

c) Chuyển vế: $(x-1)^{x+4} - (x-1)^{x+2} = 0$, tức là $(x-1)^{x+2}\left[(x-1)^2 - 1\right] = 0$.
- $(x - 1)^{x+2} = 0$ khi $x - 1 = 0$, tức là $x = 1$.
- $(x - 1)^2 = 1$ khi $x - 1 = 1$ hoặc $x - 1 = -1$, tức là $x = 2$ hoặc $x = 0$.

Thử lại: $x = 0$ cho $(-1)^2 = (-1)^4 = 1$; $x = 1$ cho $0^3 = 0^5 = 0$; $x = 2$ cho $1^4 = 1^6 = 1$. Vậy $x \in \{0; 1; 2\}$.

*Nhận xét:* ở câu c, **không được chia** hai vế cho $(x-1)^{x+2}$ vì nó có thể bằng $0$. Hãy chuyển vế rồi đặt thừa số chung.

### Bài 3
a) $2^{300} = (2^3)^{100} = 8^{100}$ và $3^{200} = (3^2)^{100} = 9^{100}$. Vì $8 < 9$ nên $2^{300} < 3^{200}$.

b) Số mũ $332$ và $223$ không có ước chung thuận tiện, nên dùng số trung gian:
$$2^{332} < 2^{333} = (2^3)^{111} = 8^{111} < 9^{111} = (3^2)^{111} = 3^{222} < 3^{223}.$$
Vậy $2^{332} < 3^{223}$.

*Nhận xét:* khi hai số mũ "gần" bội của $3$ và $2$, hãy đổi số mũ một chút (tăng số bé, giảm số lớn) để đưa về cùng số mũ.

### Bài 4
Các mẫu là $2\cdot 5$, $5\cdot 8$, ..., hai thừa số hơn kém nhau $3$, đúng bằng tử. Áp dụng $\frac{3}{n(n+3)} = \frac1n - \frac{1}{n+3}$:
$$B = \frac12 - \frac15 + \frac15 - \frac18 + \dots + \frac1{98} - \frac{1}{101} = \frac12 - \frac1{101} = \frac{101 - 2}{202} = \frac{99}{202}.$$

### Bài 5
Ta có $\frac{1}{(2k-1)(2k+1)} = \frac12\left(\frac{1}{2k-1} - \frac{1}{2k+1}\right)$. Do đó vế trái bằng
$$\frac12\left(1 - \frac13 + \frac13 - \frac15 + \dots + \frac{1}{2n-1} - \frac{1}{2n+1}\right) = \frac12\left(1 - \frac{1}{2n+1}\right) = \frac{n}{2n+1}.$$
Từ $\frac{n}{2n+1} = \frac{49}{99}$ suy ra $99n = 49(2n+1) = 98n + 49$, nên $n = 49$.

### Bài 6
a) $3C = 3^2 + 3^3 + \dots + 3^{100} + 3^{101}$. Trừ hai đẳng thức: $3C - C = 3^{101} - 3$, tức là $2C = 3^{101} - 3$.
Suy ra $2C + 3 = 3^{101}$, nên $x = 101$.

b) $C$ có $100$ số hạng, nhóm thành $25$ nhóm, mỗi nhóm $4$ số hạng liên tiếp:
$$C = (3 + 3^2 + 3^3 + 3^4) + (3^5 + 3^6 + 3^7 + 3^8) + \dots + (3^{97} + 3^{98} + 3^{99} + 3^{100}).$$
Nhóm thứ nhất bằng $3 + 9 + 27 + 81 = 120$. Nhóm bắt đầu bằng $3^{4j+1}$ bằng $3^{4j}(3 + 3^2 + 3^3 + 3^4) = 3^{4j}\cdot 120$. Vậy
$$C = 120\left(1 + 3^4 + 3^8 + \dots + 3^{96}\right)$$
chia hết cho $120$.

*Nhận xét:* để chứng minh tổng lũy thừa chia hết cho $m$, tìm vài số hạng đầu có tổng chia hết cho $m$ rồi nhóm theo đúng số số hạng đó. Cần kiểm tra số số hạng chia hết cho cỡ nhóm.

### Bài 7
Cộng thêm $1$ vào mỗi phân thức (hai vế cùng thêm $2$):
$$\frac{x+1}{2024} + 1 + \frac{x+2}{2023} + 1 = \frac{x+3}{2022} + 1 + \frac{x+4}{2021} + 1,$$
$$\frac{x+2025}{2024} + \frac{x+2025}{2023} = \frac{x+2025}{2022} + \frac{x+2025}{2021}.$$
Chuyển vế và đặt thừa số chung:
$$(x + 2025)\left(\frac{1}{2024} + \frac{1}{2023} - \frac{1}{2022} - \frac1{2021}\right) = 0.$$
Vì $\frac{1}{2024} < \frac1{2022}$ và $\frac1{2023} < \frac1{2021}$ nên ngoặc thứ hai âm, khác $0$. Do đó $x + 2025 = 0$, tức là $x = -2025$.

*Nhận xét:* dấu hiệu nhận dạng là tổng tử và mẫu của mọi phân thức bằng cùng một số ($2025$). Thêm $1$ (hoặc bớt $1$) vào mỗi phân thức để tử giống nhau.

### Bài 8
Áp dụng $\frac{2}{n(n+1)(n+2)} = \frac{1}{n(n+1)} - \frac{1}{(n+1)(n+2)}$:
$$2D = \frac{1}{1\cdot 2} - \frac{1}{2\cdot 3} + \frac{1}{2\cdot 3} - \frac{1}{3\cdot 4} + \dots + \frac{1}{98\cdot 99} - \frac{1}{99\cdot 100} = \frac12 - \frac{1}{9900} = \frac{4949}{9900}.$$
Vậy $D = \frac{4949}{19800}$.

### Bài 9
Nhân $E$ với $3$ và viết $3k(k+1) = k(k+1)(k+2) - (k-1)k(k+1)$:
$$3E = (1\cdot 2\cdot 3 - 0\cdot 1\cdot 2) + (2\cdot 3\cdot 4 - 1\cdot 2\cdot 3) + \dots + (99\cdot 100\cdot 101 - 98\cdot 99\cdot 100).$$
Các số hạng triệt tiêu, còn $3E = 99\cdot 100\cdot 101 = 999900$. Vậy $E = 333300$.

*Nhận xét:* đẳng thức $3k(k+1) = k(k+1)(k+2) - (k-1)k(k+1)$ đúng vì vế phải bằng $k(k+1)\left[(k+2) - (k-1)\right] = 3k(k+1)$.

### Bài 10
Với $k \ge 2$ ta có $k(k+1) > k^2 > (k-1)k$, nên
$$\frac{1}{k} - \frac{1}{k+1} = \frac{1}{k(k+1)} < \frac{1}{k^2} < \frac{1}{(k-1)k} = \frac{1}{k-1} - \frac1k.$$
Cộng các bất đẳng thức với $k = 2, 3, \dots, 100$:
- Vế trái: $\frac12 - \frac13 + \frac13 - \dots - \frac1{101} = \frac12 - \frac1{101} = \frac{99}{202}$.
- Vế phải: $1 - \frac12 + \frac12 - \dots - \frac{1}{100} = 1 - \frac1{100} = \frac{99}{100}$.

Vậy $\frac{99}{202} < S < \frac{99}{100}$.

*Nhận xét:* tổng $\sum\frac1{k^2}$ không tính được bằng cách tách. Ta **kẹp** mỗi số hạng giữa hai phân số tách được, tăng hoặc giảm mẫu một chút.

### Bài 11
Nhân mỗi số với $10$ rồi so sánh với $1$:
$$10M = \frac{10^{12} - 10}{10^{12} - 1} = 1 - \frac{9}{10^{12} - 1}, \qquad 10N = \frac{10^{11} + 10}{10^{11} + 1} = 1 + \frac{9}{10^{11} + 1}.$$
Vậy $10M < 1 < 10N$, suy ra $M < N$.

*Nhận xét:* nhân với $10$ để tử và mẫu có cùng "độ lớn", khi đó mỗi phân số chỉ hơn hoặc kém $1$ một lượng nhỏ, dễ so sánh.

### Bài 12
a) Tách mỗi số hạng: $\frac{1}{(2k-1)2k} = \frac{1}{2k-1} - \frac1{2k}$. Do đó
$$P = 1 - \frac12 + \frac13 - \frac14 + \dots + \frac1{99} - \frac{1}{100}.$$
Thêm và bớt các phân số có mẫu chẵn:
$$P = \left(1 + \frac12 + \frac13 + \dots + \frac1{100}\right) - 2\left(\frac12 + \frac14 + \dots + \frac1{100}\right)$$
$$= \left(1 + \frac12 + \dots + \frac1{100}\right) - \left(1 + \frac12 + \dots + \frac1{50}\right) = \frac1{51} + \frac1{52} + \dots + \frac1{100} = Q.$$

b) $Q$ có $50$ số hạng. Chia thành hai nhóm, mỗi nhóm $25$ số hạng: $Q_1 = \frac1{51} + \dots + \frac1{75}$ và $Q_2 = \frac1{76} + \dots + \frac1{100}$.
- Trong $Q_1$, mọi số hạng lớn hơn hoặc bằng $\frac1{75}$ và có số hạng lớn hơn hẳn, nên $Q_1 > \frac{25}{75} = \frac13$. Tương tự $Q_2 > \frac{25}{100} = \frac14$. Do đó $P = Q > \frac13 + \frac14 = \frac{7}{12}$.
- Trong $Q_1$, mọi số hạng nhỏ hơn $\frac1{50}$, nên $Q_1 < \frac{25}{50} = \frac12$. Trong $Q_2$, mọi số hạng nhỏ hơn $\frac1{75}$, nên $Q_2 < \frac{25}{75} = \frac13$. Do đó $P < \frac12 + \frac13 = \frac56$.

Vậy $\frac{7}{12} < P < \frac56$.

*Nhận xét:* muốn đánh giá một tổng nhiều phân số, chia thành vài nhóm rồi thay mỗi số hạng bằng số hạng lớn nhất (hoặc nhỏ nhất) của nhóm. Chia càng nhiều nhóm thì đánh giá càng sát.

### Bài 13
Nhân $T$ với $3$:
$$3T = 1 + \frac23 + \frac{3}{3^2} + \dots + \frac{100}{3^{99}}.$$
Trừ $T$ từ $3T$, ghép các số hạng có cùng mẫu:
$$2T = 1 + \frac13 + \frac1{3^2} + \dots + \frac{1}{3^{99}} - \frac{100}{3^{100}}.$$
Đặt $U = 1 + \frac13 + \dots + \frac1{3^{99}}$. Khi đó $3U = 3 + 1 + \frac13 + \dots + \frac1{3^{98}}$, nên $3U - U = 3 - \frac1{3^{99}}$, tức là
$$U = \frac32 - \frac{1}{2\cdot 3^{99}} < \frac32.$$
Do đó $2T = U - \frac{100}{3^{100}} < \frac32$, nên $T < \frac34$.

*Nhận xét:* tổng có tử tăng đều ($1, 2, 3, \dots$) và mẫu là lũy thừa thì "nhân rồi trừ" **hai lần**: lần đầu biến tử thành $1$, lần sau tính tổng lũy thừa.

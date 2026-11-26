# Chủ đề 3. Chia hết

> Chia hết là "xương sống" của số học lớp 6. Đề HSG cấp huyện gần như luôn có một câu tìm chữ số để một số chia hết, hoặc chứng minh một biểu thức chia hết cho một số với mọi $n$.

## I. Kiến thức cần nắm

### 1. Phép chia hết và phép chia có dư
- Với $a, b$ là số tự nhiên, $b \ne 0$: $a$ **chia hết** cho $b$, viết $a \,\vdots\, b$, nếu có số tự nhiên $q$ sao cho $a = b \cdot q$. Khi đó $a$ là **bội** của $b$, $b$ là **ước** của $a$.
- Mọi số tự nhiên $a$ đều viết được duy nhất dưới dạng $a = b \cdot q + r$ với $0 \le r < b$. Số $r$ là **số dư**; $r = 0$ khi và chỉ khi $a \,\vdots\, b$.
- Theo số dư khi chia cho $2$: mọi số có dạng $2k$ hoặc $2k + 1$. Chia cho $3$: dạng $3k$, $3k + 1$ hoặc $3k + 2$.

### 2. Tính chất chia hết
- Nếu $a \,\vdots\, m$ và $b \,\vdots\, m$ thì $a + b \,\vdots\, m$ và $a - b \,\vdots\, m$ (với $a \ge b$).
  *Vì sao:* $a = mx$, $b = my$ thì $a \pm b = m(x \pm y)$.
- Nếu $a \,\vdots\, m$ nhưng $b$ không chia hết cho $m$ thì $a + b$ không chia hết cho $m$.
- Nếu $a \,\vdots\, m$ thì $a \cdot k \,\vdots\, m$ với mọi số tự nhiên $k$.
- Nếu $a \,\vdots\, m$ và $a \,\vdots\, n$, trong đó $m$ và $n$ **không có ước chung nào khác $1$**, thì $a \,\vdots\, m \cdot n$. Ví dụ: chia hết cho $4$ và $9$ thì chia hết cho $36$.

> **Bẫy:** $12$ chia hết cho $4$ và cho $6$ nhưng không chia hết cho $24$, vì $4$ và $6$ có ước chung là $2$.

### 3. Các dấu hiệu chia hết và vì sao đúng
| Chia hết cho | Dấu hiệu |
|---|---|
| $2$; $5$ | Chữ số tận cùng chia hết cho $2$; cho $5$ |
| $4$; $25$ | Số tạo bởi **hai** chữ số tận cùng chia hết cho $4$; cho $25$ |
| $8$; $125$ | Số tạo bởi **ba** chữ số tận cùng chia hết cho $8$; cho $125$ |
| $3$; $9$ | Tổng các chữ số chia hết cho $3$; cho $9$ |
| $11$ | Hiệu giữa tổng các chữ số ở vị trí lẻ và tổng các chữ số ở vị trí chẵn (tính từ phải sang) chia hết cho $11$ |

*Vì sao (dấu hiệu 2, 5, 4, 25, 8, 125):* $\overline{abcd} = 10 \cdot \overline{abc} + d$, mà $10 \,\vdots\, 2$ và $10 \,\vdots\, 5$. Tương tự $100 \,\vdots\, 4$, $100 \,\vdots\, 25$ và $1000 \,\vdots\, 8$, $1000 \,\vdots\, 125$.

*Vì sao (dấu hiệu 3, 9):* $10 = 9 + 1$, $100 = 99 + 1$, $1000 = 999 + 1$, ... nên
$$\overline{abcd} = 999a + 99b + 9c + (a + b + c + d).$$
Phần $999a + 99b + 9c$ chia hết cho $9$ (do đó cho $3$), nên $\overline{abcd}$ và tổng các chữ số có **cùng số dư** khi chia cho $9$ (và cho $3$).

*Vì sao (dấu hiệu 11):* $10 = 11 - 1$, $100 = 99 + 1$, $1000 = 1001 - 1$, $10\,000 = 9999 + 1$, trong đó $11, 99, 1001, 9999$ đều chia hết cho $11$. Do đó $\overline{abcd} = (\text{bội của } 11) + (d + b) - (c + a)$.

**Ví dụ.** $918\,082$: các chữ số ở vị trí lẻ (từ phải sang) là $2, 0, 1$, tổng $3$; ở vị trí chẵn là $8, 8, 9$, tổng $25$. Hiệu $25 - 3 = 22 \,\vdots\, 11$, nên $918\,082 \,\vdots\, 11$.

### 4. Tích các số tự nhiên liên tiếp
- Trong hai số tự nhiên liên tiếp có một số chẵn, nên $n(n + 1) \,\vdots\, 2$.
- Trong ba số tự nhiên liên tiếp có một số chia hết cho $3$, nên $n(n + 1)(n + 2) \,\vdots\, 3$. Kết hợp với ý trên: $n(n + 1)(n + 2) \,\vdots\, 6$.
- Tổng quát: trong $k$ số tự nhiên liên tiếp có đúng một số chia hết cho $k$.

### 5. Các phương pháp chứng minh chia hết
1. **Tách thành tổng các số chia hết.** Ví dụ $\overline{abab} = 101 \cdot \overline{ab}$ nên chia hết cho $101$.
2. **Xét số dư (chia trường hợp).** Muốn chứng minh $A(n) \,\vdots\, 3$, xét $n = 3k$, $n = 3k + 1$, $n = 3k + 2$.
3. **Dùng tích các số liên tiếp** như mục 4.
4. **Dùng chữ số tận cùng** khi chia cho $2$, $5$, $10$.
5. **Nhóm số hạng** với tổng lũy thừa: $2 + 2^2 + \dots + 2^{2k} = (2 + 2^2) + 2^2(2 + 2^2) + \dots = 6 \cdot (\dots)$.

### 6. Tìm $n$ để $A \,\vdots\, B$
Viết $A = k \cdot B + r$, trong đó $r$ là một số cụ thể. Vì $k \cdot B \,\vdots\, B$, ta có $A \,\vdots\, B \iff r \,\vdots\, B$, tức $B$ là ước của $r$. Liệt kê các ước của $r$ rồi tìm $n$.

**Ví dụ.** $n + 5 \,\vdots\, n + 2$: vì $n + 5 = (n + 2) + 3$ nên $3 \,\vdots\, n + 2$. Mà $n + 2 \ge 2$, nên $n + 2 = 3$, $n = 1$.

### 7. Sai lầm hay gặp
- Dùng dấu hiệu "hai chữ số tận cùng" cho $3$ hoặc $9$ (sai: phải dùng tổng các chữ số).
- Suy ra chia hết cho tích từ hai số có ước chung (như $4$ và $6$).
- Tìm chữ số mà quên điều kiện chữ số đầu khác $0$.
- Khi tìm $n$ để $n + a \,\vdots\, n + b$, quên điều kiện $n + b \ge b$ nên lấy cả những ước quá nhỏ.

---

## II. Bài tập vận dụng

**Bài 1.** Tìm các chữ số $x$, $y$ để số $\overline{x183y}$ chia hết cho cả $2$, $5$ và $9$.

**Bài 2.** Tìm các chữ số $x$, $y$ để số $\overline{34x5y}$ chia hết cho $36$.

**Bài 3.** Cho $\overline{ab}$ là số có hai chữ số.
a) Chứng minh $\overline{ab} + \overline{ba}$ chia hết cho $11$ (với $b \ne 0$).
b) Chứng minh $\overline{ab} - \overline{ba}$ chia hết cho $9$ (với $a > b$).

**Bài 4.** Chứng minh rằng số có dạng $\overline{abcabc}$ luôn chia hết cho $7$, $11$ và $13$.

**Bài 5.** Tìm số tự nhiên $n$ sao cho:
a) $n + 6$ chia hết cho $n + 1$;
b) $3n + 10$ chia hết cho $n + 2$.

**Bài 6.** Chứng minh rằng với mọi số tự nhiên $n$, tích $n(n + 1)(2n + 1)$ chia hết cho $6$.

**Bài 7.** Cho $A = 2 + 2^2 + 2^3 + \dots + 2^{60}$. Chứng minh $A$ chia hết cho $3$, cho $7$ và cho $15$.

**Bài 8.** Chứng minh rằng với mọi số tự nhiên $n$, số $n^2 + n + 1$ không chia hết cho $4$ và không chia hết cho $5$.

**Bài 9 (dấu hiệu chia hết cho 11).** Tìm các chữ số $x$, $y$ để số $\overline{x1994y}$ chia hết cho $99$.

**Bài 10.** Chứng minh rằng nếu $\overline{abc}$ chia hết cho $27$ thì $\overline{bca}$ cũng chia hết cho $27$.

**Bài 11.** Tìm số tự nhiên nhỏ nhất chia cho $2$, $3$, $4$, $5$, $6$ có số dư lần lượt là $1$, $2$, $3$, $4$, $5$ và chia hết cho $7$.

**Bài 12 (đề HSG).** Tìm tất cả các số có hai chữ số chia hết cho tích các chữ số của nó.

**Bài 13 (đề HSG).** Chứng minh rằng với mọi số tự nhiên $n$, số $10^n + 18n - 1$ chia hết cho $27$.

**Bài 14 (đề HSG).** Chứng minh rằng số $\underbrace{111\dots1}_{27 \text{ chữ số } 1}$ chia hết cho $27$.

---

## III. Lời giải chi tiết

### Bài 1
Số chia hết cho cả $2$ và $5$ thì tận cùng bằng $0$, nên $y = 0$.
Số $\overline{x1830}$ chia hết cho $9$ khi $x + 1 + 8 + 3 + 0 = x + 12$ chia hết cho $9$. Vì $1 \le x \le 9$ nên $13 \le x + 12 \le 21$, suy ra $x + 12 = 18$, $x = 6$.

**Đáp số:** $x = 6$, $y = 0$; số cần tìm là $61\,830$.

### Bài 2
$36 = 4 \cdot 9$, và $4$, $9$ không có ước chung khác $1$. Vậy cần $\overline{34x5y}$ chia hết cho $4$ và cho $9$.
- Chia hết cho $4$: $\overline{5y} \,\vdots\, 4$, nên $y \in \{2; 6\}$ (vì $52 = 4 \cdot 13$, $56 = 4 \cdot 14$).
- Chia hết cho $9$: $3 + 4 + x + 5 + y = 12 + x + y$ chia hết cho $9$.
  - $y = 2$: $x + 14 \,\vdots\, 9$, với $0 \le x \le 9$ được $x = 4$.
  - $y = 6$: $x + 18 \,\vdots\, 9$, được $x = 0$ hoặc $x = 9$.

**Đáp số:** các số $34\,452$; $34\,056$; $34\,956$.

### Bài 3
a) $\overline{ab} + \overline{ba} = (10a + b) + (10b + a) = 11a + 11b = 11(a + b)$, chia hết cho $11$.

b) $\overline{ab} - \overline{ba} = (10a + b) - (10b + a) = 9a - 9b = 9(a - b)$, chia hết cho $9$.

### Bài 4
$$\overline{abcabc} = \overline{abc} \cdot 1000 + \overline{abc} = \overline{abc} \cdot 1001.$$
Mà $1001 = 7 \cdot 11 \cdot 13$, nên $\overline{abcabc}$ chia hết cho $7$, $11$ và $13$.

### Bài 5
a) $n + 6 = (n + 1) + 5$. Vì $n + 1 \,\vdots\, n + 1$ nên $n + 6 \,\vdots\, n + 1 \iff 5 \,\vdots\, n + 1$.
Do đó $n + 1 \in \{1; 5\}$, suy ra $n \in \{0; 4\}$.

b) $3n + 10 = 3(n + 2) + 4$. Do đó $3n + 10 \,\vdots\, n + 2 \iff 4 \,\vdots\, n + 2$.
$n + 2$ là ước của $4$ và $n + 2 \ge 2$, nên $n + 2 \in \{2; 4\}$, suy ra $n \in \{0; 2\}$.

**Đáp số:** a) $n \in \{0; 4\}$; b) $n \in \{0; 2\}$.

### Bài 6
- **Chia hết cho 2:** $n(n + 1)$ là tích hai số tự nhiên liên tiếp nên chia hết cho $2$.
- **Chia hết cho 3:** xét số dư của $n$ khi chia cho $3$.
  - $n = 3k$: $n \,\vdots\, 3$.
  - $n = 3k + 1$: $2n + 1 = 6k + 3 = 3(2k + 1) \,\vdots\, 3$.
  - $n = 3k + 2$: $n + 1 = 3k + 3 = 3(k + 1) \,\vdots\, 3$.

Trong mọi trường hợp tích chia hết cho $3$. Vì $2$ và $3$ không có ước chung khác $1$ nên tích chia hết cho $6$.

*Nhận xét:* Số $\frac{n(n + 1)(2n + 1)}{6}$ chính là tổng $1^2 + 2^2 + \dots + n^2$. Bài này cho thấy công thức đó luôn cho số tự nhiên.

### Bài 7
$A$ có $60$ số hạng, và $60$ chia hết cho $2$, $3$, $4$.

**Chia hết cho 3:** nhóm từng $2$ số hạng:
$$A = (2 + 2^2) + 2^2(2 + 2^2) + \dots + 2^{58}(2 + 2^2) = 6 \cdot (1 + 2^2 + \dots + 2^{58}) \,\vdots\, 3.$$

**Chia hết cho 7:** nhóm từng $3$ số hạng, mỗi nhóm $2^k + 2^{k + 1} + 2^{k + 2} = 2^k(1 + 2 + 4) = 7 \cdot 2^k$:
$$A = 7 \cdot (2 + 2^4 + \dots + 2^{58}) \,\vdots\, 7.$$

**Chia hết cho 15:** nhóm từng $4$ số hạng, mỗi nhóm $2^k(1 + 2 + 4 + 8) = 15 \cdot 2^k$:
$$A = 15 \cdot (2 + 2^5 + \dots + 2^{57}) \,\vdots\, 15.$$

*Nhận xét:* Số số hạng phải chia hết cho số số hạng trong mỗi nhóm thì mới nhóm vừa đủ.

### Bài 8
$n^2 + n + 1 = n(n + 1) + 1$.
- $n(n + 1)$ là tích hai số liên tiếp nên là số chẵn, do đó $n(n + 1) + 1$ là số lẻ, không chia hết cho $2$, càng không chia hết cho $4$.
- Chữ số tận cùng của $n(n + 1)$ chỉ phụ thuộc vào chữ số tận cùng của $n$. Xét $n$ tận cùng bằng $0, 1, \dots, 9$, tích tận cùng lần lượt là chữ số cuối của $0 \cdot 1, 1 \cdot 2, 2 \cdot 3, 3 \cdot 4, 4 \cdot 5, 5 \cdot 6, 6 \cdot 7, 7 \cdot 8, 8 \cdot 9, 9 \cdot 10$, tức là $0, 2, 6, 2, 0, 0, 2, 6, 2, 0$.
  Vậy $n(n + 1)$ chỉ tận cùng bằng $0$, $2$ hoặc $6$, nên $n^2 + n + 1$ chỉ tận cùng bằng $1$, $3$ hoặc $7$, không chia hết cho $5$.

### Bài 9
$99 = 9 \cdot 11$, và $9$, $11$ không có ước chung khác $1$. Điều kiện: $x \ne 0$.
- **Chia hết cho 9:** $x + 1 + 9 + 9 + 4 + y = x + y + 23 \,\vdots\, 9$. Vì $1 \le x + y \le 18$ nên $x + y \in \{4; 13\}$.
- **Chia hết cho 11:** các chữ số ở vị trí lẻ (từ phải sang) là $y, 9, 1$, ở vị trí chẵn là $4, 9, x$. Cần $(y + 9 + 1) - (4 + 9 + x) = y - x - 3$ chia hết cho $11$. Vì $-12 \le y - x - 3 \le 6$ nên $y - x - 3 \in \{-11; 0\}$, tức $y - x = 3$ hoặc $x - y = 8$.

Ghép điều kiện (chú ý $x + y$ và $x - y$ cùng chẵn hoặc cùng lẻ):
- $x + y = 13$, $y - x = 3$: $y = 8$, $x = 5$. Thỏa mãn.
- $x + y = 4$, $x - y = 8$: $x = 6$, $y = -2$. Loại.
- Hai cách ghép còn lại ($x + y = 4$ với $y - x = 3$; $x + y = 13$ với $x - y = 8$) có tổng và hiệu khác tính chẵn lẻ nên không có nghiệm.

**Đáp số:** $x = 5$, $y = 8$; số cần tìm là $519\,948$.

### Bài 10
$$10 \cdot \overline{abc} = 1000a + 100b + 10c = 999a + (100b + 10c + a) = 999a + \overline{bca}.$$
Do đó $\overline{bca} = 10 \cdot \overline{abc} - 999a$.
Vì $\overline{abc} \,\vdots\, 27$ nên $10 \cdot \overline{abc} \,\vdots\, 27$; và $999 = 27 \cdot 37$ nên $999a \,\vdots\, 27$. Hiệu của hai số chia hết cho $27$ thì chia hết cho $27$, nên $\overline{bca} \,\vdots\, 27$.

*Nhận xét:* Tương tự, $\overline{cab} \,\vdots\, 27$. Ví dụ $189 = 27 \cdot 7$, khi đó $891 = 27 \cdot 33$ và $918 = 27 \cdot 34$.

### Bài 11
Gọi số cần tìm là $n$. Số dư luôn kém số chia $1$ đơn vị, nên $n + 1$ chia hết cho $2$, $3$, $4$, $5$, $6$.
Số nhỏ nhất khác $0$ chia hết cho $2, 3, 4, 5, 6$ là $60$ (vì $4 = 2^2$, $3$, $5$ không có ước chung, $4 \cdot 3 \cdot 5 = 60$, và $60$ chia hết cho $2$ và $6$). Vậy $n + 1$ là bội của $60$: $n \in \{59; 119; 179; \dots\}$.
- $59 = 7 \cdot 8 + 3$, không chia hết cho $7$.
- $119 = 7 \cdot 17$, chia hết cho $7$.

**Đáp số:** $119$.

### Bài 12
Gọi số đó là $\overline{ab}$ ($a \ge 1$). Tích $a \cdot b$ phải khác $0$ nên $b \ge 1$. Điều kiện: $10a + b$ chia hết cho $a \cdot b$.

**Bước 1:** $10a + b \,\vdots\, a$, mà $10a \,\vdots\, a$, nên $b \,\vdots\, a$. Đặt $b = k \cdot a$ với $k$ là số tự nhiên, $1 \le k \cdot a \le 9$.

**Bước 2:** khi đó $10a + b = a(10 + k)$ và $a \cdot b = k \cdot a \cdot a$. Điều kiện trở thành $a(10 + k) \,\vdots\, k \cdot a \cdot a$, tức là $10 + k \,\vdots\, k \cdot a$.
Suy ra $10 + k \,\vdots\, k$, nên $10 \,\vdots\, k$. Vì $k \le 9$ nên $k \in \{1; 2; 5\}$.

**Bước 3:**
- $k = 1$ ($b = a$): $11 \,\vdots\, a$, nên $a = 1$. Được $11$.
- $k = 2$ ($b = 2a$, $a \le 4$): $12 \,\vdots\, 2a$, tức $6 \,\vdots\, a$, nên $a \in \{1; 2; 3\}$. Được $12$, $24$, $36$.
- $k = 5$ ($b = 5a$, $a = 1$): $15 \,\vdots\, 5$, thỏa mãn. Được $15$.

Kiểm tra: $11 : 1 = 11$; $12 : 2 = 6$; $15 : 5 = 3$; $24 : 8 = 3$; $36 : 18 = 2$.

**Đáp số:** $11$; $12$; $15$; $24$; $36$.

### Bài 13
Với $n = 0$: $10^0 + 0 - 1 = 0$, chia hết cho $27$.
Với $n \ge 1$: $10^n - 1 = \underbrace{99\dots9}_{n} = 9 \cdot \underbrace{11\dots1}_{n}$. Do đó
$$10^n + 18n - 1 = 9 \cdot \underbrace{11\dots1}_{n} + 18n = 9 \cdot \left(\underbrace{11\dots1}_{n} - n\right) + 27n.$$
Số $\underbrace{11\dots1}_{n}$ có tổng các chữ số bằng $n$, nên nó và $n$ có cùng số dư khi chia cho $3$. Vậy $\underbrace{11\dots1}_{n} - n \,\vdots\, 3$, suy ra $9 \cdot \left(\underbrace{11\dots1}_{n} - n\right) \,\vdots\, 27$.
Cộng với $27n \,\vdots\, 27$, ta được điều phải chứng minh.

*Nhận xét:* Mấu chốt là "một số và tổng các chữ số của nó có cùng số dư khi chia cho $3$ (và $9$)", hệ quả trực tiếp của cách chứng minh dấu hiệu chia hết.

### Bài 14
Tách số $27$ chữ số $1$ thành ba khối, mỗi khối $9$ chữ số $1$:
$$\underbrace{11\dots1}_{27} = \underbrace{11\dots1}_{9} \cdot 1\underbrace{00\dots0}_{8}1\underbrace{00\dots0}_{8}1.$$
(Nhân $\underbrace{11\dots1}_{9}$ với $10^{18} + 10^9 + 1$ là đặt ba khối $\underbrace{11\dots1}_{9}$ cạnh nhau.)
- $\underbrace{11\dots1}_{9}$ có tổng các chữ số bằng $9$, nên chia hết cho $9$.
- $1\underbrace{00\dots0}_{8}1\underbrace{00\dots0}_{8}1$ có tổng các chữ số bằng $3$, nên chia hết cho $3$.

Tích của một số chia hết cho $9$ và một số chia hết cho $3$ thì chia hết cho $27$.

*Nhận xét:* Lặp lại lập luận này: số gồm $3^k$ chữ số $1$ chia hết cho $3^k$.

# Chủ đề 7. Phân số nâng cao

> Phân số trong đề học sinh giỏi lớp 6 gồm ba mảng chính: tính tổng dãy phân số có quy luật, so sánh phân số bằng phương pháp khéo (phần bù, trung gian, nhân lên rồi so sánh với 1), và chứng minh phân số tối giản hoặc tìm $n$ để phân số là số nguyên. Mỗi mảng có một "chìa khóa" riêng.

## I. Kiến thức cần nắm

### 1. Tổng dãy phân số

- **Tách thành hiệu:** $\dfrac{k}{n(n + k)} = \dfrac{1}{n} - \dfrac{1}{n + k}$. Các số hạng ở giữa triệt tiêu.
- **Dãy nhân:** $S = \dfrac{1}{2} + \dfrac{1}{2^2} + \dots + \dfrac{1}{2^n}$. Tính $2S - S$ được $S = 1 - \dfrac{1}{2^n}$.
- **Đánh giá:** $\dfrac{1}{k^2} < \dfrac{1}{(k - 1)k} = \dfrac{1}{k - 1} - \dfrac{1}{k}$, dùng để chứng minh một tổng nhỏ hơn một số.

*Vì sao tách được:* $\dfrac{1}{n} - \dfrac{1}{n + k} = \dfrac{(n + k) - n}{n(n + k)} = \dfrac{k}{n(n + k)}$.

### 2. So sánh phân số

- **Phần bù đến 1** (hoặc phần hơn 1).
- **Phân số trung gian:** $\dfrac{1}{2}$, 1, hoặc phân số cùng tử với phân số này, cùng mẫu với phân số kia.
- **Nhân lên rồi so sánh với 1:** với các phân số chứa lũy thừa, nhân mỗi phân số với một số thích hợp để đưa về dạng $1 \pm (\text{phần nhỏ})$.

### 3. Phân số tối giản

Để chứng minh $\dfrac{A(n)}{B(n)}$ tối giản: gọi $d$ là ước chung (dương), tìm số $p, q$ sao cho $pA - qB$ là hằng số $c$; khi đó $d$ là ước của $c$. Kết hợp tính chẵn lẻ để loại $d = 2$ (nếu $c = 2$).

### 4. Tìm $n$ để phân số là số nguyên, lớn nhất, nhỏ nhất

$\dfrac{n + a}{n + b} = 1 + \dfrac{a - b}{n + b}$. Phân số nguyên khi $n + b$ là ước của $a - b$. Giá trị lớn nhất (nhỏ nhất) đạt khi $\dfrac{a - b}{n + b}$ lớn nhất (nhỏ nhất).

### 5. Sai lầm hay gặp

- Tách $\dfrac{1}{n(n + 2)} = \dfrac{1}{n} - \dfrac{1}{n + 2}$ (thiếu hệ số $\dfrac{1}{2}$).
- Đếm sai số hạng cuối khi tính tổng.
- Khi chứng minh tối giản mà kết luận $d = 1$ trong khi hằng số là 2 (chưa loại $d = 2$).

## II. Bài tập vận dụng

**Bài 1.** Tính $A = \dfrac{2}{1 \cdot 3} + \dfrac{2}{3 \cdot 5} + \dfrac{2}{5 \cdot 7} + \dots + \dfrac{2}{99 \cdot 101}$.

**Bài 2.** Tính $B = \dfrac{1}{2} + \dfrac{1}{6} + \dfrac{1}{12} + \dfrac{1}{20} + \dots + \dfrac{1}{9\,900}$.

**Bài 3.** Tính $C = \dfrac{1}{2} + \dfrac{1}{2^2} + \dfrac{1}{2^3} + \dots + \dfrac{1}{2^{10}}$.

**Bài 4.** So sánh $\dfrac{13}{27}$ và $\dfrac{27}{41}$.

**Bài 5.** So sánh $\dfrac{19}{31}$ và $\dfrac{17}{35}$.

**Bài 6.** So sánh $A = \dfrac{10^{11} - 1}{10^{12} - 1}$ và $B = \dfrac{10^{10} + 1}{10^{11} + 1}$.

**Bài 7.** Tìm các số nguyên $x$ sao cho $\dfrac{1}{3} < \dfrac{x}{8} < \dfrac{3}{4}$.

**Bài 8.** Chứng minh rằng phân số $\dfrac{n + 1}{n + 2}$ tối giản với mọi số tự nhiên $n$.

**Bài 9.** Chứng minh rằng phân số $\dfrac{2n + 3}{4n + 8}$ tối giản với mọi số tự nhiên $n$.

**Bài 10.** Tìm số nguyên $n$ để $\dfrac{n + 5}{n - 2}$ là số nguyên.

**Bài 11.** Tìm số nguyên $n$ để $A = \dfrac{n + 1}{n - 3}$ có giá trị lớn nhất. Tìm giá trị đó.

**Bài 12.** Tìm $x$ biết $\left(\dfrac{1}{1 \cdot 2} + \dfrac{1}{2 \cdot 3} + \dots + \dfrac{1}{9 \cdot 10}\right) \cdot x = \dfrac{9}{5}$.

**Bài 13 (khó).** Chứng minh rằng $\dfrac{1}{2^2} + \dfrac{1}{3^2} + \dfrac{1}{4^2} + \dots + \dfrac{1}{100^2} < 1$.

---

## III. Lời giải chi tiết

### Bài 1
$\dfrac{2}{n(n + 2)} = \dfrac{1}{n} - \dfrac{1}{n + 2}$, nên
$$A = 1 - \frac{1}{3} + \frac{1}{3} - \frac{1}{5} + \dots + \frac{1}{99} - \frac{1}{101} = 1 - \frac{1}{101} = \frac{100}{101}.$$

### Bài 2
$2 = 1 \cdot 2$, $6 = 2 \cdot 3$, …, $9\,900 = 99 \cdot 100$. Do đó $B = 1 - \dfrac{1}{100} = \dfrac{99}{100}$.

### Bài 3
$2C = 1 + \dfrac{1}{2} + \dots + \dfrac{1}{2^9}$. Lấy $2C - C$: $C = 1 - \dfrac{1}{2^{10}} = \dfrac{1\,023}{1\,024}$.

### Bài 4
$\dfrac{13}{27} < \dfrac{13}{26} = \dfrac{1}{2}$ và $\dfrac{27}{41} > \dfrac{27}{54} = \dfrac{1}{2}$. Vậy $\dfrac{13}{27} < \dfrac{27}{41}$.

### Bài 5
$\dfrac{19}{31} > \dfrac{17}{31} > \dfrac{17}{35}$. Vậy $\dfrac{19}{31} > \dfrac{17}{35}$.

### Bài 6
$10A = \dfrac{10^{12} - 10}{10^{12} - 1} = 1 - \dfrac{9}{10^{12} - 1} < 1$.
$10B = \dfrac{10^{11} + 10}{10^{11} + 1} = 1 + \dfrac{9}{10^{11} + 1} > 1$.
Vậy $10A < 10B$, tức $A < B$.

*Nhận xét:* nhân với 10 để tử và mẫu "gần nhau", rồi so sánh với 1.

### Bài 7
Quy đồng mẫu 24: $\dfrac{8}{24} < \dfrac{3x}{24} < \dfrac{18}{24}$, nên $8 < 3x < 18$, tức $x \in \{3; 4; 5\}$.

### Bài 8
Gọi $d$ là ước chung dương của $n + 1$ và $n + 2$. Khi đó $d$ là ước của $(n + 2) - (n + 1) = 1$, nên $d = 1$.

### Bài 9
Gọi $d$ là ước chung dương của $2n + 3$ và $4n + 8$. Khi đó $d$ là ước của $(4n + 8) - 2(2n + 3) = 2$, nên $d \in \{1; 2\}$.
Nhưng $2n + 3$ là số lẻ nên không chia hết cho 2. Vậy $d = 1$, phân số tối giản.

### Bài 10
$\dfrac{n + 5}{n - 2} = 1 + \dfrac{7}{n - 2}$ (với $n \ne 2$). Cần $n - 2 \in \{\pm 1; \pm 7\}$.

**Đáp số:** $n \in \{3; 1; 9; -5\}$.

### Bài 11
$A = 1 + \dfrac{4}{n - 3}$. $A$ lớn nhất khi $\dfrac{4}{n - 3}$ lớn nhất, tức là $n - 3$ là số nguyên dương nhỏ nhất: $n - 3 = 1$, $n = 4$.
Khi đó $A = 1 + 4 = 5$.

*Lưu ý:* nếu $n - 3 < 0$ thì $\dfrac{4}{n - 3} < 0$, $A < 1$.

### Bài 12
Tổng trong ngoặc bằng $1 - \dfrac{1}{10} = \dfrac{9}{10}$. Vậy $x = \dfrac{9}{5} : \dfrac{9}{10} = 2$.

### Bài 13
Với mọi $k \ge 2$: $k^2 > (k - 1)k$, nên $\dfrac{1}{k^2} < \dfrac{1}{(k - 1)k} = \dfrac{1}{k - 1} - \dfrac{1}{k}$.
Cộng với $k$ từ 2 đến 100:
$$\frac{1}{2^2} + \dots + \frac{1}{100^2} < \left(1 - \frac{1}{2}\right) + \left(\frac{1}{2} - \frac{1}{3}\right) + \dots + \left(\frac{1}{99} - \frac{1}{100}\right) = 1 - \frac{1}{100} < 1.$$

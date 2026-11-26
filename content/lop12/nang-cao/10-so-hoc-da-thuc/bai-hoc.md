# Chủ đề 10. Số học và đa thức

> Câu số học – đa thức trong đề học sinh giỏi lớp 12 kết hợp đồng dư, cấp của phần tử, định lý Euler, phương trình nghiệm nguyên với các tính chất của đa thức: định lý Bézout, Viète, đa thức hệ số nguyên và kỹ thuật dựng đa thức phụ.

## I. Kiến thức cần nắm

### 1. Đồng dư và các định lý

- Fermat nhỏ: $a^{p - 1} \equiv 1 \pmod p$ ($p \nmid a$); Euler: $a^{\varphi(m)} \equiv 1 \pmod m$ ($\gcd(a, m) = 1$).
- Cấp $d$ của $a$ theo modulo $m$: $a^n \equiv 1 \iff d \mid n$.
- Định lý phần dư Trung Hoa để tìm số dư theo modulo hợp số (ví dụ $100 = 4 \cdot 25$).

### 2. Phương trình nghiệm nguyên

Xét đồng dư (số chính phương modulo 3, 4, 8), phân tích nhân tử, chặn nghiệm.

### 3. Số ước

$n = p_1^{a_1}\cdots p_k^{a_k}$ có $\tau(n) = (a_1 + 1)\cdots(a_k + 1)$ ước dương.

### 4. Đa thức

- Bézout: dư khi chia $P(x)$ cho $x - a$ là $P(a)$.
- Đa thức phụ: $P(x_i) = y_i$ với $y_i$ có quy luật thì xét $Q(x) = P(x) - g(x)$ nhận các $x_i$ làm nghiệm.
- Hệ số nguyên: $a - b \mid P(a) - P(b)$.
- Viète bậc ba $x^3 + px^2 + qx + r$: $\sum x_i = -p$, $\sum x_ix_j = q$, $x_1x_2x_3 = -r$.
- Tổng hệ số: $P(1)$; tổng hệ số bậc chẵn: $\dfrac{P(1) + P(-1)}{2}$.

## II. Bài tập vận dụng

**Bài 1.** Tìm số dư khi chia $3^{2026}$ cho 13.

**Bài 2.** Chứng minh $6^{2n} + 19^n - 2^{n + 1}$ chia hết cho 17 với mọi số tự nhiên $n$.

**Bài 3.** Tìm các số tự nhiên $n$ để $n^2 + 2n + 6$ chia hết cho 9.

**Bài 4.** Tìm hai chữ số tận cùng của $2^{2026}$.

**Bài 5.** Tìm các số nguyên $x$, $y$ ($y \ge 0$) thỏa mãn $x^2 + 3 = 2^y$.

**Bài 6.** Tìm số nguyên tố $p$ sao cho $p^2 + 11$ có đúng 6 ước dương.

**Bài 7.** Chứng minh có vô số số nguyên tố có dạng $4k + 3$.

**Bài 8.** Tìm đa thức bậc ba $P(x)$ có hệ số cao nhất bằng $-1$ biết $P(1) = 1$, $P(2) = 2$, $P(3) = 3$. Tính $P(0)$.

**Bài 9.** Chứng minh đa thức $x^4 + x^3 + x^2 + x + 1$ không có nghiệm thực.

**Bài 10.** Gọi $a$, $b$, $c$ là nghiệm của $x^3 - 6x^2 + 11x - 6 = 0$. Tính $\dfrac{1}{a} + \dfrac{1}{b} + \dfrac{1}{c}$ và $a^2 + b^2 + c^2$.

**Bài 11.** Cho $P(x) = (x^2 + x + 1)^{2026}$. Tính tổng các hệ số và tổng các hệ số của số hạng bậc chẵn.

**Bài 12.** Tìm đa thức bậc hai $P(x)$ biết $P(x + 1) - P(x) = 2x + 3$ và $P(0) = 1$.

**Bài 13 (HSG).** Có tồn tại đa thức $P(x)$ hệ số nguyên với $P(2) = 5$ và $P(7) = 13$ không?

---

## III. Lời giải chi tiết

### Bài 1
$3^3 = 27 \equiv 1 \pmod{13}$, $2026 = 3 \cdot 675 + 1$: $3^{2026} \equiv 3$. Số dư 3.

### Bài 2
$36 \equiv 2$ và $19 \equiv 2 \pmod{17}$: biểu thức $\equiv 2^n + 2^n - 2 \cdot 2^n = 0$.

### Bài 3
$n^2 + 2n + 6 = (n + 1)^2 + 5 \equiv 0 \pmod 9 \iff (n + 1)^2 \equiv 4 \pmod 9$. Thử các số dư: $n + 1 \equiv 2$ hoặc $7 \pmod 9$.
**Đáp số:** $n \equiv 1$ hoặc $n \equiv 6 \pmod 9$.

### Bài 4
Modulo 4: $2^{2026} \equiv 0$. Modulo 25: $\varphi(25) = 20$, $2026 \equiv 6 \pmod{20}$, $2^6 = 64 \equiv 14$. Số $x \equiv 0 \pmod 4$, $x \equiv 14 \pmod{25}$ trong $\{0, \dots, 99\}$: thử $14, 39, 64, 89$ được 64. Hai chữ số tận cùng **64**.

### Bài 5
$y = 0, 1$: $x^2 = -2, -1$ vô nghiệm. $y = 2$: $x = \pm 1$. $y \ge 3$: $2^y \equiv 0 \pmod 8$, nên $x^2 \equiv 5 \pmod 8$, vô lý (số chính phương modulo 8 thuộc $\{0; 1; 4\}$).
**Đáp số:** $(1; 2)$, $(-1; 2)$.

### Bài 6
$p = 2$: 15 có 4 ước. $p = 3$: $20 = 2^2 \cdot 5$ có $3 \cdot 2 = 6$ ước. $p > 3$: $p$ lẻ, không chia hết cho 3 nên $p^2 \equiv 1 \pmod 8$ và $\pmod 3$, suy ra $p^2 + 11$ chia hết cho 12 và lớn hơn 12. Khi đó nó có đủ 6 ước của 12 và thêm chính nó: ít nhất 7 ước.
**Đáp số:** $p = 3$.

### Bài 7
Giả sử chỉ có hữu hạn số nguyên tố dạng $4k + 3$ là $p_1, \dots, p_n$. Xét $N = 4p_1\cdots p_n - 1 \equiv 3 \pmod 4$. $N$ lẻ; nếu mọi ước nguyên tố của $N$ có dạng $4k + 1$ thì $N \equiv 1 \pmod 4$, vô lý. Vậy $N$ có ước nguyên tố $q$ dạng $4k + 3$, nhưng $q$ không trùng $p_i$ nào (vì $N \equiv -1 \pmod{p_i}$): mâu thuẫn.

### Bài 8
$Q(x) = P(x) - x$ bậc 3, hệ số cao nhất $-1$, có nghiệm 1, 2, 3: $P(x) = x - (x - 1)(x - 2)(x - 3)$. $P(0) = 0 + 6 = 6$.

### Bài 9
$x = 1$ không là nghiệm ($P(1) = 5$). Với $x \ne 1$: $P(x) = \dfrac{x^5 - 1}{x - 1}$; $P(x) = 0 \iff x^5 = 1 \iff x = 1$ (nghiệm thực duy nhất của $x^5 = 1$), mâu thuẫn. Vậy không có nghiệm thực.

### Bài 10
Viète: $a + b + c = 6$, $ab + bc + ca = 11$, $abc = 6$. $\dfrac{1}{a} + \dfrac{1}{b} + \dfrac{1}{c} = \dfrac{11}{6}$; $a^2 + b^2 + c^2 = 36 - 22 = 14$.

### Bài 11
Tổng hệ số $P(1) = 3^{2026}$. $P(-1) = 1$. Tổng hệ số bậc chẵn $\dfrac{3^{2026} + 1}{2}$.

### Bài 12
$P(x) = ax^2 + bx + 1$: $P(x + 1) - P(x) = 2ax + a + b = 2x + 3$, nên $a = 1$, $b = 2$. $P(x) = x^2 + 2x + 1$.

### Bài 13
Nếu tồn tại thì $7 - 2 = 5$ chia hết $P(7) - P(2) = 8$, vô lý. **Không tồn tại.**

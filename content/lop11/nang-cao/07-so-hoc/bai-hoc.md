# Chủ đề 7. Số học nâng cao

> Số học trong đề học sinh giỏi lớp 11 xoay quanh đồng dư, cấp của một số theo modulo, định lý Fermat nhỏ, định lý Euler, định lý Wilson, định lý phần dư Trung Hoa và phương trình nghiệm nguyên. Chìa khóa là chọn modulo phù hợp và khai thác tính chất chia hết.

## I. Kiến thức cần nắm

### 1. Đồng dư

$a \equiv b \pmod m \iff m \mid a - b$. Có thể cộng, trừ, nhân, nâng lũy thừa hai vế đồng dư cùng modulo.

### 2. Các định lý cơ bản

- **Fermat nhỏ:** $p$ nguyên tố, $p \nmid a$ thì $a^{p - 1} \equiv 1 \pmod p$; với mọi $a$: $a^p \equiv a \pmod p$.
- **Euler:** $\gcd(a, m) = 1$ thì $a^{\varphi(m)} \equiv 1 \pmod m$, với $\varphi(m)$ là số các số từ 1 đến $m$ nguyên tố cùng nhau với $m$. $\varphi(p^k) = p^k - p^{k - 1}$, $\varphi$ nhân tính: $\varphi(100) = \varphi(4)\varphi(25) = 2 \cdot 20 = 40$.
- **Wilson:** $p$ nguyên tố thì $(p - 1)! \equiv -1 \pmod p$.
- **Phần dư Trung Hoa:** với $m_1, \dots, m_k$ đôi một nguyên tố cùng nhau, hệ $x \equiv a_i \pmod{m_i}$ có nghiệm duy nhất theo modulo $m_1\cdots m_k$.

### 3. Cấp của một số

Cấp của $a$ theo modulo $m$ ($\gcd(a, m) = 1$) là số nguyên dương $d$ nhỏ nhất với $a^d \equiv 1 \pmod m$. Khi đó $a^n \equiv 1 \pmod m \iff d \mid n$, và $d \mid \varphi(m)$.

### 4. Phương trình nghiệm nguyên

- Phân tích thành tích, xét ước.
- Xét đồng dư theo modulo thích hợp (số chính phương theo modulo 3, 4, 5, 8).
- Lùi vô hạn (xuống thang) khi mọi nghiệm đều chia hết cho một số nguyên tố.
- Chặn: bài có giai thừa, lũy thừa thường chỉ có nghiệm nhỏ.

### 5. Số chính phương theo modulo

Modulo 3: 0, 1. Modulo 4: 0, 1. Modulo 5: 0, 1, 4. Modulo 8: 0, 1, 4 (số lẻ bình phương $\equiv 1$).

## II. Bài tập vận dụng

**Bài 1.** Tìm số dư khi chia $2^{100}$ cho 13.

**Bài 2.** Tìm hai chữ số tận cùng của $7^{2026}$.

**Bài 3.** Dùng định lý Euler, tìm hai chữ số tận cùng của $3^{2026}$.

**Bài 4.** Tìm cấp của 2 theo modulo 7 và theo modulo 11.

**Bài 5.** Chứng minh $11^{n + 2} + 12^{2n + 1}$ chia hết cho 133 với mọi số tự nhiên $n$.

**Bài 6.** Tìm các số nguyên dương $n$ để $n \cdot 2^n + 1$ chia hết cho 3.

**Bài 7.** Chứng minh $p^4 - 1$ chia hết cho 240 với mọi số nguyên tố $p > 5$.

**Bài 8 (Wilson).** Tìm số dư khi chia $16!$ cho 17 và khi chia $15!$ cho 17.

**Bài 9.** Tìm các số nguyên $x \ge 0$, $y$ thỏa mãn $2^x + 1 = y^2$.

**Bài 10.** Chứng minh phương trình $x^2 + y^2 = 3z^2$ chỉ có nghiệm nguyên $(0; 0; 0)$.

**Bài 11.** Tìm các số nguyên dương $x$, $y$ thỏa mãn $1! + 2! + \dots + x! = y^2$.

**Bài 12 (Trung Hoa).** Tìm số tự nhiên nhỏ nhất chia 3 dư 2, chia 5 dư 3, chia 7 dư 2.

**Bài 13 (HSG).** Chứng minh có vô số số nguyên dương $n$ sao cho $n \cdot 2^n + 1$ chia hết cho 5.

**Bài 14 (HSG).** Tìm các số nguyên tố $p$, $q$ thỏa mãn $p^2 - 2q^2 = 1$.

---

## III. Lời giải chi tiết

### Bài 1
$2^{12} \equiv 1 \pmod{13}$ (Fermat), $100 = 12 \cdot 8 + 4$: $2^{100} \equiv 2^4 = 16 \equiv 3$. Số dư 3.

### Bài 2
$7^4 = 2\,401 \equiv 1 \pmod{100}$; $2026 = 4 \cdot 506 + 2$: $7^{2026} \equiv 49$. Hai chữ số tận cùng **49**.

### Bài 3
$\varphi(100) = 40$ nên $3^{40} \equiv 1$; thực ra $3^{20} \equiv 1 \pmod{100}$ ($3^{10} = 59\,049 \equiv 49$, $49^2 \equiv 1$). $2026 = 20 \cdot 101 + 6$: $3^{2026} \equiv 3^6 = 729 \equiv 29$. Hai chữ số tận cùng **29**.

### Bài 4
Modulo 7: $2^1 = 2$, $2^2 = 4$, $2^3 = 8 \equiv 1$: cấp 3. Modulo 11: cấp chia hết $\varphi(11) = 10$, nên thuộc $\{1; 2; 5; 10\}$. $2^2 = 4$, $2^5 = 32 \equiv 10 \not\equiv 1$: cấp là 10.

### Bài 5
$11^{n + 2} + 12^{2n + 1} = 121 \cdot 11^n + 12 \cdot 144^n$. Vì $144 \equiv 11 \pmod{133}$: biểu thức $\equiv 121 \cdot 11^n + 12 \cdot 11^n = 133 \cdot 11^n \equiv 0 \pmod{133}$.

### Bài 6
$2 \equiv -1 \pmod 3$ nên $n \cdot 2^n + 1 \equiv n(-1)^n + 1$.
- $n$ chẵn: cần $n \equiv -1 \equiv 2 \pmod 3$: $n \equiv 2 \pmod 6$.
- $n$ lẻ: cần $-n + 1 \equiv 0$, $n \equiv 1 \pmod 3$: $n \equiv 1 \pmod 6$.

**Đáp số:** $n$ chia 6 dư 1 hoặc dư 2.

### Bài 7
$240 = 16 \cdot 3 \cdot 5$. Theo Fermat: $p^4 \equiv 1 \pmod 5$, $p^2 \equiv 1 \pmod 3$. $p$ lẻ nên $p^2 - 1 = (p - 1)(p + 1)$ là tích hai số chẵn liên tiếp, chia hết cho 8; $p^2 + 1$ chẵn. Vậy $p^4 - 1 = (p^2 - 1)(p^2 + 1)$ chia hết cho 16. Ba modulo đôi một nguyên tố cùng nhau nên $p^4 - 1$ chia hết cho 240.

### Bài 8
Wilson: $16! \equiv -1 \equiv 16 \pmod{17}$. $16! = 16 \cdot 15!$ và $16 \equiv -1$: $-15! \equiv -1$, $15! \equiv 1 \pmod{17}$.

### Bài 9
$(y - 1)(y + 1) = 2^x$. $x = 0$: $y^2 = 2$, vô nghiệm. $x \ge 1$: $y$ lẻ, $y - 1$ và $y + 1$ là hai lũy thừa của 2 (tính cả dấu) hơn kém nhau 2, chỉ có thể là 2 và 4 (hoặc $-4$ và $-2$): $y = \pm 3$, $2^x = 8$, $x = 3$.
**Đáp số:** $(3; 3)$, $(3; -3)$.

### Bài 10
Giả sử có nghiệm khác $(0; 0; 0)$, chọn nghiệm có $\lvert x\rvert + \lvert y\rvert + \lvert z\rvert$ nhỏ nhất. Modulo 3: $x^2 + y^2 \equiv 0$; số chính phương chia 3 dư 0 hoặc 1, nên $x \equiv y \equiv 0$. Đặt $x = 3x_1$, $y = 3y_1$: $3(x_1^2 + y_1^2) = z^2$, nên $3 \mid z$, $z = 3z_1$: $x_1^2 + y_1^2 = 3z_1^2$. $(x_1; y_1; z_1)$ là nghiệm nhỏ hơn: mâu thuẫn.

### Bài 11
$x = 1$: $1 = 1^2$. $x = 2$: 3. $x = 3$: $9 = 3^2$. $x = 4$: 33. Với $x \ge 5$, các số $k!$ ($k \ge 5$) chia hết cho 10, nên tổng tận cùng bằng 3, không là số chính phương.
**Đáp số:** $(1; 1)$, $(3; 3)$.

### Bài 12
$x \equiv 2 \pmod 3$ và $x \equiv 2 \pmod 7$ nên $x \equiv 2 \pmod{21}$: $x \in \{2; 23; 44; \dots\}$. Số đầu tiên chia 5 dư 3 là 23.

### Bài 13
$2^4 \equiv 1 \pmod 5$. Xét $n = 20k + 3$ ($k \ge 0$): $2^n \equiv 2^3 = 8 \equiv 3$ và $n \equiv 3 \pmod 5$, nên $n \cdot 2^n + 1 \equiv 9 + 1 = 10 \equiv 0 \pmod 5$. Vô số $n$ như vậy.

### Bài 14
$p^2 = 2q^2 + 1$ lẻ nên $p$ lẻ, $p^2 \equiv 1 \pmod 8$, suy ra $2q^2 \equiv 0 \pmod 8$, $q$ chẵn: $q = 2$, $p^2 = 9$, $p = 3$.
**Đáp số:** $p = 3$, $q = 2$.

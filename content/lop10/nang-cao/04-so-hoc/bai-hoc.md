# Chủ đề 4. Số học

> Đề HSG lớp 10 cấp tỉnh thường có một câu số học: chứng minh chia hết, tìm số dư của lũy thừa lớn, tìm số nguyên tố thỏa điều kiện, hoặc giải phương trình nghiệm nguyên. Công cụ chính là **đồng dư** và **định lý Fermat nhỏ**.

## I. Kiến thức cần nắm

### 1. Đồng dư thức
**Định nghĩa:** với số nguyên dương $m$, ta viết $a \equiv b \pmod m$ nếu $m \mid a - b$ (tức là $a$, $b$ có cùng số dư khi chia cho $m$).

**Tính chất.** Nếu $a \equiv b$ và $c \equiv d \pmod m$ thì
- $a + c \equiv b + d$, $\quad a - c \equiv b - d \pmod m$;
- $ac \equiv bd \pmod m$; suy ra $a^n \equiv b^n \pmod m$ với mọi $n \in \mathbb N$.

*Vì sao tính chất nhân đúng:* $ac - bd = a(c - d) + d(a - b)$, cả hai số hạng đều chia hết cho $m$.

**Rút gọn:** nếu $ka \equiv kb \pmod m$ và $\gcd(k, m) = 1$ thì $a \equiv b \pmod m$. Không được rút gọn khi $\gcd(k, m) > 1$: $2\cdot 1 \equiv 2\cdot 4 \pmod 6$ nhưng $1 \not\equiv 4 \pmod 6$.

**Hệ quả hay dùng:** $a \equiv -1 \pmod m$ thì $a^n \equiv (-1)^n \pmod m$. Ví dụ $10 \equiv -1 \pmod{11}$, $2 \equiv -1 \pmod 3$, $8 \equiv -1 \pmod 9$.

### 2. Số dư của lũy thừa
Để tìm $a^N \bmod m$: tìm số mũ nhỏ $k$ sao cho $a^k \equiv 1$ (hoặc $\equiv -1$) $\pmod m$, rồi viết $N = qk + r$:
$$a^N = (a^k)^q\cdot a^r \equiv a^r \pmod m.$$

*Ví dụ:* $3^{100} \bmod 7$. Ta có $3^3 = 27 \equiv -1 \pmod 7$, nên $3^6 \equiv 1$. Vì $100 = 6\cdot 16 + 4$: $3^{100} \equiv 3^4 = 81 \equiv 4 \pmod 7$.

**Chữ số tận cùng** là số dư khi chia cho $10$; **hai chữ số tận cùng** là số dư khi chia cho $100$.

### 3. Định lý Fermat nhỏ
Nếu $p$ là số nguyên tố và $p \nmid a$ thì
$$a^{p-1} \equiv 1 \pmod p.$$
Dạng tương đương, đúng với **mọi** số nguyên $a$: $a^p \equiv a \pmod p$.

*Chứng minh:* xét $p - 1$ số $a, 2a, \dots, (p-1)a$. Không số nào chia hết cho $p$, và không có hai số nào đồng dư (nếu $ia \equiv ja$ thì $p \mid (i - j)a$, mà $p \nmid a$, nên $p \mid i - j$, vô lý vì $0 < \lvert i - j\rvert < p$). Vậy số dư của chúng là một hoán vị của $1, 2, \dots, p - 1$. Nhân lại:
$$a^{p-1}\cdot(p-1)! \equiv (p-1)! \pmod p.$$
Vì $\gcd((p-1)!, p) = 1$, rút gọn được $a^{p-1} \equiv 1 \pmod p$.

**Ứng dụng:** nếu $(p - 1) \mid k$ thì $a^{k+1} \equiv a \pmod p$ với mọi $a$. Ví dụ $a^5 \equiv a \pmod 5$, $a^7 \equiv a \pmod 7$.

### 4. Số chính phương và số dư
| Modulo | Số dư có thể của $x^2$ |
|---|---|
| $3$ | $0, 1$ |
| $4$ | $0, 1$ |
| $5$ | $0, 1, 4$ |
| $8$ | $0, 1, 4$ |

*Vì sao (mod 8):* $x$ chẵn thì $x^2 = 4k^2 \equiv 0$ hoặc $4$; $x$ lẻ, $x = 2k + 1$, thì $x^2 = 4k(k + 1) + 1 \equiv 1 \pmod 8$ vì $k(k+1)$ chẵn.

**Hệ quả:** tổng ba số chính phương không thể đồng dư $7 \pmod 8$ (tổng ba số trong $\{0, 1, 4\}$ không bao giờ bằng $7$ theo modulo $8$). Tổng hai số chính phương không thể đồng dư $3 \pmod 4$.

### 5. Phương trình nghiệm nguyên
| Phương pháp | Dấu hiệu | Ý tưởng |
|---|---|---|
| **Đưa về tích** | Có $xy$, $x$, $y$ bậc nhất | $xy + ax + by = c \iff (x + b)(y + a) = c + ab$, rồi xét ước |
| **Đồng dư** | Cần chứng minh vô nghiệm | Xét hai vế theo modulo thích hợp ($3, 4, 8, 9$...) |
| **Kẹp giữa hai bình phương** | $y^2 = $ đa thức bậc chẵn của $x$ | $A^2 < y^2 < (A + 1)^2$ thì vô nghiệm |
| **Bậc hai theo một ẩn** | Phương trình bậc hai hai ẩn | $\Delta \ge 0$ để chặn ẩn kia, hoặc $\Delta$ là số chính phương |
| **Phương trình mũ** | $a^x \pm b^y = c$ | Xét modulo để biết tính chẵn lẻ của số mũ, rồi phân tích hiệu hai bình phương |

*Vì sao kẹp được:* giữa hai số chính phương liên tiếp $A^2$ và $(A + 1)^2$ không có số chính phương nào.

**Tích hai số nguyên tố cùng nhau là lũy thừa:** nếu $uv = 2^n$ với $u, v$ nguyên dương thì cả $u$ và $v$ đều là lũy thừa của $2$ (vì mọi ước nguyên tố của $u$ đều là ước của $2^n$).

### 6. Bài toán số nguyên tố
- Mọi số nguyên tố $p > 3$ có dạng $6k \pm 1$, do đó $p^2 \equiv 1 \pmod 3$ và $p^2 \equiv 1 \pmod 8$, nên $p^2 - 1$ chia hết cho $24$.
- Để chứng minh một số là hợp số, chỉ ra nó chia hết cho một số nguyên tố nhỏ (thường là $2$ hoặc $3$) **và lớn hơn** số đó.

> **Sai lầm hay gặp:** chia hai vế của đồng dư cho số không nguyên tố cùng nhau với modulo; quên xét các số nguyên tố nhỏ ($p = 2$, $p = 3$) riêng; quên nghiệm âm trong phương trình nghiệm nguyên.

---

## II. Bài tập vận dụng

**Bài 1.** Tìm số dư khi chia $2^{2026}$ cho $7$.

**Bài 2.** Tìm hai chữ số tận cùng của $7^{2026}$.

**Bài 3.** Chứng minh $n^5 - n$ chia hết cho $30$ với mọi số nguyên $n$.

**Bài 4.** Chứng minh với mọi số tự nhiên $n$, số $5^{2n+1} + 2^{n+4} + 2^{n+1}$ chia hết cho $23$.

**Bài 5 (Fermat nhỏ).** Chứng minh $a^{13} - a$ chia hết cho $2730$ với mọi số nguyên $a$.

**Bài 6.** Tìm tất cả số nguyên tố $p$ sao cho $2^p + 1$ chia hết cho $p$.

**Bài 7.** Tìm tất cả số nguyên tố $p$ sao cho $p^2 + 2^p$ cũng là số nguyên tố.

**Bài 8.** Tìm các số nguyên $x, y$ thỏa mãn $xy - 2x - 3y = 1$.

**Bài 9.** Chứng minh phương trình $x^2 + y^2 + z^2 = 2023$ không có nghiệm nguyên.

**Bài 10.** Tìm tất cả số nguyên dương $n$ sao cho $n\cdot 2^n + 1$ chia hết cho $3$.

**Bài 11.** Tìm các số nguyên $x, y$ thỏa mãn $x^2 - xy + y^2 = x + y$.

**Bài 12 (kẹp).** Tìm các số nguyên $x, y$ thỏa mãn $y^2 = x^4 + 2x^3 + 2x^2 + x + 3$.

**Bài 13.** Tìm các số nguyên dương $x, y$ thỏa mãn $3^x - 2^y = 1$.

**Bài 14 (HSG).** Tìm tất cả các cặp số nguyên dương $(x; y)$ sao cho $x^2 + 3y$ và $y^2 + 3x$ đều là số chính phương.

---

## III. Lời giải chi tiết

### Bài 1
Ta có $2^3 = 8 \equiv 1 \pmod 7$. Vì $2026 = 3\cdot 675 + 1$:
$$2^{2026} = (2^3)^{675}\cdot 2 \equiv 1\cdot 2 = 2 \pmod 7.$$

**Đáp số:** số dư là $2$.

### Bài 2
Cần tìm $7^{2026} \bmod 100$. Ta có $7^2 = 49$, $7^4 = 2401 \equiv 1 \pmod{100}$. Vì $2026 = 4\cdot 506 + 2$:
$$7^{2026} = (7^4)^{506}\cdot 7^2 \equiv 49 \pmod{100}.$$

**Đáp số:** hai chữ số tận cùng là $49$.

### Bài 3
Ta có $30 = 2\cdot 3\cdot 5$, ba số nguyên tố đôi một khác nhau, nên chỉ cần chứng minh $n^5 - n$ chia hết cho $2$, $3$, $5$.
- $n^5 - n = (n - 1)n(n + 1)(n^2 + 1)$ chứa tích ba số nguyên liên tiếp $(n-1)n(n+1)$, nên chia hết cho $2$ và $3$.
- Theo Fermat nhỏ với $p = 5$: $n^5 \equiv n \pmod 5$.

Vậy $30 \mid n^5 - n$.

### Bài 4
Ta có $5^{2n+1} = 5\cdot 25^n$ và $2^{n+4} + 2^{n+1} = 16\cdot 2^n + 2\cdot 2^n = 18\cdot 2^n$. Vì $25 \equiv 2 \pmod{23}$:
$$5\cdot 25^n + 18\cdot 2^n \equiv 5\cdot 2^n + 18\cdot 2^n = 23\cdot 2^n \equiv 0 \pmod{23}.$$

### Bài 5
Phân tích $2730 = 2\cdot 3\cdot 5\cdot 7\cdot 13$. Với mỗi số nguyên tố $p \in \{2; 3; 5; 7; 13\}$, ta có $p - 1 \in \{1; 2; 4; 6; 12\}$, đều là ước của $12$.
- Nếu $p \mid a$ thì hiển nhiên $p \mid a^{13} - a = a(a^{12} - 1)$.
- Nếu $p \nmid a$: theo Fermat nhỏ $a^{p-1} \equiv 1 \pmod p$, nên $a^{12} = \left(a^{p-1}\right)^{\frac{12}{p-1}} \equiv 1 \pmod p$, tức là $p \mid a^{12} - 1$.

Vậy $a^{13} - a$ chia hết cho cả năm số nguyên tố phân biệt, nên chia hết cho tích của chúng là $2730$.

*Nhận xét:* $2730$ là số lớn nhất chia hết $a^{13} - a$ với mọi $a$: kiểm tra với $a = 2$, $2^{13} - 2 = 8190 = 3\cdot 2730$, còn $\gcd(8190, 3^{13} - 3) = 2730$.

### Bài 6
Nếu $p \mid 2^p + 1$ thì $p$ lẻ (vì $2^p + 1$ lẻ). Theo Fermat nhỏ, $2^p \equiv 2 \pmod p$, nên
$$0 \equiv 2^p + 1 \equiv 3 \pmod p.$$
Vậy $p \mid 3$, tức là $p = 3$. Thử lại: $2^3 + 1 = 9$ chia hết cho $3$.

**Đáp số:** $p = 3$.

### Bài 7
- $p = 2$: $4 + 4 = 8$, không nguyên tố.
- $p = 3$: $9 + 8 = 17$, nguyên tố.
- $p > 3$: $p$ không chia hết cho $3$ nên $p^2 \equiv 1 \pmod 3$. Vì $p$ lẻ, $2^p \equiv (-1)^p = -1 \pmod 3$. Do đó $p^2 + 2^p \equiv 0 \pmod 3$, mà $p^2 + 2^p > 3$, nên là hợp số.

**Đáp số:** $p = 3$.

### Bài 8
Biến đổi:
$$xy - 2x - 3y = 1 \iff x(y - 2) - 3(y - 2) = 1 + 6 \iff (x - 3)(y - 2) = 7.$$
Vì $7$ nguyên tố, $(x - 3; y - 2) \in \{(1; 7), (7; 1), (-1; -7), (-7; -1)\}$.

**Đáp số:** $(x; y) \in \{(4; 9), (10; 3), (2; -5), (-4; 1)\}$.

### Bài 9
Bình phương của số nguyên chia $8$ dư $0$, $1$ hoặc $4$. Tổng ba số dư như vậy (theo modulo $8$) chỉ có thể là
$$0, 1, 2, 3, 4, 5, 6 \pmod 8,$$
không bao giờ bằng $7$. Mà $2023 = 8\cdot 252 + 7 \equiv 7 \pmod 8$. Vậy phương trình vô nghiệm nguyên.

*Kiểm tra liệt kê:* các tổng $a + b + c$ với $a, b, c \in \{0, 1, 4\}$ là $0, 1, 2, 3, 4, 5, 6, 8, 9, 12$, theo modulo $8$ là $0, 1, 2, 3, 4, 5, 6, 0, 1, 4$.

### Bài 10
Vì $2 \equiv -1 \pmod 3$ nên $n\cdot 2^n + 1 \equiv (-1)^n n + 1 \pmod 3$.
- **$n$ chẵn:** cần $n + 1 \equiv 0$, tức là $n \equiv 2 \pmod 3$. Kết hợp $n$ chẵn: $n \equiv 2 \pmod 6$.
- **$n$ lẻ:** cần $-n + 1 \equiv 0$, tức là $n \equiv 1 \pmod 3$. Kết hợp $n$ lẻ: $n \equiv 1 \pmod 6$.

**Đáp số:** $n = 6k + 1$ hoặc $n = 6k + 2$ ($k \in \mathbb N$).

### Bài 11
Coi phương trình là phương trình bậc hai ẩn $x$:
$$x^2 - (y + 1)x + y^2 - y = 0.$$
Để có nghiệm (thực) cần
$$\Delta = (y + 1)^2 - 4(y^2 - y) = -3y^2 + 6y + 1 \ge 0 \iff 3(y - 1)^2 \le 4 \iff (y - 1)^2 \le 1.$$
Vì $y$ nguyên nên $y \in \{0; 1; 2\}$.
- $y = 0$: $x^2 - x = 0$, $x \in \{0; 1\}$.
- $y = 1$: $x^2 - 2x = 0$, $x \in \{0; 2\}$.
- $y = 2$: $x^2 - 3x + 2 = 0$, $x \in \{1; 2\}$.

**Đáp số:** $(x; y) \in \{(0; 0), (1; 0), (0; 1), (2; 1), (1; 2), (2; 2)\}$.

### Bài 12
Đặt $A = x^2 + x$. Ta có
$$y^2 - A^2 = (x^4 + 2x^3 + 2x^2 + x + 3) - (x^4 + 2x^3 + x^2) = x^2 + x + 3 > 0,$$
$$(A + 1)^2 - y^2 = (x^4 + 2x^3 + 3x^2 + 2x + 1) - y^2 = x^2 + x - 2 = (x - 1)(x + 2).$$
- Nếu $x > 1$ hoặc $x < -2$ thì $(x - 1)(x + 2) > 0$, nên $A^2 < y^2 < (A + 1)^2$. Vì $A = x(x + 1) \ge 0$ với mọi số nguyên $x$, điều này cho $A < \lvert y\rvert < A + 1$, vô lý vì giữa hai số nguyên liên tiếp không có số nguyên nào.
- Vậy $-2 \le x \le 1$. Thử:
  - $x = -2$: $y^2 = 16 - 16 + 8 - 2 + 3 = 9$, $y = \pm 3$.
  - $x = -1$: $y^2 = 1 - 2 + 2 - 1 + 3 = 3$, loại.
  - $x = 0$: $y^2 = 3$, loại.
  - $x = 1$: $y^2 = 1 + 2 + 2 + 1 + 3 = 9$, $y = \pm 3$.

**Đáp số:** $(x; y) \in \{(1; 3), (1; -3), (-2; 3), (-2; -3)\}$.

*Nhận xét:* cách chọn $A$: lấy "căn" phần bậc cao, $\sqrt{x^4 + 2x^3 + \dots} \approx x^2 + x$.

### Bài 13
- **$y = 1$:** $3^x = 3$, $x = 1$.
- **$y \ge 2$:** $3^x = 2^y + 1 \equiv 1 \pmod 4$. Mà $3 \equiv -1 \pmod 4$, nên $(-1)^x \equiv 1$, tức là $x$ chẵn. Đặt $x = 2k$ ($k \ge 1$):
$$2^y = 3^{2k} - 1 = (3^k - 1)(3^k + 1).$$
Hai thừa số đều là lũy thừa của $2$ và hơn kém nhau $2$. Hai lũy thừa của $2$ hơn kém nhau $2$ chỉ có $2$ và $4$. Vậy $3^k - 1 = 2$, $k = 1$, $x = 2$, và $2^y = 8$, $y = 3$.

**Đáp số:** $(x; y) \in \{(1; 1), (2; 3)\}$.

*Vì sao hai lũy thừa của $2$ hơn kém $2$ chỉ là $2, 4$:* nếu $2^b - 2^a = 2$ với $b > a \ge 1$ thì $2^{a-1}(2^{b-a} - 1) = 1$, nên $a = 1$ và $2^{b-a} = 2$, tức là $b = 2$.

### Bài 14
Vai trò của $x$, $y$ như nhau, giả sử $x \ge y \ge 1$. Khi đó
$$x^2 < x^2 + 3y \le x^2 + 3x < x^2 + 4x + 4 = (x + 2)^2.$$
Vì $x^2 + 3y$ là số chính phương nằm giữa $x^2$ và $(x + 2)^2$, nó phải bằng $(x + 1)^2$:
$$3y = 2x + 1 \implies x = \frac{3y - 1}{2},$$
và $y$ lẻ. Khi đó
$$y^2 + 3x = y^2 + \frac{9y - 3}{2}.$$
So sánh với các bình phương:
- $(y + 3)^2 - \left(y^2 + \frac{9y-3}{2}\right) = \frac{3y + 21}{2} > 0$;
- $\left(y^2 + \frac{9y-3}{2}\right) - (y + 2)^2 = \frac{y - 11}{2}$.

Nếu $y > 11$ thì $(y + 2)^2 < y^2 + 3x < (y + 3)^2$, vô lý. Vậy $y \le 11$, $y$ lẻ. Thử $y \in \{1; 3; 5; 7; 9; 11\}$, giá trị $y^2 + \frac{9y - 3}{2}$ lần lượt là $4, 21, 46, 79, 120, 169$. Chỉ có $4 = 2^2$ và $169 = 13^2$ là số chính phương, ứng với $y = 1$, $x = 1$ và $y = 11$, $x = 16$.

Thử lại: $(1; 1)$: $4$ và $4$. $(16; 11)$: $256 + 33 = 289 = 17^2$ và $121 + 48 = 169 = 13^2$.

**Đáp số:** $(x; y) \in \{(1; 1), (16; 11), (11; 16)\}$.

*Nhận xét:* bước "kẹp" đầu tiên dùng được nhờ giả sử $x \ge y$; sau đó thế vào điều kiện còn lại và kẹp lần nữa để chặn $y$.

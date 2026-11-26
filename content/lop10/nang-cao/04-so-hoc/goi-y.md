# Gợi ý từng tầng cho bài tập Số học

## Bài 1 | 1
**Ý tưởng:** $2^3 \equiv 1 \pmod 7$, chia số mũ cho $3$.

### Gợi ý 1
Tính vài lũy thừa đầu của $2$ theo modulo $7$. Khi nào gặp lại số dư $1$?

### Gợi ý 2
$2^3 \equiv 1$ và $2026 = 3\cdot 675 + 1$.

## Bài 2 | 1
**Ý tưởng:** Hai chữ số tận cùng là số dư khi chia cho $100$; $7^4 \equiv 1 \pmod{100}$.

### Gợi ý 1
Tính $7^2$, $7^4$ rồi xét hai chữ số cuối.

### Gợi ý 2
$7^4 = 2401$. Viết $2026 = 4\cdot 506 + 2$.

## Bài 3 | 2
**Ý tưởng:** Tách $30 = 2\cdot 3\cdot 5$; tích ba số liên tiếp lo $2$ và $3$, Fermat lo $5$.

### Gợi ý 1
Phân tích $n^5 - n$ thành nhân tử. Có tích của mấy số nguyên liên tiếp?

### Gợi ý 2
$n^5 - n = (n-1)n(n+1)(n^2+1)$. Với số $5$, dùng $n^5 \equiv n \pmod 5$.

## Bài 4 | 2
**Ý tưởng:** $25 \equiv 2 \pmod{23}$ nên mọi số hạng quy về bội của $2^n$.

### Gợi ý 1
Viết $5^{2n+1} = 5\cdot 25^n$. Số $25$ đồng dư với số nào modulo $23$?

### Gợi ý 2
Tổng đồng dư với $5\cdot 2^n + 16\cdot 2^n + 2\cdot 2^n = 23\cdot 2^n$.

## Bài 5 | 2
**Ý tưởng:** $2730 = 2\cdot 3\cdot 5\cdot 7\cdot 13$ và $p - 1 \mid 12$ với mỗi ước nguyên tố $p$.

### Gợi ý 1
Phân tích $2730$ ra thừa số nguyên tố. Mỗi số $p - 1$ có quan hệ gì với $12$?

### Gợi ý 2
Với $p \nmid a$: $a^{12} = (a^{p-1})^{12/(p-1)} \equiv 1 \pmod p$.

## Bài 6 | 2
**Ý tưởng:** Fermat cho $2^p \equiv 2 \pmod p$, nên $p \mid 3$.

### Gợi ý 1
Theo Fermat nhỏ, $2^p$ đồng dư với số nào modulo $p$?

### Gợi ý 2
$2^p + 1 \equiv 3 \pmod p$, vậy $p$ là ước của $3$.

## Bài 7 | 2
**Ý tưởng:** Với $p > 3$, xét modulo $3$: $p^2 \equiv 1$, $2^p \equiv -1$.

### Gợi ý 1
Thử $p = 2$, $p = 3$. Với $p > 3$, tìm một số nguyên tố nhỏ luôn chia hết $p^2 + 2^p$.

### Gợi ý 2
$p^2 \equiv 1 \pmod 3$ (vì $3 \nmid p$) và $2^p \equiv (-1)^p = -1 \pmod 3$ (vì $p$ lẻ).

## Bài 8 | 1
**Ý tưởng:** Đưa về tích $(x - 3)(y - 2) = 7$.

### Gợi ý 1
Nhóm $x(y - 2)$ rồi thêm bớt để xuất hiện $-3(y - 2)$.

### Gợi ý 2
$(x - 3)(y - 2) = 7$. Liệt kê bốn cách viết $7$ thành tích hai số nguyên.

## Bài 9 | 2
**Ý tưởng:** Bình phương chia $8$ dư $0, 1, 4$; tổng ba số như vậy không dư $7$.

### Gợi ý 1
Tìm số dư của $2023$ khi chia cho $8$. Bình phương số nguyên chia $8$ có thể dư những số nào?

### Gợi ý 2
Liệt kê mọi tổng $a + b + c$ với $a, b, c \in \{0, 1, 4\}$, lấy modulo $8$.

## Bài 10 | 2
**Ý tưởng:** $2^n \equiv (-1)^n \pmod 3$, xét $n$ chẵn và $n$ lẻ.

### Gợi ý 1
Thay $2 \equiv -1 \pmod 3$. Biểu thức trở thành gì?

### Gợi ý 2
$n$ chẵn cần $n \equiv 2 \pmod 3$; $n$ lẻ cần $n \equiv 1 \pmod 3$. Gộp với tính chẵn lẻ theo modulo $6$.

## Bài 11 | 3
**Ý tưởng:** Coi là phương trình bậc hai theo $x$, điều kiện $\Delta \ge 0$ chặn $y$.

### Gợi ý 1
Viết phương trình dưới dạng $x^2 - (y + 1)x + (y^2 - y) = 0$.

### Gợi ý 2
$\Delta = -3y^2 + 6y + 1 \ge 0 \iff (y - 1)^2 \le \frac43$, nên $y \in \{0; 1; 2\}$.

## Bài 12 | 3
**Ý tưởng:** Kẹp $y^2$ giữa $(x^2 + x)^2$ và $(x^2 + x + 1)^2$.

### Gợi ý 1
Vế phải gần với bình phương của đa thức bậc hai nào?

### Gợi ý 2
$y^2 - (x^2 + x)^2 = x^2 + x + 3 > 0$ và $(x^2 + x + 1)^2 - y^2 = (x - 1)(x + 2)$.

### Gợi ý 3
Khi $(x - 1)(x + 2) > 0$ thì vô nghiệm. Chỉ còn thử $x \in \{-2; -1; 0; 1\}$.

## Bài 13 | 3
**Ý tưởng:** Modulo $4$ cho $x$ chẵn, rồi phân tích $3^{2k} - 1 = (3^k - 1)(3^k + 1)$.

### Gợi ý 1
Xét riêng $y = 1$. Với $y \ge 2$, xét hai vế theo modulo $4$.

### Gợi ý 2
$x = 2k$ và $(3^k - 1)(3^k + 1) = 2^y$. Hai lũy thừa của $2$ nào hơn kém nhau $2$?

## Bài 14 | 4
**Ý tưởng:** Giả sử $x \ge y$, kẹp $x^2 + 3y$ để được $3y = 2x + 1$, rồi kẹp $y^2 + 3x$ để chặn $y \le 11$.

### Gợi ý 1
Với $x \ge y$, số $x^2 + 3y$ nằm giữa hai bình phương nào?

### Gợi ý 2
$x^2 < x^2 + 3y < (x + 2)^2$, nên $x^2 + 3y = (x + 1)^2$, tức là $x = \frac{3y - 1}{2}$.

### Gợi ý 3
Thay vào: $y^2 + \frac{9y - 3}{2}$ nằm giữa $(y+2)^2$ và $(y+3)^2$ khi $y > 11$. Thử $y$ lẻ từ $1$ đến $11$.

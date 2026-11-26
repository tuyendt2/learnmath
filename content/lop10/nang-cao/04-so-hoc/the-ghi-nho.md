# Thẻ ghi nhớ Số học

## Đồng dư

### Định nghĩa $a \equiv b \pmod m$?
$m \mid a - b$, tức là $a$ và $b$ có cùng số dư khi chia cho $m$.

### Những phép toán nào giữ nguyên đồng dư?
Cộng, trừ, nhân vế theo vế và nâng lên lũy thừa: $a \equiv b \implies a^n \equiv b^n \pmod m$.

*Vì sao (nhân):* $ac - bd = a(c - d) + d(a - b)$.

### Khi nào được rút gọn $ka \equiv kb \pmod m$ thành $a \equiv b$?
Khi $\gcd(k, m) = 1$. Phản ví dụ: $2 \equiv 8 \pmod 6$ nhưng $1 \not\equiv 4 \pmod 6$.

### Mẹo tìm số dư của $a^N$ khi chia cho $m$?
Tìm $k$ nhỏ để $a^k \equiv \pm 1 \pmod m$, viết $N = qk + r$, khi đó $a^N \equiv (\pm1)^q a^r$.

### Những đồng dư "$\equiv -1$" hay dùng?
$2 \equiv -1 \pmod 3$, $3 \equiv -1 \pmod 4$, $8 \equiv -1 \pmod 9$, $10 \equiv -1 \pmod{11}$.

### Tìm hai chữ số tận cùng của một số là tìm gì?
Số dư khi chia cho $100$. Ví dụ $7^4 = 2401 \equiv 1 \pmod{100}$.

## Fermat nhỏ

### Phát biểu định lý Fermat nhỏ (hai dạng)?
$p$ nguyên tố, $p \nmid a$: $a^{p-1} \equiv 1 \pmod p$. Dạng đúng với mọi $a$: $a^p \equiv a \pmod p$.

### Ý chính của chứng minh Fermat nhỏ?
Các số $a, 2a, \dots, (p-1)a$ có số dư là một hoán vị của $1, \dots, p - 1$. Nhân lại: $a^{p-1}(p-1)! \equiv (p-1)!$, rồi rút gọn $(p-1)!$.

### Khi nào $a^{k+1} - a$ chia hết cho $p$ với mọi $a$?
Khi $(p - 1) \mid k$. Ví dụ $a^{13} - a$ chia hết cho $2, 3, 5, 7, 13$ vì $1, 2, 4, 6, 12$ đều là ước của $12$.

### Số nguyên tố $p$ nào thỏa $p \mid 2^p + 1$? Vì sao?
Chỉ $p = 3$, vì $2^p + 1 \equiv 2 + 1 = 3 \pmod p$.

## Số chính phương

### Bình phương số nguyên chia $3$, $4$ dư bao nhiêu?
Chia $3$ dư $0$ hoặc $1$. Chia $4$ dư $0$ hoặc $1$.

### Bình phương số nguyên chia $8$ dư bao nhiêu? Số lẻ thì sao?
Dư $0$, $1$ hoặc $4$. Bình phương số lẻ luôn chia $8$ dư $1$, vì $(2k+1)^2 = 4k(k+1) + 1$.

### Số nào không thể là tổng ba bình phương?
Số đồng dư $7 \pmod 8$ (ví dụ $7$, $15$, $2023$).

### Số nào không thể là tổng hai bình phương (dấu hiệu đơn giản)?
Số đồng dư $3 \pmod 4$.

### Vì sao $p^2 - 1$ chia hết cho $24$ với $p$ nguyên tố lớn hơn $3$?
$p$ lẻ nên $p^2 \equiv 1 \pmod 8$; $3 \nmid p$ nên $p^2 \equiv 1 \pmod 3$.

## Phương trình nghiệm nguyên

### $xy + ax + by = c$ đưa về tích thế nào?
$(x + b)(y + a) = c + ab$, rồi xét các ước của $c + ab$.

### Phương pháp kẹp dùng khi nào? Dựa trên điều gì?
Khi $y^2$ (hoặc $y^3$) bằng một đa thức của $x$. Nếu $A^2 < y^2 < (A + 1)^2$ thì vô nghiệm, vì giữa hai số chính phương liên tiếp không có số chính phương.

### Phương trình bậc hai hai ẩn nghiệm nguyên: cách chặn một ẩn?
Coi là phương trình bậc hai theo $x$, điều kiện $\Delta \ge 0$ cho một bất phương trình bậc hai theo $y$, chỉ có hữu hạn giá trị nguyên.

### Hai lũy thừa của $2$ hơn kém nhau $2$ là những số nào?
Chỉ có $2$ và $4$. Dùng khi phân tích $3^{2k} - 1 = (3^k - 1)(3^k + 1) = 2^y$.

### Muốn chứng minh một số là hợp số, thường làm gì?
Chỉ ra nó chia hết cho một số nguyên tố nhỏ (như $3$) và lớn hơn số đó. Nhớ xét riêng các số nguyên tố nhỏ $p = 2$, $p = 3$.

### Bẫy hay gặp khi giải phương trình nghiệm nguyên?
Quên nghiệm âm (ví dụ $y = \pm 3$), quên các cặp ước âm, quên hoán vị khi đã giả sử $x \ge y$.

# Thẻ ghi nhớ Chia hết

## Định nghĩa và tính chất

### $a$ chia hết cho $b$ nghĩa là gì?
Có số tự nhiên $q$ sao cho $a = b \cdot q$ (với $b \ne 0$). Khi đó $a$ là bội của $b$, $b$ là ước của $a$.

### Phép chia có dư được viết thế nào?
$a = b \cdot q + r$ với $0 \le r < b$. Số dư $r = 0$ khi và chỉ khi $a$ chia hết cho $b$.

### Nếu $a \,\vdots\, m$ và $b \,\vdots\, m$ thì suy ra được gì?
$a + b \,\vdots\, m$ và $a - b \,\vdots\, m$, vì $a \pm b = m(x \pm y)$.

### Nếu $a \,\vdots\, m$ còn $b$ không chia hết cho $m$ thì $a + b$ thế nào?
$a + b$ không chia hết cho $m$.

### Chia hết cho $4$ và cho $6$ thì có chia hết cho $24$ không?
Không nhất thiết, ví dụ $12$. Chỉ được nhân hai số chia khi chúng không có ước chung nào khác $1$, như $4$ và $9$ cho $36$.

## Dấu hiệu chia hết

### Dấu hiệu chia hết cho $4$ và $25$? Cho $8$ và $125$?
- $4$, $25$: số tạo bởi **hai** chữ số tận cùng chia hết cho $4$, $25$.
- $8$, $125$: số tạo bởi **ba** chữ số tận cùng chia hết cho $8$, $125$.

*Vì sao:* $100 \,\vdots\, 4$, $100 \,\vdots\, 25$; $1000 \,\vdots\, 8$, $1000 \,\vdots\, 125$.

### Vì sao dấu hiệu chia hết cho $9$ dùng tổng các chữ số?
$10 = 9 + 1$, $100 = 99 + 1$, ... nên $\overline{abcd} = 999a + 99b + 9c + (a + b + c + d)$. Một số và tổng các chữ số của nó có cùng số dư khi chia cho $9$ (và cho $3$).

### Dấu hiệu chia hết cho $11$?
Hiệu giữa tổng các chữ số ở vị trí lẻ và tổng các chữ số ở vị trí chẵn (tính từ phải sang) chia hết cho $11$.

*Vì sao:* $10 = 11 - 1$, $100 = 99 + 1$, $1000 = 1001 - 1$, ...

### $\overline{abcabc}$ luôn chia hết cho những số nào?
$7$, $11$, $13$, vì $\overline{abcabc} = \overline{abc} \cdot 1001$ và $1001 = 7 \cdot 11 \cdot 13$.

### $\overline{ab} + \overline{ba}$ và $\overline{ab} - \overline{ba}$ bằng gì?
$11(a + b)$ và $9(a - b)$.

## Phương pháp

### Tích của $2$, của $3$ số tự nhiên liên tiếp chia hết cho số nào?
$n(n + 1) \,\vdots\, 2$; $n(n + 1)(n + 2) \,\vdots\, 6$.

### Chứng minh $A(n) \,\vdots\, 3$ với mọi $n$ bằng cách xét số dư thế nào?
Xét ba trường hợp $n = 3k$, $n = 3k + 1$, $n = 3k + 2$ và chỉ ra trong mỗi trường hợp một thừa số (hoặc cả biểu thức) chia hết cho $3$.

### Tìm $n$ để $n + a$ chia hết cho $n + b$ ($a > b$) làm thế nào?
Viết $n + a = (n + b) + (a - b)$. Khi đó $n + b$ là ước của $a - b$; nhớ điều kiện $n + b \ge b$.

### Chứng minh tổng $2 + 2^2 + \dots + 2^{n}$ chia hết cho $7$ thế nào?
Nhóm từng ba số hạng: $2^k(1 + 2 + 4) = 7 \cdot 2^k$. Cần số số hạng $n$ chia hết cho $3$.

### Tích hai số tự nhiên liên tiếp có thể tận cùng bằng những chữ số nào?
Chỉ $0$, $2$, $6$.

### Bài "chia cho $2, 3, 4, 5, 6$ dư $1, 2, 3, 4, 5$" nên xét số nào?
Xét $n + 1$: nó chia hết cho cả $2, 3, 4, 5, 6$, tức là bội của $60$.

### $10^n - 1$ viết dưới dạng nào?
$\underbrace{99\dots9}_{n} = 9 \cdot \underbrace{11\dots1}_{n}$.

### Số gồm $27$ chữ số $1$ có chia hết cho $27$ không?
Có. Nó bằng $\underbrace{11\dots1}_{9} \cdot (10^{18} + 10^9 + 1)$: thừa số đầu chia hết cho $9$, thừa số sau chia hết cho $3$.

## Bẫy hay gặp

### Tìm chữ số $\overline{x\dots}$ cần nhớ điều kiện gì?
Chữ số đầu tiên khác $0$, mọi chữ số từ $0$ đến $9$.

### Có dùng dấu hiệu "hai chữ số tận cùng" cho $3$ hoặc $9$ được không?
Không. Với $3$ và $9$ phải dùng tổng **tất cả** các chữ số.

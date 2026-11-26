# Thẻ ghi nhớ Số nguyên tố, hợp số, số chính phương

## Số nguyên tố

### Số nguyên tố là gì? Số $0$ và $1$ thuộc loại nào?
Số tự nhiên lớn hơn $1$, chỉ có hai ước là $1$ và chính nó. Số $0$ và $1$ không là số nguyên tố, cũng không là hợp số.

### Số nguyên tố chẵn duy nhất là số nào?
Số $2$. Mọi số nguyên tố khác đều lẻ.

### Kiểm tra $n$ có là số nguyên tố bằng cách nào cho nhanh?
Thử chia $n$ cho các số nguyên tố $p$ với $p \cdot p \le n$. Không chia hết cho số nào thì $n$ là số nguyên tố.

### Vì sao có vô số số nguyên tố?
Nếu chỉ có $p_1, \dots, p_k$ thì $p_1 p_2 \cdots p_k + 1$ chia cho mỗi $p_i$ đều dư $1$, nhưng nó phải có ước nguyên tố. Mâu thuẫn.

### Số nguyên tố lớn hơn $3$ có dạng gì?
$3k + 1$ hoặc $3k + 2$; chia cho $6$ thì có dạng $6k + 1$ hoặc $6k + 5$.

### Tìm $p$ để $p + a$ và $p + b$ cùng là số nguyên tố: làm thế nào?
Thử $p = 2$, $p = 3$. Với $p > 3$, nếu $0, a, b$ chia cho $3$ có ba số dư khác nhau thì một trong ba số chia hết cho $3$, là hợp số.

### Khi nào **không** dùng được lập luận "một trong ba số chia hết cho 3"?
Khi $0, a, b$ chia cho $3$ không có đủ ba số dư khác nhau. Ví dụ $p, p + 2, p + 8$: với $p = 5$ cả ba đều là số nguyên tố.

### Số nguyên tố $p$ chia hết tích $ab$ thì suy ra gì?
$p$ chia hết $a$ hoặc $p$ chia hết $b$.

### $p > 3$ nguyên tố thì $p^2 - 1$ chia hết cho số nào?
Cho $24$: $(p - 1)(p + 1)$ là tích hai số chẵn liên tiếp (chia hết cho $8$) và chia hết cho $3$.

### Tổng hai số nguyên tố là số lẻ thì sao?
Một trong hai số là $2$.

## Số ước

### Số $p^a q^b r^c$ có bao nhiêu ước?
$(a + 1)(b + 1)(c + 1)$.

*Vì sao:* mỗi ước là $p^x q^y r^z$, số mũ $x$ có $a + 1$ cách chọn, tương tự với $y$, $z$.

### Số nào có số lẻ ước?
Các số chính phương. Ước ghép cặp $d \leftrightarrow \frac{n}{d}$, chỉ có $d \cdot d = n$ là không có cặp.

## Số chính phương

### Số chính phương có thể tận cùng bằng những chữ số nào?
$0, 1, 4, 5, 6, 9$. Không bao giờ tận cùng bằng $2, 3, 7, 8$.

### Số chính phương chia cho $3$, cho $4$ có thể dư bao nhiêu?
Chia cho $3$: dư $0$ hoặc $1$. Chia cho $4$: dư $0$ hoặc $1$.

### Số chính phương chia hết cho số nguyên tố $p$ thì sao?
Chia hết cho $p^2$. Ví dụ chia hết cho $3$ mà không chia hết cho $9$ thì không là số chính phương.

### Những cách chứng minh một số **không** là số chính phương?
- Chữ số tận cùng là $2, 3, 7, 8$.
- Chia $3$ dư $2$, hoặc chia $4$ dư $2$ hay $3$.
- Chia hết cho $p$ nguyên tố nhưng không chia hết cho $p^2$.
- Kẹp giữa hai số chính phương liên tiếp.

### Tìm $n$ để $n^2 + bn + c$ là số chính phương: phương pháp nào?
Kẹp biểu thức giữa $(n + k)^2$ và $(n + m)^2$, rồi xét các bình phương nằm giữa.

### Tích bốn số tự nhiên liên tiếp cộng $1$ có tính chất gì?
Là số chính phương: $n(n + 1)(n + 2)(n + 3) + 1 = \left(n(n + 3) + 1\right)^2$.

### Số dạng $\overline{abab}$ có là số chính phương không?
Không, vì $\overline{abab} = 101 \cdot \overline{ab}$ chia hết cho $101$ mà không chia hết cho $101^2$.

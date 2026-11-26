# Thẻ ghi nhớ Lũy thừa

## Quy tắc tính

### $a^m \cdot a^n = \;?$ Vì sao?
$a^{m + n}$, vì có $m$ thừa số $a$ rồi thêm $n$ thừa số $a$.

### $a^m : a^n = \;?$ Điều kiện?
$a^{m - n}$, với $a \ne 0$ và $m \ge n$.

### $(a^m)^n = \;?$
$a^{m \cdot n}$. Ví dụ $(2^3)^4 = 2^{12}$.

### $(a \cdot b)^n = \;?$
$a^n \cdot b^n$. Ví dụ $6^5 = 2^5 \cdot 3^5$.

### $a^0$ và $a^1$ bằng bao nhiêu?
$a^1 = a$; $a^0 = 1$ với $a \ne 0$.

### $2^x + 2^{x + 3}$ có bằng $2^{2x + 3}$ không?
Không. Phải đặt thừa số chung: $2^x + 2^{x + 3} = 2^x(1 + 8) = 9 \cdot 2^x$.

### $(2^3)^2$ và $2^{3^2}$ có bằng nhau không?
Không: $(2^3)^2 = 2^6 = 64$, còn $2^{3^2} = 2^9 = 512$.

## So sánh và tìm số mũ

### So sánh hai lũy thừa cùng cơ số $a > 1$ thế nào?
Số mũ lớn hơn thì lũy thừa lớn hơn.

### So sánh hai lũy thừa cùng số mũ thế nào?
Cơ số lớn hơn thì lũy thừa lớn hơn.

### Cơ số và số mũ đều khác nhau thì so sánh bằng cách nào?
- Đưa về cùng số mũ (dùng ước chung của hai số mũ): $2^{300} = 8^{100}$, $3^{200} = 9^{100}$.
- Hoặc dùng số trung gian: $31^{11} < 32^{11} = 2^{55}$.

### $A^m = A^n$ với $m \ne n$ thì $A$ có thể bằng bao nhiêu?
$A = 0$ hoặc $A = 1$; nếu $A$ là số nguyên và $m, n$ cùng chẵn thì thêm $A = -1$.

### Gặp $2^x + 624 = 5^y$, nên thử ý tưởng gì trước?
Xét chẵn lẻ: với $x \ge 1$ vế trái chẵn, vế phải lẻ. Chỉ còn $x = 0$.

## Chữ số tận cùng

### Những chữ số tận cùng nào không đổi khi nâng lên lũy thừa?
$0$, $1$, $5$, $6$ (với số mũ $\ge 1$).

### Số tận cùng $4$ hoặc $9$ nâng lên lũy thừa thì tận cùng ra sao?
- Tận cùng $4$: mũ lẻ ra $4$, mũ chẵn ra $6$.
- Tận cùng $9$: mũ lẻ ra $9$, mũ chẵn ra $1$.

### Chu kỳ chữ số tận cùng của lũy thừa cơ số $2$, $3$, $7$, $8$?
Chu kỳ $4$:
- $2$: $2, 4, 8, 6$;
- $3$: $3, 9, 7, 1$;
- $7$: $7, 9, 3, 1$;
- $8$: $8, 4, 2, 6$.

Lấy số mũ chia cho $4$ để biết vị trí trong chu kỳ (dư $0$ ứng với vị trí cuối).

### Vì sao chữ số tận cùng của $2^n, 3^n, 7^n, 8^n$ có chu kỳ 4?
Vì $2^4, 3^4, 7^4, 8^4$ đều tận cùng $1$ hoặc $6$, mà số tận cùng $1$ hoặc $6$ nâng lên lũy thừa nào vẫn giữ nguyên.

### Hai chữ số cuối nào được giữ nguyên khi nâng lên lũy thừa?
$01$, $25$, $76$. Ví dụ $2^{20}$ tận cùng $76$ nên $2^{100} = (2^{20})^5$ tận cùng $76$.

### $3^{4n + 1}$ tận cùng bằng mấy?
Bằng $3$, vì $3^{4n + 1} = 81^n \cdot 3$.

## Tổng lũy thừa

### Thu gọn $S = 1 + a + a^2 + \dots + a^n$ thế nào?
Tính $a \cdot S - S$: được $(a - 1) S = a^{n + 1} - 1$.

### $1 + 2 + 2^2 + \dots + 2^n = \;?$
$2^{n + 1} - 1$.

### Tích $2^m \cdot 5^n$ với $m > n$ viết gọn thế nào?
$2^{m - n} \cdot 10^n$: là số $2^{m - n}$ viết thêm $n$ chữ số $0$.

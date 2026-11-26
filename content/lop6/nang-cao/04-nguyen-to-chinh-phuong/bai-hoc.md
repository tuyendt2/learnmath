# Chủ đề 4. Số nguyên tố, hợp số, số chính phương

> Các bài "tìm số nguyên tố $p$ để ..." và "chứng minh số ... không là số chính phương" là dạng quen thuộc của đề HSG lớp 6. Chìa khóa thường là xét số dư khi chia cho $2$, $3$, $4$ hoặc xét chữ số tận cùng.

## I. Kiến thức cần nắm

### 1. Số nguyên tố và hợp số
- **Số nguyên tố** là số tự nhiên lớn hơn $1$, chỉ có hai ước là $1$ và chính nó. **Hợp số** là số tự nhiên lớn hơn $1$ có nhiều hơn hai ước.
- Số $0$ và số $1$ không là số nguyên tố, cũng không là hợp số.
- $2$ là số nguyên tố chẵn **duy nhất**; mọi số nguyên tố khác đều lẻ.
- Các số nguyên tố nhỏ hơn $50$: $2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47$.

**Kiểm tra một số $n > 1$ có nguyên tố không:** thử chia $n$ cho các số nguyên tố $p$ thỏa mãn $p \cdot p \le n$. Nếu không chia hết cho số nào thì $n$ là số nguyên tố.
*Vì sao:* nếu $n = a \cdot b$ với $1 < a \le b$ thì $a \cdot a \le a \cdot b = n$, nên $n$ có một ước nhỏ "không quá lớn", và ước nguyên tố của $a$ cũng là ước của $n$.

**Ví dụ.** $2023$: thử $7$, được $2023 = 7 \cdot 289 = 7 \cdot 17^2$, nên $2023$ là hợp số. Còn $97$: thử $2, 3, 5, 7$ (vì $11 \cdot 11 = 121 > 97$) đều không chia hết, nên $97$ là số nguyên tố.

**Có vô số số nguyên tố** (Euclid). *Vì sao:* giả sử chỉ có hữu hạn số nguyên tố $p_1, p_2, \dots, p_k$. Xét $N = p_1 p_2 \cdots p_k + 1$. Chia $N$ cho bất kỳ $p_i$ nào cũng dư $1$, nhưng $N > 1$ phải có ít nhất một ước nguyên tố. Mâu thuẫn.

### 2. Phân tích ra thừa số nguyên tố và số ước
Mọi hợp số đều phân tích được thành tích các thừa số nguyên tố, và cách phân tích là duy nhất (không kể thứ tự).

**Số ước:** nếu $n = p^a \cdot q^b \cdot r^c$ ($p, q, r$ là các số nguyên tố khác nhau) thì $n$ có
$$\boxed{(a + 1)(b + 1)(c + 1)}$$
ước. *Vì sao:* mỗi ước có dạng $p^x q^y r^z$ với $x$ chọn trong $0, 1, \dots, a$ ($a + 1$ cách), tương tự cho $y$, $z$.

**Ví dụ.** $72 = 2^3 \cdot 3^2$ có $(3 + 1)(2 + 1) = 12$ ước.

### 3. Tính chất hay dùng của số nguyên tố
- Nếu số nguyên tố $p$ chia hết tích $a \cdot b$ thì $p$ chia hết $a$ hoặc $p$ chia hết $b$.
- Số nguyên tố lớn hơn $3$ chia cho $3$ dư $1$ hoặc $2$, tức có dạng $3k + 1$ hoặc $3k + 2$. Chia cho $6$ thì dư $1$ hoặc $5$ (dạng $6k + 1$ hoặc $6k + 5$).
- **Xét số dư khi chia cho $3$:** với ba số $p$, $p + a$, $p + b$ mà $0$, $a$, $b$ chia cho $3$ có ba số dư khác nhau, chắc chắn một trong ba số chia hết cho $3$. Nếu số đó lớn hơn $3$ thì nó là hợp số.
- Tổng hai số nguyên tố là số lẻ thì một trong hai số là $2$.

### 4. Số chính phương
**Số chính phương** là bình phương của một số tự nhiên: $0, 1, 4, 9, 16, 25, \dots$

| Tính chất | Vì sao |
|---|---|
| Chỉ tận cùng bằng $0, 1, 4, 5, 6, 9$ | Bình phương các chữ số $0$ đến $9$ tận cùng bằng $0, 1, 4, 9, 6, 5, 6, 9, 4, 1$ |
| Chia cho $3$ chỉ dư $0$ hoặc $1$ | $(3k)^2 = 9k^2$; $(3k \pm 1)^2 = 9k^2 \pm 6k + 1$ |
| Chia cho $4$ chỉ dư $0$ hoặc $1$ | $(2k)^2 = 4k^2$; $(2k + 1)^2 = 4k^2 + 4k + 1$ |
| Chia hết cho số nguyên tố $p$ thì chia hết cho $p^2$ | Trong phân tích của $n^2$, mỗi thừa số nguyên tố có số mũ chẵn |
| Có **số lẻ** ước | Các ước ghép cặp $d \leftrightarrow \frac{n}{d}$; chỉ có cặp $d \cdot d = n$ là không ghép được |

**Kẹp giữa hai số chính phương liên tiếp:** giữa $k \cdot k$ và $(k + 1)(k + 1)$ không có số chính phương nào. Nếu chứng minh được $k \cdot k < A < (k + 1)(k + 1)$ thì $A$ không là số chính phương.

### 5. Các dạng toán và phương pháp
1. **Tìm số nguyên tố $p$ thỏa mãn điều kiện:** thử $p = 2$, $p = 3$, rồi với $p > 3$ xét $p = 3k + 1$, $p = 3k + 2$ để chỉ ra một số là hợp số.
2. **Chứng minh không là số chính phương:** chỉ ra chữ số tận cùng là $2, 3, 7, 8$; hoặc số dư khi chia cho $3$ (hoặc $4$) là $2$ (hoặc $2, 3$); hoặc chia hết cho $p$ mà không chia hết cho $p^2$; hoặc kẹp giữa hai số chính phương liên tiếp.
3. **Tìm $n$ để biểu thức là số chính phương:** kẹp biểu thức giữa hai bình phương rồi xét các trường hợp ở giữa.

**Ví dụ.** Tìm số nguyên tố $p$ để $p + 4$ và $p + 8$ là số nguyên tố. Các số $0, 4, 8$ chia cho $3$ dư $0, 1, 2$, khác nhau. Với $p = 3$ được $7$ và $11$, thỏa mãn. Với $p = 3k + 1$: $p + 8 = 3(k + 3)$ là hợp số. Với $p = 3k + 2$: $p + 4 = 3(k + 2)$ là hợp số. Với $p = 2$: $p + 4 = 6$ là hợp số. Vậy $p = 3$.

> **Bẫy:** với $p$, $p + 2$, $p + 8$ thì $0, 2, 8$ chia cho $3$ dư $0, 2, 2$, không đủ ba số dư khác nhau, nên cách trên không dùng được. Thật vậy $p = 5$ cho $5, 7, 13$ đều là số nguyên tố.

### 6. Sai lầm hay gặp
- Coi $1$ là số nguyên tố.
- Quên kiểm tra trường hợp $p = 2$ và $p = 3$ trước khi xét $p > 3$.
- Cho rằng mọi số lẻ đều là số nguyên tố (ví dụ $91 = 7 \cdot 13$, $2023 = 7 \cdot 17^2$).
- Chứng minh "không là số chính phương" chỉ bằng vài ví dụ thay vì lập luận cho mọi trường hợp.

---

## II. Bài tập vận dụng

**Bài 1.** Tìm số nguyên tố $p$ sao cho $p + 2$ và $p + 4$ cũng là số nguyên tố.

**Bài 2.** Tìm số nguyên tố $p$ sao cho $p + 10$ và $p + 14$ cũng là số nguyên tố.

**Bài 3.**
a) Số $360$ có bao nhiêu ước?
b) Tìm số tự nhiên nhỏ nhất có đúng $10$ ước.

**Bài 4.** Tổng của hai số nguyên tố có thể bằng $2025$ không? Vì sao?

**Bài 5.** Tìm số nguyên tố $p$ sao cho $p^2 + 2$ và $p^3 + 2$ đều là số nguyên tố.

**Bài 6.** Chứng minh rằng nếu $p$ là số nguyên tố lớn hơn $3$ thì $p^2 - 1$ chia hết cho $24$.

**Bài 7.** Chứng minh rằng số có dạng $\overline{abab}$ không thể là số chính phương.

**Bài 8.** Các số sau có phải là số chính phương không? Vì sao?
a) $N = 10^{100} + 7$;
b) $M = 3 + 3^2 + 3^3 + \dots + 3^{2025}$.

**Bài 9 (bài toán bóng đèn).** Một hành lang có $100$ bóng đèn đánh số từ $1$ đến $100$, lúc đầu đều tắt. Có $100$ người lần lượt đi qua. Người thứ $k$ bấm công tắc (đang tắt thì bật, đang bật thì tắt) của tất cả các bóng đèn có số thứ tự chia hết cho $k$. Sau khi cả $100$ người đi qua, có bao nhiêu bóng đèn sáng? Đó là những bóng nào?

**Bài 10.** Chứng minh rằng $A = 2024 \cdot 2025 \cdot 2026 \cdot 2027 + 1$ là một số chính phương.

**Bài 11.** Tìm số tự nhiên $n$ sao cho $n^2 + 2n + 12$ là số chính phương.

**Bài 12 (đề HSG).** Tìm các số nguyên tố $p$, $q$ thỏa mãn $p^2 - 2q^2 = 1$.

**Bài 13 (đề HSG).** Tìm ba số nguyên tố có tích bằng $5$ lần tổng của chúng.

**Bài 14 (đề HSG).** Tìm số chính phương có bốn chữ số dạng $\overline{aabb}$.

---

## III. Lời giải chi tiết

### Bài 1
- $p = 2$: $p + 2 = 4$ là hợp số. Loại.
- $p = 3$: ba số $3, 5, 7$ đều là số nguyên tố. Thỏa mãn.
- $p > 3$: $p$ không chia hết cho $3$.
  - $p = 3k + 1$: $p + 2 = 3k + 3 = 3(k + 1)$ chia hết cho $3$ và lớn hơn $3$, là hợp số.
  - $p = 3k + 2$: $p + 4 = 3k + 6 = 3(k + 2)$ là hợp số.

**Đáp số:** $p = 3$.

### Bài 2
- $p = 2$: $p + 10 = 12$ là hợp số. Loại.
- $p = 3$: $13$ và $17$ đều là số nguyên tố. Thỏa mãn.
- $p = 3k + 1$: $p + 14 = 3k + 15 = 3(k + 5)$ là hợp số.
- $p = 3k + 2$: $p + 10 = 3k + 12 = 3(k + 4)$ là hợp số.

**Đáp số:** $p = 3$.

*Nhận xét:* Các số $0$, $10$, $14$ chia cho $3$ dư $0$, $1$, $2$, đủ ba số dư khác nhau, nên trong ba số $p$, $p + 10$, $p + 14$ luôn có một số chia hết cho $3$.

### Bài 3
a) $360 = 2^3 \cdot 3^2 \cdot 5$. Số ước là $(3 + 1)(2 + 1)(1 + 1) = 24$.

b) Nếu $n = p^a q^b \cdots$ thì số ước là $(a + 1)(b + 1)\cdots = 10$. Vì $10 = 10$ hoặc $10 = 2 \cdot 5$, nên:
- $n = p^9$: nhỏ nhất là $2^9 = 512$;
- $n = p^4 \cdot q$ ($p \ne q$): nhỏ nhất khi $p = 2$, $q = 3$, được $2^4 \cdot 3 = 48$ (còn $3^4 \cdot 2 = 162$ lớn hơn).

**Đáp số:** a) $24$ ước; b) $48$.

### Bài 4
$2025$ là số lẻ. Tổng hai số là lẻ thì một số chẵn, một số lẻ. Số nguyên tố chẵn duy nhất là $2$, nên số còn lại là $2025 - 2 = 2023$.
Nhưng $2023 = 7 \cdot 17^2$ là hợp số.

**Đáp số:** không thể.

### Bài 5
- $p = 2$: $p^2 + 2 = 6$ là hợp số. Loại.
- $p = 3$: $p^2 + 2 = 11$ và $p^3 + 2 = 29$ đều là số nguyên tố. Thỏa mãn.
- $p > 3$: $p$ không chia hết cho $3$. Trong ba số liên tiếp $p - 1$, $p$, $p + 1$ có một số chia hết cho $3$, đó không phải $p$, nên $(p - 1)(p + 1) \,\vdots\, 3$. Mà $(p - 1)(p + 1) = p \cdot p + p - p - 1 = p^2 - 1$. Do đó $p^2 + 2 = (p^2 - 1) + 3$ chia hết cho $3$ và lớn hơn $3$, là hợp số.

**Đáp số:** $p = 3$.

### Bài 6
$p^2 - 1 = (p - 1)(p + 1)$ (khai triển như ở Bài 5).
- **Chia hết cho 8:** $p$ lẻ nên $p - 1$ và $p + 1$ là hai số chẵn liên tiếp. Trong hai số chẵn liên tiếp có một số chia hết cho $4$, số kia chia hết cho $2$, nên tích chia hết cho $8$.
- **Chia hết cho 3:** trong ba số liên tiếp $p - 1$, $p$, $p + 1$ có một số chia hết cho $3$, không phải $p$ (vì $p > 3$ là số nguyên tố), nên $(p - 1)(p + 1) \,\vdots\, 3$.

$8$ và $3$ không có ước chung khác $1$, nên $p^2 - 1 \,\vdots\, 24$.

*Nhận xét:* Kết quả này được dùng lại ở Bài 12. Ví dụ: $5^2 - 1 = 24$, $7^2 - 1 = 48$, $11^2 - 1 = 120$.

### Bài 7
$\overline{abab} = \overline{ab} \cdot 100 + \overline{ab} = 101 \cdot \overline{ab}$, với $10 \le \overline{ab} \le 99$.
$101$ là số nguyên tố. Nếu $\overline{abab}$ là số chính phương thì nó chia hết cho $101$, nên phải chia hết cho $101^2$, tức $\overline{ab}$ chia hết cho $101$. Điều này không thể vì $\overline{ab} < 101$.

### Bài 8
a) $10^{100}$ tận cùng bằng $0$, nên $N$ tận cùng bằng $7$. Số chính phương không tận cùng bằng $7$. Vậy $N$ không là số chính phương.

b) $M = 3 \cdot (1 + 3 + 3^2 + \dots + 3^{2024})$. Số trong ngoặc bằng $1$ cộng với các bội của $3$, nên chia cho $3$ dư $1$, không chia hết cho $3$.
Vậy $M$ chia hết cho $3$ nhưng không chia hết cho $9$. Số chính phương chia hết cho số nguyên tố $3$ thì phải chia hết cho $9$, nên $M$ không là số chính phương.

### Bài 9
Bóng đèn số $n$ bị bấm bởi người thứ $k$ khi $k$ là ước của $n$. Vậy số lần bấm bằng số ước của $n$. Bóng sáng ở cuối khi bị bấm **số lẻ** lần, tức $n$ có số lẻ ước.
Các ước của $n$ ghép thành cặp $\left(d; \frac{n}{d}\right)$. Mỗi cặp có hai ước khác nhau, trừ khi $d = \frac{n}{d}$, tức $d \cdot d = n$. Do đó $n$ có số lẻ ước khi và chỉ khi $n$ là số chính phương.
Các số chính phương từ $1$ đến $100$ là $1, 4, 9, 16, 25, 36, 49, 64, 81, 100$.

**Đáp số:** $10$ bóng sáng, là các bóng số $1, 4, 9, 16, 25, 36, 49, 64, 81, 100$.

### Bài 10
Ghép số đầu với số cuối và hai số giữa với nhau. Đặt $x = 2024 \cdot 2027 = 4\,102\,648$. Khi đó $2025 \cdot 2026 = 4\,102\,650 = x + 2$. Ta có
$$A = x(x + 2) + 1 = x \cdot x + 2x + 1.$$
Mặt khác $(x + 1)(x + 1) = x \cdot x + x + x + 1 = x \cdot x + 2x + 1$. Vậy
$$A = (x + 1)^2 = 4\,102\,649^2.$$

*Nhận xét:* Tổng quát, $n(n + 1)(n + 2)(n + 3) + 1 = \left(n(n + 3) + 1\right)^2$: tích bốn số tự nhiên liên tiếp cộng $1$ luôn là số chính phương.

### Bài 11
Đặt $A = n^2 + 2n + 12$. Dùng tính chất phân phối:
- $(n + 1)^2 = n^2 + 2n + 1 < A$;
- $(n + 4)^2 = n^2 + 8n + 16 > A$ (vì $8n + 16 > 2n + 12$).

$A$ nằm giữa $(n + 1)^2$ và $(n + 4)^2$, nên nếu $A$ là số chính phương thì $A = (n + 2)^2$ hoặc $A = (n + 3)^2$.
- $A = (n + 2)^2 = n^2 + 4n + 4$: $2n + 12 = 4n + 4$, suy ra $2n = 8$, $n = 4$.
- $A = (n + 3)^2 = n^2 + 6n + 9$: $2n + 12 = 6n + 9$, suy ra $4n = 3$, không có $n$ tự nhiên.

Thử lại: $n = 4$ cho $A = 16 + 8 + 12 = 36 = 6^2$.

**Đáp số:** $n = 4$.

*Nhận xét:* Phương pháp "kẹp" biến một bài có vô số khả năng thành vài trường hợp cụ thể.

### Bài 12
$p^2 = 2q^2 + 1$ là số lẻ, nên $p$ lẻ. Theo lập luận ở Bài 6, $(p - 1)(p + 1)$ là tích hai số chẵn liên tiếp nên chia hết cho $8$, tức $p^2 - 1 = 2q^2$ chia hết cho $8$.
Suy ra $q^2$ chia hết cho $4$, nên $q$ chẵn (nếu $q$ lẻ thì $q^2$ lẻ). Vì $q$ là số nguyên tố nên $q = 2$.
Khi đó $p^2 = 2 \cdot 4 + 1 = 9$, nên $p = 3$, là số nguyên tố.

**Đáp số:** $p = 3$, $q = 2$.

### Bài 13
Gọi ba số nguyên tố là $a, b, c$ với $abc = 5(a + b + c)$. Tích $abc$ chia hết cho số nguyên tố $5$, nên một trong ba số bằng $5$; giả sử $c = 5$.
Khi đó $5ab = 5(a + b + 5)$, tức $ab = a + b + 5$. Trừ $a + b - 1$ ở hai vế:
$$ab - a - b + 1 = 6, \quad\text{tức là}\quad (a - 1)(b - 1) = 6.$$
(Kiểm tra: $(a - 1)(b - 1) = ab - a - b + 1$.) Giả sử $a \le b$:
- $a - 1 = 1$, $b - 1 = 6$: $a = 2$, $b = 7$. Đều là số nguyên tố.
- $a - 1 = 2$, $b - 1 = 3$: $a = 3$, $b = 4$. Loại vì $4$ là hợp số.

Thử lại: $2 \cdot 5 \cdot 7 = 70 = 5 \cdot (2 + 5 + 7)$.

**Đáp số:** $2$, $5$, $7$.

### Bài 14
$\overline{aabb} = 1100a + 11b = 11(100a + b)$, với $1 \le a \le 9$, $0 \le b \le 9$.
Số chính phương chia hết cho số nguyên tố $11$ thì chia hết cho $121$, nên $100a + b \,\vdots\, 11$.
$100a + b = 99a + (a + b)$, nên $a + b \,\vdots\, 11$. Vì $1 \le a + b \le 18$ nên $a + b = 11$.
Khi đó $100a + b = 99a + 11 = 11(9a + 1)$ và $\overline{aabb} = 121 \cdot (9a + 1)$. Vậy $9a + 1$ phải là số chính phương.
Với $a = 1, 2, \dots, 9$: $9a + 1$ lần lượt là $10, 19, 28, 37, 46, 55, 64, 73, 82$. Chỉ có $64 = 8^2$, ứng với $a = 7$, $b = 4$.

**Đáp số:** $7744 = 88^2$.

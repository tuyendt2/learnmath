# Chủ đề 6. Số học

> Phần số học trong đề học sinh giỏi lớp 7 gồm: chữ số tận cùng của lũy thừa, chứng minh chia hết, số nguyên tố, số chính phương, phân số tối giản. Công cụ chính là **xét số dư** (chia cho 2, 3, 4, 5, 10…) và **phân tích thành tích**.

## I. Kiến thức cần nắm

### 1. Chữ số tận cùng của lũy thừa

Chữ số tận cùng của $a^n$ lặp lại theo chu kỳ (nhiều nhất 4):
| Tận cùng của $a$ | Chu kỳ tận cùng của $a^1, a^2, a^3, a^4$ |
|---|---|
| 0, 1, 5, 6 | không đổi |
| 2 | 2, 4, 8, 6 |
| 3 | 3, 9, 7, 1 |
| 4 | 4, 6 |
| 7 | 7, 9, 3, 1 |
| 8 | 8, 4, 2, 6 |
| 9 | 9, 1 |

Muốn tìm tận cùng của $a^n$: lấy số dư của $n$ khi chia cho 4 (nếu dư 0 thì xem như số mũ 4).

### 2. Chứng minh chia hết

- **Tích các số liên tiếp:** tích $k$ số nguyên liên tiếp chia hết cho $k$. Ví dụ $n^3 - n = (n - 1)n(n + 1)$ chia hết cho 6.
- **Nhóm số hạng:** $1 + a + a^2 + \dots$ nhóm thành các nhóm có tổng chia hết.
- **Xét số dư:** chia trường hợp theo số dư của $n$.

### 3. Số nguyên tố

- 2 là số nguyên tố chẵn duy nhất. Mọi số nguyên tố lớn hơn 3 có dạng $6k \pm 1$.
- Bài "tìm $p$ để $p + a$, $p + b$ đều nguyên tố": xét số dư của $p$ khi chia cho 3 (hoặc 2).

### 4. Số chính phương

- Số chính phương chia cho 3 dư 0 hoặc 1; chia cho 4 dư 0 hoặc 1; tận cùng là 0, 1, 4, 5, 6, 9.
- Nằm giữa hai số chính phương liên tiếp thì không là số chính phương.
- Biến đổi $A = m^2$ thành tích: $m^2 - (n + 1)^2 = c$ suy ra $(m - n - 1)(m + n + 1) = c$.

### 5. Phân số tối giản

Gọi $d$ là ước chung của tử và mẫu, tìm tổ hợp khử biến để $d$ là ước của 1.

### 6. Sai lầm hay gặp

- Chu kỳ tận cùng: quên trường hợp số dư bằng 0 ứng với vị trí thứ 4.
- Xét số nguyên tố mà quên trường hợp $p = 2$ hoặc $p = 3$.
- Chỉ thử vài giá trị rồi kết luận "luôn chia hết" (phải chứng minh tổng quát).

## II. Bài tập vận dụng

**Bài 1.** Tìm chữ số tận cùng của $3^{2025}$.

**Bài 2.** Chứng minh $2^{2025} + 3^{2025}$ chia hết cho 5.

**Bài 3.** Chứng minh $n^3 - n$ chia hết cho 6 với mọi số nguyên $n$.

**Bài 4.** Tìm số nguyên tố $p$ sao cho $p + 10$ và $p + 20$ đều là số nguyên tố.

**Bài 5.** Chứng minh $A = 1 + 5 + 5^2 + 5^3 + \dots + 5^{99}$ chia hết cho 6.

**Bài 6.** a) Chứng minh số chính phương chia cho 3 chỉ có thể dư 0 hoặc 1. b) Suy ra số có dạng $3k + 2$ không phải số chính phương.

**Bài 7.** Tìm số tự nhiên $n$ để $n^2 + 2n + 12$ là số chính phương.

**Bài 8.** Chứng minh phân số $\dfrac{21n + 4}{14n + 3}$ tối giản với mọi số tự nhiên $n$.

**Bài 9.** Tìm số tự nhiên nhỏ nhất chia cho 3 dư 1, chia cho 4 dư 2, chia cho 5 dư 3, chia cho 6 dư 4.

**Bài 10.** Tìm các số có hai chữ số (chữ số hàng đơn vị khác 0) chia hết cho tích các chữ số của nó.

**Bài 11.** Chứng minh $10^n + 8$ chia hết cho 9 với mọi số tự nhiên $n \ge 1$.

**Bài 12.** Chứng minh rằng không có số tự nhiên $n$ nào để $n^2 + n + 2$ chia hết cho 3.

**Bài 13 (khó).** Tìm các số nguyên tố $p, q$ thỏa mãn $p^2 = 2q^2 + 1$.

**Bài 14 (khó).** Chứng minh tổng $1 + 2 + 3 + \dots + n$ không thể có chữ số tận cùng là 2 (với mọi số tự nhiên $n \ge 1$).

---

## III. Lời giải chi tiết

### Bài 1
Chu kỳ tận cùng của $3^n$: 3, 9, 7, 1. $2025 = 4 \cdot 506 + 1$ nên $3^{2025}$ tận cùng là 3.

### Bài 2
$2^{2025}$ tận cùng là 2 (chu kỳ 2, 4, 8, 6; số dư 1). $3^{2025}$ tận cùng là 3. Tổng tận cùng là 5, nên chia hết cho 5.

### Bài 3
$n^3 - n = (n - 1)n(n + 1)$ là tích ba số nguyên liên tiếp: có một số chẵn và một số chia hết cho 3. Vậy tích chia hết cho 6.

### Bài 4
- $p = 2$: $p + 10 = 12$ hợp số.
- $p = 3$: 13 và 23 đều nguyên tố. Thỏa mãn.
- $p > 3$: $p = 3k + 1$ thì $p + 20 = 3(k + 7)$ hợp số; $p = 3k + 2$ thì $p + 10 = 3(k + 4)$ hợp số.

**Đáp số:** $p = 3$.

### Bài 5
$A$ có 100 số hạng, nhóm từng cặp: $A = (1 + 5) + 5^2(1 + 5) + \dots + 5^{98}(1 + 5) = 6(1 + 5^2 + \dots + 5^{98})$ chia hết cho 6.

### Bài 6
a) Mọi số nguyên $n$ có dạng $3k$, $3k + 1$ hoặc $3k + 2$:
- $n = 3k$: $n^2 = 9k^2$ chia hết cho 3.
- $n = 3k \pm 1$: $n^2 = 9k^2 \pm 6k + 1$ chia 3 dư 1.

b) Số dạng $3k + 2$ chia 3 dư 2, nên không phải số chính phương.

### Bài 7
$n^2 + 2n + 12 = (n + 1)^2 + 11 = m^2$ ($m \in \mathbb{N}$), nên $(m - n - 1)(m + n + 1) = 11$. Vì $m + n + 1 > 0$ và lớn hơn thừa số kia: $m - n - 1 = 1$, $m + n + 1 = 11$. Suy ra $m = 6$, $n = 4$.

**Đáp số:** $n = 4$ (khi đó $16 + 8 + 12 = 36 = 6^2$).

### Bài 8
Gọi $d$ là ước chung. $d$ là ước của $3(14n + 3) - 2(21n + 4) = 9 - 8 = 1$. Vậy $d = 1$.

### Bài 9
Số cần tìm thêm 2 thì chia hết cho 3, 4, 5, 6, tức là chia hết cho BCNN = 60. Số nhỏ nhất: $60 - 2 = 58$.

### Bài 10
Gọi số đó là $\overline{ab}$ ($a, b \ne 0$), cần $10a + b$ chia hết cho $ab$. Khi đó $10a + b$ chia hết cho $a$, nên $b$ chia hết cho $a$; đặt $b = ka$. Lại cần $10a + ka$ chia hết cho $a \cdot ka$, tức $10 + k$ chia hết cho $ka$.
Xét $k = 1, 2, \dots$ với $b = ka \le 9$:
- $k = 1$: $11$ chia hết cho $a$: $a = 1$, số 11.
- $k = 2$: $12$ chia hết cho $2a$: $a \in \{1; 2; 3\}$, số 12, 24, 36.
- $k = 3$: $13$ chia hết cho $3a$: không có.
- $k = 4$: $14$ chia hết cho $4a$: không có. $k = 5$: $15$ chia hết cho $5a$: $a = 1$, số 15.
- $k = 6, 7, 8, 9$ (chỉ $a = 1$): $16, 17, 18, 19$ chia hết cho $k$: không có.

**Đáp số:** 11; 12; 15; 24; 36.

### Bài 11
$10^n + 8 = 1\underbrace{00\dots0}_{n - 1}8$ có tổng các chữ số $1 + 8 = 9$, nên chia hết cho 9.

### Bài 12
Xét số dư của $n$ khi chia cho 3:
- $n = 3k$: $n^2 + n + 2$ chia 3 dư 2.
- $n = 3k + 1$: $n^2 + n + 2$ chia 3 dư $1 + 1 + 2 = 4$, tức dư 1.
- $n = 3k + 2$: dư $4 + 2 + 2 = 8$, tức dư 2.

Không trường hợp nào chia hết cho 3.

### Bài 13
$p^2 = 2q^2 + 1$ lẻ nên $p$ lẻ. $p^2 - 1 = (p - 1)(p + 1)$ là tích hai số chẵn liên tiếp, chia hết cho 8. Do đó $2q^2$ chia hết cho 8, $q^2$ chia hết cho 4, $q$ chẵn. $q$ nguyên tố nên $q = 2$, suy ra $p^2 = 9$, $p = 3$.

**Đáp số:** $p = 3$, $q = 2$.

### Bài 14
$1 + 2 + \dots + n = \dfrac{n(n + 1)}{2}$. Tích $n(n + 1)$ của hai số liên tiếp có chữ số tận cùng chỉ có thể là 0, 2 hoặc 6 (thử các chữ số tận cùng $0 \cdot 1, 1 \cdot 2, \dots, 9 \cdot 0$).
Nếu tổng có tận cùng là 2 thì $n(n + 1) = 2 \cdot (\text{tổng})$ có tận cùng là 4 (vì $2 \cdot \overline{\dots 2} = \overline{\dots 4}$): vô lý. Vậy tổng không thể tận cùng là 2.

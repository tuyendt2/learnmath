# Chủ đề 6. Số nguyên nâng cao

> Bài số nguyên trong đề học sinh giỏi lớp 6 thường là: tính tổng có quy luật dấu, tìm $x$ (kể cả từ một tích bằng 0 hoặc một tích âm), tìm số nguyên để một biểu thức chia hết, và tìm cặp số nguyên thỏa mãn một đẳng thức dạng tích. Chủ đề này hệ thống các kỹ thuật đó.

## I. Kiến thức cần nắm

### 1. Quy tắc dấu và tính chất

- Tích của hai số cùng dấu là số dương, khác dấu là số âm. Tích có **số thừa số âm chẵn** thì dương, **lẻ** thì âm.
- Phép cộng, nhân có tính giao hoán, kết hợp; phép nhân phân phối với phép cộng: $a(b + c) = ab + ac$.
- **Quy tắc chuyển vế:** chuyển một số hạng từ vế này sang vế kia thì đổi dấu số hạng đó.
- **Quy tắc dấu ngoặc:** bỏ ngoặc có dấu "$-$" đằng trước thì đổi dấu mọi số hạng trong ngoặc.

### 2. Tính tổng có quy luật dấu

Nhóm các số hạng thành từng cặp (hoặc từng nhóm) có tổng bằng nhau. Chú ý đếm số nhóm.

**Ví dụ.** $1 - 2 + 3 - 4 + \dots + 9 - 10 = (1 - 2) + (3 - 4) + \dots + (9 - 10) = 5 \cdot (-1) = -5$.

### 3. Tìm $x$ từ một tích

- $A \cdot B = 0$ khi $A = 0$ hoặc $B = 0$.
- $A \cdot B < 0$ khi $A$ và $B$ **trái dấu**. $A \cdot B > 0$ khi $A, B$ cùng dấu.

### 4. Chia hết trong tập số nguyên

Để tìm số nguyên $n$ sao cho $(an + b) \;\vdots\; (cn + d)$, tách $an + b = k(cn + d) + r$ với $r$ là hằng số; khi đó cần $r \;\vdots\; (cn + d)$, tức là $cn + d$ là **ước của $r$** (kể cả ước âm).

**Ví dụ.** $n + 4 = (n + 1) + 3$. Vậy $(n + 4) \;\vdots\; (n + 1)$ khi $n + 1 \in \text{Ư}(3) = \{\pm 1; \pm 3\}$.

### 5. Phương trình nghiệm nguyên dạng tích

Đưa về dạng $(\dots) \cdot (\dots) = $ hằng số, rồi xét các cặp ước. Mẹo **thêm bớt** để phân tích:
$$xy + x + y = (x + 1)(y + 1) - 1.$$

### 6. Tính chẵn lẻ

$a - b$ và $a + b$ luôn **cùng tính chẵn lẻ** (vì tổng của chúng là $2a$, số chẵn). Nếu tích của chúng chẵn thì cả hai đều chẵn, nên tích chia hết cho 4.

### 7. Sai lầm hay gặp

- Chỉ lấy ước dương khi tìm $n$ nguyên.
- Đếm sai số cặp khi nhóm tổng.
- $A \cdot B < 0$ mà chỉ xét một trường hợp ($A < 0 < B$), quên trường hợp ngược lại (có thể vô lý, nhưng phải kiểm tra).

## II. Bài tập vận dụng

**Bài 1.** Tính $S = 1 - 2 + 3 - 4 + \dots + 99 - 100$.

**Bài 2.** Tính $T = -1 + 3 - 5 + 7 - 9 + \dots - 97 + 99$.

**Bài 3.** Tìm số nguyên $x$ biết $(x - 3)(x + 5) = 0$.

**Bài 4.** Tìm số nguyên $x$ biết $2x - 15 = -3x + 10$.

**Bài 5.** Tìm các số nguyên $x$ sao cho $(x - 2)(x + 3) < 0$.

**Bài 6.** Tìm số nguyên $n$ để $n + 4$ chia hết cho $n + 1$.

**Bài 7.** Tìm số nguyên $n$ để $2n + 5$ chia hết cho $n - 1$.

**Bài 8.** Tìm các cặp số nguyên $(x; y)$ sao cho $(x - 1)(y + 2) = 3$.

**Bài 9.** Tìm các cặp số nguyên $(x; y)$ sao cho $xy + x + y = 4$.

**Bài 10.** Tính nhanh: $(-125) \cdot (-8) \cdot (-25) \cdot 4 \cdot (-1)$.

**Bài 11.** Tính tổng tất cả các số nguyên $x$ thỏa mãn $-20 < x \le 21$.

**Bài 12.** Cho hai số nguyên $a, b$ có $a + b = -5$ và $a - b = 11$. Tìm $a$, $b$ và tính $a \cdot b$.

**Bài 13 (khó).** Có tồn tại hai số nguyên $a, b$ sao cho $(a - b)(a + b) = 2026$ không? Vì sao?

---

## III. Lời giải chi tiết

### Bài 1
Nhóm từng cặp: $(1 - 2) + (3 - 4) + \dots + (99 - 100)$. Có 50 cặp, mỗi cặp bằng $-1$.
$S = 50 \cdot (-1) = -50$.

### Bài 2
Dãy có 50 số hạng (các số lẻ từ 1 đến 99). Nhóm từng cặp: $(-1 + 3) + (-5 + 7) + \dots + (-97 + 99)$, có 25 cặp, mỗi cặp bằng 2.
$T = 25 \cdot 2 = 50$.

### Bài 3
$x - 3 = 0$ hoặc $x + 5 = 0$, nên $x = 3$ hoặc $x = -5$.

### Bài 4
Chuyển vế: $2x + 3x = 10 + 15$, $5x = 25$, $x = 5$.

### Bài 5
Tích âm khi hai thừa số trái dấu. Vì $x - 2 < x + 3$ nên chỉ có thể $x - 2 < 0 < x + 3$, tức là $-3 < x < 2$.

**Đáp số:** $x \in \{-2; -1; 0; 1\}$.

### Bài 6
$n + 4 = (n + 1) + 3$. Cần $n + 1 \in \{1; -1; 3; -3\}$.

**Đáp số:** $n \in \{0; -2; 2; -4\}$.

### Bài 7
$2n + 5 = 2(n - 1) + 7$. Cần $n - 1 \in \{1; -1; 7; -7\}$.

**Đáp số:** $n \in \{2; 0; 8; -6\}$.

### Bài 8
$3 = 1 \cdot 3 = 3 \cdot 1 = (-1) \cdot (-3) = (-3) \cdot (-1)$.

| $x - 1$ | 1 | 3 | $-1$ | $-3$ |
|---|---|---|---|---|
| $y + 2$ | 3 | 1 | $-3$ | $-1$ |
| $x$ | 2 | 4 | 0 | $-2$ |
| $y$ | 1 | $-1$ | $-5$ | $-3$ |

**Đáp số:** $(2; 1)$, $(4; -1)$, $(0; -5)$, $(-2; -3)$.

### Bài 9
Thêm 1 vào hai vế: $xy + x + y + 1 = 5$, tức là $(x + 1)(y + 1) = 5$.
$(x + 1; y + 1) \in \{(1; 5), (5; 1), (-1; -5), (-5; -1)\}$.

**Đáp số:** $(0; 4)$, $(4; 0)$, $(-2; -6)$, $(-6; -2)$.

### Bài 10
$[(-125) \cdot (-8)] \cdot [(-25) \cdot 4] \cdot (-1) = 1\,000 \cdot (-100) \cdot (-1) = 100\,000$.

### Bài 11
Các số nguyên $x$: $-19, -18, \dots, 20, 21$. Các số từ $-19$ đến $19$ có tổng bằng 0 (từng cặp đối nhau).
Tổng: $20 + 21 = 41$.

### Bài 12
$a = (-5 + 11) : 2 = 3$; $b = -5 - 3 = -8$. $a \cdot b = -24$.

### Bài 13
$(a - b) + (a + b) = 2a$ là số chẵn, nên $a - b$ và $a + b$ cùng chẵn hoặc cùng lẻ.
- Nếu cùng lẻ thì tích lẻ, mà 2026 chẵn: không được.
- Nếu cùng chẵn thì tích chia hết cho 4, mà $2026 = 4 \cdot 506 + 2$ không chia hết cho 4: không được.

Vậy **không tồn tại** hai số nguyên $a, b$ như vậy.

*Nhận xét:* xét tính chẵn lẻ (hay số dư khi chia cho 4) là cách nhanh để chứng minh một đẳng thức không có nghiệm nguyên.

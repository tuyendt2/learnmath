# Chủ đề 7. Dấu của tam thức bậc hai, bất phương trình bậc hai, phương trình quy về bậc hai

> Định lý về dấu của tam thức bậc hai là công cụ để giải bất phương trình bậc hai, tìm tập xác định, tìm điều kiện của tham số để một bất phương trình luôn đúng. Phần cuối giải hai dạng phương trình chứa căn quy về phương trình bậc hai.

## I. Kiến thức cần nắm

### 1. Định lý về dấu của tam thức bậc hai

$f(x) = ax^2 + bx + c$ ($a \ne 0$), $\Delta = b^2 - 4ac$:
- $\Delta < 0$: $f(x)$ **cùng dấu với $a$** với mọi $x$.
- $\Delta = 0$: $f(x)$ cùng dấu với $a$ với mọi $x \ne -\dfrac{b}{2a}$.
- $\Delta > 0$, hai nghiệm $x_1 < x_2$: $f(x)$ **trái dấu với $a$** trong khoảng $(x_1; x_2)$, **cùng dấu với $a$** bên ngoài đoạn $[x_1; x_2]$ ("trong trái, ngoài cùng").

### 2. Bất phương trình bậc hai

Tìm nghiệm của tam thức, lập bảng xét dấu, chọn các khoảng phù hợp với dấu của bất phương trình.

### 3. Tam thức luôn dương, luôn âm

- $ax^2 + bx + c > 0$ với mọi $x$ $\iff a > 0$ và $\Delta < 0$.
- $ax^2 + bx + c < 0$ với mọi $x$ $\iff a < 0$ và $\Delta < 0$.
- Nếu hệ số $a$ chứa tham số, phải xét riêng trường hợp $a = 0$.

### 4. Phương trình quy về bậc hai

- $\sqrt{f(x)} = \sqrt{g(x)}$: bình phương được $f(x) = g(x)$, rồi **thử lại** (hoặc kiểm tra $g(x) \ge 0$).
- $\sqrt{f(x)} = g(x)$: điều kiện $g(x) \ge 0$; bình phương được $f(x) = g(x)^2$.

### 5. Sai lầm hay gặp

- Nhớ ngược quy tắc "trong trái, ngoài cùng".
- Bài tham số có $a$ chứa $m$ mà quên trường hợp $a = 0$.
- Giải phương trình chứa căn mà không thử lại, nhận cả nghiệm ngoại lai.

## II. Bài tập vận dụng

**Bài 1.** Xét dấu tam thức $f(x) = x^2 - 5x + 6$.

**Bài 2.** Xét dấu tam thức $g(x) = -2x^2 + 3x + 5$.

**Bài 3.** Giải bất phương trình $x^2 - 2x - 8 \le 0$.

**Bài 4.** Giải bất phương trình $2x^2 - 3x + 4 > 0$.

**Bài 5.** Giải bất phương trình $-x^2 + 6x - 9 \ge 0$.

**Bài 6.** Tìm $m$ để $x^2 - 2mx + 4 > 0$ với mọi $x \in \mathbb{R}$.

**Bài 7.** Tìm $m$ để phương trình $x^2 - 2(m - 1)x + m + 5 = 0$ có hai nghiệm phân biệt.

**Bài 8.** Giải phương trình $\sqrt{2x^2 - 4x + 1} = \sqrt{x^2 - x + 5}$.

**Bài 9.** Giải phương trình $\sqrt{x + 3} = x - 3$.

**Bài 10 (thực tế).** Lợi nhuận (triệu đồng) khi một xưởng sản xuất $x$ sản phẩm là $P(x) = -x^2 + 30x - 200$. Xưởng có lãi khi sản xuất khoảng bao nhiêu sản phẩm?

**Bài 11.** Tìm tập xác định của hàm số $y = \sqrt{-x^2 + 4x + 5}$.

**Bài 12 (vận dụng cao).** Tìm $m$ để bất phương trình $mx^2 - 2mx + 4 > 0$ nghiệm đúng với mọi $x \in \mathbb{R}$.

**Bài 13 (vận dụng cao).** Giải phương trình $\sqrt{2x - 1} = x - 2$.

**Bài 14 (vận dụng cao).** Giải bất phương trình $\dfrac{x^2 - 4x + 3}{x - 2} \ge 0$.

---

## III. Lời giải chi tiết

### Bài 1
Nghiệm 2 và 3, $a = 1 > 0$: $f(x) > 0$ khi $x < 2$ hoặc $x > 3$; $f(x) < 0$ khi $2 < x < 3$; $f(x) = 0$ tại $x = 2, 3$.

### Bài 2
Nghiệm $-1$ và $\dfrac{5}{2}$, $a = -2 < 0$: $g(x) > 0$ khi $-1 < x < \dfrac{5}{2}$; $g(x) < 0$ khi $x < -1$ hoặc $x > \dfrac{5}{2}$.

### Bài 3
Nghiệm $-2$ và 4, $a > 0$: $f(x) \le 0$ trong đoạn giữa. $S = [-2; 4]$.

### Bài 4
$\Delta = 9 - 32 < 0$, $a > 0$: tam thức luôn dương. $S = \mathbb{R}$.

### Bài 5
$-x^2 + 6x - 9 = -(x - 3)^2 \le 0$ với mọi $x$; bằng 0 khi $x = 3$. $S = \{3\}$.

### Bài 6
$a = 1 > 0$, cần $\Delta' = m^2 - 4 < 0$: $-2 < m < 2$.

### Bài 7
$\Delta' = (m - 1)^2 - (m + 5) = m^2 - 3m - 4 > 0 \iff m < -1$ hoặc $m > 4$.

### Bài 8
Bình phương: $2x^2 - 4x + 1 = x^2 - x + 5 \iff x^2 - 3x - 4 = 0 \iff x = -1$ hoặc $x = 4$. Vế phải $x^2 - x + 5 > 0$ với mọi $x$ nên cả hai đều thỏa.

**Đáp số:** $x \in \{-1; 4\}$.

### Bài 9
Điều kiện $x \ge 3$. Bình phương: $x + 3 = x^2 - 6x + 9 \iff x^2 - 7x + 6 = 0 \iff x = 1$ (loại) hoặc $x = 6$.

**Đáp số:** $x = 6$.

### Bài 10
$P(x) > 0 \iff x^2 - 30x + 200 < 0 \iff 10 < x < 20$. Xưởng có lãi khi sản xuất từ 11 đến 19 sản phẩm.

### Bài 11
$-x^2 + 4x + 5 \ge 0 \iff -1 \le x \le 5$. $D = [-1; 5]$.

### Bài 12
- $m = 0$: $4 > 0$ đúng với mọi $x$. Nhận.
- $m \ne 0$: cần $m > 0$ và $\Delta' = m^2 - 4m < 0$, tức $0 < m < 4$.

**Đáp số:** $0 \le m < 4$.

### Bài 13
Điều kiện $x \ge 2$. $2x - 1 = x^2 - 4x + 4 \iff x^2 - 6x + 5 = 0 \iff x = 1$ (loại) hoặc $x = 5$.

**Đáp số:** $x = 5$.

### Bài 14
Tử có nghiệm 1, 3; mẫu bằng 0 tại $x = 2$. Bảng xét dấu: biểu thức âm khi $x < 1$, dương khi $1 < x < 2$, âm khi $2 < x < 3$, dương khi $x > 3$.

**Đáp số:** $S = [1; 2) \cup [3; +\infty)$.

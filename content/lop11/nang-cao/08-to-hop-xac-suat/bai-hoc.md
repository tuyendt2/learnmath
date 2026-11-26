# Chủ đề 8. Tổ hợp và xác suất nâng cao

> Chủ đề này luyện các bài đếm và xác suất có tính toán phức tạp trong đề học sinh giỏi lớp 11: số hạng tổng quát của nhị thức Newton, tổng tổ hợp, hoán vị lặp, hoán vị vòng, đếm bằng bù trừ, xác suất của phép thử lặp (công thức Bernoulli) và đếm trên đa giác đều.

## I. Kiến thức cần nắm

### 1. Nhị thức Newton

$(a + b)^n = \sum_{k = 0}^{n} C_n^k a^{n - k}b^k$; số hạng tổng quát $T_{k + 1} = C_n^k a^{n - k}b^k$. Thay giá trị đặc biệt ($x = 1$, $x = -1$, $x = 2$…) vào khai triển để tính tổng tổ hợp.

### 2. Hoán vị lặp, hoán vị vòng

- Hoán vị lặp: $n$ phần tử trong đó có $n_1$ phần tử loại 1, …: $\dfrac{n!}{n_1!n_2!\cdots}$ cách xếp.
- Xếp $n$ người quanh bàn tròn (không phân biệt vị trí xoay): $(n - 1)!$ cách.

### 3. Bù trừ

Số toàn ánh từ tập $m$ phần tử lên tập $k$ phần tử (chia $m$ đồ vật khác nhau cho $k$ người, ai cũng có): $\sum_{i = 0}^{k}(-1)^iC_k^i(k - i)^m$.

### 4. Phép thử lặp (Bernoulli)

Thực hiện $n$ lần độc lập một phép thử có xác suất thành công $p$: xác suất có đúng $k$ lần thành công là $C_n^kp^k(1 - p)^{n - k}$.

### 5. Đa giác đều

Với đa giác đều $2m$ đỉnh nội tiếp đường tròn: tam giác vuông có cạnh huyền là một đường kính, số đường kính là $m$. Tam giác nhọn khi tâm nằm trong tam giác.

### 6. Đẳng thức Vandermonde

$\sum_{k = 0}^{n}\left(C_n^k\right)^2 = C_{2n}^n$ (đếm cách chọn $n$ người từ $n$ nam và $n$ nữ).

## II. Bài tập vận dụng

**Bài 1.** Tìm hệ số của $x^4$ trong khai triển $\left(x^2 - \dfrac{2}{x}\right)^8$.

**Bài 2.** Tìm số hạng không chứa $x$ trong khai triển $\left(x + \dfrac{1}{x^2}\right)^9$.

**Bài 3.** Tìm $n$ biết $C_n^0 + 2C_n^1 + 4C_n^2 + \dots + 2^nC_n^n = 243$.

**Bài 4.** Tính $S = C_{2n}^0 + C_{2n}^2 + C_{2n}^4 + \dots + C_{2n}^{2n}$.

**Bài 5.** Có bao nhiêu cách chia 8 món quà khác nhau cho 3 bạn sao cho bạn nào cũng nhận ít nhất một món?

**Bài 6.** Có bao nhiêu cách sắp xếp các chữ cái của từ BANANA?

**Bài 7.** Chọn ngẫu nhiên 3 số khác nhau từ $\{1; 2; \dots; 20\}$. Tính xác suất tổng ba số chia hết cho 3.

**Bài 8.** Tính xác suất trong 5 người có ít nhất hai người cùng tháng sinh (coi mỗi tháng đồng khả năng; làm tròn đến hàng phần nghìn).

**Bài 9.** Gieo một con xúc xắc cân đối 5 lần. Tính xác suất mặt 6 chấm xuất hiện đúng 2 lần.

**Bài 10.** Có bao nhiêu cách xếp 4 nam và 4 nữ ngồi quanh một bàn tròn sao cho nam nữ ngồi xen kẽ?

**Bài 11.** Chọn ngẫu nhiên 3 đỉnh của một đa giác đều 12 đỉnh. Tính xác suất 3 đỉnh đó tạo thành tam giác vuông.

**Bài 12.** Với đa giác ở bài 11, tính xác suất 3 đỉnh tạo thành tam giác nhọn và tam giác tù.

**Bài 13 (HSG).** Hai đội thi đấu, đội nào thắng 3 ván trước thì vô địch (tối đa 5 ván). Mỗi ván đội A thắng với xác suất 0,6, các ván độc lập, không có hòa. Tính xác suất đội A vô địch.

**Bài 14 (HSG).** Chứng minh $\left(C_n^0\right)^2 + \left(C_n^1\right)^2 + \dots + \left(C_n^n\right)^2 = C_{2n}^n$.

---

## III. Lời giải chi tiết

### Bài 1
$T_{k + 1} = C_8^k(x^2)^{8 - k}\left(-\dfrac{2}{x}\right)^k = C_8^k(-2)^kx^{16 - 3k}$. $16 - 3k = 4 \iff k = 4$: hệ số $C_8^4 \cdot 16 = 1\,120$.

### Bài 2
$T_{k + 1} = C_9^kx^{9 - k}x^{-2k} = C_9^kx^{9 - 3k}$; $k = 3$: $C_9^3 = 84$.

### Bài 3
Vế trái là $(1 + 2)^n = 3^n = 243 = 3^5$: $n = 5$.

### Bài 4
$(1 + 1)^{2n} + (1 - 1)^{2n} = 2S$, nên $S = 2^{2n - 1}$.

### Bài 5
Tổng số cách: $3^8$. Trừ các cách có ít nhất một bạn không nhận (bù trừ): $3^8 - C_3^1 2^8 + C_3^2 1^8 = 6\,561 - 768 + 3 = 5\,796$.

### Bài 6
6 chữ cái với 3 chữ A, 2 chữ N: $\dfrac{6!}{3!\,2!} = 60$.

### Bài 7
$n(\Omega) = C_{20}^3 = 1\,140$. Theo số dư modulo 3: dư 0 có 6 số, dư 1 có 7, dư 2 có 7. Thuận lợi: $C_6^3 + C_7^3 + C_7^3 + 6 \cdot 7 \cdot 7 = 384$. $P = \dfrac{384}{1\,140} = \dfrac{32}{95}$.

### Bài 8
Biến cố đối "5 người sinh ở 5 tháng khác nhau": $\dfrac{A_{12}^5}{12^5} = \dfrac{95\,040}{248\,832}$. $P = 1 - \dfrac{95\,040}{248\,832} \approx 0{,}618$.

### Bài 9
$C_5^2\left(\dfrac{1}{6}\right)^2\left(\dfrac{5}{6}\right)^3 = \dfrac{10 \cdot 125}{7\,776} = \dfrac{625}{3\,888} \approx 0{,}161$.

### Bài 10
Xếp 4 nam quanh bàn: $3! = 6$ cách; 4 nữ vào 4 khe xen kẽ: $4! = 24$. Tổng $144$ cách.

### Bài 11
$n(\Omega) = C_{12}^3 = 220$. Tam giác vuông có cạnh huyền là đường kính: 6 đường kính, mỗi đường kính kết hợp với 10 đỉnh còn lại: 60. $P = \dfrac{60}{220} = \dfrac{3}{11}$.

### Bài 12
Đếm tam giác nhọn trước: tam giác nhọn khi mỗi cung giữa hai đỉnh liên tiếp nhỏ hơn nửa đường tròn, tức gồm ít hơn 6 cạnh. Gọi số cạnh trên ba cung là $a, b, c$ với $a + b + c = 12$, $1 \le a, b, c \le 5$: có 10 bộ có thứ tự $(a; b; c)$. Mỗi tam giác ứng với 3 cách chọn đỉnh xuất phát, và có 12 vị trí xoay: $\dfrac{12 \cdot 10}{3} = 40$ tam giác nhọn.
Tam giác tù: $220 - 60 - 40 = 120$. $P(\text{nhọn}) = \dfrac{40}{220} = \dfrac{2}{11}$, $P(\text{tù}) = \dfrac{120}{220} = \dfrac{6}{11}$.

### Bài 13
Coi như luôn đấu đủ 5 ván (các ván thừa không ảnh hưởng kết quả): A vô địch khi thắng ít nhất 3 trong 5 ván.
$P = C_5^3(0{,}6)^3(0{,}4)^2 + C_5^4(0{,}6)^4(0{,}4) + (0{,}6)^5 = 0{,}3456 + 0{,}2592 + 0{,}07776 = 0{,}68256$.

### Bài 14
Đếm số cách chọn $n$ người từ nhóm $n$ nam và $n$ nữ: $C_{2n}^n$. Mặt khác, chọn $k$ nam và $n - k$ nữ có $C_n^kC_n^{n - k} = \left(C_n^k\right)^2$ cách; cộng theo $k$ được vế trái.

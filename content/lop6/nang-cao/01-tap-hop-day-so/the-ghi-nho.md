# Thẻ ghi nhớ Tập hợp, đếm số phần tử, dãy số và tổng dãy

## Tập hợp

### Một tập hợp có $n$ phần tử thì có bao nhiêu tập con?
$2^n$ tập con, kể cả $\varnothing$ và chính tập đó.

*Vì sao:* mỗi phần tử có $2$ cách (lấy hoặc không lấy), nhân lại được $2^n$.

### Tập rỗng có phải là tập con của mọi tập hợp không?
Có. $\varnothing \subset A$ với mọi tập hợp $A$.

### Có mấy cách viết một tập hợp?
Hai cách: **liệt kê** các phần tử, ví dụ $\{0; 1; 2\}$, hoặc **chỉ ra tính chất đặc trưng**, ví dụ $\{x \in \mathbb{N} \mid x < 3\}$.

### Số phần tử thuộc ít nhất một trong hai tập $A$, $B$ tính thế nào?
$n(A) + n(B) - n(\text{phần chung})$.

*Vì sao:* phần chung bị đếm hai lần nên phải trừ đi một lần.

### Muốn đếm số phần tử **không** thuộc tập nào, nên làm gì?
Đếm phần bù: lấy tổng số trừ đi số phần tử thuộc ít nhất một tập.

## Dãy cách đều

### Công thức tính số số hạng của dãy cách đều?
$\frac{\text{Số cuối} - \text{Số đầu}}{d} + 1$, với $d$ là khoảng cách.

### Vì sao công thức số số hạng có "$+1$"?
Thương $\frac{\text{Số cuối} - \text{Số đầu}}{d}$ là số **khoảng cách**. Số số hạng hơn số khoảng cách là $1$, như trồng cây ở cả hai đầu đường.

### Số hạng thứ $n$ của dãy cách đều bằng gì?
$\text{Số đầu} + (n - 1)\cdot d$.

### Công thức tổng của dãy cách đều?
$\frac{(\text{Số đầu} + \text{Số cuối}) \times \text{Số số hạng}}{2}$.

*Vì sao:* viết tổng xuôi và ngược rồi cộng theo cột, mỗi cột bằng $\text{Số đầu} + \text{Số cuối}$.

### Từ $10$ đến $20$ có bao nhiêu số tự nhiên?
$11$ số, không phải $10$. Đây là bẫy quên "$+1$".

### Tính tổng đan dấu $1 - 2 + 3 - 4 + \dots$ thế nào?
Nhóm từng cặp có cùng giá trị, ví dụ $(3 - 2) = (5 - 4) = \dots = 1$, rồi đếm số cặp và số hạng còn lẻ.

## Đếm chữ số

### Các số có một, hai, ba chữ số dùng bao nhiêu chữ số?
- $1$ đến $9$: $9$ chữ số.
- $10$ đến $99$: $180$ chữ số (tổng từ $1$ đến $99$ là $189$).
- $100$ đến $999$: $2700$ chữ số.

### Biết tổng số chữ số dùng để đánh số trang, tìm số trang thế nào?
Trừ $9$, rồi trừ $180$, phần còn lại chia cho $3$ là số trang có ba chữ số (bắt đầu từ trang $100$).

### Tìm chữ số thứ $k$ của dãy $123456789101112\dots$: xử lý số dư thế nào?
- Chia hết: là **chữ số cuối** của số cuối cùng đã viết.
- Dư $r$: là chữ số thứ $r$ của **số tiếp theo**.

### Mẹo đếm chữ số từ $1$ đến $999$ theo từng hàng là gì?
Viết thêm $0$ ở đầu để mọi số có đủ ba chữ số ($000$ đến $999$). Khi đó mỗi chữ số xuất hiện như nhau ở mỗi hàng: $100$ lần.

## Tổng đặc biệt

### $1 + 3 + 5 + \dots + (2n - 1) = \;?$
$n \cdot n$. Ví dụ $1 + 3 + 5 + 7 + 9 = 25$.

### Số hạng thứ $n$ của dãy $1; 3; 6; 10; 15; \dots$ là gì?
$\frac{n(n + 1)}{2}$ (số tam giác). Số $a$ thuộc dãy khi $2a$ là tích hai số tự nhiên liên tiếp.

### $1 \cdot 2 + 2 \cdot 3 + \dots + n(n + 1) = \;?$
$\frac{n(n + 1)(n + 2)}{3}$.

*Vì sao:* $3k(k + 1) = k(k + 1)(k + 2) - (k - 1)k(k + 1)$, cộng lại các số hạng triệt tiêu dần.

### Dãy $1; 2; 2; 3; 3; 3; \dots$ (số $n$ viết $n$ lần): số $n$ cuối cùng ở vị trí nào?
Ở vị trí $1 + 2 + \dots + n = \frac{n(n + 1)}{2}$.

### Chọn $2$ phần tử từ $n$ phần tử có bao nhiêu cách (không kể thứ tự)?
$\frac{n(n - 1)}{2}$. Mỗi phần tử ghép với $n - 1$ phần tử khác, mỗi cặp bị đếm hai lần.

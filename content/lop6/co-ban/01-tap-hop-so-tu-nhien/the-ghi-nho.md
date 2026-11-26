# Thẻ ghi nhớ Tập hợp và số tự nhiên

## Tập hợp

### Có mấy cách viết một tập hợp? Đó là những cách nào?
Hai cách:
1. Liệt kê các phần tử: $A = \{0; 1; 2; 3\}$.
2. Chỉ ra tính chất đặc trưng: $A = \{x \in \mathbb{N} \mid x < 4\}$.

### Kí hiệu $a \in A$ và $b \notin A$ đọc là gì?
$a \in A$: "$a$ thuộc $A$", $a$ là một phần tử của $A$.
$b \notin A$: "$b$ không thuộc $A$".

### Khi liệt kê, một phần tử lặp lại thì viết mấy lần?
Chỉ viết **một lần**. Ví dụ các chữ cái của "NHA TRANG" là $\{N; H; A; T; R; G\}$, gồm $6$ phần tử.

### $\mathbb{N}$ và $\mathbb{N}^*$ khác nhau thế nào?
$\mathbb{N} = \{0; 1; 2; \dots\}$ có số $0$; $\mathbb{N}^* = \{1; 2; 3; \dots\}$ không có số $0$.

### Đếm số số hạng của một dãy cách đều thế nào?
Số số hạng $= (\text{số cuối} - \text{số đầu}) : \text{khoảng cách} + 1$.
Ví dụ: số lẻ có ba chữ số: $(999 - 101) : 2 + 1 = 450$.

## Ghi số tự nhiên

### Viết $\overline{abc}$ theo các hàng thế nào?
$\overline{abc} = a \cdot 100 + b \cdot 10 + c$ (với $a \ne 0$).

### Quy tắc đọc số La Mã?
$I = 1$, $V = 5$, $X = 10$. Chữ nhỏ đứng **trước** chữ lớn thì trừ ($IV = 4$, $IX = 9$), đứng **sau** thì cộng ($VI = 6$). Không viết một chữ quá ba lần liền nhau.

### Số $19$, $24$, $29$ viết bằng số La Mã thế nào?
$19 = XIX$, $24 = XXIV$, $29 = XXIX$.

## Phép tính

### Tính chất phân phối của phép nhân đối với phép cộng, phép trừ?
$a(b + c) = ab + ac$; $\quad a(b - c) = ab - ac$.
Ví dụ: $36 \cdot 47 + 36 \cdot 53 = 36 \cdot 100 = 3\,600$.

### Phép chia có dư $a : b$ được viết dưới dạng nào?
$a = b \cdot q + r$ với $0 \le r < b$. Nếu $r = 0$ thì $a$ chia hết cho $b$.

### Muốn tìm số bị chia, số chia thì làm thế nào?
Số bị chia $=$ thương $\cdot$ số chia. Số chia $=$ số bị chia $:$ thương.

### Trong bài toán chở người bằng xe, phép chia còn dư thì kết luận thế nào?
Phải thêm một xe cho số người dư. Ví dụ $245 = 45 \cdot 5 + 20$ nên cần $6$ xe.

### Khi nào phép trừ $a - b$ thực hiện được trong $\mathbb{N}$?
Khi $a \ge b$.

## Lũy thừa

### $a^n$ là gì? Đâu là cơ số, đâu là số mũ?
$a^n = a \cdot a \cdots a$ ($n$ thừa số $a$). $a$ là cơ số, $n$ là số mũ. Quy ước $a^1 = a$, $a^0 = 1$ ($a \ne 0$).

### Nhân hai lũy thừa cùng cơ số làm thế nào?
Giữ nguyên cơ số, **cộng** các số mũ: $a^m \cdot a^n = a^{m+n}$.
Ví dụ $3^5 \cdot 3^2 = 3^7$.

### Chia hai lũy thừa cùng cơ số làm thế nào?
Giữ nguyên cơ số, **trừ** các số mũ: $a^m : a^n = a^{m-n}$ ($a \ne 0$, $m \ge n$).

### $2^3$ bằng $6$ hay $8$?
$2^3 = 2 \cdot 2 \cdot 2 = 8$. Bẫy hay gặp là lấy cơ số nhân số mũ.

### $10^n$ viết ra là số nào?
Chữ số $1$ theo sau $n$ chữ số $0$. Ví dụ $10^6 = 1\,000\,000$.

### So sánh $2^{300}$ và $3^{200}$ bằng mẹo nào?
Đưa về cùng số mũ: $2^{300} = 8^{100}$, $3^{200} = 9^{100}$. Cơ số $8 < 9$ nên $2^{300} < 3^{200}$.

### Tính nhanh $1 + 2 + 2^2 + \dots + 2^n$ thế nào?
Gọi tổng là $S$, tính $2S - S = 2^{n+1} - 1$.

## Thứ tự thực hiện phép tính

### Thứ tự thực hiện phép tính khi không có ngoặc?
Lũy thừa → nhân và chia (trái sang phải) → cộng và trừ (trái sang phải).

### Thứ tự làm các loại ngoặc?
Ngoặc tròn $(\ )$ → ngoặc vuông $[\ ]$ → ngoặc nhọn $\{\ \}$.

### $4 + 6 \cdot 2$ bằng bao nhiêu?
$4 + 12 = 16$ (nhân trước, cộng sau), không phải $20$.

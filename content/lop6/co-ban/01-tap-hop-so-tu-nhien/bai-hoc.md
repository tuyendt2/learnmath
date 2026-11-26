# Chủ đề 1. Tập hợp và số tự nhiên

> Chủ đề mở đầu của Toán 6: cách viết tập hợp, các phép tính với số tự nhiên, lũy thừa và thứ tự thực hiện phép tính. Đây là nền tảng cho mọi chủ đề sau. Trong đề kiểm tra, câu "tính giá trị biểu thức", "tìm $x$" và bài toán thực tế về tiền, số lượng gần như luôn có mặt.

## I. Kiến thức cần nắm

### 1. Tập hợp và cách viết tập hợp
- Tập hợp được đặt tên bằng chữ in hoa: $A, B, C, \dots$ Các phần tử viết trong dấu ngoặc nhọn $\{\ \}$, cách nhau bởi dấu ";" (hoặc dấu ","). Mỗi phần tử chỉ viết **một lần**, thứ tự tùy ý.
- $a \in A$ đọc là "$a$ thuộc $A$" ($a$ là phần tử của $A$); $b \notin A$ đọc là "$b$ không thuộc $A$".
- **Hai cách viết một tập hợp:**
  - *Liệt kê các phần tử:* $A = \{0; 1; 2; 3; 4\}$.
  - *Chỉ ra tính chất đặc trưng:* $A = \{x \in \mathbb{N} \mid x < 5\}$.
- Tập hợp còn được minh họa bằng một vòng kín (sơ đồ Venn), mỗi phần tử là một dấu chấm bên trong.

**Ví dụ.** Tập hợp $M$ các chữ cái trong từ "NHA TRANG" là $M = \{N; H; A; T; R; G\}$ (chữ N, A lặp lại nhưng chỉ viết một lần). $M$ có 6 phần tử.

### 2. Tập hợp số tự nhiên
- $\mathbb{N} = \{0; 1; 2; 3; \dots\}$; $\mathbb{N}^* = \{1; 2; 3; \dots\}$ là tập số tự nhiên khác $0$.
- Mỗi số tự nhiên có đúng một số liền sau; mỗi số tự nhiên khác $0$ có đúng một số liền trước. Số $0$ là số tự nhiên nhỏ nhất, không có số tự nhiên lớn nhất.
- **Hệ thập phân:** $\overline{abc} = a \cdot 100 + b \cdot 10 + c$ (với $a \ne 0$). Ví dụ $2\,025 = 2 \cdot 1000 + 0 \cdot 100 + 2 \cdot 10 + 5$.
- **Số La Mã:** dùng các chữ $I = 1$, $V = 5$, $X = 10$. Chữ nhỏ đứng **trước** chữ lớn thì trừ ($IV = 4$, $IX = 9$), đứng **sau** thì cộng ($VI = 6$, $XI = 11$). Không viết một chữ quá ba lần liền nhau. Ví dụ: $XIV = 14$, $XXIX = 29$, $19 = XIX$.
- **Đếm số phần tử của dãy cách đều:** số số hạng $= (\text{số cuối} - \text{số đầu}) : \text{khoảng cách} + 1$. Ví dụ: các số chẵn từ $10$ đến $98$ có $(98 - 10) : 2 + 1 = 45$ số.

### 3. Các phép tính với số tự nhiên
- **Tính chất** của phép cộng và phép nhân: giao hoán, kết hợp; phân phối của phép nhân đối với phép cộng (và phép trừ):
$$a(b + c) = ab + ac, \qquad a(b - c) = ab - ac.$$
- **Phép trừ** $a - b$ chỉ thực hiện được trong $\mathbb{N}$ khi $a \ge b$.
- **Phép chia có dư:** với $a, b \in \mathbb{N}$, $b \ne 0$, luôn có duy nhất $q, r$ sao cho
$$a = b \cdot q + r, \qquad 0 \le r < b.$$
Khi $r = 0$ ta nói $a$ chia hết cho $b$.
- **Tìm thành phần chưa biết:** số hạng = tổng − số hạng kia; số bị trừ = hiệu + số trừ; số trừ = số bị trừ − hiệu; thừa số = tích : thừa số kia; số bị chia = thương · số chia; số chia = số bị chia : thương.

**Ví dụ (tính nhanh).** $25 \cdot 37 \cdot 4 = (25 \cdot 4) \cdot 37 = 100 \cdot 37 = 3\,700$; $\ 36 \cdot 47 + 36 \cdot 53 = 36 \cdot (47 + 53) = 3\,600$.

### 4. Lũy thừa với số mũ tự nhiên
- $a^n = \underbrace{a \cdot a \cdots a}_{n \text{ thừa số}}$ ($n \in \mathbb{N}^*$). $a$ là cơ số, $n$ là số mũ. Quy ước $a^1 = a$, $a^0 = 1$ (với $a \ne 0$).
- $a^2$ đọc là "$a$ bình phương", $a^3$ đọc là "$a$ lập phương". $10^n$ là số $1$ theo sau $n$ chữ số $0$.
- **Nhân, chia hai lũy thừa cùng cơ số:**
$$a^m \cdot a^n = a^{m+n}, \qquad a^m : a^n = a^{m-n}\ (a \ne 0,\ m \ge n).$$
- Bảng nên thuộc: $2^{10} = 1\,024$; $3^4 = 81$; $3^5 = 243$; $5^3 = 125$; $2^5 = 32$.

**Ví dụ.** $3^5 \cdot 3^2 = 3^7$; $\ 7^9 : 7^4 = 7^5$; $\ a^4 \cdot a \cdot a^3 = a^8$.

### 5. Thứ tự thực hiện phép tính
1. Biểu thức **không có ngoặc:** lũy thừa → nhân và chia (từ trái sang phải) → cộng và trừ (từ trái sang phải).
2. Biểu thức **có ngoặc:** $(\ ) \to [\ ] \to \{\ \}$, tức là làm trong ngoặc tròn trước, rồi ngoặc vuông, rồi ngoặc nhọn.

**Ví dụ.** $80 - [130 - (12 - 4)^2] = 80 - [130 - 8^2] = 80 - [130 - 64] = 80 - 66 = 14$.

### 6. Sai lầm hay gặp
- Nhầm $2^3 = 2 \cdot 3 = 6$. Đúng là $2^3 = 2 \cdot 2 \cdot 2 = 8$.
- Nhân hai lũy thừa cùng cơ số mà **nhân** số mũ: $3^5 \cdot 3^2 \ne 3^{10}$. Đúng là **cộng** số mũ: $3^7$.
- Nhân hai lũy thừa **khác cơ số** rồi cộng số mũ: $2^3 \cdot 3^2 \ne 6^5$.
- Làm phép tính từ trái sang phải mà bỏ qua thứ tự: $4 + 6 \cdot 2 \ne 20$. Đúng là $4 + 12 = 16$.
- Bài toán thực tế có dư: $245$ người, xe $45$ chỗ, $245 = 45 \cdot 5 + 20$ nên cần $6$ xe chứ không phải $5$ xe.

## II. Bài tập vận dụng

**Bài 1.** Cho $A$ là tập hợp các số tự nhiên lớn hơn $5$ và nhỏ hơn $12$.
a) Viết tập hợp $A$ bằng hai cách.
b) Điền kí hiệu $\in$ hoặc $\notin$ vào chỗ trống: $5 \ \square\ A$; $\ 9 \ \square\ A$; $\ 12 \ \square\ A$.

**Bài 2.** a) Viết tập hợp các chữ cái trong từ "NHA TRANG". Tập hợp đó có bao nhiêu phần tử?
b) Đọc các số La Mã $XIV$, $XXIX$. Viết các số $19$ và $26$ bằng số La Mã.

**Bài 3.** a) Viết gọn bằng lũy thừa: $5 \cdot 5 \cdot 5 \cdot 5$; $\ 2 \cdot 2 \cdot 2 \cdot 3 \cdot 3$.
b) Tính: $2^5$; $\ 3^4$; $\ 10^6$.
c) Viết kết quả dưới dạng một lũy thừa: $3^5 \cdot 3^2$; $\ 7^9 : 7^4$; $\ a^4 \cdot a \cdot a^3$.

**Bài 4.** Tính (hợp lý nếu có thể):
a) $4 \cdot 5^2 - 81 : 3^2$;
b) $25 \cdot 37 \cdot 4$;
c) $80 - [130 - (12 - 4)^2]$;
d) $36 \cdot 47 + 36 \cdot 53$.

**Bài 5 (tìm số chưa biết).** Tìm số tự nhiên $x$, biết:
a) $x + 37 = 105$;
b) $3x - 15 = 48$;
c) $2^x = 32$;
d) $140 : (x - 8) = 7$.

**Bài 6 (phép chia có dư).** a) Tìm thương và số dư của phép chia $2\,025$ cho $17$.
b) Một số tự nhiên chia cho $9$ được thương là $15$ và số dư là $7$. Tìm số đó.

**Bài 7 (đếm phần tử).** a) Tập hợp $B$ các số tự nhiên chẵn từ $10$ đến $98$ có bao nhiêu phần tử?
b) Có bao nhiêu số lẻ có ba chữ số?

**Bài 8 (thực tế).** Mẹ đưa Lan $100\,000$ đồng đi mua $5$ quyển vở, mỗi quyển giá $12\,000$ đồng, và $3$ chiếc bút, mỗi chiếc giá $8\,000$ đồng. Viết biểu thức tính số tiền Lan còn lại rồi tính.

**Bài 9 (thực tế).** Một loại vi khuẩn cứ sau $20$ phút lại tách đôi (mỗi con thành hai con). Hỏi từ một con vi khuẩn, sau $3$ giờ có bao nhiêu con? Viết kết quả dưới dạng lũy thừa rồi tính.

**Bài 10 (thực tế).** Trường tổ chức cho $245$ học sinh đi tham quan. Mỗi xe chở được nhiều nhất $45$ học sinh. Hỏi cần ít nhất bao nhiêu xe? Xe cuối cùng chở bao nhiêu học sinh nếu các xe trước đều chở đầy?

**Bài 11 (so sánh lũy thừa).** So sánh $2^{300}$ và $3^{200}$.

**Bài 12 (tính tổng lũy thừa).** Tính $S = 1 + 2 + 2^2 + 2^3 + \dots + 2^{10}$.

**Bài 13 (đếm chữ số).** Để đánh số trang một cuốn sách dày $150$ trang (bắt đầu từ trang $1$) cần dùng tất cả bao nhiêu chữ số?

## III. Lời giải chi tiết

### Bài 1
a) *Liệt kê:* $A = \{6; 7; 8; 9; 10; 11\}$.
*Chỉ ra tính chất đặc trưng:* $A = \{x \in \mathbb{N} \mid 5 < x < 12\}$.

b) $5 \notin A$ (vì $5$ không lớn hơn $5$); $\ 9 \in A$; $\ 12 \notin A$ (vì $12$ không nhỏ hơn $12$).

### Bài 2
a) Các chữ cái N, H, A, T, R, A, N, G; bỏ các chữ lặp lại, ta có $M = \{N; H; A; T; R; G\}$. Tập hợp có $6$ phần tử.

b) $XIV = 10 + (5 - 1) = 14$; $\ XXIX = 10 + 10 + (10 - 1) = 29$.
$19 = 10 + 9 = XIX$; $\ 26 = 10 + 10 + 5 + 1 = XXVI$.

### Bài 3
a) $5 \cdot 5 \cdot 5 \cdot 5 = 5^4$; $\ 2 \cdot 2 \cdot 2 \cdot 3 \cdot 3 = 2^3 \cdot 3^2$.

b) $2^5 = 32$; $\ 3^4 = 81$; $\ 10^6 = 1\,000\,000$.

c) $3^5 \cdot 3^2 = 3^{5+2} = 3^7$; $\ 7^9 : 7^4 = 7^{9-4} = 7^5$; $\ a^4 \cdot a \cdot a^3 = a^{4+1+3} = a^8$.

### Bài 4
a) $4 \cdot 5^2 - 81 : 3^2 = 4 \cdot 25 - 81 : 9 = 100 - 9 = 91$.

b) $25 \cdot 37 \cdot 4 = (25 \cdot 4) \cdot 37 = 100 \cdot 37 = 3\,700$.

c) $80 - [130 - (12 - 4)^2] = 80 - [130 - 64] = 80 - 66 = 14$.

d) $36 \cdot 47 + 36 \cdot 53 = 36 \cdot (47 + 53) = 36 \cdot 100 = 3\,600$.

*Nhận xét:* trước khi tính, hãy nhìn xem có cặp số "đẹp" ($25$ và $4$, $47$ và $53$) để dùng tính chất giao hoán, kết hợp, phân phối.

### Bài 5
a) $x = 105 - 37 = 68$.

b) $3x = 48 + 15 = 63$, nên $x = 63 : 3 = 21$.

c) $32 = 2 \cdot 2 \cdot 2 \cdot 2 \cdot 2 = 2^5$, nên $2^x = 2^5$, suy ra $x = 5$.

d) $x - 8 = 140 : 7 = 20$, nên $x = 20 + 8 = 28$.

*Nhận xét:* với biểu thức nhiều tầng như câu b, d, hãy coi cả cụm ($3x$, hay $x - 8$) là một thành phần chưa biết, tìm cụm đó trước rồi mới tìm $x$.

### Bài 6
a) $2\,025 = 17 \cdot 119 + 2$, với $2 < 17$. Thương là $119$, số dư là $2$.

b) Số cần tìm bằng $9 \cdot 15 + 7 = 135 + 7 = 142$.

### Bài 7
a) Các số chẵn từ $10$ đến $98$ cách đều nhau $2$ đơn vị. Số phần tử của $B$ là $(98 - 10) : 2 + 1 = 45$.

b) Số lẻ có ba chữ số nhỏ nhất là $101$, lớn nhất là $999$. Số các số đó là $(999 - 101) : 2 + 1 = 450$.

### Bài 8
Số tiền còn lại là
$$100\,000 - (5 \cdot 12\,000 + 3 \cdot 8\,000) = 100\,000 - (60\,000 + 24\,000) = 100\,000 - 84\,000 = 16\,000 \text{ (đồng)}.$$
Lan còn lại $16\,000$ đồng.

### Bài 9
$3$ giờ $= 180$ phút, gồm $180 : 20 = 9$ lần tách đôi. Sau mỗi lần, số vi khuẩn nhân $2$, nên sau $9$ lần có
$$\underbrace{2 \cdot 2 \cdots 2}_{9 \text{ thừa số}} = 2^9 = 512 \text{ (con)}.$$

### Bài 10
$245 = 45 \cdot 5 + 20$. Năm xe chở đầy được $225$ học sinh, còn $20$ học sinh phải đi thêm một xe nữa.
Vậy cần ít nhất $6$ xe; xe cuối chở $20$ học sinh.

*Nhận xét:* trong bài toán thực tế, phải xét số dư. Nếu số dư khác $0$ thì cần thêm một xe (một hộp, một chuyến...).

### Bài 11
Đưa về cùng số mũ: $2^{300} = 2^{3 \cdot 100} = (2^3)^{100} = 8^{100}$ và $3^{200} = (3^2)^{100} = 9^{100}$.
Vì $8 < 9$ nên $8^{100} < 9^{100}$, tức là $2^{300} < 3^{200}$.

*Nhận xét:* $2^{300}$ nghĩa là $100$ nhóm, mỗi nhóm $2 \cdot 2 \cdot 2 = 8$, nên $2^{300} = 8 \cdot 8 \cdots 8$ ($100$ thừa số). Hai lũy thừa cùng số mũ thì cơ số lớn hơn sẽ lớn hơn.

### Bài 12
Nhân hai vế với $2$:
$$2S = 2 + 2^2 + 2^3 + \dots + 2^{10} + 2^{11}.$$
Lấy $2S$ trừ $S$, các số hạng từ $2$ đến $2^{10}$ bị triệt tiêu:
$$2S - S = 2^{11} - 1, \quad\text{tức là}\quad S = 2^{11} - 1 = 2\,048 - 1 = 2\,047.$$

*Nhận xét:* với tổng các lũy thừa liên tiếp của $a$, nhân tổng với $a$ rồi trừ đi tổng ban đầu.

### Bài 13
- Trang $1$ đến trang $9$: $9$ số có một chữ số, dùng $9$ chữ số.
- Trang $10$ đến trang $99$: $99 - 10 + 1 = 90$ số có hai chữ số, dùng $90 \cdot 2 = 180$ chữ số.
- Trang $100$ đến trang $150$: $150 - 100 + 1 = 51$ số có ba chữ số, dùng $51 \cdot 3 = 153$ chữ số.

Tổng cộng: $9 + 180 + 153 = 342$ chữ số.

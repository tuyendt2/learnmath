# Chủ đề 2. Tính chia hết, số nguyên tố, ước chung lớn nhất, bội chung nhỏ nhất

> Chủ đề này giúp nhận biết nhanh một số có chia hết cho $2, 3, 5, 9$ hay không, phân tích một số ra thừa số nguyên tố, tìm ƯCLN và BCNN. Trong đề kiểm tra luôn có bài toán thực tế "chia đều nhiều nhất" (dùng ƯCLN) hoặc "cùng lặp lại sau bao lâu" (dùng BCNN).

## I. Kiến thức cần nắm

### 1. Ước và bội, tính chất chia hết của một tổng
- Nếu $a$ chia hết cho $b$ ($b \ne 0$), kí hiệu $a \ \vdots\ b$, thì $a$ là **bội** của $b$, $b$ là **ước** của $a$.
- $\text{Ư}(a)$ là tập các ước của $a$; $B(b)$ là tập các bội của $b$. Muốn tìm các bội của $b$, nhân $b$ lần lượt với $0, 1, 2, 3, \dots$ Muốn tìm các ước của $a$, chia $a$ lần lượt cho $1, 2, \dots, a$.
- **Tính chất 1:** nếu tất cả các số hạng của một tổng đều chia hết cho $m$ thì tổng chia hết cho $m$.
- **Tính chất 2:** nếu chỉ có **một** số hạng không chia hết cho $m$, các số hạng còn lại đều chia hết cho $m$, thì tổng **không** chia hết cho $m$.
- Hai tính chất trên cũng đúng với hiệu.

**Ví dụ.** $12 + 36 + x$ với $12 \ \vdots\ 4$, $36 \ \vdots\ 4$. Tổng chia hết cho $4$ khi và chỉ khi $x \ \vdots\ 4$.

### 2. Dấu hiệu chia hết cho 2, 5, 3, 9
| Chia hết cho | Dấu hiệu |
|---|---|
| $2$ | chữ số tận cùng là $0, 2, 4, 6, 8$ |
| $5$ | chữ số tận cùng là $0$ hoặc $5$ |
| $3$ | tổng các chữ số chia hết cho $3$ |
| $9$ | tổng các chữ số chia hết cho $9$ |

- Chia hết cho cả $2$ và $5$ khi tận cùng là $0$.
- Số chia hết cho $9$ thì chia hết cho $3$; điều ngược lại không đúng (ví dụ $12$).

**Ví dụ.** $\overline{4a7b}$ chia hết cho cả $2$, $5$ và $9$: tận cùng $b = 0$; tổng chữ số $4 + a + 7 + 0 = 11 + a$ chia hết cho $9$, nên $a = 7$. Số đó là $4\,770$.

### 3. Số nguyên tố, hợp số, phân tích ra thừa số nguyên tố
- **Số nguyên tố** là số tự nhiên lớn hơn $1$, chỉ có hai ước là $1$ và chính nó. **Hợp số** là số tự nhiên lớn hơn $1$ có nhiều hơn hai ước.
- Số $0$ và số $1$ không là số nguyên tố, cũng không là hợp số. Số $2$ là số nguyên tố chẵn duy nhất.
- Các số nguyên tố nhỏ hơn $30$: $2, 3, 5, 7, 11, 13, 17, 19, 23, 29$.
- **Phân tích ra thừa số nguyên tố:** viết số đó thành tích các thừa số nguyên tố, chia dần cho các số nguyên tố từ nhỏ đến lớn (sơ đồ cột). Kết quả viết các thừa số theo thứ tự tăng dần, gộp bằng lũy thừa.

**Ví dụ.** $120 = 2^3 \cdot 3 \cdot 5$; $\ 252 = 2^2 \cdot 3^2 \cdot 7$; $\ 1\,050 = 2 \cdot 3 \cdot 5^2 \cdot 7$.

### 4. Ước chung lớn nhất
- **ƯC** của hai hay nhiều số là ước của tất cả các số đó. **ƯCLN** là số lớn nhất trong tập ước chung.
- **Cách tìm ƯCLN:**
  1. Phân tích mỗi số ra thừa số nguyên tố.
  2. Chọn các thừa số nguyên tố **chung**.
  3. Mỗi thừa số lấy với **số mũ nhỏ nhất**, rồi lập tích.
- Ước chung là ước của ƯCLN: $\text{ƯC}(a, b) = \text{Ư}(\text{ƯCLN}(a, b))$.
- Hai số **nguyên tố cùng nhau** nếu ƯCLN của chúng bằng $1$.

**Ví dụ.** $36 = 2^2 \cdot 3^2$, $84 = 2^2 \cdot 3 \cdot 7$. Thừa số chung là $2$ và $3$, nên $\text{ƯCLN}(36, 84) = 2^2 \cdot 3 = 12$.

### 5. Bội chung nhỏ nhất
- **BC** của hai hay nhiều số là bội của tất cả các số đó. **BCNN** là số nhỏ nhất khác $0$ trong tập bội chung.
- **Cách tìm BCNN:**
  1. Phân tích mỗi số ra thừa số nguyên tố.
  2. Chọn các thừa số nguyên tố **chung và riêng**.
  3. Mỗi thừa số lấy với **số mũ lớn nhất**, rồi lập tích.
- Bội chung là bội của BCNN: $\text{BC}(a, b) = B(\text{BCNN}(a, b))$.
- Nếu $a \ \vdots\ b$ thì $\text{BCNN}(a, b) = a$; nếu $a, b$ nguyên tố cùng nhau thì $\text{BCNN}(a, b) = a \cdot b$.

**Ví dụ.** $\text{BCNN}(36, 84) = 2^2 \cdot 3^2 \cdot 7 = 252$.

### 6. Nhận dạng bài toán thực tế
| Dấu hiệu trong đề | Dùng |
|---|---|
| chia đều thành **nhiều nhất** bao nhiêu phần; cắt thành hình vuông **lớn nhất** | ƯCLN |
| số phần chia được là ước chung, có điều kiện kèm theo | ƯC |
| **sau ít nhất** bao lâu cùng lặp lại; số **nhỏ nhất** chia hết cho các số | BCNN |
| xếp hàng $2, 3, \dots$ đều vừa đủ (hoặc đều thừa $r$), số lượng trong khoảng cho trước | BC |

**Sai lầm hay gặp:** lấy số mũ lớn nhất khi tìm ƯCLN (hoặc nhỏ nhất khi tìm BCNN); quên rằng ƯCLN chỉ lấy thừa số **chung**; coi $1$ là số nguyên tố.

## II. Bài tập vận dụng

**Bài 1.** Cho các số $1\,234$; $3\,645$; $4\,230$; $2\,019$; $7\,128$. Trong các số đó:
a) số nào chia hết cho $2$? cho $5$?
b) số nào chia hết cho $3$? cho $9$?
c) số nào chia hết cho cả $2, 3, 5$ và $9$?

**Bài 2 (điền chữ số).** a) Điền chữ số vào dấu $*$ để $\overline{25*}$ chia hết cho cả $3$ và $5$.
b) Tìm các chữ số $a, b$ để $\overline{4a7b}$ chia hết cho cả $2$, $5$ và $9$.

**Bài 3.** a) Trong các số $1, 2, 15, 17, 27, 29, 51, 91, 97$, số nào là số nguyên tố, số nào là hợp số?
b) Phân tích các số $120$; $252$; $1\,050$ ra thừa số nguyên tố.

**Bài 4.** a) Tìm $\text{Ư}(18)$ và các bội của $7$ nhỏ hơn $50$.
b) Tìm $\text{ƯCLN}(36, 84)$ và $\text{BCNN}(36, 84)$.
c) Tìm $\text{ƯCLN}(24, 60, 90)$ và $\text{BCNN}(24, 60, 90)$.

**Bài 5 (tính chất chia hết của tổng).** Cho $A = 12 + 36 + x$ với $x \in \mathbb{N}$. Tìm điều kiện của $x$ để:
a) $A$ chia hết cho $4$;
b) $A$ không chia hết cho $4$.

**Bài 6 (thực tế, ƯCLN).** Cô giáo có $48$ chiếc bút, $72$ quyển vở và $120$ tập giấy. Cô muốn chia đều số bút, vở, giấy vào các phần thưởng sao cho mỗi loại đều chia hết, không thừa. Có thể chia được nhiều nhất bao nhiêu phần thưởng? Khi đó mỗi phần thưởng có bao nhiêu bút, bao nhiêu vở, bao nhiêu tập giấy?

**Bài 7 (thực tế, BCNN).** Ba tuyến xe buýt cùng xuất phát từ một bến. Tuyến thứ nhất cứ $10$ phút có một chuyến, tuyến thứ hai cứ $12$ phút, tuyến thứ ba cứ $15$ phút. Lúc $6$ giờ sáng ba tuyến cùng xuất phát. Hỏi lần tiếp theo ba tuyến cùng xuất phát là lúc mấy giờ?

**Bài 8 (thực tế, bội chung).** Số học sinh khối 6 của một trường trong khoảng từ $300$ đến $400$. Khi xếp hàng $12$, hàng $15$, hàng $18$ thì đều thừa $5$ học sinh. Tính số học sinh khối 6 của trường.

**Bài 9 (thực tế, lát gạch).** Một căn phòng hình chữ nhật có chiều dài $480$ cm, chiều rộng $360$ cm. Người ta muốn lát kín nền bằng những viên gạch hình vuông bằng nhau, không phải cắt viên nào. Hỏi cạnh viên gạch dài nhất là bao nhiêu xăng-ti-mét? Khi đó cần bao nhiêu viên gạch?

**Bài 10.** Tìm số tự nhiên $n$ sao cho $n + 3$ chia hết cho $n + 1$.

**Bài 11.** Tìm hai số tự nhiên có tổng bằng $84$ và ước chung lớn nhất bằng $12$.

**Bài 12 (chứng minh chia hết).** a) Chứng minh rằng số $\overline{aaa}$ luôn chia hết cho $37$.
b) Chứng minh rằng với mọi số tự nhiên $n$, tích $(n + 3)(n + 6)$ chia hết cho $2$.

## III. Lời giải chi tiết

### Bài 1
Tính tổng các chữ số: $1\,234 \to 10$; $\ 3\,645 \to 18$; $\ 4\,230 \to 9$; $\ 2\,019 \to 12$; $\ 7\,128 \to 18$.

a) Chia hết cho $2$ (tận cùng chẵn): $1\,234$; $4\,230$; $7\,128$. Chia hết cho $5$ (tận cùng $0$ hoặc $5$): $3\,645$; $4\,230$.

b) Chia hết cho $3$ (tổng chữ số chia hết cho $3$): $3\,645$; $4\,230$; $2\,019$; $7\,128$. Chia hết cho $9$: $3\,645$; $4\,230$; $7\,128$.

c) Chỉ có $4\,230$ chia hết cho cả $2, 3, 5, 9$.

### Bài 2
a) $\overline{25*}$ chia hết cho $5$ nên $* \in \{0; 5\}$.
- $* = 0$: tổng chữ số $2 + 5 + 0 = 7$, không chia hết cho $3$. Loại.
- $* = 5$: tổng chữ số $2 + 5 + 5 = 12$, chia hết cho $3$. Nhận.

Vậy số cần tìm là $255$.

b) Chia hết cho cả $2$ và $5$ nên $b = 0$. Khi đó tổng các chữ số là $4 + a + 7 + 0 = 11 + a$ phải chia hết cho $9$. Vì $0 \le a \le 9$ nên $11 \le 11 + a \le 20$, suy ra $11 + a = 18$, tức là $a = 7$.
Vậy $a = 7$, $b = 0$, số đó là $4\,770$.

### Bài 3
a) Số nguyên tố: $2, 17, 29, 97$.
Hợp số: $15 = 3 \cdot 5$; $\ 27 = 3 \cdot 9$; $\ 51 = 3 \cdot 17$; $\ 91 = 7 \cdot 13$.
Số $1$ không là số nguyên tố, cũng không là hợp số.

b) $120 = 2^3 \cdot 3 \cdot 5$; $\ 252 = 2^2 \cdot 3^2 \cdot 7$; $\ 1\,050 = 2 \cdot 3 \cdot 5^2 \cdot 7$.

*Nhận xét:* $51$ và $91$ trông giống số nguyên tố nhưng không phải. Muốn kiểm tra, thử chia cho các số nguyên tố $2, 3, 5, 7, 11, \dots$

### Bài 4
a) $\text{Ư}(18) = \{1; 2; 3; 6; 9; 18\}$. Các bội của $7$ nhỏ hơn $50$: $0; 7; 14; 21; 28; 35; 42; 49$.

b) $36 = 2^2 \cdot 3^2$, $\ 84 = 2^2 \cdot 3 \cdot 7$.
$\text{ƯCLN}(36, 84) = 2^2 \cdot 3 = 12$; $\ \text{BCNN}(36, 84) = 2^2 \cdot 3^2 \cdot 7 = 252$.

c) $24 = 2^3 \cdot 3$, $\ 60 = 2^2 \cdot 3 \cdot 5$, $\ 90 = 2 \cdot 3^2 \cdot 5$.
$\text{ƯCLN}(24, 60, 90) = 2 \cdot 3 = 6$; $\ \text{BCNN}(24, 60, 90) = 2^3 \cdot 3^2 \cdot 5 = 360$.

### Bài 5
$12 \ \vdots\ 4$ và $36 \ \vdots\ 4$.

a) Nếu $x \ \vdots\ 4$ thì cả ba số hạng chia hết cho $4$, nên $A \ \vdots\ 4$. Nếu $x$ không chia hết cho $4$ thì $A$ có đúng một số hạng không chia hết cho $4$, nên $A$ không chia hết cho $4$. Vậy $A \ \vdots\ 4$ khi $x$ chia hết cho $4$.

b) $A$ không chia hết cho $4$ khi $x$ không chia hết cho $4$.

### Bài 6
Số phần thưởng phải là ước chung của $48$, $72$ và $120$; muốn nhiều nhất thì lấy ƯCLN.
$48 = 2^4 \cdot 3$, $\ 72 = 2^3 \cdot 3^2$, $\ 120 = 2^3 \cdot 3 \cdot 5$, nên $\text{ƯCLN}(48, 72, 120) = 2^3 \cdot 3 = 24$.

Chia được nhiều nhất $24$ phần thưởng. Mỗi phần có $48 : 24 = 2$ bút, $72 : 24 = 3$ quyển vở và $120 : 24 = 5$ tập giấy.

### Bài 7
Khoảng thời gian (phút) giữa hai lần ba tuyến cùng xuất phát là bội chung của $10$, $12$, $15$; lần gần nhất ứng với BCNN.
$10 = 2 \cdot 5$, $\ 12 = 2^2 \cdot 3$, $\ 15 = 3 \cdot 5$, nên $\text{BCNN}(10, 12, 15) = 2^2 \cdot 3 \cdot 5 = 60$.

Sau $60$ phút $= 1$ giờ, ba tuyến lại cùng xuất phát, tức là lúc $7$ giờ sáng.

### Bài 8
Gọi số học sinh là $a$. Khi bớt $5$ học sinh thì xếp hàng $12$, $15$, $18$ đều vừa đủ, nên $a - 5$ là bội chung của $12$, $15$, $18$.
$12 = 2^2 \cdot 3$, $\ 15 = 3 \cdot 5$, $\ 18 = 2 \cdot 3^2$, nên $\text{BCNN}(12, 15, 18) = 2^2 \cdot 3^2 \cdot 5 = 180$.
Do đó $a - 5 \in \{0; 180; 360; 540; \dots\}$, tức là $a \in \{5; 185; 365; 545; \dots\}$.
Vì $300 \le a \le 400$ nên $a = 365$.

Khối 6 có $365$ học sinh.

*Nhận xét:* "đều thừa $r$" thì bớt đi $r$ để được bội chung; "đều thiếu $r$" thì thêm $r$.

### Bài 9
Cạnh viên gạch (cm) phải là ước chung của $480$ và $360$ để lát vừa khít cả chiều dài lẫn chiều rộng; cạnh dài nhất là ƯCLN.
$480 = 2^5 \cdot 3 \cdot 5$, $\ 360 = 2^3 \cdot 3^2 \cdot 5$, nên $\text{ƯCLN}(480, 360) = 2^3 \cdot 3 \cdot 5 = 120$.

Cạnh viên gạch dài nhất là $120$ cm. Theo chiều dài cần $480 : 120 = 4$ viên, theo chiều rộng cần $360 : 120 = 3$ viên, nên cần $4 \cdot 3 = 12$ viên gạch.

### Bài 10
Ta có $n + 3 = (n + 1) + 2$. Vì $(n + 1) \ \vdots\ (n + 1)$, nên $n + 3 \ \vdots\ n + 1$ khi và chỉ khi $2 \ \vdots\ (n + 1)$, tức là $n + 1$ là ước của $2$.
$n + 1 \in \{1; 2\}$, suy ra $n \in \{0; 1\}$.

*Thử lại:* $n = 0$: $3 \ \vdots\ 1$; $\ n = 1$: $4 \ \vdots\ 2$. Đúng.

*Nhận xét:* tách số bị chia thành "một bội của số chia" cộng với một số cụ thể, rồi dùng tính chất chia hết của tổng.

### Bài 11
Gọi hai số là $a$ và $b$ với $a \le b$. Vì $\text{ƯCLN}(a, b) = 12$ nên $a = 12m$, $b = 12k$ với $m \le k$ và $m, k$ nguyên tố cùng nhau (nếu $m, k$ có ước chung $d > 1$ thì $12d$ là ước chung lớn hơn $12$).
$a + b = 12(m + k) = 84$, nên $m + k = 7$.
Các cặp $(m; k)$ có tổng $7$, $m \le k$: $(1; 6)$, $(2; 5)$, $(3; 4)$, cả ba cặp đều nguyên tố cùng nhau. ($m = 0$ bị loại vì khi đó $a = 0$, $b = 84$ và $\text{ƯCLN}(0, 84) = 84$.)

Vậy hai số là $12$ và $72$, hoặc $24$ và $60$, hoặc $36$ và $48$.

### Bài 12
a) $\overline{aaa} = a \cdot 100 + a \cdot 10 + a = a \cdot 111 = a \cdot 3 \cdot 37$, nên $\overline{aaa}$ chia hết cho $37$.

b) Xét hai trường hợp:
- $n$ lẻ: $n + 3$ là số chẵn, nên tích chia hết cho $2$.
- $n$ chẵn: $n + 6$ là số chẵn, nên tích chia hết cho $2$.

Vậy $(n + 3)(n + 6)$ luôn chia hết cho $2$.

*Nhận xét:* $(n + 3)$ và $(n + 6)$ hơn kém nhau $3$ (một số lẻ), nên luôn có một số chẵn, một số lẻ.

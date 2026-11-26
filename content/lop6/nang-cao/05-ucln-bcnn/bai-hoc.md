# Chủ đề 5. Ước chung lớn nhất, bội chung nhỏ nhất nâng cao

> ƯCLN và BCNN có mặt trong đề HSG lớp 6 theo hai hướng: bài toán thực tế (chia đều, xếp hàng, gặp lại nhau) và bài toán số học (tìm hai số biết ƯCLN, BCNN; chứng minh hai số nguyên tố cùng nhau). Công thức then chốt là $a = d \cdot m$, $b = d \cdot n$ với $m$, $n$ nguyên tố cùng nhau.

## I. Kiến thức cần nắm

### 1. Ước chung, bội chung
- $\text{ƯC}(a, b)$ là tập các số vừa là ước của $a$ vừa là ước của $b$. Số lớn nhất trong đó là $\text{ƯCLN}(a, b)$.
- $\text{BC}(a, b)$ là tập các số vừa là bội của $a$ vừa là bội của $b$. Số nhỏ nhất **khác $0$** trong đó là $\text{BCNN}(a, b)$.
- **Mọi ước chung đều là ước của ƯCLN; mọi bội chung đều là bội của BCNN.** Vì vậy muốn tìm ƯC thì tìm các ước của ƯCLN, muốn tìm BC thì tìm các bội của BCNN.
- Hai số **nguyên tố cùng nhau** nếu $\text{ƯCLN}(a, b) = 1$. Ví dụ $8$ và $15$.

### 2. Tìm ƯCLN, BCNN bằng phân tích ra thừa số nguyên tố
- **ƯCLN:** lấy các thừa số nguyên tố **chung**, mỗi thừa số với số mũ **nhỏ nhất**.
- **BCNN:** lấy **tất cả** các thừa số nguyên tố (chung và riêng), mỗi thừa số với số mũ **lớn nhất**.

**Ví dụ.** $60 = 2^2 \cdot 3 \cdot 5$ và $72 = 2^3 \cdot 3^2$. Khi đó $\text{ƯCLN} = 2^2 \cdot 3 = 12$ và $\text{BCNN} = 2^3 \cdot 3^2 \cdot 5 = 360$.

**Mẹo nhanh:** nếu $a \,\vdots\, b$ thì $\text{ƯCLN}(a, b) = b$ và $\text{BCNN}(a, b) = a$. Nếu $a$, $b$ nguyên tố cùng nhau thì $\text{BCNN}(a, b) = a \cdot b$.

### 3. Thuật toán Euclid
Với $a > b > 0$, chia $a$ cho $b$ được $a = b \cdot q + r$. Khi đó
$$\text{ƯCLN}(a, b) = \text{ƯCLN}(b, r).$$
*Vì sao:* nếu $d$ là ước chung của $a$ và $b$ thì $d$ là ước của $r = a - bq$; ngược lại nếu $d$ là ước chung của $b$ và $r$ thì $d$ là ước của $a = bq + r$. Hai cặp số có cùng tập ước chung, nên cùng ƯCLN.
Lặp lại cho đến khi số dư bằng $0$; **số dư khác $0$ cuối cùng** là ƯCLN.

**Ví dụ.** $\text{ƯCLN}(252, 198)$: $252 = 198 \cdot 1 + 54$; $198 = 54 \cdot 3 + 36$; $54 = 36 \cdot 1 + 18$; $36 = 18 \cdot 2$. Vậy ƯCLN là $18$.

Thuật toán này rất có ích khi hai số lớn, khó phân tích ra thừa số nguyên tố.

### 4. Quan hệ giữa ƯCLN và BCNN
Gọi $d = \text{ƯCLN}(a, b)$. Khi đó
$$a = d \cdot m, \quad b = d \cdot n, \quad \text{ƯCLN}(m, n) = 1, \quad \text{BCNN}(a, b) = d \cdot m \cdot n.$$
Suy ra
$$\boxed{\text{ƯCLN}(a, b) \cdot \text{BCNN}(a, b) = a \cdot b.}$$
*Vì sao $\text{ƯCLN}(m, n) = 1$:* nếu $m$, $n$ có ước chung $k > 1$ thì $d \cdot k$ là ước chung của $a$, $b$ và lớn hơn $d$, mâu thuẫn.
*Vì sao $\text{BCNN} = dmn$:* một bội chung của $a = dm$ và $b = dn$ phải có dạng $d \cdot m \cdot x$ chia hết cho $d \cdot n$, tức $m \cdot x \,\vdots\, n$; vì $m$, $n$ nguyên tố cùng nhau nên $x \,\vdots\, n$. Nhỏ nhất khi $x = n$.

**Ví dụ.** $a = 12$, $b = 18$: $d = 6$, $m = 2$, $n = 3$, $\text{BCNN} = 6 \cdot 2 \cdot 3 = 36$, và $6 \cdot 36 = 216 = 12 \cdot 18$.

### 5. Chứng minh hai số nguyên tố cùng nhau
Gọi $d$ là ước chung của hai biểu thức. Nhân mỗi biểu thức với một số thích hợp rồi trừ để **khử $n$**, được $d$ là ước của một hằng số. Từ đó tìm $d$.

**Ví dụ.** $\text{ƯCLN}(n + 1, n + 2)$: $d$ là ước của $(n + 2) - (n + 1) = 1$, nên $d = 1$. Hai số tự nhiên liên tiếp luôn nguyên tố cùng nhau.

**Tính chất:** nếu $\text{ƯCLN}(a, b) = 1$ và $a \cdot c \,\vdots\, b$ thì $c \,\vdots\, b$.

### 6. Bài toán thực tế: khi nào dùng ƯCLN, khi nào dùng BCNN?
| Dấu hiệu trong đề | Dùng |
|---|---|
| Chia đều các vật thành nhiều phần nhất, cắt thành đoạn dài nhất, xếp thành ô vuông lớn nhất | ƯCLN (hoặc ƯC) |
| Sau ít nhất bao lâu lại gặp nhau, xếp hàng $a$, $b$, $c$ đều vừa đủ, số nhỏ nhất chia hết cho nhiều số | BCNN (hoặc BC) |
| Xếp hàng $a$, $b$, $c$ đều **thừa** $r$ | $n - r$ là bội chung |
| Xếp hàng $a$, $b$, $c$ đều **thiếu** $r$ | $n + r$ là bội chung |

### 7. Sai lầm hay gặp
- Lấy BCNN bằng tích các số khi chúng có ước chung (ví dụ $\text{BCNN}(4, 6) = 12$, không phải $24$).
- Quên điều kiện $\text{ƯCLN}(m, n) = 1$ khi đặt $a = dm$, $b = dn$, nên được thừa nghiệm.
- Đề hỏi "khoảng $300$ đến $400$" mà chỉ lấy BCNN, không lấy đúng bội chung trong khoảng.
- Đếm số lần gặp nhau mà quên lần đầu tiên (thời điểm xuất phát).

---

## II. Bài tập vận dụng

**Bài 1.** Tìm $\text{ƯCLN}$ và $\text{BCNN}$ của $84$, $108$ và $180$.

**Bài 2 (thuật toán Euclid).** Tìm $\text{ƯCLN}(4199, 1938)$.

**Bài 3.** Một đội văn nghệ có $96$ bạn nam và $72$ bạn nữ. Cần chia đội thành các nhóm sao cho số nam trong các nhóm bằng nhau và số nữ trong các nhóm bằng nhau. Có thể chia nhiều nhất thành bao nhiêu nhóm? Khi đó mỗi nhóm có bao nhiêu nam, bao nhiêu nữ?

**Bài 4.** Tại một bến xe, cứ $12$ phút có một xe buýt tuyến A rời bến, cứ $18$ phút có một xe buýt tuyến B rời bến. Lúc $6$ giờ sáng, hai xe của hai tuyến cùng rời bến.
a) Lần tiếp theo hai xe cùng rời bến là lúc mấy giờ?
b) Từ $6$ giờ đến $12$ giờ trưa cùng ngày (kể cả lúc $6$ giờ và $12$ giờ), có bao nhiêu lần hai xe cùng rời bến?

**Bài 5.** Số học sinh khối 6 của một trường trong khoảng từ $300$ đến $400$. Khi xếp hàng $12$, hàng $15$ hay hàng $18$ đều thừa $5$ học sinh. Tính số học sinh khối 6.

**Bài 6.** Một mảnh vườn hình chữ nhật có chiều dài $105$ m, chiều rộng $60$ m. Người ta trồng cây quanh vườn sao cho mỗi góc vườn có một cây và khoảng cách giữa hai cây liên tiếp bằng nhau. Tính khoảng cách lớn nhất giữa hai cây liên tiếp và số cây phải trồng khi đó.

**Bài 7.** Tìm hai số tự nhiên $a$, $b$ biết $a + b = 162$ và $\text{ƯCLN}(a, b) = 18$.

**Bài 8.** Tìm hai số tự nhiên $a$, $b$ ($a \le b$) biết $a \cdot b = 2940$ và $\text{BCNN}(a, b) = 210$.

**Bài 9.** Chứng minh rằng với mọi số tự nhiên $n$, hai số $2n + 1$ và $3n + 1$ nguyên tố cùng nhau.

**Bài 10.** Tìm số tự nhiên nhỏ nhất khi chia cho $3$ dư $2$, chia cho $5$ dư $3$ và chia cho $7$ dư $4$.

**Bài 11 (đề HSG).** Tìm các số tự nhiên $n$ để hai số $18n + 3$ và $21n + 7$ nguyên tố cùng nhau.

**Bài 12 (đề HSG).** Tìm hai số tự nhiên $a$, $b$ ($a \le b$) biết $\text{BCNN}(a, b) - \text{ƯCLN}(a, b) = 35$.

**Bài 13 (đề HSG).** Cho $a$, $b$ là hai số tự nhiên khác $0$ nguyên tố cùng nhau. Chứng minh rằng $a + b$ và $a \cdot b$ cũng nguyên tố cùng nhau.

---

## III. Lời giải chi tiết

### Bài 1
$84 = 2^2 \cdot 3 \cdot 7$, $\quad 108 = 2^2 \cdot 3^3$, $\quad 180 = 2^2 \cdot 3^2 \cdot 5$.
- ƯCLN: thừa số chung là $2$ và $3$, số mũ nhỏ nhất là $2$ và $1$: $\text{ƯCLN} = 2^2 \cdot 3 = 12$.
- BCNN: mọi thừa số $2, 3, 5, 7$ với số mũ lớn nhất: $\text{BCNN} = 2^2 \cdot 3^3 \cdot 5 \cdot 7 = 3780$.

**Đáp số:** $\text{ƯCLN} = 12$, $\text{BCNN} = 3780$.

### Bài 2
$$4199 = 1938 \cdot 2 + 323; \qquad 1938 = 323 \cdot 6 + 0.$$
Số dư khác $0$ cuối cùng là $323$.

**Đáp số:** $\text{ƯCLN}(4199, 1938) = 323$.

*Nhận xét:* Phân tích ra thừa số nguyên tố, $4199 = 13 \cdot 17 \cdot 19$ và $1938 = 2 \cdot 3 \cdot 17 \cdot 19$, khó tìm hơn nhiều. Thuật toán Euclid chỉ cần hai phép chia.

### Bài 3
Số nhóm phải là ước chung của $96$ và $72$. Số nhóm nhiều nhất là $\text{ƯCLN}(96, 72)$.
$96 = 2^5 \cdot 3$, $72 = 2^3 \cdot 3^2$, nên $\text{ƯCLN} = 2^3 \cdot 3 = 24$.
Mỗi nhóm có $96 : 24 = 4$ nam và $72 : 24 = 3$ nữ.

**Đáp số:** nhiều nhất $24$ nhóm, mỗi nhóm $4$ nam và $3$ nữ.

### Bài 4
a) Hai xe cùng rời bến sau một số phút là bội chung của $12$ và $18$. Lần gần nhất là sau $\text{BCNN}(12, 18) = 36$ phút, tức là lúc $6$ giờ $36$ phút.

b) Hai xe cùng rời bến sau $0, 36, 72, \dots$ phút tính từ $6$ giờ. Từ $6$ giờ đến $12$ giờ là $360$ phút. Các thời điểm là $0, 36, \dots, 360$, gồm $\frac{360 - 0}{36} + 1 = 11$ lần.

**Đáp số:** a) $6$ giờ $36$ phút; b) $11$ lần.

### Bài 5
Gọi số học sinh là $x$ ($300 \le x \le 400$). Khi đó $x - 5$ chia hết cho $12$, $15$, $18$, nên $x - 5$ là bội chung của $12, 15, 18$.
$12 = 2^2 \cdot 3$, $15 = 3 \cdot 5$, $18 = 2 \cdot 3^2$, nên $\text{BCNN} = 2^2 \cdot 3^2 \cdot 5 = 180$.
$x - 5 \in \{0; 180; 360; 540; \dots\}$, suy ra $x \in \{5; 185; 365; 545; \dots\}$. Chỉ có $365$ nằm trong khoảng từ $300$ đến $400$.

**Đáp số:** $365$ học sinh.

### Bài 6
Vì mỗi góc có một cây và các cây cách đều nhau, khoảng cách phải là ước của cả $105$ và $60$. Khoảng cách lớn nhất là $\text{ƯCLN}(105, 60)$.
$105 = 3 \cdot 5 \cdot 7$, $60 = 2^2 \cdot 3 \cdot 5$, nên $\text{ƯCLN} = 15$ (m).
Chu vi vườn là $2 \cdot (105 + 60) = 330$ (m). Trồng cây trên đường khép kín thì số cây bằng số khoảng: $330 : 15 = 22$ cây.

**Đáp số:** khoảng cách lớn nhất $15$ m; trồng $22$ cây.

*Nhận xét:* Trên đường khép kín (chu vi), số cây **bằng** số khoảng; trên một đoạn thẳng có cây ở hai đầu, số cây **hơn** số khoảng là $1$.

### Bài 7
Vì $\text{ƯCLN}(a, b) = 18$, đặt $a = 18m$, $b = 18n$ với $\text{ƯCLN}(m, n) = 1$. Giả sử $a \le b$, tức $m \le n$.
$18m + 18n = 162$, nên $m + n = 9$. Các cặp $(m; n)$ với $m \le n$ và $m + n = 9$ là $(1; 8), (2; 7), (3; 6), (4; 5)$. Cặp $(3; 6)$ có ước chung $3$ nên bị loại.
Còn lại: $(m; n) \in \{(1; 8), (2; 7), (4; 5)\}$, cho $(a; b) \in \{(18; 144), (36; 126), (72; 90)\}$.

**Đáp số:** $(a; b)$ là $(18; 144)$, $(36; 126)$, $(72; 90)$ và các cặp đổi chỗ.

### Bài 8
$\text{ƯCLN}(a, b) = \frac{a \cdot b}{\text{BCNN}(a, b)} = \frac{2940}{210} = 14$.
Đặt $a = 14m$, $b = 14n$ với $\text{ƯCLN}(m, n) = 1$, $m \le n$. Khi đó $\text{BCNN} = 14mn = 210$, nên $mn = 15$.
Các cặp: $(1; 15)$ và $(3; 5)$, đều nguyên tố cùng nhau.

**Đáp số:** $(a; b) = (14; 210)$ hoặc $(42; 70)$.

### Bài 9
Gọi $d = \text{ƯCLN}(2n + 1, 3n + 1)$. Khi đó $d$ là ước của $3(2n + 1) = 6n + 3$ và của $2(3n + 1) = 6n + 2$.
Do đó $d$ là ước của $(6n + 3) - (6n + 2) = 1$, nên $d = 1$.

Vậy $2n + 1$ và $3n + 1$ nguyên tố cùng nhau.

### Bài 10
Gọi số cần tìm là $n$. Nhân đôi: $2n$ chia cho $3$ dư như $2 \cdot 2 = 4$, tức dư $1$; chia cho $5$ dư như $2 \cdot 3 = 6$, tức dư $1$; chia cho $7$ dư như $2 \cdot 4 = 8$, tức dư $1$.
Vậy $2n - 1$ chia hết cho $3$, $5$, $7$, nên là bội của $\text{BCNN}(3, 5, 7) = 105$. Vì $2n - 1$ là số lẻ, nó là bội lẻ của $105$: $105, 315, 525, \dots$
Nhỏ nhất: $2n - 1 = 105$, suy ra $n = 53$.

Thử lại: $53 = 3 \cdot 17 + 2 = 5 \cdot 10 + 3 = 7 \cdot 7 + 4$.

**Đáp số:** $53$.

*Nhận xét:* Ba số dư $2, 3, 4$ không cùng "kém số chia" một lượng như nhau. Mẹo nhân đôi biến ba số dư thành cùng một số dư $1$, khi đó dùng được BCNN.

### Bài 11
Gọi $d = \text{ƯCLN}(18n + 3, 21n + 7)$. Khi đó $d$ là ước của
$$7(18n + 3) = 126n + 21 \quad\text{và}\quad 6(21n + 7) = 126n + 42,$$
nên $d$ là ước của $(126n + 42) - (126n + 21) = 21$. Vậy $d \in \{1; 3; 7; 21\}$.
- $21n + 7 = 21n + 6 + 1$ chia cho $3$ dư $1$, nên $d$ không chia hết cho $3$. Do đó $d \in \{1; 7\}$.
- $21n + 7 = 7(3n + 1)$ luôn chia hết cho $7$. Vậy $d = 7$ khi và chỉ khi $18n + 3 \,\vdots\, 7$.
  $18n + 3 = 14n + (4n + 3)$, nên cần $4n + 3 \,\vdots\, 7$. Xét $n = 7k + r$ ($r = 0, 1, \dots, 6$): $4n + 3$ chia cho $7$ có cùng số dư với $4r + 3 \in \{3; 7; 11; 15; 19; 23; 27\}$; chỉ có $7$ chia hết cho $7$, ứng với $r = 1$.

Vậy $d = 7$ khi $n = 7k + 1$, còn lại $d = 1$.

**Đáp số:** hai số nguyên tố cùng nhau khi và chỉ khi $n$ chia cho $7$ không dư $1$ (tức $n \ne 7k + 1$).

### Bài 12
Gọi $d = \text{ƯCLN}(a, b)$, $a = dm$, $b = dn$, $\text{ƯCLN}(m, n) = 1$, $m \le n$. Khi đó $\text{BCNN} = dmn$ và
$$dmn - d = 35, \quad\text{tức là}\quad d(mn - 1) = 35.$$
Vậy $d$ là ước của $35$: $d \in \{1; 5; 7; 35\}$.
- $d = 1$: $mn = 36$. Các cặp nguyên tố cùng nhau: $(1; 36)$, $(4; 9)$. Được $(1; 36)$, $(4; 9)$.
- $d = 5$: $mn = 8$. Cặp nguyên tố cùng nhau: $(1; 8)$. Được $(5; 40)$.
- $d = 7$: $mn = 6$. Các cặp: $(1; 6)$, $(2; 3)$. Được $(7; 42)$, $(14; 21)$.
- $d = 35$: $mn = 2$. Cặp: $(1; 2)$. Được $(35; 70)$.

(Các cặp như $(2; 18)$, $(3; 12)$, $(6; 6)$ với tích $36$ hay $(2; 4)$ với tích $8$ bị loại vì $m$, $n$ có ước chung khác $1$.)

**Đáp số:** $(a; b) \in \{(1; 36), (4; 9), (5; 40), (7; 42), (14; 21), (35; 70)\}$.

### Bài 13
Giả sử $a + b$ và $ab$ có một ước chung lớn hơn $1$. Khi đó chúng có một ước chung là số nguyên tố $p$.
- $p$ là ước của $ab$ nên $p$ là ước của $a$ hoặc của $b$. Giả sử $p$ là ước của $a$.
- $p$ là ước của $a + b$ và của $a$ nên $p$ là ước của $(a + b) - a = b$.

Vậy $p$ là ước chung của $a$ và $b$, trái với giả thiết $\text{ƯCLN}(a, b) = 1$. Do đó $\text{ƯCLN}(a + b, ab) = 1$.

*Nhận xét:* Lập luận "nếu có ước chung lớn hơn $1$ thì có ước chung nguyên tố" rất hay dùng, vì với số nguyên tố ta có tính chất $p \mid ab \Rightarrow p \mid a$ hoặc $p \mid b$.

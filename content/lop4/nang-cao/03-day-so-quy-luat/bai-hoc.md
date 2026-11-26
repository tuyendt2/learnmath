# Chủ đề 3. Dãy số có quy luật

> Dãy số có quy luật rèn cho em khả năng quan sát và khái quát. Đề thi thường hỏi điền số tiếp theo, tìm số hạng thứ bao nhiêu, đếm số số hạng, tính tổng dãy cách đều, hoặc tìm chữ cái thứ bao nhiêu trong một dãy lặp lại.

## I. Kiến thức cần nắm

### 1. Tìm quy luật của một dãy số
Quan sát **hiệu** hoặc **thương** giữa hai số liên tiếp, hoặc quan hệ giữa một số với các số đứng trước nó. Các quy luật hay gặp:

| Quy luật | Ví dụ | Hai số tiếp theo |
|---|---|---|
| Cộng thêm cùng một số (cách đều) | $1, 4, 7, 10, \dots$ | $13, 16$ |
| Nhân với cùng một số | $1, 2, 4, 8, 16, \dots$ | $32, 64$ |
| Mỗi số bằng tổng hai số đứng trước | $1, 1, 2, 3, 5, 8, \dots$ | $13, 21$ |
| Hiệu tăng dần $1, 2, 3, \dots$ | $1, 2, 4, 7, 11, \dots$ | $16, 22$ |
| Tích hai số liên tiếp | $2, 6, 12, 20, \dots$ ($1 \times 2$, $2 \times 3$, ...) | $30, 42$ |

### 2. Dãy cách đều: ba công thức chính
Dãy cách đều có **số đầu**, **số cuối** và **khoảng cách** $d$ (hiệu hai số liên tiếp).
$$\text{Số số hạng} = (\text{số cuối} - \text{số đầu}) : d + 1.$$
$$\text{Số hạng thứ } n = \text{số đầu} + (n - 1) \times d.$$
$$\text{Tổng} = (\text{số đầu} + \text{số cuối}) \times \text{số số hạng} : 2.$$

*Vì sao có "$+\,1$":* giống bài toán trồng cây. Từ số đầu đến số cuối có $(\text{số cuối} - \text{số đầu}) : d$ **khoảng**, mà số "cây" (số hạng) nhiều hơn số khoảng $1$.

*Vì sao số hạng thứ $n$ cộng $(n - 1)$ lần $d$:* từ số hạng thứ nhất đến số hạng thứ $n$ phải bước qua $n - 1$ khoảng.

*Vì sao công thức tổng đúng:* viết dãy xuôi, bên dưới viết dãy ngược. Mỗi cột có tổng bằng số đầu + số cuối. Hai hàng có tổng gấp đôi tổng cần tìm.

*Ví dụ:* $2 + 4 + 6 + \dots + 100$ có $(100 - 2) : 2 + 1 = 50$ số hạng, tổng bằng $(2 + 100) \times 50 : 2 = 2550$.

### 3. Một số có thuộc dãy cách đều không?
Mọi số trong dãy cách đều có **cùng số dư** khi chia cho khoảng cách $d$ (nếu $d$ nhỏ hơn số đầu thì dễ thấy nhất).

*Ví dụ:* dãy $3, 7, 11, 15, \dots$ gồm các số chia $4$ dư $3$. Số $2024$ chia hết cho $4$ nên không thuộc dãy. Số $2023$ chia $4$ dư $3$ nên thuộc dãy, là số hạng thứ $(2023 - 3) : 4 + 1 = 506$.

### 4. Dãy lặp lại theo chu kỳ
Một nhóm chữ hoặc số lặp lại mãi, ví dụ "ABCABCABC...". Muốn biết vị trí thứ $n$ là gì, lấy $n$ chia cho độ dài nhóm:
- Dư $r$ (khác $0$): là phần tử thứ $r$ của nhóm.
- Dư $0$: là phần tử **cuối** của nhóm.

*Ví dụ:* chữ thứ $100$ của "ABCABC..." có $100 = 3 \times 33 + 1$, nên là chữ A.

### 5. Hai tổng đặc biệt nên nhớ
- $1 + 2 + 3 + \dots + n = n \times (n + 1) : 2$. Ví dụ $1 + 2 + \dots + 20 = 210$.
- $1 + 3 + 5 + \dots$ ($n$ số lẻ đầu tiên) $= n \times n$. Ví dụ $1 + 3 + 5 + 7 = 16 = 4 \times 4$.

**Mẹo "gấp đôi rồi trừ"** cho dãy nhân đôi: với $S = 1 + 2 + 4 + \dots + 512$ thì $S \times 2 = 2 + 4 + \dots + 1024$. Lấy $S \times 2$ trừ $S$, các số giống nhau mất đi, còn $S = 1024 - 1 = 1023$.

### 6. Tìm các số hạng khi biết tổng
Với dãy cách đều, từ tổng và số số hạng suy ra (số đầu + số cuối) $=$ tổng $\times 2 :$ số số hạng. Biết thêm hiệu (số cuối $-$ số đầu) $= (n - 1) \times d$, ta có bài toán **tổng và hiệu**.

*Ví dụ:* năm số tự nhiên liên tiếp có tổng $100$? Số đầu + số cuối $= 100 \times 2 : 5 = 40$, số cuối hơn số đầu $4$, nên số đầu là $18$: các số $18, 19, 20, 21, 22$.

> **Sai lầm hay gặp:**
> - Quên "$+\,1$" khi đếm số số hạng, hoặc quên "$-\,1$" khi tìm số hạng thứ $n$.
> - Dãy lặp chu kỳ: phép chia dư $0$ mà lại lấy phần tử đầu tiên của nhóm (đúng ra là phần tử cuối).
> - Chỉ nhìn hai, ba số đầu đã kết luận quy luật. Cần kiểm tra quy luật với **mọi** số đã cho.

---

## II. Bài tập vận dụng

**Bài 1.** Tìm quy luật rồi viết tiếp hai số hạng của mỗi dãy:
a) $1, 4, 7, 10, \dots$
b) $1, 2, 4, 8, 16, \dots$
c) $1, 1, 2, 3, 5, 8, \dots$
d) $1, 3, 6, 10, 15, \dots$
e) $2, 6, 12, 20, 30, \dots$

**Bài 2.** Cho dãy số $5, 9, 13, 17, \dots, 401$.
a) Dãy có bao nhiêu số hạng?
b) Số hạng thứ $50$ là số nào?

**Bài 3.** Tính tổng $5 + 9 + 13 + 17 + \dots + 401$.

**Bài 4.** Cho dãy số $3, 7, 11, 15, \dots$
a) Số $2024$ có thuộc dãy không?
b) Số $2023$ có thuộc dãy không? Nếu có thì là số hạng thứ bao nhiêu?

**Bài 5.** Một dãy cách đều có khoảng cách là $7$ và số hạng thứ $30$ là $213$. Tìm số hạng đầu và số hạng thứ $50$ của dãy.

**Bài 6.** Tìm $10$ số chẵn liên tiếp có tổng bằng $210$.

**Bài 7 (dãy lặp lại).** Bạn Minh viết liên tiếp cụm chữ TOANTUDUY thành dãy
$$\text{TOANTUDUYTOANTUDUYTOANTUDUY}\dots$$
a) Chữ cái thứ $2024$ là chữ gì?
b) Trong $2024$ chữ cái đầu tiên có bao nhiêu chữ T?

**Bài 8.** Có bao nhiêu số có ba chữ số chia hết cho $4$?

**Bài 9.** Cho dãy số $1, 2, 4, 7, 11, 16, \dots$ Tìm số hạng thứ $20$ của dãy.

**Bài 10.** Tìm số tự nhiên $n$, biết $1 + 2 + 3 + \dots + n = 210$.

**Bài 11.** Tính tổng $1 + 2 + 4 + 8 + 16 + \dots + 256 + 512$.

**Bài 12.** Cho dãy số $1, 4, 7, 10, \dots, 2023$. Trong dãy có bao nhiêu số chia hết cho $5$?

**Bài 13.** Cho dãy số $1, 2, 2, 3, 3, 3, 4, 4, 4, 4, \dots$ (số $1$ viết một lần, số $2$ viết hai lần, số $3$ viết ba lần, ...). Số hạng thứ $100$ của dãy là số nào?

**Bài 14 (khó).** Một dãy cách đều có $50$ số hạng, số hạng đầu là $1$ và tổng của dãy là $4950$. Tìm khoảng cách của dãy và viết năm số hạng đầu tiên.

---

## III. Lời giải chi tiết

### Bài 1
a) Mỗi số hơn số trước $3$ đơn vị: $13, 16$.
b) Mỗi số gấp đôi số trước: $32, 64$.
c) Từ số thứ ba, mỗi số bằng tổng hai số đứng trước: $5 + 8 = 13$, $8 + 13 = 21$.
d) Hiệu hai số liên tiếp là $2, 3, 4, 5, \dots$: $15 + 6 = 21$, $21 + 7 = 28$.
e) Các số là $1 \times 2$, $2 \times 3$, $3 \times 4$, $4 \times 5$, $5 \times 6$: tiếp theo là $6 \times 7 = 42$, $7 \times 8 = 56$.
(Cũng có thể thấy hiệu tăng dần $4, 6, 8, 10, \dots$)

**Đáp số:** a) $13, 16$; b) $32, 64$; c) $13, 21$; d) $21, 28$; e) $42, 56$.

### Bài 2
Dãy cách đều, khoảng cách $4$.
a) Số số hạng: $(401 - 5) : 4 + 1 = 99 + 1 = 100$.
b) Số hạng thứ $50$: $5 + (50 - 1) \times 4 = 5 + 196 = 201$.

**Đáp số:** a) $100$ số hạng; b) $201$.

### Bài 3
Theo Bài 2, dãy có $100$ số hạng. Tổng bằng
$$(5 + 401) \times 100 : 2 = 406 \times 50 = 20300.$$
**Đáp số:** $20300$.

### Bài 4
Các số trong dãy đều có dạng $3$, $3 + 4$, $3 + 4 + 4$, ..., tức là đều **chia $4$ dư $3$**.
a) $2024 = 4 \times 506$ chia hết cho $4$, nên $2024$ không thuộc dãy.
b) $2023 = 4 \times 505 + 3$ chia $4$ dư $3$, nên thuộc dãy. Nó là số hạng thứ $(2023 - 3) : 4 + 1 = 506$.

**Đáp số:** a) không; b) có, là số hạng thứ $506$.

### Bài 5
Từ số hạng thứ nhất đến số hạng thứ $30$ có $29$ khoảng, mỗi khoảng $7$ đơn vị. Do đó số hạng đầu là
$$213 - 29 \times 7 = 213 - 203 = 10.$$
Số hạng thứ $50$: $10 + 49 \times 7 = 10 + 343 = 353$.

**Đáp số:** số hạng đầu $10$, số hạng thứ $50$ là $353$.

### Bài 6
Mười số chẵn liên tiếp tạo thành dãy cách đều, khoảng cách $2$.
- Số đầu + số cuối $= 210 \times 2 : 10 = 42$.
- Số cuối hơn số đầu $9 \times 2 = 18$.

Theo bài toán tổng và hiệu, số đầu là $(42 - 18) : 2 = 12$. Mười số là
$$12, 14, 16, 18, 20, 22, 24, 26, 28, 30.$$
*Thử lại:* $(12 + 30) \times 10 : 2 = 210$. Đúng.

**Đáp số:** $12, 14, 16, \dots, 30$.

### Bài 7
Cụm TOANTUDUY có $9$ chữ cái: T, O, A, N, T, U, D, U, Y.
a) $2024 = 9 \times 224 + 8$. Sau $224$ cụm trọn vẹn, chữ thứ $2024$ là chữ thứ $8$ của cụm, tức là chữ **U**.
b) Mỗi cụm có $2$ chữ T (vị trí $1$ và $5$). $224$ cụm có $224 \times 2 = 448$ chữ T. Phần dư $8$ chữ cái đầu của cụm tiếp theo (T, O, A, N, T, U, D, U) có thêm $2$ chữ T. Tất cả $448 + 2 = 450$ chữ T.

**Đáp số:** a) chữ U; b) $450$ chữ T.

### Bài 8
Số có ba chữ số nhỏ nhất chia hết cho $4$ là $100$, lớn nhất là $996$. Các số đó tạo thành dãy cách đều khoảng cách $4$:
$$100, 104, 108, \dots, 996.$$
Số số hạng: $(996 - 100) : 4 + 1 = 224 + 1 = 225$.

**Đáp số:** $225$ số.

### Bài 9
Hiệu giữa hai số liên tiếp lần lượt là $1, 2, 3, 4, 5, \dots$ Từ số hạng thứ nhất đến số hạng thứ $20$ có $19$ bước, các bước lần lượt cộng thêm $1, 2, \dots, 19$. Do đó
$$\text{số hạng thứ } 20 = 1 + (1 + 2 + \dots + 19) = 1 + 19 \times 20 : 2 = 1 + 190 = 191.$$
**Đáp số:** $191$.

*Nhận xét:* với dãy có hiệu tăng đều, hãy lập dãy các hiệu. Số hạng thứ $n$ bằng số đầu cộng tổng $n - 1$ hiệu đầu tiên.

### Bài 10
Theo công thức tổng, $n \times (n + 1) : 2 = 210$, nên $n \times (n + 1) = 420$. Đây là tích của hai số tự nhiên liên tiếp. Vì $20 \times 20 = 400$ gần $420$, ta thử $20 \times 21 = 420$. Đúng.

**Đáp số:** $n = 20$.

### Bài 11
Gọi tổng là $S$. Gấp đôi mỗi số hạng:
$$S \times 2 = 2 + 4 + 8 + \dots + 512 + 1024.$$
So sánh hai tổng: $S \times 2$ có thêm số $1024$ nhưng thiếu số $1$, các số còn lại giống nhau. Vậy
$$S \times 2 - S = 1024 - 1, \quad\text{tức là}\quad S = 1023.$$
**Đáp số:** $1023$.

*Nhận xét:* mẹo "gấp đôi rồi trừ" dùng được cho mọi dãy mà mỗi số gấp đôi số trước.

### Bài 12
Các số trong dãy đều chia $3$ dư $1$. Số $2023$ chia $3$ dư $1$, nên dãy đúng là kết thúc ở $2023$.

Viết vài số đầu của dãy: $1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34, 37, 40, \dots$ Các số chia hết cho $5$ là $10, 25, 40, \dots$, cứ cách nhau $15$.

*Vì sao cách nhau $15$:* trong dãy, cứ đi $5$ bước (mỗi bước $3$ đơn vị) thì tăng $15$, chữ số tận cùng lại quay về như cũ. Đi ít hơn $5$ bước thì tăng $3, 6, 9$ hoặc $12$, không chia hết cho $5$.

Các số cần đếm là
$$10, 25, 40, \dots$$
Số lớn nhất không vượt quá $2023$ trong dãy này: $2023 - 10 = 2013 = 15 \times 134 + 3$, nên số lớn nhất là $10 + 15 \times 134 = 2020$. Số các số: $(2020 - 10) : 15 + 1 = 134 + 1 = 135$.

**Đáp số:** $135$ số.

### Bài 13
Số $n$ chiếm các vị trí kết thúc tại vị trí thứ $1 + 2 + \dots + n$.
- Số $13$ kết thúc tại vị trí $1 + 2 + \dots + 13 = 91$.
- Số $14$ chiếm các vị trí từ $92$ đến $91 + 14 = 105$.

Vị trí $100$ nằm trong khoảng từ $92$ đến $105$, nên số hạng thứ $100$ là $14$.

**Đáp số:** $14$.

### Bài 14
- Số đầu + số cuối $= 4950 \times 2 : 50 = 198$, nên số cuối là $198 - 1 = 197$.
- Từ số đầu đến số cuối có $50 - 1 = 49$ khoảng, nên khoảng cách là $(197 - 1) : 49 = 196 : 49 = 4$.

Năm số hạng đầu: $1, 5, 9, 13, 17$.

*Thử lại:* dãy $1, 5, \dots, 197$ có $(197 - 1) : 4 + 1 = 50$ số hạng, tổng $(1 + 197) \times 50 : 2 = 4950$. Đúng.

**Đáp số:** khoảng cách $4$; năm số hạng đầu là $1, 5, 9, 13, 17$.

*Nhận xét:* công thức tổng dãy cách đều dùng được theo cả hai chiều: biết dãy tính tổng, hoặc biết tổng tìm lại dãy.

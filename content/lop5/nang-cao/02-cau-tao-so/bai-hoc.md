# Chủ đề 2. Cấu tạo số tự nhiên, số thập phân

> Các bài "viết thêm chữ số", "xóa chữ số", "dời dấu phẩy", "đánh số trang sách" xuất hiện rất thường xuyên trong đề thi vào lớp 6. Chìa khóa là **viết số thành tổng theo hàng** rồi so sánh số cũ với số mới.

## I. Kiến thức cần nắm

> **Ý tưởng xuyên suốt:** mỗi chữ số có giá trị tùy theo **hàng** của nó. Chữ số $3$ trong $305$ là $300$, trong $3{,}05$ là $3$, trong $0{,}35$ chỉ là $\frac{3}{10}$. Khi viết thêm, xóa bớt chữ số hay dời dấu phẩy, ta đã làm thay đổi hàng của các chữ số.

### 1. Viết số thành tổng theo hàng
Dấu gạch ngang trên đầu cho biết đó là một số viết bởi các chữ số, không phải tích:
$$\overline{ab} = 10 \times a + b, \qquad \overline{abc} = 100 \times a + 10 \times b + c, \qquad \overline{abcd} = 1000 \times a + 100 \times b + 10 \times c + d.$$
Chữ số đầu tiên ($a$) khác $0$. Các chữ số còn lại có thể bằng $0$.

Hay dùng cách tách gọn hơn: $\overline{abc} = \overline{ab} \times 10 + c$ và $\overline{abc} = a \times 100 + \overline{bc}$.

Với số thập phân: $\overline{a{,}bc} = a + \frac{b}{10} + \frac{c}{100}$, ví dụ $7{,}25 = 7 + \frac{2}{10} + \frac{5}{100}$.

*Ví dụ:* tìm $\overline{ab}$ biết $\overline{ab} + \overline{ba} = 121$ và $a - b = 5$. Ta có $\overline{ab} + \overline{ba} = 11 \times a + 11 \times b = 11 \times (a + b)$, nên $a + b = 11$. Tổng $11$, hiệu $5$: $a = 8$, $b = 3$. Số cần tìm là $83$.

### 2. Viết thêm hoặc xóa chữ số
| Thao tác | Số mới so với số cũ $n$ |
|---|---|
| Viết thêm chữ số $0$ vào bên phải | gấp $10$ lần: $n \times 10$ |
| Viết thêm chữ số $c$ vào bên phải | $n \times 10 + c$ |
| Viết thêm chữ số $c$ vào bên trái số có $2$ chữ số | $c \times 100 + n$ |
| Viết thêm chữ số $c$ vào bên trái số có $3$ chữ số | $c \times 1000 + n$ |
| Xóa chữ số hàng đơn vị $c$ | số cũ $= \text{số mới} \times 10 + c$ |

*Vì sao viết thêm $0$ bên phải thì gấp 10 lần?* Mọi chữ số đều bị đẩy lên một hàng: đơn vị thành chục, chục thành trăm, ... nên giá trị mỗi chữ số gấp 10 lần.

**Cách giải bằng sơ đồ:** coi số cũ là $1$ phần. Viết thêm $0$ bên phải thì số mới là $10$ phần, hiệu là $9$ phần, tổng là $11$ phần.

*Ví dụ:* viết thêm chữ số $0$ vào bên phải một số thì được số mới hơn số cũ $612$. Hiệu là $9$ phần, nên số cũ là $612 : 9 = 68$.

### 3. Dời dấu phẩy của số thập phân
- Dời dấu phẩy sang **phải** $1$, $2$, $3$ hàng: số **gấp** $10$, $100$, $1000$ lần.
- Dời dấu phẩy sang **trái** $1$, $2$, $3$ hàng: số **giảm** $10$, $100$, $1000$ lần.
- **Xóa dấu phẩy** của số có $k$ chữ số ở phần thập phân chính là dời dấu phẩy sang phải $k$ hàng.

| Thao tác trên số cũ | Số mới | Hiệu | Tổng |
|---|---|---|---|
| Dời phẩy sang phải 1 hàng | $10$ phần | $9$ phần | $11$ phần |
| Dời phẩy sang phải 2 hàng | $100$ phần | $99$ phần | $101$ phần |
| Dời phẩy sang trái 1 hàng | $\frac{1}{10}$ số cũ | $\frac{9}{10}$ số cũ | $\frac{11}{10}$ số cũ |

*Ví dụ:* dời dấu phẩy của một số sang phải một hàng thì số tăng thêm $22{,}5$. Hiệu $9$ phần, số đó là $22{,}5 : 9 = 2{,}5$.

### 4. Đếm chữ số và đánh số trang
- Từ $1$ đến $9$: $9$ số có $1$ chữ số, dùng $9$ chữ số.
- Từ $10$ đến $99$: $90$ số có $2$ chữ số, dùng $180$ chữ số.
- Từ $100$ đến $999$: $900$ số có $3$ chữ số, dùng $2700$ chữ số.

Muốn đếm số chữ số dùng để viết các số từ $1$ đến $n$, cộng dần theo từng nhóm. Muốn tìm **chữ số thứ $k$** trong dãy $123456789101112\dots$, bớt dần các nhóm, rồi chia phần còn lại cho số chữ số của mỗi số.

*Ví dụ:* viết các số từ $1$ đến $40$ cần $9 + 31 \times 2 = 71$ chữ số (từ $10$ đến $40$ có $31$ số).

### 5. Số lớn nhất, số nhỏ nhất
- Hai số có **số chữ số khác nhau** thì số nào nhiều chữ số hơn thì lớn hơn.
- Cùng số chữ số: so sánh từ trái sang phải, chữ số đầu tiên khác nhau quyết định.
- Muốn số **lớn nhất**: nhiều chữ số nhất có thể, rồi chữ số ở hàng cao càng lớn càng tốt.
- Muốn số **nhỏ nhất**: ít chữ số nhất có thể, rồi chữ số ở hàng cao càng nhỏ càng tốt (chữ số đầu khác $0$).

### 6. Phương pháp chặn chữ số
Khi gặp đẳng thức như $111 \times a + 11 \times b + c = 874$, hãy xét **chữ số ở hàng cao nhất trước**. Vì $b$, $c$ không vượt quá $9$ nên phần $11 \times b + c$ không quá $108$. Từ đó chỉ còn một giá trị của $a$ thỏa mãn. Làm tiếp như vậy với $b$, rồi $c$.

### 7. Sai lầm hay gặp
- Quên rằng chữ số đầu tiên phải khác $0$, nên nhận cả đáp án như $\overline{0b}$.
- Coi $\overline{ab}$ là $a \times b$. Thật ra $\overline{ab} = 10 \times a + b$.
- Khi viết thêm chữ số vào **bên trái**, giá trị thêm vào phụ thuộc số chữ số của số cũ: thêm $5$ vào bên trái số có $2$ chữ số là thêm $500$, không phải $50$.
- Đếm số trang mà quên "$+1$": từ trang $10$ đến trang $99$ có $90$ trang, không phải $89$.

---

## II. Bài tập vận dụng

**Bài 1.** a) Tìm một số thập phân, biết nếu dời dấu phẩy của nó sang phải một hàng thì được số mới lớn hơn số đã cho $41{,}22$ đơn vị.
b) Tìm một số thập phân, biết nếu dời dấu phẩy của nó sang phải một hàng rồi cộng với số đã cho thì được $109{,}67$.

**Bài 2.** Tổng của hai số thập phân là $55{,}22$. Nếu dời dấu phẩy của số bé sang phải một hàng thì được số lớn. Tìm hai số đó.

**Bài 3.** Một số thập phân có hai chữ số ở phần thập phân. Nếu xóa dấu phẩy của số đó thì được số tự nhiên lớn hơn số đã cho $2015{,}64$ đơn vị. Tìm số thập phân đó.

**Bài 4.** Tìm số có hai chữ số, biết nếu viết thêm chữ số $5$ vào bên trái số đó thì được số mới gấp $26$ lần số đã cho.

**Bài 5.** Khi xóa chữ số $7$ ở hàng đơn vị của một số tự nhiên thì số đó giảm đi $1807$ đơn vị. Tìm số đó.

**Bài 6.** Tìm số có hai chữ số $\overline{ab}$, biết $\overline{ab} \times 9 = \overline{a0b}$.

**Bài 7.** Tìm số $\overline{abc}$, biết $\overline{abc} + \overline{ab} + a = 874$.

**Bài 8.** Tìm tất cả các số có hai chữ số, biết mỗi số bằng $7$ lần tổng các chữ số của nó.

**Bài 9 (đánh số trang).** a) Để đánh số trang một quyển sách dày $256$ trang (bắt đầu từ trang $1$) cần dùng bao nhiêu chữ số?
b) Một quyển sách khác được đánh số trang hết tất cả $1995$ chữ số. Quyển sách đó có bao nhiêu trang?

**Bài 10.** Viết liên tiếp các số tự nhiên bắt đầu từ $1$ thành dãy chữ số $123456789101112131415\dots$ Chữ số thứ $2024$ của dãy là chữ số nào?

**Bài 11.** Tìm số tự nhiên lớn nhất và số tự nhiên nhỏ nhất có các chữ số khác nhau mà tổng các chữ số bằng $20$.

**Bài 12.** Tìm số $\overline{abcd}$, biết $\overline{abcd} + \overline{abc} + \overline{ab} + a = 4321$.

**Bài 13 (khó).** Tìm tất cả các số có bốn chữ số, biết nếu xóa chữ số hàng nghìn thì số đó giảm đi $9$ lần.

---

## III. Lời giải chi tiết

### Bài 1
a) Dời dấu phẩy sang phải một hàng thì số mới gấp $10$ lần số đã cho. Coi số đã cho là $1$ phần thì số mới là $10$ phần, hiệu là $10 - 1 = 9$ phần.
Số đã cho là $41{,}22 : 9 = 4{,}58$.
*Thử lại:* $45{,}8 - 4{,}58 = 41{,}22$.

b) Số mới là $10$ phần, số đã cho là $1$ phần, tổng là $11$ phần.
Số đã cho là $109{,}67 : 11 = 9{,}97$.
*Thử lại:* $99{,}7 + 9{,}97 = 109{,}67$.

**Đáp số:** a) $4{,}58$; b) $9{,}97$.

### Bài 2
Dời dấu phẩy của số bé sang phải một hàng thì được số lớn, nên số lớn gấp $10$ lần số bé.
Coi số bé là $1$ phần thì số lớn là $10$ phần, tổng là $11$ phần.
Số bé: $55{,}22 : 11 = 5{,}02$. Số lớn: $5{,}02 \times 10 = 50{,}2$.

**Đáp số:** $5{,}02$ và $50{,}2$.

### Bài 3
Số có hai chữ số ở phần thập phân, xóa dấu phẩy chính là dời dấu phẩy sang phải hai hàng. Số mới gấp $100$ lần số đã cho.
Coi số đã cho là $1$ phần thì số mới là $100$ phần, hiệu là $99$ phần.
Số đã cho là $2015{,}64 : 99 = 20{,}36$.
*Thử lại:* $2036 - 20{,}36 = 2015{,}64$.

**Đáp số:** $20{,}36$.

*Nhận xét:* trước khi lập sơ đồ, hãy xác định số mới **gấp mấy lần** số cũ. Số chữ số ở phần thập phân quyết định điều đó.

### Bài 4
Gọi số cần tìm là $\overline{ab}$. Viết thêm $5$ vào bên trái được $\overline{5ab} = 500 + \overline{ab}$.
Theo đề bài, số mới gấp $26$ lần $\overline{ab}$. Coi $\overline{ab}$ là $1$ phần thì số mới là $26$ phần. Số mới hơn $\overline{ab}$ đúng $500$, ứng với $26 - 1 = 25$ phần.
Vậy $\overline{ab} = 500 : 25 = 20$.
*Thử lại:* $520 = 20 \times 26$.

**Đáp số:** $20$.

### Bài 5
Khi xóa chữ số $7$ ở hàng đơn vị, ta được số mới. Số cũ bằng số mới nhân $10$ rồi cộng $7$.
Coi số mới là $1$ phần thì số cũ là $10$ phần cộng thêm $7$. Số cũ hơn số mới $9$ phần cộng $7$, tức là
$$9 \text{ phần} + 7 = 1807 \quad\Rightarrow\quad 9 \text{ phần} = 1800 \quad\Rightarrow\quad 1 \text{ phần} = 200.$$
Số mới là $200$, số cũ là $2007$.
*Thử lại:* $2007 - 200 = 1807$.

**Đáp số:** $2007$.

### Bài 6
Viết theo hàng: $\overline{a0b} = 100 \times a + b$ và $\overline{ab} \times 9 = (10 \times a + b) \times 9 = 90 \times a + 9 \times b$.
Hai số bằng nhau nên
$$100 \times a + b = 90 \times a + 9 \times b.$$
Bớt $90 \times a$ và $b$ ở cả hai bên: $10 \times a = 8 \times b$, tức là $5 \times a = 4 \times b$.
Vì $4 \times b$ chia hết cho $5$ nên $b = 0$ hoặc $b = 5$. Nếu $b = 0$ thì $a = 0$, loại. Vậy $b = 5$, $a = 4$.
*Thử lại:* $45 \times 9 = 405$.

**Đáp số:** $45$.

### Bài 7
Viết theo hàng:
$$\overline{abc} + \overline{ab} + a = (100a + 10b + c) + (10a + b) + a = 111 \times a + 11 \times b + c.$$
Vậy $111 \times a + 11 \times b + c = 874$.
- Vì $b, c \le 9$ nên $11 \times b + c \le 99 + 9 = 108$. Do đó $111 \times a \ge 874 - 108 = 766$, mà $111 \times a \le 874$. Chỉ có $a = 7$ thỏa mãn ($111 \times 7 = 777$).
- Khi đó $11 \times b + c = 874 - 777 = 97$. Vì $c \le 9$ nên $11 \times b \ge 88$, mà $11 \times b \le 97$, nên $b = 8$, $c = 97 - 88 = 9$.

*Thử lại:* $789 + 78 + 7 = 874$.

**Đáp số:** $789$.

*Nhận xét:* đây là **phương pháp chặn**: chữ số hàng thấp bị giới hạn bởi $9$, nên phần hàng cao chỉ có một khả năng.

### Bài 8
Gọi số đó là $\overline{ab}$ với $a \ne 0$. Ta có
$$10 \times a + b = 7 \times (a + b) = 7 \times a + 7 \times b.$$
Bớt $7 \times a$ và $b$ ở hai bên: $3 \times a = 6 \times b$, tức là $a = 2 \times b$.
Vì $a$ là chữ số từ $1$ đến $9$ nên $b$ có thể là $1$, $2$, $3$, $4$, tương ứng $a = 2$, $4$, $6$, $8$.

*Thử lại:* $21 = 7 \times 3$; $42 = 7 \times 6$; $63 = 7 \times 9$; $84 = 7 \times 12$.

**Đáp số:** $21$; $42$; $63$; $84$.

### Bài 9
a) Trang $1$ đến trang $9$: $9$ chữ số. Trang $10$ đến trang $99$: $90$ trang, $180$ chữ số. Trang $100$ đến trang $256$: $256 - 100 + 1 = 157$ trang, $157 \times 3 = 471$ chữ số.
Tổng cộng: $9 + 180 + 471 = 660$ chữ số.

b) Các trang $1$ đến $99$ dùng hết $9 + 180 = 189$ chữ số. Vì $1995 > 189$ nên sách có trang ba chữ số.
Số chữ số dùng cho các trang có ba chữ số: $1995 - 189 = 1806$. Số trang có ba chữ số: $1806 : 3 = 602$.
Số trang của sách: $99 + 602 = 701$ trang.

**Đáp số:** a) $660$ chữ số; b) $701$ trang.

### Bài 10
Các số từ $1$ đến $99$ chiếm $9 + 180 = 189$ chữ số đầu tiên.
Còn lại $2024 - 189 = 1835$ chữ số thuộc các số có ba chữ số, bắt đầu từ $100$.
Ta có $1835 = 3 \times 611 + 2$. Vậy sau $189$ chữ số đầu là đủ $611$ số có ba chữ số (từ $100$ đến $100 + 611 - 1 = 710$), rồi thêm $2$ chữ số của số tiếp theo là $711$.
Chữ số thứ $2024$ là chữ số thứ hai của $711$, tức là chữ số $1$.

**Đáp số:** chữ số $1$.

### Bài 11
**Số lớn nhất.** Các chữ số khác nhau nhỏ nhất là $0, 1, 2, 3, 4, 5, 6$, tổng bằng $21 > 20$. Vậy số không thể có $7$ chữ số trở lên. Ta tìm số có $6$ chữ số.
Muốn số lớn nhất thì chữ số hàng cao nhất phải lớn nhất. Chọn chữ số đầu là $9$, năm chữ số còn lại khác nhau có tổng $20 - 9 = 11$. Năm chữ số nhỏ nhất $0 + 1 + 2 + 3 + 4 = 10$, nên phải thay $4$ bằng $5$: được $0, 1, 2, 3, 5$. Xếp giảm dần: $953210$.

**Số nhỏ nhất.** Số có hai chữ số có tổng chữ số lớn nhất là $9 + 8 = 17 < 20$, nên số phải có ít nhất $3$ chữ số. Ta tìm số có $3$ chữ số $\overline{abc}$ với $a$ nhỏ nhất.
Vì $b + c \le 9 + 8 = 17$ nên $a \ge 20 - 17 = 3$. Chọn $a = 3$, khi đó $b + c = 17$, chỉ có thể là $8$ và $9$. Số nhỏ nhất là $389$.

**Đáp số:** lớn nhất $953210$; nhỏ nhất $389$.

### Bài 12
Viết theo hàng:
$$\overline{abcd} + \overline{abc} + \overline{ab} + a = 1111 \times a + 111 \times b + 11 \times c + d = 4321.$$
- Phần $111 \times b + 11 \times c + d$ không quá $999 + 99 + 9 = 1107$. Nếu $a \le 2$ thì vế trái không quá $2222 + 1107 = 3329 < 4321$. Nếu $a \ge 4$ thì $1111 \times a \ge 4444 > 4321$. Vậy $a = 3$, còn $111 \times b + 11 \times c + d = 4321 - 3333 = 988$.
- Phần $11 \times c + d$ không quá $108$. Nếu $b \le 7$ thì $111 \times b + 108 \le 885 < 988$. Nếu $b = 9$ thì $999 > 988$. Vậy $b = 8$, còn $11 \times c + d = 988 - 888 = 100$.
- Nếu $c \le 8$ thì $11 \times c + d \le 88 + 9 = 97 < 100$. Vậy $c = 9$, $d = 100 - 99 = 1$.

*Thử lại:* $3891 + 389 + 38 + 3 = 4321$.

**Đáp số:** $3891$.

### Bài 13
Gọi số cần tìm là $\overline{abcd}$, xóa chữ số hàng nghìn được $\overline{bcd}$. Ta có $\overline{abcd} = a \times 1000 + \overline{bcd}$.
Số cũ gấp $9$ lần số mới. Coi $\overline{bcd}$ là $1$ phần thì $\overline{abcd}$ là $9$ phần. Số cũ hơn số mới đúng $a \times 1000$, ứng với $8$ phần:
$$8 \text{ phần} = a \times 1000 \quad\Rightarrow\quad 1 \text{ phần} = a \times 125.$$
Vậy $\overline{bcd} = 125 \times a$ và $\overline{abcd} = 9 \times 125 \times a = 1125 \times a$.
Số $\overline{abcd}$ có bốn chữ số nên $1125 \times a \le 9999$, tức là $a \le 8$. Thử từng giá trị, nhưng còn phải kiểm tra chữ số hàng nghìn của $1125 \times a$ đúng bằng $a$:

| $a$ | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ | $7$ | $8$ |
|---|---|---|---|---|---|---|---|---|
| $1125 \times a$ | $1125$ | $2250$ | $3375$ | $4500$ | $5625$ | $6750$ | $7875$ | $9000$ |
| Chữ số hàng nghìn bằng $a$? | có | có | có | có | có | có | có | không |

Với $a = 8$ thì $1125 \times 8 = 9000$ có chữ số hàng nghìn là $9$, loại (tương ứng $125 \times 8 = 1000$ không phải là số có ba chữ số).

**Đáp số:** $1125$; $2250$; $3375$; $4500$; $5625$; $6750$; $7875$.

*Nhận xét:* bài có nhiều đáp số. Đừng dừng lại khi tìm được một số; hãy xét hết các giá trị của chữ số và thử lại từng trường hợp.

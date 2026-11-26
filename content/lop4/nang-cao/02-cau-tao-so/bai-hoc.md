# Chủ đề 2. Cấu tạo số và chữ số

> Mỗi số tự nhiên được tạo nên từ các chữ số theo hàng. Biết "tách" một số theo hàng, em giải được rất nhiều bài thi: tìm số khi thêm hoặc xóa chữ số, đếm chữ số khi viết dãy số, đánh số trang sách, lập số theo điều kiện.

## I. Kiến thức cần nắm

### 1. Phân tích một số theo hàng
Ta viết $\overline{abc}$ (có gạch ngang trên đầu) để chỉ **số** có ba chữ số $a$, $b$, $c$, với $a \ne 0$. Không viết gạch ngang thì $abc$ có nghĩa là tích $a \times b \times c$.

$$\overline{ab} = a \times 10 + b, \qquad \overline{abc} = a \times 100 + b \times 10 + c, \qquad \overline{abcd} = a \times 1000 + b \times 100 + c \times 10 + d.$$

Cũng có thể tách theo **nhóm**:
$$\overline{abc} = \overline{ab} \times 10 + c = a \times 100 + \overline{bc}, \qquad \overline{abcd} = \overline{ab} \times 100 + \overline{cd}.$$

*Ví dụ:* $\overline{ab} + \overline{ba} = (a \times 10 + b) + (b \times 10 + a) = (a + b) \times 11$. Vậy tổng của một số có hai chữ số và số viết ngược lại luôn chia hết cho $11$.

### 2. Viết thêm hoặc xóa chữ số
| Thao tác | Số mới | Ví dụ |
|---|---|---|
| Viết thêm chữ số $0$ vào bên phải | gấp $10$ lần số cũ | $25 \to 250$ |
| Viết thêm chữ số $d$ vào bên phải | số cũ $\times 10 + d$ | $25 \to 257 = 25 \times 10 + 7$ |
| Viết thêm chữ số $d$ vào bên trái số có $2$ chữ số | $d \times 100 +$ số cũ | $25 \to 325 = 300 + 25$ |
| Xóa chữ số hàng đơn vị | số mới bằng (số cũ $- d$) $: 10$ | $257 \to 25$ |

**Mẹo dùng sơ đồ:** khi viết thêm chữ số vào bên phải, số mới gồm **10 lần số cũ** cộng thêm chữ số đó. So với số cũ, số mới hơn $9$ lần số cũ cộng chữ số đó. Khi đó bài toán thường trở thành "tìm một số khi biết $9$ lần nó cộng thêm bao nhiêu".

*Ví dụ:* viết thêm chữ số $5$ vào bên phải một số thì số đó tăng thêm $230$. Ta có $9$ lần số cũ cộng $5$ bằng $230$, nên $9$ lần số cũ là $225$, số cũ là $25$.

### 3. Đếm chữ số khi viết dãy số
- Từ $1$ đến $9$: $9$ số có $1$ chữ số, dùng $9$ chữ số.
- Từ $10$ đến $99$: $90$ số có $2$ chữ số, dùng $180$ chữ số.
- Từ $100$ đến $999$: $900$ số có $3$ chữ số, dùng $2700$ chữ số.

*Ví dụ:* đánh số trang sách từ $1$ đến $150$ cần $9 + 180 + (150 - 99) \times 3 = 342$ chữ số.

**Bài toán ngược** (biết số chữ số, tìm số trang): trừ dần $9$, rồi $180$, phần còn lại chia cho $3$ (hoặc $4$).

### 4. Lập số theo điều kiện, số lớn nhất và nhỏ nhất
- Muốn số **lớn nhất**: chữ số lớn đặt ở hàng cao. Muốn số **nhỏ nhất**: chữ số nhỏ đặt ở hàng cao, nhưng **chữ số hàng cao nhất phải khác $0$**.
- Đếm số các số lập được: chọn lần lượt từng hàng, nhân số cách chọn. Ví dụ từ bốn chữ số $1, 2, 3, 4$ lập số có ba chữ số khác nhau: hàng trăm có $4$ cách, hàng chục còn $3$ cách, hàng đơn vị còn $2$ cách, tất cả $4 \times 3 \times 2 = 24$ số.
- Nếu có chữ số $0$: hàng cao nhất không được chọn $0$, nên xét hàng này trước.

### 5. Tổng các chữ số, số viết ngược
- Đếm số có ba chữ số có tổng chữ số cho trước: **xét lần lượt từng giá trị của chữ số hàng trăm**, rồi liệt kê.
- $\overline{ab} - \overline{ba} = (a - b) \times 9$ (khi $a > b$). Hiệu của một số có hai chữ số và số viết ngược luôn chia hết cho $9$.

### 6. Phương pháp chung cho bài "tìm số"
1. Viết số cần tìm dưới dạng $\overline{ab}$, $\overline{abc}$, ...
2. Dùng phân tích theo hàng để chuyển điều kiện thành một quan hệ giữa các hàng.
3. **Bỏ đi phần giống nhau ở hai bên** (như trên cân thăng bằng, bớt cùng một lượng ở hai đĩa).
4. Thử các giá trị chữ số có thể ($0$ đến $9$, hàng cao nhất khác $0$) và **thử lại**.

> **Sai lầm hay gặp:**
> - Nhầm $\overline{ab}$ (số có hai chữ số) với $a \times b$ (tích hai chữ số).
> - Quên điều kiện chữ số hàng cao nhất khác $0$ khi lập số hay đếm số.
> - Đếm chữ số từ $1$ đến $150$ mà quên rằng các số từ $1$ đến $9$ chỉ có một chữ số.

---

## II. Bài tập vận dụng

**Bài 1.** Từ bốn chữ số $0, 1, 2, 3$:
a) Lập được bao nhiêu số có ba chữ số khác nhau?
b) Trong các số đó có bao nhiêu số chẵn?

**Bài 2.** Tìm số lớn nhất và số nhỏ nhất có năm chữ số khác nhau mà tổng các chữ số bằng $10$.

**Bài 3 (đánh số trang).**
a) Để đánh số trang một quyển sách dày $150$ trang (bắt đầu từ trang $1$) cần dùng bao nhiêu chữ số?
b) Để đánh số trang một quyển sách khác, người ta dùng hết $600$ chữ số. Quyển sách đó dày bao nhiêu trang?

**Bài 4.** Tìm số có hai chữ số, biết rằng nếu viết thêm chữ số $5$ vào bên phải số đó thì được số mới hơn số đã cho $230$ đơn vị.

**Bài 5.** Tìm số có hai chữ số, biết rằng nếu viết thêm chữ số $2$ vào bên trái số đó thì được số mới gấp $9$ lần số đã cho.

**Bài 6.** Tìm tất cả các số có hai chữ số, biết số đó gấp $4$ lần tổng các chữ số của nó.

**Bài 7.** Tìm số $\overline{ab}$, biết $\overline{ab} + \overline{ba} = 132$ và $\overline{ab} - \overline{ba} = 36$.

**Bài 8.** Tìm số có ba chữ số, biết rằng nếu xóa chữ số hàng trăm thì được số mới kém số đã cho $7$ lần.

**Bài 9.** Tìm số tự nhiên, biết rằng nếu xóa chữ số hàng đơn vị của nó thì số đó giảm đi $1992$ đơn vị.

**Bài 10.** Tìm số có hai chữ số, biết rằng nếu viết thêm chữ số $1$ vào cả bên trái và bên phải số đó thì được số mới gấp $23$ lần số đã cho.

**Bài 11.** Tìm số $\overline{abcd}$, biết $\overline{abcd} + \overline{abc} + \overline{ab} + a = 4321$.

**Bài 12 (viết liền dãy số).** Viết liên tiếp các số tự nhiên từ $1$ đến $100$ thành một số $123456789101112\dots99100$.
a) Số đó có bao nhiêu chữ số?
b) Chữ số thứ $100$ (tính từ trái sang) là chữ số nào?

**Bài 13.** Có bao nhiêu số có ba chữ số mà tổng các chữ số bằng $5$?

**Bài 14 (khó).** Tìm số có ba chữ số $\overline{abc}$, biết $\overline{abc} = 5 \times a \times b \times c$.

---

## III. Lời giải chi tiết

### Bài 1
a) Hàng trăm phải khác $0$, nên có $3$ cách chọn ($1$, $2$ hoặc $3$). Hàng chục chọn một trong ba chữ số còn lại (được chọn $0$): $3$ cách. Hàng đơn vị còn $2$ cách. Số các số lập được: $3 \times 3 \times 2 = 18$.

b) Số chẵn có chữ số tận cùng là $0$ hoặc $2$.
- Tận cùng là $0$: hàng trăm có $3$ cách, hàng chục còn $2$ cách. Có $3 \times 2 = 6$ số.
- Tận cùng là $2$: hàng trăm chọn $1$ hoặc $3$ ($2$ cách, vì không được là $0$ và $2$), hàng chục chọn một trong hai chữ số còn lại ($2$ cách). Có $2 \times 2 = 4$ số.

Tất cả có $6 + 4 = 10$ số chẵn.

**Đáp số:** a) $18$ số; b) $10$ số.

### Bài 2
Năm chữ số khác nhau nhỏ nhất là $0, 1, 2, 3, 4$, tổng của chúng đã bằng $0 + 1 + 2 + 3 + 4 = 10$. Nếu thay bất kỳ chữ số nào bằng chữ số lớn hơn thì tổng vượt quá $10$. Vậy số cần tìm phải gồm đúng năm chữ số $0, 1, 2, 3, 4$.
- Số lớn nhất: xếp các chữ số giảm dần, được $43210$.
- Số nhỏ nhất: hàng chục nghìn không được là $0$, nên đặt $1$ ở đầu, rồi xếp tăng dần: $10234$.

**Đáp số:** lớn nhất $43210$, nhỏ nhất $10234$.

### Bài 3
a) Trang $1$ đến trang $9$: $9$ chữ số. Trang $10$ đến trang $99$: $90$ trang, $180$ chữ số. Trang $100$ đến trang $150$: $150 - 100 + 1 = 51$ trang, $51 \times 3 = 153$ chữ số.
Tất cả: $9 + 180 + 153 = 342$ chữ số.

b) Đánh hết trang $99$ cần $9 + 180 = 189$ chữ số. Còn lại $600 - 189 = 411$ chữ số dùng cho các trang có ba chữ số, tức là $411 : 3 = 137$ trang. Đó là các trang từ $100$ đến $99 + 137 = 236$.

**Đáp số:** a) $342$ chữ số; b) $236$ trang.

### Bài 4
Viết thêm chữ số $5$ vào bên phải thì số mới bằng $10$ lần số cũ cộng $5$. So với số cũ, số mới hơn $9$ lần số cũ cộng $5$.

Vậy $9$ lần số cũ cộng $5$ bằng $230$, nên $9$ lần số cũ bằng $230 - 5 = 225$. Số cũ là $225 : 9 = 25$.

*Thử lại:* $255 - 25 = 230$. Đúng.

**Đáp số:** $25$.

### Bài 5
Viết chữ số $2$ vào bên trái một số có hai chữ số thì số mới bằng $200$ cộng số cũ.

Số mới gấp $9$ lần số cũ, tức là bằng số cũ cộng thêm $8$ lần số cũ. Vậy $8$ lần số cũ bằng $200$, số cũ là $200 : 8 = 25$.

*Thử lại:* $225 = 9 \times 25$. Đúng.

**Đáp số:** $25$.

### Bài 6
Gọi số cần tìm là $\overline{ab}$. Ta có $\overline{ab} = a \times 10 + b$ và $4$ lần tổng các chữ số là $a \times 4 + b \times 4$. Theo đề:
$$a \times 10 + b = a \times 4 + b \times 4.$$
Bớt ở cả hai bên $a \times 4$ và $b$, ta được $a \times 6 = b \times 3$, tức là $b = a \times 2$.

Chữ số $b \le 9$ nên $a \le 4$. Ta được các số $12, 24, 36, 48$.

*Thử lại:* $12 = 4 \times 3$, $24 = 4 \times 6$, $36 = 4 \times 9$, $48 = 4 \times 12$. Đúng.

**Đáp số:** $12$, $24$, $36$, $48$.

### Bài 7
Theo phân tích cấu tạo số:
- $\overline{ab} + \overline{ba} = (a + b) \times 11 = 132$, nên $a + b = 12$.
- $\overline{ab} - \overline{ba} = (a - b) \times 9 = 36$, nên $a - b = 4$.

Biết tổng và hiệu của hai chữ số: $a = (12 + 4) : 2 = 8$, $b = 12 - 8 = 4$.

*Thử lại:* $84 + 48 = 132$, $84 - 48 = 36$. Đúng.

**Đáp số:** $84$.

### Bài 8
Gọi số cần tìm là $\overline{abc}$. Xóa chữ số hàng trăm còn lại $\overline{bc}$. Ta có $\overline{abc} = a \times 100 + \overline{bc}$.

Số đã cho gấp $7$ lần $\overline{bc}$, tức là bằng $\overline{bc}$ cộng thêm $6$ lần $\overline{bc}$. Vậy $a \times 100 = 6 \times \overline{bc}$.

Vì $\overline{bc} < 100$ nên $a \times 100 < 600$, tức là $a \le 5$. Trong các số $100, 200, 300, 400, 500$, chỉ có $300$ chia hết cho $6$. Do đó $a = 3$ và $\overline{bc} = 300 : 6 = 50$.

*Thử lại:* $350 = 7 \times 50$. Đúng.

**Đáp số:** $350$.

### Bài 9
Gọi chữ số hàng đơn vị là $d$, phần còn lại khi xóa nó là số $m$. Số đã cho bằng $m \times 10 + d$. Xóa chữ số hàng đơn vị thì còn $m$, giảm đi $m \times 9 + d$.

Vậy $m \times 9 + d = 1992$. Chia $1992$ cho $9$: $1992 = 9 \times 221 + 3$.
- Nếu $d < 9$ thì $d$ chính là số dư của phép chia $1992$ cho $9$, nên $d = 3$ và $m = 221$.
- Nếu $d = 9$ thì $m \times 9 = 1983$, nhưng $1983$ không chia hết cho $9$, loại.

Số cần tìm là $2213$.

*Thử lại:* $2213 - 221 = 1992$. Đúng.

**Đáp số:** $2213$.

*Nhận xét:* "số cũ giảm đi bao nhiêu" chính là $9$ lần phần còn lại cộng chữ số bị xóa, nên ta dùng phép chia cho $9$.

### Bài 10
Gọi số cần tìm là $\overline{ab}$. Số mới là $\overline{1ab1} = 1000 + \overline{ab} \times 10 + 1 = 1001 + \overline{ab} \times 10$.

Số mới gấp $23$ lần $\overline{ab}$, tức là bằng $10$ lần $\overline{ab}$ cộng thêm $13$ lần $\overline{ab}$. Bỏ phần giống nhau là $10$ lần $\overline{ab}$, ta được $13$ lần $\overline{ab}$ bằng $1001$. Vậy $\overline{ab} = 1001 : 13 = 77$.

*Thử lại:* $77 \times 23 = 1771$. Đúng.

**Đáp số:** $77$.

### Bài 11
Phân tích theo hàng:
$$\overline{abcd} + \overline{abc} + \overline{ab} + a = a \times 1111 + b \times 111 + c \times 11 + d = 4321.$$
- **Tìm $a$:** $a \times 1111 \le 4321$ nên $a \le 3$. Nếu $a \le 2$ thì tổng lớn nhất là $2222 + 999 + 99 + 9 = 3329 < 4321$, vô lý. Vậy $a = 3$, phần còn lại $4321 - 3333 = 988$.
- **Tìm $b$:** $b \times 111 + c \times 11 + d = 988$. Nếu $b \le 7$ thì tổng nhiều nhất là $777 + 99 + 9 = 885 < 988$. Mà $b \times 111 \le 988$ nên $b \le 8$. Vậy $b = 8$, còn lại $988 - 888 = 100$.
- **Tìm $c$, $d$:** $c \times 11 + d = 100$. Nếu $c \le 8$ thì nhiều nhất là $88 + 9 = 97 < 100$. Vậy $c = 9$, $d = 100 - 99 = 1$.

*Thử lại:* $3891 + 389 + 38 + 3 = 4321$. Đúng.

**Đáp số:** $3891$.

### Bài 12
a) Từ $1$ đến $9$: $9$ chữ số. Từ $10$ đến $99$: $180$ chữ số. Số $100$: $3$ chữ số. Tất cả $9 + 180 + 3 = 192$ chữ số.

b) $9$ chữ số đầu là $1, 2, \dots, 9$. Còn $100 - 9 = 91$ chữ số nữa, lấy từ các số có hai chữ số $10, 11, 12, \dots$
Ta có $91 = 2 \times 45 + 1$. Viết hết $45$ số có hai chữ số đầu tiên (từ $10$ đến $54$) dùng $90$ chữ số. Chữ số thứ $91$ là chữ số đầu của số tiếp theo, tức là số $55$.

**Đáp số:** a) $192$ chữ số; b) chữ số $5$.

### Bài 13
Gọi số là $\overline{abc}$ với $a \ge 1$ và $a + b + c = 5$. Xét từng giá trị của $a$:
- $a = 1$: $b + c = 4$, có $5$ cách ($b = 0, 1, 2, 3, 4$): $104, 113, 122, 131, 140$.
- $a = 2$: $b + c = 3$, có $4$ cách: $203, 212, 221, 230$.
- $a = 3$: $b + c = 2$, có $3$ cách: $302, 311, 320$.
- $a = 4$: $b + c = 1$, có $2$ cách: $401, 410$.
- $a = 5$: $b + c = 0$, có $1$ cách: $500$.

Tất cả có $5 + 4 + 3 + 2 + 1 = 15$ số.

**Đáp số:** $15$ số.

*Nhận xét:* xét lần lượt chữ số hàng cao nhất giúp liệt kê không sót, không trùng.

### Bài 14
- $\overline{abc} = 5 \times a \times b \times c$ nên $\overline{abc}$ chia hết cho $5$, do đó $c = 0$ hoặc $c = 5$. Nếu $c = 0$ thì vế phải bằng $0$, vô lý. Vậy $c = 5$.
- Khi đó $\overline{abc}$ là số lẻ, nên tích $5 \times a \times b \times 5$ lẻ. Suy ra $a$ và $b$ đều lẻ.
- Ta có $\overline{ab5} = 25 \times a \times b$, nên $\overline{ab5}$ chia hết cho $25$. Số chia hết cho $25$ có hai chữ số tận cùng là $00, 25, 50, 75$. Vì tận cùng là $5$ nên $\overline{b5}$ là $25$ hoặc $75$, tức là $b = 2$ hoặc $b = 7$. Mà $b$ lẻ, nên $b = 7$.
- Bây giờ $\overline{a75} = 25 \times a \times 7 = 175 \times a$. Thử $a = 1, 3, 5, 7, 9$: $175 \times 1 = 175$ có dạng $\overline{a75}$ với $a = 1$. Đúng. Với $a = 3$: $525$ không có dạng $\overline{375}$. Với $a \ge 5$ thì $175 \times a \ge 875$, và $175 \times 5 = 875 \ne 575$, $175 \times 7 = 1225$ đã có bốn chữ số.

*Thử lại:* $5 \times 1 \times 7 \times 5 = 175$. Đúng.

**Đáp số:** $175$.

*Nhận xét:* bài này kết hợp cấu tạo số với dấu hiệu chia hết. Mỗi bước loại bớt khả năng cho một chữ số, đến cuối chỉ còn vài trường hợp để thử.

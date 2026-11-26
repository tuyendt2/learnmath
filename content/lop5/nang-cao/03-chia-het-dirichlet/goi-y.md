# Gợi ý từng tầng cho bài tập Chia hết, chia có dư, nguyên lý Dirichlet

<!--
Định dạng: mỗi bài bắt đầu bằng "## Bài N | độ khó (1-4)".
Dòng "**Ý tưởng:**" là tóm tắt một dòng, sau đó là các "### Gợi ý K".
-->

## Bài 1 | 1
**Ý tưởng:** $45 = 5 \times 9$: xét chữ số tận cùng trước, rồi đến tổng các chữ số.

### Gợi ý 1
Chia hết cho $45$ nghĩa là chia hết cho hai số nào? Chữ số $b$ có thể là những chữ số nào?

### Gợi ý 2
Xét riêng $b = 0$ và $b = 5$. Mỗi trường hợp, tìm $a$ để tổng $6 + a + 4 + 9 + b$ chia hết cho $9$.

## Bài 2 | 2
**Ý tưởng:** Chia $2$ và $5$ đều dư $1$ thì chữ số tận cùng là $1$; tổng chữ số chia $9$ dư $1$.

### Gợi ý 1
Số chia $2$ dư $1$ và chia $5$ dư $1$ thì bớt $1$ sẽ chia hết cho $10$. Vậy chữ số tận cùng là gì?

### Gợi ý 2
$b = 1$. Tổng chữ số $a + 11$ chia $9$ dư $1$, nên $a + 10$ chia hết cho $9$.

## Bài 3 | 2
**Ý tưởng:** Số và tổng các chữ số của nó có cùng số dư khi chia cho $9$; đếm tổng chữ số theo hàng.

### Gợi ý 1
Không cần chia số $A$. Chỉ cần tính tổng các chữ số của $A$.

### Gợi ý 2
Các số $1$ đến $9$ góp $45$. Các số $10$ đến $99$: hàng chục góp $45 \times 10$, hàng đơn vị góp $45 \times 9$. Số $100$ góp $1$. Tổng là $901$.

## Bài 4 | 2
**Ý tưởng:** a) $18 = 2 \times 9$; b) $\overline{abcabc} = \overline{abc} \times 1001$ và $1001 = 7 \times 11 \times 13$.

### Gợi ý 1
a) Số đó tận cùng là chữ số nào? Tổng các chữ số bằng bao nhiêu? b) Tách $\overline{abcabc}$ thành $\overline{abc} \times 1000 + \overline{abc}$.

### Gợi ý 2
b) $\overline{abcabc} = \overline{abc} \times 1001$. Phân tích $1001$ thành tích ba số.

## Bài 5 | 2
**Ý tưởng:** Coi số chia là $1$ phần thì số bị chia là $6$ phần cộng $3$; tổng bốn số là $7$ phần cộng $12$.

### Gợi ý 1
Viết số bị chia theo số chia: số bị chia $=$ số chia $\times 6 + 3$.

### Gợi ý 2
$7$ phần $+ 3 + 6 + 3 = 194$, nên $7$ phần $= 182$. Đừng quên kiểm tra số dư nhỏ hơn số chia.

## Bài 6 | 2
**Ý tưởng:** Số dư nào cũng kém số chia $1$, nên số cần tìm thêm $1$ thì chia hết cho $2, 3, 4, 5, 6$.

### Gợi ý 1
Thêm $1$ vào số cần tìm thì số dư mỗi phép chia thay đổi thế nào?

### Gợi ý 2
Số nhỏ nhất chia hết cho cả $2, 3, 4, 5, 6$ là $60$. Số cần tìm là $60 - 1$.

## Bài 7 | 3
**Ý tưởng:** Liệt kê các số chia $7$ dư $4$, lọc những số chia $5$ dư $3$, rồi kiểm tra điều kiện chia $3$ dư $2$.

### Gợi ý 1
Các số dư không theo quy luật "thiếu 1" hay "bằng nhau". Hãy liệt kê các số chia $7$ dư $4$: $4, 11, 18, \dots$

### Gợi ý 2
Số chia $5$ dư $3$ tận cùng là $3$ hoặc $8$. Trong dãy trên được $18$, $53$, ... Thử từng số với điều kiện chia $3$ dư $2$.

## Bài 8 | 3
**Ý tưởng:** a) tích các số lẻ có thừa số $5$ thì tận cùng $5$; b) đếm số thừa số $5$, nhớ $25$ và $50$ góp hai thừa số.

### Gợi ý 1
a) Tích là số chẵn hay lẻ? Có chia hết cho $5$ không? b) Mỗi chữ số $0$ tận cùng do cặp thừa số nào tạo ra?

### Gợi ý 2
b) Có $10$ số chia hết cho $5$ từ $1$ đến $50$; trong đó $25 = 5 \times 5$ và $50 = 2 \times 5 \times 5$ góp thêm thừa số $5$.

## Bài 9 | 1
**Ý tưởng:** $40 = 12 \times 3 + 4 > 12 \times 3$, dùng Dirichlet với $12$ "chuồng" là $12$ tháng.

### Gợi ý 1
Đâu là "thỏ", đâu là "chuồng"? Có bao nhiêu chuồng?

### Gợi ý 2
Giả sử tháng nào cũng có không quá $3$ học sinh. Khi đó có nhiều nhất bao nhiêu học sinh?

## Bài 10 | 2
**Ý tưởng:** Tính trường hợp xui nhất rồi cộng thêm $1$ viên.

### Gợi ý 1
a) Lấy nhiều nhất bao nhiêu viên mà vẫn chưa có màu nào đủ $3$ viên? b) Lấy nhiều nhất bao nhiêu viên mà vẫn thiếu một màu?

### Gợi ý 2
a) Xui nhất $2 + 2 + 2 = 6$ viên. b) Xui nhất là lấy hết $10$ đỏ và $8$ xanh.

## Bài 11 | 2
**Ý tưởng:** Có $5$ số dư khi chia cho $5$ mà có $6$ số, nên hai số cùng số dư và hiệu của chúng chia hết cho $5$.

### Gợi ý 1
Khi chia cho $5$, có thể có những số dư nào? Bao nhiêu số dư?

### Gợi ý 2
Hai số cùng số dư $r$ có dạng $5 \times p + r$ và $5 \times q + r$. Hiệu của chúng bằng bao nhiêu?

## Bài 12 | 3
**Ý tưởng:** Chia hình vuông lớn thành $16$ ô vuông cạnh $1$ dm; $33 = 16 \times 2 + 1$.

### Gợi ý 1
Muốn có "chuồng" là hình vuông cạnh $1$ dm, hãy chia hình vuông lớn thành các ô như thế. Được bao nhiêu ô?

### Gợi ý 2
$16$ ô, $33$ điểm. Nếu ô nào cũng có không quá $2$ điểm thì có nhiều nhất bao nhiêu điểm?

## Bài 13 | 4
**Ý tưởng:** Xét $2024$ số $1, 11, \dots$; có hai số cùng số dư khi chia cho $2023$, hiệu của chúng là $11\dots1 \times 10\dots0$.

### Gợi ý 1
Khi chia cho $2023$ có bao nhiêu số dư? Hãy chọn nhiều số gồm toàn chữ số $1$ hơn số dư đó.

### Gợi ý 2
Hai số cùng số dư thì hiệu chia hết cho $2023$. Hiệu của $11111$ và $111$ có dạng như thế nào?

### Gợi ý 3
Hiệu $= \underbrace{11\dots1}_{k} \times 1\underbrace{0\dots0}_{m}$. Số $10\dots0$ chỉ gồm thừa số $2$ và $5$, còn $2023 = 7 \times 17 \times 17$.

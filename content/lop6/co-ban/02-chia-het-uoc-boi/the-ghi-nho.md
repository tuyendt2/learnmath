# Thẻ ghi nhớ Tính chia hết, số nguyên tố, ƯCLN, BCNN

## Ước, bội và chia hết của tổng

### $a$ chia hết cho $b$ thì $a$ là gì của $b$, $b$ là gì của $a$?
$a$ là **bội** của $b$; $b$ là **ước** của $a$ ($b \ne 0$).

### Tìm các bội của $b$ thế nào?
Nhân $b$ lần lượt với $0, 1, 2, 3, \dots$ Ví dụ bội của $7$: $0, 7, 14, 21, \dots$

### Tính chất chia hết của một tổng (hai tính chất)?
1. Mọi số hạng chia hết cho $m$ thì tổng chia hết cho $m$.
2. Chỉ **một** số hạng không chia hết cho $m$, các số hạng khác chia hết, thì tổng **không** chia hết cho $m$.

## Dấu hiệu chia hết

### Dấu hiệu chia hết cho $2$ và cho $5$?
Cho $2$: tận cùng là $0, 2, 4, 6, 8$. Cho $5$: tận cùng là $0$ hoặc $5$.

### Số chia hết cho cả $2$ và $5$ có chữ số tận cùng là gì?
Chữ số $0$.

### Dấu hiệu chia hết cho $3$ và cho $9$?
Tổng các chữ số chia hết cho $3$ (cho $9$).

### Số chia hết cho $3$ thì có chắc chia hết cho $9$ không?
Không. Ví dụ $12$ chia hết cho $3$ nhưng không chia hết cho $9$. Ngược lại, chia hết cho $9$ thì chắc chắn chia hết cho $3$.

## Số nguyên tố

### Số nguyên tố là gì? Hợp số là gì?
Số nguyên tố: số tự nhiên lớn hơn $1$, chỉ có hai ước là $1$ và chính nó.
Hợp số: số tự nhiên lớn hơn $1$, có nhiều hơn hai ước.

### Số $0$ và số $1$ là số nguyên tố hay hợp số?
Không phải số nguyên tố, cũng không phải hợp số.

### Số nguyên tố chẵn duy nhất là số nào?
Số $2$.

### Các số nguyên tố nhỏ hơn $30$?
$2, 3, 5, 7, 11, 13, 17, 19, 23, 29$.

### $51$ và $91$ có phải số nguyên tố không?
Không: $51 = 3 \cdot 17$, $91 = 7 \cdot 13$. Đây là hai bẫy hay gặp.

## ƯCLN và BCNN

### Ba bước tìm ƯCLN?
1. Phân tích ra thừa số nguyên tố.
2. Chọn thừa số **chung**.
3. Lấy số mũ **nhỏ nhất**, lập tích.

### Ba bước tìm BCNN?
1. Phân tích ra thừa số nguyên tố.
2. Chọn thừa số **chung và riêng**.
3. Lấy số mũ **lớn nhất**, lập tích.

### Tìm tập ước chung nhanh bằng cách nào?
Tìm ƯCLN rồi lấy các ước của nó: $\text{ƯC}(a, b) = \text{Ư}(\text{ƯCLN}(a, b))$.

### Tìm tập bội chung nhanh bằng cách nào?
Tìm BCNN rồi lấy các bội của nó: $\text{BC}(a, b) = B(\text{BCNN}(a, b))$.

### Hai số nguyên tố cùng nhau là gì? BCNN của chúng bằng gì?
ƯCLN của chúng bằng $1$. Khi đó $\text{BCNN}(a, b) = a \cdot b$.

### Nếu $a$ chia hết cho $b$ thì ƯCLN và BCNN của $a, b$ bằng gì?
$\text{ƯCLN}(a, b) = b$, $\ \text{BCNN}(a, b) = a$.

## Nhận dạng bài toán thực tế

### Đề hỏi "chia đều thành nhiều nhất bao nhiêu phần" thì dùng gì?
ƯCLN của các số lượng.

### Đề hỏi "sau ít nhất bao lâu lại cùng lặp lại" thì dùng gì?
BCNN của các chu kì.

### Xếp hàng $a$, $b$, $c$ đều thừa $r$ người thì làm gì?
Số người trừ $r$ là bội chung của $a, b, c$. Tìm BCNN, liệt kê bội, chọn số thỏa điều kiện khoảng.

### Lát nền chữ nhật bằng gạch vuông lớn nhất không cắt thì cạnh gạch là gì?
ƯCLN của chiều dài và chiều rộng (cùng đơn vị).

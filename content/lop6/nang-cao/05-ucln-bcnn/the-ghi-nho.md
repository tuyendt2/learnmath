# Thẻ ghi nhớ Ước chung lớn nhất, bội chung nhỏ nhất nâng cao

## Cách tìm

### Tìm ƯCLN bằng phân tích ra thừa số nguyên tố thế nào?
Lấy các thừa số nguyên tố **chung**, mỗi thừa số với số mũ **nhỏ nhất**.

### Tìm BCNN bằng phân tích ra thừa số nguyên tố thế nào?
Lấy **tất cả** các thừa số nguyên tố, mỗi thừa số với số mũ **lớn nhất**.

### Tìm ƯC và BC từ ƯCLN, BCNN thế nào?
Ước chung là các ước của ƯCLN; bội chung là các bội của BCNN.

### Thuật toán Euclid là gì?
Chia $a$ cho $b$ được dư $r$, thì $\text{ƯCLN}(a, b) = \text{ƯCLN}(b, r)$. Lặp lại đến khi dư $0$; số dư khác $0$ cuối cùng là ƯCLN.

### Vì sao $\text{ƯCLN}(a, b) = \text{ƯCLN}(b, r)$?
Vì $r = a - bq$ và $a = bq + r$: mọi ước chung của $a, b$ là ước chung của $b, r$ và ngược lại.

### Nếu $a \,\vdots\, b$ thì ƯCLN và BCNN của $a$, $b$ bằng gì?
$\text{ƯCLN}(a, b) = b$ và $\text{BCNN}(a, b) = a$.

### Hai số nguyên tố cùng nhau thì BCNN bằng gì?
Bằng tích hai số. Ví dụ $\text{BCNN}(8, 15) = 120$.

### $\text{BCNN}(4, 6)$ có bằng $24$ không?
Không, bằng $12$. Chỉ lấy tích khi hai số nguyên tố cùng nhau.

## Công thức then chốt

### Biết $d = \text{ƯCLN}(a, b)$, viết $a$, $b$ thế nào?
$a = dm$, $b = dn$ với $\text{ƯCLN}(m, n) = 1$. Khi đó $\text{BCNN}(a, b) = dmn$.

### $\text{ƯCLN}(a, b) \cdot \text{BCNN}(a, b) = \;?$
$a \cdot b$, vì $d \cdot dmn = dm \cdot dn$.

### Khi đặt $a = dm$, $b = dn$, bẫy hay gặp là gì?
Quên điều kiện $m$, $n$ nguyên tố cùng nhau, nên giữ cả những cặp như $(3; 6)$ làm thừa nghiệm.

### Biết $\text{BCNN} - \text{ƯCLN} = k$ thì lập phương trình gì?
$d(mn - 1) = k$, nên $d$ là ước của $k$.

## Nguyên tố cùng nhau

### Chứng minh $\text{ƯCLN}(2n + 1, 3n + 1) = 1$ thế nào?
Gọi $d$ là ước chung, thì $d$ là ước của $3(2n + 1) - 2(3n + 1) = 1$.

### Hai số tự nhiên liên tiếp có ƯCLN bằng bao nhiêu?
Bằng $1$, vì ước chung là ước của hiệu, mà hiệu bằng $1$.

### Nếu $\text{ƯCLN}(a, b) = 1$ thì $\text{ƯCLN}(a + b, ab)$ bằng bao nhiêu?
Bằng $1$. Một ước nguyên tố chung $p$ của $ab$ và $a + b$ sẽ chia hết cả $a$ lẫn $b$.

## Bài toán thực tế

### Dấu hiệu nào trong đề cho biết phải dùng ƯCLN?
Chia đều thành **nhiều nhóm nhất**, cắt đoạn **dài nhất**, khoảng cách **lớn nhất** sao cho chia hết.

### Dấu hiệu nào trong đề cho biết phải dùng BCNN?
Sau **ít nhất** bao lâu lại gặp nhau, số **nhỏ nhất** chia hết cho nhiều số, xếp hàng nào cũng vừa đủ.

### Xếp hàng $a$, $b$, $c$ đều thừa $r$ (hoặc thiếu $r$) thì xét số nào?
Thừa $r$: $n - r$ là bội chung. Thiếu $r$: $n + r$ là bội chung.

### Các số dư không "đều" như chia $3$ dư $2$, chia $5$ dư $3$, chia $7$ dư $4$ thì làm sao?
Nhân với một số thích hợp để các số dư bằng nhau: $2n$ chia $3$, $5$, $7$ đều dư $1$, nên $2n - 1$ là bội của $105$.

### Trồng cây quanh một mảnh vườn khép kín: số cây so với số khoảng?
Bằng nhau. Trên một đoạn thẳng có cây ở hai đầu thì số cây hơn số khoảng $1$.

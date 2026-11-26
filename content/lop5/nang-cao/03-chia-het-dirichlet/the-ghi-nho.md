# Thẻ ghi nhớ Chia hết, chia có dư, nguyên lý Dirichlet

<!--
Định dạng: "## Nhóm" mở một nhóm thẻ; mỗi "### ..." là mặt trước của một thẻ,
phần bên dưới (đến thẻ tiếp theo) là mặt sau.
-->

## Dấu hiệu chia hết

### Dấu hiệu chia hết cho $2$, cho $5$, cho $10$?
Xét chữ số tận cùng: cho $2$ là $0, 2, 4, 6, 8$; cho $5$ là $0, 5$; cho $10$ là $0$.

### Dấu hiệu chia hết cho $3$ và cho $9$?
Tổng các chữ số chia hết cho $3$ (cho $9$).

*Vì sao:* $\overline{abc} = (99a + 9b) + (a + b + c)$, phần đầu luôn chia hết cho $9$.

### Dấu hiệu chia hết cho $4$ và cho $25$?
Số tạo bởi **hai chữ số tận cùng** chia hết cho $4$ (cho $25$), vì $100$ chia hết cho $4$ và $25$.

### Dấu hiệu chia hết cho $8$ và cho $125$?
Số tạo bởi **ba chữ số tận cùng** chia hết cho $8$ (cho $125$), vì $1000 = 8 \times 125$.

### Một số chia cho $9$ có số dư liên quan gì đến tổng chữ số của nó?
Số đó và tổng các chữ số của nó có **cùng số dư** khi chia cho $9$ (và khi chia cho $3$).

### Chia hết cho $4$ và $6$ có chắc chia hết cho $24$ không?
Không. Ví dụ $12$. Chỉ ghép được hai số không có thừa số chung (khác $1$), như $2$ và $9$ thành $18$, $5$ và $9$ thành $45$.

### Vì sao $\overline{abcabc}$ chia hết cho $7$, $11$, $13$?
$\overline{abcabc} = \overline{abc} \times 1001$ và $1001 = 7 \times 11 \times 13$.

## Chia có dư

### Phép chia $a$ cho $b$ có thương $q$, dư $r$ được viết thế nào?
$a = b \times q + r$, với $0 \le r < b$. Số dư luôn nhỏ hơn số chia.

### Số chia $2$ dư $1$, chia $3$ dư $2$, chia $4$ dư $3$ thì có tính chất gì?
Thêm $1$ vào số đó thì được số chia hết cho $2$, $3$, $4$.

### Số chia $2$, $5$, $9$ đều dư $1$ thì có tính chất gì?
Bớt $1$ thì chia hết cho $2$, $5$, $9$, tức là chia hết cho $90$.

### Các số dư không có quy luật thì tìm số thế nào?
Liệt kê các số thỏa mãn điều kiện có **số chia lớn nhất**, rồi lọc dần theo các điều kiện còn lại.

### Muốn biết tổng hay tích chia cho $m$ dư bao nhiêu thì làm gì?
Cộng (hoặc nhân) các số dư rồi lấy số dư của kết quả khi chia cho $m$.

## Chữ số tận cùng

### Tích các số lẻ có một thừa số $5$ thì tận cùng là chữ số nào?
Chữ số $5$.

### Tích $1 \times 2 \times \dots \times n$ tận cùng bao nhiêu chữ số $0$?
Bằng số thừa số $5$ trong tích. Đếm các số chia hết cho $5$, cộng thêm số các số chia hết cho $25$, ...

Ví dụ: đến $50$ có $10 + 2 = 12$ chữ số $0$.

## Nguyên lý Dirichlet

### Phát biểu nguyên lý Dirichlet?
Nhốt $n + 1$ con thỏ vào $n$ chuồng thì có một chuồng có ít nhất $2$ con. Nhốt $k \times n + 1$ con thì có một chuồng có ít nhất $k + 1$ con.

### Vì sao nguyên lý Dirichlet đúng?
Nếu chuồng nào cũng có không quá $k$ con thì $n$ chuồng có không quá $k \times n$ con, ít hơn số thỏ. Vô lý.

### Trong các bài về số, "chuồng" thường là gì?
Các **số dư** khi chia cho $m$ ($m$ chuồng). Hai số cùng số dư thì hiệu của chúng chia hết cho $m$.

### Bài "phải lấy ít nhất bao nhiêu để chắc chắn ..." giải thế nào?
Tính trường hợp **xui nhất**: lấy được nhiều nhất mà vẫn chưa đạt yêu cầu. Đáp số bằng số đó cộng $1$.

### Hộp có $10$ đỏ, $8$ xanh, $5$ vàng. Lấy ít nhất bao nhiêu viên để chắc chắn có đủ ba màu?
$10 + 8 + 1 = 19$ viên. Xui nhất là lấy hết bi của hai màu nhiều nhất.

### Bài Dirichlet trong hình học thì tạo "chuồng" thế nào?
Chia hình lớn thành các hình nhỏ bằng nhau, số hình nhỏ chọn sao cho số điểm $= k \times \text{số hình} + 1$.

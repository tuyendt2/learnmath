# Thẻ ghi nhớ Cấu tạo số tự nhiên, số thập phân

<!--
Định dạng: "## Nhóm" mở một nhóm thẻ; mỗi "### ..." là mặt trước của một thẻ,
phần bên dưới (đến thẻ tiếp theo) là mặt sau.
-->

## Viết số theo hàng

### $\overline{abc}$ viết thành tổng theo hàng thế nào?
$\overline{abc} = 100 \times a + 10 \times b + c$, với $a \ne 0$. Cũng có thể viết $\overline{abc} = \overline{ab} \times 10 + c$.

### $\overline{ab}$ có bằng $a \times b$ không?
Không. $\overline{ab} = 10 \times a + b$. Ví dụ $\overline{ab}$ với $a = 3$, $b = 4$ là $34$, còn $a \times b = 12$.

### $\overline{ab} + \overline{ba}$ bằng bao nhiêu?
$11 \times (a + b)$, vì $(10a + b) + (10b + a) = 11a + 11b$.

### $\overline{abc} + \overline{ab} + a$ viết gọn thế nào?
$111 \times a + 11 \times b + c$.

### Phương pháp chặn chữ số là gì?
Xét chữ số hàng cao nhất trước. Vì mỗi chữ số không quá $9$, phần chứa các chữ số hàng thấp có giá trị bị giới hạn, nên chữ số hàng cao chỉ có một khả năng.

## Viết thêm, xóa chữ số

### Viết thêm chữ số $0$ vào bên phải một số thì số đó thay đổi thế nào?
Gấp $10$ lần. Số mới hơn số cũ $9$ lần số cũ; tổng hai số bằng $11$ lần số cũ.

### Viết thêm chữ số $c$ vào bên phải số $n$ thì được số nào?
$n \times 10 + c$.

### Viết thêm chữ số $5$ vào bên trái số có hai chữ số $n$ thì được số nào?
$500 + n$. Nếu $n$ có ba chữ số thì được $5000 + n$.

### Xóa chữ số hàng đơn vị $c$ của một số thì số cũ và số mới liên hệ thế nào?
Số cũ $=$ số mới $\times 10 + c$. Hiệu $= 9 \times$ số mới $+ c$.

### Xóa chữ số hàng nghìn $a$ của $\overline{abcd}$ thì số giảm đi bao nhiêu?
Giảm đúng $a \times 1000$, vì $\overline{abcd} = a \times 1000 + \overline{bcd}$.

## Dời dấu phẩy

### Dời dấu phẩy sang phải một hàng thì số thay đổi thế nào?
Gấp $10$ lần. Sang phải hai hàng thì gấp $100$ lần.

### Dời dấu phẩy sang trái một hàng thì số thay đổi thế nào?
Giảm $10$ lần (bằng $\frac{1}{10}$ số cũ).

### Xóa dấu phẩy của số có hai chữ số ở phần thập phân thì số gấp mấy lần?
Gấp $100$ lần. Hiệu giữa số mới và số cũ là $99$ lần số cũ.

### Dời dấu phẩy sang phải một hàng, số tăng thêm $A$. Số ban đầu là bao nhiêu?
$A : 9$.

Ví dụ: tăng thêm $41{,}22$ thì số ban đầu là $4{,}58$.

## Đếm chữ số

### Viết các số từ $1$ đến $99$ cần bao nhiêu chữ số?
$9 + 90 \times 2 = 189$ chữ số.

### Viết các số từ $1$ đến $999$ cần bao nhiêu chữ số?
$9 + 180 + 2700 = 2889$ chữ số.

### Từ trang $a$ đến trang $b$ có bao nhiêu trang?
$b - a + 1$ trang. Ví dụ từ trang $100$ đến trang $256$ có $157$ trang.

### Tìm chữ số thứ $k$ của dãy $123456789101112\dots$ thế nào?
Bớt $9$ chữ số của các số một chữ số, $180$ chữ số của các số hai chữ số, ... Chia phần còn lại cho số chữ số của mỗi số: thương cho biết đã đủ bao nhiêu số, số dư cho biết vị trí chữ số trong số tiếp theo.

## Lớn nhất, nhỏ nhất

### Muốn tìm số lớn nhất có tổng chữ số cho trước thì ưu tiên điều gì?
Trước hết, số có **nhiều chữ số nhất**. Sau đó, chữ số hàng cao **lớn nhất** có thể.

### Muốn tìm số nhỏ nhất có tổng chữ số cho trước thì ưu tiên điều gì?
Trước hết, số có **ít chữ số nhất**. Sau đó, chữ số hàng cao **nhỏ nhất** có thể, nhưng chữ số đầu phải khác $0$.

### Bẫy hay gặp khi tìm các chữ số $a$, $b$ của $\overline{ab}$ là gì?
Quên điều kiện $a \ne 0$ và $a$, $b$ chỉ từ $0$ đến $9$. Luôn thử lại và xét đủ mọi trường hợp vì bài có thể có nhiều đáp số.

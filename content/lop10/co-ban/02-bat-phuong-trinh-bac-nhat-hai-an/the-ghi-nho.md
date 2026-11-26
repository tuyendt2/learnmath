# Thẻ ghi nhớ Bất phương trình và hệ bất phương trình bậc nhất hai ẩn

## Khái niệm

### Bất phương trình bậc nhất hai ẩn có dạng gì?
$ax + by < c$ (hoặc $>$, $\le$, $\ge$), với $a, b$ **không đồng thời bằng 0**.

### $3x \ge 1$ có phải bất phương trình bậc nhất hai ẩn không?
Có, với $a = 3$, $b = 0$. Chỉ cần $a$ và $b$ không cùng bằng 0.

### Bất phương trình bậc nhất hai ẩn có bao nhiêu nghiệm?
Vô số nghiệm: miền nghiệm là cả một nửa mặt phẳng.

### Làm sao kiểm tra $(x_0; y_0)$ có là nghiệm không?
Thay vào bất phương trình, nếu được bất đẳng thức đúng thì là nghiệm.

## Miền nghiệm

### Bốn bước biểu diễn miền nghiệm của $ax + by < c$?
1. Vẽ bờ $ax + by = c$.
2. Chọn điểm thử $M$ không nằm trên bờ.
3. Nếu $M$ thỏa mãn thì nửa mặt phẳng chứa $M$ là miền nghiệm, ngược lại lấy nửa kia.
4. Dấu chặt thì bỏ bờ (nét đứt).

### Khi nào **không** được dùng gốc $O$ làm điểm thử?
Khi bờ đi qua gốc tọa độ, tức là $c = 0$. Khi đó chọn điểm khác như $(1; 0)$ hoặc $(0; 1)$.

### Bờ có thuộc miền nghiệm không?
Có nếu dấu là $\le$ hoặc $\ge$; không nếu dấu là $<$ hoặc $>$.

### Miền nghiệm của một hệ là gì?
Giao (phần chung) các miền nghiệm của từng bất phương trình trong hệ.

### Tìm tọa độ một đỉnh của miền nghiệm thế nào?
Giải hệ hai phương trình của hai đường thẳng đi qua đỉnh đó, rồi thay lại vào các bất phương trình còn lại để chắc chắn đỉnh thuộc miền nghiệm.

### Hệ $x \ge 0$, $y \ge 0$ biểu diễn miền nào?
Góc phần tư thứ nhất, kể cả hai nửa trục dương.

### Phương trình đường thẳng qua $(a; 0)$ và $(0; b)$?
$\frac{x}{a} + \frac{y}{b} = 1$ (dạng đoạn chắn), với $a, b \ne 0$.

## Bài toán tối ưu

### Trên miền đa giác, $F = ax + by$ đạt lớn nhất, nhỏ nhất ở đâu?
Tại các **đỉnh** của đa giác.

*Vì sao:* các đường $F = k$ song song với nhau; tịnh tiến chúng thì điểm cuối cùng còn chạm vào đa giác là một đỉnh.

### Năm bước giải bài toán tối ưu thực tế?
Đặt ẩn và điều kiện; lập hệ ràng buộc; lập biểu thức $F$; vẽ miền nghiệm, tìm đỉnh; tính $F$ tại các đỉnh rồi kết luận.

### Điều kiện hay bị quên khi đặt ẩn trong bài thực tế?
$x \ge 0$, $y \ge 0$ (và đôi khi $x$, $y$ phải là số tự nhiên, hoặc bị chặn trên bởi số lượng có sẵn).

### Ràng buộc "ít nhất" và "không quá" viết bằng dấu gì?
"Ít nhất", "tối thiểu": $\ge$. "Không quá", "tối đa": $\le$.

### Đỉnh tối ưu có tọa độ không nguyên mà ẩn phải nguyên thì làm sao?
Xét thêm các điểm có tọa độ nguyên trong miền nghiệm ở gần đỉnh đó, tính $F$ và so sánh.

### Miền nghiệm không bị chặn thì $F$ có luôn có giá trị lớn nhất không?
Không. Có thể $F$ lớn tùy ý. Phải lập luận riêng, ví dụ chỉ ra một dãy điểm trong miền làm $F$ tăng mãi, hoặc chứng minh trực tiếp một bất đẳng thức.

### Lãi 3 triệu/tấn I, 4 triệu/tấn II; biểu thức tiền lãi là gì?
$F = 3x + 4y$ (triệu đồng), với $x$, $y$ là số tấn sản phẩm I, II.

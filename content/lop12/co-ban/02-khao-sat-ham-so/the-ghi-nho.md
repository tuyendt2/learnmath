# Thẻ ghi nhớ Khảo sát hàm số

## Giá trị lớn nhất, nhỏ nhất

### Ba bước tìm max, min của hàm liên tục trên đoạn $[a; b]$?
1. Tìm các điểm $x_i \in (a; b)$ mà $f'(x_i) = 0$ hoặc $f'$ không xác định.
2. Tính $f(a)$, $f(b)$ và các $f(x_i)$.
3. Số lớn nhất là max, số nhỏ nhất là min.

### Tìm max, min trên một khoảng (không phải đoạn) thì làm thế nào?
Lập bảng biến thiên trên khoảng đó rồi đọc. Có thể không tồn tại max hoặc min (ví dụ $y = \frac1x$ trên $(0; +\infty)$ không có max, min).

### Giá trị cực đại có phải là giá trị lớn nhất không?
Không nhất thiết. Ví dụ $y = x^3 - 3x^2 - 9x + 35$ trên $[-4; 4]$: giá trị nhỏ nhất $-41$ đạt ở đầu mút, không phải ở điểm cực tiểu.

### $f$ đồng biến trên $[a; b]$ thì max, min bằng bao nhiêu?
$\max = f(b)$, $\min = f(a)$. (Nghịch biến thì ngược lại.)

## Tiệm cận

### Định nghĩa tiệm cận ngang và tiệm cận đứng?
- $y = y_0$ là tiệm cận ngang nếu $\lim\limits_{x \to +\infty} f(x) = y_0$ hoặc $\lim\limits_{x \to -\infty} f(x) = y_0$.
- $x = x_0$ là tiệm cận đứng nếu một giới hạn một phía tại $x_0$ bằng $\pm\infty$.

### Tiệm cận của $y = \frac{ax + b}{cx + d}$?
Tiệm cận đứng $x = -\frac dc$, tiệm cận ngang $y = \frac ac$.

### Tìm tiệm cận xiên $y = ax + b$ bằng giới hạn thế nào?
$a = \lim\limits_{x \to \pm\infty}\frac{f(x)}{x}$, $b = \lim\limits_{x \to \pm\infty}[f(x) - ax]$. Với phân thức, chia tử cho mẫu là nhanh nhất.

### Nghiệm của mẫu có luôn là tiệm cận đứng không?
Không. Nếu nó cũng là nghiệm của tử thì phải rút gọn rồi xét lại. Ví dụ $y = \frac{x^2 - 1}{x^2 - 3x + 2}$ không có tiệm cận đứng $x = 1$.

### Phân thức $\frac{P(x)}{Q(x)}$ có tiệm cận ngang nào?
- $\deg P < \deg Q$: $y = 0$.
- $\deg P = \deg Q$: $y = $ tỉ số hai hệ số bậc cao nhất.
- $\deg P = \deg Q + 1$: không có tiệm cận ngang, có tiệm cận xiên.

## Đồ thị

### Tâm đối xứng của đồ thị hàm bậc ba?
Điểm uốn $I$, có hoành độ $x = -\frac{b}{3a}$ (nghiệm của $y'' = 0$).

### Tâm đối xứng của đồ thị $y = \frac{ax + b}{cx + d}$ và $y = \frac{ax^2 + bx + c}{mx + n}$?
Giao điểm của hai đường tiệm cận.

### Nhìn đồ thị bậc ba, xác định dấu của $a$ và $d$ thế nào?
- Nhánh bên phải đi lên thì $a > 0$, đi xuống thì $a < 0$.
- Đồ thị cắt $Oy$ tại $(0; d)$.

### Hàm $y = \frac{ax + b}{cx + d}$ có cực trị không?
Không. $y'$ luôn cùng dấu với $ad - bc$, không đổi dấu.

### Sơ đồ khảo sát hàm số gồm những bước nào?
1. Tập xác định.
2. Sự biến thiên: $y'$, chiều biến thiên, cực trị, giới hạn, tiệm cận, bảng biến thiên.
3. Vẽ đồ thị: tiệm cận, cực trị, giao với các trục, vài điểm phụ.

## Tương giao và biện luận

### Số nghiệm của phương trình $f(x) = m$ liên quan gì đến đồ thị?
Bằng số giao điểm của đồ thị $y = f(x)$ với đường thẳng nằm ngang $y = m$.

### $x^3 - 3x = m$ có ba nghiệm phân biệt khi nào?
Khi $y_{\text{CT}} < m < y_{\text{CĐ}}$, tức $-2 < m < 2$.

### Đếm nghiệm của $\lvert f(x)\rvert = k$ ($k > 0$) thế nào?
Tách thành $f(x) = k$ và $f(x) = -k$, đếm nghiệm từng phương trình rồi cộng (không có nghiệm chung).

## Tối ưu thực tế

### Bốn bước giải bài toán tối ưu thực tế?
1. Chọn biến, tìm miền giá trị thực tế.
2. Lập hàm số cần tối ưu.
3. Tìm max/min bằng đạo hàm trên miền đó.
4. Trả lời đúng đại lượng được hỏi, có đơn vị.

### Hộp không nắp từ tấm bìa vuông cạnh $a$, cắt góc cạnh $x$: thể tích lớn nhất khi nào?
$V = x(a - 2x)^2$, lớn nhất khi $x = \frac a6$, $V_{\max} = \frac{2a^3}{27}$.

### Bẫy hay gặp khi trả lời bài toán giá bán, lợi nhuận?
Đề hỏi **giá bán** nhưng lại ghi số tiền **giảm giá** (biến $x$), hoặc ghi giá trị lợi nhuận.

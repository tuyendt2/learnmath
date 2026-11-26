# Thẻ ghi nhớ Giá trị tuyệt đối

<!--
Định dạng: "## Nhóm" mở một nhóm thẻ; mỗi "### ..." là mặt trước của một thẻ,
phần bên dưới (đến thẻ tiếp theo) là mặt sau.
-->

## Định nghĩa và tính chất

### $\lvert x\rvert$ được định nghĩa thế nào?
$\lvert x\rvert = x$ nếu $x \ge 0$ và $\lvert x\rvert = -x$ nếu $x < 0$.

Trên trục số, $\lvert x\rvert$ là khoảng cách từ $x$ đến $0$.

### $\lvert x - a\rvert$ có ý nghĩa hình học gì?
Khoảng cách giữa hai điểm $x$ và $a$ trên trục số.

### Những tính chất nào của $\lvert x\rvert$ hay dùng nhất?
$\lvert x\rvert \ge 0$; $\lvert x\rvert \ge x$; $\lvert x\rvert \ge -x$; $\lvert -x\rvert = \lvert x\rvert$; $\lvert xy\rvert = \lvert x\rvert\lvert y\rvert$; $\lvert x\rvert^2 = x^2$.

### $\lvert A\rvert + \lvert B\rvert = 0$ thì suy ra gì?
$A = 0$ và $B = 0$, vì tổng hai số không âm chỉ bằng $0$ khi cả hai bằng $0$. Tương tự với $\lvert A\rvert + B^2 = 0$.

## Tìm $x$

### Giải $\lvert A\rvert = k$ thế nào?
$k < 0$: vô nghiệm. $k \ge 0$: $A = k$ hoặc $A = -k$.

### Giải $\lvert A\rvert = B$ khi $B$ chứa $x$ thế nào?
Đặt điều kiện $B \ge 0$, giải $A = B$ hoặc $A = -B$, rồi **đối chiếu điều kiện**.

### $\lvert A\rvert = A$ khi nào? $\lvert A\rvert = -A$ khi nào?
$\lvert A\rvert = A \iff A \ge 0$. $\lvert A\rvert = -A \iff A \le 0$.

### Giải $\lvert A\rvert = \lvert B\rvert$ thế nào?
$A = B$ hoặc $A = -B$.

### Có nhiều dấu giá trị tuyệt đối thì bỏ dấu thế nào?
Tìm các điểm làm biểu thức bên trong bằng $0$, chia trục số thành các khoảng, bỏ dấu trên từng khoảng. Nghiệm phải thuộc khoảng đang xét.

### Giá trị tuyệt đối lồng nhau như $\big\lvert\lvert 2x - 1\rvert - 3\big\rvert = 2$ giải thế nào?
Bỏ từ ngoài vào trong: $\lvert 2x - 1\rvert - 3 = \pm 2$, rồi lại giải từng phương trình $\lvert 2x - 1\rvert = 5$ và $\lvert 2x - 1\rvert = 1$.

### Phương trình kiểu $\lvert x + 1\rvert + \lvert x + 2\rvert + \lvert x + 3\rvert = 4x$ có mẹo gì?
Vế trái không âm nên $x \ge 0$. Khi đó mọi biểu thức trong dấu giá trị tuyệt đối đều dương, bỏ dấu ngay.

### Phương trình $\lvert x - a\rvert + \lvert x - b\rvert = b - a$ (với $a < b$) có nghiệm nào?
Mọi $x$ với $a \le x \le b$, vì vế trái luôn $\ge b - a$ và dấu "=" xảy ra đúng khi $x$ nằm giữa $a$ và $b$.

## Bất đẳng thức giá trị tuyệt đối

### So sánh $\lvert a\rvert + \lvert b\rvert$ với $\lvert a + b\rvert$? Dấu "=" khi nào?
$\lvert a\rvert + \lvert b\rvert \ge \lvert a + b\rvert$, dấu "=" khi $ab \ge 0$.

*Vì sao:* $a + b \le \lvert a\rvert + \lvert b\rvert$ và $-(a+b) \le \lvert a\rvert + \lvert b\rvert$.

### So sánh $\lvert a\rvert - \lvert b\rvert$ với $\lvert a - b\rvert$?
$\lvert a\rvert - \lvert b\rvert \le \lvert a - b\rvert$.

*Vì sao:* áp dụng $\lvert u\rvert + \lvert v\rvert \ge \lvert u + v\rvert$ với $u = a - b$, $v = b$.

### Vì sao $\lvert a + b\rvert = \lvert a\rvert + \lvert b\rvert$ là sai nói chung?
Chỉ đúng khi $a$, $b$ cùng dấu. Ví dụ $\lvert 3 + (-1)\rvert = 2$ nhưng $\lvert 3\rvert + \lvert -1\rvert = 4$.

## Giá trị lớn nhất, nhỏ nhất

### GTNN của $\lvert A\rvert + m$ và GTLN của $m - \lvert A\rvert$?
Cả hai đều bằng $m$, đạt khi $A = 0$.

### GTNN của $\lvert x - a\rvert + \lvert x - b\rvert$ (với $a < b$)?
Bằng $b - a$, khi $a \le x \le b$.

*Cách viết:* $\lvert x - a\rvert + \lvert b - x\rvert \ge \lvert b - a\rvert$. Phải đổi dấu một số hạng để tổng không còn $x$.

### Tổng $\lvert x - a_1\rvert + \dots + \lvert x - a_n\rvert$ nhỏ nhất khi nào?
Khi $x$ ở chính giữa các điểm $a_1 \le \dots \le a_n$: $n$ lẻ thì $x$ là số đứng giữa; $n$ chẵn thì $x$ nằm giữa hai số đứng giữa. Ghép cặp số đầu với số cuối để chứng minh.

### GTLN, GTNN của $\lvert x - a\rvert - \lvert x - b\rvert$?
GTLN là $\lvert a - b\rvert$, GTNN là $-\lvert a - b\rvert$, nhờ $\lvert u\rvert - \lvert v\rvert \le \lvert u - v\rvert$.

### Gặp $\lvert 2x - 3\rvert$ trong bài tìm GTNN tổng khoảng cách thì làm sao?
Viết $\lvert 2x - 3\rvert = 2\left\lvert x - \frac32\right\rvert$, coi như hai khoảng cách tới điểm $\frac32$.

### Tìm GTNN, GTLN xong còn phải làm gì?
Chỉ ra giá trị của biến để dấu "=" xảy ra. Nếu các dấu "=" ở từng bước không xảy ra cùng lúc thì kết quả sai.

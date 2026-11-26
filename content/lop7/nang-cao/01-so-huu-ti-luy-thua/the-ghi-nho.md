# Thẻ ghi nhớ Số hữu tỉ, lũy thừa, tổng dãy

<!--
Định dạng: "## Nhóm" mở một nhóm thẻ; mỗi "### ..." là mặt trước của một thẻ,
phần bên dưới (đến thẻ tiếp theo) là mặt sau.
-->

## Lũy thừa

### $x^m\cdot x^n$ và $(x^m)^n$ bằng gì?
$x^m\cdot x^n = x^{m+n}$ (cộng số mũ) và $(x^m)^n = x^{mn}$ (nhân số mũ).

Ví dụ: $2^3\cdot 2^4 = 2^7$, còn $(2^3)^4 = 2^{12}$.

### $2^3 + 2^4$ có bằng $2^7$ không?
Không. Tổng lũy thừa không cộng số mũ. Đặt thừa số chung: $2^3 + 2^4 = 2^3(1 + 2) = 24$.

### Dấu của lũy thừa một số âm phụ thuộc vào gì?
Số mũ chẵn thì dương, số mũ lẻ thì âm. Chú ý $(-2)^4 = 16$ nhưng $-2^4 = -16$.

### Giải $x^2 = a^2$ (với $a > 0$) được mấy nghiệm?
Hai nghiệm: $x = a$ hoặc $x = -a$. Quên nghiệm âm là lỗi rất hay gặp.

### Khi nào $a^m = a^n$ suy ra được $m = n$?
Khi $a \ne 0$, $a \ne 1$ và $a \ne -1$. Với $a = 0$ hoặc $a = 1$ thì mọi số mũ (dương) đều cho cùng giá trị; với $a = -1$ thì chỉ cần $m$, $n$ cùng tính chẵn lẻ.

### Giải $(x-1)^{x+2} = (x-1)^{x+4}$ thế nào cho khỏi sót nghiệm?
Chuyển vế, đặt thừa số chung: $(x-1)^{x+2}\left[(x-1)^2 - 1\right] = 0$. Không chia hai vế cho $(x-1)^{x+2}$ vì nó có thể bằng $0$.

## So sánh lũy thừa

### Hai lũy thừa khác cơ số, khác số mũ thì so sánh bằng cách nào?
Đưa về **cùng số mũ** (dùng ước chung của hai số mũ) hoặc **cùng cơ số**, rồi so sánh.

Ví dụ: $2^{300} = 8^{100} < 9^{100} = 3^{200}$.

### Số mũ không có ước chung tiện lợi (như $2^{332}$ và $3^{223}$) thì làm sao?
Dùng **số trung gian**: $2^{332} < 2^{333} = 8^{111} < 9^{111} = 3^{222} < 3^{223}$.

### Với cơ số $0 < a < 1$, số mũ lớn hơn thì lũy thừa thế nào?
Nhỏ hơn. Ví dụ $\left(\frac12\right)^{50} < \left(\frac12\right)^{40}$.

### So sánh hai phân số dạng $\frac{10^{11} - 1}{10^{12} - 1}$ và $\frac{10^{10}+1}{10^{11}+1}$ thế nào?
Nhân mỗi số với $10$ để được phân số gần $1$, rồi so sánh phần hơn hoặc kém $1$: $1 - \frac{9}{10^{12}-1} < 1 < 1 + \frac{9}{10^{11}+1}$.

## Tổng dãy phân số

### $\frac{k}{n(n+k)}$ tách thành gì?
$\frac{k}{n(n+k)} = \frac1n - \frac{1}{n+k}$.

*Vì sao:* quy đồng vế phải được $\frac{(n+k) - n}{n(n+k)}$.

### Tử không bằng hiệu hai thừa số ở mẫu, ví dụ $\frac{1}{n(n+3)}$, thì tách thế nào?
Nhân và chia cho hiệu đó: $\frac{1}{n(n+3)} = \frac13\left(\frac1n - \frac1{n+3}\right)$.

### $\frac{2}{n(n+1)(n+2)}$ tách thành gì?
$\frac{2}{n(n+1)(n+2)} = \frac{1}{n(n+1)} - \frac{1}{(n+1)(n+2)}$.

### Tổng $\frac{1}{1\cdot 3} + \frac{1}{3\cdot 5} + \dots + \frac{1}{(2n-1)(2n+1)}$ bằng bao nhiêu?
$\frac{n}{2n+1}$. Tính bằng $\frac12\left(1 - \frac{1}{2n+1}\right)$.

### Tổng $\sum \frac{1}{k^2}$ không tách được thì đánh giá thế nào?
Kẹp: $\frac{1}{k(k+1)} < \frac1{k^2} < \frac{1}{(k-1)k}$, rồi cộng lại. Ví dụ $\frac1{2^2} + \dots + \frac1{100^2} < 1 - \frac1{100}$.

### Đẳng thức Catalan nói gì?
$1 - \frac12 + \frac13 - \dots - \frac1{2n} = \frac1{n+1} + \frac1{n+2} + \dots + \frac1{2n}$.

*Vì sao:* tổng đan dấu bằng tổng tất cả trừ hai lần tổng các số hạng mẫu chẵn.

### Đánh giá tổng nhiều phân số như $\frac1{51} + \dots + \frac1{100}$ thế nào?
Chia thành vài nhóm bằng nhau, thay mỗi số hạng bằng số lớn nhất (để chặn trên) hoặc nhỏ nhất (để chặn dưới) trong nhóm.

## Tổng lũy thừa và tổng tích

### Tính $S = 1 + a + a^2 + \dots + a^n$ bằng cách nào?
Nhân với $a$ rồi trừ: $aS - S = a^{n+1} - 1$, nên $S = \frac{a^{n+1} - 1}{a - 1}$ ($a \ne 1$).

### Chứng minh $3 + 3^2 + \dots + 3^{100}$ chia hết cho $120$ thế nào?
Nhóm $4$ số hạng liên tiếp: $3^k + 3^{k+1} + 3^{k+2} + 3^{k+3} = 3^{k-1}\cdot 120$. Số số hạng $100$ chia hết cho $4$ nên nhóm vừa đủ.

### Tổng dạng $\frac13 + \frac{2}{3^2} + \frac{3}{3^3} + \dots$ xử lý thế nào?
Nhân với $3$ rồi trừ để tử thành $1$, được một tổng lũy thừa; lại nhân rồi trừ lần nữa.

### $1\cdot 2 + 2\cdot 3 + \dots + n(n+1)$ bằng bao nhiêu?
$\frac{n(n+1)(n+2)}{3}$.

*Vì sao:* $3k(k+1) = k(k+1)(k+2) - (k-1)k(k+1)$, cộng lại các số hạng triệt tiêu.

## Mẹo tìm $x$

### Phương trình kiểu $\frac{x+1}{2024} + \frac{x+2}{2023} = \frac{x+3}{2022} + \frac{x+4}{2021}$ có dấu hiệu gì?
Tử cộng mẫu của mọi phân thức bằng cùng một số. Cộng $1$ vào mỗi phân thức để các tử giống nhau, rồi đặt thừa số chung.

### Giải $3^{x+2} - 3^x = 216$ thế nào?
Đặt thừa số chung lũy thừa nhỏ nhất: $3^x(9 - 1) = 216$, nên $3^x = 27$, $x = 3$.

### Số số hạng của dãy cách đều tính thế nào?
$\frac{\text{số cuối} - \text{số đầu}}{\text{khoảng cách}} + 1$. Ví dụ $2, 5, 8, \dots, 98$ có $\frac{98 - 2}{3} + 1 = 33$ số hạng.

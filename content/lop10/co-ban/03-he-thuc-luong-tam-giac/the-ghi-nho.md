# Thẻ ghi nhớ Hệ thức lượng trong tam giác

## Giá trị lượng giác

### Định nghĩa $\sin\alpha$, $\cos\alpha$ với $0^\circ \le \alpha \le 180^\circ$?
Lấy $M(x_0; y_0)$ trên nửa đường tròn đơn vị với $\widehat{xOM} = \alpha$. Khi đó $\sin\alpha = y_0$, $\cos\alpha = x_0$.

### Dấu của $\sin\alpha$ và $\cos\alpha$ khi $0^\circ \le \alpha \le 180^\circ$?
$\sin\alpha \ge 0$ luôn luôn. $\cos\alpha > 0$ khi $\alpha$ nhọn, $\cos\alpha < 0$ khi $\alpha$ tù, $\cos 90^\circ = 0$.

### Giá trị lượng giác của hai góc bù nhau liên hệ thế nào?
$\sin(180^\circ - \alpha) = \sin\alpha$; còn $\cos$, $\tan$, $\cot$ đổi dấu.

### $\cos 120^\circ$, $\cos 135^\circ$, $\cos 150^\circ$ bằng bao nhiêu?
$-\frac12$, $-\frac{\sqrt2}{2}$, $-\frac{\sqrt3}{2}$.

### $\tan\alpha$ không xác định khi nào? $\cot\alpha$ thì sao?
$\tan$ không xác định tại $90^\circ$; $\cot$ không xác định tại $0^\circ$ và $180^\circ$.

### Biết $\cos\alpha$, tính $\sin\alpha$ ($0^\circ \le \alpha \le 180^\circ$) thế nào?
$\sin\alpha = \sqrt{1 - \cos^2\alpha}$, luôn lấy giá trị không âm.

## Định lý côsin, định lý sin

### Phát biểu định lý côsin?
$a^2 = b^2 + c^2 - 2bc\cos A$ (tương tự cho $b^2$, $c^2$).

### Tính góc $A$ khi biết ba cạnh?
$\cos A = \frac{b^2 + c^2 - a^2}{2bc}$.

### Làm sao biết tam giác nhọn, vuông hay tù khi biết ba cạnh?
Xét góc đối diện cạnh lớn nhất $a$: $b^2 + c^2 > a^2$ thì nhọn, $= a^2$ thì vuông, $< a^2$ thì tù.

### Phát biểu định lý sin?
$\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C} = 2R$, với $R$ là bán kính đường tròn ngoại tiếp.

### Công thức độ dài trung tuyến $m_a$?
$m_a^2 = \frac{b^2 + c^2}{2} - \frac{a^2}{4}$.

*Vì sao:* định lý côsin cho hai tam giác $ABM$, $ACM$ có hai góc tại $M$ bù nhau, cộng lại.

### Biết hai cạnh và góc **không xen giữa**, cần cẩn thận điều gì?
$\sin C$ tính được có thể ứng với hai góc $C$ và $180^\circ - C$. Phải kiểm tra từng trường hợp (tổng các góc nhỏ hơn $180^\circ$).

### Nên dùng định lý nào khi biết c.g.c, c.c.c, g.c.g?
c.g.c và c.c.c: định lý côsin. g.c.g: tính góc thứ ba rồi dùng định lý sin.

## Diện tích

### Các công thức diện tích tam giác?
$S = \frac12 ah_a = \frac12 bc\sin A = \frac{abc}{4R} = pr = \sqrt{p(p-a)(p-b)(p-c)}$.

### Công thức Heron dùng khi nào?
Khi biết ba cạnh: $S = \sqrt{p(p - a)(p - b)(p - c)}$ với $p$ là nửa chu vi.

### Tính $R$ và $r$ từ diện tích?
$R = \frac{abc}{4S}$, $r = \frac{S}{p}$.

### Bẫy khi dùng $S = \frac12 xy\sin\alpha$?
Góc $\alpha$ phải là góc **xen giữa** hai cạnh $x$, $y$.

### Tam giác 13, 14, 15 có diện tích bao nhiêu?
$S = 84$ ($p = 21$), $r = 4$, $R = \frac{65}{8}$, đường cao ứng với cạnh 14 bằng 12.

## Ứng dụng thực tế

### Góc nâng là gì?
Góc giữa phương nằm ngang và hướng nhìn từ mắt người quan sát lên vật ở cao hơn.

### Đo chiều cao tháp từ hai điểm $A$, $B$ thẳng hàng với chân tháp thì làm thế nào?
Tính góc ở đỉnh tháp trong tam giác $ABC$ (bằng hiệu hai góc nâng), dùng định lý sin tính $BC$, rồi $h = BC\sin\beta$ với $\beta$ là góc nâng tại $B$.

### Nhận dạng tam giác từ một đẳng thức lượng giác thế nào?
Dùng định lý sin và hệ quả định lý côsin để đổi hết về cạnh $a$, $b$, $c$, rồi biến đổi đại số.

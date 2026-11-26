# Chủ đề 8. Phương trình đường thẳng và mặt cầu trong không gian

> Chủ đề này hoàn thiện hình học tọa độ $Oxyz$: phương trình tham số, chính tắc của đường thẳng, vị trí tương đối của đường thẳng với đường thẳng và với mặt phẳng, góc giữa đường thẳng và mặt phẳng, phương trình mặt cầu và quan hệ giữa mặt cầu với mặt phẳng. Các bài toán thực tế mô tả đường bay, tia sáng, vùng phủ sóng.

## I. Kiến thức cần nắm

### 1. Phương trình đường thẳng

Qua $M_0(x_0; y_0; z_0)$, vectơ chỉ phương (VTCP) $\vec u = (a; b; c)$:
- Tham số: $x = x_0 + at$, $y = y_0 + bt$, $z = z_0 + ct$.
- Chính tắc ($abc \ne 0$): $\dfrac{x - x_0}{a} = \dfrac{y - y_0}{b} = \dfrac{z - z_0}{c}$.

### 2. Vị trí tương đối của hai đường thẳng

$d_1$ qua $M_1$, VTCP $\vec u_1$; $d_2$ qua $M_2$, VTCP $\vec u_2$:
- $\vec u_1$, $\vec u_2$ cùng phương: song song (nếu $M_1 \notin d_2$) hoặc trùng nhau.
- Không cùng phương: giải hệ tìm giao điểm; có nghiệm thì cắt nhau, vô nghiệm thì chéo nhau.

### 3. Đường thẳng và mặt phẳng

- $\vec u \cdot \vec n = 0$: $d \parallel (P)$ hoặc $d \subset (P)$; $\vec u \cdot \vec n \ne 0$: cắt nhau (thay tham số vào phương trình mặt phẳng để tìm giao điểm).
- $d \perp (P) \iff \vec u$ cùng phương $\vec n$.
- Góc: $\sin\varphi = \dfrac{\lvert\vec u \cdot \vec n\rvert}{\lvert\vec u\rvert\lvert\vec n\rvert}$. Góc giữa hai đường thẳng: $\cos\varphi = \dfrac{\lvert\vec u_1 \cdot \vec u_2\rvert}{\lvert\vec u_1\rvert\lvert\vec u_2\rvert}$.

### 4. Mặt cầu

- Tâm $I(a; b; c)$, bán kính $R$: $(x - a)^2 + (y - b)^2 + (z - c)^2 = R^2$.
- $x^2 + y^2 + z^2 - 2ax - 2by - 2cz + d = 0$ là mặt cầu khi $a^2 + b^2 + c^2 - d > 0$, $R = \sqrt{a^2 + b^2 + c^2 - d}$.
- Với $(P)$, gọi $h = d(I, (P))$: $h > R$ không cắt; $h = R$ tiếp xúc; $h < R$ cắt theo đường tròn bán kính $r = \sqrt{R^2 - h^2}$.

### 5. Sai lầm hay gặp

- Dùng công thức côsin cho góc giữa đường thẳng và mặt phẳng (phải là sin).
- Kết luận song song khi chưa kiểm tra điểm có thuộc đường kia không.
- Quên điều kiện $a^2 + b^2 + c^2 - d > 0$.

## II. Bài tập vận dụng

**Bài 1.** Viết phương trình tham số và chính tắc của đường thẳng qua $A(1; 2; 3)$, VTCP $\vec u = (2; -1; 1)$.

**Bài 2.** Viết phương trình đường thẳng qua $A(1; 0; 2)$ và $B(3; 1; 0)$.

**Bài 3.** Viết phương trình đường thẳng $d$ qua $M(1; -1; 2)$ vuông góc với $(P): 2x - y + z - 3 = 0$. Tìm hình chiếu $H$ của $M$ lên $(P)$.

**Bài 4.** Xét vị trí tương đối của $d_1: x = 1 + t,\ y = 2t,\ z = 3 - t$ và $d_2: x = 2 + 2s,\ y = 3 + 4s,\ z = 2 - 2s$.

**Bài 5.** Chứng minh $d_1: x = 1 + t,\ y = 2 + t,\ z = 3 + 2t$ và $d_2: x = 2 + s,\ y = 3 - s,\ z = 5$ cắt nhau; tìm giao điểm.

**Bài 6.** Tính góc giữa đường thẳng $d$ có VTCP $\vec u = (1; 0; 1)$ và mặt phẳng $(P): x + y + z = 0$ (làm tròn đến hàng phần trăm của độ).

**Bài 7.** Viết phương trình mặt cầu tâm $I(1; -2; 3)$ bán kính 4. Tìm tâm và bán kính mặt cầu $x^2 + y^2 + z^2 - 2x + 4y - 6z - 2 = 0$.

**Bài 8.** Viết phương trình mặt cầu đường kính $AB$ với $A(1; 2; -1)$, $B(3; 0; 3)$.

**Bài 9.** Viết phương trình mặt cầu tâm $I(1; 2; 3)$ tiếp xúc với $(P): 2x - y + 2z + 1 = 0$.

**Bài 10 (đúng/sai).** Cho $d: x = 1 + t,\ y = 2 - t,\ z = 2t$ và $(P): x + y - z - 3 = 0$. Xét tính đúng sai, giải thích:
a) $d$ đi qua $A(1; 2; 0)$.
b) $d$ có một VTCP là $(1; -1; 2)$.
c) $d$ song song với $(P)$.
d) $d$ cắt $(P)$ tại điểm $A(1; 2; 0)$.

**Bài 11 (thực tế).** Một thiết bị bay xuất phát từ $A(0; 0; 10)$ (đơn vị mét), bay thẳng đều theo hướng $\vec u = (3; 4; 0)$ với tốc độ 5 m/s. Tìm vị trí của thiết bị sau 10 giây và khoảng cách từ đó đến gốc $O$ (làm tròn đến hàng phần trăm).

**Bài 12 (trả lời ngắn).** Mặt phẳng $(P): x + 2y + 2z - 10 = 0$ cắt mặt cầu tâm $O$ bán kính 5 theo một đường tròn. Tính bán kính đường tròn đó (làm tròn đến hàng phần trăm).

**Bài 13 (vận dụng cao).** Tìm điểm $M$ trên $d: x = 1 + t,\ y = t,\ z = -1 + 2t$ sao cho $MA = MB$ với $A(1; 0; 0)$, $B(0; 1; 2)$.

---

## III. Lời giải chi tiết

### Bài 1
Tham số: $x = 1 + 2t$, $y = 2 - t$, $z = 3 + t$. Chính tắc: $\dfrac{x - 1}{2} = \dfrac{y - 2}{-1} = \dfrac{z - 3}{1}$.

### Bài 2
$\overrightarrow{AB} = (2; 1; -2)$: $x = 1 + 2t$, $y = t$, $z = 2 - 2t$.

### Bài 3
VTCP là $\vec n_P = (2; -1; 1)$: $x = 1 + 2t$, $y = -1 - t$, $z = 2 + t$. Thay vào $(P)$: $2(1 + 2t) + 1 + t + 2 + t - 3 = 0 \iff 6t + 2 = 0 \iff t = -\dfrac{1}{3}$. $H\left(\dfrac{1}{3}; -\dfrac{2}{3}; \dfrac{5}{3}\right)$.

### Bài 4
$\vec u_2 = (2; 4; -2) = 2\vec u_1$: cùng phương. Điểm $(2; 3; 2) \in d_2$; nếu thuộc $d_1$ thì $t = 1$ (từ $x$), khi đó $y = 2 \ne 3$. Vậy $d_1 \parallel d_2$.

### Bài 5
$\vec u_1 = (1; 1; 2)$, $\vec u_2 = (1; -1; 0)$ không cùng phương. Giải $1 + t = 2 + s$, $2 + t = 3 - s$, $3 + 2t = 5$: $t = 1$, $s = 0$, thỏa cả ba. Giao điểm $(2; 3; 5)$.

### Bài 6
$\sin\varphi = \dfrac{\lvert 1 + 0 + 1\rvert}{\sqrt{2}\sqrt{3}} = \dfrac{\sqrt{6}}{3}$, $\varphi \approx 54{,}74^\circ$.

### Bài 7
$(x - 1)^2 + (y + 2)^2 + (z - 3)^2 = 16$. Mặt cầu thứ hai: tâm $(1; -2; 3)$, $R = \sqrt{1 + 4 + 9 + 2} = 4$ (chính là mặt cầu trên).

### Bài 8
Tâm $I(2; 1; 1)$, $R = IA = \sqrt{1 + 1 + 4} = \sqrt{6}$: $(x - 2)^2 + (y - 1)^2 + (z - 1)^2 = 6$.

### Bài 9
$R = d(I, (P)) = \dfrac{\lvert 2 - 2 + 6 + 1\rvert}{3} = \dfrac{7}{3}$: $(x - 1)^2 + (y - 2)^2 + (z - 3)^2 = \dfrac{49}{9}$.

### Bài 10
a) **Đúng.** $t = 0$.
b) **Đúng.** Hệ số của $t$.
c) **Sai.** $\vec u \cdot \vec n = 1 - 1 - 2 = -2 \ne 0$ nên $d$ cắt $(P)$.
d) **Đúng.** Thay: $(1 + t) + (2 - t) - 2t - 3 = 0 \iff t = 0$, giao điểm $A(1; 2; 0)$.

### Bài 11
$\lvert\vec u\rvert = 5$, nên sau $t$ giây thiết bị ở $(3t; 4t; 10)$. Sau 10 giây: $(30; 40; 10)$, cách $O$ một khoảng $\sqrt{900 + 1\,600 + 100} = \sqrt{2\,600} \approx 50{,}99$ (m).

### Bài 12
$h = d(O, (P)) = \dfrac{10}{3}$, $r = \sqrt{25 - \dfrac{100}{9}} = \dfrac{5\sqrt{5}}{3} \approx 3{,}73$.
**Đáp số:** 3,73.

### Bài 13
$M(1 + t; t; -1 + 2t)$. $MA^2 = 6t^2 - 4t + 1$, $MB^2 = (1 + t)^2 + (t - 1)^2 + (2t - 3)^2 = 6t^2 - 12t + 11$. $MA = MB \iff 8t = 10 \iff t = \dfrac{5}{4}$: $M\left(\dfrac{9}{4}; \dfrac{5}{4}; \dfrac{3}{2}\right)$.

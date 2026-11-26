# Chủ đề 8. Tọa độ Oxyz nâng cao

> Bài tọa độ không gian trong đề học sinh giỏi lớp 12 tập trung vào cực trị (tổng bình phương khoảng cách, tổng khoảng cách, khoảng cách lớn nhất), đường vuông góc chung, điểm đối xứng, mặt cầu tiếp xúc và vị trí tương đối. Phần lớn được giải bằng cách nhìn ra một tính chất hình học rồi tính toán gọn.

## I. Kiến thức cần nắm

### 1. Hình chiếu và đối xứng

- Hình chiếu $H$ của $A$ lên $(P): ax + by + cz + d = 0$: $H = A - t(a; b; c)$ với $t = \dfrac{ax_A + by_A + cz_A + d}{a^2 + b^2 + c^2}$. Điểm đối xứng $A' = 2H - A$.
- Hình chiếu lên đường thẳng: tham số hóa $H$ và cho $\overrightarrow{AH} \perp \vec u$.

### 2. Cực trị

- $MA^2 + MB^2$ với $M \in (P)$: gọi $I$ là trung điểm $AB$, $MA^2 + MB^2 = 2MI^2 + \dfrac{AB^2}{2}$; nhỏ nhất khi $M$ là hình chiếu của $I$.
- $MA + MB$ với $A$, $B$ cùng phía: lấy đối xứng $A'$, $M = A'B \cap (P)$.
- Mặt phẳng chứa đường thẳng $d$ cách $A$ xa nhất: nhận $\overrightarrow{AH}$ làm VTPT ($H$ là hình chiếu của $A$ lên $d$).
- Khoảng cách từ điểm trên mặt cầu $(I; R)$ đến $(P)$ (không cắt): nhỏ nhất $h - R$, lớn nhất $h + R$ với $h = d(I, (P))$.

### 3. Đường vuông góc chung

$M \in d_1$, $N \in d_2$ (tham số), giải $\overrightarrow{MN} \perp \vec u_1$, $\overrightarrow{MN} \perp \vec u_2$.

### 4. Mặt cầu

- Tiếp xúc hai mặt phẳng song song: $R$ bằng nửa khoảng cách, tâm thuộc mặt phẳng song song cách đều.
- Cắt mặt phẳng theo đường tròn tâm $H$ (hình chiếu của tâm), bán kính $\sqrt{R^2 - h^2}$.
- Đường thẳng cắt mặt cầu khi $d(I, \Delta) < R$; độ dài dây $2\sqrt{R^2 - d^2}$.

### 5. Mặt phẳng cắt ba trục

$\dfrac{x}{a} + \dfrac{y}{b} + \dfrac{z}{c} = 1$; thể tích tứ diện $\dfrac{\lvert abc\rvert}{6}$; nếu $A$ là trực tâm tam giác tạo bởi ba giao điểm thì $OA \perp$ mặt phẳng.

## II. Bài tập vận dụng

**Bài 1.** Cho $A(1; 2; 3)$, $B(3; 0; 1)$ và $(P): x + y + z - 3 = 0$. Tìm $M \in (P)$ để $MA^2 + MB^2$ nhỏ nhất.

**Bài 2.** Cho $A(1; 0; 1)$, $B(3; 2; 2)$. Tìm $M$ trên mặt phẳng $(Oxy)$ để $MA + MB$ nhỏ nhất.

**Bài 3.** Tìm đường vuông góc chung và khoảng cách giữa trục $Ox$ và đường thẳng $d: x = 1,\ y = s,\ z = 2 + s$.

**Bài 4.** Tìm điểm đối xứng của $A(1; 2; 3)$ qua mặt phẳng $(P): x + y + z = 0$.

**Bài 5.** Viết phương trình mặt cầu có tâm thuộc $d: x = t,\ y = 1,\ z = -t$ và tiếp xúc với hai mặt phẳng $(P): x + 2y + 2z + 3 = 0$, $(Q): x + 2y + 2z + 7 = 0$.

**Bài 6.** Mặt phẳng qua $A(1; 1; 1)$ cắt các tia $Ox$, $Oy$, $Oz$ tại $M$, $N$, $P$. Tìm mặt phẳng để thể tích tứ diện $OMNP$ nhỏ nhất.

**Bài 7.** Viết phương trình mặt phẳng qua $A(1; 2; 3)$, cắt ba trục tọa độ tại $M$, $N$, $P$ sao cho $A$ là trực tâm tam giác $MNP$.

**Bài 8.** Viết phương trình mặt phẳng chứa $d: x = 1 + t,\ y = 2t,\ z = -1$ và cách $A(0; 0; 1)$ một khoảng lớn nhất.

**Bài 9.** Mặt phẳng $(P): x + y + z - 3 = 0$ cắt mặt cầu $(S): x^2 + y^2 + z^2 = 9$ theo một đường tròn. Tìm tâm và bán kính đường tròn đó.

**Bài 10.** Chứng minh đường thẳng $\Delta: x = 1 + t,\ y = 2 + t,\ z = 3 + t$ cắt mặt cầu tâm $O$ bán kính 3 tại hai điểm và tính độ dài dây cung.

**Bài 11.** Điểm $M$ chạy trên mặt cầu $(S): (x - 1)^2 + (y - 2)^2 + (z - 2)^2 = 9$. Tìm giá trị nhỏ nhất và lớn nhất của khoảng cách từ $M$ đến $(P): 2x - y + 2z + 12 = 0$.

**Bài 12 (HSG).** Viết phương trình mặt cầu ngoại tiếp tứ diện $ABCD$ với $A(2; 0; 0)$, $B(0; 2; 0)$, $C(0; 0; 2)$, $D(2; 2; 2)$.

---

## III. Lời giải chi tiết

### Bài 1
Trung điểm $I(2; 1; 2)$. Hình chiếu của $I$ lên $(P)$: $t = \dfrac{2 + 1 + 2 - 3}{3} = \dfrac{2}{3}$, $M\left(\dfrac{4}{3}; \dfrac{1}{3}; \dfrac{4}{3}\right)$. Giá trị nhỏ nhất $2IM^2 + \dfrac{AB^2}{2} = 2 \cdot \dfrac{4}{3} + 6 = \dfrac{26}{3}$.

### Bài 2
$A$, $B$ cùng phía với $(Oxy)$ ($z > 0$). $A'(1; 0; -1)$; đường thẳng $A'B$: $(1 + 2t; 2t; -1 + 3t)$ cắt $z = 0$ tại $t = \dfrac{1}{3}$: $M\left(\dfrac{5}{3}; \dfrac{2}{3}; 0\right)$. Giá trị nhỏ nhất $A'B = \sqrt{4 + 4 + 9} = \sqrt{17}$.

### Bài 3
$M(t; 0; 0) \in Ox$, $N(1; s; 2 + s) \in d$, $\overrightarrow{MN} = (1 - t; s; 2 + s)$. $\overrightarrow{MN} \cdot (1; 0; 0) = 0 \Rightarrow t = 1$; $\overrightarrow{MN} \cdot (0; 1; 1) = 0 \Rightarrow 2s + 2 = 0 \Rightarrow s = -1$. $M(1; 0; 0)$, $N(1; -1; 1)$; đường vuông góc chung $MN$: $x = 1$, $y = -u$, $z = u$. Khoảng cách $MN = \sqrt{2}$.

### Bài 4
$t = \dfrac{1 + 2 + 3}{3} = 2$: $H(-1; 0; 1)$, $A' = 2H - A = (-3; -2; -1)$.

### Bài 5
$(P) \parallel (Q)$, khoảng cách $\dfrac{4}{3}$, nên $R = \dfrac{2}{3}$ và tâm thuộc mặt phẳng cách đều $x + 2y + 2z + 5 = 0$. Tâm $(t; 1; -t)$: $t + 2 - 2t + 5 = 0 \iff t = 7$. $(x - 7)^2 + (y - 1)^2 + (z + 7)^2 = \dfrac{4}{9}$.

### Bài 6
$\dfrac{x}{a} + \dfrac{y}{b} + \dfrac{z}{c} = 1$ ($a, b, c > 0$) qua $A$: $\dfrac{1}{a} + \dfrac{1}{b} + \dfrac{1}{c} = 1 \ge \dfrac{3}{\sqrt[3]{abc}}$, nên $abc \ge 27$, $V = \dfrac{abc}{6} \ge \dfrac{9}{2}$. Dấu bằng khi $a = b = c = 3$: $x + y + z - 3 = 0$.

### Bài 7
Với tứ diện $OMNP$ có ba cạnh đôi một vuông góc, hình chiếu của $O$ lên $(MNP)$ là trực tâm tam giác $MNP$. Vậy $A$ là trực tâm $\iff OA \perp (MNP)$: VTPT $(1; 2; 3)$, mặt phẳng $x + 2y + 3z - 14 = 0$.

### Bài 8
Gọi $H$ là hình chiếu của $A$ lên $d$: $H(1 + t; 2t; -1)$, $\overrightarrow{AH} \cdot (1; 2; 0) = 0 \iff 1 + 5t = 0 \iff t = -\dfrac{1}{5}$, $H\left(\dfrac{4}{5}; -\dfrac{2}{5}; -1\right)$. Mọi mặt phẳng $(P) \supset d$ có $d(A, (P)) \le AH$, dấu bằng khi $\overrightarrow{AH} = \left(\dfrac{4}{5}; -\dfrac{2}{5}; -2\right) \parallel (2; -1; -5)$ là VTPT: $2x - y - 5z - 7 = 0$. Khoảng cách lớn nhất $AH = \dfrac{2\sqrt{30}}{5}$.

### Bài 9
$h = d(O, (P)) = \sqrt{3}$, tâm đường tròn là hình chiếu của $O$: $H(1; 1; 1)$, bán kính $\sqrt{9 - 3} = \sqrt{6}$.

### Bài 10
$d(O, \Delta) = \dfrac{\lvert[\overrightarrow{OM_0}, \vec u]\rvert}{\lvert\vec u\rvert}$ với $M_0(1; 2; 3)$, $\vec u = (1; 1; 1)$: $[\overrightarrow{OM_0}, \vec u] = (-1; 2; -1)$, $d = \dfrac{\sqrt{6}}{\sqrt{3}} = \sqrt{2} < 3$: cắt tại hai điểm. Dây cung dài $2\sqrt{9 - 2} = 2\sqrt{7}$.

### Bài 11
$h = d(I, (P)) = \dfrac{\lvert 2 - 2 + 4 + 12\rvert}{3} = \dfrac{16}{3} > 3$. Nhỏ nhất $\dfrac{16}{3} - 3 = \dfrac{7}{3}$, lớn nhất $\dfrac{16}{3} + 3 = \dfrac{25}{3}$ (đạt tại hai giao điểm của mặt cầu với đường thẳng qua $I$ vuông góc $(P)$).

### Bài 12
Điểm $I(1; 1; 1)$ cách đều bốn điểm: $IA^2 = IB^2 = IC^2 = ID^2 = 3$. Mặt cầu $(x - 1)^2 + (y - 1)^2 + (z - 1)^2 = 3$. (Bốn điểm là bốn đỉnh không kề nhau của hình lập phương cạnh 2.)

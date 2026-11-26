# Thẻ ghi nhớ Vectơ và hệ trục tọa độ trong không gian

## Vectơ trong không gian

### Quy tắc hình hộp là gì?
Với hình hộp $ABCD.A'B'C'D'$: $\overrightarrow{AB} + \overrightarrow{AD} + \overrightarrow{AA'} = \overrightarrow{AC'}$.

*Vì sao:* $\overrightarrow{AB} + \overrightarrow{AD} = \overrightarrow{AC}$ và $\overrightarrow{AA'} = \overrightarrow{CC'}$.

### Hệ thức vectơ của trọng tâm tứ diện $ABCD$?
$\overrightarrow{GA} + \overrightarrow{GB} + \overrightarrow{GC} + \overrightarrow{GD} = \vec 0$. Tọa độ $G$ là trung bình cộng tọa độ bốn đỉnh.

### $M, N$ là trung điểm $AB$, $CD$ của tứ diện. $\overrightarrow{MN}$ bằng gì?
$\overrightarrow{MN} = \frac12(\overrightarrow{AD} + \overrightarrow{BC}) = \frac12(\overrightarrow{AC} + \overrightarrow{BD})$.

### Mẹo rút gọn một tổng nhiều vectơ?
Thay mỗi vectơ bằng vectơ bằng nó để chúng **nối đuôi nhau**; tổng bằng vectơ từ điểm đầu đến điểm cuối (khép kín thì bằng $\vec 0$).

## Tích vô hướng

### Công thức tích vô hướng theo độ dài và góc?
$\vec a\cdot\vec b = \lvert\vec a\rvert\lvert\vec b\rvert\cos(\vec a, \vec b)$. Hai vectơ vuông góc $\iff \vec a\cdot\vec b = 0$.

### Góc giữa hai vectơ và góc giữa hai đường thẳng khác nhau thế nào?
Góc giữa hai vectơ từ $0^\circ$ đến $180^\circ$ (dùng $\cos$ có dấu). Góc giữa hai đường thẳng từ $0^\circ$ đến $90^\circ$ (dùng $\lvert\cos\rvert$).

### Tích vô hướng theo tọa độ? Độ dài vectơ?
$\vec a\cdot\vec b = a_1b_1 + a_2b_2 + a_3b_3$; $\lvert\vec a\rvert = \sqrt{a_1^2 + a_2^2 + a_3^2}$.

### Diện tích tam giác $ABC$ tính qua tích vô hướng thế nào?
$S = \frac12\sqrt{AB^2\cdot AC^2 - (\overrightarrow{AB}\cdot\overrightarrow{AC})^2}$.

## Tọa độ điểm

### Tọa độ của $\overrightarrow{AB}$?
$\overrightarrow{AB} = (x_B - x_A; y_B - y_A; z_B - z_A)$: tọa độ **cuối trừ đầu**.

### Hình chiếu của $M(x; y; z)$ lên mặt phẳng $(Oxy)$ và lên trục $Oz$?
Lên $(Oxy)$: $(x; y; 0)$. Lên $Oz$: $(0; 0; z)$.

### Điểm đối xứng của $M(x; y; z)$ qua mặt phẳng $(Oxy)$ và qua trục $Oz$?
Qua $(Oxy)$: $(x; y; -z)$ (chỉ đổi dấu cao độ).
Qua $Oz$: $(-x; -y; z)$ (giữ cao độ, đổi dấu hai tọa độ còn lại).

### Khoảng cách từ $M(x; y; z)$ đến trục $Ox$?
$\sqrt{y^2 + z^2}$. Tương tự đến $Oy$ là $\sqrt{x^2 + z^2}$, đến $Oz$ là $\sqrt{x^2 + y^2}$.

### Khoảng cách từ $M(x; y; z)$ đến mặt phẳng $(Oxy)$?
$\lvert z\rvert$.

### Tìm đỉnh $D$ của hình bình hành $ABCD$ thế nào?
$\overrightarrow{AD} = \overrightarrow{BC}$, nên $D = A + C - B$ (theo từng tọa độ).

### Ba điểm $A, B, C$ thẳng hàng khi nào?
Khi $\overrightarrow{AB}$ và $\overrightarrow{AC}$ cùng phương, tức có $k$ để $\overrightarrow{AB} = k\overrightarrow{AC}$.

## Ứng dụng và cực trị

### Đặt hệ trục cho hình chóp có $SA \perp$ đáy là hình vuông $ABCD$ thế nào?
Gốc tại $A$; $B$ trên $Ox$, $D$ trên $Oy$, $S$ trên $Oz$. Với cạnh $a$, $SA = h$: $B(a; 0; 0)$, $C(a; a; 0)$, $D(0; a; 0)$, $S(0; 0; h)$.

### Vật chuyển động thẳng đều từ $M_0$, sau mỗi đơn vị thời gian dịch chuyển $\vec v$. Vị trí sau thời gian $t$?
$M(t) = M_0 + t\vec v$ (cộng theo từng tọa độ).

### Tìm $M$ trên mặt phẳng $(P)$ để $MA + MB$ nhỏ nhất?
- $A, B$ khác phía: $M = AB \cap (P)$, min $= AB$.
- $A, B$ cùng phía: lấy $B'$ đối xứng với $B$ qua $(P)$, $M = AB' \cap (P)$, min $= AB'$.

### Tìm $M$ trên mặt phẳng để $MA^2 + MB^2 + MC^2$ nhỏ nhất?
Chèn trọng tâm $G$: tổng bằng $3MG^2 + GA^2 + GB^2 + GC^2$. Nhỏ nhất khi $M$ là hình chiếu của $G$ lên mặt phẳng.

### Ba lực đôi một vuông góc có độ lớn $a, b, c$. Độ lớn hợp lực?
$\sqrt{a^2 + b^2 + c^2}$ (ví dụ $3, 4, 12$ cho $13$).

# Chủ đề 3. Tỉ lệ thức, dãy tỉ số bằng nhau nâng cao

> Bài tìm $x, y, z$ từ dãy tỉ số bằng nhau và bài chứng minh tỉ lệ thức là câu quen thuộc của đề HSG lớp 7. Chủ đề này luyện hai công cụ chính: tính chất dãy tỉ số bằng nhau và phương pháp đặt $k$, cùng những trường hợp đặc biệt dễ bị bỏ sót.

## I. Kiến thức cần nắm

> **Ý tưởng xuyên suốt:** một dãy tỉ số bằng nhau thực chất là "mọi tử đều bằng $k$ lần mẫu tương ứng". Đặt $k$ là cách chắc chắn nhất; tính chất dãy tỉ số bằng nhau là cách nhanh nhất.

### 1. Tỉ lệ thức và tính chất
Tỉ lệ thức là đẳng thức của hai tỉ số $\frac ab = \frac cd$ (với $b, d \ne 0$).
- **Tính chất cơ bản:** $\frac ab = \frac cd \Rightarrow ad = bc$ (nhân hai vế với $bd$).
- **Ngược lại:** nếu $ad = bc$ với $a, b, c, d \ne 0$ thì có bốn tỉ lệ thức
  $$\frac ab = \frac cd, \quad \frac ac = \frac bd, \quad \frac db = \frac ca, \quad \frac dc = \frac ba.$$

*Ví dụ:* từ $2x = 3y$ (với $y \ne 0$) suy ra $\frac x3 = \frac y2$.

### 2. Tính chất dãy tỉ số bằng nhau
Nếu $\frac ab = \frac cd = \frac ef$ thì
$$\frac ab = \frac cd = \frac ef = \frac{a + c + e}{b + d + f} = \frac{a - c + e}{b - d + f} = \frac{ma + nc + pe}{mb + nd + pf}$$
(với điều kiện các mẫu khác $0$).

*Chứng minh:* đặt giá trị chung là $k$, thì $a = kb$, $c = kd$, $e = kf$. Khi đó $ma + nc + pe = k(mb + nd + pf)$, chia hai vế cho $mb + nd + pf \ne 0$ được điều phải chứng minh.

**Cách dùng:** chọn hệ số $m, n, p$ để tử tổng hợp đúng bằng biểu thức đề bài cho. Ví dụ đề cho $2x + 3y - z = 24$ thì viết $\frac x2 = \frac y3 = \frac z5 = \frac{2x + 3y - z}{2\cdot 2 + 3\cdot 3 - 5}$.

### 3. Phương pháp đặt $k$
Đặt $\frac ab = \frac cd = k$, thay $a = bk$, $c = dk$ vào biểu thức cần chứng minh hoặc cần tính. Phương pháp này dùng được cả khi đề cho **tích** hoặc **bình phương** (lúc đó tính chất dãy tỉ số bằng nhau không dùng thẳng được).

*Ví dụ:* $\frac x2 = \frac y5$ và $xy = 40$. Đặt $x = 2k$, $y = 5k$, được $10k^2 = 40$, $k = \pm 2$.

### 4. Đưa về dãy tỉ số chung
- **Hai tỉ lệ thức nối nhau:** $\frac x3 = \frac y4$ và $\frac y5 = \frac z7$. Làm cho $y$ có cùng mẫu bằng BCNN$(4, 5) = 20$: $\frac{x}{15} = \frac{y}{20}$ và $\frac{y}{20} = \frac{z}{28}$.
- **Dạng $ax = by = cz$:** chia cho BCNN của $a, b, c$. Ví dụ $2x = 3y = 5z$, chia cho $30$ được $\frac{x}{15} = \frac{y}{10} = \frac{z}{6}$.

### 5. Trường hợp tổng các mẫu bằng $0$
Khi dùng $\frac{a + c + e}{b + d + f}$ phải có $b + d + f \ne 0$. Trong bài dạng
$$\frac{a}{b + c} = \frac{b}{c + a} = \frac{c}{a + b},$$
tổng mẫu là $2(a + b + c)$. Phải **xét hai trường hợp**:
- $a + b + c \ne 0$: mỗi tỉ số bằng $\frac{a + b + c}{2(a + b + c)} = \frac12$.
- $a + b + c = 0$: thì $b + c = -a$, mỗi tỉ số bằng $-1$.

### 6. Chứng minh tỉ lệ thức
Ba cách thường dùng:
1. **Đặt $k$** rồi chứng minh hai vế cùng bằng một biểu thức của $k$.
2. **Dùng tính chất dãy tỉ số:** từ $\frac ab = \frac cd$ suy ra $\frac ac = \frac bd = \frac{a + b}{c + d} = \frac{a - b}{c - d}$, rồi hoán vị.
3. **Nhân chéo:** chứng minh tích chéo của hai vế bằng nhau.

*Ví dụ:* nếu $\frac ab = \frac cd$ thì $\frac{a + b}{b} = \frac{c + d}{d}$, vì cộng $1$ vào hai vế.

### 7. Sai lầm hay gặp
- Dùng tính chất dãy tỉ số với **tích**: viết $\frac x2 = \frac y5 = \frac{xy}{10}$ là sai. Đúng: $\frac{x}{2}\cdot\frac y5 = \left(\frac x2\right)^2 = \frac{xy}{10}$.
- Chia cho tổng mẫu mà không xét trường hợp tổng đó bằng $0$.
- Khi $k^2 = 4$ chỉ lấy $k = 2$, bỏ sót $k = -2$.
- Nối hai tỉ lệ thức mà không quy về cùng mẫu cho số hạng chung.

---

## II. Bài tập vận dụng

**Bài 1.** Tìm $x, y, z$, biết $\frac x2 = \frac y3 = \frac z5$ và $2x + 3y - z = 24$.

**Bài 2.** Tìm $x, y$, biết $\frac x2 = \frac y5$ và $xy = 40$.

**Bài 3.** Tìm $x, y, z$, biết $2x = 3y = 5z$ và $x + y - z = 95$.

**Bài 4.** Tìm $x, y, z$, biết $\frac x3 = \frac y4$, $\frac y5 = \frac z7$ và $2x + 3y - z = 186$.

**Bài 5.** Tìm $x, y, z$, biết $\frac{x - 1}{2} = \frac{y - 2}{3} = \frac{z - 3}{4}$ và $x - 2y + 3z = 14$.

**Bài 6.** Tìm $x, y, z$, biết $\frac x2 = \frac y3 = \frac z4$ và $x^2 - y^2 + 2z^2 = 108$.

**Bài 7 (chứng minh tỉ lệ thức).** Cho $\frac ab = \frac cd$ (các mẫu khác $0$). Chứng minh $\frac{2a + 3b}{2a - 3b} = \frac{2c + 3d}{2c - 3d}$.

**Bài 8.** Cho $a^2 = bc$ với $a \ne b$, $a \ne c$ và $a, b, c$ khác $0$. Chứng minh $\frac{a + b}{a - b} = \frac{c + a}{c - a}$.

**Bài 9.** Cho $\frac ab = \frac cd$ với $c, d \ne 0$ và $c + d \ne 0$. Chứng minh $\frac{ab}{cd} = \frac{a^2 + b^2}{c^2 + d^2} = \frac{(a + b)^2}{(c + d)^2}$.

**Bài 10.** Cho các số $a, b, c$ khác $0$ thỏa mãn $\frac ab = \frac bc = \frac ca$ và $a + b + c \ne 0$. Tính $M = \frac{(a + b + c)^2}{a^2 + b^2 + c^2}$.

**Bài 11 (xét hai trường hợp).** Cho các số $a, b, c$ khác $0$ thỏa mãn $\frac{a}{b + c} = \frac{b}{c + a} = \frac{c}{a + b}$ (các mẫu khác $0$). Tính
$$P = \frac{b + c}{a} + \frac{c + a}{b} + \frac{a + b}{c}.$$

**Bài 12 (HSG).** Cho các số $a, b, c$ khác $0$ thỏa mãn $\frac{a + b - c}{c} = \frac{b + c - a}{a} = \frac{c + a - b}{b}$. Tính
$$Q = \frac{(a + b)(b + c)(c + a)}{abc}.$$

**Bài 13 (HSG).** Tìm $x, y, z$, biết
$$\frac{x}{y + z + 1} = \frac{y}{x + z + 1} = \frac{z}{x + y - 2} = x + y + z.$$

**Bài 14 (HSG).** Cho $a, b, c$ khác $0$ và $\frac{bz - cy}{a} = \frac{cx - az}{b} = \frac{ay - bx}{c}$. Chứng minh $\frac xa = \frac yb = \frac zc$.

---

## III. Lời giải chi tiết

### Bài 1
Theo tính chất dãy tỉ số bằng nhau:
$$\frac x2 = \frac y3 = \frac z5 = \frac{2x + 3y - z}{2\cdot 2 + 3\cdot 3 - 5} = \frac{24}{8} = 3.$$
Vậy $x = 6$, $y = 9$, $z = 15$.

### Bài 2
Đặt $\frac x2 = \frac y5 = k$, thì $x = 2k$, $y = 5k$. Từ $xy = 40$ có $10k^2 = 40$, nên $k^2 = 4$, $k = 2$ hoặc $k = -2$.
- $k = 2$: $x = 4$, $y = 10$.
- $k = -2$: $x = -4$, $y = -10$.

*Nhận xét:* đề cho tích $xy$ nên không cộng tử, cộng mẫu được. Đặt $k$ là cách gọn nhất. Đừng quên $k = -2$.

### Bài 3
Chia các vế của $2x = 3y = 5z$ cho $30$ (BCNN của $2, 3, 5$): $\frac{x}{15} = \frac{y}{10} = \frac{z}{6}$.
Theo tính chất dãy tỉ số bằng nhau:
$$\frac{x}{15} = \frac{y}{10} = \frac z6 = \frac{x + y - z}{15 + 10 - 6} = \frac{95}{19} = 5.$$
Vậy $x = 75$, $y = 50$, $z = 30$.

### Bài 4
Từ $\frac x3 = \frac y4$ suy ra $\frac{x}{15} = \frac{y}{20}$ (chia hai vế cho $5$). Từ $\frac y5 = \frac z7$ suy ra $\frac{y}{20} = \frac{z}{28}$ (chia hai vế cho $4$). Do đó
$$\frac{x}{15} = \frac{y}{20} = \frac{z}{28} = \frac{2x + 3y - z}{30 + 60 - 28} = \frac{186}{62} = 3.$$
Vậy $x = 45$, $y = 60$, $z = 84$.

*Nhận xét:* $y$ có mặt ở cả hai tỉ lệ thức với mẫu $4$ và $5$. Đưa về cùng mẫu $20$ để nối thành một dãy.

### Bài 5
Đặt giá trị chung là $k$: $x = 2k + 1$, $y = 3k + 2$, $z = 4k + 3$. Thay vào $x - 2y + 3z = 14$:
$$(2k + 1) - 2(3k + 2) + 3(4k + 3) = 14 \iff 8k + 6 = 14 \iff k = 1.$$
Vậy $x = 3$, $y = 5$, $z = 7$.

*Cách khác:* $\frac{x - 1}{2} = \frac{2y - 4}{6} = \frac{3z - 9}{12} = \frac{(x - 1) - (2y - 4) + (3z - 9)}{2 - 6 + 12} = \frac{x - 2y + 3z - 6}{8} = \frac{8}{8} = 1$.

### Bài 6
Đặt $x = 2k$, $y = 3k$, $z = 4k$. Khi đó
$$x^2 - y^2 + 2z^2 = 4k^2 - 9k^2 + 32k^2 = 27k^2 = 108,$$
nên $k^2 = 4$, $k = 2$ hoặc $k = -2$.

Vậy $(x; y; z) = (4; 6; 8)$ hoặc $(x; y; z) = (-4; -6; -8)$.

### Bài 7
Đặt $\frac ab = \frac cd = k$, thì $a = bk$, $c = dk$. Khi đó
$$\frac{2a + 3b}{2a - 3b} = \frac{b(2k + 3)}{b(2k - 3)} = \frac{2k + 3}{2k - 3}, \qquad \frac{2c + 3d}{2c - 3d} = \frac{d(2k + 3)}{d(2k - 3)} = \frac{2k + 3}{2k - 3}.$$
Hai vế bằng nhau, điều phải chứng minh.

*Cách khác:* từ $\frac ab = \frac cd$ suy ra $\frac ac = \frac bd = \frac{2a}{2c} = \frac{3b}{3d} = \frac{2a + 3b}{2c + 3d} = \frac{2a - 3b}{2c - 3d}$. Hoán vị hai trung tỉ của tỉ lệ thức cuối được điều phải chứng minh.

### Bài 8
Từ $a^2 = bc$ (các số khác $0$) suy ra $\frac ac = \frac ba$. Theo tính chất dãy tỉ số bằng nhau:
$$\frac ac = \frac ba = \frac{a + b}{c + a} = \frac{a - b}{c - a}.$$
Vì $a \ne b$ và $a \ne c$ nên $a - b \ne 0$, $c - a \ne 0$. Từ $\frac{a + b}{c + a} = \frac{a - b}{c - a}$, hoán vị hai trung tỉ:
$$\frac{a + b}{a - b} = \frac{c + a}{c - a}.$$

*Ghi chú:* cần $c + a \ne 0$ để viết tỉ số $\frac{a+b}{c+a}$. Nếu $c + a = 0$ thì $c = -a$, $a^2 = bc = -ab$, nên $b = -a$ và hai vế đều bằng $0$, đẳng thức vẫn đúng.

### Bài 9
Đặt $\frac ab = \frac cd = k$, thì $a = bk$, $c = dk$. Vì $c \ne 0$ nên $k \ne 0$.
- $\frac{ab}{cd} = \frac{b^2k}{d^2k} = \frac{b^2}{d^2}$.
- $\frac{a^2 + b^2}{c^2 + d^2} = \frac{b^2(k^2 + 1)}{d^2(k^2 + 1)} = \frac{b^2}{d^2}$.
- $\frac{(a + b)^2}{(c + d)^2} = \frac{b^2(k + 1)^2}{d^2(k + 1)^2} = \frac{b^2}{d^2}$ (vì $c + d = d(k + 1) \ne 0$ nên $k + 1 \ne 0$).

Ba biểu thức cùng bằng $\frac{b^2}{d^2}$, điều phải chứng minh.

### Bài 10
Vì $a + b + c \ne 0$, theo tính chất dãy tỉ số bằng nhau:
$$\frac ab = \frac bc = \frac ca = \frac{a + b + c}{b + c + a} = 1.$$
Suy ra $a = b$, $b = c$, tức là $a = b = c$. Khi đó
$$M = \frac{(3a)^2}{3a^2} = \frac{9a^2}{3a^2} = 3.$$

### Bài 11
**Trường hợp 1: $a + b + c \ne 0$.** Theo tính chất dãy tỉ số bằng nhau:
$$\frac{a}{b + c} = \frac{b}{c + a} = \frac{c}{a + b} = \frac{a + b + c}{2(a + b + c)} = \frac12.$$
Nghịch đảo: $\frac{b + c}{a} = \frac{c + a}{b} = \frac{a + b}{c} = 2$, nên $P = 6$.

**Trường hợp 2: $a + b + c = 0$.** Khi đó $b + c = -a$, $c + a = -b$, $a + b = -c$, nên
$$P = \frac{-a}{a} + \frac{-b}{b} + \frac{-c}{c} = -3.$$
(Ví dụ $a = 2$, $b = 3$, $c = -5$: ba tỉ số đều bằng $-1$.)

Vậy $P = 6$ hoặc $P = -3$.

*Nhận xét:* bỏ sót trường hợp 2 là lỗi phổ biến nhất của dạng này, và thường bị trừ nửa số điểm.

### Bài 12
Cộng $2$ vào mỗi tỉ số:
$$\frac{a + b - c}{c} + 2 = \frac{a + b + c}{c}, \quad \frac{b + c - a}{a} + 2 = \frac{a + b + c}{a}, \quad \frac{c + a - b}{b} + 2 = \frac{a + b + c}{b}.$$
Do đó $\frac{a + b + c}{c} = \frac{a + b + c}{a} = \frac{a + b + c}{b}$.

**Trường hợp 1: $a + b + c \ne 0$.** Suy ra $a = b = c$, và
$$Q = \frac{2a\cdot 2a\cdot 2a}{a^3} = 8.$$
**Trường hợp 2: $a + b + c = 0$.** Khi đó $a + b = -c$, $b + c = -a$, $c + a = -b$, nên
$$Q = \frac{(-c)(-a)(-b)}{abc} = -1.$$
Vậy $Q = 8$ hoặc $Q = -1$.

### Bài 13
Đặt $S = x + y + z$. Tổng các mẫu là $(y + z + 1) + (x + z + 1) + (x + y - 2) = 2S$.

**Trường hợp 1: $S = 0$.** Mỗi tỉ số bằng $S = 0$, nên $x = y = z = 0$. Thử lại: các mẫu bằng $1$, $1$, $-2$ đều khác $0$ và mọi tỉ số bằng $0 = x + y + z$. Nhận $(0; 0; 0)$.

**Trường hợp 2: $S \ne 0$.** Theo tính chất dãy tỉ số bằng nhau, mỗi tỉ số bằng $\frac{x + y + z}{2S} = \frac12$. Vậy $S = \frac12$ và:
- $x = \frac12(y + z + 1) = \frac12\left(\frac12 - x + 1\right)$, nên $2x = \frac32 - x$, $x = \frac12$;
- $y = \frac12(x + z + 1) = \frac12\left(\frac12 - y + 1\right)$, nên $y = \frac12$;
- $z = \frac12(x + y - 2) = \frac12\left(\frac12 - z - 2\right)$, nên $2z = -\frac32 - z$, $z = -\frac12$.

Thử lại: $x + y + z = \frac12$ và ba tỉ số đều bằng $\frac12$.

Vậy $(x; y; z) = (0; 0; 0)$ hoặc $(x; y; z) = \left(\frac12; \frac12; -\frac12\right)$.

*Nhận xét:* mẹo then chốt là thay $y + z = S - x$, nhờ đó mỗi phương trình chỉ còn một ẩn.

### Bài 14
Nhân tử và mẫu của ba tỉ số lần lượt với $a$, $b$, $c$:
$$\frac{abz - acy}{a^2} = \frac{bcx - abz}{b^2} = \frac{acy - bcx}{c^2}.$$
Theo tính chất dãy tỉ số bằng nhau (mẫu $a^2 + b^2 + c^2 > 0$), các tỉ số này bằng
$$\frac{(abz - acy) + (bcx - abz) + (acy - bcx)}{a^2 + b^2 + c^2} = \frac{0}{a^2 + b^2 + c^2} = 0.$$
Do đó $bz - cy = 0$ và $cx - az = 0$, tức là $bz = cy$ và $cx = az$. Suy ra $\frac yb = \frac zc$ và $\frac xa = \frac zc$.

Vậy $\frac xa = \frac yb = \frac zc$.

*Nhận xét:* nhân thêm để tổng các tử triệt tiêu thành $0$. Mẫu $a^2 + b^2 + c^2$ luôn dương nên không phải xét trường hợp.

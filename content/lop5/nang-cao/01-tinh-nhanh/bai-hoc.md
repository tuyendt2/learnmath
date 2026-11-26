# Chủ đề 1. Tính nhanh với phân số và số thập phân

> Câu "tính bằng cách thuận tiện nhất" gần như luôn có mặt ở câu 1 của đề thi vào lớp 6. Bài không khó nếu em nhìn ra quy luật: thừa số chung, các số "tròn", dãy cách đều hay các thừa số triệt tiêu nhau.

## I. Kiến thức cần nắm

> **Ý tưởng xuyên suốt:** trước khi tính, hãy **quan sát** biểu thức. Tìm các số giống nhau, các cặp số có tổng hay tích tròn, các số liên tiếp. Tính đúng thứ tự từ trái sang phải luôn ra kết quả, nhưng tính khéo thì nhanh hơn và ít sai hơn.

### 1. Các tính chất dùng để tính nhanh
Với các số bất kỳ (số tự nhiên, phân số, số thập phân):
- **Giao hoán:** $a + b = b + a$; $\quad a \times b = b \times a$.
- **Kết hợp:** $(a + b) + c = a + (b + c)$; $\quad (a \times b) \times c = a \times (b \times c)$.
- **Nhân một số với một tổng, một hiệu:** $a \times b + a \times c = a \times (b + c)$; $\quad a \times b - a \times c = a \times (b - c)$.
- **Chia một tổng cho một số:** $(a + b) : c = a : c + b : c$.

*Vì sao nhân với một tổng được tách ra?* $a \times (b + c)$ là $(b + c)$ nhóm, mỗi nhóm $a$ đồ vật. Đếm riêng $b$ nhóm rồi $c$ nhóm thì được $a \times b + a \times c$ đồ vật, cũng chừng ấy.

**Mẹo đặt thừa số chung:** số $a$ đứng một mình chính là $a \times 1$.

*Ví dụ:* $3{,}7 \times 45 + 3{,}7 \times 54 + 3{,}7 = 3{,}7 \times (45 + 54 + 1) = 3{,}7 \times 100 = 370$.

**Tạo thừa số chung bằng cách dịch dấu phẩy:** $0{,}36 \times 420 = 3{,}6 \times 42$ (một thừa số gấp 10 lần, thừa số kia giảm 10 lần thì tích không đổi).

### 2. Các cặp số "tròn" và nhân, chia nhanh
Nên thuộc lòng các cặp có tích tròn:
$$2 \times 5 = 10, \quad 4 \times 25 = 100, \quad 8 \times 125 = 1000, \quad 0{,}25 \times 4 = 1, \quad 0{,}125 \times 8 = 1.$$

Từ đó có các quy tắc nhân, chia nhanh:

| Phép tính | Làm nhanh bằng | Vì sao |
|---|---|---|
| $a \times 0{,}5$ | $a : 2$ | $0{,}5 = \frac12$ |
| $a \times 0{,}25$ | $a : 4$ | $0{,}25 = \frac14$ |
| $a \times 0{,}125$ | $a : 8$ | $0{,}125 = \frac18$ |
| $a : 0{,}5$ | $a \times 2$ | chia cho $\frac12$ là nhân với $2$ |
| $a : 0{,}25$ | $a \times 4$ | chia cho $\frac14$ là nhân với $4$ |
| $a : 0{,}125$ | $a \times 8$ | chia cho $\frac18$ là nhân với $8$ |
| $a \times 0{,}1$; $a : 0{,}1$ | dời dấu phẩy sang trái, sang phải một hàng | $0{,}1 = \frac{1}{10}$ |

*Ví dụ:* $2{,}5 \times 6{,}8 \times 0{,}4 = (2{,}5 \times 0{,}4) \times 6{,}8 = 1 \times 6{,}8 = 6{,}8$.

*Ví dụ:* $7{,}2 : 0{,}25 - 7{,}2 \times 3 = 7{,}2 \times 4 - 7{,}2 \times 3 = 7{,}2 \times 1 = 7{,}2$.

### 3. Tổng của dãy số cách đều
Dãy số cách đều là dãy mà hai số liền nhau luôn hơn kém nhau cùng một số $d$ (gọi là **khoảng cách**). Dãy có thể gồm số thập phân, ví dụ $0{,}2;\ 0{,}5;\ 0{,}8;\ \dots$ với $d = 0{,}3$.

$$\text{Số số hạng} = (\text{số cuối} - \text{số đầu}) : d + 1, \qquad \text{Tổng} = (\text{số đầu} + \text{số cuối}) \times \text{số số hạng} : 2.$$

*Vì sao công thức tổng đúng?* Viết dãy hai lần, một lần xuôi, một lần ngược, rồi cộng từng cột. Cột nào cũng có tổng bằng $(\text{số đầu} + \text{số cuối})$. Có bao nhiêu số hạng thì có bấy nhiêu cột, và ta đã cộng dãy **hai lần**, nên chia 2.

*Vì sao có "$+1$"?* Từ số đầu đến số cuối có $(\text{cuối} - \text{đầu}) : d$ **khoảng cách**. Số số hạng nhiều hơn số khoảng cách 1 (giống như trồng cây hai đầu đường).

*Ví dụ:* $0{,}2 + 0{,}5 + 0{,}8 + \dots + 2{,}9$. Số số hạng: $(2{,}9 - 0{,}2) : 0{,}3 + 1 = 10$. Tổng: $(0{,}2 + 2{,}9) \times 10 : 2 = 15{,}5$.

### 4. Tích có các thừa số triệt tiêu
Khi tích có nhiều phân số, tử của phân số này thường bằng mẫu của phân số kia. Viết ra vài thừa số đầu và cuối rồi gạch bỏ.

*Ví dụ:* $\left(1 - \frac12\right) \times \left(1 - \frac13\right) \times \left(1 - \frac14\right) \times \left(1 - \frac15\right) = \frac12 \times \frac23 \times \frac34 \times \frac45 = \frac{1 \times 2 \times 3 \times 4}{2 \times 3 \times 4 \times 5} = \frac15.$

Cũng vậy với biểu thức dạng phân số: nếu tử số và mẫu số có **cùng một thừa số**, hãy làm xuất hiện thừa số đó rồi rút gọn.

*Ví dụ:* $\dfrac{1{,}5 \times 4 + 1{,}5 \times 6}{0{,}3 \times 10} = \dfrac{1{,}5 \times 10}{0{,}3 \times 10} = 5$.

### 5. Biến đổi tử số cho giống mẫu số
Dạng hay gặp: $\dfrac{a \times b - c}{\dots}$ với $a$, $b$ là các số liền nhau. Hãy tách một thừa số thành tổng, ví dụ $a = (a - 1) + 1$, để tử số có dạng giống mẫu số.

*Ví dụ:* $\dfrac{35 \times 47 - 12}{34 \times 47 + 35}$. Ta có $35 \times 47 = 34 \times 47 + 47$, nên tử số $= 34 \times 47 + 47 - 12 = 34 \times 47 + 35$, đúng bằng mẫu số. Kết quả bằng $1$.

### 6. Tổng có dạng "nhân lên rồi trừ đi"
Với tổng $A = \frac12 + \frac14 + \frac18 + \dots + \frac{1}{64}$, mỗi số hạng bằng một nửa số hạng đứng trước. Nhân $A$ với $2$:
$$2 \times A = 1 + \frac12 + \frac14 + \dots + \frac{1}{32}.$$
Lấy $2 \times A$ trừ $A$, các số hạng giống nhau triệt tiêu, còn $A = 1 - \frac{1}{64} = \frac{63}{64}$.

*Cách nhìn khác:* $1 - \frac12 = \frac12$, rồi $\frac12 - \frac14 = \frac14$, ... Cứ lấy 1 trừ dần thì sau cùng còn đúng số hạng cuối $\frac{1}{64}$. Vậy tổng đã trừ đi là $1 - \frac{1}{64}$.

### 7. Sai lầm hay gặp
- **Đặt thừa số chung nhưng quên số hạng đứng một mình.** $4{,}75 \times 99 + 4{,}75 = 4{,}75 \times (99 + 1)$, không phải $4{,}75 \times 99$.
- **Nhầm $a : 0{,}25$ với $a \times 0{,}25$.** Chia cho $0{,}25$ là **nhân với 4**, kết quả lớn hơn $a$.
- **Đếm thiếu số hạng** của dãy cách đều vì quên "$+1$".
- **Rút gọn sai** một phân số có tổng ở tử: $\frac{2 + 5}{2}$ không bằng $5$. Chỉ rút gọn được khi tử và mẫu là **tích** có chung thừa số.

---

## II. Bài tập vận dụng

**Bài 1.** Tính bằng cách thuận tiện nhất:
a) $4{,}75 \times 36 + 4{,}75 \times 63 + 4{,}75$;
b) $0{,}25 \times 7{,}3 \times 40 + 2{,}7 \times 10$.

**Bài 2.** Tính bằng cách thuận tiện nhất:
a) $45{,}6 : 0{,}25 - 45{,}6 \times 4 + 0{,}5 \times 45{,}6 \times 2$;
b) $(17{,}5 \times 0{,}8 + 17{,}5 : 5) : 0{,}125$.

**Bài 3.** Tính bằng cách thuận tiện nhất:
a) $\frac{5}{9} \times \frac{7}{13} + \frac{5}{9} \times \frac{9}{13} - \frac{5}{9} \times \frac{3}{13}$;
b) $\left(1 - \frac12\right) \times \left(1 - \frac13\right) \times \left(1 - \frac14\right) \times \dots \times \left(1 - \frac{1}{100}\right)$;
c) $\left(1 + \frac13\right) \times \left(1 + \frac14\right) \times \left(1 + \frac15\right) \times \dots \times \left(1 + \frac{1}{99}\right)$.

**Bài 4.** Tính:
a) $\frac{1}{0{,}5} + \frac{1}{0{,}25} + \frac{1}{0{,}125} + \frac{1}{0{,}0625}$;
b) $13{,}6 : 0{,}25 + 13{,}6 : 0{,}5 - 13{,}6 \times 5$.

**Bài 5 (dãy cách đều).** Tính tổng:
a) $0{,}1 + 0{,}3 + 0{,}5 + 0{,}7 + \dots + 19{,}7 + 19{,}9$;
b) $10{,}11 + 11{,}12 + 12{,}13 + \dots + 97{,}98 + 98{,}99$.

**Bài 6.** Tính nhanh:
a) $\dfrac{2023 \times 2024 - 1}{2022 \times 2024 + 2023}$;
b) $\dfrac{254 \times 399 - 145}{254 + 399 \times 253}$.

**Bài 7.** Tìm $y$, biết:
a) $y \times 4{,}5 + y : 2 + y \times 5 = 25$;
b) $(y + 0{,}1) + (y + 0{,}4) + (y + 0{,}7) + \dots + (y + 2{,}8) = 23{,}5$.

**Bài 8.** Tính $A = \frac12 + \frac14 + \frac18 + \frac{1}{16} + \frac{1}{32} + \frac{1}{64} + \frac{1}{128} + \frac{1}{256}$.

**Bài 9 (dấu xen kẽ).** Tính:
a) $0{,}1 - 0{,}2 + 0{,}3 - 0{,}4 + 0{,}5 - 0{,}6 + \dots + 1{,}9 - 2{,}0 + 2{,}1$;
b) $\frac{99}{100} - \frac{98}{100} + \frac{97}{100} - \frac{96}{100} + \dots + \frac{3}{100} - \frac{2}{100} + \frac{1}{100}$.

**Bài 10.** Tính nhanh:
$$\frac{1 \times 2 \times 3 + 2 \times 4 \times 6 + 3 \times 6 \times 9 + 4 \times 8 \times 12}{1 \times 3 \times 5 + 2 \times 6 \times 10 + 3 \times 9 \times 15 + 4 \times 12 \times 20}.$$

**Bài 11 (đề thi vào lớp 6).** Tính bằng cách hợp lý:
$$\frac{0{,}18 \times 1230 + 0{,}9 \times 4567 \times 2 + 3 \times 5310 \times 0{,}6}{1 + 4 + 7 + 10 + \dots + 52 + 55 - 514}.$$

**Bài 12.** Tính tích
$$P = \frac{2 \times 2}{1 \times 3} \times \frac{3 \times 3}{2 \times 4} \times \frac{4 \times 4}{3 \times 5} \times \dots \times \frac{99 \times 99}{98 \times 100}.$$

**Bài 13 (khó).** Tính
$$B = \frac{\frac12 + \frac13 + \frac14 + \dots + \frac{1}{100}}{\frac{99}{1} + \frac{98}{2} + \frac{97}{3} + \dots + \frac{1}{99}}.$$

---

## III. Lời giải chi tiết

### Bài 1
a) Số $4{,}75$ đứng một mình là $4{,}75 \times 1$:
$$4{,}75 \times 36 + 4{,}75 \times 63 + 4{,}75 \times 1 = 4{,}75 \times (36 + 63 + 1) = 4{,}75 \times 100 = 475.$$

b) Ghép $0{,}25$ với $40$: $0{,}25 \times 40 = 10$. Do đó
$$0{,}25 \times 7{,}3 \times 40 + 2{,}7 \times 10 = 7{,}3 \times 10 + 2{,}7 \times 10 = (7{,}3 + 2{,}7) \times 10 = 100.$$

**Đáp số:** a) $475$; b) $100$.

### Bài 2
a) Chia cho $0{,}25$ là nhân với $4$; còn $0{,}5 \times 2 = 1$. Vậy
$$45{,}6 \times 4 - 45{,}6 \times 4 + 45{,}6 \times 1 = 45{,}6.$$

b) Chia cho $5$ là nhân với $0{,}2$; chia cho $0{,}125$ là nhân với $8$:
$$(17{,}5 \times 0{,}8 + 17{,}5 \times 0{,}2) \times 8 = 17{,}5 \times (0{,}8 + 0{,}2) \times 8 = 17{,}5 \times 8 = 140.$$

**Đáp số:** a) $45{,}6$; b) $140$.

### Bài 3
a) Đặt $\frac59$ làm thừa số chung:
$$\frac59 \times \left(\frac{7}{13} + \frac{9}{13} - \frac{3}{13}\right) = \frac59 \times \frac{13}{13} = \frac59.$$

b) Mỗi thừa số $1 - \frac1k = \frac{k - 1}{k}$:
$$\frac12 \times \frac23 \times \frac34 \times \dots \times \frac{99}{100} = \frac{1 \times 2 \times 3 \times \dots \times 99}{2 \times 3 \times 4 \times \dots \times 100} = \frac{1}{100}.$$
(Các số từ $2$ đến $99$ có mặt cả ở tử lẫn mẫu nên rút gọn hết.)

c) Mỗi thừa số $1 + \frac1k = \frac{k + 1}{k}$:
$$\frac43 \times \frac54 \times \frac65 \times \dots \times \frac{100}{99} = \frac{4 \times 5 \times \dots \times 100}{3 \times 4 \times \dots \times 99} = \frac{100}{3}.$$

**Đáp số:** a) $\frac59$; b) $\frac{1}{100}$; c) $\frac{100}{3}$.

### Bài 4
a) $\frac{1}{0{,}5} = 1 : 0{,}5 = 2$; $\quad 1 : 0{,}25 = 4$; $\quad 1 : 0{,}125 = 8$; $\quad 1 : 0{,}0625 = 16$ (vì $0{,}0625 \times 16 = 1$).
Tổng bằng $2 + 4 + 8 + 16 = 30$.

b) $13{,}6 : 0{,}25 = 13{,}6 \times 4$ và $13{,}6 : 0{,}5 = 13{,}6 \times 2$. Vậy
$$13{,}6 \times 4 + 13{,}6 \times 2 - 13{,}6 \times 5 = 13{,}6 \times (4 + 2 - 5) = 13{,}6.$$

**Đáp số:** a) $30$; b) $13{,}6$.

### Bài 5
a) Dãy cách đều với khoảng cách $0{,}2$.
Số số hạng: $(19{,}9 - 0{,}1) : 0{,}2 + 1 = 99 + 1 = 100$.
Tổng: $(0{,}1 + 19{,}9) \times 100 : 2 = 20 \times 50 = 1000$.

b) Mỗi số hạng có phần nguyên là $n$ và phần thập phân là $\frac{n + 1}{100}$, với $n$ chạy từ $10$ đến $98$. Ta tách tổng thành hai phần.
- Phần nguyên: $10 + 11 + \dots + 98$ có $98 - 10 + 1 = 89$ số hạng, tổng bằng $(10 + 98) \times 89 : 2 = 4806$.
- Phần thập phân: $0{,}11 + 0{,}12 + \dots + 0{,}99$ có $89$ số hạng, tổng bằng $(0{,}11 + 0{,}99) \times 89 : 2 = 48{,}95$.

Tổng cần tìm: $4806 + 48{,}95 = 4854{,}95$.

*Cách khác:* dãy $10{,}11;\ 11{,}12;\ \dots;\ 98{,}99$ cũng là dãy cách đều với khoảng cách $1{,}01$, nên tổng bằng $(10{,}11 + 98{,}99) \times 89 : 2 = 4854{,}95$.

**Đáp số:** a) $1000$; b) $4854{,}95$.

### Bài 6
a) Tách $2023 = 2022 + 1$ ở tử số:
$$2023 \times 2024 - 1 = 2022 \times 2024 + 2024 - 1 = 2022 \times 2024 + 2023.$$
Tử số bằng mẫu số nên biểu thức bằng $1$.

b) Tách $254 = 253 + 1$ ở tử số:
$$254 \times 399 - 145 = 253 \times 399 + 399 - 145 = 253 \times 399 + 254.$$
Mẫu số $254 + 399 \times 253$ cũng bằng $253 \times 399 + 254$. Biểu thức bằng $1$.

**Đáp số:** a) $1$; b) $1$.

*Nhận xét:* khi thấy tử và mẫu có các thừa số "gần giống nhau", hãy tách một thừa số thành tổng để tử số có hình dạng giống mẫu số.

### Bài 7
a) Chia cho $2$ là nhân với $0{,}5$:
$$y \times 4{,}5 + y \times 0{,}5 + y \times 5 = y \times (4{,}5 + 0{,}5 + 5) = y \times 10.$$
Vậy $y \times 10 = 25$, nên $y = 25 : 10 = 2{,}5$.

b) Các số $0{,}1;\ 0{,}4;\ 0{,}7;\ \dots;\ 2{,}8$ là dãy cách đều, khoảng cách $0{,}3$. Số số hạng: $(2{,}8 - 0{,}1) : 0{,}3 + 1 = 10$. Vậy vế trái có $10$ lần $y$ cộng với tổng
$$0{,}1 + 0{,}4 + \dots + 2{,}8 = (0{,}1 + 2{,}8) \times 10 : 2 = 14{,}5.$$
Ta có $y \times 10 + 14{,}5 = 23{,}5$, nên $y \times 10 = 9$, hay $y = 0{,}9$.

**Đáp số:** a) $y = 2{,}5$; b) $y = 0{,}9$.

### Bài 8
Nhân $A$ với $2$:
$$A \times 2 = 1 + \frac12 + \frac14 + \dots + \frac{1}{128}.$$
So với $A$, tổng $A \times 2$ có thêm số $1$ ở đầu và thiếu số $\frac{1}{256}$ ở cuối. Do đó
$$A \times 2 - A = 1 - \frac{1}{256}, \quad\text{tức là}\quad A = \frac{255}{256}.$$

**Đáp số:** $A = \frac{255}{256}$.

*Nhận xét:* với tổng mà số hạng sau bằng $\frac12$ (hoặc $\frac13$, $\frac14$, ...) số hạng trước, hãy nhân cả tổng với $2$ (hoặc $3$, $4$, ...) rồi trừ đi tổng ban đầu.

### Bài 9
a) Để riêng số $0{,}1$ ở đầu, rồi ghép từng cặp: $(0{,}3 - 0{,}2)$, $(0{,}5 - 0{,}4)$, ..., $(2{,}1 - 2{,}0)$. Mỗi cặp bằng $0{,}1$.
Các số bị trừ $0{,}2;\ 0{,}4;\ \dots;\ 2{,}0$ có $(2{,}0 - 0{,}2) : 0{,}2 + 1 = 10$ số, nên có $10$ cặp. Kết quả:
$$0{,}1 + 10 \times 0{,}1 = 1{,}1.$$

b) Ghép từng cặp $\left(\frac{99}{100} - \frac{98}{100}\right)$, $\left(\frac{97}{100} - \frac{96}{100}\right)$, ..., $\left(\frac{3}{100} - \frac{2}{100}\right)$, mỗi cặp bằng $\frac{1}{100}$. Số bị trừ là $98;\ 96;\ \dots;\ 2$ (phần trăm), có $49$ số, nên có $49$ cặp. Còn lại $\frac{1}{100}$ ở cuối:
$$49 \times \frac{1}{100} + \frac{1}{100} = \frac{50}{100} = \frac12.$$

**Đáp số:** a) $1{,}1$; b) $\frac12$.

*Nhận xét:* với dãy có dấu cộng, trừ xen kẽ, hãy ghép cặp sao cho mỗi cặp là số lớn trừ số bé. Nếu ghép không khéo sẽ phải trừ số lớn hơn số bị trừ.

### Bài 10
Mỗi số hạng ở tử là $1 \times 2 \times 3$ nhân với một số:
- $2 \times 4 \times 6 = (1 \times 2 \times 3) \times (2 \times 2 \times 2) = (1 \times 2 \times 3) \times 8$;
- $3 \times 6 \times 9 = (1 \times 2 \times 3) \times 27$;
- $4 \times 8 \times 12 = (1 \times 2 \times 3) \times 64$.

Vậy tử số $= (1 \times 2 \times 3) \times (1 + 8 + 27 + 64)$. Tương tự, mẫu số $= (1 \times 3 \times 5) \times (1 + 8 + 27 + 64)$. Rút gọn thừa số chung $(1 + 8 + 27 + 64)$:
$$\frac{1 \times 2 \times 3}{1 \times 3 \times 5} = \frac{6}{15} = \frac25.$$

**Đáp số:** $\frac25$.

### Bài 11
**Tử số.** Làm xuất hiện thừa số $0{,}18$ ở cả ba số hạng:
- $0{,}9 \times 4567 \times 2 = 1{,}8 \times 4567 = 0{,}18 \times 45670$;
- $3 \times 5310 \times 0{,}6 = 1{,}8 \times 5310 = 0{,}18 \times 53100$.

Tử số $= 0{,}18 \times (1230 + 45670 + 53100) = 0{,}18 \times 100000 = 18000$.

**Mẫu số.** Dãy $1;\ 4;\ 7;\ \dots;\ 55$ cách đều $3$, có $(55 - 1) : 3 + 1 = 19$ số hạng. Tổng dãy là $(1 + 55) \times 19 : 2 = 532$. Mẫu số $= 532 - 514 = 18$.

Biểu thức bằng $18000 : 18 = 1000$.

**Đáp số:** $1000$.

*Nhận xét:* các số $0{,}18$, $0{,}9 \times 2$, $3 \times 0{,}6$ đều "chứa" $18$. Dời dấu phẩy để mọi số hạng có cùng thừa số, khi đó các số còn lại cộng thành số tròn.

### Bài 12
Viết riêng phần chứa thừa số thứ nhất và phần chứa thừa số thứ hai ở mỗi phân số:
$$P = \left(\frac21 \times \frac32 \times \frac43 \times \dots \times \frac{99}{98}\right) \times \left(\frac23 \times \frac34 \times \frac45 \times \dots \times \frac{99}{100}\right).$$
- Tích thứ nhất rút gọn còn $\frac{99}{1} = 99$.
- Tích thứ hai rút gọn còn $\frac{2}{100}$.

Vậy $P = 99 \times \frac{2}{100} = \frac{198}{100} = \frac{99}{50}$.

**Đáp số:** $P = \frac{99}{50}$.

### Bài 13
Biến đổi mẫu số. Tách $99 = 100 - 1$, $\frac{98}{2} = \frac{100 - 2}{2} = \frac{100}{2} - 1$, ..., $\frac{1}{99} = \frac{100}{99} - 1$. Có $99$ phân số, nên
$$\text{mẫu số} = \left(\frac{100}{1} + \frac{100}{2} + \dots + \frac{100}{99}\right) - 99.$$
Vì $\frac{100}{1} - 99 = 1 = \frac{100}{100}$, ta viết lại:
$$\text{mẫu số} = \frac{100}{2} + \frac{100}{3} + \dots + \frac{100}{99} + \frac{100}{100} = 100 \times \left(\frac12 + \frac13 + \dots + \frac{1}{100}\right).$$
Ngoặc cuối đúng bằng tử số. Do đó $B = \frac{1}{100}$.

**Đáp số:** $B = \frac{1}{100}$.

*Nhận xét:* không thể tính riêng tử và mẫu. Mấu chốt là biến đổi mẫu số cho **xuất hiện tử số**, sau đó rút gọn.

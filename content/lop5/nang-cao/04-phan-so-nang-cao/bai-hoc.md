# Chủ đề 4. Phân số nâng cao

> Ba dạng phân số "kinh điển" của đề thi vào lớp 6: tính tổng một dãy phân số có quy luật, so sánh phân số không cần quy đồng, và tìm phân số khi thêm bớt ở tử và mẫu. Mỗi dạng có một mẹo riêng, nắm được mẹo thì bài giải rất ngắn.

## I. Kiến thức cần nắm

> **Ý tưởng xuyên suốt:** một phân số có thể viết ra **nhiều cách**: thành hiệu hai phân số, thành $1$ trừ đi phần bù, hay nhân cả tử và mẫu với cùng một số. Chọn cách viết khéo thì các số hạng triệt tiêu nhau hoặc việc so sánh trở nên hiển nhiên.

### 1. Tách một phân số thành hiệu hai phân số
Với mọi số tự nhiên $n \ge 1$:
$$\frac{1}{n \times (n + 1)} = \frac1n - \frac{1}{n + 1}.$$
*Vì sao?* Quy đồng vế phải: $\frac1n - \frac{1}{n + 1} = \frac{n + 1}{n \times (n + 1)} - \frac{n}{n \times (n + 1)} = \frac{1}{n \times (n + 1)}$.

Tổng quát, khi hai thừa số ở mẫu **hơn kém nhau $k$**:
$$\frac{k}{n \times (n + k)} = \frac1n - \frac{1}{n + k}, \qquad \frac{1}{n \times (n + k)} = \frac1k \times \left(\frac1n - \frac{1}{n + k}\right).$$
**Quy tắc nhớ:** tử số bằng **hiệu** hai thừa số ở mẫu thì tách được ngay. Nếu tử chưa bằng hiệu, nhân và chia cho số thích hợp.

**Tổng "triệt tiêu":** viết mỗi số hạng thành hiệu, các phân số ở giữa lần lượt bị trừ đi, chỉ còn số đầu và số cuối.

*Ví dụ:* $\frac{1}{2 \times 3} + \frac{1}{3 \times 4} + \frac{1}{4 \times 5} = \left(\frac12 - \frac13\right) + \left(\frac13 - \frac14\right) + \left(\frac14 - \frac15\right) = \frac12 - \frac15 = \frac{3}{10}$.

**Mẫu số "ẩn":** $\frac12 + \frac16 + \frac{1}{12} + \frac{1}{20} + \dots$ chính là $\frac{1}{1 \times 2} + \frac{1}{2 \times 3} + \frac{1}{3 \times 4} + \dots$ Hãy viết mỗi mẫu thành tích hai số liên tiếp.

**Ba thừa số ở mẫu:** $\frac{2}{n \times (n + 1) \times (n + 2)} = \frac{1}{n \times (n + 1)} - \frac{1}{(n + 1) \times (n + 2)}$.

### 2. Tổng có số hạng sau bằng một phần số hạng trước
Với $A = \frac13 + \frac19 + \frac{1}{27} + \dots + \frac{1}{243}$, mỗi số hạng bằng $\frac13$ số hạng trước. Nhân $A$ với $3$ rồi trừ đi $A$:
$$A \times 3 - A = 1 - \frac{1}{243}, \quad\text{nên}\quad A \times 2 = \frac{242}{243}, \quad A = \frac{121}{243}.$$

### 3. So sánh phân số không cần quy đồng
| Cách | Khi nào dùng | Ví dụ |
|---|---|---|
| Cùng mẫu, cùng tử | Có sẵn hoặc dễ đưa về | $\frac{5}{12} < \frac{7}{12}$; $\ \frac{5}{8} > \frac{5}{9}$ |
| **Phần bù đến 1** | Phân số nhỏ hơn $1$, mẫu hơn tử cùng một số | $\frac{2023}{2024}$ và $\frac{2024}{2025}$ |
| **Phần hơn 1** | Phân số lớn hơn $1$, tử hơn mẫu cùng một số | $\frac{2025}{2023}$ và $\frac{2023}{2021}$ |
| **Phân số trung gian** | Một phân số lớn hơn $\frac12$ (hay $1$), phân số kia nhỏ hơn | $\frac{13}{25} > \frac12 > \frac{7}{15}$ |
| Trung gian cùng tử hoặc cùng mẫu | Tử phân số này lớn hơn, mẫu lại nhỏ hơn | $\frac{15}{37} < \frac{16}{37} < \frac{16}{35}$ |
| Rút gọn trước | Tử, mẫu có dạng lặp $\overline{abab}$ | $\frac{1313}{1717} = \frac{13 \times 101}{17 \times 101} = \frac{13}{17}$ |

*Vì sao so sánh phần bù được?* $\frac{2023}{2024} = 1 - \frac{1}{2024}$ và $\frac{2024}{2025} = 1 - \frac{1}{2025}$. Vì $\frac{1}{2024} > \frac{1}{2025}$, nên phân số thứ nhất **thiếu nhiều hơn** để đến $1$, tức là nhỏ hơn: $\frac{2023}{2024} < \frac{2024}{2025}$.

**Nhận xét chung:** với phân số nhỏ hơn $1$, cộng cùng một số vào tử và mẫu thì phân số **lớn lên** (tiến gần $1$). Với phân số lớn hơn $1$ thì ngược lại.

### 4. Đánh giá một tổng (so sánh tổng với một số)
Muốn chứng tỏ một tổng lớn hơn hay nhỏ hơn một số, thay mỗi số hạng bằng một số **nhỏ hơn** (hoặc **lớn hơn**) nhưng dễ tính tổng.
- $\frac{1}{11} + \frac{1}{12} + \dots + \frac{1}{20}$: mỗi số hạng không nhỏ hơn $\frac{1}{20}$ (có số lớn hơn hẳn), nên tổng lớn hơn $10 \times \frac{1}{20} = \frac12$.
- $\frac{1}{2 \times 2} < \frac{1}{1 \times 2}$, $\ \frac{1}{3 \times 3} < \frac{1}{2 \times 3}$, ... rồi dùng tổng triệt tiêu.

### 5. Thêm bớt ở tử và mẫu
| Thao tác | Đại lượng **không đổi** |
|---|---|
| Thêm vào tử và **bớt** ở mẫu cùng một số (hoặc ngược lại) | **Tổng** tử và mẫu |
| Thêm vào cả tử và mẫu cùng một số (hoặc cùng bớt) | **Hiệu** mẫu và tử |

Sau đó đưa về bài toán **tổng và tỉ** hoặc **hiệu và tỉ** (xem Chủ đề 5).

*Ví dụ:* cùng thêm vào tử và mẫu của $\frac{5}{11}$ một số để được $\frac35$. Hiệu mẫu và tử luôn là $11 - 5 = 6$. Phân số mới có tử $3$ phần, mẫu $5$ phần, hiệu $2$ phần $= 6$, nên tử mới là $9$. Số cần thêm: $9 - 5 = 4$.

### 6. Phân số bằng nhau
- Nhân (hoặc chia) cả tử và mẫu với cùng một số khác $0$ thì được phân số bằng nó.
- $\frac ab = \frac cd$ khi và chỉ khi $a \times d = b \times c$ (**tích chéo bằng nhau**).
- Tìm phân số bằng $\frac35$ có tổng tử và mẫu là $168$: tử $3$ phần, mẫu $5$ phần, đưa về tổng và tỉ.

### 7. Sai lầm hay gặp
- Tách $\frac{1}{3 \times 5} = \frac13 - \frac15$ là **sai**: $\frac13 - \frac15 = \frac{2}{15}$. Phải nhân $\frac12$: $\frac{1}{3 \times 5} = \frac12 \times \left(\frac13 - \frac15\right)$.
- Đếm nhầm số cuối: trong $\frac{1}{1 \times 2} + \dots + \frac{1}{9 \times 10}$, số còn lại cuối là $\frac{1}{10}$, không phải $\frac19$.
- So sánh $\frac{2025}{2023}$ và $\frac{2023}{2021}$ bằng phần bù như phân số nhỏ hơn $1$. Phân số lớn hơn $1$ thì so sánh **phần hơn**, kết luận đổi chiều.

---

## II. Bài tập vận dụng

**Bài 1.** So sánh các cặp phân số sau mà không quy đồng mẫu số:
a) $\frac{2023}{2024}$ và $\frac{2024}{2025}$;
b) $\frac{13}{25}$ và $\frac{7}{15}$;
c) $\frac{15}{37}$ và $\frac{16}{35}$.

**Bài 2.** So sánh:
a) $\frac{2025}{2023}$ và $\frac{2023}{2021}$;
b) $\frac{1313}{1717}$ và $\frac{13}{17}$.

**Bài 3.** Tính:
a) $\frac12 + \frac16 + \frac{1}{12} + \frac{1}{20} + \dots + \frac{1}{110}$;
b) $\frac{2}{3 \times 5} + \frac{2}{5 \times 7} + \frac{2}{7 \times 9} + \dots + \frac{2}{97 \times 99}$.

**Bài 4.** Tính:
a) $\frac{3}{2 \times 5} + \frac{3}{5 \times 8} + \frac{3}{8 \times 11} + \dots + \frac{3}{2021 \times 2024}$;
b) $\frac{1}{1 \times 4} + \frac{1}{4 \times 7} + \frac{1}{7 \times 10} + \dots + \frac{1}{97 \times 100}$.

**Bài 5.** Tính $A = \frac13 + \frac19 + \frac{1}{27} + \frac{1}{81} + \frac{1}{243} + \frac{1}{729}$.

**Bài 6.** a) Cho phân số $\frac{23}{40}$. Hãy tìm một số tự nhiên sao cho khi bớt số đó ở tử số và thêm số đó vào mẫu số thì được phân số bằng $\frac12$.
b) Cùng thêm vào tử số và mẫu số của phân số $\frac{5}{11}$ một số tự nhiên thì được phân số bằng $\frac35$. Tìm số đó.

**Bài 7.** a) Tìm phân số bằng $\frac35$, biết tổng của tử số và mẫu số là $168$.
b) Tìm phân số bằng $\frac{7}{11}$, biết mẫu số lớn hơn tử số $36$ đơn vị.

**Bài 8.** Chứng tỏ $\frac{1}{11} + \frac{1}{12} + \frac{1}{13} + \dots + \frac{1}{20} > \frac12$.

**Bài 9.** Chứng tỏ $\frac{1}{2 \times 2} + \frac{1}{3 \times 3} + \frac{1}{4 \times 4} + \dots + \frac{1}{100 \times 100} < 1$.

**Bài 10.** a) Tìm các số tự nhiên $a$ sao cho $\frac37 < \frac{a}{14} < \frac56$.
b) Tìm tất cả các phân số có tử số là $5$, lớn hơn $\frac13$ và nhỏ hơn $\frac12$.

**Bài 11.** Cho phân số $\frac ab$ tối giản. Nếu cộng thêm $6$ vào tử số và cộng thêm $8$ vào mẫu số thì giá trị của phân số không thay đổi. Tìm phân số $\frac ab$.

**Bài 12 (khó).** Tính
$$B = \frac{1}{1 \times 2 \times 3} + \frac{1}{2 \times 3 \times 4} + \frac{1}{3 \times 4 \times 5} + \dots + \frac{1}{18 \times 19 \times 20}.$$

**Bài 13 (khó).** Tính
$$C = 1 + \frac{1}{1 + 2} + \frac{1}{1 + 2 + 3} + \frac{1}{1 + 2 + 3 + 4} + \dots + \frac{1}{1 + 2 + 3 + \dots + 100}.$$

---

## III. Lời giải chi tiết

### Bài 1
a) Dùng phần bù đến $1$: $1 - \frac{2023}{2024} = \frac{1}{2024}$ và $1 - \frac{2024}{2025} = \frac{1}{2025}$.
Vì $\frac{1}{2024} > \frac{1}{2025}$ nên $\frac{2023}{2024} < \frac{2024}{2025}$.

b) Dùng phân số trung gian $\frac12$: $\frac{13}{25} > \frac12$ (vì $13 \times 2 = 26 > 25$), còn $\frac{7}{15} < \frac12$ (vì $7 \times 2 = 14 < 15$).
Vậy $\frac{13}{25} > \frac{7}{15}$.

c) Dùng phân số trung gian $\frac{16}{37}$ (cùng mẫu với phân số thứ nhất, cùng tử với phân số thứ hai):
$\frac{15}{37} < \frac{16}{37}$ (cùng mẫu, tử bé hơn) và $\frac{16}{37} < \frac{16}{35}$ (cùng tử, mẫu lớn hơn).
Vậy $\frac{15}{37} < \frac{16}{35}$.

### Bài 2
a) Cả hai phân số lớn hơn $1$. Dùng phần hơn: $\frac{2025}{2023} - 1 = \frac{2}{2023}$ và $\frac{2023}{2021} - 1 = \frac{2}{2021}$.
Vì $\frac{2}{2023} < \frac{2}{2021}$ nên $\frac{2025}{2023} < \frac{2023}{2021}$.

b) $\frac{1313}{1717} = \frac{13 \times 101}{17 \times 101} = \frac{13}{17}$. Hai phân số bằng nhau.

**Đáp số:** a) $\frac{2025}{2023} < \frac{2023}{2021}$; b) bằng nhau.

### Bài 3
a) Viết các mẫu thành tích hai số liên tiếp: $2 = 1 \times 2$, $6 = 2 \times 3$, ..., $110 = 10 \times 11$.
$$\frac{1}{1 \times 2} + \frac{1}{2 \times 3} + \dots + \frac{1}{10 \times 11} = \left(1 - \frac12\right) + \left(\frac12 - \frac13\right) + \dots + \left(\frac{1}{10} - \frac{1}{11}\right) = 1 - \frac{1}{11} = \frac{10}{11}.$$

b) Tử số $2$ đúng bằng hiệu hai thừa số ở mẫu:
$$\left(\frac13 - \frac15\right) + \left(\frac15 - \frac17\right) + \dots + \left(\frac{1}{97} - \frac{1}{99}\right) = \frac13 - \frac{1}{99} = \frac{33}{99} - \frac{1}{99} = \frac{32}{99}.$$

**Đáp số:** a) $\frac{10}{11}$; b) $\frac{32}{99}$.

### Bài 4
a) Tử số $3$ bằng hiệu hai thừa số ở mẫu ($5 - 2 = 3$, $8 - 5 = 3$, ...):
$$\frac12 - \frac15 + \frac15 - \frac18 + \dots + \frac{1}{2021} - \frac{1}{2024} = \frac12 - \frac{1}{2024} = \frac{1012 - 1}{2024} = \frac{1011}{2024}.$$

b) Hai thừa số ở mẫu hơn kém nhau $3$ nhưng tử số là $1$. Gọi tổng là $S$ rồi nhân với $3$:
$$S \times 3 = \frac{3}{1 \times 4} + \frac{3}{4 \times 7} + \dots + \frac{3}{97 \times 100} = 1 - \frac{1}{100} = \frac{99}{100}.$$
Vậy $S = \frac{99}{100} : 3 = \frac{33}{100}$.

**Đáp số:** a) $\frac{1011}{2024}$; b) $\frac{33}{100}$.

*Nhận xét:* trước khi tách, hãy kiểm tra tử số có bằng hiệu hai thừa số ở mẫu không. Nếu chưa, nhân tổng với hiệu đó rồi chia lại.

### Bài 5
Nhân $A$ với $3$:
$$A \times 3 = 1 + \frac13 + \frac19 + \frac{1}{27} + \frac{1}{81} + \frac{1}{243}.$$
Lấy $A \times 3$ trừ $A$, các số hạng giống nhau triệt tiêu:
$$A \times 2 = 1 - \frac{1}{729} = \frac{728}{729}, \qquad A = \frac{364}{729}.$$

**Đáp số:** $A = \frac{364}{729}$.

### Bài 6
a) Bớt ở tử và thêm vào mẫu cùng một số thì **tổng** tử và mẫu không đổi: $23 + 40 = 63$.
Phân số mới bằng $\frac12$: tử $1$ phần, mẫu $2$ phần, tổng $3$ phần $= 63$. Tử mới là $63 : 3 = 21$.
Số cần tìm: $23 - 21 = 2$. *Thử lại:* $\frac{21}{42} = \frac12$.

b) Cùng thêm vào tử và mẫu một số thì **hiệu** mẫu và tử không đổi: $11 - 5 = 6$.
Phân số mới bằng $\frac35$: tử $3$ phần, mẫu $5$ phần, hiệu $2$ phần $= 6$. Một phần là $3$, tử mới là $9$.
Số cần tìm: $9 - 5 = 4$. *Thử lại:* $\frac{9}{15} = \frac35$.

**Đáp số:** a) $2$; b) $4$.

### Bài 7
a) Phân số bằng $\frac35$ nên tử $3$ phần, mẫu $5$ phần. Tổng $8$ phần $= 168$, một phần là $21$.
Tử số $63$, mẫu số $105$. Phân số cần tìm là $\frac{63}{105}$.

b) Tử $7$ phần, mẫu $11$ phần, hiệu $4$ phần $= 36$, một phần là $9$.
Tử số $63$, mẫu số $99$. Phân số cần tìm là $\frac{63}{99}$.

**Đáp số:** a) $\frac{63}{105}$; b) $\frac{63}{99}$.

### Bài 8
Tổng có $20 - 11 + 1 = 10$ số hạng. Mỗi số hạng $\frac{1}{11}, \frac{1}{12}, \dots, \frac{1}{19}$ đều lớn hơn $\frac{1}{20}$, số hạng cuối bằng $\frac{1}{20}$. Do đó
$$\frac{1}{11} + \frac{1}{12} + \dots + \frac{1}{20} > \underbrace{\frac{1}{20} + \frac{1}{20} + \dots + \frac{1}{20}}_{10 \text{ số hạng}} = \frac{10}{20} = \frac12.$$

*Nhận xét:* thay mỗi số hạng bằng số hạng **nhỏ nhất** thì được một tổng nhỏ hơn nhưng dễ tính.

### Bài 9
Mỗi số hạng nhỏ hơn một phân số tách được:
$$\frac{1}{2 \times 2} < \frac{1}{1 \times 2}, \quad \frac{1}{3 \times 3} < \frac{1}{2 \times 3}, \quad \dots, \quad \frac{1}{100 \times 100} < \frac{1}{99 \times 100}.$$
Cộng lại:
$$\text{Tổng} < \frac{1}{1 \times 2} + \frac{1}{2 \times 3} + \dots + \frac{1}{99 \times 100} = 1 - \frac{1}{100} = \frac{99}{100} < 1.$$

*Nhận xét:* tổng $\frac{1}{2 \times 2} + \dots$ không tính được bằng cách triệt tiêu, nhưng **làm lớn** mỗi số hạng một chút thì được tổng triệt tiêu.

### Bài 10
a) Đưa về cùng mẫu số $42$: $\frac37 = \frac{18}{42}$, $\frac{a}{14} = \frac{a \times 3}{42}$, $\frac56 = \frac{35}{42}$.
Cần $18 < a \times 3 < 35$. Các giá trị: $a \times 3 = 21, 24, 27, 30, 33$, tức là $a = 7, 8, 9, 10, 11$.

b) Đưa về cùng tử số $5$: $\frac13 = \frac{5}{15}$, $\frac12 = \frac{5}{10}$. Cần $\frac{5}{15} < \frac{5}{m} < \frac{5}{10}$.
Cùng tử thì mẫu càng lớn, phân số càng bé, nên $10 < m < 15$, tức là $m = 11, 12, 13, 14$.

**Đáp số:** a) $a \in \{7; 8; 9; 10; 11\}$; b) $\frac{5}{11}$, $\frac{5}{12}$, $\frac{5}{13}$, $\frac{5}{14}$.

### Bài 11
Hai phân số $\frac ab$ và $\frac{a + 6}{b + 8}$ bằng nhau nên tích chéo bằng nhau:
$$a \times (b + 8) = b \times (a + 6), \quad\text{tức là}\quad a \times b + a \times 8 = a \times b + b \times 6.$$
Bớt $a \times b$ ở hai bên: $a \times 8 = b \times 6$. Do đó $\frac ab = \frac68 = \frac34$.
Vì $\frac ab$ tối giản nên $\frac ab = \frac34$.
*Thử lại:* $\frac{3 + 6}{4 + 8} = \frac{9}{12} = \frac34$.

**Đáp số:** $\frac34$.

*Nhận xét:* tính chất đẹp: nếu $\frac ab = \frac cd$ thì $\frac{a + c}{b + d}$ cũng bằng phân số đó. Ở đây cộng thêm $\frac68$ vào "từng phần" mà giá trị không đổi, nên $\frac ab$ phải bằng $\frac68$.

### Bài 12
Ta có
$$\frac{1}{1 \times 2} - \frac{1}{2 \times 3} = \frac{3 - 1}{1 \times 2 \times 3} = \frac{2}{1 \times 2 \times 3}.$$
Tổng quát, $\frac{2}{n \times (n + 1) \times (n + 2)} = \frac{1}{n \times (n + 1)} - \frac{1}{(n + 1) \times (n + 2)}$. Nhân $B$ với $2$:
$$B \times 2 = \left(\frac{1}{1 \times 2} - \frac{1}{2 \times 3}\right) + \left(\frac{1}{2 \times 3} - \frac{1}{3 \times 4}\right) + \dots + \left(\frac{1}{18 \times 19} - \frac{1}{19 \times 20}\right) = \frac12 - \frac{1}{380} = \frac{189}{380}.$$
Vậy $B = \frac{189}{380} : 2 = \frac{189}{760}$.

**Đáp số:** $B = \frac{189}{760}$.

### Bài 13
Tổng $1 + 2 + \dots + n = \frac{n \times (n + 1)}{2}$ (tổng dãy cách đều). Do đó
$$\frac{1}{1 + 2 + \dots + n} = \frac{2}{n \times (n + 1)}.$$
Số hạng đầu $1 = \frac{2}{1 \times 2}$ cũng có dạng này. Vậy
$$C = \frac{2}{1 \times 2} + \frac{2}{2 \times 3} + \dots + \frac{2}{100 \times 101} = 2 \times \left(1 - \frac{1}{101}\right) = 2 \times \frac{100}{101} = \frac{200}{101}.$$

**Đáp số:** $C = \frac{200}{101}$.

*Nhận xét:* nhiều tổng "lạ" thực ra là tổng tách được sau khi tính gọn mẫu số. Hãy thử tính vài mẫu đầu: $1 + 2 = 3$, $1 + 2 + 3 = 6$, $1 + 2 + 3 + 4 = 10$, rồi nhận ra $6 = \frac{3 \times 4}{2}$, $10 = \frac{4 \times 5}{2}$.

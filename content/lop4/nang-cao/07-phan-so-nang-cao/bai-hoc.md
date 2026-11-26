# Chủ đề 7. Phân số nâng cao

> Các bài phân số trong đề học sinh giỏi lớp 4 thường xoay quanh ba việc: so sánh khéo léo mà không cần quy đồng, tính nhanh tổng nhiều phân số có quy luật, và giải bài toán có lời văn với phân số (kể cả tính ngược từ cuối). Chủ đề này trình bày từng mẹo kèm lý do vì sao mẹo đúng.

## I. Kiến thức cần nắm

### 1. So sánh bằng phần bù và phần hơn

- **Phần bù đến 1:** với phân số bé hơn 1, phần bù là $1 - \dfrac{a}{b} = \dfrac{b - a}{b}$. Phân số nào có phần bù **lớn hơn** thì phân số đó **bé hơn**.
- **Phần hơn 1:** với phân số lớn hơn 1, phần hơn là $\dfrac{a}{b} - 1 = \dfrac{a - b}{b}$. Phân số nào có phần hơn lớn hơn thì lớn hơn.

**Ví dụ.** $\dfrac{98}{99}$ có phần bù $\dfrac{1}{99}$, $\dfrac{97}{98}$ có phần bù $\dfrac{1}{98}$. Vì $\dfrac{1}{99} < \dfrac{1}{98}$ nên $\dfrac{98}{99} > \dfrac{97}{98}$.

*Vì sao đúng:* hai phân số cùng "đi lên" tới 1. Phân số nào phải đi quãng dài hơn thì đang đứng thấp hơn.

### 2. So sánh qua phân số trung gian

Tìm một phân số $\dfrac{m}{n}$ nằm giữa: $\dfrac{a}{b} > \dfrac{m}{n}$ và $\dfrac{m}{n} > \dfrac{c}{d}$ thì $\dfrac{a}{b} > \dfrac{c}{d}$.
- **Trung gian là $\dfrac{1}{2}$ hoặc 1:** so tử số với nửa mẫu số. $\dfrac{13}{25} > \dfrac{1}{2}$ vì $13 \times 2 = 26 > 25$.
- **Trung gian cùng tử với phân số này, cùng mẫu với phân số kia:** so sánh $\dfrac{19}{37}$ và $\dfrac{15}{41}$ qua $\dfrac{15}{37}$: $\dfrac{19}{37} > \dfrac{15}{37} > \dfrac{15}{41}$.

### 3. Tính nhanh tổng phân số dạng $\dfrac{1}{n \times (n+1)}$

Mấu chốt:
$$\frac{1}{n \times (n + 1)} = \frac{1}{n} - \frac{1}{n + 1}.$$
Ví dụ: $\dfrac{1}{6} = \dfrac{1}{2 \times 3} = \dfrac{1}{2} - \dfrac{1}{3}$, $\dfrac{1}{12} = \dfrac{1}{3} - \dfrac{1}{4}$.

*Vì sao đúng:* $\dfrac{1}{n} - \dfrac{1}{n+1} = \dfrac{n + 1}{n \times (n+1)} - \dfrac{n}{n \times (n+1)} = \dfrac{1}{n \times (n+1)}$.

Khi cộng nhiều số hạng như thế, các phân số ở giữa **triệt tiêu** nhau, chỉ còn số đầu và số cuối:
$$\frac{1}{1 \times 2} + \frac{1}{2 \times 3} + \dots + \frac{1}{9 \times 10} = 1 - \frac{1}{10} = \frac{9}{10}.$$

Tương tự, khi hai thừa số ở mẫu hơn kém nhau $k$ thì $\dfrac{k}{n \times (n + k)} = \dfrac{1}{n} - \dfrac{1}{n + k}$.

### 4. Tổng dạng $\dfrac{1}{3} + \dfrac{1}{9} + \dfrac{1}{27} + \dots$ (mỗi số bằng một phần mấy số trước)

Gọi tổng là $S$. Nhân $S$ với số lần gấp (ở đây là 3) rồi trừ đi $S$, phần lớn các số hạng triệt tiêu.

**Ví dụ.** $S = \dfrac{1}{2} + \dfrac{1}{4} + \dfrac{1}{8}$. $S \times 2 = 1 + \dfrac{1}{2} + \dfrac{1}{4}$. Trừ: $S = 1 - \dfrac{1}{8} = \dfrac{7}{8}$.

### 5. Tìm phân số khi biến đổi tử và mẫu

- **Cộng (hoặc trừ) cùng một số vào tử và mẫu:** **hiệu** của mẫu và tử **không đổi**.
- **Thêm vào tử $m$ đơn vị và bớt ở mẫu $m$ đơn vị (hoặc ngược lại):** **tổng** của tử và mẫu **không đổi**.

Dựa vào đại lượng không đổi, ta tìm phân số mới rồi suy ra phân số cũ.

**Ví dụ.** Thêm cùng một số vào tử và mẫu của $\dfrac{5}{11}$ được $\dfrac{3}{5}$. Hiệu luôn là $11 - 5 = 6$. Phân số $\dfrac{3}{5}$ có hiệu 2, nhân cả tử và mẫu với 3 được $\dfrac{9}{15}$. Số đã thêm là $9 - 5 = 4$.

### 6. Bài toán có lời văn và tính ngược

- "Phân số **của phần còn lại**": tìm phần còn lại trước, rồi lấy phân số của phần đó.
- **Tính ngược từ cuối:** bài kiểu "lấy một nửa số trang và thêm 5 trang" thì đi ngược: cộng trả lại 5 trang rồi nhân 2.

### 7. Sai lầm hay gặp

- Nhầm chiều khi so sánh phần bù: phần bù lớn hơn thì phân số **bé hơn**.
- Viết $\dfrac{1}{n \times (n+2)} = \dfrac{1}{n} - \dfrac{1}{n+2}$: sai, đúng là $\dfrac{2}{n \times (n+2)}$.
- Tính ngược mà làm sai thứ tự: phải đảo ngược cả thứ tự các bước lẫn phép tính.

## II. Bài tập vận dụng

**Bài 1.** So sánh $\dfrac{13}{25}$ và $\dfrac{7}{15}$ bằng cách so sánh với $\dfrac{1}{2}$.

**Bài 2.** So sánh $\dfrac{98}{99}$ và $\dfrac{997}{998}$.

**Bài 3.** So sánh $\dfrac{2025}{2024}$ và $\dfrac{2024}{2023}$.

**Bài 4.** So sánh $\dfrac{19}{37}$ và $\dfrac{15}{41}$.

**Bài 5.** Tính nhanh: $\dfrac{1}{2} + \dfrac{1}{6} + \dfrac{1}{12} + \dfrac{1}{20} + \dfrac{1}{30}$.

**Bài 6.** Tính nhanh: $\dfrac{2}{1 \times 3} + \dfrac{2}{3 \times 5} + \dfrac{2}{5 \times 7} + \dfrac{2}{7 \times 9} + \dfrac{2}{9 \times 11}$.

**Bài 7.** Tính: $\dfrac{1}{3} + \dfrac{1}{9} + \dfrac{1}{27} + \dfrac{1}{81}$.

**Bài 8.** Tìm phân số có tổng của tử số và mẫu số bằng 60, biết rằng nếu bớt ở tử số 3 đơn vị và thêm vào mẫu số 3 đơn vị thì được phân số bằng $\dfrac{1}{3}$.

**Bài 9.** Cộng cùng một số tự nhiên vào cả tử số và mẫu số của phân số $\dfrac{5}{11}$ thì được phân số bằng $\dfrac{3}{5}$. Tìm số đó.

**Bài 10 (lời văn).** Một người bán trứng. Lần thứ nhất bán $\dfrac{1}{3}$ số trứng, lần thứ hai bán $\dfrac{1}{4}$ số trứng còn lại, cuối cùng còn 60 quả. Hỏi lúc đầu người đó có bao nhiêu quả trứng?

**Bài 11 (tính ngược).** Mai đọc một quyển truyện. Ngày thứ nhất Mai đọc một nửa số trang và thêm 5 trang. Ngày thứ hai Mai đọc một nửa số trang còn lại và thêm 4 trang. Cuối cùng còn 20 trang chưa đọc. Hỏi quyển truyện có bao nhiêu trang?

**Bài 12 (vòi nước).** Vòi thứ nhất chảy riêng thì đầy bể sau 3 giờ, vòi thứ hai chảy riêng thì đầy bể sau 6 giờ. Hỏi nếu mở cả hai vòi cùng lúc thì sau bao lâu bể đầy?

**Bài 13.** Tìm các phân số tối giản có mẫu số là 12, lớn hơn $\dfrac{1}{3}$ và bé hơn $\dfrac{3}{4}$.

**Bài 14 (khó).** Không tính tổng, chứng tỏ rằng $\dfrac{1}{11} + \dfrac{1}{12} + \dfrac{1}{13} + \dots + \dfrac{1}{20} > \dfrac{1}{2}$.

---

## III. Lời giải chi tiết

### Bài 1
$\dfrac{13}{25}$: vì $13 \times 2 = 26 > 25$ nên $\dfrac{13}{25} > \dfrac{1}{2}$.
$\dfrac{7}{15}$: vì $7 \times 2 = 14 < 15$ nên $\dfrac{7}{15} < \dfrac{1}{2}$.
Vậy $\dfrac{13}{25} > \dfrac{7}{15}$.

### Bài 2
Phần bù: $1 - \dfrac{98}{99} = \dfrac{1}{99}$; $1 - \dfrac{997}{998} = \dfrac{1}{998}$.
Vì $\dfrac{1}{99} > \dfrac{1}{998}$ nên $\dfrac{98}{99} < \dfrac{997}{998}$.

### Bài 3
Phần hơn 1: $\dfrac{2025}{2024} - 1 = \dfrac{1}{2024}$; $\dfrac{2024}{2023} - 1 = \dfrac{1}{2023}$.
Vì $\dfrac{1}{2024} < \dfrac{1}{2023}$ nên $\dfrac{2025}{2024} < \dfrac{2024}{2023}$.

### Bài 4
Dùng phân số trung gian $\dfrac{15}{37}$ (cùng mẫu với phân số thứ nhất, cùng tử với phân số thứ hai):
- $\dfrac{19}{37} > \dfrac{15}{37}$ (cùng mẫu, tử lớn hơn);
- $\dfrac{15}{37} > \dfrac{15}{41}$ (cùng tử, mẫu bé hơn).

Vậy $\dfrac{19}{37} > \dfrac{15}{41}$.

### Bài 5
$\dfrac{1}{2} = \dfrac{1}{1 \times 2}$, $\dfrac{1}{6} = \dfrac{1}{2 \times 3}$, $\dfrac{1}{12} = \dfrac{1}{3 \times 4}$, $\dfrac{1}{20} = \dfrac{1}{4 \times 5}$, $\dfrac{1}{30} = \dfrac{1}{5 \times 6}$.
$$\left(1 - \frac{1}{2}\right) + \left(\frac{1}{2} - \frac{1}{3}\right) + \left(\frac{1}{3} - \frac{1}{4}\right) + \left(\frac{1}{4} - \frac{1}{5}\right) + \left(\frac{1}{5} - \frac{1}{6}\right) = 1 - \frac{1}{6} = \frac{5}{6}.$$

### Bài 6
Hai thừa số ở mỗi mẫu hơn kém nhau 2, tử số bằng 2, nên $\dfrac{2}{n \times (n+2)} = \dfrac{1}{n} - \dfrac{1}{n+2}$:
$$\left(1 - \frac{1}{3}\right) + \left(\frac{1}{3} - \frac{1}{5}\right) + \dots + \left(\frac{1}{9} - \frac{1}{11}\right) = 1 - \frac{1}{11} = \frac{10}{11}.$$

### Bài 7
Gọi tổng là $S$. Nhân $S$ với 3:
$$S \times 3 = 1 + \frac{1}{3} + \frac{1}{9} + \frac{1}{27}.$$
Lấy $S \times 3$ trừ $S$: các số $\dfrac{1}{3}, \dfrac{1}{9}, \dfrac{1}{27}$ triệt tiêu, còn
$$S \times 2 = 1 - \frac{1}{81} = \frac{80}{81}, \qquad S = \frac{80}{81} : 2 = \frac{40}{81}.$$

**Đáp số:** $\dfrac{40}{81}$.

### Bài 8
Bớt ở tử 3 và thêm vào mẫu 3 thì tổng của tử và mẫu không đổi, vẫn là 60.
Phân số mới bằng $\dfrac{1}{3}$: tử 1 phần, mẫu 3 phần, tổng 4 phần ứng với 60, mỗi phần là 15.
Phân số mới là $\dfrac{15}{45}$. Phân số ban đầu: tử $15 + 3 = 18$, mẫu $45 - 3 = 42$.

**Đáp số:** $\dfrac{18}{42}$.

Thử lại: $18 + 42 = 60$; $\dfrac{18 - 3}{42 + 3} = \dfrac{15}{45} = \dfrac{1}{3}$. Đúng.

### Bài 9
Cộng cùng một số vào tử và mẫu thì hiệu không đổi: $11 - 5 = 6$.
Phân số $\dfrac{3}{5}$ có hiệu 2. Để hiệu bằng 6, nhân cả tử và mẫu với 3: $\dfrac{9}{15}$.
Số đã cộng thêm: $9 - 5 = 4$.

**Đáp số:** 4.

### Bài 10
Sau lần thứ nhất còn $1 - \dfrac{1}{3} = \dfrac{2}{3}$ (số trứng).
Lần thứ hai bán $\dfrac{2}{3} \times \dfrac{1}{4} = \dfrac{1}{6}$ (số trứng).
Còn lại $\dfrac{2}{3} - \dfrac{1}{6} = \dfrac{1}{2}$ (số trứng), ứng với 60 quả.
Số trứng lúc đầu: $60 \times 2 = 120$ (quả).

**Đáp số:** 120 quả.

### Bài 11
Tính ngược từ cuối.
- Ngày thứ hai đọc một nửa số trang còn lại và thêm 4 trang, còn 20 trang. Vậy một nửa số trang còn lại (sau ngày thứ nhất) là $20 + 4 = 24$, số trang còn lại sau ngày thứ nhất là $24 \times 2 = 48$.
- Ngày thứ nhất đọc một nửa quyển và thêm 5 trang, còn 48 trang. Vậy một nửa quyển là $48 + 5 = 53$, cả quyển có $53 \times 2 = 106$ (trang).

**Đáp số:** 106 trang.

Thử lại: ngày 1 đọc $53 + 5 = 58$, còn 48; ngày 2 đọc $24 + 4 = 28$, còn 20. Đúng.

### Bài 12
Mỗi giờ vòi thứ nhất chảy được $\dfrac{1}{3}$ bể, vòi thứ hai chảy được $\dfrac{1}{6}$ bể.
Mỗi giờ cả hai vòi chảy được $\dfrac{1}{3} + \dfrac{1}{6} = \dfrac{2}{6} + \dfrac{1}{6} = \dfrac{3}{6} = \dfrac{1}{2}$ (bể).
Cả hai vòi chảy đầy bể sau 2 giờ.

**Đáp số:** 2 giờ.

### Bài 13
$\dfrac{1}{3} = \dfrac{4}{12}$, $\dfrac{3}{4} = \dfrac{9}{12}$. Các phân số $\dfrac{x}{12}$ với $4 < x < 9$ là $\dfrac{5}{12}, \dfrac{6}{12}, \dfrac{7}{12}, \dfrac{8}{12}$.
Loại các phân số rút gọn được: $\dfrac{6}{12} = \dfrac{1}{2}$, $\dfrac{8}{12} = \dfrac{2}{3}$.

**Đáp số:** $\dfrac{5}{12}$ và $\dfrac{7}{12}$.

### Bài 14
Tổng có $20 - 11 + 1 = 10$ phân số. Mỗi phân số từ $\dfrac{1}{11}$ đến $\dfrac{1}{19}$ đều **lớn hơn** $\dfrac{1}{20}$ (cùng tử, mẫu bé hơn), còn phân số cuối bằng $\dfrac{1}{20}$.
Do đó tổng lớn hơn tổng của 10 phân số $\dfrac{1}{20}$:
$$\frac{1}{11} + \frac{1}{12} + \dots + \frac{1}{20} > \frac{1}{20} \times 10 = \frac{10}{20} = \frac{1}{2}.$$

*Nhận xét:* thay mọi số hạng bằng số hạng bé nhất để được một tổng dễ tính mà nhỏ hơn. Đây là ý tưởng "đánh giá" hay dùng ở lớp trên.

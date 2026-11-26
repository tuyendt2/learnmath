# Chủ đề 5. Các số đặc trưng của mẫu số liệu không ghép nhóm

> Chủ đề này gồm số gần đúng và sai số, các số đo xu thế trung tâm (số trung bình, trung vị, tứ phân vị, mốt) và các số đo độ phân tán (khoảng biến thiên, khoảng tứ phân vị, phương sai, độ lệch chuẩn). Đây là công cụ để tóm tắt và so sánh các bộ dữ liệu trong thực tế.

## I. Kiến thức cần nắm

### 1. Số gần đúng, sai số

- $a$ là số gần đúng của số đúng $\bar a$: **sai số tuyệt đối** $\Delta_a = \lvert \bar a - a\rvert$. Nếu $\Delta_a \le d$ thì viết $\bar a = a \pm d$, $d$ gọi là **độ chính xác**.
- **Sai số tương đối** $\delta_a = \dfrac{\Delta_a}{\lvert a\rvert}$ (thường tính theo $\dfrac{d}{\lvert a\rvert}$). Sai số tương đối càng nhỏ thì phép đo càng chính xác.
- **Quy tròn theo độ chính xác:** nếu $d$ thuộc hàng trăm thì quy tròn đến hàng nghìn (hàng lớn hơn liền kề).

### 2. Số đo xu thế trung tâm

Mẫu $x_1, x_2, \dots, x_n$:
- **Số trung bình:** $\bar x = \dfrac{x_1 + \dots + x_n}{n}$. Với bảng tần số: $\bar x = \dfrac{n_1x_1 + \dots + n_kx_k}{n}$.
- **Trung vị** $M_e$: sắp xếp tăng dần; $n$ lẻ thì là số ở chính giữa, $n$ chẵn thì là trung bình cộng hai số ở giữa.
- **Tứ phân vị** $Q_1, Q_2, Q_3$: $Q_2 = M_e$; $Q_1$ là trung vị của nửa dưới, $Q_3$ là trung vị của nửa trên (khi $n$ lẻ, không tính $Q_2$ vào hai nửa).
- **Mốt:** giá trị có tần số lớn nhất.

Trung vị và tứ phân vị ít bị ảnh hưởng bởi giá trị bất thường hơn số trung bình.

### 3. Số đo độ phân tán

- **Khoảng biến thiên** $R = x_{\max} - x_{\min}$.
- **Khoảng tứ phân vị** $\Delta_Q = Q_3 - Q_1$.
- **Phương sai** $s^2 = \dfrac{1}{n}\sum (x_i - \bar x)^2 = \dfrac{1}{n}\sum x_i^2 - \bar x^2$.
- **Độ lệch chuẩn** $s = \sqrt{s^2}$. Độ lệch chuẩn càng nhỏ, số liệu càng tập trung quanh số trung bình.
- **Giá trị ngoại lệ:** $x > Q_3 + 1{,}5\Delta_Q$ hoặc $x < Q_1 - 1{,}5\Delta_Q$.

### 4. Biến đổi mẫu số liệu

Cộng mỗi giá trị với $c$: trung bình tăng $c$, phương sai không đổi. Nhân mỗi giá trị với $k$: trung bình nhân $k$, độ lệch chuẩn nhân $\lvert k\rvert$, phương sai nhân $k^2$.

### 5. Sai lầm hay gặp

- Tìm trung vị khi chưa sắp xếp mẫu.
- Tính tứ phân vị mà đưa trung vị vào nửa dưới, nửa trên khi $n$ lẻ.
- Nhầm phương sai với độ lệch chuẩn (quên lấy căn).

## II. Bài tập vận dụng

**Bài 1.** a) Biết $\sqrt{2} = 1{,}41421\dots$ Lấy $1{,}41$ làm giá trị gần đúng của $\sqrt{2}$; chứng tỏ sai số tuyệt đối không vượt quá $0{,}01$. b) Quy tròn số gần đúng $a = 2\,841\,675$ với độ chính xác $d = 300$.

**Bài 2.** Điểm kiểm tra của 10 học sinh: 7; 8; 6; 9; 8; 10; 5; 8; 7; 9. Tìm số trung bình, trung vị và mốt.

**Bài 3.** Với mẫu số liệu ở bài 2, tìm các tứ phân vị và khoảng tứ phân vị.

**Bài 4.** Tính phương sai và độ lệch chuẩn của mẫu số liệu 2; 4; 6; 8; 10.

**Bài 5.** Cho mẫu số liệu: 5; 7; 8; 9; 10; 12; 13; 15; 30. Tìm tứ phân vị và cho biết mẫu có giá trị ngoại lệ không.

**Bài 6.** Điểm thi của 20 học sinh cho bởi bảng:

| Điểm | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|
| Số học sinh | 2 | 3 | 5 | 6 | 3 | 1 |

Tính điểm trung bình, trung vị và mốt.

**Bài 7 (thực tế).** Chiều cao (cm) của 7 học sinh: 160; 165; 158; 170; 172; 168; 155. Tính chiều cao trung bình, khoảng biến thiên và độ lệch chuẩn (làm tròn đến hàng phần trăm).

**Bài 8 (thực tế).** Điểm trung bình môn Toán của lớp 10A là 7,0 với độ lệch chuẩn 0,8; của lớp 10B là 7,0 với độ lệch chuẩn 1,5. Lớp nào có kết quả đồng đều hơn?

**Bài 9.** Tìm tứ phân vị và khoảng tứ phân vị của mẫu: 12; 15; 15; 16; 18; 20; 21; 25.

**Bài 10.** Một mẫu số liệu có số trung bình 20 và độ lệch chuẩn 3. a) Nếu cộng thêm 5 vào mỗi giá trị thì số trung bình và độ lệch chuẩn mới là bao nhiêu? b) Nếu nhân mỗi giá trị với 2 thì sao?

**Bài 11 (vận dụng cao).** Năm số có trung bình bằng 6, trong đó bốn số là 4; 5; 7; 9. Tìm số còn lại và tính phương sai của năm số.

**Bài 12 (vận dụng cao).** Tìm $x$ để mẫu số liệu 3; 5; 7; $x$ có số trung bình bằng trung vị.

**Bài 13 (vận dụng cao).** Phép đo thứ nhất cho chiều dài một chiếc bàn $25{,}3 \pm 0{,}1$ (cm), phép đo thứ hai cho chiều dài một căn phòng $4{,}15 \pm 0{,}02$ (m). Phép đo nào chính xác hơn?

---

## III. Lời giải chi tiết

### Bài 1
a) $1{,}41 < \sqrt{2} < 1{,}42$ nên $\lvert\sqrt{2} - 1{,}41\rvert < 0{,}01$.
b) Độ chính xác đến hàng trăm nên quy tròn đến hàng nghìn: $a \approx 2\,842\,000$.

### Bài 2
Sắp xếp: 5; 6; 7; 7; 8; 8; 8; 9; 9; 10.
$\bar x = \dfrac{77}{10} = 7{,}7$. Trung vị: $\dfrac{8 + 8}{2} = 8$. Mốt: 8 (xuất hiện 3 lần).

### Bài 3
$Q_2 = 8$. Nửa dưới 5; 6; 7; 7; 8 có trung vị $Q_1 = 7$. Nửa trên 8; 8; 9; 9; 10 có trung vị $Q_3 = 9$. $\Delta_Q = 2$.

### Bài 4
$\bar x = 6$. $s^2 = \dfrac{16 + 4 + 0 + 4 + 16}{5} = 8$. $s = \sqrt{8} = 2\sqrt{2} \approx 2{,}83$.

### Bài 5
$n = 9$, $Q_2 = 10$. Nửa dưới 5; 7; 8; 9: $Q_1 = 7{,}5$. Nửa trên 12; 13; 15; 30: $Q_3 = 14$. $\Delta_Q = 6{,}5$.
$Q_3 + 1{,}5\Delta_Q = 14 + 9{,}75 = 23{,}75 < 30$: giá trị 30 là giá trị ngoại lệ.

### Bài 6
$\bar x = \dfrac{10 + 18 + 35 + 48 + 27 + 10}{20} = \dfrac{148}{20} = 7{,}4$.
Tần số tích lũy: 2; 5; 10; 16; 19; 20. Giá trị thứ 10 là 7, thứ 11 là 8: trung vị $7{,}5$. Mốt: 8.

### Bài 7
$\bar x = \dfrac{1\,148}{7} = 164$ (cm). $R = 172 - 155 = 17$ (cm).
$s^2 = \dfrac{16 + 1 + 36 + 36 + 64 + 16 + 81}{7} = \dfrac{250}{7} \approx 35{,}71$, $s \approx 5{,}98$ (cm).

### Bài 8
Cùng số trung bình, lớp 10A có độ lệch chuẩn nhỏ hơn nên điểm tập trung quanh 7,0 hơn: lớp 10A đồng đều hơn.

### Bài 9
$n = 8$: $Q_2 = \dfrac{16 + 18}{2} = 17$. Nửa dưới 12; 15; 15; 16: $Q_1 = 15$. Nửa trên 18; 20; 21; 25: $Q_3 = 20{,}5$. $\Delta_Q = 5{,}5$.

### Bài 10
a) Trung bình 25, độ lệch chuẩn vẫn là 3. b) Trung bình 40, độ lệch chuẩn 6.

### Bài 11
Tổng năm số: 30, số còn lại $30 - 25 = 5$. $s^2 = \dfrac{(4 - 6)^2 + (5 - 6)^2 + (5 - 6)^2 + (7 - 6)^2 + (9 - 6)^2}{5} = \dfrac{16}{5} = 3{,}2$.

### Bài 12
Trung bình $\dfrac{15 + x}{4}$.
- $x \le 3$: trung vị 4, $\dfrac{15 + x}{4} = 4$, $x = 1$ (thỏa).
- $3 \le x \le 7$: hai số ở giữa là 5 và $x$, trung vị $\dfrac{5 + x}{2}$; giải $\dfrac{15 + x}{4} = \dfrac{5 + x}{2}$ được $x = 5$ (thỏa).
- $x \ge 7$: trung vị 6, $\dfrac{15 + x}{4} = 6$, $x = 9$ (thỏa).

**Đáp số:** $x \in \{1; 5; 9\}$.

### Bài 13
Sai số tương đối: $\dfrac{0{,}1}{25{,}3} \approx 0{,}40\%$ và $\dfrac{0{,}02}{4{,}15} \approx 0{,}48\%$. Phép đo thứ nhất chính xác hơn.

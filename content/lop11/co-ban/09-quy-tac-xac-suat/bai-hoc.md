# Chủ đề 9. Các quy tắc tính xác suất

> Chủ đề này mở rộng xác suất cổ điển lớp 10 bằng các phép toán trên biến cố (hợp, giao, biến cố đối), khái niệm hai biến cố xung khắc, hai biến cố độc lập, và hai quy tắc cộng, nhân xác suất. Nhờ đó tính được xác suất của các phép thử lặp lại, các hệ thống gồm nhiều bộ phận hoạt động độc lập.

## I. Kiến thức cần nắm

### 1. Biến cố hợp, giao

- $A \cup B$: $A$ hoặc $B$ xảy ra. $AB$ (hay $A \cap B$): cả $A$ và $B$ cùng xảy ra.
- $A$, $B$ **xung khắc** nếu $AB = \varnothing$ (không thể cùng xảy ra).

### 2. Quy tắc cộng

- Tổng quát: $P(A \cup B) = P(A) + P(B) - P(AB)$.
- $A$, $B$ xung khắc: $P(A \cup B) = P(A) + P(B)$.
- Biến cố đối: $P(\bar A) = 1 - P(A)$.

### 3. Biến cố độc lập, quy tắc nhân

- $A$, $B$ **độc lập** nếu việc xảy ra hay không của biến cố này không ảnh hưởng tới xác suất của biến cố kia.
- $A$, $B$ độc lập $\iff P(AB) = P(A) \cdot P(B)$.
- Nếu $A$, $B$ độc lập thì các cặp $\bar A$ và $B$, $A$ và $\bar B$, $\bar A$ và $\bar B$ cũng độc lập.
- Mở rộng cho nhiều biến cố độc lập: $P(A_1A_2\cdots A_n) = P(A_1)P(A_2)\cdots P(A_n)$.

### 4. Kỹ thuật thường dùng

- "Ít nhất một": $P = 1 - P(\text{không có cái nào})$.
- "Đúng một": tách thành các trường hợp xung khắc, mỗi trường hợp dùng quy tắc nhân.
- Phép thử lặp $n$ lần độc lập với xác suất thành công $p$: $P(\text{không lần nào}) = (1 - p)^n$.

### 5. Sai lầm hay gặp

- Nhầm xung khắc với độc lập (hai biến cố xung khắc có xác suất dương thì **không** độc lập).
- Cộng xác suất của hai biến cố không xung khắc mà quên trừ $P(AB)$.
- Nhân xác suất của các biến cố không độc lập.

## II. Bài tập vận dụng

**Bài 1.** Cho $A$, $B$ là hai biến cố độc lập với $P(A) = 0{,}6$, $P(B) = 0{,}5$. Tính $P(AB)$, $P(A \cup B)$ và $P(\bar A\bar B)$.

**Bài 2.** Gieo một con xúc xắc cân đối. $A$: "số chấm chẵn", $B$: "số chấm không nhỏ hơn 4". Tính $P(A \cup B)$. Hai biến cố $A$, $B$ có độc lập không?

**Bài 3.** Hai xạ thủ bắn độc lập vào một bia, xác suất trúng lần lượt 0,8 và 0,7. Tính xác suất: a) cả hai trúng; b) có ít nhất một người trúng; c) có đúng một người trúng.

**Bài 4.** Lớp có 40 học sinh, 25 bạn thích Toán, 20 bạn thích Văn, 10 bạn thích cả hai. Chọn ngẫu nhiên một bạn. Tính xác suất bạn đó thích ít nhất một trong hai môn.

**Bài 5.** Hộp có 5 bi đỏ và 3 bi xanh. Lấy ngẫu nhiên lần lượt 2 viên **có hoàn lại**. Tính xác suất: a) hai viên đều đỏ; b) hai viên khác màu.

**Bài 6.** Rút ngẫu nhiên một thẻ từ 20 thẻ đánh số 1 đến 20. $A$: "số chia hết cho 4", $B$: "số chia hết cho 5". $A$ và $B$ có xung khắc không? Tính $P(A \cup B)$.

**Bài 7.** Tung một đồng xu cân đối 3 lần. Tính xác suất có ít nhất một lần xuất hiện mặt sấp.

**Bài 8.** Một hệ thống có ba máy hoạt động độc lập, xác suất hỏng lần lượt 0,1; 0,2; 0,3. Tính xác suất: a) cả ba máy đều tốt; b) có đúng một máy hỏng.

**Bài 9.** Một bài trắc nghiệm có 5 câu, mỗi câu 4 phương án trong đó có 1 phương án đúng. Một học sinh chọn ngẫu nhiên. Tính xác suất học sinh đó: a) đúng cả 5 câu; b) đúng ít nhất 1 câu.

**Bài 10 (thực tế).** Dự báo xác suất có mưa vào thứ Bảy là 0,3 và Chủ nhật là 0,4 (coi là độc lập). Tính xác suất cuối tuần có mưa (ít nhất một ngày).

**Bài 11 (vận dụng cao).** Chứng minh nếu $A$, $B$ độc lập thì $\bar A$ và $B$ cũng độc lập.

**Bài 12 (vận dụng cao).** Hai bạn An và Bình lần lượt gieo một con xúc xắc, An gieo trước; ai gieo được mặt 6 trước thì thắng. Tính xác suất An thắng.

**Bài 13 (vận dụng cao).** Phải tung một đồng xu cân đối ít nhất bao nhiêu lần để xác suất có ít nhất một lần sấp không nhỏ hơn 0,99?

---

## III. Lời giải chi tiết

### Bài 1
$P(AB) = 0{,}6 \cdot 0{,}5 = 0{,}3$. $P(A \cup B) = 0{,}6 + 0{,}5 - 0{,}3 = 0{,}8$. $P(\bar A\bar B) = 0{,}4 \cdot 0{,}5 = 0{,}2$ (cũng bằng $1 - P(A \cup B)$).

### Bài 2
$A \cup B = \{2; 4; 5; 6\}$: $P = \dfrac{4}{6} = \dfrac{2}{3}$. $AB = \{4; 6\}$: $P(AB) = \dfrac{1}{3}$, còn $P(A)P(B) = \dfrac{1}{2} \cdot \dfrac{1}{2} = \dfrac{1}{4}$. Không bằng nhau: $A$, $B$ không độc lập.

### Bài 3
a) $0{,}8 \cdot 0{,}7 = 0{,}56$. b) $1 - 0{,}2 \cdot 0{,}3 = 0{,}94$. c) $0{,}8 \cdot 0{,}3 + 0{,}2 \cdot 0{,}7 = 0{,}38$.

### Bài 4
$P(T \cup V) = \dfrac{25}{40} + \dfrac{20}{40} - \dfrac{10}{40} = \dfrac{35}{40} = \dfrac{7}{8}$.

### Bài 5
Hai lần lấy độc lập, mỗi lần $P(\text{đỏ}) = \dfrac{5}{8}$.
a) $\left(\dfrac{5}{8}\right)^2 = \dfrac{25}{64}$. b) Đỏ rồi xanh hoặc xanh rồi đỏ (xung khắc): $2 \cdot \dfrac{5}{8} \cdot \dfrac{3}{8} = \dfrac{15}{32}$.

### Bài 6
Số 20 chia hết cho cả 4 và 5 nên $A$, $B$ không xung khắc. $P(A \cup B) = \dfrac{5}{20} + \dfrac{4}{20} - \dfrac{1}{20} = \dfrac{2}{5}$.

### Bài 7
$1 - \left(\dfrac{1}{2}\right)^3 = \dfrac{7}{8}$.

### Bài 8
a) $0{,}9 \cdot 0{,}8 \cdot 0{,}7 = 0{,}504$.
b) $0{,}1 \cdot 0{,}8 \cdot 0{,}7 + 0{,}9 \cdot 0{,}2 \cdot 0{,}7 + 0{,}9 \cdot 0{,}8 \cdot 0{,}3 = 0{,}056 + 0{,}126 + 0{,}216 = 0{,}398$.

### Bài 9
a) $\left(\dfrac{1}{4}\right)^5 = \dfrac{1}{1\,024}$. b) $1 - \left(\dfrac{3}{4}\right)^5 = 1 - \dfrac{243}{1\,024} = \dfrac{781}{1\,024}$.

### Bài 10
$1 - 0{,}7 \cdot 0{,}6 = 0{,}58$.

### Bài 11
$B = AB \cup \bar AB$ (xung khắc) nên $P(\bar AB) = P(B) - P(AB) = P(B) - P(A)P(B) = (1 - P(A))P(B) = P(\bar A)P(B)$.

### Bài 12
An thắng ở lượt gieo thứ nhất, thứ ba, thứ năm, …: lượt thứ $2k + 1$ cần $2k$ lần trước đều không ra 6.
$P = \dfrac{1}{6} + \left(\dfrac{5}{6}\right)^2\dfrac{1}{6} + \left(\dfrac{5}{6}\right)^4\dfrac{1}{6} + \dots = \dfrac{\frac{1}{6}}{1 - \frac{25}{36}} = \dfrac{6}{11}$.

### Bài 13
$1 - \left(\dfrac{1}{2}\right)^n \ge 0{,}99 \iff 2^n \ge 100 \iff n \ge 7$ (vì $2^6 = 64$, $2^7 = 128$). Ít nhất 7 lần.

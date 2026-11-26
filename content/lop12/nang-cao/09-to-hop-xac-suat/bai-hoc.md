# Chủ đề 9. Tổ hợp và xác suất nâng cao

> Chủ đề này tổng hợp các kỹ thuật đếm và tính xác suất ở mức học sinh giỏi lớp 12: chia kẹo có ràng buộc, song ánh, hoán vị vòng, bù trừ, hệ số lớn nhất trong khai triển, tổng tổ hợp bằng tích phân, xác suất có điều kiện (Bayes), kỳ vọng và xác suất hình học.

## I. Kiến thức cần nắm

### 1. Chia kẹo có ràng buộc

- Mỗi biến ít nhất $m$: trừ trước $m$ cho mỗi biến rồi đếm nghiệm không âm.
- Biến bị chặn trên ($x \le k$): đếm phần bù ($x \ge k + 1$).

### 2. Hoán vị vòng, bù trừ

- $n$ người quanh bàn tròn: $(n - 1)!$ cách.
- Hoán vị không điểm cố định: $D_n = n!\sum_{k = 0}^{n}\dfrac{(-1)^k}{k!}$ ($D_5 = 44$).

### 3. Nhị thức Newton

- Hệ số lớn nhất của $(a + bx)^n$: xét tỉ số $\dfrac{a_{k + 1}}{a_k}$ để tìm $k$.
- Tổng tổ hợp có dạng $\dfrac{C_n^k}{k + 1}$: lấy tích phân khai triển $(1 + x)^n$ trên $[0; 1]$.

### 4. Xác suất

- Công thức Bayes: $P(B_i \mid A) = \dfrac{P(B_i)P(A \mid B_i)}{\sum_j P(B_j)P(A \mid B_j)}$.
- Kỳ vọng của biến ngẫu nhiên rời rạc: $E(X) = \sum x_ip_i$; tính chất $E(X + Y) = E(X) + E(Y)$.
- Xác suất hình học: $P = \dfrac{\text{diện tích miền thuận lợi}}{\text{diện tích miền tất cả}}$.

### 5. Sai lầm hay gặp

- Đếm trùng khi chia trường hợp không rời nhau.
- Quên chia cho số phép quay khi xếp quanh bàn tròn.
- Nhầm $P(A \mid B)$ với $P(B \mid A)$.

## II. Bài tập vận dụng

**Bài 1.** Có bao nhiêu cách chia 10 viên kẹo giống nhau cho 3 em sao cho mỗi em có ít nhất 2 viên?

**Bài 2.** Phương trình $x + y + z = 10$ có bao nhiêu nghiệm nguyên không âm với $x \le 3$?

**Bài 3.** Có bao nhiêu tập con 4 phần tử của $\{1; 2; \dots; 12\}$ không chứa hai số liên tiếp?

**Bài 4.** Có bao nhiêu cách xếp 6 người quanh một bàn tròn sao cho hai người A, B không ngồi cạnh nhau?

**Bài 5.** Năm lá thư được bỏ ngẫu nhiên vào năm phong bì đã ghi địa chỉ. Tính xác suất không lá thư nào vào đúng phong bì.

**Bài 6.** Gieo một con xúc xắc liên tiếp cho đến khi ra mặt 6. Tính xác suất phải gieo đúng 3 lần.

**Bài 7 (Bayes).** Trong túi có một đồng xu cân đối và một đồng xu cả hai mặt đều là sấp. Lấy ngẫu nhiên một đồng và tung, được mặt sấp. Tính xác suất đồng xu đó là đồng hai mặt sấp.

**Bài 8 (Monty Hall).** Có 3 cánh cửa, sau một cửa là ô tô, sau hai cửa còn lại là dê. Bạn chọn cửa 1. Người dẫn chương trình (biết vị trí ô tô) mở một cửa có dê trong hai cửa còn lại và cho bạn đổi. Nên đổi hay không? Tính xác suất thắng nếu đổi.

**Bài 9 (kỳ vọng).** Gieo hai con xúc xắc cân đối. Tính kỳ vọng của tổng số chấm.

**Bài 10.** Rút ngẫu nhiên 5 lá từ bộ bài 52 lá. Tính xác suất được đúng một đôi (hai lá cùng giá trị, ba lá còn lại khác giá trị với nhau và với đôi) (làm tròn đến hàng phần nghìn).

**Bài 11.** Tìm số hạng có hệ số lớn nhất trong khai triển $(1 + 2x)^{10}$.

**Bài 12.** Tính $S = C_n^0 + \dfrac{C_n^1}{2} + \dfrac{C_n^2}{3} + \dots + \dfrac{C_n^n}{n + 1}$.

**Bài 13 (xác suất hình học).** Hai người hẹn gặp nhau tại một địa điểm trong khoảng từ 7 giờ đến 8 giờ; mỗi người đến ngẫu nhiên trong khoảng đó và chờ người kia tối đa 15 phút. Tính xác suất hai người gặp nhau.

---

## III. Lời giải chi tiết

### Bài 1
Cho trước mỗi em 2 viên, còn 4 viên chia tùy ý: số nghiệm không âm của $x + y + z = 4$ là $C_6^2 = 15$.

### Bài 2
Tổng số nghiệm không âm: $C_{12}^2 = 66$. Số nghiệm có $x \ge 4$ (đặt $x' = x - 4$): $C_8^2 = 28$. Đáp số $66 - 28 = 38$.

### Bài 3
Song ánh $b_i = a_i - (i - 1)$: $C_{12 - 4 + 1}^4 = C_9^4 = 126$.

### Bài 4
Tổng số cách: $5! = 120$. A, B ngồi cạnh nhau: coi là một khối, xếp 5 "người" quanh bàn có $4! = 24$ cách, đổi chỗ trong khối 2 cách: 48. Đáp số $120 - 48 = 72$.

### Bài 5
$D_5 = 44$: $P = \dfrac{44}{120} = \dfrac{11}{30}$.

### Bài 6
Hai lần đầu không ra 6, lần ba ra 6: $\left(\dfrac{5}{6}\right)^2 \cdot \dfrac{1}{6} = \dfrac{25}{216}$.

### Bài 7
$P(\text{sấp}) = \dfrac{1}{2} \cdot 1 + \dfrac{1}{2} \cdot \dfrac{1}{2} = \dfrac{3}{4}$. $P(\text{đồng hai mặt} \mid \text{sấp}) = \dfrac{1/2}{3/4} = \dfrac{2}{3}$.

### Bài 8
Nếu không đổi, thắng khi lựa chọn ban đầu đúng: $\dfrac{1}{3}$. Nếu đổi, thắng khi lựa chọn ban đầu sai (xác suất $\dfrac{2}{3}$), vì khi đó người dẫn buộc phải mở cửa dê còn lại và cửa còn lại chính là ô tô. Nên đổi; xác suất thắng $\dfrac{2}{3}$.

### Bài 9
Mỗi xúc xắc có kỳ vọng $\dfrac{1 + 2 + \dots + 6}{6} = 3{,}5$. Kỳ vọng của tổng $= 3{,}5 + 3{,}5 = 7$.

### Bài 10
Chọn giá trị của đôi (13 cách), hai chất ($C_4^2 = 6$), ba giá trị khác cho ba lá lẻ ($C_{12}^3 = 220$), chất của mỗi lá lẻ ($4^3 = 64$): $13 \cdot 6 \cdot 220 \cdot 64 = 1\,098\,240$. $P = \dfrac{1\,098\,240}{C_{52}^5} = \dfrac{1\,098\,240}{2\,598\,960} \approx 0{,}423$.

### Bài 11
$a_k = C_{10}^k2^k$. $\dfrac{a_{k + 1}}{a_k} = \dfrac{2(10 - k)}{k + 1} \ge 1 \iff k \le \dfrac{19}{3}$, nên $a_k$ tăng đến $k = 7$ rồi giảm. Hệ số lớn nhất $a_7 = C_{10}^7 \cdot 2^7 = 15\,360$; số hạng $15\,360x^7$.

### Bài 12
$\int_0^1(1 + x)^n\,dx = \sum_{k = 0}^{n} C_n^k\int_0^1 x^k\,dx = \sum\dfrac{C_n^k}{k + 1}$. Vế trái $= \dfrac{(1 + x)^{n + 1}}{n + 1}\Big|_0^1 = \dfrac{2^{n + 1} - 1}{n + 1}$. Vậy $S = \dfrac{2^{n + 1} - 1}{n + 1}$.

### Bài 13
Gọi $x$, $y$ (phút, từ 0 đến 60) là thời điểm đến của hai người; điểm $(x; y)$ phân bố đều trên hình vuông cạnh 60. Gặp nhau khi $\lvert x - y\rvert \le 15$. Phần không gặp gồm hai tam giác vuông cân cạnh 45, tổng diện tích $45^2$. $P = 1 - \dfrac{45^2}{60^2} = 1 - \dfrac{9}{16} = \dfrac{7}{16}$.

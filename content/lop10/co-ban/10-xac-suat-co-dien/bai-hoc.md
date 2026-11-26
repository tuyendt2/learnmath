# Chủ đề 10. Xác suất theo định nghĩa cổ điển

> Chủ đề này dùng các công cụ đếm của chủ đề 8 để tính xác suất: mô tả không gian mẫu, biến cố, biến cố đối, và công thức $P(A) = \dfrac{n(A)}{n(\Omega)}$. Đây là dạng câu hỏi xuất hiện thường xuyên trong đề kiểm tra và đề thi tốt nghiệp.

## I. Kiến thức cần nắm

### 1. Phép thử, không gian mẫu, biến cố

- **Phép thử ngẫu nhiên:** biết các kết quả có thể xảy ra nhưng không biết trước kết quả nào.
- **Không gian mẫu** $\Omega$: tập hợp tất cả các kết quả có thể; $n(\Omega)$ là số phần tử.
- **Biến cố** $A$: tập con của $\Omega$; các phần tử của $A$ là kết quả thuận lợi cho $A$.
- Biến cố chắc chắn $\Omega$, biến cố không thể $\varnothing$.

### 2. Định nghĩa cổ điển của xác suất

Khi các kết quả **đồng khả năng**: $P(A) = \dfrac{n(A)}{n(\Omega)}$. Luôn có $0 \le P(A) \le 1$, $P(\Omega) = 1$, $P(\varnothing) = 0$.

### 3. Biến cố đối

$\bar A$ xảy ra khi và chỉ khi $A$ không xảy ra: $P(\bar A) = 1 - P(A)$. Dùng khi đề hỏi "ít nhất một".

### 4. Đếm $n(\Omega)$ và $n(A)$

- Chọn đồng thời $k$ phần tử: tổ hợp $C_n^k$.
- Xếp thứ tự, lập số: chỉnh hợp, hoán vị, quy tắc nhân.
- Gieo xúc xắc, tung đồng xu nhiều lần: quy tắc nhân ($6^k$, $2^k$).
- Số ít: liệt kê bằng sơ đồ cây hoặc bảng.

### 5. Sai lầm hay gặp

- Coi các kết quả không đồng khả năng là đồng khả năng (ví dụ "tổng hai xúc xắc" có 11 giá trị nhưng không đồng khả năng).
- Đếm $n(\Omega)$ bằng tổ hợp nhưng $n(A)$ bằng chỉnh hợp (không nhất quán).
- Đếm trực tiếp "ít nhất một" bị trùng thay vì dùng biến cố đối.

## II. Bài tập vận dụng

**Bài 1.** Tung một đồng xu cân đối hai lần. Mô tả không gian mẫu và tính xác suất để có đúng một lần xuất hiện mặt sấp.

**Bài 2.** Gieo đồng thời hai con xúc xắc cân đối. Tính xác suất để: a) hai mặt có số chấm bằng nhau; b) tổng số chấm không nhỏ hơn 10.

**Bài 3.** Một hộp có 5 bi đỏ và 4 bi xanh. Lấy ngẫu nhiên đồng thời 2 viên. Tính xác suất để: a) hai bi đều đỏ; b) hai bi cùng màu.

**Bài 4.** Với hộp bi ở bài 3, lấy ngẫu nhiên đồng thời 3 viên. Tính xác suất để có ít nhất một bi xanh.

**Bài 5.** Chọn ngẫu nhiên một số nguyên dương không lớn hơn 30. Tính xác suất để số đó chia hết cho 2 hoặc cho 3.

**Bài 6.** Tung một đồng xu cân đối bốn lần. Tính xác suất để mặt sấp xuất hiện đúng hai lần.

**Bài 7.** Xếp ngẫu nhiên 5 bạn, trong đó có An và Bình, thành một hàng ngang. Tính xác suất để An và Bình đứng cạnh nhau.

**Bài 8.** Một tổ có 4 nam và 6 nữ. Chọn ngẫu nhiên 3 bạn. Tính xác suất để có đúng 1 nam.

**Bài 9.** Từ các chữ số 1, 2, 3, 4, 5 lập ngẫu nhiên một số có ba chữ số khác nhau. Tính xác suất để số đó chia hết cho 3.

**Bài 10 (thực tế).** Một bộ bài tú lơ khơ có 52 lá, trong đó có 4 lá Át. Rút ngẫu nhiên 2 lá. Tính xác suất để cả hai lá đều là Át.

**Bài 11 (vận dụng cao).** Gieo một con xúc xắc cân đối ba lần. Tính xác suất để mặt 6 chấm xuất hiện ít nhất một lần.

**Bài 12 (vận dụng cao).** Một lớp có 20 nam và 15 nữ. Giáo viên chọn ngẫu nhiên 4 học sinh lên bảng. Tính xác suất để có cả nam và nữ.

**Bài 13 (vận dụng cao).** Có 3 lá thư và 3 phong bì ghi sẵn địa chỉ. Bỏ ngẫu nhiên mỗi lá thư vào một phong bì. Tính xác suất để không lá thư nào vào đúng phong bì.

---

## III. Lời giải chi tiết

### Bài 1
$\Omega = \{SS, SN, NS, NN\}$, $n(\Omega) = 4$. Đúng một lần sấp: $\{SN, NS\}$. $P = \dfrac{2}{4} = \dfrac{1}{2}$.

### Bài 2
$n(\Omega) = 36$.
a) Sáu kết quả $(1; 1), \dots, (6; 6)$: $P = \dfrac{6}{36} = \dfrac{1}{6}$.
b) Tổng 10: 3 kết quả; tổng 11: 2; tổng 12: 1. Cộng 6 kết quả: $P = \dfrac{1}{6}$.

### Bài 3
$n(\Omega) = C_9^2 = 36$.
a) $C_5^2 = 10$: $P = \dfrac{10}{36} = \dfrac{5}{18}$.
b) $C_5^2 + C_4^2 = 16$: $P = \dfrac{16}{36} = \dfrac{4}{9}$.

### Bài 4
$n(\Omega) = C_9^3 = 84$. Biến cố đối "cả ba đều đỏ": $C_5^3 = 10$. $P = 1 - \dfrac{10}{84} = \dfrac{37}{42}$.

### Bài 5
Chia hết cho 2: 15 số; cho 3: 10 số; cho cả 2 và 3 (cho 6): 5 số. Số thuận lợi: $15 + 10 - 5 = 20$. $P = \dfrac{20}{30} = \dfrac{2}{3}$.

### Bài 6
$n(\Omega) = 2^4 = 16$. Chọn 2 trong 4 lần là sấp: $C_4^2 = 6$. $P = \dfrac{6}{16} = \dfrac{3}{8}$.

### Bài 7
$n(\Omega) = 5! = 120$. Coi An và Bình là một khối: xếp 4 "phần tử" có $4! = 24$ cách, trong khối đổi chỗ 2 cách: 48. $P = \dfrac{48}{120} = \dfrac{2}{5}$.

### Bài 8
$n(\Omega) = C_{10}^3 = 120$. Đúng 1 nam: $C_4^1 \cdot C_6^2 = 4 \cdot 15 = 60$. $P = \dfrac{1}{2}$.

### Bài 9
$n(\Omega) = A_5^3 = 60$. Chia hết cho 3 khi tổng ba chữ số chia hết cho 3: các bộ $\{1; 2; 3\}$, $\{1; 3; 5\}$, $\{2; 3; 4\}$, $\{3; 4; 5\}$, mỗi bộ cho $3! = 6$ số: 24 số. $P = \dfrac{24}{60} = \dfrac{2}{5}$.

### Bài 10
$n(\Omega) = C_{52}^2 = 1\,326$. Hai lá Át: $C_4^2 = 6$. $P = \dfrac{6}{1\,326} = \dfrac{1}{221}$.

### Bài 11
$n(\Omega) = 6^3 = 216$. Biến cố đối "không lần nào ra 6": $5^3 = 125$. $P = 1 - \dfrac{125}{216} = \dfrac{91}{216}$.

### Bài 12
$n(\Omega) = C_{35}^4 = 52\,360$. Toàn nam: $C_{20}^4 = 4\,845$; toàn nữ: $C_{15}^4 = 1\,365$. Có cả nam và nữ: $52\,360 - 4\,845 - 1\,365 = 46\,150$.
$P = \dfrac{46\,150}{52\,360} = \dfrac{4\,615}{5\,236} \approx 0{,}88$.

### Bài 13
$n(\Omega) = 3! = 6$. Gọi các thư là 1, 2, 3; cách bỏ không thư nào đúng: $(2; 3; 1)$ và $(3; 1; 2)$: 2 cách. $P = \dfrac{2}{6} = \dfrac{1}{3}$.

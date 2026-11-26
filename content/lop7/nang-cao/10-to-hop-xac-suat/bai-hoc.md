# Chủ đề 10. Tổ hợp, Dirichlet, xác suất và logic

> Câu cuối đề học sinh giỏi lớp 7 thường là một bài tổ hợp hoặc xác suất: đếm số cách, nguyên lý Dirichlet, bất biến, trò chơi, xác suất của biến cố trong các phép thử đơn giản (gieo hai xúc xắc, tung ba đồng xu, lấy bi từ hai hộp), hoặc suy luận logic.

## I. Kiến thức cần nắm

### 1. Quy tắc đếm

- **Quy tắc cộng** (hoặc) và **quy tắc nhân** (rồi).
- Xếp $n$ người thành hàng: $n \cdot (n - 1) \cdots 2 \cdot 1$ cách.
- Chọn có thứ tự $k$ trong $n$: $n(n - 1)\cdots(n - k + 1)$; chọn không kể thứ tự: chia thêm cho $k(k - 1)\cdots 1$.
- **Bù trừ:** $\lvert A \text{ hoặc } B\rvert = \lvert A\rvert + \lvert B\rvert - \lvert A \text{ và } B\rvert$.

### 2. Xác suất

Khi các kết quả đồng khả năng: $P(A) = \dfrac{\text{số kết quả thuận lợi}}{\text{số kết quả có thể}}$.
- Gieo hai xúc xắc: $6 \cdot 6 = 36$ kết quả (phân biệt xúc xắc thứ nhất và thứ hai).
- Tung ba đồng xu: $2 \cdot 2 \cdot 2 = 8$ kết quả.
- Lấy mỗi hộp một viên bi: số kết quả là tích số bi hai hộp.
- **Biến cố đối:** $P(\text{không } A) = 1 - P(A)$, thường dùng khi đếm "không xảy ra" dễ hơn.

### 3. Nguyên lý Dirichlet

Nhốt $nk + 1$ đối tượng vào $n$ "chuồng" thì có chuồng chứa ít nhất $k + 1$ đối tượng. Chuồng hay dùng: số dư, tháng sinh, màu sắc, ô vuông.

### 4. Bất biến và trò chơi

- Tìm đại lượng không đổi (hoặc không đổi tính chẵn lẻ) qua mỗi bước.
- Trò chơi đối xứng: người đi trước (hoặc sau) đưa trạng thái về đối xứng rồi "bắt chước" đối phương.

### 5. Sai lầm hay gặp

- Gieo hai xúc xắc mà coi "tổng bằng 7" có 3 kết quả (thực ra có 6 vì $(1; 6)$ khác $(6; 1)$).
- Đếm trùng khi chọn không kể thứ tự.
- Suy luận logic chỉ thử một trường hợp.

## II. Bài tập vận dụng

**Bài 1.** Từ các chữ số 1, 2, 3, 4, 5 lập được bao nhiêu số có ba chữ số khác nhau? Trong đó có bao nhiêu số chia hết cho 5?

**Bài 2.** Có bao nhiêu cách xếp 5 bạn thành một hàng ngang? Có bao nhiêu cách xếp mà bạn An đứng ở chính giữa?

**Bài 3.** Có bao nhiêu cách chọn 3 bạn từ 7 bạn để đi dự thi?

**Bài 4.** Gieo đồng thời hai con xúc xắc cân đối. Tính xác suất để tổng số chấm bằng 7.

**Bài 5.** Rút ngẫu nhiên một thẻ trong 30 thẻ đánh số từ 1 đến 30. Tính xác suất để số trên thẻ chia hết cho 2 hoặc cho 3.

**Bài 6.** Lớp 7A có 45 học sinh. Chứng minh rằng có ít nhất 4 bạn có cùng tháng sinh.

**Bài 7.** Chứng minh rằng trong 6 số tự nhiên bất kỳ luôn có hai số mà hiệu của chúng chia hết cho 5.

**Bài 8 (logic).** Cửa kính lớp bị vỡ, một trong bốn bạn A, B, C, D đã làm vỡ. A nói: "B làm vỡ". B nói: "D làm vỡ". C nói: "Không phải em". D nói: "B nói sai". Biết chỉ có đúng một bạn nói sai. Ai đã làm vỡ cửa kính?

**Bài 9.** Một khu phố có các con đường tạo thành lưới $3 \times 3$ ô vuông. Đi từ góc dưới bên trái đến góc trên bên phải, mỗi bước chỉ sang phải hoặc đi lên. Có bao nhiêu đường đi?

**Bài 10.** Tung đồng thời ba đồng xu cân đối. Tính xác suất để có đúng hai đồng xu sấp.

**Bài 11 (bất biến).** Trên bảng $3 \times 3$ ô, mỗi ô ghi số 0. Mỗi lần được chọn hai ô kề nhau (chung cạnh) và cộng thêm 1 vào mỗi ô. Hỏi có thể làm cho tất cả các ô đều bằng 1 không?

**Bài 12.** Gieo đồng thời hai con xúc xắc cân đối. Tính xác suất để tích số chấm là số chẵn.

**Bài 13 (khó).** Hộp I có 3 bi đỏ và 2 bi xanh, hộp II có 2 bi đỏ và 3 bi xanh. Lấy ngẫu nhiên từ mỗi hộp một viên bi. Tính xác suất để hai viên bi cùng màu.

**Bài 14 (khó, trò chơi).** Hai bạn lần lượt đặt các đồng xu giống nhau lên một mặt bàn hình tròn sao cho các đồng xu không chồng lên nhau và không chờm ra ngoài mép bàn. Ai không đặt được nữa thì thua. Chứng minh người đi trước có cách chắc chắn thắng.

---

## III. Lời giải chi tiết

### Bài 1
$5 \cdot 4 \cdot 3 = 60$ số. Chia hết cho 5 thì tận cùng là 5; hai chữ số đầu chọn từ 4 chữ số còn lại: $4 \cdot 3 = 12$ số.

### Bài 2
$5 \cdot 4 \cdot 3 \cdot 2 \cdot 1 = 120$ cách. An đứng giữa, 4 bạn còn lại xếp vào 4 chỗ: $24$ cách.

### Bài 3
Chọn có thứ tự: $7 \cdot 6 \cdot 5 = 210$; mỗi nhóm 3 bạn được đếm 6 lần: $210 : 6 = 35$ cách.

### Bài 4
Có 36 kết quả đồng khả năng. Tổng bằng 7: $(1; 6), (2; 5), (3; 4), (4; 3), (5; 2), (6; 1)$: 6 kết quả.
$P = \dfrac{6}{36} = \dfrac{1}{6}$.

### Bài 5
Chia hết cho 2: 15 số; cho 3: 10 số; cho 6: 5 số. Chia hết cho 2 hoặc 3: $15 + 10 - 5 = 20$.
$P = \dfrac{20}{30} = \dfrac{2}{3}$.

### Bài 6
Nếu mỗi tháng có nhiều nhất 3 bạn thì lớp có nhiều nhất $12 \cdot 3 = 36 < 45$ bạn: vô lý. Vậy có tháng có ít nhất 4 bạn.

### Bài 7
Chia cho 5 có 5 số dư. 6 số nên có hai số cùng số dư; hiệu của chúng chia hết cho 5.

### Bài 8
Câu của B ("D làm vỡ") và câu của D ("B nói sai") trái ngược nhau, nên đúng một trong hai câu sai. Vì chỉ có một bạn nói sai, nên A và C nói đúng.
A nói đúng: B làm vỡ. Khi đó B nói sai, D nói đúng, C nói đúng: đúng một người nói sai.

**Đáp số:** bạn B.

### Bài 9
Mỗi đường đi gồm 3 bước sang phải và 3 bước lên; chọn 3 trong 6 bước là bước lên: $\dfrac{6 \cdot 5 \cdot 4}{6} = 20$.

### Bài 10
8 kết quả đồng khả năng. Đúng hai sấp: SSN, SNS, NSS (3 kết quả). $P = \dfrac{3}{8}$.

### Bài 11
Mỗi lần, tổng các số trên bảng tăng 2, nên tổng luôn là số chẵn. Muốn tất cả bằng 1 thì tổng là 9, số lẻ. **Không thể**.

### Bài 12
Tích lẻ khi cả hai số đều lẻ: $3 \cdot 3 = 9$ kết quả. Tích chẵn: $36 - 9 = 27$ kết quả.
$P = \dfrac{27}{36} = \dfrac{3}{4}$.

### Bài 13
Số kết quả: $5 \cdot 5 = 25$. Cùng đỏ: $3 \cdot 2 = 6$; cùng xanh: $2 \cdot 3 = 6$.
$P = \dfrac{12}{25}$.

### Bài 14
Người đi trước đặt đồng xu đầu tiên **ở chính tâm** bàn. Sau đó, mỗi khi người đi sau đặt một đồng xu ở vị trí nào, người đi trước đặt một đồng xu ở vị trí **đối xứng qua tâm** bàn.
Vị trí đối xứng luôn còn trống: bố cục các đồng xu luôn đối xứng qua tâm sau mỗi lượt của người đi trước, và đồng xu vừa đặt của người đi sau không thể chờm lên vị trí đối xứng của chính nó (vì vị trí tâm đã có đồng xu). Do đó người đi trước luôn đặt được, và người đi sau sẽ là người không đặt được trước.

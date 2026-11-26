# Chủ đề 9. Tổ hợp

> Bài tổ hợp trong đề học sinh giỏi lớp 10 gồm đếm nâng cao (chia kẹo Euler, song ánh, bù trừ, đếm bằng hai cách), nguyên lý Dirichlet và bất biến. Chìa khóa là chuyển bài toán lạ về một mô hình đếm quen thuộc.

## I. Kiến thức cần nắm

### 1. Chia kẹo Euler

- Số nghiệm nguyên **dương** của $x_1 + x_2 + \dots + x_k = n$: $C_{n - 1}^{k - 1}$.
- Số nghiệm nguyên **không âm**: $C_{n + k - 1}^{k - 1}$.

### 2. Song ánh

Hai tập hợp có song ánh thì cùng số phần tử. Ví dụ: chọn $k$ số từ $\{1; \dots; n\}$ không có hai số liên tiếp, đặt $b_i = a_i - (i - 1)$, được song ánh với tập con $k$ phần tử của $\{1; \dots; n - k + 1\}$: có $C_{n - k + 1}^k$ cách.

### 3. Nguyên lý bù trừ

$\lvert A \cup B \cup C\rvert = \lvert A\rvert + \lvert B\rvert + \lvert C\rvert - \lvert A \cap B\rvert - \lvert B \cap C\rvert - \lvert C \cap A\rvert + \lvert A \cap B \cap C\rvert$.
Số hoán vị không có điểm cố định: $D_n = n!\left(1 - \dfrac{1}{1!} + \dfrac{1}{2!} - \dots + \dfrac{(-1)^n}{n!}\right)$; $D_3 = 2$, $D_4 = 9$, $D_5 = 44$.

### 4. Đếm bằng hai cách

Đếm cùng một đại lượng theo hai cách để được đẳng thức, ví dụ $\sum_{k} kC_n^k = n \cdot 2^{n - 1}$ (chọn một ban và một trưởng ban).

### 5. Nguyên lý Dirichlet

Nhốt $n + 1$ con thỏ vào $n$ chuồng thì có chuồng chứa ít nhất 2 con. Tổng quát: $N$ đối tượng vào $k$ chuồng thì có chuồng chứa ít nhất $\left\lceil \dfrac{N}{k}\right\rceil$ đối tượng. Chuồng hay dùng: số dư, cặp số liên tiếp, tính chẵn lẻ của tọa độ, màu.

### 6. Bất biến và tô màu

Tìm đại lượng không đổi (tổng, tính chẵn lẻ, số dư) qua mỗi phép biến đổi; so sánh trạng thái đầu và trạng thái đích. Tô màu bàn cờ để chứng minh không thể lát.

## II. Bài tập vận dụng

**Bài 1.** Phương trình $x + y + z = 10$ có bao nhiêu nghiệm nguyên không âm? Bao nhiêu nghiệm nguyên dương?

**Bài 2.** Có bao nhiêu số nguyên dương không vượt quá 1000 không chia hết cho số nào trong các số 2, 3, 5?

**Bài 3.** Có bao nhiêu cách chọn 3 số từ tập $\{1; 2; \dots; 20\}$ sao cho không có hai số nào là hai số liên tiếp?

**Bài 4.** Trên lưới ô vuông, đi từ $O(0; 0)$ đến $A(5; 5)$, mỗi bước sang phải hoặc lên trên một đơn vị. Có bao nhiêu đường đi? Bao nhiêu đường đi không qua điểm $(2; 2)$?

**Bài 5.** Có bao nhiêu tập con của $\{1; 2; \dots; 10\}$ có tổng các phần tử là số chẵn (tập rỗng có tổng 0)?

**Bài 6.** Chọn 51 số bất kỳ từ $\{1; 2; \dots; 100\}$. Chứng minh: a) có hai số nguyên tố cùng nhau; b) có hai số mà số này chia hết cho số kia.

**Bài 7.** Cho 5 điểm có tọa độ nguyên trong mặt phẳng. Chứng minh có hai điểm mà trung điểm của đoạn nối chúng cũng có tọa độ nguyên.

**Bài 8.** Trên bảng ghi các số $1, 2, \dots, 2025$. Mỗi lần xóa hai số $a, b$ và viết số $\lvert a - b\rvert$. Sau 2024 lần còn lại một số. Số đó chẵn hay lẻ?

**Bài 9.** Bàn cờ $8 \times 8$ bị cắt bỏ hai ô ở hai góc đối diện. Có thể phủ kín phần còn lại bằng 31 quân domino $1 \times 2$ không?

**Bài 10.** Năm người để mũ ở phòng gửi đồ, khi về mỗi người nhận ngẫu nhiên một chiếc mũ. Tính xác suất để không ai nhận đúng mũ của mình.

**Bài 11.** Có bao nhiêu cách chia 10 viên kẹo giống nhau cho 4 em bé sao cho em nào cũng có ít nhất 1 viên?

**Bài 12.** Bằng cách đếm hai cách, chứng minh $\sum_{k = 1}^{n} kC_n^k = n \cdot 2^{n - 1}$.

**Bài 13.** Cho đa giác đều 12 đỉnh. Có bao nhiêu tam giác có ba đỉnh là đỉnh của đa giác và không có cạnh nào là cạnh của đa giác?

**Bài 14 (HSG).** Trong một nhóm 6 người, hai người bất kỳ hoặc quen nhau hoặc không quen nhau. Chứng minh có 3 người đôi một quen nhau hoặc 3 người đôi một không quen nhau.

---

## III. Lời giải chi tiết

### Bài 1
Không âm: $C_{12}^2 = 66$. Dương: $C_9^2 = 36$.

### Bài 2
Gọi $A_2, A_3, A_5$ là tập các số chia hết cho 2, 3, 5: $\lvert A_2\rvert = 500$, $\lvert A_3\rvert = 333$, $\lvert A_5\rvert = 200$, $\lvert A_6\rvert = 166$, $\lvert A_{10}\rvert = 100$, $\lvert A_{15}\rvert = 66$, $\lvert A_{30}\rvert = 33$.
$\lvert A_2 \cup A_3 \cup A_5\rvert = 500 + 333 + 200 - 166 - 100 - 66 + 33 = 734$. Đáp số: $1000 - 734 = 266$.

### Bài 3
Với $a_1 < a_2 < a_3$ không liên tiếp, đặt $b_1 = a_1$, $b_2 = a_2 - 1$, $b_3 = a_3 - 2$: $1 \le b_1 < b_2 < b_3 \le 18$. Đây là song ánh, nên số cách là $C_{18}^3 = 816$.

### Bài 4
Mỗi đường đi gồm 5 bước phải, 5 bước lên: $C_{10}^5 = 252$. Qua $(2; 2)$: $C_4^2 \cdot C_6^3 = 6 \cdot 20 = 120$. Không qua: $252 - 120 = 132$.

### Bài 5
Ghép mỗi tập $X$ không chứa 1 với $X \cup \{1\}$: hai tập có tổng khác tính chẵn lẻ. Các cặp này chia $2^{10}$ tập thành $2^9$ cặp, mỗi cặp có đúng một tập tổng chẵn. Đáp số: $2^9 = 512$.

### Bài 6
a) Chia thành 50 cặp $\{1; 2\}, \{3; 4\}, \dots, \{99; 100\}$. 51 số nên có hai số cùng cặp, là hai số liên tiếp, nguyên tố cùng nhau.
b) Mỗi số viết được dạng $2^k \cdot m$ với $m$ lẻ, $m \in \{1; 3; \dots; 99\}$ (50 giá trị). 51 số nên có hai số cùng $m$: $2^{k_1}m$ và $2^{k_2}m$ với $k_1 < k_2$, số nhỏ chia hết số lớn.

### Bài 7
Mỗi điểm có cặp tính chẵn lẻ của tọa độ thuộc 4 loại (chẵn, chẵn), (chẵn, lẻ), (lẻ, chẵn), (lẻ, lẻ). 5 điểm nên có hai điểm cùng loại; tổng các hoành độ và tổng các tung độ của chúng đều chẵn, nên trung điểm có tọa độ nguyên.

### Bài 8
$a + b$ và $\lvert a - b\rvert$ cùng tính chẵn lẻ, nên tính chẵn lẻ của tổng các số trên bảng không đổi. Tổng ban đầu $\dfrac{2025 \cdot 2026}{2} = 2025 \cdot 1013$ là số lẻ. Số cuối cùng là số **lẻ**.

### Bài 9
Tô màu bàn cờ đen trắng xen kẽ. Hai góc đối diện cùng màu (giả sử trắng), nên phần còn lại có 32 ô đen và 30 ô trắng. Mỗi domino phủ một ô đen và một ô trắng, 31 domino phủ 31 đen, 31 trắng. **Không thể**.

### Bài 10
Số cách trả mũ: $5! = 120$. Không ai nhận đúng: $D_5 = 120\left(\dfrac{1}{2} - \dfrac{1}{6} + \dfrac{1}{24} - \dfrac{1}{120}\right) = 60 - 20 + 5 - 1 = 44$. $P = \dfrac{44}{120} = \dfrac{11}{30}$.

### Bài 11
Số nghiệm nguyên dương của $x_1 + x_2 + x_3 + x_4 = 10$: $C_9^3 = 84$.

### Bài 12
Đếm số cách chọn từ $n$ người một ban (khác rỗng) và một trưởng ban thuộc ban đó.
- Cách 1: chọn ban có $k$ người ($C_n^k$ cách), chọn trưởng ban ($k$ cách): tổng $\sum_k kC_n^k$.
- Cách 2: chọn trưởng ban trước ($n$ cách), mỗi người trong $n - 1$ người còn lại có vào ban hoặc không: $n \cdot 2^{n - 1}$.

### Bài 13
Chọn đỉnh thứ nhất $A$ (12 cách); hai đỉnh còn lại chọn trong 9 đỉnh không kề $A$ (bỏ $A$ và hai đỉnh kề) sao cho hai đỉnh đó không kề nhau. Trên dãy 9 đỉnh liên tiếp, số cách chọn 2 đỉnh không kề là $C_8^2 = 28$. Mỗi tam giác được đếm 3 lần (theo đỉnh $A$): $\dfrac{12 \cdot 28}{3} = 112$.

### Bài 14
Xét người $A$. Trong 5 người còn lại, theo Dirichlet có ít nhất 3 người cùng quan hệ với $A$; giả sử $B$, $C$, $D$ đều quen $A$ (trường hợp không quen làm tương tự).
- Nếu hai người trong $B, C, D$ quen nhau, chẳng hạn $B$ và $C$, thì $A, B, C$ đôi một quen nhau.
- Nếu không, $B, C, D$ đôi một không quen nhau.

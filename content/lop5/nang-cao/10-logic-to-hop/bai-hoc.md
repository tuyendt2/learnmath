# Chủ đề 10. Logic, đếm và tổ hợp

> Phần "toán tư duy" trong đề thi vào lớp 6 chất lượng cao gồm: đếm số cách (quy tắc nhân, bù trừ), nguyên lý Dirichlet, giả thiết tạm nhiều loại, suy luận đúng sai, và trò chơi có chiến thuật thắng. Bài làm cần lập luận chặt chẽ, xét đủ các trường hợp.

## I. Kiến thức cần nắm

### 1. Quy tắc cộng và quy tắc nhân

- **Quy tắc cộng:** công việc có thể làm theo cách A **hoặc** cách B (không trùng nhau); A có $m$ cách, B có $n$ cách thì có $m + n$ cách.
- **Quy tắc nhân:** công việc gồm bước 1 **rồi** bước 2; bước 1 có $m$ cách, mỗi cách đó bước 2 có $n$ cách thì có $m \times n$ cách.

**Lập số có chữ số 0:** chữ số đầu tiên không được là 0, nên xét chữ số hàng cao nhất trước. Số chẵn: xét riêng trường hợp tận cùng là 0 và tận cùng khác 0.

### 2. Đếm cặp, đếm nhóm ba

- Số cặp (không kể thứ tự) từ $n$ đối tượng: $n \times (n - 1) : 2$ (bắt tay, thi đấu vòng tròn, đoạn thẳng).
- Số nhóm ba từ $n$ đối tượng: $n \times (n - 1) \times (n - 2) : 6$ (số tam giác có đỉnh là $n$ điểm, không có 3 điểm nào thẳng hàng).

*Vì sao chia 6:* mỗi nhóm ba $\{A, B, C\}$ được đếm $3 \times 2 \times 1 = 6$ lần khi đếm theo thứ tự.

### 3. Bù trừ

Số các số từ 1 đến $N$ chia hết cho 2 **hoặc** 3 $=$ (số chia hết cho 2) $+$ (số chia hết cho 3) $-$ (số chia hết cho 6, bị đếm hai lần).

### 4. Nguyên lý Dirichlet

- $n \times k + 1$ con thỏ nhốt vào $n$ chuồng thì có chuồng chứa ít nhất $k + 1$ con.
- **Ứng dụng với số dư:** khi chia cho $n$ chỉ có $n$ số dư ($0, 1, \dots, n - 1$). Trong $n + 1$ số tự nhiên bất kỳ luôn có hai số cùng số dư, hiệu của chúng chia hết cho $n$.

### 5. Suy luận logic

- Lập bảng, loại dần các khả năng sai.
- Bài "chỉ một người nói thật": xét lần lượt từng giả thiết, đếm số câu đúng.

### 6. Trò chơi bốc vật

Mỗi lượt được bốc từ 1 đến $k$ vật, ai bốc vật cuối cùng thì thắng.
- Các số vật là **bội của $k + 1$** là "vị trí thua" cho người sắp đi.
- **Chiến thuật thắng:** luôn bốc sao cho số vật còn lại là bội của $k + 1$; sau đó, đối phương bốc $m$ vật thì mình bốc $k + 1 - m$ vật.

### 7. Sai lầm hay gặp

- Lập số mà để chữ số 0 đứng đầu.
- Đếm cặp, đếm nhóm mà quên chia (đếm trùng).
- Bù trừ mà quên trừ phần chung.

## II. Bài tập vận dụng

**Bài 1.** Có bao nhiêu số có ba chữ số chia hết cho 5?

**Bài 2.** Từ các chữ số 0, 1, 2, 3, 4 có thể lập được:
a) bao nhiêu số có ba chữ số khác nhau? b) bao nhiêu số chẵn có ba chữ số khác nhau?

**Bài 3.** Trong một buổi họp, mỗi người đều bắt tay một lần với từng người còn lại. Người ta đếm được 45 cái bắt tay. Hỏi buổi họp có bao nhiêu người?

**Bài 4 (giả thiết tạm).** Một bài thi có 30 câu. Mỗi câu đúng được 4 điểm, mỗi câu sai bị trừ 1 điểm, câu bỏ không làm được 0 điểm. An được 78 điểm, và số câu An làm sai gấp đôi số câu An bỏ không làm. Hỏi An làm đúng bao nhiêu câu?

**Bài 5 (Dirichlet).** Chứng tỏ rằng trong 7 số tự nhiên bất kỳ luôn có hai số mà hiệu của chúng chia hết cho 6.

**Bài 6 (Dirichlet).** Lớp 5A có 32 học sinh. Chứng tỏ rằng có ít nhất 3 bạn có sinh nhật trong cùng một tháng.

**Bài 7 (lập bảng).** Ba bạn Minh, Nam, Long, mỗi bạn giỏi nhất một môn khác nhau trong ba môn Toán, Văn, Anh. Biết: Minh không giỏi Toán; bạn giỏi Văn không phải là Nam; Long không giỏi Văn; Nam không giỏi Anh. Hỏi mỗi bạn giỏi môn gì?

**Bài 8 (đúng sai).** Một trong bốn bạn A, B, C, D đạt giải nhất. Khi được hỏi:
- A nói: "C đạt giải."
- B nói: "Tôi không đạt giải."
- C nói: "D đạt giải."
- D nói: "C nói sai."

Biết rằng chỉ có đúng một bạn nói thật. Hỏi ai đạt giải nhất?

**Bài 9 (trò chơi).** Trên bàn có 32 viên bi. Hai bạn lần lượt lấy, mỗi lượt lấy từ 1 đến 4 viên. Ai lấy được viên bi cuối cùng thì thắng. Người đi trước hay người đi sau có cách chắc chắn thắng? Nêu cách chơi.

**Bài 10 (đong nước).** Có hai cái bình rỗng, một bình chứa được đúng 5 lít và một bình chứa được đúng 3 lít, cùng một vòi nước. Làm thế nào để đong được đúng 4 lít nước?

**Bài 11 (cân bi).** Có 8 viên bi giống hệt nhau, trong đó có 1 viên nặng hơn các viên còn lại. Dùng cân đĩa (không có quả cân), làm thế nào chỉ cân 2 lần mà tìm ra viên bi nặng?

**Bài 12 (đường đi).** Một khu phố có các con đường tạo thành lưới hình vuông $3 \times 3$ ô. Một người đi từ góc dưới bên trái đến góc trên bên phải, mỗi bước chỉ đi sang phải hoặc đi lên theo các con đường. Có bao nhiêu đường đi khác nhau?

**Bài 13 (đếm tam giác).** Trên một đường tròn lấy 6 điểm. Hỏi có bao nhiêu tam giác có ba đỉnh là ba trong sáu điểm đó?

**Bài 14 (khó).** Có bao nhiêu số tự nhiên từ 1 đến 100 không chia hết cho 2 và cũng không chia hết cho 3?

---

## III. Lời giải chi tiết

### Bài 1
Các số có ba chữ số chia hết cho 5 là $100, 105, 110, \dots, 995$, dãy cách đều 5.
Số số hạng: $(995 - 100) : 5 + 1 = 180$.

*Cách khác:* hàng trăm có 9 cách (1 đến 9), hàng chục có 10 cách, hàng đơn vị có 2 cách (0 hoặc 5): $9 \times 10 \times 2 = 180$.

**Đáp số:** 180 số.

### Bài 2
a) Hàng trăm: 4 cách (khác 0). Hàng chục: 4 cách (khác chữ số hàng trăm, được dùng 0). Hàng đơn vị: 3 cách.
Số các số: $4 \times 4 \times 3 = 48$.

b) Số chẵn tận cùng là 0, 2 hoặc 4.
- Tận cùng là 0: hàng trăm 4 cách, hàng chục 3 cách: $4 \times 3 = 12$ số.
- Tận cùng là 2 hoặc 4 (2 cách): hàng trăm có 3 cách (khác 0 và khác chữ số tận cùng), hàng chục có 3 cách: $2 \times 3 \times 3 = 18$ số.

Tổng: $12 + 18 = 30$ số.

**Đáp số:** a) 48; b) 30.

### Bài 3
Nếu có $n$ người thì số cái bắt tay là $n \times (n - 1) : 2$. Ta cần $n \times (n - 1) = 90$. Hai số tự nhiên liên tiếp có tích 90 là 9 và 10, nên $n = 10$.

**Đáp số:** 10 người.

### Bài 4
Cứ 1 câu bỏ thì có 2 câu sai. Gộp 1 câu bỏ và 2 câu sai thành một "nhóm" 3 câu, nhóm này được $0 - 1 - 1 = -2$ điểm, tức là bị trừ 2 điểm.
Giả sử An làm đúng cả 30 câu: được $4 \times 30 = 120$ điểm, hơn thực tế $120 - 78 = 42$ điểm.
Thay 3 câu đúng (12 điểm) bằng một "nhóm" (bị trừ 2 điểm) thì điểm giảm $12 + 2 = 14$.
Số nhóm: $42 : 14 = 3$. Vậy An bỏ 3 câu, sai 6 câu, đúng $30 - 9 = 21$ câu.

**Đáp số:** 21 câu.

Thử lại: $21 \times 4 - 6 = 78$.

### Bài 5
Khi chia một số tự nhiên cho 6, số dư chỉ có thể là 0, 1, 2, 3, 4, 5 (6 khả năng).
Có 7 số mà chỉ có 6 số dư, nên theo nguyên lý Dirichlet có ít nhất hai số có cùng số dư.
Hai số cùng số dư khi chia cho 6 thì hiệu của chúng chia hết cho 6.

### Bài 6
Nếu mỗi tháng có nhiều nhất 2 bạn sinh nhật thì lớp có nhiều nhất $12 \times 2 = 24$ bạn. Lớp có 32 bạn, nhiều hơn 24, nên có ít nhất một tháng có từ 3 bạn trở lên sinh nhật.

### Bài 7
Bạn giỏi Văn không phải Nam, không phải Long, nên Minh giỏi **Văn**.
Nam không giỏi Anh, Văn đã của Minh, nên Nam giỏi **Toán**.
Long giỏi **Anh**.

Kiểm tra: Minh không giỏi Toán (đúng).

**Đáp số:** Minh giỏi Văn, Nam giỏi Toán, Long giỏi Anh.

### Bài 8
Xét từng trường hợp:
- A đạt giải: A sai, B đúng, C sai, D đúng (C nói sai thật). 2 người nói thật, loại.
- B đạt giải: A sai, B sai, C sai, D đúng. Đúng 1 người nói thật, thỏa mãn.
- C đạt giải: A đúng, B đúng. Đã có 2 người nói thật, loại.
- D đạt giải: B đúng, C đúng. Loại.

**Đáp số:** B đạt giải nhất.

### Bài 9
Mỗi lượt lấy 1 đến 4 viên, nên ta xét các bội của $4 + 1 = 5$.
**Người đi trước** thắng: lượt đầu lấy 2 viên, còn 30 viên (bội của 5). Sau đó, mỗi khi người kia lấy $m$ viên thì mình lấy $5 - m$ viên. Sau mỗi vòng số bi giảm đúng 5, luôn còn bội của 5. Cuối cùng còn 5 viên đến lượt người kia: lấy bao nhiêu (1 đến 4) thì mình lấy hết phần còn lại.

### Bài 10
Gọi bình 5 lít là bình lớn, bình 3 lít là bình nhỏ.
1. Đổ đầy bình lớn (5 l). Rót sang bình nhỏ đến khi đầy: bình lớn còn 2 l.
2. Đổ hết nước ở bình nhỏ đi. Rót 2 l từ bình lớn sang bình nhỏ.
3. Đổ đầy bình lớn (5 l). Rót sang bình nhỏ đến khi đầy: bình nhỏ đang có 2 l nên chỉ nhận thêm 1 l.
4. Bình lớn còn $5 - 1 = 4$ (l).

### Bài 11
**Lần 1:** chia 8 viên thành ba nhóm 3, 3, 2. Đặt hai nhóm 3 viên lên hai đĩa cân.
- Nếu lệch: viên nặng ở nhóm 3 viên bên đĩa nặng hơn. **Lần 2:** lấy 2 trong 3 viên đó đặt lên hai đĩa; lệch thì viên ở đĩa nặng là viên cần tìm, thăng bằng thì viên còn lại là viên cần tìm.
- Nếu thăng bằng: viên nặng ở nhóm 2 viên. **Lần 2:** đặt 2 viên đó lên hai đĩa, viên ở đĩa nặng hơn là viên cần tìm.

### Bài 12
Ghi tại mỗi ngã tư số đường đi đến đó (bằng tổng của ngã tư bên trái và ngã tư bên dưới). Lưới $3 \times 3$ ô có $4 \times 4$ ngã tư:

| 1 | 4 | 10 | 20 |
|---|---|---|---|
| 1 | 3 | 6 | 10 |
| 1 | 2 | 3 | 4 |
| 1 | 1 | 1 | 1 |

(Hàng dưới cùng chứa điểm xuất phát ở góc trái; đích ở góc phải hàng trên cùng.)

**Đáp số:** 20 đường đi.

*Nhận xét:* mỗi đường gồm 3 bước sang phải và 3 bước lên; chọn 3 trong 6 bước là bước lên: $6 \times 5 \times 4 : 6 = 20$.

### Bài 13
Không có ba điểm nào trên đường tròn thẳng hàng, nên mỗi bộ ba điểm cho một tam giác.
Chọn có thứ tự: $6 \times 5 \times 4 = 120$ cách. Mỗi tam giác được đếm $3 \times 2 \times 1 = 6$ lần.
Số tam giác: $120 : 6 = 20$.

**Đáp số:** 20 tam giác.

### Bài 14
Từ 1 đến 100: số chia hết cho 2 có 50 số; chia hết cho 3 có 33 số; chia hết cho cả 2 và 3 (tức chia hết cho 6) có 16 số.
Số chia hết cho 2 hoặc cho 3: $50 + 33 - 16 = 67$ (trừ 16 vì bị đếm hai lần).
Số không chia hết cho 2 và không chia hết cho 3: $100 - 67 = 33$.

**Đáp số:** 33 số.

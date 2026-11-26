# Chủ đề 10. Tổ hợp, Dirichlet và suy luận logic

> Câu cuối đề học sinh giỏi lớp 6 thường là một bài tổ hợp: đếm số cách, nguyên lý Dirichlet, bất biến, trò chơi, hoặc suy luận logic. Các bài này không cần nhiều kiến thức mới nhưng cần lập luận chặt chẽ và xét đủ trường hợp.

## I. Kiến thức cần nắm

### 1. Quy tắc đếm

- **Quy tắc cộng** (hoặc), **quy tắc nhân** (rồi).
- Lập số có chữ số 0: xét chữ số hàng cao nhất trước (khác 0).
- Số cặp không kể thứ tự từ $n$ phần tử: $\dfrac{n(n - 1)}{2}$; có kể thứ tự: $n(n - 1)$.
- Đếm bằng **phần bù**: đếm tất cả rồi trừ các trường hợp không thỏa mãn.
- **Đánh số trang:** trang 1–9 dùng 9 chữ số; trang 10–99 dùng 180 chữ số; từ trang 100 mỗi trang dùng 3 chữ số.

### 2. Nguyên lý Dirichlet

- $n + 1$ con thỏ vào $n$ chuồng thì có chuồng chứa ít nhất 2 con.
- **Với số dư:** trong $n + 1$ số nguyên bất kỳ có hai số cùng số dư khi chia cho $n$, hiệu của chúng chia hết cho $n$.
- **Số gồm toàn chữ số 1:** xét các số $1, 11, 111, \dots$; hai số cùng số dư khi chia cho $m$ thì hiệu có dạng $11\dots1 \cdot 10^k$. Nếu $m$ không chia hết cho 2 và 5 thì $m$ chia hết số $11\dots1$.

### 3. Bất biến

Một đại lượng **không thay đổi** (hoặc không đổi tính chẵn lẻ) sau mỗi bước biến đổi. So sánh giá trị ban đầu với trạng thái cần đạt để kết luận.

**Ví dụ.** Xóa hai số $a, b$ và viết $a + b$ hoặc $a - b$: tổng các số thay đổi một lượng chẵn ($0$ hoặc $2b$), nên **tính chẵn lẻ của tổng không đổi**.

### 4. Trò chơi

- Tìm các **vị trí thua** (người phải đi ở đó sẽ thua nếu đối phương chơi đúng).
- **Chiến thuật đối xứng:** hai đống bằng nhau, người đi sau lặp lại nước đi của đối phương ở đống kia.

### 5. Suy luận logic

Giả sử từng trường hợp, kiểm tra điều kiện (chẳng hạn "chỉ có một câu đúng"), loại trường hợp mâu thuẫn.

### 6. Sai lầm hay gặp

- Đếm trùng (quên chia khi không kể thứ tự).
- Áp dụng Dirichlet mà không chỉ rõ "thỏ" và "chuồng".
- Suy luận logic mà chỉ tìm ra một trường hợp đúng, không chứng minh các trường hợp khác sai.

## II. Bài tập vận dụng

**Bài 1.** Từ các chữ số 0, 1, 2, 3, 4, 5 lập được bao nhiêu số có bốn chữ số khác nhau?

**Bài 2.** Từ các chữ số 1, 2, 3, 4 lập được bao nhiêu số có ba chữ số khác nhau chia hết cho 3?

**Bài 3.** Để đánh số trang một quyển sách (từ trang 1) cần dùng 2 022 chữ số. Hỏi quyển sách có bao nhiêu trang?

**Bài 4.** Chứng tỏ rằng trong 13 số tự nhiên bất kỳ luôn có hai số mà hiệu của chúng chia hết cho 12.

**Bài 5.** Chứng tỏ rằng trong 6 số tự nhiên bất kỳ luôn có hai số mà hiệu của chúng chia hết cho 5.

**Bài 6.** Chứng tỏ rằng tồn tại một số tự nhiên chỉ gồm toàn chữ số 1 và chia hết cho 2 023.

**Bài 7.** Ba bạn Tùng, Lâm, Hưng đạt giải nhất, nhì, ba (mỗi bạn một giải). Tùng nói: "Tôi đạt giải nhất". Lâm nói: "Tôi không đạt giải nhì". Hưng nói: "Tôi không đạt giải nhất". Biết rằng chỉ có đúng một bạn nói đúng. Hỏi mỗi bạn đạt giải gì?

**Bài 8.** Có 8 đội bóng thi đấu vòng tròn hai lượt (mỗi cặp đội gặp nhau hai trận: lượt đi và lượt về). Hỏi có tất cả bao nhiêu trận đấu?

**Bài 9.** Trong một buổi gặp mặt có 5 cặp vợ chồng. Mỗi người bắt tay một lần với tất cả mọi người, trừ vợ (hoặc chồng) của mình. Hỏi có bao nhiêu cái bắt tay?

**Bài 10.** Một khu phố có các con đường tạo thành lưới 3 hàng, 4 cột ô vuông. Đi từ góc dưới bên trái đến góc trên bên phải, mỗi bước chỉ đi sang phải hoặc đi lên. Có bao nhiêu đường đi?

**Bài 11 (bất biến).** Trên bảng ghi các số $1, 2, 3, \dots, 10$. Mỗi lần, xóa hai số bất kỳ $a$, $b$ rồi viết thêm số $a + b$ hoặc số $a - b$ (với $a \ge b$). Cứ làm như vậy cho đến khi trên bảng chỉ còn một số. Số đó chẵn hay lẻ?

**Bài 12 (trò chơi).** Có hai đống kẹo, mỗi đống 20 viên. Hai bạn lần lượt lấy; mỗi lượt được lấy bao nhiêu viên tùy ý (ít nhất 1 viên) nhưng chỉ từ một đống. Ai lấy viên cuối cùng thì thắng. Ai có cách chắc chắn thắng?

**Bài 13 (khó).** 10 đội bóng thi đấu vòng tròn một lượt. Mỗi trận, đội thắng được 3 điểm, đội thua 0 điểm, hòa thì mỗi đội 1 điểm. Kết thúc giải, tổng số điểm của các đội là 120. Hỏi có bao nhiêu trận hòa?

---

## III. Lời giải chi tiết

### Bài 1
Chữ số hàng nghìn: 5 cách (khác 0). Ba chữ số sau: $5 \cdot 4 \cdot 3$ cách. Tổng: $5 \cdot 5 \cdot 4 \cdot 3 = 300$ (số).

### Bài 2
Số chia hết cho 3 khi tổng các chữ số chia hết cho 3. Chọn 3 chữ số khác nhau từ 1, 2, 3, 4 có các bộ: $\{1, 2, 3\}$ (tổng 6), $\{1, 2, 4\}$ (7), $\{1, 3, 4\}$ (8), $\{2, 3, 4\}$ (9). Bộ có tổng chia hết cho 3: $\{1, 2, 3\}$ và $\{2, 3, 4\}$.
Mỗi bộ xếp được $3 \cdot 2 \cdot 1 = 6$ số. Tổng: 12 số.

### Bài 3
Trang 1 đến 99 dùng $9 + 180 = 189$ chữ số. Còn $2\,022 - 189 = 1\,833$ chữ số cho các trang có ba chữ số: $1\,833 : 3 = 611$ trang.
Số trang: $99 + 611 = 710$.

### Bài 4
Chia cho 12 có 12 số dư ($0, 1, \dots, 11$). 13 số nên có hai số cùng số dư; hiệu của chúng chia hết cho 12.

### Bài 5
Chia cho 5 có 5 số dư. 6 số nên có hai số cùng số dư; hiệu chia hết cho 5.

### Bài 6
Xét 2 024 số $a_1 = 1$, $a_2 = 11$, …, $a_{2024} = 11\dots1$ (2 024 chữ số 1). Chia cho 2 023 chỉ có 2 023 số dư, nên có hai số $a_i$, $a_j$ ($i > j$) cùng số dư. Hiệu
$$a_i - a_j = \underbrace{11\dots1}_{i - j}\underbrace{00\dots0}_{j}$$
chia hết cho 2 023. Hiệu này bằng $\underbrace{11\dots1}_{i - j} \cdot 10^j$. Vì $2\,023 = 7 \cdot 17^2$ không có ước nguyên tố 2 và 5, nên 2 023 chia hết số $\underbrace{11\dots1}_{i - j}$.

### Bài 7
- Nếu câu của Tùng đúng (Tùng nhất) thì Hưng không nhất, câu của Hưng cũng đúng: có hai câu đúng, loại. Vậy Tùng không đạt giải nhất.
- Nếu câu của Hưng đúng (Hưng không nhất) thì Lâm nhất (vì Tùng cũng không nhất), nên câu "Tôi không đạt giải nhì" của Lâm cũng đúng: hai câu đúng, loại.
- Vậy câu của Hưng sai: **Hưng đạt giải nhất**. Câu đúng duy nhất là của Lâm: Lâm không đạt giải nhì, nên **Lâm giải ba**, **Tùng giải nhì**.

### Bài 8
Mỗi cặp đội đá 2 trận: $\dfrac{8 \cdot 7}{2} \cdot 2 = 56$ (trận).

### Bài 9
10 người, nếu ai cũng bắt tay nhau thì có $\dfrac{10 \cdot 9}{2} = 45$ cái bắt tay. Bớt 5 cặp vợ chồng: $45 - 5 = 40$.

### Bài 10
Mỗi đường đi gồm 4 bước sang phải và 3 bước đi lên (7 bước). Ghi số đường đi tại các ngã tư (cộng ô bên trái và ô bên dưới), hoặc đếm số cách chọn 3 bước đi lên trong 7 bước: $\dfrac{7 \cdot 6 \cdot 5}{6} = 35$.

**Đáp số:** 35 đường đi.

### Bài 11
Gọi $S$ là tổng các số trên bảng. Thay $a, b$ bằng $a + b$ thì $S$ không đổi; thay bằng $a - b$ thì $S$ giảm $2b$. Trong cả hai trường hợp, $S$ thay đổi một số chẵn, nên **tính chẵn lẻ của $S$ không đổi**.
Ban đầu $S = 1 + 2 + \dots + 10 = 55$ là số lẻ. Vậy số cuối cùng là số **lẻ**.

### Bài 12
**Người đi sau** thắng bằng chiến thuật đối xứng: người đi trước lấy bao nhiêu viên ở đống nào thì người đi sau lấy đúng bấy nhiêu viên ở đống kia. Như vậy sau mỗi lượt của người đi sau, hai đống luôn bằng nhau. Người đi trước không bao giờ lấy được viên cuối (nếu người đi trước lấy hết một đống, người đi sau lấy hết đống còn lại).

### Bài 13
Số trận: $\dfrac{10 \cdot 9}{2} = 45$. Trận có kết quả thắng thua cho tổng 3 điểm, trận hòa cho tổng 2 điểm.
Nếu không có trận hòa thì tổng điểm là $45 \cdot 3 = 135$. Mỗi trận hòa làm tổng giảm 1 điểm.
Số trận hòa: $135 - 120 = 15$.

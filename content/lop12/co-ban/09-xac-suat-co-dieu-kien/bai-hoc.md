# Chủ đề 9. Xác suất có điều kiện, công thức xác suất toàn phần, công thức Bayes

> Xác suất có điều kiện trả lời câu hỏi "biết rằng $B$ đã xảy ra thì khả năng $A$ là bao nhiêu?". Công thức xác suất toàn phần và công thức Bayes giúp tính xác suất trong các tình huống nhiều giai đoạn: sản phẩm từ nhiều nhà máy, xét nghiệm y tế, lọc thư rác — những bài toán thực tế xuất hiện trong đề thi tốt nghiệp.

## I. Kiến thức cần nắm

### 1. Xác suất có điều kiện

Với $P(B) > 0$: $P(A \mid B) = \dfrac{P(AB)}{P(B)}$. Khi các kết quả đồng khả năng: $P(A \mid B) = \dfrac{n(AB)}{n(B)}$.

### 2. Công thức nhân

$P(AB) = P(A) \cdot P(B \mid A) = P(B) \cdot P(A \mid B)$. $A$, $B$ độc lập khi $P(A \mid B) = P(A)$.

### 3. Công thức xác suất toàn phần

Với $0 < P(B) < 1$:
$$P(A) = P(B)P(A \mid B) + P(\bar B)P(A \mid \bar B).$$
Mở rộng cho hệ đầy đủ $B_1, B_2, \dots, B_n$ (xung khắc từng đôi, hợp là không gian mẫu): $P(A) = \sum P(B_i)P(A \mid B_i)$.

### 4. Công thức Bayes

$$P(B \mid A) = \dfrac{P(B)P(A \mid B)}{P(A)} = \dfrac{P(B)P(A \mid B)}{P(B)P(A \mid B) + P(\bar B)P(A \mid \bar B)}.$$

### 5. Sơ đồ cây

Vẽ nhánh cấp 1 theo các trường hợp $B_i$ (ghi $P(B_i)$), nhánh cấp 2 theo $A$, $\bar A$ (ghi xác suất có điều kiện). Xác suất một đường đi bằng tích các xác suất trên đường; $P(A)$ bằng tổng các đường dẫn đến $A$.

### 6. Sai lầm hay gặp

- Nhầm $P(A \mid B)$ với $P(B \mid A)$ (ví dụ "xác suất dương tính khi có bệnh" khác "xác suất có bệnh khi dương tính").
- Quên nhánh $\bar B$ trong công thức toàn phần.
- Dùng $P(AB) = P(A)P(B)$ khi hai biến cố không độc lập.

## II. Bài tập vận dụng

**Bài 1.** Gieo một con xúc xắc cân đối. Biết số chấm là số chẵn, tính xác suất số chấm lớn hơn 3.

**Bài 2.** Lớp có 25 nữ và 15 nam; có 10 bạn nữ và 6 bạn nam đeo kính. Chọn ngẫu nhiên một bạn thì thấy bạn đó đeo kính. Tính xác suất bạn đó là nữ.

**Bài 3.** Cho $P(A) = 0{,}5$, $P(B) = 0{,}4$, $P(AB) = 0{,}2$. Tính $P(A \mid B)$, $P(B \mid A)$. Hai biến cố có độc lập không?

**Bài 4.** Hộp có 6 bi đỏ, 4 bi xanh. Lấy lần lượt 2 viên không hoàn lại. Tính xác suất viên thứ hai đỏ biết viên thứ nhất đỏ, và xác suất cả hai viên đều đỏ.

**Bài 5.** Hai máy sản xuất cùng một loại sản phẩm: máy I làm ra 60% sản phẩm với tỉ lệ phế phẩm 2%, máy II làm ra 40% với tỉ lệ phế phẩm 5%. Lấy ngẫu nhiên một sản phẩm. Tính xác suất đó là phế phẩm.

**Bài 6.** Với dữ kiện bài 5, biết sản phẩm lấy ra là phế phẩm. Tính xác suất nó do máy II sản xuất.

**Bài 7 (thực tế).** Một bệnh có tỉ lệ mắc 1% trong cộng đồng. Một xét nghiệm cho kết quả dương tính với 95% người mắc bệnh và dương tính (giả) với 5% người không mắc bệnh. Một người xét nghiệm dương tính. Tính xác suất người đó thực sự mắc bệnh (làm tròn đến hàng phần trăm).

**Bài 8.** Hộp I có 3 bi đỏ, 2 bi xanh; hộp II có 1 bi đỏ, 4 bi xanh. Chọn ngẫu nhiên một hộp rồi lấy một viên bi. Tính xác suất lấy được bi đỏ; biết bi lấy được màu đỏ, tính xác suất bi đó từ hộp I.

**Bài 9 (đúng/sai).** Cho $P(A) = 0{,}3$, $P(B \mid A) = 0{,}6$, $P(B \mid \bar A) = 0{,}2$. Xét tính đúng sai, giải thích:
a) $P(AB) = 0{,}18$.
b) $P(B) = 0{,}32$.
c) $P(A \mid B) = 0{,}5625$.
d) $A$ và $B$ độc lập.

**Bài 10 (thực tế).** Có 30% thư điện tử là thư rác. Từ "khuyến mãi" xuất hiện trong 60% thư rác và 5% thư thường. Một thư chứa từ "khuyến mãi". Tính xác suất đó là thư rác (làm tròn đến hàng phần trăm).

**Bài 11 (trả lời ngắn).** Trong một trường, 20% học sinh giỏi Toán; trong số đó 70% giỏi Vật lý, còn trong số học sinh không giỏi Toán có 15% giỏi Vật lý. Chọn ngẫu nhiên một học sinh, tính xác suất học sinh đó giỏi Vật lý.

**Bài 12 (vận dụng cao).** Ba nhà máy A, B, C sản xuất lần lượt 50%, 30%, 20% sản phẩm của một công ty, với tỉ lệ phế phẩm 1%, 2%, 3%. Tính tỉ lệ phế phẩm chung; biết một sản phẩm là phế phẩm, tính xác suất nó do nhà máy C sản xuất (làm tròn đến hàng phần trăm).

**Bài 13 (vận dụng cao).** Một người bắn hai phát. Xác suất trúng phát thứ nhất là 0,7. Nếu phát thứ nhất trúng thì xác suất trúng phát thứ hai là 0,8; nếu trượt thì là 0,5. Tính xác suất trúng ít nhất một phát, và biết phát thứ hai trúng, tính xác suất phát thứ nhất trúng.

---

## III. Lời giải chi tiết

### Bài 1
$B = \{2; 4; 6\}$, $A \cap B = \{4; 6\}$: $P = \dfrac{2}{3}$.

### Bài 2
Có 16 bạn đeo kính, trong đó 10 nữ: $P(\text{nữ} \mid \text{kính}) = \dfrac{10}{16} = \dfrac{5}{8}$.

### Bài 3
$P(A \mid B) = \dfrac{0{,}2}{0{,}4} = 0{,}5 = P(A)$; $P(B \mid A) = \dfrac{0{,}2}{0{,}5} = 0{,}4 = P(B)$. Độc lập.

### Bài 4
Sau khi lấy một bi đỏ còn 5 đỏ, 4 xanh: $P = \dfrac{5}{9}$. Cả hai đỏ: $\dfrac{6}{10} \cdot \dfrac{5}{9} = \dfrac{1}{3}$.

### Bài 5
$P = 0{,}6 \cdot 0{,}02 + 0{,}4 \cdot 0{,}05 = 0{,}012 + 0{,}02 = 0{,}032$.

### Bài 6
Bayes: $\dfrac{0{,}4 \cdot 0{,}05}{0{,}032} = \dfrac{0{,}02}{0{,}032} = 0{,}625$.

### Bài 7
$P(\text{dương}) = 0{,}01 \cdot 0{,}95 + 0{,}99 \cdot 0{,}05 = 0{,}0095 + 0{,}0495 = 0{,}059$.
$P(\text{bệnh} \mid \text{dương}) = \dfrac{0{,}0095}{0{,}059} \approx 0{,}16$.
*Nhận xét:* dù xét nghiệm "chính xác 95%", chỉ khoảng 16% người dương tính thật sự mắc bệnh, vì bệnh hiếm.

### Bài 8
$P(\text{đỏ}) = \dfrac{1}{2} \cdot \dfrac{3}{5} + \dfrac{1}{2} \cdot \dfrac{1}{5} = \dfrac{2}{5}$. $P(\text{I} \mid \text{đỏ}) = \dfrac{\frac{3}{10}}{\frac{2}{5}} = \dfrac{3}{4}$.

### Bài 9
a) **Đúng.** $P(AB) = 0{,}3 \cdot 0{,}6 = 0{,}18$.
b) **Đúng.** $P(B) = 0{,}18 + 0{,}7 \cdot 0{,}2 = 0{,}32$.
c) **Đúng.** $P(A \mid B) = \dfrac{0{,}18}{0{,}32} = 0{,}5625$.
d) **Sai.** $P(B \mid A) = 0{,}6 \ne P(B) = 0{,}32$.

### Bài 10
$P(\text{có từ}) = 0{,}3 \cdot 0{,}6 + 0{,}7 \cdot 0{,}05 = 0{,}215$. $P(\text{rác} \mid \text{có từ}) = \dfrac{0{,}18}{0{,}215} \approx 0{,}84$.

### Bài 11
$0{,}2 \cdot 0{,}7 + 0{,}8 \cdot 0{,}15 = 0{,}14 + 0{,}12 = 0{,}26$.
**Đáp số:** 0,26.

### Bài 12
$P(\text{phế}) = 0{,}5 \cdot 0{,}01 + 0{,}3 \cdot 0{,}02 + 0{,}2 \cdot 0{,}03 = 0{,}017$ (tức 1,7%). $P(C \mid \text{phế}) = \dfrac{0{,}006}{0{,}017} \approx 0{,}35$.

### Bài 13
$P(\text{trượt cả hai}) = 0{,}3 \cdot 0{,}5 = 0{,}15$, nên $P(\text{ít nhất một}) = 0{,}85$.
$P(\text{trúng phát 2}) = 0{,}7 \cdot 0{,}8 + 0{,}3 \cdot 0{,}5 = 0{,}71$. $P(\text{trúng phát 1} \mid \text{trúng phát 2}) = \dfrac{0{,}56}{0{,}71} \approx 0{,}79$.

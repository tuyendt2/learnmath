# Chủ đề 4. Dấu hiệu chia hết và phép chia có dư

> Dấu hiệu chia hết giúp em biết một số có chia hết cho $2, 3, 5, 9$ hay không mà không cần đặt phép chia. Đề thi hay hỏi điền chữ số vào dấu $*$, lập số theo điều kiện chia hết, và tìm số khi biết số dư.

## I. Kiến thức cần nắm

### 1. Dấu hiệu chia hết cho 2, 5 và 10: nhìn chữ số tận cùng
- Chia hết cho $2$: chữ số tận cùng là $0, 2, 4, 6, 8$ (số chẵn).
- Chia hết cho $5$: chữ số tận cùng là $0$ hoặc $5$.
- Chia hết cho cả $2$ và $5$ (tức là chia hết cho $10$): chữ số tận cùng là $0$.

*Vì sao chỉ cần nhìn chữ số tận cùng:* mọi số đều viết được thành "số chục $\times 10$ + chữ số hàng đơn vị", ví dụ $4572 = 457 \times 10 + 2$. Phần $457 \times 10$ luôn chia hết cho $2$ và cho $5$ (vì $10 = 2 \times 5$). Vậy số đó chia hết cho $2$ (hay $5$) khi và chỉ khi chữ số hàng đơn vị chia hết cho $2$ (hay $5$).

### 2. Dấu hiệu chia hết cho 3 và 9: xét tổng các chữ số
- Chia hết cho $9$: tổng các chữ số chia hết cho $9$.
- Chia hết cho $3$: tổng các chữ số chia hết cho $3$.
- Số chia hết cho $9$ thì chia hết cho $3$; ngược lại thì chưa chắc (ví dụ $12$).

*Vì sao:* $10 = 9 + 1$, $100 = 99 + 1$, $1000 = 999 + 1$. Do đó
$$\overline{abc} = a \times 100 + b \times 10 + c = (a \times 99 + b \times 9) + (a + b + c).$$
Phần trong ngoặc đầu luôn chia hết cho $9$ (và cho $3$). Vậy $\overline{abc}$ chia hết cho $9$ (hay $3$) khi và chỉ khi $a + b + c$ chia hết cho $9$ (hay $3$).

**Hệ quả quan trọng:** một số và tổng các chữ số của nó có **cùng số dư** khi chia cho $9$ (và khi chia cho $3$). Ví dụ $2024$ có tổng chữ số $8$, nên $2024$ chia $9$ dư $8$, chia $3$ dư $2$.

### 3. Mở rộng: chia hết cho 4 và chia hết cho nhiều số
- **Chia hết cho $4$** (mở rộng): số tạo bởi **hai chữ số tận cùng** chia hết cho $4$. Vì $\overline{abcd} = \overline{ab} \times 100 + \overline{cd}$ và $100 = 4 \times 25$ chia hết cho $4$.
- **Chia hết cho nhiều số:** xét lần lượt từng dấu hiệu, **dấu hiệu chữ số tận cùng làm trước** (vì nó cho ít khả năng), sau đó mới dùng tổng các chữ số.
  - Chia hết cho $6$: chia hết cho $2$ và $3$.
  - Chia hết cho $15$: chia hết cho $3$ và $5$.
  - Chia hết cho $45$: chia hết cho $5$ và $9$.
  - Chia hết cho $36$: chia hết cho $4$ và $9$.

*Ví dụ:* điền chữ số vào $\overline{4a5b}$ để số chia hết cho $2, 5$ và $9$. Chia hết cho $2$ và $5$ nên $b = 0$. Tổng $4 + a + 5 + 0 = 9 + a$ chia hết cho $9$ nên $a = 0$ hoặc $a = 9$. Được $4050$ và $4950$.

### 4. Phép chia có dư
$$\text{Số bị chia} = \text{số chia} \times \text{thương} + \text{số dư}, \qquad \text{số dư} < \text{số chia}.$$
- Số dư lớn nhất bằng số chia trừ $1$. Ví dụ chia cho $8$ thì số dư lớn nhất là $7$.
- Nếu số dư bằng $0$ thì đó là phép chia hết.

*Ví dụ:* một số chia cho $7$ được thương $15$, dư $6$. Số đó là $7 \times 15 + 6 = 111$.

### 5. Tính chất số dư của tổng và tích
- Số dư của một **tổng** khi chia cho $m$: cộng các số dư rồi lấy số dư của kết quả khi chia cho $m$.
- Số dư của một số **nhân với $k$**: nhân số dư với $k$ rồi lấy số dư khi chia cho $m$.

*Vì sao:* nếu $A = 9 \times q + 7$ thì $A \times 5 = 9 \times (q \times 5) + 35$. Phần đầu chia hết cho $9$, nên $A \times 5$ chia $9$ có cùng số dư với $35$, tức là dư $8$.

### 6. Thêm bớt để thành chia hết
Nếu một số chia cho $2$ dư $1$, chia cho $3$ dư $2$, chia cho $5$ dư $4$ (số dư luôn **kém số chia $1$**) thì **thêm $1$** vào số đó, ta được số chia hết cho cả $2, 3, 5$.

Tương tự, nếu số dư luôn bằng nhau (ví dụ chia $3$, chia $4$ đều dư $1$) thì **bớt** số dư đi để được số chia hết.

> **Sai lầm hay gặp:**
> - Dùng tổng chữ số cho dấu hiệu chia hết cho $2$ hay $5$ (sai: phải xét chữ số tận cùng).
> - Nghĩ rằng chia hết cho $3$ thì chia hết cho $9$ (sai, ví dụ $12$).
> - Điền chữ số mà quên rằng $*$ có thể bằng $0$ hoặc bằng $9$, nên bỏ sót đáp số.
> - Viết số dư lớn hơn hoặc bằng số chia.

---

## II. Bài tập vận dụng

**Bài 1.** Cho các số $1234$; $2025$; $3060$; $4572$; $7895$. Trong các số đó:
a) Số nào chia hết cho $2$? Số nào chia hết cho $5$?
b) Số nào chia hết cho $3$? Số nào chia hết cho $9$?
c) Số nào chia hết cho cả $2, 3, 5$ và $9$?

**Bài 2 (điền chữ số).** Thay dấu $*$ bằng chữ số thích hợp:
a) $\overline{52*}$ chia hết cho $3$;
b) $\overline{7{*}8}$ chia hết cho $9$;
c) $\overline{4{*}5{*}}$ chia hết cho cả $2$, $5$ và $9$ (hai dấu $*$ có thể khác nhau).

**Bài 3.** Tìm số nhỏ nhất và số lớn nhất có bốn chữ số chia hết cho cả $2$, $3$ và $5$.

**Bài 4.** Tìm các chữ số $a$, $b$ để số $\overline{a5b}$ chia hết cho $45$.

**Bài 5 (phép chia có dư).**
a) Một số chia cho $7$ được thương là $15$ và số dư là $6$. Tìm số đó.
b) Trong một phép chia cho $8$, thương là $24$ và số dư là số lớn nhất có thể. Tìm số bị chia.

**Bài 6.** Không tính tổng, hãy cho biết tổng $1234 + 5678 + 2025$ chia cho $9$ dư bao nhiêu.

**Bài 7.** Từ bốn chữ số $0, 3, 5, 7$, hãy viết tất cả các số có ba chữ số khác nhau chia hết cho cả $3$ và $5$.

**Bài 8.** Tìm số có hai chữ số, biết số đó chia cho $2$ dư $1$, chia cho $5$ dư $3$ và chia hết cho $9$.

**Bài 9.** Tìm số tự nhiên nhỏ nhất chia cho $2$ dư $1$, chia cho $3$ dư $2$ và chia cho $5$ dư $4$.

**Bài 10 (số dư).**
a) Một số chia cho $9$ dư $7$. Nếu nhân số đó với $5$ thì được số chia cho $9$ dư bao nhiêu?
b) Một số chia cho $12$ dư $8$. Số đó chia cho $3$ dư bao nhiêu? Chia cho $4$ dư bao nhiêu?

**Bài 11 (thực tế).** Số học sinh khối 4 của một trường có khoảng từ $150$ đến $200$ em. Khi xếp hàng $3$, hàng $4$ hay hàng $5$ đều vừa đủ, không thừa ai. Hỏi khối 4 có bao nhiêu học sinh?

**Bài 12.** Tìm các chữ số $a$, $b$ để số $\overline{1a2b}$ chia hết cho $36$.

**Bài 13 (chứng minh).** Lấy một số có ba chữ số trừ đi tổng các chữ số của nó. Chứng tỏ rằng hiệu luôn chia hết cho $9$.

**Bài 14 (khó).** Số $A$ gồm $2024$ chữ số $5$ viết liền nhau: $A = 555\dots5$. Hỏi $A$ chia cho $9$ dư bao nhiêu? Chia cho $3$ dư bao nhiêu?

---

## III. Lời giải chi tiết

### Bài 1
Tổng các chữ số: $1234 \to 10$; $2025 \to 9$; $3060 \to 9$; $4572 \to 18$; $7895 \to 29$.
a) Chia hết cho $2$ (tận cùng chẵn): $1234$, $3060$, $4572$. Chia hết cho $5$ (tận cùng $0$ hoặc $5$): $2025$, $3060$, $7895$.
b) Chia hết cho $3$ (tổng chữ số chia hết cho $3$): $2025$, $3060$, $4572$. Chia hết cho $9$: cũng là $2025$, $3060$, $4572$ (tổng $9$, $9$, $18$).
c) Chỉ có $3060$.

**Đáp số:** a) chia hết cho $2$: $1234, 3060, 4572$; chia hết cho $5$: $2025, 3060, 7895$. b) chia hết cho $3$ và cho $9$: $2025, 3060, 4572$. c) $3060$.

### Bài 2
a) Tổng các chữ số $5 + 2 + * = 7 + *$ phải chia hết cho $3$. Vậy $7 + * \in \{9, 12, 15\}$, tức là $* \in \{2, 5, 8\}$. Ta có các số $522, 525, 528$.

b) Tổng $7 + * + 8 = 15 + *$ chia hết cho $9$. Vì $* \le 9$ nên $15 + * = 18$, tức là $* = 3$. Số $738$.

c) Chia hết cho $2$ và $5$ nên chữ số tận cùng là $0$. Tổng $4 + * + 5 + 0 = 9 + *$ chia hết cho $9$, nên $* = 0$ hoặc $* = 9$. Các số $4050$ và $4950$.

**Đáp số:** a) $2, 5, 8$; b) $3$; c) $4050$ và $4950$.

### Bài 3
Chia hết cho $2$ và $5$ nên chữ số tận cùng là $0$. Còn phải chia hết cho $3$.
- **Nhỏ nhất:** thử các số tận cùng $0$ từ nhỏ đến lớn: $1000$ (tổng chữ số $1$), $1010$ (tổng $2$), $1020$ (tổng $3$, chia hết cho $3$). Vậy là $1020$.
- **Lớn nhất:** thử từ lớn xuống: $9990$ có tổng chữ số $27$, chia hết cho $3$. Vậy là $9990$.

**Đáp số:** nhỏ nhất $1020$, lớn nhất $9990$.

### Bài 4
Số chia hết cho $45$ thì chia hết cho $5$ và cho $9$.
- Chia hết cho $5$: $b = 0$ hoặc $b = 5$.
- Nếu $b = 0$: $a + 5 + 0$ chia hết cho $9$, $a \ge 1$, nên $a + 5 = 9$, $a = 4$. Số $450$.
- Nếu $b = 5$: $a + 5 + 5 = a + 10$ chia hết cho $9$, nên $a + 10 = 18$, $a = 8$. Số $855$.

*Thử lại:* $450 = 45 \times 10$, $855 = 45 \times 19$. Đúng.

**Đáp số:** $a = 4, b = 0$ (số $450$) hoặc $a = 8, b = 5$ (số $855$).

### Bài 5
a) Số đó là $7 \times 15 + 6 = 105 + 6 = 111$.
b) Chia cho $8$ thì số dư lớn nhất là $7$. Số bị chia là $8 \times 24 + 7 = 192 + 7 = 199$.

**Đáp số:** a) $111$; b) $199$.

### Bài 6
Mỗi số có cùng số dư khi chia cho $9$ với tổng các chữ số của nó:
- $1234$: tổng chữ số $10$, chia $9$ dư $1$;
- $5678$: tổng chữ số $26$, chia $9$ dư $8$;
- $2025$: tổng chữ số $9$, chia $9$ dư $0$.

Cộng các số dư: $1 + 8 + 0 = 9$, chia hết cho $9$. Vậy tổng chia hết cho $9$, tức là dư $0$.

*Kiểm tra:* $1234 + 5678 + 2025 = 8937$, tổng chữ số $27$. Đúng.

**Đáp số:** dư $0$.

### Bài 7
Chia hết cho $5$ nên chữ số tận cùng là $0$ hoặc $5$. Chia hết cho $3$ nên tổng ba chữ số chia hết cho $3$.
Các bộ ba chữ số chọn từ $0, 3, 5, 7$: $\{0, 3, 5\}$ tổng $8$; $\{0, 3, 7\}$ tổng $10$; $\{0, 5, 7\}$ tổng $12$; $\{3, 5, 7\}$ tổng $15$. Chỉ bộ $\{0, 5, 7\}$ và $\{3, 5, 7\}$ dùng được.
- Bộ $\{0, 5, 7\}$: tận cùng $0$: $570$, $750$; tận cùng $5$: $705$ (không lấy $075$).
- Bộ $\{3, 5, 7\}$: tận cùng phải là $5$: $375$, $735$.

**Đáp số:** $375, 570, 705, 735, 750$.

### Bài 8
- Chia cho $5$ dư $3$ nên chữ số tận cùng là $3$ hoặc $8$.
- Chia cho $2$ dư $1$ nên là số lẻ, tận cùng là $3$.
- Số có hai chữ số tận cùng là $3$: $13, 23, \dots, 93$. Tổng chữ số phải chia hết cho $9$: chữ số hàng chục cộng $3$ bằng $9$ (không thể bằng $18$), nên chữ số hàng chục là $6$.

**Đáp số:** $63$.

### Bài 9
Số dư luôn kém số chia $1$ đơn vị. Thêm $1$ vào số cần tìm thì được số chia hết cho cả $2$, $3$ và $5$.
Số chia hết cho $2$ và $5$ có tận cùng là $0$: $10, 20, 30, \dots$ Số nhỏ nhất trong đó chia hết cho $3$ là $30$. Vậy số cần tìm là $30 - 1 = 29$.

*Thử lại:* $29 = 2 \times 14 + 1 = 3 \times 9 + 2 = 5 \times 5 + 4$. Đúng.

**Đáp số:** $29$.

*Nhận xét:* khi số dư "thiếu $1$" so với số chia, hãy thêm $1$; khi các số dư bằng nhau, hãy bớt số dư.

### Bài 10
a) Số đó bằng $9 \times q + 7$ ($q$ là thương). Nhân với $5$: $9 \times q \times 5 + 35$. Phần $9 \times q \times 5$ chia hết cho $9$, còn $35 = 9 \times 3 + 8$. Vậy số mới chia $9$ dư $8$.

b) Số đó bằng $12 \times q + 8$. Phần $12 \times q$ chia hết cho $3$ và cho $4$ (vì $12 = 3 \times 4$). Do đó số dư khi chia cho $3$ bằng số dư của $8$ chia $3$, là $2$; số dư khi chia cho $4$ bằng số dư của $8$ chia $4$, là $0$.

**Đáp số:** a) dư $8$; b) chia $3$ dư $2$, chia $4$ dư $0$ (chia hết).

### Bài 11
Số học sinh chia hết cho $3$, $4$ và $5$.
- Chia hết cho $4$ thì là số chẵn, lại chia hết cho $5$, nên tận cùng là $0$. Trong khoảng $150$ đến $200$: $150, 160, 170, 180, 190, 200$.
- Chia hết cho $3$: chỉ có $150$ và $180$.
- Chia hết cho $4$: $150$ không chia hết cho $4$ (vì $50$ không chia hết cho $4$), còn $180$ thì có ($80 = 4 \times 20$).

**Đáp số:** $180$ học sinh.

### Bài 12
Số chia hết cho $36$ khi và chỉ khi nó chia hết cho cả $4$ và $9$.
- Chia hết cho $4$: $\overline{2b}$ chia hết cho $4$, nên $b \in \{0, 4, 8\}$ (các số $20, 24, 28$).
- Chia hết cho $9$: $1 + a + 2 + b = 3 + a + b$ chia hết cho $9$.
  - $b = 0$: $3 + a$ chia hết cho $9$, nên $a = 6$. Số $1620$.
  - $b = 4$: $7 + a$ chia hết cho $9$, nên $a = 2$. Số $1224$.
  - $b = 8$: $11 + a$ chia hết cho $9$, nên $a = 7$. Số $1728$.

*Thử lại:* $1620 = 36 \times 45$, $1224 = 36 \times 34$, $1728 = 36 \times 48$. Đúng.

**Đáp số:** $1620$, $1224$, $1728$.

### Bài 13
Gọi số đó là $\overline{abc}$. Ta có
$$\overline{abc} - (a + b + c) = a \times 100 + b \times 10 + c - a - b - c = a \times 99 + b \times 9 = 9 \times (a \times 11 + b).$$
Hiệu là $9$ nhân với một số tự nhiên, nên luôn chia hết cho $9$.

*Ví dụ:* $572 - (5 + 7 + 2) = 558 = 9 \times 62$.

*Nhận xét:* đây chính là lý do của dấu hiệu chia hết cho $9$.

### Bài 14
$A$ và tổng các chữ số của $A$ có cùng số dư khi chia cho $9$ (và cho $3$).
Tổng các chữ số của $A$ là $2024 \times 5 = 10120$. Số $10120$ có tổng chữ số $1 + 0 + 1 + 2 + 0 = 4$, nên $10120$ chia $9$ dư $4$, chia $3$ dư $1$.

Vậy $A$ chia $9$ dư $4$ và chia $3$ dư $1$.

**Đáp số:** chia $9$ dư $4$; chia $3$ dư $1$.

*Nhận xét:* không thể viết hết số $A$, nhưng tính chất "cùng số dư với tổng chữ số" cho phép dùng liên tiếp nhiều lần: $A \to 10120 \to 4$.

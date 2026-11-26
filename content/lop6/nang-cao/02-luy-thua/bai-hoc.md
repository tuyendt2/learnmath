# Chủ đề 2. Lũy thừa

> Lũy thừa xuất hiện trong hầu hết đề HSG lớp 6: rút gọn biểu thức, so sánh hai lũy thừa, tìm số mũ, tìm chữ số tận cùng. Nắm chắc các quy tắc tính và quy luật chữ số tận cùng giúp giải nhanh và tránh sai sót.

## I. Kiến thức cần nắm

### 1. Định nghĩa và quy ước
$$a^n = \underbrace{a \cdot a \cdots a}_{n \text{ thừa số}} \quad (n \ge 1).$$
$a$ là **cơ số**, $n$ là **số mũ**. Quy ước: $a^1 = a$ và $a^0 = 1$ với $a \ne 0$.

Các giá trị nên nhớ: $2^{10} = 1024$, $3^5 = 243$, $5^4 = 625$, $7^3 = 343$, $2^5 = 32$, $3^4 = 81$.

### 2. Các quy tắc tính và vì sao đúng
Với $a, b$ là số tự nhiên, $m, n$ là số tự nhiên:

| Quy tắc | Vì sao |
|---|---|
| $a^m \cdot a^n = a^{m + n}$ | Có $m$ thừa số $a$, thêm $n$ thừa số $a$ nữa, được $m + n$ thừa số |
| $a^m : a^n = a^{m - n}$ ($a \ne 0$, $m \ge n$) | Phép chia ngược với phép nhân ở dòng trên |
| $(a^m)^n = a^{m \cdot n}$ | Có $n$ nhóm, mỗi nhóm $m$ thừa số $a$ |
| $(a \cdot b)^n = a^n \cdot b^n$ | Đổi chỗ và nhóm lại các thừa số |

**Ví dụ.** $\frac{2^{10} \cdot 9^3}{6^6 \cdot 4} = \frac{2^{10} \cdot 3^6}{2^6 \cdot 3^6 \cdot 2^2} = 2^{10 - 8} = 4$.

> **Sai lầm hay gặp:**
> - $a^m + a^n \ne a^{m + n}$. Ví dụ $2^2 + 2^3 = 12$, còn $2^5 = 32$. Muốn cộng, hãy **đặt thừa số chung**: $2^x + 2^{x + 3} = 2^x(1 + 8) = 9 \cdot 2^x$.
> - $(a^m)^n$ khác $a^{m^n}$: $(2^3)^2 = 2^6 = 64$, còn $2^{3^2} = 2^9 = 512$.
> - $(a + b)^n \ne a^n + b^n$: $(1 + 2)^2 = 9$, còn $1^2 + 2^2 = 5$.

### 3. So sánh hai lũy thừa
- **Cùng cơ số** $a > 1$: số mũ lớn hơn thì lũy thừa lớn hơn. *Vì sao:* $a^{m + k} = a^m \cdot a^k$ mà $a^k > 1$.
- **Cùng số mũ** $n \ge 1$: cơ số lớn hơn thì lũy thừa lớn hơn. *Vì sao:* nhân lần lượt các bất đẳng thức $a > b$ với nhau (các số đều dương).
- **Đưa về cùng cơ số hoặc cùng số mũ:** dùng $(a^m)^n = a^{mn}$. Ví dụ $2^{30} = 8^{10}$, $3^{20} = 9^{10}$, nên $2^{30} < 3^{20}$.
- **Dùng số trung gian:** nếu $A < C$ và $C < B$ thì $A < B$. Hay chọn $C$ là lũy thừa gần $A$ hoặc $B$, ví dụ $31 < 32 = 2^5$, $17 > 16 = 2^4$.

### 4. Tìm số mũ, tìm cơ số
- Với $a > 1$: $a^m = a^n \Rightarrow m = n$.
- Với $n \ge 1$: $a^n = b^n \Rightarrow a = b$ (với $a, b$ là số tự nhiên).
- **Các trường hợp đặc biệt:** $1^n = 1$ và $0^n = 0$ với mọi $n \ge 1$. Khi gặp $A^m = A^n$ với $m \ne n$, phải xét riêng $A = 0$, $A = 1$ (và nếu $A$ là số nguyên thì cả $A = -1$ khi $m$, $n$ cùng chẵn).
- Gặp tổng như $2^x + 2^{x + 1} + \dots$: đặt thừa số chung $2^x$.

**Ví dụ.** $3^{x + 2} - 3^x = 72 \Rightarrow 3^x(9 - 1) = 72 \Rightarrow 3^x = 9 \Rightarrow x = 2$.

### 5. Chữ số tận cùng
Chữ số tận cùng của một tích chỉ phụ thuộc vào chữ số tận cùng của các thừa số. Từ đó:
- Số tận cùng $0, 1, 5, 6$: mọi lũy thừa (số mũ $\ge 1$) vẫn tận cùng bằng chính chữ số đó.
- Tận cùng $4$: lũy thừa mũ lẻ tận cùng $4$, mũ chẵn tận cùng $6$. Tận cùng $9$: mũ lẻ tận cùng $9$, mũ chẵn tận cùng $1$.
- Tận cùng $2, 3, 7, 8$: chữ số tận cùng lặp lại theo **chu kỳ 4**:

| Tận cùng của cơ số | mũ $4k + 1$ | mũ $4k + 2$ | mũ $4k + 3$ | mũ $4k$ ($k \ge 1$) |
|---|---|---|---|---|
| $2$ | $2$ | $4$ | $8$ | $6$ |
| $3$ | $3$ | $9$ | $7$ | $1$ |
| $7$ | $7$ | $9$ | $3$ | $1$ |
| $8$ | $8$ | $4$ | $2$ | $6$ |

*Vì sao có chu kỳ 4:* $2^4 = 16$, $3^4 = 81$, $7^4 = 2401$, $8^4 = 4096$ đều tận cùng $1$ hoặc $6$, mà các số tận cùng $1$ hoặc $6$ nâng lên lũy thừa nào cũng giữ nguyên chữ số tận cùng.

**Ví dụ.** $7^{2025}$: $2025 = 4 \cdot 506 + 1$, nên $7^{2025} = (7^4)^{506} \cdot 7$ tận cùng bằng $1 \cdot 7$, tức là $7$.

**Hai chữ số tận cùng:** chỉ phụ thuộc vào hai chữ số tận cùng của các thừa số. Các số tận cùng $01$, $25$, $76$ nâng lên lũy thừa nào (mũ $\ge 1$) cũng giữ nguyên hai chữ số tận cùng.

### 6. Tổng các lũy thừa cùng cơ số
$$S = 1 + a + a^2 + \dots + a^n \quad\Longrightarrow\quad (a - 1)\cdot S = a^{n + 1} - 1.$$
*Vì sao:* $a \cdot S = a + a^2 + \dots + a^{n + 1}$. Lấy $a \cdot S - S$ thì mọi số hạng ở giữa triệt tiêu, còn $a^{n + 1} - 1$.

**Ví dụ.** $1 + 2 + 2^2 + \dots + 2^{10} = 2^{11} - 1 = 2047$.

---

## II. Bài tập vận dụng

**Bài 1.** Tính giá trị biểu thức
$$A = \frac{2^{12} \cdot 3^5 - 4^6 \cdot 9^2}{(2^2 \cdot 3)^6 + 8^4 \cdot 3^5}.$$

**Bài 2.** Tìm số tự nhiên $x$, biết:
a) $2^x + 2^{x + 3} = 144$;
b) $(x - 1)^3 = 125$;
c) $(x - 5)^4 = (x - 5)^6$.

**Bài 3 (so sánh).** So sánh:
a) $2^{300}$ và $3^{200}$;
b) $5^{36}$ và $11^{24}$;
c) $31^{11}$ và $17^{14}$.

**Bài 4.** Tìm chữ số tận cùng của $A = 2023^{2025} + 2024^{2025} + 2025^{2025}$.

**Bài 5.** Chứng minh rằng $13^{21} - 17^5 - 24^4$ chia hết cho $10$.

**Bài 6.** Chứng minh rằng với mọi số tự nhiên $n$, số $3^{4n + 1} + 2$ chia hết cho $5$.

**Bài 7.** Cho $A = 1 + 3 + 3^2 + 3^3 + \dots + 3^{100}$. Tìm số tự nhiên $x$ biết $2A + 1 = 3^x$.

**Bài 8.** So sánh $A = 1 + 2 + 2^2 + \dots + 2^{2025}$ và $B = 5 \cdot 2^{2024}$.

**Bài 9.** Tìm chữ số tận cùng của $S = 1 + 2 + 2^2 + 2^3 + \dots + 2^{2025}$.

**Bài 10 (đề HSG).** Tìm các số tự nhiên $x$, $y$ biết $2^x + 624 = 5^y$.

**Bài 11.** Số $N = 2^{2025} \cdot 5^{2020}$ có bao nhiêu chữ số? Tính tổng các chữ số của $N$.

**Bài 12 (đề HSG).** Tìm hai chữ số tận cùng của $2^{100}$.

---

## III. Lời giải chi tiết

### Bài 1
Đưa tất cả về cơ số $2$ và $3$:
- $4^6 \cdot 9^2 = 2^{12} \cdot 3^4$;
- $(2^2 \cdot 3)^6 = 2^{12} \cdot 3^6$;
- $8^4 \cdot 3^5 = 2^{12} \cdot 3^5$.

Tử số: $2^{12} \cdot 3^5 - 2^{12} \cdot 3^4 = 2^{12} \cdot 3^4 \cdot (3 - 1) = 2^{12} \cdot 3^4 \cdot 2$.
Mẫu số: $2^{12} \cdot 3^6 + 2^{12} \cdot 3^5 = 2^{12} \cdot 3^5 \cdot (3 + 1) = 2^{12} \cdot 3^5 \cdot 4$.
$$A = \frac{2^{12} \cdot 3^4 \cdot 2}{2^{12} \cdot 3^5 \cdot 4} = \frac{2}{3 \cdot 4} = \frac16.$$

**Đáp số:** $A = \frac16$.

### Bài 2
a) $2^x + 2^{x + 3} = 2^x(1 + 2^3) = 9 \cdot 2^x$. Từ $9 \cdot 2^x = 144$ được $2^x = 16 = 2^4$, nên $x = 4$.

b) $125 = 5^3$, nên $x - 1 = 5$, $x = 6$.

c) Hai lũy thừa của cùng một số với số mũ khác nhau ($4$ và $6$) chỉ bằng nhau khi cơ số là $0$, $1$ hoặc $-1$ (vì $(-1)^4 = (-1)^6 = 1$). Thật vậy, đẳng thức tương đương $(x - 5)^4 \cdot \left[(x - 5)^2 - 1\right] = 0$, nên $x - 5 = 0$ hoặc $(x - 5)^2 = 1$.
- $x - 5 = 0 \Rightarrow x = 5$;
- $x - 5 = 1 \Rightarrow x = 6$;
- $x - 5 = -1 \Rightarrow x = 4$.

**Đáp số:** a) $x = 4$; b) $x = 6$; c) $x \in \{4; 5; 6\}$.

*Nhận xét:* Ở câu c), nhiều bạn chỉ tìm được $x = 5$ và $x = 6$, bỏ sót $x = 4$. Đừng quên trường hợp cơ số âm khi số mũ chẵn.

### Bài 3
a) $2^{300} = (2^3)^{100} = 8^{100}$ và $3^{200} = (3^2)^{100} = 9^{100}$. Vì $8 < 9$ nên $2^{300} < 3^{200}$.

b) $5^{36} = (5^3)^{12} = 125^{12}$ và $11^{24} = (11^2)^{12} = 121^{12}$. Vì $125 > 121$ nên $5^{36} > 11^{24}$.

c) Dùng số trung gian là lũy thừa của $2$:
$$31^{11} < 32^{11} = (2^5)^{11} = 2^{55} < 2^{56} = (2^4)^{14} = 16^{14} < 17^{14}.$$
Vậy $31^{11} < 17^{14}$.

*Nhận xét:* Khi hai cơ số và hai số mũ đều khác nhau, hãy tìm ước chung của hai số mũ (câu a, b) hoặc thay cơ số bằng lũy thừa gần nó (câu c).

### Bài 4
- $2023^{2025}$ có tận cùng như $3^{2025}$. Vì $2025 = 4 \cdot 506 + 1$ nên tận cùng là $3$.
- $2024^{2025}$ có tận cùng như $4^{2025}$, số mũ lẻ nên tận cùng là $4$.
- $2025^{2025}$ tận cùng là $5$.

$3 + 4 + 5 = 12$, nên $A$ tận cùng bằng $2$.

**Đáp số:** $2$.

### Bài 5
- $13^{21}$ có tận cùng như $3^{21}$; $21 = 4 \cdot 5 + 1$ nên tận cùng là $3$.
- $17^5$ có tận cùng như $7^5$; $5 = 4 \cdot 1 + 1$ nên tận cùng là $7$.
- $24^4$ có tận cùng như $4^4$, số mũ chẵn nên tận cùng là $6$.

Khi đó $17^5 + 24^4$ tận cùng bằng chữ số tận cùng của $7 + 6 = 13$, tức là $3$. Hai số $13^{21}$ và $17^5 + 24^4$ cùng tận cùng bằng $3$ (và số thứ nhất lớn hơn), nên hiệu của chúng tận cùng bằng $0$, do đó chia hết cho $10$.

### Bài 6
$3^{4n + 1} = 3^{4n} \cdot 3 = (3^4)^n \cdot 3 = 81^n \cdot 3$.
$81^n$ tận cùng bằng $1$ (với $n = 0$ thì $81^0 = 1$), nên $81^n \cdot 3$ tận cùng bằng $3$. Do đó $3^{4n + 1} + 2$ tận cùng bằng $5$, chia hết cho $5$.

### Bài 7
$3A = 3 + 3^2 + \dots + 3^{100} + 3^{101}$. Lấy $3A - A$, các số hạng từ $3$ đến $3^{100}$ triệt tiêu:
$$2A = 3^{101} - 1.$$
Suy ra $2A + 1 = 3^{101}$, nên $x = 101$.

**Đáp số:** $x = 101$.

### Bài 8
$2A = 2 + 2^2 + \dots + 2^{2026}$. Lấy $2A - A$ được $A = 2^{2026} - 1$.
Ta có $2^{2026} = 2^2 \cdot 2^{2024} = 4 \cdot 2^{2024}$, nên
$$A = 4 \cdot 2^{2024} - 1 < 4 \cdot 2^{2024} < 5 \cdot 2^{2024} = B.$$
**Đáp số:** $A < B$.

### Bài 9
Như Bài 8, $S = 2^{2026} - 1$.
$2026 = 4 \cdot 506 + 2$, nên $2^{2026}$ tận cùng bằng $4$ (theo bảng chu kỳ của $2$: $2, 4, 8, 6$). Do đó $S$ tận cùng bằng $4 - 1 = 3$.

**Đáp số:** $3$.

### Bài 10
**Trường hợp $x = 0$:** $1 + 624 = 625 = 5^4$, nên $y = 4$.

**Trường hợp $x \ge 1$:** $2^x$ là số chẵn, $624$ là số chẵn, nên vế trái chẵn. Vế phải $5^y$ là tích của các số lẻ, luôn lẻ. Mâu thuẫn, nên không có nghiệm.

**Đáp số:** $x = 0$, $y = 4$.

*Nhận xét:* Xét tính chẵn lẻ là cách nhanh nhất để loại bỏ trường hợp. Khi gặp $2^x$, luôn nhớ trường hợp đặc biệt $2^0 = 1$ là số lẻ.

### Bài 11
Ghép các cặp $2 \cdot 5 = 10$:
$$N = 2^5 \cdot 2^{2020} \cdot 5^{2020} = 32 \cdot (2 \cdot 5)^{2020} = 32 \cdot 10^{2020}.$$
Vậy $N$ là số $32$ viết thêm $2020$ chữ số $0$ ở cuối.
- Số chữ số: $2 + 2020 = 2022$.
- Tổng các chữ số: $3 + 2 = 5$.

**Đáp số:** $2022$ chữ số; tổng các chữ số là $5$.

### Bài 12
$2^{10} = 1024$, nên $2^{20} = 1024 \cdot 1024 = 1\,048\,576$ có hai chữ số tận cùng là $76$.
Hai chữ số tận cùng của một tích chỉ phụ thuộc vào hai chữ số tận cùng của các thừa số. Vì $76 \cdot 76 = 5776$ tận cùng $76$, nên mọi lũy thừa (mũ $\ge 1$) của một số tận cùng $76$ cũng tận cùng $76$.
Do đó $2^{100} = (2^{20})^5$ có hai chữ số tận cùng là $76$.

**Đáp số:** $76$.

*Nhận xét:* Các "đuôi cố định" $01$, $25$, $76$ rất hữu ích khi tìm hai chữ số tận cùng: hãy cố gắng đưa lũy thừa về một số có đuôi như vậy.

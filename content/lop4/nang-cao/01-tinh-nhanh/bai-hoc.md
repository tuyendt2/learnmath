# Chủ đề 1. Tính nhanh, tính hợp lý

> Tính nhanh giúp em tính đúng và gọn mà không phải đặt tính dài dòng. Hầu như đề thi học sinh giỏi lớp 4 nào cũng có một câu "tính bằng cách thuận tiện nhất", và kỹ năng này còn dùng ở mọi chủ đề sau.

## I. Kiến thức cần nắm

> **Ý tưởng chung:** trước khi tính, hãy **quan sát** biểu thức. Tìm các số "ghép đôi" được với nhau thành số tròn chục, tròn trăm, tìm thừa số chung, hoặc tìm quy luật của các số hạng.

### 1. Giao hoán và kết hợp: nhóm thành số tròn
- **Giao hoán:** $a + b = b + a$ và $a \times b = b \times a$. Ta được đổi chỗ các số hạng, các thừa số.
- **Kết hợp:** $(a + b) + c = a + (b + c)$ và $(a \times b) \times c = a \times (b \times c)$. Ta được nhóm tùy ý.

Vì vậy có thể sắp xếp lại để ghép các cặp "đẹp":
- Với phép cộng: các cặp có tổng tròn chục, tròn trăm như $37 + 63 = 100$, $468 + 532 = 1000$.
- Với phép nhân: các cặp nên nhớ $2 \times 5 = 10$, $4 \times 25 = 100$, $8 \times 125 = 1000$, $5 \times 20 = 100$.

*Ví dụ:* $4 \times 37 \times 25 = (4 \times 25) \times 37 = 100 \times 37 = 3700$.

### 2. Tính chất phân phối: đặt thừa số chung
$$a \times b + a \times c = a \times (b + c), \qquad a \times b - a \times c = a \times (b - c).$$
*Vì sao đúng:* $a \times b$ là $b$ lần số $a$, $a \times c$ là $c$ lần số $a$. Gộp lại được $b + c$ lần số $a$.

Chú ý: số $a$ đứng một mình cũng là $a \times 1$. Ví dụ $37 \times 99 + 37 = 37 \times 99 + 37 \times 1 = 37 \times 100 = 3700$.

**Khi chưa thấy thừa số chung**, hãy **tách** một thừa số để tạo ra nó:
- $18 \times 24 + 9 \times 52$: viết $18 \times 24 = 9 \times 2 \times 24 = 9 \times 48$, khi đó có chung thừa số $9$.
- $2024 \times 99 = 2024 \times (100 - 1) = 202400 - 2024$.

### 3. Nhân nhẩm với 5, 25, 125, 11, 9, 99
| Nhân với | Cách nhẩm | Ví dụ |
|---|---|---|
| $5$ | nhân $10$ rồi chia $2$ | $68 \times 5 = 680 : 2 = 340$ |
| $25$ | nhân $100$ rồi chia $4$ | $48 \times 25 = 4800 : 4 = 1200$ |
| $125$ | nhân $1000$ rồi chia $8$ | $64 \times 125 = 64000 : 8 = 8000$ |
| $9$, $99$ | nhân $10$ (hay $100$) rồi trừ chính số đó | $37 \times 99 = 3700 - 37 = 3663$ |
| $11$ (số có 2 chữ số) | giữ hai chữ số ở hai đầu, chen tổng của chúng vào giữa | $63 \times 11 = 693$; $67 \times 11 = 737$ (vì $6 + 7 = 13$, nhớ $1$ sang hàng trăm) |

*Vì sao nhân 25 lại "nhân 100 chia 4":* $25 = 100 : 4$, nên $a \times 25 = a \times 100 : 4$.

### 4. Ghép nhóm theo quy luật
Khi biểu thức có nhiều số hạng, cộng trừ xen kẽ, hãy tìm **nhóm có giá trị bằng nhau**.

*Ví dụ:* $100 - 99 + 98 - 97 + \dots + 2 - 1$. Ghép $(100 - 99) + (98 - 97) + \dots + (2 - 1)$. Từ $1$ đến $100$ có $100$ số, ghép được $50$ cặp, mỗi cặp bằng $1$. Kết quả là $50$.

### 5. Tổng các số cách đều
Dãy số cách đều (mỗi số hơn số đứng trước cùng một lượng, gọi là **khoảng cách**):
$$\text{Số số hạng} = (\text{số cuối} - \text{số đầu}) : \text{khoảng cách} + 1,$$
$$\text{Tổng} = (\text{số đầu} + \text{số cuối}) \times \text{số số hạng} : 2.$$
*Vì sao:* viết dãy theo chiều xuôi rồi viết ngược bên dưới. Mỗi cột có tổng bằng "số đầu + số cuối", có bao nhiêu số hạng thì có bấy nhiêu cột, và ta đã tính tổng hai lần nên chia $2$. (Chủ đề 3 học kỹ hơn.)

*Ví dụ:* $1 + 2 + \dots + 100 = (1 + 100) \times 100 : 2 = 5050$.

### 6. Biểu thức có thừa số bằng 0, phép chia có tử và mẫu giống nhau
- Nếu một thừa số bằng $0$ thì cả tích bằng $0$. Nhiều bài trông rất dài nhưng có một thừa số bằng $0$, chẳng hạn $(125 \times 8 - 1000) \times (\dots)$.
- Phép chia $A : B$ với $A = B$ (khác $0$) thì bằng $1$. Hãy biến đổi số bị chia để xem nó có bằng số chia không.

### 7. So sánh mà không cần tính
Muốn so sánh $2023 \times 2025$ với $2024 \times 2024$, ta tách sao cho hai tích có phần chung:
$2023 \times 2025 = 2023 \times 2024 + 2023$ và $2024 \times 2024 = 2023 \times 2024 + 2024$. Phần chung như nhau, phần còn lại $2023 < 2024$.

> **Sai lầm hay gặp:**
> - Đặt thừa số chung nhưng quên số $a$ đứng một mình là $a \times 1$: $37 \times 99 + 37 \ne 37 \times 99$.
> - Đếm số số hạng mà quên "$+\,1$": từ $11$ đến $99$ các số lẻ có $(99 - 11) : 2 + 1 = 45$ số, không phải $44$.
> - Ghép nhóm khi có dấu trừ mà quên đổi dấu: $a - b - c = a - (b + c)$, không phải $a - (b - c)$.

---

## II. Bài tập vận dụng

**Bài 1.** Tính bằng cách thuận tiện nhất:
a) $237 + 468 + 763 + 532$;
b) $5 \times 125 \times 4 \times 8 \times 2 \times 25$.

**Bài 2.** Tính bằng cách thuận tiện nhất:
a) $47 \times 68 + 47 \times 32$;
b) $93 \times 105 - 93 \times 5$;
c) $37 \times 99 + 37$.

**Bài 3 (nhân nhẩm).** Tính nhẩm và giải thích cách nhẩm:
a) $48 \times 25$; b) $64 \times 125$; c) $67 \times 11$; d) $2024 \times 99$.

**Bài 4 (tách thừa số).** Tính bằng cách thuận tiện nhất:
a) $18 \times 24 + 9 \times 52$;
b) $64 \times 25 + 16 \times 300$.

**Bài 5.** Tính bằng cách thuận tiện nhất:
a) $36 \times 532 + 63 \times 532 + 532$;
b) $2024 \times 2024 - 2024 \times 24$.

**Bài 6.** Tính:
a) $11 + 13 + 15 + \dots + 97 + 99$;
b) $(1 + 3 + 5 + \dots + 99) - (2 + 4 + 6 + \dots + 98)$.

**Bài 7 (ghép nhóm).** Tính nhanh:
$$2024 + 2023 - 2022 - 2021 + 2020 + 2019 - 2018 - 2017 + \dots + 4 + 3 - 2 - 1.$$

**Bài 8.** Tính giá trị biểu thức:
$$(125 \times 7 - 875) \times (1 + 2 + 3 + \dots + 99).$$

**Bài 9 (so sánh không tính).** Không tính giá trị cụ thể, hãy so sánh $A = 2023 \times 2025$ và $B = 2024 \times 2024$. $A$ và $B$ hơn kém nhau bao nhiêu?

**Bài 10.** Tính giá trị biểu thức:
$$(2024 \times 2023 - 1) : (2022 \times 2024 + 2023).$$

**Bài 11.** Tính nhanh:
$$1 \times 2 \times 3 \times \dots \times 9 - 1 \times 2 \times 3 \times \dots \times 8 - 1 \times 2 \times 3 \times \dots \times 7 \times 8 \times 8.$$

**Bài 12 (thêm bớt).** Tính nhanh $999 \times 999 + 1999$.

**Bài 13 (khó).** Tính $S = 1 \times 2 + 2 \times 3 + 3 \times 4 + \dots + 9 \times 10$ bằng cách nhân $S$ với $3$.

---

## III. Lời giải chi tiết

### Bài 1
a) Ghép các cặp có tổng tròn trăm:
$$237 + 468 + 763 + 532 = (237 + 763) + (468 + 532) = 1000 + 1000 = 2000.$$
b) Ghép các cặp $5 \times 2$, $125 \times 8$, $4 \times 25$:
$$5 \times 125 \times 4 \times 8 \times 2 \times 25 = (5 \times 2) \times (125 \times 8) \times (4 \times 25) = 10 \times 1000 \times 100 = 1000000.$$
**Đáp số:** a) $2000$; b) $1000000$.

### Bài 2
a) $47 \times 68 + 47 \times 32 = 47 \times (68 + 32) = 47 \times 100 = 4700$.
b) $93 \times 105 - 93 \times 5 = 93 \times (105 - 5) = 93 \times 100 = 9300$.
c) $37 \times 99 + 37 = 37 \times 99 + 37 \times 1 = 37 \times (99 + 1) = 3700$.

**Đáp số:** a) $4700$; b) $9300$; c) $3700$.

*Nhận xét:* ở câu c, phải viết $37 = 37 \times 1$ thì mới thấy thừa số chung.

### Bài 3
a) $48 \times 25 = 48 \times 100 : 4 = 4800 : 4 = 1200$.
b) $64 \times 125 = 64 \times 1000 : 8 = 64000 : 8 = 8000$.
c) $67 \times 11$: hai chữ số hai đầu là $6$ và $7$, tổng $6 + 7 = 13$. Viết $3$ vào giữa, nhớ $1$ vào hàng trăm: $6 + 1 = 7$. Được $737$.
(Kiểm tra: $67 \times 11 = 670 + 67 = 737$.)
d) $2024 \times 99 = 2024 \times 100 - 2024 = 202400 - 2024 = 200376$.

**Đáp số:** a) $1200$; b) $8000$; c) $737$; d) $200376$.

### Bài 4
a) Tách $18 = 9 \times 2$:
$$18 \times 24 + 9 \times 52 = 9 \times 2 \times 24 + 9 \times 52 = 9 \times 48 + 9 \times 52 = 9 \times (48 + 52) = 900.$$
b) Tách $64 = 16 \times 4$:
$$64 \times 25 + 16 \times 300 = 16 \times 4 \times 25 + 16 \times 300 = 16 \times 100 + 16 \times 300 = 16 \times 400 = 6400.$$
**Đáp số:** a) $900$; b) $6400$.

*Nhận xét:* khi hai tích "gần giống" nhau, hãy tách thừa số lớn hơn thành tích để lộ ra thừa số chung.

### Bài 5
a) $36 \times 532 + 63 \times 532 + 532 \times 1 = 532 \times (36 + 63 + 1) = 532 \times 100 = 53200$.
b) $2024 \times 2024 - 2024 \times 24 = 2024 \times (2024 - 24) = 2024 \times 2000 = 4048000$.

**Đáp số:** a) $53200$; b) $4048000$.

### Bài 6
a) Đây là dãy số lẻ cách đều, khoảng cách $2$.
Số số hạng: $(99 - 11) : 2 + 1 = 45$.
Tổng: $(11 + 99) \times 45 : 2 = 110 \times 45 : 2 = 2475$.

b) Dãy $1, 3, \dots, 99$ có $50$ số, dãy $2, 4, \dots, 98$ có $49$ số. Ghép:
$$1 + (3 - 2) + (5 - 4) + \dots + (99 - 98).$$
Từ số $3$ đến số $99$ có $49$ số lẻ, nên có $49$ cặp, mỗi cặp bằng $1$. Kết quả: $1 + 49 = 50$.

**Đáp số:** a) $2475$; b) $50$.

### Bài 7
Ghép mỗi nhóm bốn số liên tiếp theo mẫu "cộng, cộng, trừ, trừ":
$$(2024 + 2023 - 2022 - 2021) = 4, \quad (2020 + 2019 - 2018 - 2017) = 4, \quad \dots, \quad (4 + 3 - 2 - 1) = 4.$$
Mỗi nhóm bằng $4$ vì $2024 - 2022 = 2$ và $2023 - 2021 = 2$.
Từ $1$ đến $2024$ có $2024$ số, chia thành $2024 : 4 = 506$ nhóm. Tổng bằng $506 \times 4 = 2024$.

**Đáp số:** $2024$.

### Bài 8
Thừa số thứ nhất: $125 \times 7 - 875 = 875 - 875 = 0$. Một thừa số bằng $0$ nên cả tích bằng $0$, không cần tính tổng $1 + 2 + \dots + 99$.

**Đáp số:** $0$.

*Nhận xét:* gặp biểu thức "rất dài", hãy kiểm tra xem có thừa số nào bằng $0$ không.

### Bài 9
Tách để hai tích có phần chung là $2023 \times 2024$:
- $A = 2023 \times 2025 = 2023 \times (2024 + 1) = 2023 \times 2024 + 2023$;
- $B = 2024 \times 2024 = (2023 + 1) \times 2024 = 2023 \times 2024 + 2024$.

Phần chung như nhau, còn $2023 < 2024$, nên $A < B$ và $B - A = 2024 - 2023 = 1$.

**Đáp số:** $A < B$, $B$ hơn $A$ đúng $1$ đơn vị.

### Bài 10
Biến đổi số bị chia cho giống số chia:
$$2024 \times 2023 - 1 = 2024 \times (2022 + 1) - 1 = 2024 \times 2022 + 2024 - 1 = 2024 \times 2022 + 2023.$$
Số bị chia bằng số chia, nên thương bằng $1$.

**Đáp số:** $1$.

### Bài 11
Đặt $P = 1 \times 2 \times \dots \times 8$. Khi đó:
- $1 \times 2 \times \dots \times 9 = P \times 9$;
- $1 \times 2 \times \dots \times 7 \times 8 \times 8 = P \times 8$.

Biểu thức bằng $P \times 9 - P \times 1 - P \times 8 = P \times (9 - 1 - 8) = P \times 0 = 0$.

**Đáp số:** $0$.

### Bài 12
Tách $1999 = 999 + 1000$:
$$999 \times 999 + 999 + 1000 = 999 \times (999 + 1) + 1000 = 999 \times 1000 + 1000 = 1000 \times 1000 = 1000000.$$
**Đáp số:** $1000000$.

### Bài 13
Viết số $3$ thành hiệu của hai số hơn kém nhau $3$, để mỗi tích nhân $3$ thành hiệu của hai tích ba số liên tiếp:
- $1 \times 2 \times 3 = 1 \times 2 \times 3$;
- $2 \times 3 \times 3 = 2 \times 3 \times (4 - 1) = 2 \times 3 \times 4 - 1 \times 2 \times 3$;
- $3 \times 4 \times 3 = 3 \times 4 \times (5 - 2) = 3 \times 4 \times 5 - 2 \times 3 \times 4$;
- $\dots$
- $9 \times 10 \times 3 = 9 \times 10 \times (11 - 8) = 9 \times 10 \times 11 - 8 \times 9 \times 10$.

Cộng tất cả các dòng, các tích ở giữa triệt tiêu nhau từng cặp, chỉ còn lại:
$$S \times 3 = 9 \times 10 \times 11 = 990.$$
Vậy $S = 990 : 3 = 330$.

**Đáp số:** $S = 330$.

*Nhận xét:* nhân thêm một số khéo léo để mỗi số hạng thành "hiệu của hai số liền nhau trong một dãy" là mẹo rất mạnh. Cộng lại, các số ở giữa tự triệt tiêu.

# Chủ đề 2. Số thực

> Chủ đề mở rộng tập số từ số hữu tỉ sang số thực. Đề kiểm tra hay hỏi về số thập phân vô hạn tuần hoàn, căn bậc hai số học, giá trị tuyệt đối (tìm $x$) và làm tròn số trong bài toán thực tế.

## I. Kiến thức cần nắm

### 1. Số thập phân hữu hạn và số thập phân vô hạn tuần hoàn
- Mỗi số hữu tỉ viết được dưới dạng **số thập phân hữu hạn** hoặc **số thập phân vô hạn tuần hoàn**.
- **Cách nhận biết:** viết phân số dưới dạng tối giản với mẫu dương.
  - Nếu mẫu **chỉ có ước nguyên tố $2$ và $5$** thì phân số viết được dưới dạng số thập phân hữu hạn. Ví dụ $\frac{7}{20} = 0{,}35$ (vì $20 = 2^2\cdot5$).
  - Nếu mẫu có ước nguyên tố khác $2$ và $5$ thì phân số viết được dưới dạng số thập phân vô hạn tuần hoàn. Ví dụ $\frac{5}{12} = 0{,}41666\ldots = 0{,}41(6)$ (vì $12 = 2^2\cdot3$).
- Nhóm chữ số lặp lại gọi là **chu kì**, viết trong ngoặc: $\frac{4}{11} = 0{,}3636\ldots = 0{,}(36)$, chu kì là $36$.
- **Đổi số thập phân vô hạn tuần hoàn ra phân số (mở rộng):** $0{,}(a) = \frac a9$, $\ 0{,}(ab) = \frac{\overline{ab}}{99}$. Ví dụ $0{,}(4) = \frac49$, $\ 0{,}(27) = \frac{27}{99} = \frac{3}{11}$.
  > *Vì sao:* đặt $x = 0{,}(4)$ thì $10x = 4{,}(4) = 4 + x$, nên $9x = 4$, $x = \frac49$.

### 2. Số vô tỉ và căn bậc hai số học
- **Số vô tỉ** là số viết được dưới dạng số thập phân vô hạn **không tuần hoàn**. Tập hợp số vô tỉ kí hiệu là $\mathbb{I}$. Ví dụ: $\pi = 3{,}14159\ldots$, $\sqrt2 = 1{,}41421\ldots$
- **Căn bậc hai số học** của số $a \ge 0$ là số $x \ge 0$ sao cho $x^2 = a$, kí hiệu $\sqrt a$.
  - $\sqrt{a} \ge 0$ và $\left(\sqrt a\right)^2 = a$ với mọi $a \ge 0$.
  - Số âm không có căn bậc hai số học.
  - Ví dụ: $\sqrt{49} = 7$, $\sqrt{0{,}25} = 0{,}5$, $\sqrt{\frac{9}{16}} = \frac34$, $\sqrt0 = 0$.
- Nếu số tự nhiên $a$ không phải số chính phương thì $\sqrt a$ là số vô tỉ: $\sqrt2, \sqrt3, \sqrt5, \sqrt7, \dots$
- Tính gần đúng căn bậc hai bằng máy tính cầm tay: $\sqrt5 \approx 2{,}236$.

### 3. Tập hợp số thực $\mathbb{R}$
- Số hữu tỉ và số vô tỉ gọi chung là **số thực**: $\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R}$, $\ \mathbb{I} \subset \mathbb{R}$.
- Mỗi số thực được biểu diễn bởi một điểm trên trục số và ngược lại (trục số được "lấp đầy" bởi các số thực).
- **So sánh:** viết hai số dưới dạng số thập phân rồi so sánh từng hàng. Với $a, b \ge 0$: $a < b \iff \sqrt a < \sqrt b$.
  Ví dụ: $\sqrt{15} < \sqrt{16} = 4$; $\ 0{,}(3) = 0{,}333\ldots > 0{,}33$.
- Mỗi số thực $a$ có số đối là $-a$. Các phép tính và tính chất trong $\mathbb{R}$ giống như trong $\mathbb{Q}$.

### 4. Giá trị tuyệt đối của một số thực
- Giá trị tuyệt đối của $x$, kí hiệu $\lvert x\rvert$, là **khoảng cách** từ điểm $x$ đến gốc $O$ trên trục số.
$$\lvert x\rvert = \begin{cases} x & \text{nếu } x \ge 0,\\ -x & \text{nếu } x < 0.\end{cases}$$
- Tính chất: $\lvert x\rvert \ge 0$; $\ \lvert x\rvert = \lvert -x\rvert$; $\ \lvert x\rvert = 0 \iff x = 0$.
- **Tìm $x$:**
  - $\lvert x\rvert = a$ với $a > 0$ thì $x = a$ hoặc $x = -a$;
  - $\lvert x\rvert = 0$ thì $x = 0$;
  - $\lvert x\rvert = a$ với $a < 0$ thì không có $x$ nào.
- **Giá trị nhỏ nhất, lớn nhất:** vì $\lvert A\rvert \ge 0$ nên $\lvert A\rvert + m \ge m$ và $m - \lvert A\rvert \le m$; dấu "=" xảy ra khi $A = 0$.

*Ví dụ:* $\lvert x - 1\rvert = 3 \Rightarrow x - 1 = 3$ hoặc $x - 1 = -3$, tức là $x = 4$ hoặc $x = -2$.

### 5. Làm tròn và ước lượng
- **Quy tắc làm tròn** đến một hàng nào đó: nhìn chữ số ngay bên phải hàng làm tròn.
  - Nếu chữ số đó **nhỏ hơn 5**: giữ nguyên chữ số hàng làm tròn, bỏ (hoặc thay bằng $0$) các chữ số bên phải.
  - Nếu chữ số đó **lớn hơn hoặc bằng 5**: cộng thêm $1$ vào chữ số hàng làm tròn rồi làm như trên.
  - Ví dụ: $3{,}14159 \approx 3{,}14$ (hàng phần trăm); $\ 72\,486 \approx 72\,000$ (hàng nghìn).
- **Làm tròn với độ chính xác $d$:** độ chính xác $0{,}5$ thì làm tròn đến hàng đơn vị; $0{,}05$ thì đến hàng phần mười; $0{,}005$ thì đến hàng phần trăm; $50$ thì đến hàng trăm, ...
- **Ước lượng:** làm tròn các số rồi tính nhẩm để biết nhanh kết quả khoảng bao nhiêu, kiểm tra kết quả có hợp lí không.

### 6. Sai lầm hay gặp
- Viết $\sqrt{16} = \pm4$. Căn bậc hai **số học** luôn không âm: $\sqrt{16} = 4$. Còn $x^2 = 16$ thì $x = 4$ hoặc $x = -4$.
- Viết $\sqrt{9 + 16} = \sqrt9 + \sqrt{16}$. Sai: $\sqrt{25} = 5 \ne 3 + 4$.
- Viết $\lvert x\rvert = -2 \Rightarrow x = \pm2$. Phương trình này không có nghiệm vì $\lvert x\rvert \ge 0$.
- Làm tròn "dây chuyền": $2{,}346 \to 2{,}35 \to 2{,}4$ là sai; làm tròn $2{,}346$ đến hàng phần mười là $2{,}3$ (chỉ nhìn chữ số $4$ ngay sau hàng phần mười).

---

## II. Bài tập vận dụng

**Bài 1.** Mỗi phân số sau viết được dưới dạng số thập phân hữu hạn hay vô hạn tuần hoàn? Vì sao? Hãy viết chúng dưới dạng số thập phân (dùng kí hiệu chu kì nếu cần):
$$\frac{7}{20};\quad \frac{5}{12};\quad \frac{-9}{40};\quad \frac{4}{11};\quad \frac{14}{35}.$$

**Bài 2 (căn bậc hai số học).**
a) Tính $\sqrt{81}$; $\ \sqrt{0{,}25}$; $\ \sqrt{\frac{49}{121}}$; $\ \sqrt{1{,}44}$.
b) Tính $2\sqrt{16} - 3\sqrt{0{,}09} + \sqrt{\frac14}$.
c) Tìm $x$, biết $\sqrt x = 9$; tìm $x$, biết $x^2 = 7$.

**Bài 3 (giá trị tuyệt đối).**
a) Tính $\lvert -3{,}5\rvert + \left\lvert 1\frac12\right\rvert - \left\lvert -\frac23\right\rvert$.
b) Tìm $x$, biết: $\lvert x\rvert = 2{,}5$; $\ \lvert x\rvert = -1$; $\ \lvert x - 1\rvert = 3$.

**Bài 4 (so sánh số thực).**
a) So sánh: $\sqrt{15}$ và $4$; $\ -\sqrt7$ và $-2{,}6$; $\ 0{,}(3)$ và $0{,}33$.
b) Sắp xếp theo thứ tự tăng dần: $-1{,}(2)$; $\ \sqrt2$; $\ -\frac54$; $\ 1{,}4$; $\ 0$; $\ \pi$.

**Bài 5 (làm tròn số).**
a) Làm tròn số $3{,}14159$ đến hàng phần trăm và đến hàng phần nghìn.
b) Làm tròn $\sqrt5 = 2{,}2360679\ldots$ đến hàng phần trăm.
c) Làm tròn số $72\,486$ đến hàng nghìn.
d) Làm tròn số $12{,}3478$ với độ chính xác $0{,}005$.

**Bài 6.** Viết các số thập phân vô hạn tuần hoàn sau dưới dạng phân số tối giản: $0{,}(4)$; $\ 0{,}(27)$; $\ 1{,}2(3)$.

**Bài 7 (thực tế: rào vườn).** Một mảnh vườn hình vuông có diện tích $200\text{ m}^2$.
a) Tính độ dài cạnh mảnh vườn (làm tròn đến hàng phần trăm của mét).
b) Người ta muốn rào xung quanh vườn bằng lưới. Lưới được bán theo mét nguyên. Cần mua ít nhất bao nhiêu mét lưới?

**Bài 8 (thực tế: ước lượng tiền).** Bạn Mai mang $100\,000$ đồng đi mua $3$ quyển vở giá $12\,800$ đồng một quyển, $2$ chiếc bút giá $7\,900$ đồng một chiếc và $1$ hộp bút màu giá $48\,500$ đồng.
a) Làm tròn giá mỗi món đến hàng nghìn rồi ước lượng tổng số tiền.
b) Tính chính xác tổng số tiền. Mai có đủ tiền không?

**Bài 9 (thực tế: bánh xe).** Bánh xe đạp có đường kính $0{,}65$ m. Khi xe đi được quãng đường $1$ km thì mỗi bánh xe quay được khoảng bao nhiêu vòng? (Lấy $\pi \approx 3{,}14$, làm tròn kết quả đến hàng đơn vị.)

**Bài 10.** Tìm $x$, biết:
a) $\left\lvert x - \frac12\right\rvert - \frac13 = \frac14$;
b) $\lvert 2x - 1\rvert = \lvert x + 3\rvert$.

**Bài 11 (vận dụng cao).**
a) Tìm giá trị nhỏ nhất của $A = \lvert x - 2\rvert + 5$.
b) Tìm giá trị lớn nhất của $B = 3 - \lvert 2x + 1\rvert$.

**Bài 12 (vận dụng cao).** Tìm giá trị nhỏ nhất của biểu thức $C = \lvert x - 1\rvert + \lvert x - 4\rvert$ và các giá trị của $x$ để $C$ đạt giá trị nhỏ nhất.

---

## III. Lời giải chi tiết

### Bài 1
Các phân số đều có mẫu dương. Rút gọn và phân tích mẫu:
- $\frac{7}{20}$ tối giản, $20 = 2^2\cdot5$: hữu hạn, $\frac{7}{20} = 0{,}35$.
- $\frac{5}{12}$ tối giản, $12 = 2^2\cdot3$ có ước $3$: vô hạn tuần hoàn, $\frac{5}{12} = 0{,}41(6)$.
- $\frac{-9}{40}$ tối giản, $40 = 2^3\cdot5$: hữu hạn, $\frac{-9}{40} = -0{,}225$.
- $\frac{4}{11}$ tối giản, mẫu $11$: vô hạn tuần hoàn, $\frac{4}{11} = 0{,}(36)$.
- $\frac{14}{35} = \frac25$, mẫu $5$: hữu hạn, $\frac{14}{35} = 0{,}4$.

*Nhận xét:* phải **rút gọn trước** khi xét mẫu. Mẫu $35 = 5\cdot7$ có ước $7$, nhưng $\frac{14}{35} = \frac25$ vẫn là số thập phân hữu hạn.

### Bài 2
a) $\sqrt{81} = 9$; $\ \sqrt{0{,}25} = 0{,}5$; $\ \sqrt{\frac{49}{121}} = \frac{7}{11}$; $\ \sqrt{1{,}44} = 1{,}2$.

b) $2\sqrt{16} - 3\sqrt{0{,}09} + \sqrt{\frac14} = 2\cdot4 - 3\cdot0{,}3 + 0{,}5 = 8 - 0{,}9 + 0{,}5 = 7{,}6$.

c) $\sqrt x = 9$ thì $x = 9^2 = 81$.
$x^2 = 7$ thì $x = \sqrt7$ hoặc $x = -\sqrt7$.

### Bài 3
a) $\lvert -3{,}5\rvert + \left\lvert 1\frac12\right\rvert - \left\lvert -\frac23\right\rvert = 3{,}5 + 1{,}5 - \frac23 = 5 - \frac23 = \frac{13}{3}$.

b)
- $\lvert x\rvert = 2{,}5 \Rightarrow x = 2{,}5$ hoặc $x = -2{,}5$.
- $\lvert x\rvert = -1$: không có giá trị nào của $x$, vì $\lvert x\rvert \ge 0$.
- $\lvert x - 1\rvert = 3 \Rightarrow x - 1 = 3$ hoặc $x - 1 = -3$, tức là $x = 4$ hoặc $x = -2$.

### Bài 4
a)
- $15 < 16$ nên $\sqrt{15} < \sqrt{16} = 4$.
- $\sqrt7 = 2{,}6457\ldots > 2{,}6$ nên $-\sqrt7 < -2{,}6$.
- $0{,}(3) = 0{,}3333\ldots > 0{,}33$.

b) Viết dưới dạng thập phân: $-1{,}(2) = -1{,}222\ldots$; $\ \sqrt2 = 1{,}414\ldots$; $\ -\frac54 = -1{,}25$; $\ 1{,}4$; $\ 0$; $\ \pi = 3{,}14\ldots$
Hai số âm: $1{,}25 > 1{,}222\ldots$ nên $-\frac54 < -1{,}(2)$. Các số dương: $1{,}4 < 1{,}414\ldots < 3{,}14\ldots$

Thứ tự tăng dần: $\boxed{-\frac54;\ -1{,}(2);\ 0;\ 1{,}4;\ \sqrt2;\ \pi}$.

### Bài 5
a) $3{,}14159$: chữ số sau hàng phần trăm là $1 < 5$ nên $3{,}14159 \approx 3{,}14$. Chữ số sau hàng phần nghìn là $5$ nên $3{,}14159 \approx 3{,}142$.

b) $2{,}2360\ldots$: chữ số sau hàng phần trăm là $6 \ge 5$ nên $\sqrt5 \approx 2{,}24$.

c) $72\,486$: chữ số hàng trăm là $4 < 5$ nên $72\,486 \approx 72\,000$.

d) Độ chính xác $0{,}005$ thì làm tròn đến hàng phần trăm. Chữ số sau hàng phần trăm của $12{,}3478$ là $7 \ge 5$ nên $12{,}3478 \approx 12{,}35$.

### Bài 6
- $0{,}(4) = \frac49$.
- $0{,}(27) = \frac{27}{99} = \frac{3}{11}$.
- Đặt $x = 1{,}2(3) = 1{,}2333\ldots$ Khi đó $10x = 12{,}333\ldots = 12{,}(3)$ và $100x = 123{,}333\ldots = 123{,}(3)$.
  Lấy hiệu: $100x - 10x = 123 - 12$, tức là $90x = 111$, nên $x = \frac{111}{90} = \frac{37}{30}$.

*Kiểm tra:* $37 : 30 = 1{,}2333\ldots$ ✓.

*Nhận xét:* nhân với lũy thừa của $10$ để được hai số có **cùng phần thập phân**, rồi trừ cho nhau để khử phần lặp vô hạn.

### Bài 7
a) Gọi độ dài cạnh là $a$ (m), $a > 0$. Ta có $a^2 = 200$ nên $a = \sqrt{200} = 14{,}142\ldots \approx 14{,}14$ (m).

b) Chu vi mảnh vườn: $4\sqrt{200} = 56{,}568\ldots$ (m). Lưới bán theo mét nguyên và phải đủ dài, nên cần mua ít nhất $57$ m lưới.

*Nhận xét:* trong thực tế, khi cần "đủ dùng" thì phải làm tròn **lên**, dù chữ số bỏ đi nhỏ hơn 5.

### Bài 8
a) Làm tròn: $12\,800 \approx 13\,000$; $\ 7\,900 \approx 8\,000$; $\ 48\,500 \approx 49\,000$.
Ước lượng tổng: $3\cdot13\,000 + 2\cdot8\,000 + 49\,000 = 39\,000 + 16\,000 + 49\,000 = 104\,000$ (đồng).

b) Tổng chính xác: $3\cdot12\,800 + 2\cdot7\,900 + 48\,500 = 38\,400 + 15\,800 + 48\,500 = 102\,700$ (đồng).
Vì $102\,700 > 100\,000$ nên Mai **không đủ tiền** (thiếu $2\,700$ đồng).

### Bài 9
Chu vi bánh xe: $C = d\cdot\pi \approx 0{,}65\cdot3{,}14 = 2{,}041$ (m).
Mỗi vòng quay, xe đi được một quãng bằng chu vi bánh xe. Đổi $1$ km $= 1000$ m.
Số vòng quay: $1000 : 2{,}041 \approx 489{,}96 \approx 490$ (vòng).

### Bài 10
a) $\left\lvert x - \frac12\right\rvert = \frac14 + \frac13 = \frac{7}{12}$, nên $x - \frac12 = \frac{7}{12}$ hoặc $x - \frac12 = -\frac{7}{12}$.
- $x = \frac12 + \frac{7}{12} = \frac{13}{12}$;
- $x = \frac12 - \frac{7}{12} = -\frac{1}{12}$.

Vậy $x = \frac{13}{12}$ hoặc $x = -\frac{1}{12}$.

b) Hai số có cùng giá trị tuyệt đối thì bằng nhau hoặc đối nhau.
- $2x - 1 = x + 3 \Rightarrow x = 4$.
- $2x - 1 = -(x + 3) = -x - 3 \Rightarrow 3x = -2 \Rightarrow x = -\frac23$.

Vậy $x = 4$ hoặc $x = -\frac23$.

*Kiểm tra:* $x = 4$: $\lvert 7\rvert = \lvert 7\rvert$ ✓; $x = -\frac23$: $\left\lvert -\frac73\right\rvert = \left\lvert \frac73\right\rvert$ ✓.

### Bài 11
a) Vì $\lvert x - 2\rvert \ge 0$ với mọi $x$ nên $A = \lvert x - 2\rvert + 5 \ge 5$. Dấu "=" xảy ra khi $x - 2 = 0$, tức là $x = 2$.
Vậy giá trị nhỏ nhất của $A$ là $5$, khi $x = 2$.

b) Vì $\lvert 2x + 1\rvert \ge 0$ nên $B = 3 - \lvert 2x + 1\rvert \le 3$. Dấu "=" xảy ra khi $2x + 1 = 0$, tức là $x = -\frac12$.
Vậy giá trị lớn nhất của $B$ là $3$, khi $x = -\frac12$.

*Nhận xét:* phải chỉ ra giá trị của $x$ làm dấu "=" xảy ra thì mới kết luận được giá trị nhỏ nhất (lớn nhất).

### Bài 12
Xét ba trường hợp theo vị trí của $x$ so với $1$ và $4$:
- **Nếu $x < 1$:** $x - 1 < 0$, $x - 4 < 0$, nên $C = (1 - x) + (4 - x) = 5 - 2x$. Vì $x < 1$ nên $2x < 2$, suy ra $C > 3$.
- **Nếu $1 \le x \le 4$:** $x - 1 \ge 0$, $x - 4 \le 0$, nên $C = (x - 1) + (4 - x) = 3$.
- **Nếu $x > 4$:** $C = (x - 1) + (x - 4) = 2x - 5 > 8 - 5 = 3$.

Vậy giá trị nhỏ nhất của $C$ là $3$, đạt được khi $1 \le x \le 4$.

*Nhận xét:* $\lvert x - 1\rvert + \lvert x - 4\rvert$ là tổng khoảng cách từ điểm $x$ đến hai điểm $1$ và $4$ trên trục số. Tổng này nhỏ nhất (bằng $4 - 1 = 3$) khi $x$ nằm giữa hai điểm đó.

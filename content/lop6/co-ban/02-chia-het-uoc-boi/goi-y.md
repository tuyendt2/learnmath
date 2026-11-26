# Gợi ý từng tầng cho bài tập Tính chia hết, số nguyên tố, ƯCLN, BCNN

## Bài 1 | 1
**Ý tưởng:** Xét chữ số tận cùng (cho $2$, $5$) và tổng các chữ số (cho $3$, $9$).

### Gợi ý 1
Lập bảng: mỗi số ghi chữ số tận cùng và tổng các chữ số.

### Gợi ý 2
Tổng chữ số lần lượt là $10, 18, 9, 12, 18$. Số chia hết cho cả bốn số phải tận cùng $0$ và có tổng chữ số chia hết cho $9$.

## Bài 2 | 1
**Ý tưởng:** Dùng dấu hiệu chia hết cho $5$ (hoặc cho $2$ và $5$) để chọn chữ số cuối trước.

### Gợi ý 1
Chữ số tận cùng có thể là gì? Thử từng trường hợp.

### Gợi ý 2
a) $* \in \{0; 5\}$, thử tổng chữ số. b) $b = 0$, rồi $11 + a$ phải chia hết cho $9$.

## Bài 3 | 1
**Ý tưởng:** Số nguyên tố chỉ có hai ước $1$ và chính nó; phân tích bằng cách chia dần cho các số nguyên tố.

### Gợi ý 1
Thử chia mỗi số cho $2, 3, 5, 7$. Số $1$ thuộc loại nào?

### Gợi ý 2
$51 = 3 \cdot 17$, $91 = 7 \cdot 13$. Với $120$: chia liên tiếp cho $2$, rồi $3$, rồi $5$.

## Bài 4 | 1
**Ý tưởng:** ƯCLN: thừa số chung, số mũ nhỏ nhất. BCNN: thừa số chung và riêng, số mũ lớn nhất.

### Gợi ý 1
Phân tích mỗi số ra thừa số nguyên tố trước.

### Gợi ý 2
$36 = 2^2 \cdot 3^2$, $84 = 2^2 \cdot 3 \cdot 7$. $24 = 2^3 \cdot 3$, $60 = 2^2 \cdot 3 \cdot 5$, $90 = 2 \cdot 3^2 \cdot 5$.

## Bài 5 | 2
**Ý tưởng:** Hai số hạng đầu đã chia hết cho $4$, nên mọi thứ phụ thuộc vào $x$.

### Gợi ý 1
$12$ và $36$ có chia hết cho $4$ không?

### Gợi ý 2
Dùng hai tính chất: tất cả số hạng chia hết thì tổng chia hết; chỉ một số hạng không chia hết thì tổng không chia hết.

## Bài 6 | 2
**Ý tưởng:** Số phần thưởng là ước chung; nhiều nhất thì lấy ƯCLN.

### Gợi ý 1
Số phần thưởng phải chia hết đồng thời $48$, $72$ và $120$.

### Gợi ý 2
$\text{ƯCLN}(48, 72, 120) = 24$. Chia mỗi số cho $24$.

## Bài 7 | 2
**Ý tưởng:** Thời gian cùng xuất phát lại là bội chung; sớm nhất là BCNN.

### Gợi ý 1
Sau bao nhiêu phút thì cả ba tuyến đều vừa đến giờ xuất phát?

### Gợi ý 2
$\text{BCNN}(10, 12, 15) = 60$ phút.

## Bài 8 | 2
**Ý tưởng:** Bớt $5$ học sinh thì được bội chung của $12, 15, 18$.

### Gợi ý 1
"Đều thừa $5$" nghĩa là số học sinh trừ $5$ chia hết cho cả ba số.

### Gợi ý 2
$\text{BCNN}(12, 15, 18) = 180$. Tìm bội của $180$ sao cho cộng $5$ thì nằm giữa $300$ và $400$.

## Bài 9 | 2
**Ý tưởng:** Cạnh gạch là ước chung của hai kích thước; dài nhất là ƯCLN.

### Gợi ý 1
Muốn không cắt gạch thì cạnh gạch phải chia hết chiều dài và chiều rộng.

### Gợi ý 2
$\text{ƯCLN}(480, 360) = 120$. Số viên $= (480 : 120) \cdot (360 : 120)$.

## Bài 10 | 3
**Ý tưởng:** Viết $n + 3 = (n + 1) + 2$, suy ra $n + 1$ là ước của $2$.

### Gợi ý 1
Tách $n + 3$ thành tổng của một số chia hết cho $n + 1$ và một số cụ thể.

### Gợi ý 2
$n + 1 \in \text{Ư}(2) = \{1; 2\}$.

## Bài 11 | 3
**Ý tưởng:** Đặt $a = 12m$, $b = 12k$ với $m, k$ nguyên tố cùng nhau; khi đó $m + k = 7$.

### Gợi ý 1
Hai số có ƯCLN là $12$ thì đều là bội của $12$. Viết chúng dưới dạng $12m$, $12k$.

### Gợi ý 2
$12(m + k) = 84$ nên $m + k = 7$. Liệt kê các cặp và kiểm tra $m, k$ nguyên tố cùng nhau.

### Gợi ý 3
Các cặp $(1; 6)$, $(2; 5)$, $(3; 4)$ cho ba đáp số.

## Bài 12 | 3
**Ý tưởng:** a) $\overline{aaa} = 111a = 3 \cdot 37 \cdot a$. b) Xét $n$ chẵn và $n$ lẻ.

### Gợi ý 1
a) Viết $\overline{aaa}$ theo các hàng. b) Trong hai thừa số, có luôn một số chẵn không?

### Gợi ý 2
a) $111 = 3 \cdot 37$. b) $n$ lẻ thì $n + 3$ chẵn; $n$ chẵn thì $n + 6$ chẵn.

# Thẻ ghi nhớ Xác suất có điều kiện

## Định nghĩa

### Xác suất có điều kiện $P(A \mid B)$?
$\frac{P(AB)}{P(B)}$ với $P(B) > 0$.

### Khi các kết quả đồng khả năng?
$P(A \mid B) = \frac{n(AB)}{n(B)}$.

### Công thức nhân?
$P(AB) = P(A)P(B \mid A)$.

### $A$, $B$ độc lập theo xác suất có điều kiện?
$P(A \mid B) = P(A)$.

## Toàn phần, Bayes

### Công thức xác suất toàn phần?
$P(A) = P(B)P(A \mid B) + P(\bar B)P(A \mid \bar B)$.

### Hệ đầy đủ là gì?
Các biến cố xung khắc từng đôi, hợp lại là không gian mẫu.

### Công thức Bayes?
$P(B \mid A) = \frac{P(B)P(A \mid B)}{P(A)}$.

### Sơ đồ cây: xác suất một đường đi?
Tích các xác suất trên các nhánh.

## Ứng dụng

### Xét nghiệm 95% chính xác, bệnh 1%: xác suất bệnh khi dương tính?
Khoảng 16%.

### Vì sao kết quả trên thấp?
Bệnh hiếm nên số dương tính giả lớn hơn số dương tính thật.

### Lấy không hoàn lại: xác suất lần hai phụ thuộc gì?
Kết quả lần một.

### Phế phẩm từ nhiều nhà máy: biết là phế phẩm, xác suất từ nhà máy $i$?
Bayes: $\frac{P(B_i)P(A \mid B_i)}{\sum P(B_j)P(A \mid B_j)}$.

## Bẫy hay gặp

### Lỗi nhầm lẫn kinh điển?
Nhầm $P(A \mid B)$ với $P(B \mid A)$.

### Lỗi trong công thức toàn phần?
Quên nhánh $\bar B$.

# Thẻ ghi nhớ Các quy tắc tính xác suất

## Biến cố

### Biến cố hợp $A \cup B$ xảy ra khi nào?
Khi $A$ hoặc $B$ xảy ra.

### Biến cố giao $AB$ xảy ra khi nào?
Khi cả $A$ và $B$ cùng xảy ra.

### Hai biến cố xung khắc là gì?
Không thể cùng xảy ra: $AB = \varnothing$.

## Quy tắc cộng

### Quy tắc cộng tổng quát?
$P(A \cup B) = P(A) + P(B) - P(AB)$.

### Quy tắc cộng cho biến cố xung khắc?
$P(A \cup B) = P(A) + P(B)$.

### Xác suất biến cố đối?
$1 - P(A)$.

## Độc lập

### Hai biến cố độc lập khi nào?
$P(AB) = P(A)P(B)$.

### $A$, $B$ độc lập thì $\bar A$, $B$ thế nào?
Cũng độc lập.

### Hai biến cố xung khắc có xác suất dương có độc lập không?
Không.

### Quy tắc nhân cho $n$ biến cố độc lập?
$P(A_1\cdots A_n) = P(A_1)\cdots P(A_n)$.

## Kỹ thuật

### "Ít nhất một" trong $n$ lần thử độc lập?
$1 - (1 - p)^n$.

### "Đúng một" trong hai biến cố độc lập?
$P(A)P(\bar B) + P(\bar A)P(B)$.

### Lấy có hoàn lại là thử độc lập không?
Có.

### Trò chơi luân phiên: dùng công cụ gì?
Tổng cấp số nhân lùi vô hạn.

## Bẫy hay gặp

### Lỗi hay gặp khi cộng xác suất?
Quên trừ $P(AB)$ khi hai biến cố không xung khắc.

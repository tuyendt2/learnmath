# Thẻ ghi nhớ Dãy số có quy luật

## Tìm quy luật

### Khi gặp một dãy số lạ, nên thử những quy luật nào trước?
Xét hiệu hai số liên tiếp (có bằng nhau không, có tăng đều không), xét thương (có gấp lên một số lần không), xét tổng hai số đứng trước, xét tích hai số liên tiếp.

### Dãy $1, 1, 2, 3, 5, 8, \dots$ có quy luật gì?
Từ số thứ ba, mỗi số bằng tổng hai số đứng trước. Hai số tiếp theo là $13$, $21$.

### Dãy $2, 6, 12, 20, 30, \dots$ có quy luật gì?
Các số là $1 \times 2$, $2 \times 3$, $3 \times 4$, ... Tiếp theo là $42$, $56$.

### Dãy có hiệu tăng dần $1, 2, 3, \dots$ thì tìm số hạng thứ $n$ thế nào?
Số hạng thứ $n$ bằng số đầu cộng tổng $n - 1$ hiệu đầu tiên. Ví dụ dãy $1, 2, 4, 7, \dots$ có số hạng thứ $20$ là $1 + (1 + 2 + \dots + 19) = 191$.

### Bẫy khi tìm quy luật là gì?
Chỉ nhìn hai, ba số đầu rồi kết luận. Phải kiểm tra quy luật với mọi số đã cho.

## Dãy cách đều

### Số số hạng của dãy cách đều tính thế nào?
$(\text{số cuối} - \text{số đầu}) : \text{khoảng cách} + 1$.

*Vì sao "$+\,1$":* như trồng cây trên đoạn đường, số cây nhiều hơn số khoảng $1$.

### Số hạng thứ $n$ của dãy cách đều là gì?
$\text{số đầu} + (n - 1) \times \text{khoảng cách}$, vì từ số hạng thứ nhất đến số hạng thứ $n$ có $n - 1$ khoảng.

### Tổng của dãy cách đều?
$(\text{số đầu} + \text{số cuối}) \times \text{số số hạng} : 2$.

### Vì sao công thức tổng dãy cách đều đúng?
Viết dãy xuôi, bên dưới viết dãy ngược. Mỗi cột có tổng bằng số đầu + số cuối, có bao nhiêu số hạng thì có bấy nhiêu cột, và hai hàng gấp đôi tổng cần tìm.

### Làm sao biết một số có thuộc dãy cách đều không?
Các số trong dãy có cùng số dư khi chia cho khoảng cách. Ví dụ dãy $3, 7, 11, \dots$ gồm các số chia $4$ dư $3$, nên $2024$ không thuộc dãy.

### Biết tổng và số số hạng của dãy cách đều, suy ra được gì?
$\text{số đầu} + \text{số cuối} = \text{tổng} \times 2 : \text{số số hạng}$. Kết hợp với hiệu $(n - 1) \times d$ thì thành bài toán tổng và hiệu.

### Tổng của $k$ số tự nhiên liên tiếp cho trước thì tìm các số thế nào?
Số đầu + số cuối $= \text{tổng} \times 2 : k$, số cuối hơn số đầu $k - 1$. Ví dụ $5$ số liên tiếp có tổng $100$ là $18, 19, 20, 21, 22$.

## Tổng đặc biệt

### $1 + 2 + 3 + \dots + n = \;?$
$n \times (n + 1) : 2$. Ví dụ $1 + 2 + \dots + 20 = 210$.

### Tổng $n$ số lẻ đầu tiên $1 + 3 + 5 + \dots$ bằng bao nhiêu?
$n \times n$. Ví dụ $1 + 3 + 5 + 7 = 16$.

### Tính $1 + 2 + 4 + 8 + \dots + 512$ bằng mẹo gì?
Gấp đôi rồi trừ: $S \times 2 - S = 1024 - 1$, nên $S = 1023$.

### Có bao nhiêu số có ba chữ số chia hết cho $4$?
Dãy $100, 104, \dots, 996$ có $(996 - 100) : 4 + 1 = 225$ số.

## Dãy lặp và dãy đặc biệt

### Dãy lặp lại theo nhóm, tìm phần tử thứ $n$ thế nào?
Chia $n$ cho số phần tử của nhóm. Dư $r$ thì là phần tử thứ $r$ của nhóm. Dư $0$ thì là phần tử **cuối** của nhóm.

### Đếm số lần một chữ xuất hiện trong $n$ phần tử đầu của dãy lặp thế nào?
Số nhóm trọn vẹn nhân với số lần chữ đó có trong một nhóm, rồi cộng số lần nó xuất hiện trong phần dư.

### Dãy $1, 2, 2, 3, 3, 3, \dots$ (số $n$ viết $n$ lần): số $n$ kết thúc ở vị trí nào?
Ở vị trí $1 + 2 + \dots + n$. Ví dụ số $13$ kết thúc ở vị trí $91$, nên vị trí $100$ là số $14$.

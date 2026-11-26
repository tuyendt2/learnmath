# Thẻ ghi nhớ Mệnh đề và tập hợp

## Mệnh đề

### Thế nào là một mệnh đề?
Một câu khẳng định có tính đúng hoặc sai, không thể vừa đúng vừa sai. Câu hỏi, câu cảm thán, câu mệnh lệnh không phải là mệnh đề.

### "$x + 2 > 5$" có phải là mệnh đề không?
Không. Đó là **mệnh đề chứa biến**: chỉ khi thay $x$ bằng một số cụ thể mới được mệnh đề. Ví dụ $x = 4$ cho mệnh đề đúng.

### Mệnh đề kéo theo $P \Rightarrow Q$ sai khi nào?
Chỉ sai khi $P$ đúng và $Q$ sai. Các trường hợp còn lại đều đúng.

### Khi $P \Rightarrow Q$ đúng, đâu là điều kiện cần, đâu là điều kiện đủ?
$P$ là **điều kiện đủ** để có $Q$; $Q$ là **điều kiện cần** để có $P$.

*Ví dụ:* "chia hết cho 6" là điều kiện đủ để "chia hết cho 3".

### Mệnh đề đảo của $P \Rightarrow Q$ là gì? Nó có luôn đúng không?
Là $Q \Rightarrow P$. Không nhất thiết đúng: "Nếu $n \,\vdots\, 6$ thì $n \,\vdots\, 3$" đúng nhưng mệnh đề đảo sai ($n = 3$).

### $P \Leftrightarrow Q$ đúng khi nào?
Khi cả $P \Rightarrow Q$ và $Q \Rightarrow P$ đều đúng. Đọc là "$P$ khi và chỉ khi $Q$", "$P$ là điều kiện cần và đủ để có $Q$".

### Phủ định của "$\forall x \in X, P(x)$" là gì?
"$\exists x \in X, \overline{P(x)}$". Đổi "với mọi" thành "tồn tại" và phủ định tính chất.

### Phủ định của "$\exists x \in X, P(x)$" là gì?
"$\forall x \in X, \overline{P(x)}$".

### Phủ định của "$x > 2$" là gì?
"$x \le 2$". Bẫy hay gặp: viết thành "$x < 2$", quên trường hợp $x = 2$.

### Làm sao chứng minh $P \Rightarrow Q$ bằng phản chứng?
Giả sử $P$ đúng mà $Q$ sai, suy ra điều vô lý. Tương đương: chứng minh $\overline{Q} \Rightarrow \overline{P}$.

### Cách nhanh nhất để chứng tỏ mệnh đề "với mọi" là sai?
Chỉ ra **một phản ví dụ**. Ví dụ "$\forall x \in \mathbb{R}, x^2 \ge x$" sai vì $x = \frac12$.

## Tập hợp

### $A \subset B$ nghĩa là gì?
Mọi phần tử của $A$ đều thuộc $B$. Luôn có $\varnothing \subset A$ và $A \subset A$.

### Viết "$1 \subset \{1; 2\}$" đúng hay sai?
Sai. Phần tử dùng kí hiệu $\in$: $1 \in \{1; 2\}$. Tập con dùng $\subset$: $\{1\} \subset \{1; 2\}$.

### Tập có $n$ phần tử có bao nhiêu tập con?
$2^n$ tập con (kể cả $\varnothing$ và chính nó).

*Vì sao:* mỗi phần tử có hai khả năng, được chọn hoặc không.

### $A \setminus B$ là tập nào?
Các phần tử thuộc $A$ nhưng không thuộc $B$. Khi $A \subset E$ thì $C_E A = E \setminus A$.

### $[-1; 3) \setminus (2; 5]$ bằng bao nhiêu?
$[-1; 2]$. Điểm 2 không thuộc $(2; 5]$ nên vẫn được giữ lại.

### Phần bù của $[a; b)$ trong $\mathbb{R}$ là gì?
$(-\infty; a) \cup [b; +\infty)$. Đầu mút đổi kiểu ngoặc: ngoặc vuông thành tròn và ngược lại.

### Điều kiện để $[m; m + 3] \subset (-1; 4)$?
$m > -1$ và $m + 3 < 4$. Khoảng mở thì dùng bất đẳng thức chặt.

## Biểu đồ Ven

### Công thức đếm $n(A \cup B)$?
$n(A \cup B) = n(A) + n(B) - n(A \cap B)$.

*Vì sao:* phần chung bị đếm hai lần.

### Công thức đếm $n(A \cup B \cup C)$?
$n(A) + n(B) + n(C) - n(A \cap B) - n(B \cap C) - n(C \cap A) + n(A \cap B \cap C)$.

### Điền số vào biểu đồ Ven ba tập theo thứ tự nào?
Từ trong ra ngoài: phần chung của cả ba tập trước, rồi phần chung của từng cặp (trừ phần chung cả ba), cuối cùng là phần "chỉ thuộc một tập".

### Biết $n(A) = 30$, $n(B) = 25$ trong 40 người, $n(A \cap B)$ ít nhất là bao nhiêu?
$30 + 25 - 40 = 15$, vì $n(A \cup B) \le 40$. Nhiều nhất là $25$ (khi $B \subset A$).

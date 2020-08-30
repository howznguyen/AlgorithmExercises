# Bài Tập Lấp Đầy Bảng Bằng Domino

## Mô Tả Bài Toán
Bạn được cho một bảng có kích thước `MxN` và vô số các thanh domino có kích thức `2x1`. Bạn có thể xoay các thanh domino. Có thể đặt nhiều nhất bao nhiêu thanh domino lên bảng thỏa mãn yêu cầu:

 - Mỗi thanh domino chiếm hết `2` ô.
 - Không có `2` thanh domino nào nằm chồng lên nhau.
 - Các thanh domino đều nằm trong bảng, đường viền của thanh domino có thể trùng với viền của bảng.

## Ví dụ:

- Với `n=2`, `m=4` thì `domino(2, 4)=4`.
- Với `n=3`, `m=3` thì `domino(3, 3)=4`.

## Đầu vào/Đầu ra:

- **[Thời gian]**
   - 0.5s với C++ 
   - 3s với Java và C#
   - 4s với Python
   - Go và JavaScript
- **[Đầu vào] integer n, m**\
  `(1 ≤ M ≤ N ≤ 10³)`.
- **[Đầu ra] integer** \
  Số thanh domino nhiều nhất có thể.
# Bài Tập Mã Hoá Một Số Tự Nhiên

## Mô Tả Bài Toán
Một cách mã hoá tự nhiên M có nhiều chữ số xuất hiện liên tiếp là ghi nhận lại số lần xuất hiện cùng với chữ số đó. Mỗi đoạn liên tiếp các chữ số bằng nhau được thay thế bằng số lượng chữ số trong đoạn đó và tiếp theo là chữ số đó. Quá trình mã hoá được lặp lại với số vừa nhận được.

-  `113` -> `2113` -> `122113` -> `11222113` -> `21322113` -> ...

Cho một số tự nhiên N có không quá 200 chữ số. Số N là một trong các số sinh ra từ số M nào đó trong cách mã hoá trên. Biết rằng số M không là kết quả mã hoá của bất kỳ của một số tự nhiên nào (kể cả chính nó), không chứa nhiều hơn 9 chữ số liên tiếp giống nhau và các số sinh ra từ M cho tới khi gặp số N đều không qua 200 chữ số.

## Ví dụ:
- `decodeNaturalNumber(21322113) = 113`

## Đầu vào/Đầu ra:

- **[Thời gian]**
   - 0.5s với C++ 
   - 3s với Java và C#
   - 4s với Python
   - Go và JavaScript
- **[Đầu vào] integer n, m**\
  `(1 ≤ N ≤ 10⁹)`.
- **[Đầu ra] integer** \
  `(1 ≤ M ≤2* 10²)`\
  Số N sau khi được giải mã.
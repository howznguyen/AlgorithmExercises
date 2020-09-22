# Bài Toán Tìm Giá Trị Lớn Thứ Hai Trong Mảng

> Author: [CoderToDev](https://codelearn.io/profile/68439)

## Mô Tả Bài Toán
Cho một mảng số nguyên `a` từng đôi một khác nhau. Bạn hãy tìm vị trí của phần tử lớn thứ nhì của dãy ( vị trí bắt đầu từ 1 )

## Ví dụ:
- Với `a = [1,2,5,4,6]` thì kết quả `secondMax(a) = 3`
    Giải thích:
        - Phần tử **lớn thứ nhì** là **5**
        - Mà **5** ở **vị trí thứ 3**
- Với `a = [3,4,11,8,2,5,6,7,10,9,1]` thì kết quả `secondMax(a) = 9`

## Đầu vào/Đầu ra:

- **[Thời gian]**
   - 0.5s với C++ 
   - 3s với Java và C#
   - 4s với Python, Go và JavaScript
- **[Đầu vào] Array of Integer a**\
    - **1 ≤ a.size() ≤ 10<sup>4</sup>**
    - **| a[i] | ≤ 10<sup>6</sup>**
- **[Đầu ra] Integer** \
    Vị trí của phần tử có giá trị lớn thứ nhì
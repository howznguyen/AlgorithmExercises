# Bài Tập Tìm Tổng Trị Đối Lớn Nhất Trong Mảng

> Author: [hello5423](https://codelearn.io/profile/447355)

## Mô Tả Bài Toán
Cho một mảng `arr` các số nguyên. Hãy tìm tổng trị tuyệt đối lớn nhất của các hoán vị của mảng đã cho bằng cách tìm tổng các trị tuyệt đối giữa hiệu các phần tử kề nhau ở trong một vòng tròn.

## Ví dụ:
- Với `arr = [1, 2, 4, 8].` Đầu ra `maxAbsSum(arr) = 18`.
    **Giải thích:**
        - Nếu để mảng như ban đầu thì tổng các trị tuyệt đối là `|1-2|+|2-4|+|4-8|+|8-1|=14`.
        - Nếu hoán vị mảng thành `[1,8,2,4]` thì tổng các trị tuyệt đối là `|1-8|+|8-2|+|2-4|+|4-1|=18`.

## Đầu vào/Đầu ra:

- **[Thời gian]**
   - 0.5s với C++ 
   - 3s với Java và C#
   - 4s với Python, Go và JavaScript
- **[Đầu vào]Array of Integer**\
  **1 <= arr.size() <=10<sup>5</sup>**
  **| arr[i] |<=10000**
- **[Đầu ra] Integer** \
  Tổng giá trị tuyệt đối lớn nhất
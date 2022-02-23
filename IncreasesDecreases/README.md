# Bài Toán Xác Định Số Tăng Giảm

> Author: [TuanLQ7](https://codelearn.io/profile/3488)

## Mô Tả Bài Toán
Một số được gọi là số tăng giảm nếu các chữ số trong số này tạo thành một dãy số giảm dần (số đứng sau luôn nhỏ hơn hoặc bằng số đứng trước) hoặc dãy số tăng dần (số đứng sau luôn lớn hơn hoặc bằng số đứng trước). Ví dụ:

Các số tăng giảm: 7, 22, 6522, 4667, 9651, 7899,...\
Các số không phải là số tăng giảm: 121, 486, 9878,...\
Cho trước số nguyên n, bạn hãy viết hàm trả về số tăng giảm nhỏ nhất mà lớn hơn hoặc bằng n.

## Ví dụ:

- Với n = 8 thì output là findNumber(n) = 8.
- Với n = 565 thì output là findNumber(n) = 566.

## Đầu vào/Đầu ra
- **[Thời gian]**
    - 0.2 giây với C++
    - 1.2 giây với Java
    - C#, 1.6s với Python, GO và Js
- **[Đầu vào] Integer x,y,z**\
    **1 <= n <= 1000000000**
- **[Đầu ra] Integer** 
# Bài Toán Xác Định Lượng Nước Trong Bình

> Author: [hello5423](https://codelearn.io/profile/447355)

## Mô Tả Bài Toán
Cho 3 chiếc bình đựng được lượng nước tương ứng là `x`, `y`. Có cách nào để xác định được `z` lít bằng cách sử dụng hai bình `x`, `y` (ban đầu không có nước) với các điều kiện như sau:

- Đổ đầy nước vào bình.
- Làm trống 1 bình.
- Đổ nước từ bình này sang bình kia với điều kiện bình được đổ phải đầy nước hoặc bình đổ qua phải hết.

`z` lít này có thể ở một hoặc cả 2 bình. Hãy tìm số bước tối thiểu để tạo được `z` lít này(nếu không thể tạo được thì trả về `-1`).

## Ví dụ:
- Với `x=3, y=5, z=4`. Đầu ra `jugWater(x,y,z) = 6`.
     **Giải thích:** 
     - **B1**: Đổ đầy bình `y`, thể tích bình `y: 5, x: 0`.
     - **B2**: Đổ đầy bình `x` từ bình `y`, thể tích bình `y: 2, x: 3`.
     - **B3**: Làm trống bình `x`, đổ bình từ bình `y` sang bình `x`, thể tích bình `y:0`, thể tích bình `x: 2`( 2 bước).
     - **B4**: Đổ đầy bình `y`, sau đó từ bình `y` đổ sang bình `x`. Lúc đó bình y sẽ có thể tích là `4` (2 bước).

## Đầu vào/Đầu ra:

- **[Thời gian]**
   - 0.5s với C++ 
   - 3s với Java và C#
   - 4s với Python, Go và JavaScript
- **[Đầu vào] Integer x,y,z**\
    **1 ≤ x,y,z ≤ 10<sup>5</sup>**
- **[Đầu ra] Integer** \
  Kết quả yêu cầu đề bài.
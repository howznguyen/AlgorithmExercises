# Bài Tập Chia Kẹo

> Author: [tdkhoa2018](https://codelearn.io/profile/38985)


## Mô Tả Bài Toán
Trong giấc mơ, bạn đang ở một hành tinh nào đó. Trước mặt bạn là đám trẻ xếp thành một hàng, chìa tay sẵn sàng nhận kẹo từ bạn, bạn phải đảm bảo rằng mỗi đứa trẻ phải được nhận ít nhất 1 cây kẹo. Nếu có hai đứa trẻ đứng cạnh nhau nhưng độ tuổi khác nhau thì đứa lớn hơn phải được chia nhiều hơn. Vì xót thương cho cái hầu bao của mình nên bạn phải tính toán kĩ càng làm sao mua **ít kẹo nhất** có thể nhưng vẫn chia đủ cho tất cả.

## Ví dụ:
- Với `age=[4, 6, 5, 6, 7, 2]`, thì `distributeCandy(age)=10`.
Đám trẻ sắp thành hàng có độ tuổi là `[4, 6, 5, 6, 7, 2]`. 
Bạn phải đưa ít nhất số kẹo như sau: `[1, 2, 1, 2, 3, 1]`.
Vậy bạn phải mua ít nhất 10 cây kẹo.

## Đầu vào/Đầu ra:

- **[Thời gian]**
   - 0.5s với C++ 
   - 3s với Java và C#
   - 4s với Python
   - Go và JavaScript
- **[Đầu vào]array integer**\
  `1<=age.size()<=10^5`\
  `1<=age[i]<=10^5`
- **[Đầu ra] integer** \
  Số kẹo ít nhất bạn cho bọn trẻ
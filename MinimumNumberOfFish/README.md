# Bài Toán Cá Lớn Nuốt Cá Bé

## Mô Tả Bài Toán
Trong game cá lớn nuốt cá bé, ban đầu, con cá có trọng lượng là `k`, nó chỉ có khả năng ăn thịt những con có trọng lượng bé hơn hoặc bằng trọng lượng của nó. Sau khi ăn thịt một con cá, trọng lượng của nó sẽ tăng thêm một lượng bằng trọng lượng của con cá mà nó ăn được. Cụ thể, nếu lấy `i` sao cho `w[i] ≤ k` sau đó `k = k + w[i]`.

Quần thể có `n` loại cá có trọng lượng khác nhau với số lượng không giới hạn. Vì khao khát muốn trở thành bá chủ biển cả, cá nhà ta tự hỏi, số lượng cá ít nhất mà nó cần ăn để trở thành bá chủ là bao nhiêu? Nếu không thể hãy trả về `-1`.

Một con cá được coi là bá chủ khi nó có cân nặng lớn hơn tất cả những con cá khác trong quần thể.



## Ví dụ:
- Với `w = [1, 4, 6, 9, 11]` và `k = 2` thì `minimumNumberOfFish(w, k) = 4`.\
Ban đầu k = 2\
Lần 1, ăn con `1`, `k = 3`\
Lần 2, ăn con `1`, `k = 4`\
Lần 3, ăn con `4`, `k = 8`\
Lần 4, ăn con `4`, `k = 12`.

## Đầu vào/Đầu ra:

- **[Thời gian]**
   - 0.5s với C++ 
   - 3s với Java và C#
   - 4s với Python, Go và JavaScript
- **[Đầu vào]Array of integer, Integer**\
    **1 ≤ w.size ≤ 10<sup>5</sup>**\
    **1 ≤ w[i] ≤ 10<sup>9</sup>**\
    **1 ≤ k ≤ 10<sup>9</sup>**
- **[Đầu ra] Long** \
  Số lượng cá ít nhất cần ăn để trở thành bá chủ, nếu không thể trở thành bá chủ, in `-1`.
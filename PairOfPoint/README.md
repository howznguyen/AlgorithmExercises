# Bài Toán Tính Manhattan và Euclidean

> Author: [TuanLQ7](https://codelearn.io/profile/3488)

## Mô Tả Bài Toán
Cho ma trận points dùng để lưu trữ thông tin về n điểm trên hệ trục tọa độ Oxy.

Như bạn đã biết, trên hệ trục tọa độ này có 2 cách tính khoảng cách giữa các điểm là tính theo khoảng cách Manhattan và tính theo khoảng cách Euclidean:

Công thức tính khoảng cách giữa điểm A(x1, y1) và B(x2, y2) theo khoảng cách Manhattan là:

![](https://codelearn.io/Media/Default/Users/TuanLQ7/tuanlq7/equation2.png)

Công thức tính khoảng cách giữa điểm A(x1, y1) và B(x2, y2) theo khoảng cách Euclidean là:

![](https://codelearn.io/Media/Default/Users/TuanLQ7/tuanlq7/1.png)

**Yêu cầu:** bạn hãy đếm số cặp điểm trong ma trận points mà khoảng cách Euclidean và Manhattan giữa 2 điểm này là như nhau. Hay nói cách khác thì bạn cần viết hàm trả về số cặp `i, j (i < j)` sao cho khoảng cách Manhattan và Euclidean giữa điểm có tọa độ `points[i]` và điểm có tọa độ `points[j]` là như nhau.

## Ví dụ:

Với `points = [[1, 1], [3, 1], [3, 3], [3, 4]]` thì output là `countPairOfPoint(points) = 4`.\
Giải thích:\
Các cặp điểm có khoảng cách Manhattan và Euclidean giống nhau là:\
`(1, 1)` và `(3, 1)`.\
`(3, 1)` và `(3, 3)`.\
`(3, 1)` và `(3, 4)`.\
`(3, 3)` và `(3, 4)`.

![](https://codelearn.io/Media/Default/Users/TuanLQ7/tuanlq7/countPairOfPoint.png)

Với `points = [[0, 0], [0, 1], [0, 1], [0, 2], [1, 1]]` thì output là `countPairOfPoint(points) = 8`.\
Lưu ý: các điểm có thể trùng nhau.
## Đầu vào/Đầu ra

[Giới hạn thời gian chạy] 0.5 giây với C++, 3 giây với Java và C#, 4s với Python, GO và Js.\
[Đầu vào] Matrix of Integers points\
`1 <= points.size <= 50000`\
`2 = points[i].size`\
`-1000000 <= points[i][j] <= 1000000`\
[Đầu ra] Integer\

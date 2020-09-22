function countOdd(l, r) {
    if (l % 2 == 0) l++;
    if (r % 2 == 0) r--;
    return ((r - l) / 2) + 1;
}
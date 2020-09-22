function minimumNumberOfFish(w, k) {
    if (k < Math.min.apply(Math, w)) return -1;
    count = 0;
    w = w.sort((a, b) => a - b);
    i = 0;
    max = Math.max.apply(Math, w)
    while (k <= max) {
        while (k >= w[i + 1]) {
            i++;
        }
        if (k >= w[i]) {
            k += w[i];
            count++;
        }

    }
    return count;

}
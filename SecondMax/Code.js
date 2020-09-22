function secondMax(a){
    max = a.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0);
    a[max] = 0;
    return a.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0)+1;
}
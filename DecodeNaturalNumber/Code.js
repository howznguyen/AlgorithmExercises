function decodeNaturalNumber(n) {
    result = n.toString();
    check = 0;
    while (result.length % 2 == 0) {
        if (check == 200) return false;
        let a = "";
        let n_arr = result.toString().slice("");
        for (let i = 0; i < n_arr.length - 1; i += 2) {
            for (let j = 0; j < n_arr[i]; j++) { 
                a = a.concat(n_arr[i + 1]);
            }
        }
        check++;
        result = a;
    }
    return result;
}

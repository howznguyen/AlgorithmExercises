function decodeNaturalNumber(n) {
    result = n.toString();
    check = 0;
    while (result.length % 2 == 0) {
        if (check == 200) return false;
        let a = "";
        let n_arr = result.toString().slice("");
        for (let i = 0; i < n_arr.length - 1; i += 2) {
            let numberLoop = n_arr[i];
            let number = n_arr[i + 1];
            let newNum = "";
            for (let j = 0; j < numberLoop; j++) {
                newNum = newNum.concat(number);
            }
            if (newNum != "") {
                a = a.concat(newNum);
            }
        }
        check++;
        result = a;
    }
    return result;
}
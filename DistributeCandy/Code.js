function distributeCandy(age) {
    let n = age.length;
    let candies = age.map(x => 1);
    for (let i = 1; i < n; i++) {
        if (age[i] == age[i - 1]) continue;
        else if (age[i] > age[i - 1] && candies[i] <= candies[i - 1])
            candies[i] = candies[i - 1] + 1;
        else {
            let j = i - 1;
            while (j >= 0 && age[j] > age[j + 1] && candies[j] <= candies[j + 1]) {
                candies[j] = candies[j + 1] + 1;
                j--;
            }
        }
    }

    return candies.reduce((x, y) => x + y, 0);
}
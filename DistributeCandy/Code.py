import numpy as np


def distributeCandy(age):
    n = len(age)
    candies = np.full(n, 1)
    for i in range(1, n):
        if age[i] == age[i-1]:
            continue
        elif age[i] > age[i - 1] and candies[i] <= candies[i-1]:
            candies[i] = candies[i-1] + 1
        else:
            j = i - 1
            while j >= 0 and age[j] > age[j+1] and candies[j] <= candies[j+1]:
                candies[j] = candies[j + 1] + 1
                j -= 1
    return sum(candies)

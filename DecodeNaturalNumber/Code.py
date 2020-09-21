def decodeNaturalNumber(n):
    decodeNumber = str(n)
    count = 0
    while len(decodeNumber) % 2 == 0:
        newNum = ""
        if count > 200:
            return False
        for i in range(0, len(decodeNumber),2):
            newNum += decodeNumber[i+1] * int(decodeNumber[i])
        decodeNumber = newNum
    return decodeNumber
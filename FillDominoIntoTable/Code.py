import numpy as np

def domino(n,m):
    dem=0
    A =  np.full((n,m),True)
    for i in range(0,len(A)):
        for j in range(0,len(A[0])):
            if A[i][j]:
                if j+1 < len(A[i]):
                    if A[i][j+1]:
                        A[i][j] = A[i][j+1] = False
                        dem+=1
                if i+1 < len(A):
                    if A[i+1][j]:
                        A[i][j] = A[i+1][j] = False
                        dem+=1
                        
    return dem 
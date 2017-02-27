#Accept Input?
#print "Enter two matrixes that are addable."
#x = list(raw_input("Give me a matrix: "))
#y = list(raw_input("Give me another matrix: "))

#3D Matrices
#x = [[[1,2,3],[1,2,3],[1,2,3]],[[1,2,3],[1,2,3],[1,2,3]],[[1,2,3],[1,2,3],[1,2,3]]]
#y = [[[1,2,3],[1,2,3],[1,2,3]],[[1,2,3],[1,2,3],[1,2,3]],[[1,2,3],[1,2,3],[1,2,3]]]

#2D Matrices
x = [[1,2,3],[1,2,3],[1,2,3]]
y = [[1,2,3],[1,2,3],[1,2,3]]
result = []
for i in range(len(x)):
    r = []
    s = x[i]
    t = y[i]
    for j in range(len(x[i])):
        r.append(s[j] + t[j])
    result.append(r)
print result

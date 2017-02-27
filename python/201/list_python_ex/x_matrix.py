x = [[1,4,7],[2,5,8],[3,6,9]]
y = [[9,6,3],[8,5,2],[7,4,1]]

if len(x) != len(y[0]):
    print "The two matrices are not multiply-able."

r = [0]*3

for i in range(len(x)):
    rr = []
    yy = y[i]
    for j in range(len(x)):
        z = 0
        for k in range(len(x)):
            xx = x[k]
            z += xx[j] * yy[k]
        rr.append(z)
    r[i] = rr

print r

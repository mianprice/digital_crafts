x = [[2,-2],[5,3]]
y = [[4,3],[2,2]]
result = [[],[]]
for i in range(len(x)):
    r = [0,0]
    s = x[i]
    t = y[i]
    for j in range(len(x[i])):
        r[j] = s[j] + t[j]
    result[i] = r
print result

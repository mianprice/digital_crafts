l = [1,3,"x",456,"check",1,"x"]
r = []
for i in range(len(l)):
    if (l[i] in r) == False:
        r.append(l[i])
print r

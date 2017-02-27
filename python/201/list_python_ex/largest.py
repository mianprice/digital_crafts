x = [1,2,3,4,5,6]

largest = x[0]

for i in range(len(x)):
    if x[i] > largest:
        largest = x[i]

print largest

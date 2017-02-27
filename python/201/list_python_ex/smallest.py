x = [1,2,-3,4,5,6]

small = x[0]

for i in range(len(x)):
    if small > x[i]:
        small = x[i]

print small

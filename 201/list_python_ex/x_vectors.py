x = [1,2,3,4,5,6,0,-1,-2,-3,-4,-5,-6]
y = x[::-1]
vm = []

for i in range(len(x)):
    vm.append(x[i]*y[i])

print vm

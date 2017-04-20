import random

def binary_search(arr, target):
    start,end = 0,len(arr)-1
    while start <= end:
        mid = start + ((end - start) // 2)
        if arr[mid] == target:
            return mid
        elif arr[mid] > target:
            end = mid
        else:
            start = mid + 1
    return None

for i in xrange(1000):
    new = []
    for j in xrange(10):
        new.append(random.randint(-1000,1000))
    new = sorted(new)
    num = random.randint(0,9)
    print new
    print "%r === %r" % (str(binary_search(new, new[num])),str(new.index(new[num])))
    if binary_search(new, new[num]) != num:
        if new[binary_search(new, new[num])] != new[num]:
            exit()
print
print "No errors"

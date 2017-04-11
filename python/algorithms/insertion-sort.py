from datetime import datetime
startTime = datetime.now()

def insertion_sort(arr):
    for i in xrange(1,len(arr)):
        j = i
        cur = arr[i]
        while j > 0 and cur < arr[j-1]:
            arr[j] = arr[j-1]
            j -= 1
        arr[j] = cur
    return arr

for y in xrange(2000):
    l = range(y,-1,-1)
    insertion_sort(l)

print datetime.now() - startTime

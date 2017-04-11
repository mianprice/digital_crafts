def selection_sort(arr):
    i = 0
    while i < len(arr):
        min_index = i
        for j in xrange(i,len(arr)):
            min_index = j if arr[j] < arr[min_index] else min_index
        place = arr[min_index]
        arr[min_index] = arr[i]
        arr[i] = place
        i += 1
    return arr

for i in xrange(10,21):
    l = range(i,-1,-1)
    print l
    print l[-1]
    print selection_sort(l)
    print

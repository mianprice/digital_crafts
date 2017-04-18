# Given a sorted array, square all the numbers in the array and then sort the array.
arrs = []
for i in range(-10,10,1):
    for j in range(-10,10,1):
        if j > i:
            arrs.append(range(i,j,1))

def square_and_sort(arr):
    m,min_index = abs(arr[0]),0
    for i in xrange(1,len(arr)):
        if abs(arr[i]) < abs(m):
            m,min_index = abs(arr[i]),i
    left,right = min_index,min_index
    result = []
    while len(result) < len(arr):
        result.append(arr[min_index]**2)
        if min_index == 0:
            arr[0] = arr[len(arr)-1] + 1
        if min_index == len(arr) - 1:
            arr[len(arr)-1] = arr[0] - 1
        if left == min_index and left > 0:
            left -= 1
        if right == min_index and right < len(arr) - 1:
            right += 1
        min_index = left if abs(arr[left]) < abs(arr[right]) else right
    return result

for i in arrs:
    print i
    print square_and_sort(i)

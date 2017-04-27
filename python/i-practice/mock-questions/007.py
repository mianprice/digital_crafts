def array_reverse_n(arr, new_arr = None):
	if new_arr == None:
		new_arr = []
	new_arr.append(arr[len(arr)-1-len(new_arr)])
	if len(new_arr) == len(arr):
		return new_arr
	else:
		return array_reverse_n(arr,new_arr)

a = range(1,10)
b = range(0,20)

print a
print array_reverse_n(a)
print b
print array_reverse_n(b)

def array_reverse_n_over_two(arr,ind=0):
	if ind > (len(arr)-1)/2:
		return arr
	else:
		arr[ind],arr[len(arr)-1-ind] = arr[len(arr)-1-ind],arr[ind]
		return array_reverse_n_over_two(arr,ind+1)

print
print a
print array_reverse_n_over_two(a)
print b
print array_reverse_n_over_two(b)

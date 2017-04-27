def linear_search(arr,val,ind=0):
	if arr[ind] == val:
		return ind
	else:
		if ind < len(arr)-1:
			return linear_search(arr,val,ind+1)
		else:
			return -1

a = range(0,100)
print linear_search(a,0)
print linear_search(a,1)
print linear_search(a,2)
print linear_search(a,3)
print linear_search(a,4)
print linear_search(a,5)
print linear_search(a,10)
print linear_search(a,20)
print linear_search(a,25)
print linear_search(a,500)

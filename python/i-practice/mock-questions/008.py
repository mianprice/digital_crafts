import random
def binary_search(arr,val,mini=None,maxi=None):
	if mini == None and maxi == None:
		mini = 0
		maxi = len(arr)
	mid = (mini + ((maxi-mini)/2))
	if mini > maxi or mid > len(arr)-1 or (mini,maxi,mid) == (0,0,0):
		return -1
	if arr[mid] == val:
		return mid
	else:
		if arr[mid] > val:
			maxi = mid
		else:
			mini = mid + 1
		return binary_search(arr,val,mini,maxi)

a = range(0,10) 
print binary_search(a,-1)
print binary_search(a,0)
print binary_search(a,1)
print binary_search(a,2)
print binary_search(a,3)
print binary_search(a,4)
print binary_search(a,5)
print binary_search(a,6)
print binary_search(a,7)
print binary_search(a,8)
print binary_search(a,9)
print binary_search(a,10)

# Define a function that returns the array containing the fibonacci numbers below 1000000

def fib():
	arr,x,y = [],0,1
	while x < 1000000:
		arr,x,y = arr + [x],y,x + y
	return arr

print fib()

def rfib(arr=[0,1]):
	return arr if arr[len(arr)-1] + arr[len(arr)-2] >= 1000000 else rfib(arr + [arr[len(arr)-1] + arr[len(arr)-2]])

print rfib()

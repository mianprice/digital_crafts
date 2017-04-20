# Write a recursive factorial function

def factorial(n):
    return 1 if 1 >= n >= 0 else (n * factorial(n-1) if n > 0 else None)


for i in xrange(-100,100):
    print factorial(i)

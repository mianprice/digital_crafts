from stack import Stack
stocks = [100,65,70,110,80,90,120]
spans = [0]*len(stocks)

stack = Stack()
stack.push(0)
spans[0] = 1
for i in xrange(1,len(stocks)):
    while stack.size() > 0 and stocks[i] >= stocks[stack.peek()]:
        stack.pop()
    spans[i] = i + 1 if stack.isEmpty() else (i-stack.peek())
    stack.push(i)
print spans

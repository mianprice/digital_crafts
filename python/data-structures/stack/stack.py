class Stack:
    def __init__(self):
        self.data = []
        self.num = 0

    def push(self, item):
        self.data = [item] + self.data
        self.num += 1

    def pop(self):
        x = self.data[0]
        self.data = self.data[1:]
        self.num -= 1
        return x

    def peek(self):
        return self.data[0]

    def size(self):
        return self.num

    def isEmpty(self):
        return self.num == 0

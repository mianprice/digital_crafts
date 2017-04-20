class Queue:
    def __init__(self):
        self.items = []
        self.length = 0

    def isEmpty(self):
        return self.length == 0

    def enqueue(self, item):
        self.items = self.items + [item]
        self.length += 1

    def dequeue(self):
        i = self.items[0]
        self.items = self.items[1:]
        self.length -= 1
        return i

    def size(self):
        return self.length

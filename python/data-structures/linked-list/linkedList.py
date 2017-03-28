class Node:
    def __init__(self, value):
        self.value = value
        self.previous = None
        self.next = None

class LinkedList:
    def __init__(self):
        self.first = None
        self.last = None
        self.size = 0

    def queue(self, new_node_value):
        new_node = Node(new_node_value)
        if self.size == 0:
            self.first = new_node
            self.last = new_node
        else:
            self.last.next = new_node
            new_node.previous = self.last
            self.last = new_node
        self.size += 1

    def dequeue(self):
        if self.isEmpty():
            return
        item = self.first
        self.first = item.next
        self.first.previous = None
        self.size -= 1
        return item.value

    def isEmpty(self):
        return self.size == 0

    def length(self):
        return self.size

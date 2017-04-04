class BinaryTreeNode:
    def __init__(self, value):
        self.value = value
        self.leftNode = None
        self.rightNode = None

class BinaryTree:
    def __init__(self):
        self.root = None

    def add(self, value):
        if self.root == None:
            self.root = BinaryTreeNode(value)
        else:
            current = self.root
            setter = False
            while not setter:
                if value >= current.value:
                    if current.rightNode == None:
                        current.rightNode = BinaryTreeNode(value)
                        setter = True
                    else:
                        current = current.rightNode
                else:
                    if current.leftNode == None:
                        current.leftNode = BinaryTreeNode(value)
                        setter = True
                    else:
                        current = current.leftNode

b = BinaryTree()

b.add(10)
print b.root.value

b.add(11)
print b.root.value
print b.root.rightNode.value

b.add(9)
print b.root.value
print b.root.leftNode.value
print b.root.rightNode.value

b.add(15)
print b.root.value
print b.root.leftNode.value
print b.root.rightNode.value
print b.root.rightNode.rightNode.value

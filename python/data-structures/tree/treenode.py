class TreeNode:
    def __init__(self, value):
        self.value = value
        self.children = []

    def __str__(self):
        return "%d => %s" % (self.value, [str(self.children[x]) for x in xrange(len(self.children))])

    def add_child(self,value):
        self.children.append(TreeNode(value))

    def clear_children(self):
        self.children = []


n = TreeNode(10)
n.add_child(10)
n.add_child(5)
n.add_child(1)
print n
print n.children

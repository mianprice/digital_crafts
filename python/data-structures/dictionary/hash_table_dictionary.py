class MyHashTable:
    def __init__(self):
        self.name = "HASHTABLE"

    def red_help(self, initial, next):
        return initial + str(next)

    def binary_maker(self, value):
        y = list("abcdefghijklmnopqrstuvxyz")
        s = ""
        for i in value:
            if i.lower() in y:
                if y.index(i.lower()) % 2 == 0:
                    s += "1"
                else:
                    s += "0"
            else:
                s += "2"
        return s

    def hash(self, value):
        l = self.binary_maker(value)
        return int(l)

hasher = MyHashTable()

print hasher.hash("hello")
print hasher.hash("hello")
print hasher.hash("hello1")
print hasher.hash("hello")

class MyHashTable:
    def __init__(self, which):
        self.name = "HASHTABLE"
        self.alphabet = list("abcdefghijklmnopqrstuvwxyz")
        if which == 1:
            self.hasher = self.hash_one
        elif which == 2:
            self.hasher = self.hash_two
        elif which == 3:
            self.hasher = self.hash_three

    def hash_one(self, value):
        return list(self.alphabet).index(value[0].lower())

    def hash_two(self, value):
        return int(reduce(lambda i,j: str(i) + str(j), list(value)[:3]))

    def hash_three(self, value):
        return int(reduce(lambda i,j: i * j, map(lambda x: self.alphabet.index(x[0].lower()), value.split(" "))))

hashTable1 = MyHashTable(1)
hashTable2 = MyHashTable(2)
hashTable3 = MyHashTable(3)

print "Hash Function 1: first letter index in alphabet array => index"
print hashTable1.hasher("hello")
print hashTable1.hasher("goodbye")
print hashTable1.hasher("hola")
print hashTable1.hasher("xcvfghjk")

print "Hash Function 2: first three numbers => index"
print hashTable2.hasher("111-00-1111")
print hashTable2.hasher("222-22-0000")
print hashTable2.hasher("666-11-2222")
print hashTable2.hasher("999-12-1234")
print hashTable2.hasher("111-12-0000")

print "Hash Function 3: product of first letter of each word as index in alphabet array => index in alphabet array"
print hashTable3.hasher("Tamby Kojak")
print hashTable3.hasher("Bob Alice Foo")
print hashTable3.hasher("Bob Bob Bob")
print hashTable3.hasher("Bob Zack Carol")
print hashTable3.hasher("Ian Price")

class MyHashTable:
    def __init__(self):
        self.name = "HASHTABLE"
        self.buckets = [[] for i in xrange(26)]
        self.alphabet = list("abcdefghijklmnopqrstuvwxyz")
        self.hasher = self.hash_one

    def hash_one(self, value):
        return self.alphabet.index(value[0].lower()) if value[0] in self.alphabet else 23

    def insert(self, value):
        # Inserts value into the correct bucket
        self.buckets[self.hasher(value) - 1].append(value)

    def exists(self, value):
        # Returns true if the calue exists in the bucket
        return value in self.buckets[self.hasher(value) - 1]

hashTable = MyHashTable()


hashTable.insert('hello')
hashTable.insert('xkcd')
hashTable.insert('testing')
hashTable.insert('ian')
hashTable.insert('price')
hashTable.insert('1test')

print hashTable.buckets


print hashTable.exists('hello')
print hashTable.exists('xkcd')
print hashTable.exists('testing')
print hashTable.exists('ian')
print hashTable.exists('price')
print hashTable.exists('test')
print hashTable.exists('goodbye')
print hashTable.exists('michael')

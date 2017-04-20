class ADictionary:
    def __init__(self):
        self.keys = []
        self.elements = []

    def insert_element(self, key, element):
        idx = None
        for i in xrange(len(self.keys)):
            if self.keys[i] == key:
                idx = i
                break
        if idx == None:
            self.keys.append(key)
            self.elements.append(element)
        else:
            self.keys[idx] = key
            self.elements[idx] = element

    def find_element(self, key):
        idx = None
        for i in xrange(len(self.keys)):
            if self.keys[i] == key:
                idx = i
                break
        if idx == None:
            return idx
        else:
            return self.elements[idx]

    def remove_element(self, key):
        idx = None
        for i in xrange(len(self.keys)):
            if self.keys[i] == key:
                idx = i
                break
        if idx == None:
            return idx
        else:
            del self.elements[idx]
            del self.keys[idx]

    def keys(self):
        return self.keys

    def elements(self):
        return self.elements

    def isEmpty(self):
        return self.size() == 0

    def size(self):
        return len(self.keys)

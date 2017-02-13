def isLetter(i):
    letterstring = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if i in letterstring:
        return True
    else:
        return False

def word_histogram(p):
    h = {}
    n = ""
    for char in p:
        if isLetter(char):
            n += char.lower()
        else:
            if len(n) > 0:
                h[n] = h.get(n,0) + 1
                n = ""
    h[n] = h.get(n,0) + 1
    return h

def printHistogram(i):
    for key,value in i.items():
        print "%s :: %d"%(key,value)

x = word_histogram('To be or not to be')
printHistogram(x)

# Using dynamic keys

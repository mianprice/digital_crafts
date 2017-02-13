def letter_histogram(w):
    h = {}
    for c in w:
        h[c] = h.get(c,0) + 1
    return h

def isLetter(i):
    letterstring = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if i in letterstring:
        return True
    else:
        return False

def word_histogram(p):
    h = {}
    n = ""
    if type(p) == str:
        for char in p:
            if isLetter(char):
                n += char.lower()
            else:
                if len(n) > 0:
                    h[n] = h.get(n,0) + 1
                    n = ""
        h[n] = h.get(n,0) + 1
    elif type(p) == list:
        for w in p:
            n = w
            h[n] = h.get(n,0) + 1
    return h

def printHistogram(i):
    for key,value in i.items():
        print "%s :: %d"%(key,value)

def top(dictionary,num):
    sorted_d = ["",0]*num
    for key,value in dictionary.items():
        sort = False
        for x in xrange(1,(num*2)-1,2):
            if value > sorted_d[x] and sort == False:
                sorted_d = sorted_d[0:x-1] + [key,value] + sorted_d[x-1:num*2]
                sort = True
    print "Top %d keys :: Occurrences"%num
    for i in xrange(1,(num*2),2):
        k = sorted_d[i-1]
        v = sorted_d[i]
        print "#%d ==> %s :: %d"%(((i+1)/2),k,v)
    return sorted_d

x = str(raw_input("What do you want a histogram for?\n"))

word_list = []

n = ""
for char in x:
    if isLetter(char):
        n += char.lower()
    else:
        word_list.append(n)
        n = ""
word_list.append(n)

if len(word_list) > 1:
    d = word_histogram(word_list)
else:
    d = letter_histogram(word_list[0])

printHistogram(d)

q = str(raw_input("Do you want to see the keys with the most occurrences? (y/n)"))

if q == "y":
    number_results = int(raw_input("How many keys do you want to see?"))
    top(d,number_results)

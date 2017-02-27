functions3 = __import__('3')
functions4 = __import__('4')

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
    if functions4.isLetter(char):
        n += char.lower()
    else:
        word_list.append(n)
        n = ""
word_list.append(n)

if len(word_list) > 1:
    d = functions4.word_histogram(word_list)
else:
    d = functions3.letter_histogram(word_list[0])

q = str(raw_input("Do you want to see the keys with the most occurrences? (y/n)"))

if q == "y":
    number_results = int(raw_input("How many keys do you want to see?"))
    top(d,number_results)

functions4.printHistogram(d)

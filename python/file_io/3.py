from bonus import *

q1 = str(raw_input("Which file do you want to analyze?\nDon't forget to include the extension (.py, .txt, ...)\n"))

f = open(q1,'r')

contents = f.read()

print "\n\n\nHere comes the histogram for words in %s\n"%q1
d = word_histogram(contents)
printHistogram(d)
print "\n\nHere comes the top 5 most common keys from %s\n"%q1
top(d,5)

print "\n\n\nHere comes the histogram for letters in %s\n"%q1
d = letter_histogram(contents)
printHistogram(d)
print "\n\nHere comes the top 5 most common keys from %s\n"%q1
top(d,5)

print "See you later!"
f.close()

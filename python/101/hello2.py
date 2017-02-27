name = raw_input("WHAT IS YOUR NAME? ")
name = name.upper()
count = 0
for i in name:
    count += 1
print "HELLO, %s!" % name
print "YOUR NAME HAS %d LETTERS IN IT! AWESOME!" % count

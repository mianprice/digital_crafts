s = str(raw_input("Text? "))
for n in range(3):
    if n == 1:
        print "* "+s+" *"
    else:
        print ("*"*(len(s)+4))

count = 0
print "You have %d coins." % count
switch = raw_input("Do you want another? (yes/no)")
while switch == "yes":
    count += 1
    print "You have %d coins." % count
    switch = raw_input("Do you want another? (yes/no)")
print "Bye!"

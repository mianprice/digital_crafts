q = str(raw_input("Which file do you want to open?\n"))

f = open(q)
lines = f.readlines()

for i in lines:
    print i

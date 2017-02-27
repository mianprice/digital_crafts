q = str(raw_input("What do you want your file to be called?\n"))

f = open(q,'w+')

nextBool = True
lcount = 0

while nextBool == True:
    qstring = "What do you want to add to the next line of your file?\n"
    s1 = str(raw_input(qstring))
    f.write(s1 + "\n")
    lcount += 1
    s2 = str(raw_input("Do you want to keep adding to the file?\n(y/n):"))
    if s2 == "n":
        nextBool = False

f.close()

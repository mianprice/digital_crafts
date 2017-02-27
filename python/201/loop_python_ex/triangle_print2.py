x = int(raw_input("Height? "))
for n in range(1,(x+1)):
    num = n
    s = (" " * (x-num))+(("*" * (num-1))+"*"+("*" * (num-1)))+(" " * (x-num))
    print s

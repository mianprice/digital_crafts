w = int(raw_input("Width? "))
h = int(raw_input("Height? "))
for a in range(0,h):
    if a == 0 or a == (h-1):
        print "*" * w
    else:
        print "*" + (" " * (w - 2)) + "*"

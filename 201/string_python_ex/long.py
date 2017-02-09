x = str(raw_input("Enter a word: "))
y = list(x)
z = ""
for i in range(len(y)):
    c = y[i].lower()
    if c == "a" or c == "e" or c == "i" or c == "o" or c == "u":
        if y[i] == y[i-1]:
            z += (y[i]*3)
    z += y[i]
print z

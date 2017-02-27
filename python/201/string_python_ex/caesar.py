number_of_spaces = 0
#function converts list a of characters into list b of integers
def l2n(a):
    b = []
    for i in range(len(a)):
        if a[i].lower() == "a":
            b.append(1-1)
        elif a[i].lower() == "b":
            b.append(2-1)
        elif a[i].lower() == "c":
            b.append(3-1)
        elif a[i].lower() == "d":
            b.append(4-1)
        elif a[i].lower() == "e":
            b.append(5-1)
        elif a[i].lower() == "f":
            b.append(6-1)
        elif a[i].lower() == "g":
            b.append(7-1)
        elif a[i].lower() == "h":
            b.append(8-1)
        elif a[i].lower() == "i":
            b.append(9-1)
        elif a[i].lower() == "j":
            b.append(10-1)
        elif a[i].lower() == "k":
            b.append(11-1)
        elif a[i].lower() == "l":
            b.append(12-1)
        elif a[i].lower() == "m":
            b.append(13-1)
        elif a[i].lower() == "n":
            b.append(14-1)
        elif a[i].lower() == "o":
            b.append(15-1)
        elif a[i].lower() == "p":
            b.append(16-1)
        elif a[i].lower() == "q":
            b.append(17-1)
        elif a[i].lower() == "r":
            b.append(18-1)
        elif a[i].lower() == "s":
            b.append(19-1)
        elif a[i].lower() == "t":
            b.append(20-1)
        elif a[i].lower() == "u":
            b.append(21-1)
        elif a[i].lower() == "v":
            b.append(22-1)
        elif a[i].lower() == "w":
            b.append(23-1)
        elif a[i].lower() == "x":
            b.append(24-1)
        elif a[i].lower() == "y":
            b.append(25-1)
        elif a[i].lower() == "z":
            b.append(26-1)
        else:
            b.append(a[i])
    return b

#function converts list a of integers into list b of characters
def n2l(a):
    n=0
    b = []
    for i in range(len(a)):
        o = a[i]
        if o == " ":
            b.append(" ")
        elif (o%26) == 1-1:
            b.append("a")
        elif (o%26) == 2-1:
            b.append("b")
        elif (o%26) == 3-1:
            b.append("c")
        elif (o%26) == 4-1:
            b.append("d")
        elif (o%26) == 5-1:
            b.append("e")
        elif (o%26) == 6-1:
            b.append("f")
        elif (o%26) == 7-1:
            b.append("g")
        elif (o%26) == 8-1:
            b.append("h")
        elif (o%26) == 9-1:
            b.append("i")
        elif (o%26) == 10-1:
            b.append("j")
        elif (o%26) == 11-1:
            b.append("k")
        elif (o%26) == 12-1:
            b.append("l")
        elif (o%26) == 13-1:
            b.append("m")
        elif (o%26) == 14-1:
            b.append("n")
        elif (o%26) == 15-1:
            b.append("o")
        elif (o%26) == 16-1:
            b.append("p")
        elif (o%26) == 17-1:
            b.append("q")
        elif (o%26) == 18-1:
            b.append("r")
        elif (o%26) == 19-1:
            b.append("s")
        elif (o%26) == 20-1:
            b.append("t")
        elif (o%26) == 21-1:
            b.append("u")
        elif (o%26) == 22-1:
            b.append("v")
        elif (o%26) == 23-1:
            b.append("w")
        elif (o%26) == 24-1:
            b.append("x")
        elif (o%26) == 25-1:
            b.append("y")
        elif (o%26) == 26-1:
            b.append("z")
        else:
            b.append(a[i])
    return b


x = str(raw_input("Do you want to encode or decode? (encode or decode) "))
x1 = str(raw_input("What is the string? "))
x2 = int(raw_input("What is the offset? (integer) "))

y = list(x1)

z = ""

translated = l2n(y)

number_of_spaces = 0

for i in range(len(translated)):
    if translated[i] == " ":
        number_of_spaces += 1
    else:
        if x == "encode":
            translated[i] += x2
        elif x == "decode":
            translated[i] -= x2
            if translated[i] < 0:
                translated[i] += 26

ciphered = n2l(translated)

for i in range(len(ciphered)):
    z += ciphered[i]

print z

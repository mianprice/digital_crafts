import math

n = int(raw_input("What number do you want factored? "))
f = []
sq = int(math.floor(n**0.5) + 1)
for x in range(1,sq):
    if n % x == 0:
        f.append(x)
        if f.count(n/x) == 0:
            f.append(n/x)
f.sort()
print "This is a list of factors for your number: " + str(f)

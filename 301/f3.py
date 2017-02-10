# Odd or Even

import matplotlib.pyplot as plot

def f(x):
    if x % 2 == 0:
        return -1
    else:
        return 1

xs = range(-5,6)
ys = []
for x in xs:
    ys.append(f(x))
plot.bar(xs,ys)
plot.show()

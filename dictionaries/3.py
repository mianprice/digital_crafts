h = {}

def letter_histogram(w):
    for c in w:
        h[c] = h.get(c,0) + 1

letter_histogram('banana')

for key,value in h.items():
    print "%s :: %d"%(key,value)

# Dynamic keys

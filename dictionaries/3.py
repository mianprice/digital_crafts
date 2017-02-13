functions = __import__('4')

def letter_histogram(w):
    h = {}
    for c in w:
        h[c] = h.get(c,0) + 1
    return h

if __name__ == '__main__':

    functions.printHistogram(letter_histogram('banana'))

    # Dynamic keys

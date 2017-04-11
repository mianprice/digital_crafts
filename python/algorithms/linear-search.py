def linear_search(target, unsorted_list):
    for i in xrange(len(unsorted_list)):
        if unsorted_list[i] == target:
            return i
    return -1

l = [4,3,2,10,13]
print linear_search(2,l)

formatter = "%r %r %r %r"

print formatter % (1,2,3,4)
# 1 2 3 4
print formatter % ("one","two","three","four")
# one two three four
print formatter % (True,False,False,True)
# True False False True
print formatter % (formatter,formatter,formatter,formatter)
# "%r %r %r %r" "%r %r %r %r" "%r %r %r %r" "%r %r %r %r"
print formatter % ("I had this thing.","That you could type up right.","But it didn't sing.","So I said goodnight.")
# "I had this thing. That you couls type up right. But it didn't sing. So I said goodnight."

input_string = "1, 23,4,55,,1,,,33,  ,3,,5,103,  74,3"
highest_value = None

print reduce(lambda x,y: x if x > y else y, map(lambda x: 0 if len(x) == 0 else int(x), map(lambda x: x.strip(), input_string.split(","))), 0)

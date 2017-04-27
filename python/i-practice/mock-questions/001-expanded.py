input_string = "1, 23,4,55,,1,,,33,  ,3,,5,103,  74,3"
highest_value = None

current = ""
for i in xrange(len(input_string)):
    if input_string[i] in "1234567890" and i != len(input_string)-1:
        current += input_string[i]
    else:
        if i == len(input_string)-1:
            current += input_string[i]
        if len(current) > 0 and int(current) > highest_value:
            highest_value = int(current)
        current = ""
print highest_value

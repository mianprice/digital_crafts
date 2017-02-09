#Ask for input string
input_string = str(raw_input("What needs to be translated? "))

#input_string = "qwertyuiopsdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnm"
x = list(input_string)
# A->4
# E->3
# G->6
# I->1
# O->0
# S->5
# T->7
r = ""
for i in range(len(x)):
    if x[i].upper() == "A":
        x[i] = "4"
    elif x[i].upper() == "E":
        x[i] = "3"
    elif x[i].upper() == "G":
        x[i] = "6"
    elif x[i].upper() == "I":
        x[i] = "1"
    elif x[i].upper() == "O":
        x[i] = "0"
    elif x[i].upper() == "S":
        x[i] = "5"
    elif x[i].upper() == "T":
        x[i] = "7"
    r += x[i]
print r

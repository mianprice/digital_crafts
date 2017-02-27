subtotal = float(raw_input("Hi there! How much is your bill? "))
tipType = raw_input("How was your service? (good/fair/bad) ")
tip = 0.0
total = 0.0
if tipType == "good":
    tip = subtotal * 0.2
    total = subtotal * 1.2
elif tipType == "fair":
    tip = subtotal * 0.15
    total = subtotal * 1.15
else:
    tip = subtotal * 0.1
    total = subtotal * 1.10

print "Tip amount: $%.2f" % tip
print "Total amount: $%.2f" % total

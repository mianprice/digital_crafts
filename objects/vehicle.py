class Vehicle(object):
    def __init__(self,make,model,year):
        self.make = make
        self.model = model
        self.year = year

myCar = Vehicle("Jeep","Grand Cherokee",2010)

print "Make: %s\nModel: %s\nYear: %s"%(myCar.make,myCar.model,myCar.year)

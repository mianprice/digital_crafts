class Vehicle(object):
    def __init__(self,make,model,year):
        self.make = make
        self.model = model
        self.year = year

    def print_info(self):
        print "Make: %s\nModel: %s\nYear: %s"%(self.make,self.model,self.year)

myCar = Vehicle("Jeep","Grand Cherokee",2010)

myCar.print_info()

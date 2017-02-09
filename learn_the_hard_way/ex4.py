cars = 100
space_in_a_car = 4.0
drivers = 30
passengers = 90
cars_not_driven = cars - drivers
cars_driven = drivers
carpool_capacity = cars_driven * space_in_a_car
average_passengers_per_car = passengers / cars_driven

print "There are %d cars available" % cars
# number of cars = 100
print "There are only %d drivers available" % drivers
# number of drivers = 30
print "There will be %d empty cars today" % cars_not_driven
# number of empty cars = 70
print "We can transport %f people today" % carpool_capacity
# number of people possible to transport = 120.0
print "We have %d to carpool today" % passengers
# number of passengers to transport = 90
print "We need to put about %f in each car" % average_passengers_per_car
# number of passengers per car = 3.0

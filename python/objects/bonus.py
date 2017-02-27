class Person(object):
    def __init__(self, name, email, phone):
        self.name = name
        self.email = email
        self.phone = phone
        self.friends = []
        self.greetings = 0
        self.greeters = []
        self.unique_greeters = 0

    def __repr__(self):
        return 'Person: %s, %s, %s' % (self.name, self.email, self.phone)

    def greet(self, other_person):
        print "Hello %s, I am %s!" % (other_person.name, self.name)
        self.greetings += 1
        if other_person not in self.greeters:
            self.greeters.append(other_person)
            self.unique_greeters += 1

    def unique_greetings(self):
        print len(self.greeters)

    def print_info(self):
        print "Name: %s\nEmail: %s\nPhone: %s"%(self.name,self.email,self.phone)

    def addfriend(self, other_person):
        self.friends.append(other_person)

    def num_friends(self):
        print len(self.friends)

sonny = Person("Sonny", "sonny@hotmail.com", "483-485-4948")
jordan = Person("Jordan", "jordan@aol.com", "495-586-3456")
ian = Person("Ian", "test@gmail.com", "555-555-5555")

jordan.addfriend(sonny)
sonny.addfriend(jordan)

jordan.num_friends()
sonny.num_friends()

sonny.print_info()
jordan.print_info()

print sonny.greetings
print jordan.greetings

for i in xrange(10):
    sonny.greet(jordan)
    if i % 2 == 0:
        jordan.greet(sonny)
        jordan.greet(ian)
    if i % 3 == 0:
        ian.greet(jordan)

print sonny.greetings
print jordan.greetings

print "%r" % sonny
print "%r" % jordan

print ian.unique_greeters
print sonny.unique_greeters
print jordan.unique_greeters

ian.unique_greetings()
sonny.unique_greetings()
jordan.unique_greetings()

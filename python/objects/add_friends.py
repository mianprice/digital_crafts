class Person(object):
    def __init__(self, name, email, phone):
        self.name = name
        self.email = email
        self.phone = phone
        self.friends = []

    def greet(self, other_person):
        print "Hello %s, I am %s!" % (other_person.name, self.name)

    def print_info(self):
        print "Name: %s\nEmail: %s\nPhone: %s"%(self.name,self.email,self.phone)

    def addfriend(self, other_person):
        self.friends.append(other_person)

sonny = Person("Sonny", "sonny@hotmail.com", "483-485-4948")
jordan = Person("Jordan", "jordan@aol.com", "495-586-3456")

jordan.addfriend(sonny)
sonny.addfriend(jordan)

print len(jordan.friends)
print len(sonny.friends)

sonny.print_info()
jordan.print_info()

print "Please respond with an appropriate word."

blank1 = raw_input("Please provide a name: ")
blank2 = raw_input("Please provide the name of a musician or band: ")
blank5 = raw_input("Please provide the name of a venue: ")
blank4 = raw_input("Please provide a type of animal: ")
blank3 = "a"
vowels = ('a','e','i','o','u','A','E','I','O','U')
if blank4.startswith(vowels):
    blank3 = "an"

print "%s's first concert was quite the experience.  Who would have thought that %s would have brought %s %s onto the stage at %s?" % (blank1, blank2, blank3, blank4, blank5)

# Take a string and determine if it's a palindrome

def is_palindrome(str):
	str = ''.join([x.lower() for x in str if x.isalnum()])
	l = len(str)
	bool = True
	for i in xrange(l/2):
		if str[i] != str[l - 1 - i]:
			bool = False
			break
	return bool

def rec_is_palindrome(str,bool=None):
	if (bool == None):
		str = ''.join([x.lower() for x in str if x.isalnum()])
		bool = True
	if (bool):
		if len(str) < 2:
			return True
		elif str[0] == str[len(str)-1]:
			return rec_is_palindrome(str[1:len(str)-1],True)
		else:
			return False
	else:
		return False


strs = ['hello','1991','2005','madam','never odd or even','Never odd or even','Mr. Owl ate my metal worm']	
for s in strs:
	print s
	print is_palindrome(s)
	print rec_is_palindrome(s)

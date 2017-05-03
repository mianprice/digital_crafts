def first_nr_char(s):
	l = list(s)
	d = {}
	for i in l:
		d.setdefault(i,None)
		if d[i] == None:
			d[i] = 1
		else:
			d[i] += 1
	for i in xrange(len(l)):
		if d[s[i]] == 1:
			return i
	return None

def last_nr_char(s):
	l = list(s)
	d = {}
	for i in l:
		d.setdefault(i,None)
		if d[i] == None:
			d[i] = 1
		else:
			d[i] += 1
	for i in xrange(len(l)-1,-1,-1):
		if d[s[i]] == 1:
			return i
	return None


strs = ['hello','balloon','banana','1991','otto','renner','rendering','basketball','everything']
for s in strs:
	print s
	print first_nr_char(s)
	print last_nr_char(s)
	print

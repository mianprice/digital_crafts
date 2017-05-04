# Find intersection of 2 sets of numbers

def intersection(a1,a2):
	result = []
	ref = {}
	for i in a1:
		ref[str(i)] = 999
	for i in a2:
		if ref.get(str(i)) != None:
			result.append(i)
	return result


print intersection([1,2,3,4,5,6,7],[2,4,6,7,8,9])

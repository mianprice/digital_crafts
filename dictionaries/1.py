phonebook_dict = {
  'Alice': '703-493-1834',
  'Bob': '857-384-1234',
  'Elizabeth': '484-584-2923'
}

print phonebook_dict['Alice']
phonebook_dict['Kareem'] = '938-489-1234'
del phonebook_dict['Alice']
phonebook_dict['Bob'] = '968-345-2345'
for key, value in phonebook_dict.items():
    print "%s's phone number is %s"%(key,value)

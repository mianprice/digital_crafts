var phonebookDict = {
  Alice: '703-493-1834',
  Bob: '857-384-1234',
  Elizabeth: '484-584-2923'
};
var personName = 'Elizabeth';

console.log(phonebookDict.Elizabeth);
phonebookDict.Kareem = '939-489-1234';
delete phonebookDict.Alice;
phonebookDict.Bob = '968-345-2345';
console.log(phonebookDict[personName]);
for (var name in phonebookDict) {
  console.log(name + ": " + phonebookDict[name]);
}

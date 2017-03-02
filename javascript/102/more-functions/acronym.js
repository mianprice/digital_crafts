function acronym(arr) {
  return arr.reduce(function(a,b) {
    return a + b[0].toUpperCase();
  },"");
}

console.log(acronym(['very', 'important', 'person']));
console.log(acronym(['national', 'aeronautics', 'space', 'administration']));

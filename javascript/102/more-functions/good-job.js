var people = [
  'Dom',
  'Lyn',
  'Kirk',
  'Autumn',
  'Trista',
  'Jesslyn',
  'Kevin',
  'John',
  'Eli',
  'Juan',
  'Robert',
  'Keyur',
  'Jason',
  'Che',
  'Ben'
];

function goodjob(people) {
  people.forEach(function(person) {
    console.log("Good job, " + person + "!");
  });
}

goodjob(people);

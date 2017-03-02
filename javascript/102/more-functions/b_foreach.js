var arr = [
  { name: 'Bob' },
  { name:'Alice' },
  { name:'Joe' }];

function hello(str) {
  console.log("Hello " + str + "!");
}

function for_each(arr,method) {
  arr.reduce(function(a,b) {
    method(b.name);
  },0);
}

for_each(arr, hello);

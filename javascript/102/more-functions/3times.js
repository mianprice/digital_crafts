function call3Times(fun) {
  fun();
  fun();
  fun();
}

function hello() {
  console.log("Hello, world!");
}

call3Times(hello);

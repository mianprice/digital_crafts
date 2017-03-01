function hello() {
  if (arguments.length > 0) {
    for (var i in arguments) {
      console.log("Hello " + arguments[i] + "!");
    }
  } else {
    console.log("Hello world!");
  }
}

hello("Mustache");
hello();
hello("Toby","Calder");

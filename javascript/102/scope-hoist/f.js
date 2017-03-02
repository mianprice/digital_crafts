function a(x) {
  console.log(x);
  return function b(y) {
    console.log(x,y);
    return function c(z) {
      console.log(x,y,z);
      return function d(x1) {
        console.log(x,y,z,x1);
        return x + y + z + x1;
      };
    };
  };
}

console.log(a(1)(2)(3)(4));

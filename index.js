var animal = 'dog', theFunk = "FUNKY!";

function myAnimal() {
  return animal
}

function yourAnimal() {
  if (animal === 'cat') return animal;
  else return "cat";
}

function add2(n) {
  const two = 2;
  return n + two
}

function funkyFunction(){
  theFunk = funkyFunction;
  return funkyFunction
}
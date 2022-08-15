function hello(name) {
  console.log("hello" + name());
}

function getName() {
  return "Botb";
}

hello(getName);
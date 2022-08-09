function hello(name, age) {
  // let name = "Bob";
  console.log("hello" + name + age);
  return name + age;
}

const returnVal = hello("Bob", 15);
hello("Tom", 12);
hello("John", 50);
hello("Antny");
console.log(returnVal);
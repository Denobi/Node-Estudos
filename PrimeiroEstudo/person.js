class Person{
  constructor(name){
    this.name = name;
  }

  sayMyName(){
    return `My name is this ${this.name}!`;
  }
}

module.exports = {
  Person,
};
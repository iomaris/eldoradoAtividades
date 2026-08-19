class Person {
constructor (name, age, nationality){

this.name = name;
this.age = age;
this.nationality = nationality;
console.log (`${name} tem ${age} anos e é ${nationality}`);






}
}
const ana  =  new Person ("Ana", 25, "brasileira");
const joao = new Person ("João", 30, "português");
console.log (ana.name);
console.log (joao.name);

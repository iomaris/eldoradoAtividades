class Person{
    static species = "Homo sapiens";
    static totalCreated = 0;

    constructor(name, age, nationality){
        this.name = name;
        this.age = age;
        this.nationality = nationality;
        Person.totalCreated++;
    }
}

const ana = new Person("Ana", 25, "Brazilian");
const bruno = new Person ("Bruno", 30, "Portuguese");

console.log(Person.species)
console.log(Person.totalCreated)

class NPC extends Person {
    constructor (name, age, nationality, action){
    super(name, age, nationality);
    this.action = action;
    }
}
class Address{
    constructor(street){
        this.street = street;
    }
}
const carla = new NPC("Carla", 20, "Brazilian", true);

console.log(carla instanceof NPC);
console.log(carla instanceof NPC);
console.log(carla instanceof Address);
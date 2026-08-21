class Person {
    #age;
    constructor (name, age, nationality){
        this.name = name;
        this.#age = age;
        this.nationality = nationality;
    }

get age(){
    return this.#age;
}
set age(newAge){
if (newAge < 0){
    console.log("Idade não poder ser negativa");
    return;
}
this.#age = newAge;

}
}
   /* haveBirthday(){
        this.#age += 1;
        console.log (`${this.name} agora tem ${this.#age} anos`);
    }
*/

const ana =  new Person ("Ana", 25, "brasileira");

/*console.log (ana.age);
ana.age = -5;
ana.age = 26;

class NPC extends Person {
    constructor (name, age, nationality, action){
    super(name, age, nationality);
    this.action = action;
    }
    actions(){
        console.log (`${this.name} está ${this.action}`);
    }
}
const carla = new NPC("Carla", 20, "Brazilian", true);
console.log (carla.age);
carla.actions(); */

damege(); {
    return 1;
}
class Boss extends Person {
    damage(){
        return 220;
    }
}
const Villains = [new NPC ("Carla", 29, "Brazilian"), new Boss("Diego", 40, "Brazilian")];

Villains.forEach(v => console.log(v.damage()));
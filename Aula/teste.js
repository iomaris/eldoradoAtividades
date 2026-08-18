/*let person = {name: "Chiquinho", age: 50, aproved: true};

console.log(person.name);
console.log(person.age);

console.log(person["name"]);

let field = "age";
console.log(person[field]);

person.age = 50;
person.city = "Manaus";
delete person.aproved;

console.log(person);*/

/* foreach
for (let key in person){
    console.log(key, "->", person[key]);
}
let frutis = ["apple", "grape", "banana"];
frutis.forEach(function(frutis, index){
    console.log(index, "->", frutis);
})*/

/* ap
let prices = [10, 20, 30];
let withTax = prices.map(function(price){
    return price * 1.10;
    
});
console.log(withTax);
console.log(prices);
*/
/*
let ages = [15, 22, 30, 12];
let adults = ages.filter(function(age){
    return age >= 18;
})
console.log(adults);
*/

/*
let users = [{id:1, n: "Ana"}, {id: 2, n: "Bruno"}];
let user = users.find(u => u.id === 2);
console.log(user);
*/

let nums = [1, 2, 3, 4, 5];
let total = nums.reduce(function(acc, n ){
    return acc + n;
}, 0);
console.log(total);



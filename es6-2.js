let obj1 = { id: 1, name: 'hello' };
let obj2 = { ...obj1 };
// console.log(obj1, obj2);
obj2.name = 'world';
// console.log(obj1, obj2);
class Animal{
    constructor() {
        this.canWalk = 'Animal can Walk';
    }
}
class Human{
    constructor(name,gender) {
        this.name = name;
        this.gender = gender;
    }
}
// let h1 = new Human('abc', 'male');
// let h2 = new Human('def', 'female');
// console.log(h1, h2);
class Mamal extends Animal{
    constructor() {
        super()
        this.canSleep = 'Mamal can sleep';
    }
}
let m1 = new Mamal();
console.log(m1);
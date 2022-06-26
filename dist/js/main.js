"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let x = 10;
let y = 12;
let firstName = "Welington da Silva Andrade";
let age = 18;
const isAdmin = true;
console.log(typeof firstName, typeof age, isAdmin);
firstName = 'Joao';
console.log(firstName);
const myNumbers = [1, 2, 3, 4];
console.log(myNumbers.push(5));
console.log(myNumbers, myNumbers.length);
let myTuple;
myTuple = [4, 'Welington', ['welington']];
console.log(myTuple);
const user = {
    name: 'Welington',
    age: 21
};
console.log(user);
user.name = 'Carolline de novaes';
user.age = 18;
console.log(user);
let id = "10";
console.log(id);
id = 200;
console.log(id);
const userId = 10;
const productId = '20';
console.log(userId, productId);
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "M\u00E9dio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    name: "Camisa gola V",
    size: Size.G
};
console.log(camisa);
let test;
test = "algumvalor";
test = null;
console.log(test);
function sum(a, b) {
    return a + b;
}
console.log(sum(12, 12));
function sayHelloTo(name) {
    return `Hello ${name}`;
}
console.log(sayHelloTo('welington'));
function logger(msg) {
    console.log(msg);
}
logger('Welington está aprendendo ts');
function greeting(name, greet) {
    if (greet) {
        console.log(`Olá ${greet} ${name}`);
    }
    else {
        console.log(`Olá ${name}`);
    }
}
greeting('José');
greeting('José', 'Pedro');
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1: 21, n2: 22 }));
function multiplyNUmbers(nums) {
    return nums.n1 * nums.n2;
}
const someNumbers = {
    n1: 5,
    n2: 10
};
console.log(multiplyNUmbers(someNumbers));
function doSomething(info) {
    if (typeof info === "number") {
        console.log('o numero é: ' + info);
    }
    else {
        console.log('o boleano é: ' + info);
    }
}
doSomething(25);
doSomething(true);
doSomething(false);
function showArrayItens(array) {
    array.forEach((item) => {
        console.log(`Item:  ${item}`);
    });
}
const a1 = [1, 2, 3, 4];
const a2 = ['a', 'b', 'c'];
showArrayItens(a1);
showArrayItens(a2);
class User {
    name;
    role;
    isApproved;
    constructor(name, role, isApproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
    showUserName() {
        console.log(`O nome do usuário é ${this.name}`);
    }
    getUserRole(permission) {
        if (permission) {
            console.log('SuA PERMISSAO é' + this.role);
            return;
        }
        console.log('Informação restrita');
    }
}
const welington = new User('welington', 'admim', true);
welington.showUserName();
welington.getUserRole(true);
class Car {
    brand;
    wheels;
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrand() {
        console.log('A marca do seu veiculo é: ' + this.brand);
    }
}
const fusca = new Car('W', 4);
fusca.showBrand();
class SuperCar extends Car {
    engine;
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
}
const a4 = new SuperCar("Audi", 4, 2.0);
console.log(a4);
a4.showBrand();
function BaseParamaters() {
    return function (constructor) {
        return class extends constructor {
            id = Math.random();
            created_At = new Date();
        };
    };
}
let Person = class Person {
    name;
    constructor(name) {
        this.name = name;
    }
};
Person = __decorate([
    BaseParamaters()
], Person);
const sam = new Person('Sam');
console.log(sam);

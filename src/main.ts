let x:number = 10;

let y = 12

//y = 'teste'
//nao permitido pq estamos tipando y a um numero, em sua criação através da inferencia.

// Metodo Annotation, é quando escrevemos a tipagem
// let x: number = 12;

//TIpos basicos
let firstName: string = "Welington da Silva Andrade";
let age: number = 18;
const isAdmin: boolean = true;

console.log(typeof firstName,typeof age, isAdmin)


firstName = 'Joao'
console.log(firstName)


//objects -> Array de numeros
const myNumbers: number[] = [1, 2, 3, 4]
console.log(myNumbers.push(5))
console.log(myNumbers, myNumbers.length)


// tuplas

let myTuple: [number, string, string[]]

myTuple = [4, 'Welington', ['welington']]

console.log(myTuple)

//objects literals -> {prop: value}

const user: {name: string, age: number} = {
    name: 'Welington',
    age: 21
}

console.log(user)
user.name = 'Carolline de novaes';
user.age = 18;
console.log(user)


// union type

let id: string | number = "10"
console.log(id)
id = 200;
console.log(id)

//type alias

type myIdType = number | string;
const userId: myIdType = 10;
const productId: myIdType = '20';

console.log(userId, productId)


//enum
// tamanho de roupas()

enum Size {
    P = "Pequeno",
    M = "Médio",
    G = "Grande"
}

const camisa = {
    name: "Camisa gola V",
    size: Size.G
}

console.log(camisa)


//literal types
let test: "algumvalor" | null;
test = "algumvalor"

//teste = "outrovalor"
test = null;
console.log(test)

//funcoes

function sum(a: number, b: number): number {
    return a + b ;
}
console.log(sum(12 ,12))

function sayHelloTo(name: string): string {
    return `Hello ${name}`;
}
console.log(sayHelloTo('welington'))

function logger(msg: string): void {
    console.log(msg)
}
logger('Welington está aprendendo ts')

function greeting(name: string, greet?: string): void {
    if (greet) {
        console.log(`Olá ${greet} ${name}`)
    } else {
        console.log(`Olá ${name}`)
    }
}
greeting('José')
greeting('José', 'Pedro')


// interfaces

interface MathFunctionParams {
    n1: number,
    n2: number
}

function sumNumbers(nums: MathFunctionParams) {
    return nums.n1 + nums.n2
}
console.log(sumNumbers({n1: 21, n2: 22}))

function multiplyNUmbers(nums: MathFunctionParams) {
    return nums.n1 * nums.n2
}

const someNumbers:MathFunctionParams = {
    n1: 5,
    n2: 10
}
console.log(multiplyNUmbers(someNumbers))


//narrowing
//checagem de tipos

function doSomething(info: number | boolean) {
    if (typeof info === "number") {
        console.log('o numero é: ' + info)
    }
    else {
        console.log('o boleano é: ' + info)
    }
}
doSomething(25)
doSomething(true)
doSomething(false)

// generics

function showArrayItens<T>(array: T[]) {
    array.forEach((item) => {
        console.log(`Item:  ${item}`)
    })
}

const a1 = [1,2,3,4];
const a2 = ['a','b','c'];
showArrayItens(a1)
showArrayItens(a2)


// classes

class User {
    name
    role
    isApproved

    constructor(name: string, role: string, isApproved: boolean) {
        this.name = name
        this.role = role
        this.isApproved = isApproved
    }

    showUserName() : void {
        console.log(`O nome do usuário é ${this.name}`)
    }
    getUserRole(permission: boolean): void {
        if (permission) {
            console.log('SuA PERMISSAO é' + this.role)
            return;
        }
        console.log('Informação restrita')
    }
}

const welington = new User('welington', 'admim', true);

welington.showUserName()
welington.getUserRole(true)


// interfaces em classes

interface Ivehicle {
    brand: string
    showBrand(): void
}

class Car implements Ivehicle {
    brand;
    wheels


    constructor(brand: string, wheels: number) {
        this.brand = brand
        this.wheels = wheels
    }

    showBrand() {
        console.log('A marca do seu veiculo é: ' + this.brand)
    }
}

const fusca = new Car('W', 4);

fusca.showBrand();

// heraca

class SuperCar extends Car {
    engine

    constructor(brand: string, wheels: number, engine: number) {
        super(brand, wheels);
        this.engine = engine
    }
}

const a4 = new SuperCar("Audi", 4, 2.0)
console.log(a4)
a4.showBrand()

// decorators
// constructor decorator
function BaseParamaters() {
    return function <T extends  {new (...args: any[]) : {}}>(constructor: T){
        return class extends constructor {
            id = Math.random()
            created_At = new Date();
        }
    }
}
@BaseParamaters()
class Person {
    name
    constructor(name : string) {
        this.name = name
    }
}

const sam = new Person('Sam')
console.log(sam)

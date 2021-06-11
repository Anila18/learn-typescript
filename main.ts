export {}

let message = 'Welcome Back';
console.log(message);

let x=10;
const y =20;


enum Color {Red, Green, Blue}

let c: Color = Color.Blue;

console.log(c);


let randomValue: any = 10;
randomValue = 'Anila is not random';

console.log(randomValue);

interface Person {
    firstName: string;
    lastName: string;
}

function fullName(person: Person){
    console.log(`${person.firstName} ${person.lastName}`)
}

let p = {
    firstName: 'Anila',
    lastName: 'Gogineni'
}

fullName(p)


class Employee {
    employeeName: string;

    constructor(name: string) {
        this.employeeName = name;
    }

    greet(){
        console.log(`Hello ${this.employeeName}`)
    }
}

let emp1 = new Employee('Anila');
console.log(emp1.employeeName);
emp1.greet();

class Manager extends Employee{
    constructor(managerName: string) {
        super(managerName);
    }
    delegateWork(){
        console.log(`Manager delegating tasks`);
    }
}

let m1 = new Manager('Sridevi');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);

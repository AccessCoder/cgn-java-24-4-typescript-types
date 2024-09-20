type Student = {
    id: string
    name: string
    age: number
    calc:(a:number, b:number) => number
    sayHello:() => void
}

type MathSum = (a:number, b:number) => number

const add:MathSum = (a,b) => a+b

const student1:Student = {
    id: "1",
    name: "Max",
    age: 25,
    calc:(a:number,b:number) => a+b,
    sayHello:() => console.log("Hello!")
}

student1.sayHello()
console.log(student1.calc(10, 3))

type Person = {
    socialSecNum: string
    student:Student
}

type Geschlecht = "männlich" | "weiblich" | "Taucher" //Union Types

type PersonStudent = Student & Person //Intersection

let gs:Geschlecht = "weiblich"
interface StudentInterface {
    id: string,
    name: string,
    age: number
}



interface StudentInterface {
    phone: string
}

const student2:StudentInterface = {
    id: "1",
    name: "Max",
    age: 25,
    phone:"0123456789"
}

console.log(student1)
gs = "Currywurst"
console.log(gs)

// 类型断言 as
// const myEl = document.getElementById("my-img") as HTMLImageElement;

class Person {
    
}

class Student extends Person {
    studying() {

    }
}

function sayHello(p: Person ) {
    (p as Student).studying()
}

const stu = new Student()

sayHello(stu)

// 3. 
const message = "Hello"

const num: number = (message as unknown) as number
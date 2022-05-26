
// 1. typeof的类型缩小
type IdType =  number | string

function printId(id: IdType) {
    if ( typeof id === 'string') {
        console.log(id.toUpperCase())
    } else {
        console.log(id)
    }
}

// 2. 平等的类型缩小(=== == !== !=/switch)
type Direction = "left" | "right" | "top" | "bottom"

function printDirection(direction: Direction) {
    // if ( direction === "left") {
    //     console.log(direction)
    // } else {}
    // switch(direction) {
    //     case 'left':
    //         console.log(direction)
    //         break;
        
    // }
}

// 3. instanceof
function printTime( time : string | Date) {
    if ( time instanceof Date ) {
        console.log(time.toUTCString())
    } else {
        console.log(time)
    }
}

class Student {
    studying() {}
}

class Teacher {
    teaching() {}
}

function work(p: Student | Teacher) {
    if ( p instanceof Student ) {
        p.studying()
    } else {
        p.teaching()
    }
}
const stu = new Student()

work (stu)

// 4. in 
type Fish = {
    swimming: () => void
}

type Dog = {
    running: () => void
}

function walk(animal: Fish | Dog) {
    if ( 'swimming' in animal ) {
        animal.swimming()
    } else {
        animal.running()
    }
}

const fish: Fish = {
    swimming: () =>{
        console.log("swimming")
    }
}

walk(fish)
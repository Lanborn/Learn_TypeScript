type Person = {
    name : string,
    friend?: {
        name: string,
        age?: number,
        girlFriend?: {
            name : string,
            age : number,
        }
    }
}

const info: Person = {
    name : 'lan',
    // friend: {
    //     name : 'coder',
    //     // age : 18
    // }
}






// 另一个文件
console.log(info.name)
console.log(info.friend?.name)
console.log(info.friend?.age)
console.log(info.friend!.age)
console.log(info.friend?.girlFriend?.name)

export {}
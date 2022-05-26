// 1. 类型注解
// 2. var/ let /const /var
// 3. string和String的区别
// 4. 类型推导
var name : string = "lan"
let age : number = 18

const height : number = 1.99

// string : Typescript中的字符串类型
// String : JavaScript的字符串包装类的类型
const message : string = "Hello"

// 默认情况下进行赋值，会将赋值的值的类型，作为前面标识符的类型
// 这个过程称之为类型推导/推断

let foo = "string";

export {}


// "Hello" 可以作为类型，叫做字面量类型
const message : "Hello" = "Hello";

// let num: 123 = 123; 
// num = 321;

// 字面量类型的意义，就是必须结合联合类型
type Alignment = 'left' | 'right' | 'center'

let align: Alignment = 'right'
align = 'center' 

export {}
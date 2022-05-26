// 函数的重载： 函数的名称相同，但是参数不同的几个函数，就是函数的重载

type AddType = number

function add (a1: AddType, a2: AddType): number;
function add (a1: string, a2: string): number;

function add ( num1: any, num2: any): any {
    if ( typeof num1 === 'string' && typeof num2 === 'string') {
        return num1.length + num2.length
    }
    return num1 + num2
}

// 在函数重载中，实现函数是不能直接调用
// add ( {}, {})

console.log(add ( 10, 20))
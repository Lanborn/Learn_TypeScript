// function foo(): never {
//     while(true) {

//     }
// }

// function bar(): never {
//     throw new Error()
// }

// 封装一个核心函数
function handleMessage(message: number | string | boolean ) {
    switch ( typeof message ) {
        case 'string':
            console.log( 'string处理方式message' )
            break;
        case 'number':
            console.log('number处理方式message')
            break
        case 'boolean':
            console.log('boolean处理方式message')
        break
        default:
            const check: never = message
    }
}

handleMessage("abc")
handleMessage(123)

// 张三
handleMessage(true)
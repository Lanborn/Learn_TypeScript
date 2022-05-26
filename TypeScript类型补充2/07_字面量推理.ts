const info = {
    name : 'lan',
    age : 18
}

info.name = 'kobel'

type Method = 'GET' | 'POST'
function request(url: string, methods: Method) {}

// type Request = {
//     url : string,
//     method: Method
// }  // 推荐

const options = {
    url : 'https://www.coderLan.org/abc',
    method: 'POST'
} as const

request(options.url,options.method)

export {}
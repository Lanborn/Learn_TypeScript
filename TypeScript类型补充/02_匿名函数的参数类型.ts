function foo ( message: string) {

}

const names = ['abc', 'cba', 'nba']
// item根据上下文的环境推导出来的，这个时候可以不添加的类型注解
// 上下文中的函数：可以不添加类型注解
names.forEach((item) => {
    console.log(item.split(""))
})

export {}
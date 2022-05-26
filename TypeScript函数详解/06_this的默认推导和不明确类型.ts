// this是可以被推导出来 info对象（ts推到出来的）
type ThisType = {name: String}
function eating(this: ThisType, message: string) {
    console.log(this.name + ' eating', message)
}

const info = {
    name : 'lan',
    eating: eating
}

// 隐式绑定
info.eating("hahaha")
// 显示绑定
eating.call({name : 'qwe'}, "hehehe")
eating.apply({name: 'lk'}, ["123"])

export {}
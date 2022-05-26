// 定义类型别名 (type alias)

type IDType = string | number | boolean
type PointType = {
    x : number, 
    y : number, 
    z? : number
}


function printId(id : IDType) {
    console.log(id);
}

function printPoint(pt : PointType) {

}

export {}

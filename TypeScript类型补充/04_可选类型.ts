
// Point : x/y -> 对象类型
function printPoint(point : {x: number, y: number, z?: number}) {
    console.log(point.x);
    
}
printPoint({x: 123, y: 321});

export {}
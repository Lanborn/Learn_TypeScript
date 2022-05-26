function calc(n1: number ,n2: number, fn: (num1: number, num2: number) => number) {
    return fn(n1, n2)
}

console.log(calc(20,30, (a1,a2)=>{
    return a1 + a2;
}));


console.log(calc(1, 2, (q1, q2) => {
    return q1 * q2;
}));

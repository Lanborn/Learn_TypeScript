function printId( id : number | string ){
    console.log(id);
    // narrow : 缩小
    if ( typeof id === 'string' ) {
        console.log(id.toUpperCase()) 
    }else{
        console.log(id);
    }
}

printId(123)
printId('123')

export {}
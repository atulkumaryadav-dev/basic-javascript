//callback function ek aisha function hota hai jo
// ek function ke ander pass hota Hai.


function product(a,b,c){
    return a*b*c;
}

function fun(x,y){

    let a = x(2,4,6);
       console.log(a-y);
       
}

fun(product,7);

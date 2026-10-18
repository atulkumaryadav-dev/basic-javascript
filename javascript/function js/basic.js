function OnetoN(n){

    for(let i =0;i<n;i++){
        console.log(i);
    }
    console.log();
}

OnetoN(10);
OnetoN(5);

function equ(a,b){
    return Math.abs(a*a*a) + Math.abs(b*b*b);
}

console.log(equ(2,4));

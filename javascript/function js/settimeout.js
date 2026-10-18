//print 1 to 10 but with delay of 1sec after each number get printed..............


for(let i=1;i<=10;i++){
      
    setTimeout(function(){
        console.log(i);
    },i*1000)
}



// function hello() {

//     console.log("hello");
// }

// function mello() {

//     console.log("mello");
// }

// setTimeout(function () {

//     console.log("hello");
// }, 2 * 1000);
// setTimeout(mello, 5 * 1000);
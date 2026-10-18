// let x = document.querySelector("h2");
// x.style.fontFamily="Gill Sans";
// x.style.color="blue";
// setTimeout(function(){
//     x.innerHTML="Atul";
// },2*1000);




// let y = document.querySelector("h1");
// y.style.backgroundColor="yellow";
// setTimeout(function(){
//     y.innerHTML="aacha modih ji";
// },4*1000);



let x = document.getElementById("bada")
x.addEventListener("click",function(){
    x.style.color="yellow";
    x.style.backgroundColor="red";
})

x.addEventListener("mouseleave",function(){
    x.style.color="black";
x.style.backgroundColor="white";
})




let y = document.getElementById("mini");
y.addEventListener("mousemove",function(){
    y.style.backgroundColor="orange";
    y.style.color="white";
})


y.addEventListener("mouseleave",function(){
    y.style.backgroundColor="white";
    y.style.color="black";
})



// let z = document.getElementById("ninja");
// z.addEventListener("click",function(){
//     x.style.backgroundColor="olive";
//     x.style.color="white";
//     x.innerHTML="Atul yadav";
// })

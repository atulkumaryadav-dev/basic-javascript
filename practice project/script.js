//first box.....................................

let x = document.getElementById("s1");
x.style.backgroundColor = "white";
x.addEventListener("mouseenter", function () {
    // x.style.backgroundColor="red";
    let r = Math.floor(Math.random() * 100);
    s1.innerHTML = `<h1>${r}</h>`;
})

x.addEventListener("mouseleave", function () {
    // x.style.backgroundColor="white";
    x.innerHTML = "<h1>1</h1>";
})


//second box......................................

let y = document.getElementById("s2");
let clr = "green";
y.addEventListener("mouseenter", function () {

    if (clr == "green") {
        y.style.backgroundColor = "green";
        clr = "blue";
    }

    else if (clr == "blue") {
        y.style.backgroundColor = "blue";
        clr = "red";
    }

    else {
        y.style.backgroundColor = "red";
        clr = "green";
    }
})

y.addEventListener("mouseleave", function () {
    y.style.backgroundColor = "white";
})


//third box................random color..........

let z = document.getElementById("s3");
z.addEventListener("mouseenter", function () {
    let r1 = Math.floor(Math.random() * 250);
    let r2 = Math.floor(Math.random() * 250);
    let r3 = Math.floor(Math.random() * 250);
    z.style.backgroundColor = `rgb(${r1}, ${r2}, ${r3})`;

})

z.addEventListener("mouseleave", function () {
    z.style.backgroundColor = "white";
})


//fourth box.............................

let w = document.getElementById("s4");
w.addEventListener("click", function () {
    // x.style.backgroundColor="red";
    //  y.style.backgroundColor="lightgreen";
    //   z.style.backgroundColor="blue";
    //   s4.innerHTML="Controller";
    let r1 = Math.floor(Math.random() * 250);
    let r2 = Math.floor(Math.random() * 250);
    let r3 = Math.floor(Math.random() * 250);
    x.style.backgroundColor = `rgb(${r1}, 255, 255)`;
    y.style.backgroundColor = `rgb(255, ${r2}, 255)`;
    z.style.backgroundColor = `rgb(255, 255, ${r3})`;
    s4.innerHTML = "<h1>4</h1>";

})

w.addEventListener("mouseleave", function () {
    w.style.backgroundColor = "white";
     x.style.backgroundColor = "white";
      y.style.backgroundColor = "white";
       z.style.backgroundColor = "white";
})



let main = document.getElementById("main");
let crsr = document.getElementById("cursor");
main.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x +"px";
    crsr.style.top=dets.y +"px";
});
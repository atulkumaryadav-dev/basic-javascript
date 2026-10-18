var main = document.getElementById("main");
let s = "";

let arr = [
    "https://i.pinimg.com/736x/5b/72/bf/5b72bf90765b31b27487164c5333abd5.jpg",

    "https://i.pinimg.com/736x/81/c5/80/81c580a2ab9079eb51443cd768fd6ed3.jpg",

    "https://i.pinimg.com/736x/eb/22/7f/eb227fdea9d8405efe7de6d932e9b168.jpg",

    "https://i.pinimg.com/736x/30/43/e5/3043e5778c1912e63ac8c6f9bf57bd17.jpg",

    "https://i.pinimg.com/736x/18/60/c5/1860c5a7cc3ce9a1a9dc4452c871bd7a.jpg",


    "https://i.pinimg.com/736x/59/cc/dc/59ccdc693553429d33859f79271f35f2.jpg",

    "https://i.pinimg.com/736x/57/58/60/5758600b863178d7e09a43134ca90b0d.jpg",

    "https://i.pinimg.com/736x/37/e4/94/37e49462088596fe44ac85ebd7732c15.jpg",

    "https://i.pinimg.com/736x/5c/3a/c8/5c3ac83b5747b3cfee953c04d07fabb8.jpg"]


for (let i = 0; i <= 64; i++) {

    let r = Math.floor(Math.random() * 9);
    s += `<div class="card">

 <img src=${arr[r]}>
 
 </div>`;



    main.innerHTML = s;
}








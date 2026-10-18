//MAP FILTER REDUCE................

let arr = [1,2,4,6,7,8];
console.log(arr);

// let brr=[];

// for(const ele of arr){
//     brr.push(ele*2);
// }
// console.log(brr);

let brr=arr.map((ele)=>{
    return ele*ele;
});

console.log(brr);
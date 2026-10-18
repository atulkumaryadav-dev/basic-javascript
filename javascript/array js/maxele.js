let arr=[10,20,30,99,5,11];

//let max=arr[0];
let min=arr[0];

for(let i =0;i<arr.length;i++){
    if(arr[i]<min){
        min=arr[i];
    } 
}
 console.log("the minimum ele is : "+min);
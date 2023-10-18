//Practice Set Questions on Arrays
//Problem-1
// let arr=[1,18,25,45,63,93];
// let a=prompt("Enter the nmber to add in the array:");
// a=Number.parseInt(a);
// arr.push(a);
// console.log(arr);
//Problem-2
// let arr=[1,18,25,45,63,93];
// let a;
// do{
//    a=prompt("Enter the nmber to add in the array:");
//    a=Number.parseInt(a);
//    arr.push(a);
// }while(a!=0);
// console.log(arr);
//Problem-3
// let arr=[10,18,25,45,630,93,200];
// let n=arr.filter((num)=>{
//   return num%10==0
// })
// console.log(n);

//Problem-4
// let num=[1,3,5,7,9,11];
// let a=num.map((value)=>{
//   console.log("Square of"+" "+value+":"+(value*value));
// })
//Problem-5
// let arr=[1,2,3,4,5,6,7,8,9,10];
// let n=arr.reduce((x1,x2)=>{
//    return x1*x2;
// })
// console.log("Factorial:"+n);

//for loops
// let num=[1,3,5,7,9,11];
// for(let i=0;i<num.length;i++){
//   console.log(num[i]);
// }
//for...of loop
// let num=[1,3,5,7,9,11];
// for(let i of num){
//   console.log(i**2);
// }
//for..in loop
// let num=[1,3,5,7,9,11];
// for(let i in num){
//   console.log(num[i]);
// }

//Methods in arrays
//1.Array.from(parameter)=>used to create an array from any other object
// let str="Replit";
// let arr=Array.from(str);
// console.log(arr);
//2.reverse
// let num1=[1,7,8,9,10];
// let a=num1.reverse();
// console.log(a);
//3.splice
// let num=[1,3,5,7,9,11];
// console.log(num.splice(3,2,100,101,105),num);
//4.slice
// let num=[1,3,5,7,9,11];
// console.log(num.slice(3,5),num);
//5.sort
let num=[8970,1,3,5,7,9,1,2,264];
console.log(num.sort());
let compare=(a,b)=>{
  return b-a;
}
console.log(num.sort(compare));
//6.join
// let num=[1,3,5,7,9,11];
// console.log(num.join("45"),num);

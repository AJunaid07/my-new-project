//program to add first n natural numbers n
const prompt=require("prompt-sync")(); //initialising the promt as const so that it can load our input 
let sum = 0
console.log("Enter the value of n");
let n=prompt(">>")
n = Number.parseInt(n)
for(let i=0;i<=n;++i)
{
    sum=sum+i //we can also use sum+=i
}
console.log("Sum of first ",+n+ " Natural number is :",+sum)
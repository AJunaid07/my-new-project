//program to add first n natural numbers n
const prompt=require("prompt-sync")(); //initialising the promt as const so that it can load our input
let fact=1;
console.log("Enter the value of n: ")
let n=prompt(">>")
n = Number.parseInt(n)
for(let i=1;i<=n;++i)
{
    fact=fact*i //we can also use fact=fact * i;
}
console.log("Factorial of ",+n+ "! is :",+fact)

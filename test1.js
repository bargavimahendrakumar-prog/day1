//given <<2 num N and M
//N=9
//M=2
//check condition >> output is odd if sum =N+M
//                >> output is even if sum =N-M


//using let variable 
let N=9;
let M=2;
// find sum value 1st
console.log("strat")
let sum=N+M;
console.log(N,"+",M,"=",sum)
console.log("--------------")
console.log(sum)

// check the condition 1
if(sum==11){
    console.log("print sum is odd")// if flase
}
else{
    console.log("print sum is even")
}
 console.log("  ----------------         ")
// check the condition 2
// learend in online 
// sum % 2
//is remainder is 0<< even
//                1<< odd 
if(sum % 2 == 0){
    console.log("print sum is odd")// if flase
   
}
else{
    console.log("print sum is even")
}
 console.log("  ----------------         ")
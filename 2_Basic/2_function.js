function myFunction(a, b){
 let add = a+b;
 let sub = a-b;
 return { add, sub}
}

let res  = myFunction(10, 5)
console.log(res.add)
console.log(res.sub)
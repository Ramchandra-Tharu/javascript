let str1 = "Sirzan"
let str2 = "Chaudhary"
// string operation


// to find the length of string 
console.log(str1.length) 
console.log(str2.length)

console.log(str2.toUpperCase())
console.log(str2.toLocaleLowerCase())

// Accessing character of string
console.log(str1.charAt(3)) //  S 0, i 1, r 2, z  = 3, 
console.log(str1.charAt(0))  // 0 = S
console.log(str2.charAt(5))

// Extracting characters
 console.log(str1.slice(0,3)) // output will Sir
 console.log(str2.substring(3,9)) // udhary form str2 

 let str3 = "hello Ram"
 console.log(str3.replace("Ram", "Sirzan")) // output will be hello Sirzan

 let str4 = "banana banana banana banana"
 console.log(str4.replaceAll("banana", "apple")) // output will be = apple apple apple apple

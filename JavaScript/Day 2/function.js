// console.log("Good Morning!");

//Function Declaration (OR FUNCTION CREATION!)
// function greet(name, age, city){
//     console.log("Good Morning Mr. " + name + ", you are from " + city + " and your age is - " + age + ". Am I right with the details?")
//     console.log(name)
//     console.log(age)
//     console.log(city)
// }
// //Function Invkoing (OR FUNCTION CALLING!)
// greet("John Appleseed!", 29, "New York")

//Sum of 2 numbers -- Function 

// function sumOf2nos(a,b,c,d,e,f,g,h,i,j){
//     // let a = 15;
//     // let b = 25;
//     res = a+b+c+d+e+f+g+h;
//     console.log("The sum of a,b,c,d,e,f,g and h is: " + res)
//     console.log(i)
//     console.log(j)

//     return res;
// }

// let x = sumOf2nos(10,20,30,40,true,50,60,90)
// console.log(x);


//Product of 2 numbers -- Function

// function productOf2Nos(a,b){
//     let prod = a*b;
//     // console.log(prod)
//     return prod;
// }
// let x = productOf2Nos(20,21)
// console.log(x)

//Function for division!

// function div2Nos(a,b){
//     let quotient = a/b;
//     return quotient;
// }
// let c = div2Nos(1,0)
// console.log("The divided value is: "+c)

// Function to "try returning multiple stuff!"
// function calculate(a,b){
//     let sum = a+b
//     let sub = a-b
//     let mul = a*b
//     let div = a/b
//     console.log("Sum = " +sum)
//     console.log("Difference = "+sub)
//     console.log("Product = "+mul)
//     console.log("Quotient = "+div)
//     return [sum,sub,mul,div]
//     //A FUNCTION CAN CONTAIN ONLY A SINGLE RETURN STATEMENT!!

// }
// let op = calculate(10,10)
// console.log(op)
// let x = calculate
// console.log(x)
// console.log(typeof x)

// function greet(){
//     console.log("Good Morning!!")
// }
// greet()
// //HERE, THE FUNCTION IS "STORED IN THE VARIABLE 'fn'" AND, IT IS CRUCIAL THAT IT IS "NOT CALLED" AND SO, THE TYPE OF THAT VARIABLE 'fn' IS A FUNCTION!!!!
// let fn = greet
// console.log(fn);
// console.log(typeof fn)

// let add = function(a,b){
//     console.log(10 + 25);
// }
// console.log(add)
// add() //THESE FIRST CLASS FUNCTIONS, MUST BE CALLED ONLY WITH THE VARIABLE NAMES! "NOT WITH FUNCTION NAMES!"
// // sum() //IT IS OF NO USE, SO IT IS POSSIBLE TO REMOVE THE DAMN THING ALSO! (CHECK THE FUNCTION CREATION STATEMENT!)

// let sub = function(){
//     console.log(10-20)
// }
// sub()

// function largestOf3Nos(a,b,c){
//     if(a>b && a>c){
//         return a;
//     }
//     else if(b>a && b>c){
//         return b
//     }
//     else{
//         return c
//     }
// }
// let x = largestOf3Nos(10,20,30)
// console.log(x)

//Call by value or Call by function - Example!
// let sum = function (a,b){
//     console.log(a+b)
// }

// let calculate = function(a,b,addition){
//     console.log(a)
//     console.log(b)
//     console.log(addition)
//     addition(a,b)
// }
// calculate(10,20,sum)

document.writeln("HELLO, WORLD")

// let sum = function (a,b){
//     console.log(a+b)
// }
// let sub = function (a,b){
//     console.log(a-b)
// }
// let mul = function (a,b){
//     console.log(a*b)
// }
// let div = function (a,b){
//     console.log(a/b)
// }
// let mod = function (a,b){
//     console.log(a%b)
// }

// let calculate = function(x,y,operation){
//     console.log(x);
//     console.log(y);
//     console.log(operation);
//     operation(x,y)
// }
// calculate(100,200,sum)
// calculate(100,200,sub)
// calculate(100,200,mul)
// calculate(100,200,div)
// calculate(100,200,mod)


//Syntactic Sugar -- Syntax Reduction!
//Arrow Function (Smaller syntax for callback function!)

//Regular function!
// function greeting(){
//     console.log("Hello!")
// }

// //Arrow function!
// let greet = ()=>{
//     console.log("Hola!")
// }

// greet()

// let sum = (c,d)=> c+d
// let op = sum(10,20)
// console.log(op)


// let square = a=> a*a
// let op = square(100)
// console.log(op)

let sum = (a,b)=>a+b
let sub = (a,b)=>a-b
let mul = (a,b)=>a*b
let div = (a,b)=>a/b
let mod = (a,b)=>a%b

let calculate = (x,y,op)=>op(x,y)

console.log(calculate(10,20,sum))
console.log(calculate(10,20,sub))
console.log(calculate(10,20,mul))
console.log(calculate(10,20,div))
console.log(calculate(10,20,mod))
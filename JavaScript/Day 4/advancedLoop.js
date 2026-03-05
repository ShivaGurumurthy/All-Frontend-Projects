// let array = ["Philips","Allen","John","Chris","Smith"]
// let evenArr = []
// for(let i=0;i<array.length;i++){
//     if(array[i]%2==0){
//         evenArr.push(array[i])
//     }
// }
// console.log(evenArr)

//USING A SEPARATE VARIABLE
// let a = (val,index, array)=>{
//     return val%2===0

// }
// let even = array.filter(a)
// console.log(even)

//USING THE SAME FILTER FUNCTION TO BE AS A NESTED FUNCTUON
// let even = array.filter(val=> val % 2===0) //POWERRRRRRR OF ARROW FUNCTION AND JAVASCRIPTTTT! ⚡️
// console.log(even);

// let numsGreaterThan50 = array.filter(val=>val>50)
// console.log(numsGreaterThan50)

// let namesGreaterThan5Char = array.filter(val=>val.length>5)
// console.log(namesGreaterThan5Char)

// const users = [
//     {name:"Alice", age:25},
//     {name:"Bob", age:17},
//     {name:"Charlie", age:19},
// ]
// let objectThatHasAgeGreaterThan18 = users.filter(val=>val.age>18)
// console.log(objectThatHasAgeGreaterThan18)

// let array = ["apple","banana","orange"]
// let sqArray = []
// for(i=0;i<array.length;i++){
//     sqArray.push(array[i]*array[i])
// }
// console.log(sqArray)

// let sqArray = array.map(value=>value*value)
// console.log(sqArray);

// let upperCaseFruitsArray =array.map(val=>val.toUpperCase())
// console.log(upperCaseFruitsArray);

// let lengthOfEveryWord = array.map(val=>val.length)
// console.log(lengthOfEveryWord);


// const users = [
//     {name:"Alice", age:25},
//     {name:"Bob", age:17},
//     {name:"Charlie", age:19},
// ]
// let onlyNameArray = users.map(val=>val.name)
// console.log(onlyNameArray);


// //For Each Loop
// let array = [1,2,3,4,5,6,7,8,9,10]
// array.forEach((val,index,array)=>{
//     console.log(val)
//     console.log(index)
//     console.log(array)
// })

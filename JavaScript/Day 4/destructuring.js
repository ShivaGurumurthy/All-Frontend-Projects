let array = [1,2,3,[10,20,30],4,5,6,7]
//Regualar way... (Destructuring is just a syntactic sugar!)
// let a=arr[0]
// let b=arr[1]
// let d=arr[2]
// let e=arr[3]
// let f=arr[4]
// let g=arr[5]
// let h=arr[6]

// let[a,b,,[p,q,r],e,f,g]=array //DONE!
//If a value is not needed: For example, in "let[a,b,,d,e,f,g]=array", we still need to give the ",," for "c" since we still have to travel till the last value RIGHT???
// console.log(a);
// console.log(b);
// // console.log(c); //If there is no value for "c", defined, HOW THE HECK WILL YOU CONSOLE THE VARIBLE AS OUTPUT!!! THINKKKKKKK!!!!x
// console.log(d);
// console.log(e);
// console.log(f);
// console.log(g);

// console.log(a,b,p,q,r,e,f,g)

// const data = [
//     [1,2,3],
//     [4,5,6],
//     [7,[8,9],10]
// ]
// let [[a,b,c],[d,e,f],[g,[h,i],j]] = data
// console.log(i)




//OBJECTS DESTRUCTURING!
// let person = {
//     name:"John",
//     age:30,
//     isMarried:false,
//     wifeName:null,
//     children:undefined,
//     phoneNumbers: [1234567890,9876543210],
//     address:{
//         streetNo: 40,
//         city:"Texas",
//         country:"United States"
//     }
// }

// let {name,age,wifeName,isMarried,phoneNumbers,children,address,address:{streetNo,city,country}}=person
// console.log(name)
// console.log(age)
// console.log(wifeName)
// console.log(isMarried)
// console.log(phoneNumbers)
// console.log(children)
// console.log(address)
// console.log(streetNo)
// console.log(city)
// console.log(country)


// const student = {
//     name: 'John Doe', 
//     age: 20,
//     address: {
//         city: 'New York',
//         zip: 10001,
//         coordinates: {
//             lat: 40.7128, 
//             lng: -74.0060
//     }
// },
//     courses: ['Math', 'Science', 'History']
// }
// let {address:{coordinates:{lat}},courses:[,b,]}=student
// console.log(lat);
// console.log(b);


//DORM ROOM WORKKKKKKKKKK!!!!
const company = {
    name: 'Tech corp',
    departments: [{
         name: 'Engineering',
         employees: [
            {name: 'Alice', role: 'Developer',},
            {name: 'Bob', role: 'Tester'}]
    },{
name: 'Marketing',
employees:[
    {name: 'Charlie', role: 'Designer'},
    {name: 'Dave', role: 'Content Writer'}]
}]}

let {departments:[{name},{employees:[,{name:b}]}]}=company
console.log(name);
console.log(b);





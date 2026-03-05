let obj={
    name:"John",
    age:30,
    isMarried:false,
    wife:null,
    phoneNumber:[1234567890, 9876543210],
    address:{
        city:"New Jersey",
        country:"United States"
    }
}
console.log(obj)


//JS TO JSON
let jsonData = JSON.stringify(obj)
console.log(jsonData)

//JSON TO JS
let jsData = JSON.parse(jsonData)
console.log(jsData)


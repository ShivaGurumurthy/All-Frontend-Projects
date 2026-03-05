// let obj = {
//     key:value,
//     key:value
// }


// //DOT NOTATION! (".")
// console.log(person.name)
// console.log(person.age)
// console.log(person.city)
// console.log(person.isMarried)
// console.log(person.wifeName)
// console.log(person.children)
// console.log(person.phoneNumbers)
// console.log(person.address)

// //console.log(person.swim) -- When this is done, this will also print "undefined" after executing the function, since there is no return value present in the function.
// //So, to overcome this, we perform: "person.swim()" to execute the function in the correct manner.
// console.log(person.eat())
// console.log(person.sleep())
// console.log(person.work())
// console.log(person.walk())
// console.log(person.speak())
// console.log(person.swim())

// person.eat()
// person.sleep()
// person.work()
// person.walk()
// person.speak()
// person.swim()

//BRACKET NOTATION  ("()")
// console.log(person["name"]) //We use "name" in quotes because the things or the key values are stored as strings only inside the heap of the memory!
// console.log(person["age"])
// console.log(person["city"])
// console.log(person["isMarried"])
// console.log(person["phoneNumber"])
// console.log(person["wifeName"])
// console.log(person["address"])
// console.log(person["address"]["city"])
// console.log(person["address"]["country"])
// console.log(person["eat"]())
// console.log(person["walk"]())
// console.log(person["work"]())
// console.log(person["walk"]())
// console.log(person["speak"]())
// console.log(person["swim"]())

// let key1 = "isMarried"
// console.log(person[key1])

// let person={
//     "First Name":"John",
//     "Age":29,
//     10:"Hello, World!"
// }
// console.log(person["First Name"])
// console.log(person["Age"])
// console.log(person[10])




//Updation of Properties

// let person = {
//         name:"John",
//         age:30,
//         city:"New York",
//         isMarried:false,
//         wifeName:null,
//         children:undefined,
//         phoneNumbers: [1234567890,9876543210],
//         address:{
//             streetNo: 40,
//             city:"Texas",
//             country:"United States"
//         },
    
//         //Function created inside an object is called as a "METHOD"
//         eat:function(){
//             console.log("John is eating!")
    
//         },
//         sleep:function(){
//             console.log("John is sleeping.... 😴")
//         },
//         work:()=>{
//             console.log("John is working... 🖥️")
//         },
//         //Specific way for creating functions "VALID ONLY INSIDE OBJECTS"
//         walk(){
//             console.log("John is walking... 🚶🏻")
//         },
//         speak(){
//             console.log("John is speaking to stakeholders!... 📈")
//         },
//         swim(){
//             console.log("John is swimming!... 🏊🏻 🫧")
//         }
//     }

// person.name="Allen"
// person.age=20
// person.qualifications = "B.E." //NEW VALUES CAN BE CREATED RIGHT HERE!
// console.log(person["qualifications"]);

// delete person.qualifications
// console.log(person["qualifications"]);

// //OBJECT METHODS

// console.log(Object.keys(person))
// console.log(Object.values(person))
// console.log(Object.entries(person))

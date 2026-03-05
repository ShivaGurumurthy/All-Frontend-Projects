//Discussed Topics: toUpperCase, toLowerCase, trim, substring, concat, includes, charAt, indexOf(), split(), slice(), replace()

//Substring()
// let s = "Hello, World!"
// let newStr = s.substring(5,12)
// console.log(newStr)

// let s = "HEY, HOW ARE YOU?!"
// let a = s.toLowerCase().toLocaleUpperCase
// console.log(a)
// console.log(a.substring(5,9))

//Concatenation (+)
// let s1="Hey,"
// let s2="How"
// let s3="are"
// let s4="you?!"
// let s5=" "

// let s6=s1+s5+s2+s5+s3+s5+s4
// console.log(s6)

// let s7=s1.concat(s5,s2,s5,s3,s5,s4)
// console.log(s7)


//includes()
//CASE SENSITIVE!!!
// let str=s1.includes(",")
// console.log(str)


//charAt()
// let st=s1.charAt(1)
// console.log(st)


//indexOf()
// let s=s1.indexOf("C")
// console.log(s); //Returns -1 for no match!


//split() -- Converts into ARRAY!!!
//May be given with a separator, (IF NEEDED!)
// let s1="Good Morning!, How are you?, I hope you're Good!"
// let s=s1.split(" ")
// console.log(s)

//slice() -- Alternate for substring()
// console.log(s1.slice(5,13))

//replace() & replaceAll()
// let newString = s1.replace("Good", "Bad")
// console.log(newString)
// console.log(s1.replaceAll("Good", "Bad"));

//Problem!!!
// let s1="mailtome@icloud.com"
// console.log(s1.replace("icloud.com","ICLOUD.COM"))
// let s2=s1.slice(0,8)
// let s3=s1.slice(8,19).toUpperCase()
// console.log(s2+s3)


//Same Problem -- Using Functions!
// let email = "mail@icloud.com"

// let a = function(email){
//     let b = email.indexOf("@")
//     console.log(b)
//     let c = email.slice(b+1, email.length)
//     console.log(c)
//     let d = c.toUpperCase()
//     return d
// }
// let x = a("HelloWorld@icloud.com")
// console.log(x)

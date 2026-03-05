//Question -- 1 -- "You have a product descritpion, in that check if free exists. If it exists convert it into complimentary."
// let productDescription = "Buy the new Apple iPad and get a free case with it!"
// let complimentaryDescription = productDescription.replaceAll("free", "complimentary")
// console.log(complimentaryDescription)


//Question -- 2 -- "You are building a search feature for a website. Clean the input of extra white spaces, convert it into lower string, replace all hyphens with space and check is word sale if present in it or not."
// let searchQuery = function (query){
//     return query.trim().toLowerCase().replaceAll("-", " ").includes("sale")
// }
// let a = searchQuery("    What does sales in sale mean?      ")
// console.log(a)

//Question -- 3 -- Create a unique identifier from email addres. First three letters of email, a dash, length of email and convert it into capital case
// let uniqueIdentifier = function(email){
//     let a = email.substring(0,3)+"-"+email.length
//     return a.toUpperCase()
// }
// let x = uniqueIdentifier("mail@google.com")
// console.log(x)
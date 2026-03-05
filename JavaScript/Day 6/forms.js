function getData(evt){
    evt.preventDefault()
    console.log("Form submitted!")
    console.log(evt);

    let names = document.querySelector("#name")
    let email = document.getElementById("email")
    let password = document.getElementById("password")


}

// let form = document.querySelector("form")
// form.addEventListener("submit",getData)


// let names = document.querySelector("#name")
// let email = document.getElementById("email")
// let password = document.getElementById("password")

console.log(names);
console.log(email);
console.log(password);


let names = document.querySelector("#name")
let email = document.getElementById("email")
let password = document.getElementById("password")

names.addEventListener("change",(e)=>{
    console.log(e)
    console.log(names.value);
})
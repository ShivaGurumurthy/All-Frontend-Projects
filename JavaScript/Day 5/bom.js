// console.log(window)

// let data = prompt("Enter something!")
// console.log(data);

// let jobConfirmation = confirm("Do you want a job?")
// console.log(jobConfirmation);

// alert("Trespassers will be PROSECUTEDDD!!!")

// console.log(document);//PROPERTY
// console.log(location);//PROPERTY
// console.log(screen);//PROPERTY


//LOCAL STORAGE AND SESSION STORAGE, STORES DATA IN THE FORM OF JSON
//METHODS -- setItem(), getItem(), removeItem(), clear()

localStorage.setItem ("Name","S")
localStorage.setItem ("Age",30)


sessionStorage.setItem("Name", "S")
sessionStorage.setItem("age", 30)

console.log(localStorage.getItem("Name"))
sessionStorage.clear()
localStorage.clear()

function clicked(evt){
    console.log("I'm clicked!");
    console.log(evt);
    
}

function greet(){
    console.log("Good Afternoon Peeps!")
}

let div = document.querySelector("div")
console.dir(div)
div.addEventListener("click",greet) //Higher Order Function
div.addEventListener("click",clicked) //CREATING MULTIPLE EVENT LISTENERS
div.addEventListener("click",()=>{
    console.log("METHOD DIRECTLY WRITTEN ON THE ADD EVENT LISTENER")
})


//ARROW FUNCTIONS, WITH NO FUNC NAME, THAT ARE DECLARED DIRECTLY, CANNOT BE REMOVED DIRECTLY SINCE THEY DON'T HAVE A NAME!!.. SO DECLARE THEM SOMEWHERE AND PASS IT'S VAR NAME AND DELETE LATER!
div.removeEventListener("click",greet)
div.removeEventListener("click",clicked)
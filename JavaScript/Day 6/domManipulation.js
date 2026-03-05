let h1 = document.createElement("h1")
console.log(h1);
h1.innerHTML = "Created a HTML H1 element using JavaScript!!!!!"
h1.setAttribute("class","HeadingClass")
h1.setAttribute("id","HeadingID")
console.log(h1);
let body = document.body.appendChild(h1)


let p = document.createElement("p")
p.innerHTML="Hello, Paragraph Tag!"
p.setAttribute("class","ParaClass")

p.setAttribute("id","ParagraphID")
console.log(p);
let div = document.querySelector("div")
div.appendChild(p)
console.log(div)

p.style.fontSize="32px"
p.style.color="red"
p.style.backgroundColor="yellow"

div.removeChild(p)
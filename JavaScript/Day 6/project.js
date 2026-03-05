let DOMAPI = async()=>{
    try{
    let response = await fetch("https://fakestoreapi.com/products")
    console.log(response);
    let data = await response.json()
    console.log(data)
    display(data)
    }
    catch (e){
        console.log(e);
        
    }
}
DOMAPI()

function display(data){
    console.log(data)
    let body = document.body
    let heading = document.createElement("h1")
    heading.innerHTML = "Products"
    body.appendChild(heading)
    let container = document.createElement("div")
    body.appendChild(container)
    
    data.forEach((value)=>{   //For iterating the data and for creating the divs for presenting the products!
        console.log(value)
        
        //BODY - BG COLOR
        document.body.style.backgroundColor = "#0F172A"
        document.body.style.color = "white"
        
        
        //CONTAINER
        let product = document.createElement("div")
        container.appendChild(product)
        container.style.display="flex"
        container.style.flexWrap="wrap"
        container.style.gap="20px"
        product.style.display = "flex"
        product.style.flexWrap= "wrap"
        

    
        //PRODUCT
        let image = document.createElement("img")
        product.appendChild(image)
        product.style.border="3px solid gray"
        product.style.borderRadius = "15px"
        image.style.display = "flex"
        image.style.justifyContent="center"


        //IMAGE
        image.setAttribute("src",value.image)
        image.setAttribute("height","300px")
        image.setAttribute("width","250px")
        image.setAttribute("title", value.title)
        
        let para = document.createElement("p")
        para.innerHTML = value.title
        para.style.textAlign="center"
        product.appendChild(para)

        let desc = document.createElement("p")
        desc.innerHTML = value.description.length > 100 ? value.description.slice(0,101) + "..." : value.description
        product.appendChild(desc)

        let category = document.createElement("p")
        category.innerHTML = value.category.length > 30 ? value.category.slice(0,30) + "..." : value.category
        product.appendChild(category)

        let price = document.createElement("p")
        price.innerHTML = "$"+value.price
        product.appendChild(price)

        let rate = document.createElement("p")
        rate.innerHTML = value.rating.rate
        rate.setAttribute("title", `${value.rating.count}`)
        product.appendChild(rate)
        
       
    })

}

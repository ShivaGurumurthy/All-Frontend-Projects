let getAPIData = async ()=>{
    try{
    let response =await fetch("https://api.escuelajs.co/api/v1/products")
    console.log(response)
    let data = await response.json()
    console.log(data)
    }
    catch(e){
        console.log(e);
        
    }
}
getAPIData()
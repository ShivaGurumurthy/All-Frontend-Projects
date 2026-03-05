// //Question -- 1 -- SHOPPING CART PRODUCT ADDITION AND REMOVAL SYSTEM

// let cart = []
// function add(cart, item){
//     cart.push(item)
//     console.log(cart);
//     console.log(cart.length)   
// }

// function remove(cart){
//     cart.pop()
//     console.log(cart)
//     console.log(cart.length)
// }

// let updateCart = function(cart, action, item){
//     action(cart, item)
// }
// updateCart(cart, add, "Lappy")


// //Question -- 2 -- VIP TICKETING SYSTEM`
// let queue=[]

// let add = function(queue, customerName, type){
//     if(type==="vip"){
//         queue.unshift(customerName)
//     }
//     else{
//         queue.push(customerName)
//     }
// }
// let remove = function (queue){
//     queue.shift()    
// }
// function manageQueue(queue, action, customerName, type){
//     action(queue, customerName, type)
//     console.log(queue)
// }
// manageQueue(queue, add,"Sijo", "vip")
// manageQueue(queue, add,"Sudaroli", "")
// manageQueue(queue, add,"Sujith", "")
// manageQueue(queue, remove)


//Question -- 3 -- Building a social media application where users have a list of friends. User can view friends in a range, remove specific friends and new friends in their place, reverse the order of friends function → manageFriends(list, action, start, end, friends)
// let friends = ["S", "A", "V"]
// let manageFriends = function (list, action, start, end, newFriends){
//     if(action === "add"){
//         friends.push(newFriends)
//         console.log(friends);
//     }
//     else if(action === "view"){
//         let f = friends.slice(start, end)
//         console.log(f)
//     }
//     else if(action === "remove"){
//         friends.splice(start, end-start)
//         console.log(friends)
//     }
//     else if (action === "reverse"){
//         friends.reverse();
//         console.log(friends)
//     }
//     else{
//         console.log("Invalid.")
//     }
// }
// let v = manageFriends(friends, "view", 1, 4)
// let w = manageFriends(friends, "add", 0, 0 ,"X")
// let x = manageFriends(friends, "remove", 1, 4)
// let y = manageFriends(friends, "replace", 1, 3, "B")
// let z = manageFriends(friends, "reverse")
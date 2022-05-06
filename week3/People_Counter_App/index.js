//document.getElementById("count-el").innerText = increment

let countEl = document.getElementById("count-el")
let count = 0
let username = "Rumman"
let greeting = "Welcome back "
let messageToUser = message + ", " + username + "!"
let welcomeEl = document.getElementById("welcome-el")

welcomeEl.innerText = greeting + username

function increment(){
    count = count + 1
    countEl.innerText = count
    console.log(count)
}
 

function save(){
    console.log(count)
}
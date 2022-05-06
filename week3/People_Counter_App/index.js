//document.getElementById("count-el").innerText = increment

let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

function increment(){
    count += 1
    countEl.textContent = count
}
 

function save(){
    dash = count + " - "
    saveEl.textContent += dash
}
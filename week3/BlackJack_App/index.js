
let firstCard = (Math.random() * 11) + 2
let secondCard = (Math.random() * 11) + 2
let sum = firstCard + secondCard

if(sum <= 20){
    console.log("Do you want to draw a new card?")
}
else if(sum === 21){
    console.log("Congratulations! You've won!")
}
else{
    console.log("You're out of the game :( ")
}
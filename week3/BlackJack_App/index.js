
let firstCard = (Math.random() * 11) + 2
let secondCard = (Math.random() * 11) + 2
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true

if(sum <= 20){
    console.log("Do you want to draw a new card?")
}
else if(sum === 21){
    console.log("Congratulations! You've won!")
    hasBlackJack = true
}
else{
    console.log("You're out of the game :( ")
    isAlive = false
}

 console.log(hasBlackJack)
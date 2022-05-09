
let firstCard = 10//(Math.random() * 11) + 2
let secondCard = 11//(Math.random() * 11) + 2
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

if(sum <= 20){
    message = "Do you want to draw a new card? :)"
    console.log(message)
}
else if(sum === 21){
    message = "Congratulations! You've won!"
    console.log(message)
    hasBlackJack = true
}
else{
    message = "You're out of the game :( "
    console.log(message)
    isAlive = false
}

 console.log(hasBlackJack)
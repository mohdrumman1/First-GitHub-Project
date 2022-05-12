
let cards = []
let sum = 0
let hasBlackJack = true
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
//let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")

function getRandomCard(){
    let random = Math.floor(Math.random() * 13 + 1)
    if(random > 10){
        return 10
    }
    else if(random === 1){
        return 11
    }
    else{
        return random
    }
}

function startGame(){
    let firstCard = getRandomCard() 
    let secondCard = getRandomCard() 
    let cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    let hasBlackJack = false
    let isAlive = true
    renderGame()
}

function renderGame(){

    cardsEl.textContent = "Cards: "
    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
        sumEl.textContent = "Sum: " + sum
    }

    if(sum <= 20){
        message = "Do you want to draw a new card?"
    }
    else if(sum === 21){
        message = "You've got Blackjack"
        hasBlackJack = true
    }
    else{
        message = "You're out of the game"
        isAlive = false
    }

    messageEl.textContent = message
}

function newCard(){
    message = "Drawing a new card..."
    messageEl.textContent = message

    if(isAlive === true && hasBlackJack === false)
    {
        let card = getRandomCard()
        sum += card

        cards.push(card)

        renderGame()
    }
}

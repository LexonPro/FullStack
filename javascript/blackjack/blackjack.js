let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackjack = false
let isAlive  = true
let message = ""

let messageEl = document.getElementById("message-el")

let sumEl = document.querySelector("#sum-el")

let cardsEl =document.querySelector("#cards-el")

function startgame() {

    cardsEl.textContent = "Cards : " + firstCard + " " + secondCard

    sumEl.textContent = "Sum :" + sum

    if (sum <= 20) {
        message = " Do u want to drow a new card "
    }

    else if(sum === 21){
        message = " You have a Blackjack"
        hasBlackjack = true
    }

    else{
        message = " You are out of game"
        isAlive = false
    }

    console.log(message)
}

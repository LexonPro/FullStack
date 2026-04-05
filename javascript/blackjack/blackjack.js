let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""

let player = {
    Name: "Per",
    Chip: 145
}

let playerEl = document.getElementById("player-el")
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

playerEl.textContent = player.Name + " : $ " + player.Chip

function getRandomCard() {
    let random = Math.floor(Math.random() * 13) + 1

    if (random > 10) return 10
    else if (random === 1) return 11
    else return random
}

function startgame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()

    cards = [firstCard, secondCard]
    rendergame()
}

function rendergame() {
    sum = 0
    cardsEl.textContent = "Cards: "

    for (let i = 0; i < cards.length; i++) {
        sum += cards[i]
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum

    if (sum < 21) {
        message = "Do you want to draw a new card?"
    } 
    else if (sum === 21) {
        message = "🎉 Blackjack!"
        hasBlackjack = true
    } 
    else {
        message = "💀 You are out of the game!"
        isAlive = false
    }

    messageEl.textContent = message
}

function newcard() {
    if (isAlive && !hasBlackjack) {
        let card = getRandomCard()
        cards.push(card)
        rendergame()
    }
}
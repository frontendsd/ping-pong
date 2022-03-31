const player1 = document.querySelector('.playerEl1')
const player2 = document.querySelector('.playerEl2')

const playerBtn1 = document.querySelector('.player1')
const playerBtn2 = document.querySelector('.player2')

const selected = document.querySelector('#select')

const reset = document.querySelector('.reset')

scorePlayer1 = 0
scorePlayer2 = 0
let gameLevel = 3
let gameOver = false

playerBtn1.addEventListener('click', ()=> {
    if(!gameOver) {
        scorePlayer1++
        if(gameLevel <= scorePlayer1) {
            gameOver = true
            player1.style.color = "green"
            player2.style.color = "red"
        }
    }
    player1.textContent = scorePlayer1
})


playerBtn2.addEventListener('click', ()=> {
    if(!gameOver) {
        scorePlayer2++
        if(gameLevel <= scorePlayer2) {
            gameOver = true
            player2.style.color = "green"
            player1.style.color = "red"
        }
        player2.textContent = scorePlayer2
    }   
})

selected.addEventListener('change', ()=> {
    let gameValue =+selected.value
    gameLevel = gameValue
})

reset.addEventListener('click', ()=>{
    scorePlayer1 = 0
    scorePlayer2 = 0
    gameLevel = 3
    gameOver = false
    player1.textContent = 0
    player2.textContent = 0
    player1.style.color = ""
    player2.style.color = ""
    window.location.reload()
})


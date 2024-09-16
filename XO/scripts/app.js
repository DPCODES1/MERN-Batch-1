let editedPlayer;
let activePlayer = 0;
let gameBoardLogic = [
    [0,0,0], //0
    [0,0,0], //1
    [0,0,0]  //2
]

let gameIsFinished = false

let currentround = 0;
let players = [
    {
        name:"",
        symbol:"X"
    },
    {
         name:"",
        symbol:"O"
    }
]

const player1EditBtn = document.getElementById("edit-player-1-btn")
const player2EditBtn = document.getElementById("edit-player-2-btn")
const overlayEle = document.getElementById("config-overlay")
const backdrop = document.getElementById("backdrop")
const formCancelBtn = document.getElementById('cancel-btn')
const playerForm = document.getElementById('playerForm')
const startGameBtn = document.getElementById('startgamebtn')
const gameSection = document.getElementById("active-game")
const activePlayerText = document.getElementById("active-player-name")
const gameBoard = document.getElementById("game-board")
const gameOverEle = document.getElementById("game-over")
const winnerName = document.getElementById("winner")

player1EditBtn.addEventListener("click",openPlayerConfigModal)
player2EditBtn.addEventListener("click",openPlayerConfigModal)
backdrop.addEventListener("click",cancelPlayerConfigModal)
formCancelBtn.addEventListener("click",cancelPlayerConfigModal)
playerForm.addEventListener("submit",savePlayerConfig)
startGameBtn.addEventListener("click",startGame)
gameBoard.addEventListener("click",selectGameField)
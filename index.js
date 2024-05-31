//variables
let computer =0, player =0
let election =""
let rock = document.getElementById("rock")
let scissors = document.getElementById("scissors")
let paper = document.getElementById("paper")
let message = document.getElementById("message")
let score_player= document.getElementById("score_player")
let score_computer = document.getElementById("score_computer")
let in_game = document.getElementById("in_game")
let end_game = document.getElementById("end_game")
let message_end = document.getElementById("message_end")
let try_again_button = document.getElementById("try_again")
let emoji_computer = document.getElementById("emoji_computer")
let emoji_player = document.getElementById("emoji_player")
let why_lose_button = document.getElementById("why_lose")
let buttons = document.getElementById("buttons")
let video_dumb =document.getElementById("dumb")
//functions
function computerselection(){
    let list =["rock", "paper","scissors"]
    return list[Math.floor(Math.random()*3)]
}
function playRound(playerSelection,computerSelection){
    playerSelection = playerSelection.toLowerCase()
    if(playerSelection==computerSelection)
    return "It's a tie"

    let list = ["Paper beats Rock","Rock beats Scissors","Scissors beats Paper"]
    
    if(playerSelection=="rock"){
        if(computerSelection=="scissors")
        return "You win! "+list[1];
        else return "You lose! "+list[0]
    }
    if(playerSelection=="paper"){
        if(computerSelection=="rock")
        return "You win! "+list[0]
        else return "You lose! "+list[2]
    }
    if(playerSelection=="scissors"){
        if(computerSelection=="paper")
        return "You win! "+list[2]
        else return "You lose! "+list[1]
    }
}
function game(){
    const playerSelection = election         
    const computerSelection = computerselection()
    let x =playRound(playerSelection, computerSelection)
    emojiDisplay(computerSelection, emoji_computer)
    message.innerHTML = x
    x = x.split(' ')
    if (x[1]=="win!"){player++
        message.style.color="chartreuse"
    }else if(x[1]=="lose!"){
        message.style.color = "red"
        computer++}else message.style.color="white"
    if(player==5||computer==5){  
        in_game.style.display="none"
        end_game.style.display="flex"
        message.innerHTML=""
         if(computer==5){
            message_end.innerHTML="Computer wins the game! You Lose!"
            message_end.style.color = "red"
           buttons.style.justifyContent="space-between"
            why_lose_button.style.display="flex"
        }else{
            message_end.innerHTML = "Player wins the game! You Win!!"
            message_end.style.color = "chartreuse"
        }
        player =0
        computer=0
    }
    score_computer.innerHTML = computer+""
    score_player.innerHTML = player+""
}
function pressingButton(buttonPressed){
    election = buttonPressed
    game()
}
function emojiDisplay(buttonPressed,documentEmoji){
    switch(buttonPressed){
        case "rock":
            documentEmoji.innerHTML = "&#9994;"
            break
        case "paper":
            documentEmoji.innerHTML = "&#9995;" 
            break
        case "scissors":
            documentEmoji.innerHTML ="&#9996;"
            break
        default:
            console.log("hp")
            break
    }
}
//addListeners
why_lose_button.addEventListener("click",function dumb_regular_show(){
    video_dumb.style.display="flex"
})

try_again_button.addEventListener("click",function try_again(){
    end_game.style.display="none"
    in_game.style.display="flex"
    buttons.style.justifyContent="center"
    why_lose_button.style.display="none"
    video_dumb.style.display="none"
})
rock.addEventListener("click",function rocky(){pressingButton("rock")})
scissors.addEventListener("click",function sci(){pressingButton("scissors")})
paper.addEventListener("click",function ppr(){pressingButton("paper")})

scissors.addEventListener("click", function rockEmoji(){emojiDisplay("scissors",emoji_player)})
rock.addEventListener("click", function rockEmoji(){emojiDisplay("rock",emoji_player)})
paper.addEventListener("click", function rockEmoji(){emojiDisplay("paper",emoji_player)})


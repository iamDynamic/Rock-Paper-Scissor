var YourHand = document.getElementById("YourHand")
var OppHand = document.getElementById("OppHand")
var startGame = document.getElementById("startGame")
var rock = document.getElementById("rock")
var paper = document.getElementById("paper")
var siccor = document.getElementById("siccor")
var star1 = document.getElementById("star1")
var star2 = document.getElementById("star2")
var star3 = document.getElementById("star3")
var star4 = document.getElementById("star4")
var star5 = document.getElementById("star5")
var star6 = document.getElementById("star6")

var isStarted = false

function whileloop(){
    if(!isStarted){
        rock.style.display = "none"
        paper.style.display = "none"
        siccor.style.display = "none"
        star1.style.display = "none"
        star2.style.display = "none"
        star3.style.display = "none"
        star4.style.display = "none"
        star5.style.display = "none"
        star6.style.display = "none"
    }
}
whileloop()
 
startGame.addEventListener("click",()=>{
    isStarted = true     
    startGame.style.display = "none"
    rock.style.display = "inline"
paper.style.display = "inline"
siccor.style.display = "inline"
star1.style.display = "inline"
star2.style.display = "inline"
star3.style.display = "inline"
star4.style.display = "inline"
star5.style.display = "inline"
star6.style.display = "inline"
    YourHand.src = ""
    OppHand.src = ""
    rock.addEventListener("click",()=>{
       YourHand.src = "/images/l hand rock.png" 
       siccor.style.display = "none"
       paper.style.display = "none"
       rock.style.opacity = "50%"
       var RobotChoose = [
        "/images/r hand paper.png",
        "/images/r hand rock.png",
        "/images/r hand siccor.png"
       ]
       var randomchoose = Math.floor(Math.random()*RobotChoose.length)
       var choose =  RobotChoose[randomchoose]
       OppHand.src = choose
    })
    paper.addEventListener("click",()=>{
        YourHand.src = "/images/l hand paper.png" 
        siccor.style.display = "none"
       rock.style.display = "none" 
       paper.style.opacity = "50%"
       var RobotChoose = [
        "/images/r hand paper.png",
        "/images/r hand rock.png",
        "/images/r hand siccor.png"
       ]
       var randomchoose = Math.floor(Math.random()*RobotChoose.length)
       var choose =  RobotChoose[randomchoose]
       OppHand.src = choose
    })
     siccor.addEventListener("click",()=>{
        YourHand.src = "/images/l hand siccor.png" 
        siccor.style.display = "none"
       rock.style.display = "none" 
       paper.style.opacity = "50%"
       var RobotChoose = [
        "/images/r hand paper.png",
        "/images/r hand rock.png",
        "/images/r hand siccor.png"
       ]
       var randomchoose = Math.floor(Math.random()*RobotChoose.length)
       var choose =  RobotChoose[randomchoose]
       OppHand.src = choose
     })    
})


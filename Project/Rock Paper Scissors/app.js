let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
    const options = ["rock ","paper","scissors"];
   const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
    //rock ,paper,sciccors
}

const drawGame = () => {
    console.log("game was draw");

}

const playGame = (userChoice) =>{
    console.log("user choice = ",userChoice);
    //genrate computer choice
    const compChoice = genCompChoice();
    console.log("comp choice = ",compChoice);

    if(userChoice === compChoice){
        //draw 
        drawGame();
    }
    else {
        
    }

};

choices.forEach((choice) => {
    
    choice.addEventListener(("click") , () =>{
        const userChoice = choice.getAttribute("id")
    
        playGame(userChoice);
    });

    
});
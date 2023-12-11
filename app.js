let userScore = 0;
let compScore = 0;
let msg = document.querySelector('#msg');
let  userScorePara = document.querySelector('#user-score');
let  compScorePara = document.querySelector('#comp-score');

const choices = document.querySelectorAll('.choice');
const genCompChoice = ()=> {
    const options = ['rock', 'paper', 'scissor'];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}
const drawGame = ()=>{
    msg.innerText = `Draw! ${userChoice} ${compChoice}`;
    msg.style.color = '#fff'

}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
       msg.innerText = `You win! ${userChoice} beats ${compChoice}`;
       msg.style.color = 'green'
       userScore++;
       userScorePara.innerText = userScore;
    //    console.log(userScore)
    }else{
        msg.innerText = `You Lost! ${compChoice} beats ${userChoice}`;
        msg.style.color = 'red';
        compScore++;
        compScorePara.innerText = compScore;

    }
}

const playGame = (userChoice)=>{
    // console.log('user choice = ', userChoice);
    const compChoice = genCompChoice();
    // console.log('comp choice = ', compChoice);
    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === 'rock'){
            //scissor, paper
            userWin = compChoice==="paper" ? false : true;
        }else if(userChoice==='paper'){
            //rock, scissor
            userWin = compChoice==='scissor' ? false : true;
        }else{
            //rock, paper
            userWin = compChoice==='rock' ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }

}


choices.forEach((choice)=>{
    choice.addEventListener('click', ()=>{
        let userChoice = choice.getAttribute('id');
        // console.log('choice was clicked ',userChoice);
        playGame(userChoice);
    });
})
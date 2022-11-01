let cards=[]

let sum = 0
let hasBlackjack=false

let isAlive=false

let message=''

let messageEl=document.getElementById('message-el')

let sumEl=document.getElementById('sum-el');

let cardEl=document.getElementById('card-el');

let player={
    name: 'per',
    chips: 123
}

let playerEl=document.getElementById('player-el');
playerEl.textContent=player.name+': $'+player.chips;

function getRandomCard() {

    let randomNumber =Math.floor(Math.random()*13 +1)
    if(randomNumber >10 ) {
        return 10

    }  else if (randomNumber == 1) {
        return 1

    } else {
        return randomNumber

    }
}


function startGame() {
    isAlive=true
    let firstcard=getRandomCard()
    let secondcard=getRandomCard()

    cards=[firstcard,secondcard]
    sum=firstcard+secondcard

    renderGame()
}

function renderGame() {
    cardEl.textContent='Cards: '

    for(let i=0; i<cards.length;i+=1) {
        cardEl.textContent+=cards[i]+' '
    }

    sumEl.textContent='Sum: '+sum
    if(sum<=20) {
        message='Do you want to draw a new card';

    } else if(sum===21) {
        message='You got the the Blackjack';
        hasBlackjack=true;
    
    } else {
        message='you are out of the game';
        isAlive=false
        
    }
    messageEl.textContent=message;
}

function newGame() {
    if(isAlive === true && hasBlackjack ==false)    {
    let card =getRandomCard();
    sum+=card
    cards.push(card)
    startGame();
    }
}




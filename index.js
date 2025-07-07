const cards = document.querySelectorAll(".card");

const startButton = document.querySelector(".btn");

const helpButton = document.querySelector(".btn2");


let cardOne, cardTwo;

let matchCard = 0 ;

let disableDeck = false;

window.onload = function () {
    shuffleCard();
    helpButton.innerHTML=" Start";
}
function flipcard(e){
    let clickedCard = e.target;
    if(clickedCard!== cardOne && !disableDeck){
        clickedCard.classList.add("flip");
        if(!cardOne){
            return cardOne = clickedCard;
        }else{
    
            cardTwo = clickedCard;
            disableDeck = true;
            let cardOneImg = cardOne.querySelector("img").src,
            cardTwoImg = cardTwo.querySelector("img").src;
            matchCards(cardOneImg, cardTwoImg);
        }
    }
}

function matchCards(img1, img2){
    if (img1 === img2){
        matchCard ++;
        if(matchCard == 8){
            setTimeout(() => {
                return shuffleCard(); 
            }, 1000);
        }
        cardOne.removeEventListener("click", flipcard);
        cardTwo.removeEventListener("click", flipcard);
        cardOne = cardTwo = "";
        return disableDeck = false;
    }
    else{
        
        setTimeout(() => {
            cardOne.classList.add("shake");
            cardTwo.classList.add("shake"); 
        }, 400);
        setTimeout(() => {
            cardOne.classList.remove("shake", "flip");
            cardTwo.classList.remove("shake", "flip"); 
            cardOne = cardTwo = "";
            disableDeck = false;
        }, 1200);
    }
};
function shuffleCard(){
    matchCard = 0;
    cardOne = cardTwo = "";
    let arr = [4, 6, 2, 3, 8, 1, 7, 5, 4, 5, 2, 6, 8, 7, 3, 1];
    arr.sort(() => Math.random() > 0.5 ? 1 : -1);
    
    cards.forEach((card, i) => {
        card.classList.remove("flip");
        let imgTag = card.querySelector("img");
        imgTag.src = 'game-image/img-'+ arr[i] +'.png';
        card.addEventListener("click", flipcard);
    });
}
startButton.addEventListener("click", function(){
    shuffleCard();
    cards.forEach(card => {
        card.classList.add("flip");
        setTimeout(() => {
            card.classList.remove("flip");
        }, 1000);
        card.addEventListener("click", flipcard);
    });
    
})

helpButton.addEventListener("click", function(){
    helpButton.innerHTML=" Help";
    cards.forEach(card => {
        card.classList.add("flip");
        setTimeout(() => {
            card.classList.remove("flip");
        }, 2000);
        card.addEventListener("click", flipcard);
    });
})



let secretNumber = Math.trunc(Math.random()*20)+1;



let score = 20;





document.querySelector('.check').addEventListener('click', function(){
    const guess= Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);


    

    //  When there is no input
    if(!guess){
        document.querySelector('.message').textContent='No Number!';
    }

    // When player wins
    else if (guess===secretNumber){
        document.querySelector('.message').textContent='correct number!';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

    }

    // When guess too high
    else if (guess>secretNumber){
        if(score>1){
             document.querySelector('.message').textContent='Too High!';  
             score--;
             document.querySelector('.score').textContent=score;

        }
        else{
            document.querySelector('.message').textContent='you lost the game!';
            document.querySelector('.score').textContent=0;
        }
         
    }

    // When guess is too low
    else if (guess<secretNumber){
         if(score>1){
             document.querySelector('.message').textContent='Too Low!';  
             score--;
             document.querySelector('.score').textContent=score;
        }
        else{
            document.querySelector('.message').textContent='you lost the game!';
            document.querySelector('.score').textContent=0;
        }      
     }

     document.querySelector('.again').addEventListener('click', function(){
        score = 20;
        secretNumber = Math.trunc(Math.random()*20)+1;
        document.querySelector('.message').textContent='Start guessing...';
        document.querySelector('.number').textContent='?';

        document.querySelector('.number').style.width = '15rem';
        document.querySelector('body').style.backgroundColor = '#222';



        document.querySelector('.guess').value='';




     
     });

});


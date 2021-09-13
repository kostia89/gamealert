function start(){
    
    alert('Welcome to my little game');
    
    let userName = prompt('Please enter your name');
    for (i = 0; userName.length < 1; i++)
    if (userName.length < 1){
        userName = prompt('Please enter your name')
    }
    alert('Hi ' + userName + '! The rules of this game are very simple. I will guess a number from 1 to 1000. You have to guess that number. If your number is greater than mine I will say too much, If your number is less than mine I will say too little');
    let myNumber = Math.round(Math.random( ) * 1000);
    let tri = 1;
    let numberGest = prompt('What number did i guess?');


    // while (numberGest != myNumber){
        
    //     if (numberGest < myNumber){
    //         numberGest = prompt('tri again. is not enough');
    //     }    
    //     if (numberGest > myNumber){
    //         numberGest = prompt('tri again. is too much');
    //     }    
    // };
    for (i = 0; i != numberGest; i++){
        if (numberGest < myNumber){
            numberGest = prompt ('Try again. not enough '+ 'your number ' + numberGest)
            tri = ++tri

        }
        if (numberGest > myNumber){
            numberGest = prompt ("Try again. it's too much "+ 'your number ' + numberGest)
            tri = ++tri
        }
        
    }
    for (i = 0; numberGest.length < 1; i++){
        if (numberGest.length < 1){
            numberGest = prompt ('Try again. is not enough')
            tri = ++tri
        }
    }
    
    alert ('Yes! This is it ' + 'You did ' + tri + 'attempts')
}
const button = document.querySelector('button');

button.addEventListener('click', event => {
    start();
});


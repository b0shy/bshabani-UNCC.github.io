const buttons = document.querySelectorAll('button');

const display = document.querySelector('.display');

buttons.forEach(function(button){
    button.addEventListener('click', calculate);
});

function calculate(event){
    const pressedButton = event.target.value;

    if(pressedButton == '='){

        if(display.value != ''){
            display.value = eval(display.value);
        }
    }
    else if(pressedButton == 'C'){
        display.value = '';
    }
    else{
        display.value += pressedButton;
    }
}

let displayValue = 0;
let displayValueInt = 0;
let displayValueFixed = 0;
let operator = [];
let globalOperator;
let valueCalculated = 0;
let toggle = 1;


const display = document.querySelector('.display');
const btnNumbers = document.querySelectorAll('.number-button');
const btnOperators = document.querySelectorAll('.operator-button');
let btnEnter = document.querySelector('.enter-button');
let btnClear = document.querySelector('.clear-button');

for (let i = 0; i < btnNumbers.length; i++) {
    btnNumbers[i].addEventListener('click', function() {
        if (i === 9) {
            i = -1;
        }
        if (display.textContent !== '') {
            display.textContent = '';
        }
        displayInt = [i + 1].toString();
        display.textContent += displayInt;
        displayValue += displayInt;
        displayValueInt = parseInt(displayValue);
       

    });
}

for (let i = 0; i < btnOperators.length; i++) {
    operator[i] = btnOperators[i].textContent;
    btnOperators[i].addEventListener('click', function() {
        if (valueCalculated !== 0) {
            displayValueFixed = valueCalculated;
        }
        else {
            valueCalculated = displayValueInt;
            
        }
    
        displayValue = 0;
        display.textContent = '';
        if (toggle === 0) {
            valueCalculated = operate(globalOperator,displayValueFixed,displayValueInt);
            if (typeof valueCalculated === 'number') {
            valueCalculated = valueCalculated.toFixed(3);
            }
            display.textContent = valueCalculated;
        }
        globalOperator = operator[i];
        toggle = 0;
       

    });
}



btnEnter.addEventListener('click', function() {
    if (displayValueFixed !== valueCalculated) {
        displayValueFixed = valueCalculated;
    }
    valueCalculated = operate(globalOperator,displayValueFixed,displayValueInt);
    if (typeof valueCalculated === 'number') {
    valueCalculated = valueCalculated.toFixed(3);
    }
    display.textContent = valueCalculated;
    toggle = 1;


});

btnClear.addEventListener('click',function() {
    display.textContent = '';
    displayValueFixed = 0;
    displayValue = 0;
    valueCalculated = 0;
  
});
        

const operate = function(operator,x,y) {
    if (operator === '+') {
        return add(x,y);
    }
    else if (operator === '-') {
        return subtract(x,y);
    }
    else if (operator === '*') {
        return multiply(x,y);
    }
    else if (operator === '/') {
        return divide(x,y);
    }
}

const add = function(x,y) {
    let num = (x + y);
    return num;
      
  };
  
  const subtract = function(x,y) {
    let num = (x - y);
    return num;
  
  };

  const multiply = function(x,y) {
   let num = (x * y);
   return num;
  
  };

  const divide = function(x,y) {
      if (y === 0) {
          return 'Don\'t do that!';
      }
      let num = (x / y);
      return num;

  }

 
 
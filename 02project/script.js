
let display = document.getElementById("screen");

let buttons = document.querySelectorAll("button");

let currentNumber = "";
let previousNumber = "";
let operator = null;

function updateDisplay(){
  display.innerHTML = currentNumber || previousNumber;

}

function numberHandler(number){
  if (currentNumber.length <10) {
    currentNumber += number;
    updateDisplay()
  }
  
}

function operatorHandler(op){
  if (currentNumber === "" && op === "-") {
    currentNumber = "-"
  }else if(currentNumber  !== ""){
    previousNumber = currentNumber;
    currentNumber = "";
    operator = op;
    updateDisplay()
  }
}

function handleEqual() {
  if (operator && previousNumber !== "" && currentNumber !== "") {
      let result;
      const prev = parseFloat(previousNumber);
      const current = parseFloat(currentNumber);

      switch (operator) {
          case "+":
              result = prev + current;
              break;
          case "-":
              result = prev - current;
              break;
          case "*":
              result = prev * current;
              break;
          case "/":
              if (current === 0) {
                  alert("Cannot divide by zero");
                  result = "Error";
              } else {
                  result = prev / current;
              }
              break;
          default:
              return;
      }
      currentNumber = result.toString();
      operator = null;
      previousNumber = "";
      updateDisplay();
  }
}


function handleClear() {
  currentNumber = "";
  previousNumber = "";
  operator = null;
  updateDisplay();
}

buttons.forEach( (button) => {
  button.addEventListener("click", function() {
      const value = button.innerHTML;
      if (value >= '0' && value <= '9') {
          numberHandler(value);
      } else if (value === '+' || value === '-' || value === '*' || value === '/') {
          operatorHandler(value);
      } else if (value === '=') {
          handleEqual();
      } else if (value === 'AC') {
          handleClear();
      }
  });
});

updateDisplay()
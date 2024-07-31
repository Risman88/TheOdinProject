let firstNumber = "";
let secondNumber = "";
let currentOperator = null;
let resetDisplay = false;

  const display = document.querySelector(".display");
  const buttons = document.querySelectorAll("button");
  
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      if (button.classList.contains("operand")) {
        appendNumber(button.value);
      } else if (button.classList.contains("operator")) {
        chooseOperator(button.value);
      } else if (button.id === "equals") {
        evaluate();
      } else if (button.id === "clear") {
        clear();
      } else if (button.id === "backspace") {
        backspace();
      } else if (button.id === "decimal") {
        appendDecimal();
      }
    });
  });

  document.addEventListener("keydown", handleKeyPress);

function handleKeyPress(event) {
  if (event.key >= 0 && event.key <= 9) {
    appendNumber(event.key);
  } else if (event.key === ".") {
    appendDecimal();
  } else if (event.key === "=" || event.key === "Enter") {
    evaluate();
  } else if (event.key === "Backspace") {
    backspace();
  } else if (event.key === "Escape") {
    clear();
  } else if (event.key === "+" || event.key === "-" || event.key === "*" || event.key === "/") {
    chooseOperator(event.key);
  }
}

  function appendNumber(number) {
    if (resetDisplay) {
      display.textContent = "";
      resetDisplay = false;
    }
    if (display.textContent === "0" && number !== "0") {
      display.textContent = number;
    } else {
      display.textContent += number;
    }
  }

  function appendDecimal() {
    if (resetDisplay) {
      display.textContent = "";
      resetDisplay = false;
    }
    if (!display.textContent.includes(".")) {
      display.textContent += ".";
    }
  }
  
  function chooseOperator(operator) {
    if (currentOperator !== null) evaluate();
    firstNumber = display.textContent;
    currentOperator = operator;
    resetDisplay = true;
  }
  
  function evaluate() {
    if (currentOperator === null || resetDisplay) return;
    secondNumber = display.textContent;
    const result = operate(currentOperator, parseFloat(firstNumber), parseFloat(secondNumber));
    display.textContent = parseFloat(result.toFixed(10));
    currentOperator = null;
  }
  
  function clear() {
    display.textContent = "0";
    firstNumber = "";
    secondNumber = "";
    currentOperator = null;
    resetDisplay = false;
  }
  
  function backspace() {
    display.textContent = display.textContent.slice(0, -1) || "0";
  }


  function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function divide(a, b) {
    if (b === 0) {
      return "Error";
    }
    return a / b;
  }
  
  function operate(operator, a, b) {
    if (operator === "+") {
      return add(a, b);
    } else if (operator === "-") {
      return subtract(a, b);
    } else if (operator === "*") {
      return multiply(a, b);
    } else if (operator === "/") {
      return divide(a, b);
    } else {
      return null;
    }
  }
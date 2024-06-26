let calculator = document.querySelector("#calculator");
let string1 = "";
let string2 = "";
let operators = [];
let display = document.querySelector("#displayText");


function operate(val1, operator, val2) {
  if (operator === "+") {
    return val1 + val2;
  } else if (operator === "-") {
    return val1 - val2;
  } else if (operator === "*") {
    return val1 * val2;
  } else if (operator === "/"){
    return val1 / val2;
  } else if (operator === "%"){
    return (val1 % val2);
  } else {
    alert("error");
    return;
  }
}

calculator.addEventListener("click", (event) =>{
  let target = event.target;
  switch(target.id) {
    case "one" :
      if (operators[0] === "=") {
        string1="";
        operators.pop();
        string1 += "1";
        display.textContent = string1;
      } else if (operators[0]) {
        string2 += "1";
        display.textContent = string2;
      } else {
        string1 += "1";
        display.textContent = string1;
      }
      break;
    case "two" :
      if (operators[0] === "=") {
        string1="";
        operators.pop();
        string1 += "2";
        display.textContent = string1;
      } else if (operators[0]) {
        string2 += "2";
        display.textContent = string2;
      } else {
        string1 += "2";
        display.textContent = string1;
      }
      break;
    case "three" :
      if (operators[0] === "=") {
        string1="";
        operators.pop();
        string1 += "3";
        display.textContent = string1;
      } else if (operators[0]) {
        string2 += "3";
        display.textContent = string2;
      } else {
        string1 += "3";
        display.textContent = string1;
      }
      break;
    case "four" :
      if (operators[0] === "=") {
        string1="";
        operators.pop();
        string1 += "4";
        display.textContent = string1;
      } else if (operators[0]) {
        string2 += "4";
        display.textContent = string2;
      } else {
        string1 += "4";
        display.textContent = string1;
      }
      break;
    case "five" :
      if (operators[0] === "=") {
        string1="";
        operators.pop();
        string1 += "5";
        display.textContent = string1;
      } else if (operators[0]) {
        string2 += "5";
        display.textContent = string2;
      } else {
        string1 += "5";
        display.textContent = string1;
      }
      break;
    case "six" :
      if (operators[0] === "=") {
        string1="";
        operators.pop();
        string1 += "6";
        display.textContent = string1;
      } else if (operators[0]) {
        string2 += "6";
        display.textContent = string2;
      } else {
        string1 += "6";
        display.textContent = string1;
      }
      break;
    case "seven" :
      if (operators[0] === "=") {
        string1="";
        operators.pop();
        string1 += "7";
        display.textContent = string1;
      } else if (operators[0]) {
        string2 += "7";
        display.textContent = string2;
      } else {
        string1 += "7";
        display.textContent = string1;
      }
      break;
    case "eight" :
      if (operators[0] === "=") {
        string1="";
        operators.pop();
        string1 += "8";
        display.textContent = string1;
      } else if (operators[0]) {
        string2 += "8";
        display.textContent = string2;
      } else {
        string1 += "8";
        display.textContent = string1;
      }
      break;
    case "nine" :
      if (operators[0] === "=") {
        string1="";
        operators.pop();
        string1 += "9";
        display.textContent = string1;
      } else if (operators[0]) {
        string2 += "9";
        display.textContent = string2;
      } else {
        string1 += "9";
        display.textContent = string1;
      }
      break;
    case "zero" :
      if (operators[0]) {
        string2 += "0";
        display.textContent = string2;
      } else {
        string1 += "0";
        display.textContent = string1;
      }
      break;
    case "divide" :
      if (operators[0] && string2.length > 0) {
        let value = operate(parseInt(string1),operators[0],parseInt(string2));
        console.log(value);
        string1 = "" + value;
        string2 = "";
        operators.pop();
        operators[0] = "/";
        display.textContent = string1;
      } else {
        operators[0] = "/";
      }
      break;
    case "multiply" :
      if (operators[0] && string2.length > 0) {
        let value = operate(parseInt(string1),operators[0],parseInt(string2));
        console.log(value);
        string1 = "" + value;
        string2 = "";
        operators.pop();
        operators[0] = "*";
        display.textContent = string1;
      } else {
        operators[0] = "*";
      }
      break;
    case "add" :
      if (operators[0] && string2.length > 0) {
        let value = operate(parseInt(string1),operators[0],parseInt(string2));
        console.log(value);
        string1 = "" + value;
        string2 = "";
        operators.pop();
        operators[0] = "+";
        display.textContent = string1;
      } else {
        operators[0] = "+";
      }
      break;
    case "subtract" :
      if (operators[0] && string2.length > 0) {
        let value = operate(parseInt(string1),operators[0],parseInt(string2));
        console.log(value);
        string1 = "" + value;
        string2 = "";
        operators.pop();
        operators[0] = "-";
        display.textContent = string1;
      } else {
        operators[0] = "-";
      }
      break;
    case "equals" :
      if (operators[0] && string2.length > 0) {
        let value = operate(parseInt(string1),operators[0],parseInt(string2));
        console.log(value);
        string1 = "" + value;
        string2 = "";
        operators.pop();
        display.textContent = string1;
        operators[0] = "=";
      }
      break;
    case "ac" :
      string1 = "";
      string2 = "";
      operators = [];
      display.textContent = "";
      break;
    case "backspace" :
      console.log("C");
      break;
    case "decimal" :
      console.log(".")
      break;
    case "remainder" :
      if (operators[0] && string2.length > 0) {
        let value = operate(parseInt(string1),operators[0],parseInt(string2));
        console.log(value);
        string1 = "" + value;
        string2 = "";
        operators.pop();
        operators[0] = "%";
        display.textContent = string1;
      } else {
        operators[0] = "%";
      }
      break;
  }
})
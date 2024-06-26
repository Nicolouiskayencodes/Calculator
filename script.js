let calculator = document.querySelector("#calculator");
let string1 = "";
let string2 = "";
let operators = [];
let display = document.querySelector("#displayText");


function operate(val1, operator, val2) {
  if (operator === "+") {
    let x = val1 + val2;
    return parseFloat(x.toFixed(5));
  } else if (operator === "-") {
    let x = val1 - val2;
    return parseFloat(x.toFixed(5));
  } else if (operator === "*") {
    let x = val1 * val2;
    return parseFloat(x.toFixed(5));
  } else if (operator === "/"){
    let x = val1 / val2;
    return parseFloat(x.toFixed(5));
  } else if (operator === "%"){
    let x = (val1 % val2);
    return parseFloat(x.toFixed(7));
  } else {
    alert("error");
    return;
  }
}

function shortenString(numstring) {
  if (numstring.length > 7) {
    return Number.parseFloat(numstring).toExponential(7);
  } else {
    return numstring;
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
        let value = operate(parseFloat(string1),operators[0],parseFloat(string2));
        console.log(value);
        string1 = "" + value;
        string2 = "";
        operators.pop();
        operators[0] = "/";
        string1 = shortenString(string1);
        display.textContent = string1;
      } else if (string1.length<1){
        console.log("No first value")
      } else {
        operators[0] = "/";
      }
      break;
    case "multiply" :
      if (operators[0] && string2.length > 0) {
        let value = operate(parseFloat(string1),operators[0],parseFloat(string2));
        console.log(value);
        string1 = "" + value;
        string2 = "";
        operators.pop();
        operators[0] = "*";
        string1 = shortenString(string1);
        display.textContent = string1;
      } else if (string1.length<1){
        console.log("No first value")
      } else {
        operators[0] = "*";
      }
      break;
    case "add" :
      if (operators[0] && string2.length > 0) {
        let value = operate(parseFloat(string1),operators[0],parseFloat(string2));
        console.log(value);
        string1 = "" + value;
        string2 = "";
        operators.pop();
        operators[0] = "+";
        string1 = shortenString(string1);
        display.textContent = string1;
      } else if (string1.length<1){
        console.log("No first value")
      } else {
        operators[0] = "+";
      }
      break;
    case "subtract" :
      if (operators[0] && string2.length > 0) {
        let value = operate(parseFloat(string1),operators[0],parseFloat(string2));
        console.log(value);
        string1 = "" + value;
        string2 = "";
        operators.pop();
        operators[0] = "-";
        string1 = shortenString(string1);
        display.textContent = string1;
      } else if (string1.length<1){
        console.log("No first value")
      } else {
        operators[0] = "-";
      }
      break;
    case "equals" :
      if (operators[0] && string2.length > 0) {
        let value = operate(parseFloat(string1),operators[0],parseFloat(string2));
        console.log(value);
        string1 = "" + value;
        string2 = "";
        operators.pop();
        string1 = shortenString(string1);
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
      if (operators[0] === "=") {
        string1="";
        operators.pop();
        display.textContent = string1;
      } else if (operators[0]) {
        string2 = string2.slice(0,-1);
        display.textContent = string2;
      } else {
        string1 = string1.slice(0,-1);
        display.textContent = string1;
      }
      break;
    case "decimal" :
      if (operators[0] === "=") {
        string1="";
        operators.pop();
        string1 += "0.";
        display.textContent = string1;
      } else if (operators[0]) {
          if (string2.includes(".")) {
            console.log("No extra decimals")
          } else if (string2.length > 0) {
            string2 += ".";
            display.textContent = string2;
          } else {
            string2 += "0.";
            display.textContent = string2;
          }
      } else {
        if (string1.includes(".")) {
          console.log("No extra decimals")
        } else if (string1.length > 0) {
          string1 += ".";
          display.textContent = string1;
        } else {
          string1 += "0.";
          display.textContent = string1;
        }
      }
      break;
    case "remainder" :
      if (operators[0] && string2.length > 0) {
        let value = operate(parseFloat(string1),operators[0],parseFloat(string2));
        console.log(value);
        string1 = "" + value;
        string2 = "";
        operators.pop();
        operators[0] = "%";
        string1 = shortenString(string1);
        display.textContent = string1;
      } else if (string1.length < 1){
        console.log("No first value");
      } else {
        operators[0] = "%";
      }
      break;
  }
})
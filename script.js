let calculator = document.querySelector("#calculator");
let string1 = "";
let string2 = "";
let operators = [];
let display = document.querySelector("#displayText");


function operate(val1, operator, val2) {
  if (operator === "+") {
    let x = val1 + val2;
    return parseFloat(x.toFixed(6));
  } else if (operator === "-") {
    let x = val1 - val2;
    return parseFloat(x.toFixed(6));
  } else if (operator === "*") {
    let x = val1 * val2;
    return parseFloat(x.toFixed(6));
  } else if (operator === "/"){
    let x = val1 / val2;
    return parseFloat(x.toFixed(6));
  } else if (operator === "%"){
    let x = (val1 % val2);
    return parseFloat(x.toFixed(6));
  } else {
    alert("error");
    return;
  }
}

function shortenString(numstring) {
  if (numstring.length > 7) {
    if (Number.parseFloat(numstring) > 1000000 || Number.parseFloat(numstring) < -1000000){
      return Number.parseFloat(numstring).toExponential(7);
    } else {
      return parseFloat(numstring).toFixed(6);
    }
  } else {
    return numstring;
  }
}

function number(number) {
  if (operators[0] === "=") {
    string1="";
    operators.pop();
    string1 += number;
    display.textContent = string1;
  } else if (operators[0]) {
    string2 += number;
    display.textContent = string2;
  } else {
    string1 += number;
    display.textContent = string1;
  }
}

function operator(operator) {
  if (operators[0] && string2.length > 0) {
    let value = operate(parseFloat(string1),operators[0],parseFloat(string2));
    console.log(value);
    string1 = "" + value;
    string2 = "";
    operators.pop();
    operators[0] = opertator;
    string1 = shortenString(string1);
    display.textContent = string1;
  } else if (string1.length<1){
    console.log("No first value")
  } else {
    operators[0] = operator;
  }
}

calculator.addEventListener("click", (event) =>{
  let target = event.target;
  switch(target.id) {
    case "one" :
      number("1");
      break;
    case "two" :
      number("2");
      break;
    case "three" :
      number("3");
      break;
    case "four" :
      number("4");
      break;
    case "five" :
      number("5");
      break;
    case "six" :
      number("6");
      break;
    case "seven" :
      number("7");
      break;
    case "eight" :
      number("8");
      break;
    case "nine" :
      number("9");
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
      operator("/");
      break;
    case "multiply" :
      operator("*");
      break;
    case "add" :
      operator("+");
      break;
    case "subtract" :
      operator("-");
      break;
    case "remainder" :
        operator("%");
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
  }
})
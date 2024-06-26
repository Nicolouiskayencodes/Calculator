let calculator = document.querySelector("#calculator")

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
    return val1 % val2;
  } else {
    return "error";
  }
}

calculator.addEventListener("click", (event) =>{
  let target = event.target;
  switch(target.id) {
    case "one" :
      console.log(1);
      break;
    case "two" :
      console.log(2);
      break;
    case "three" :
      console.log(3);
      break;
    case "four" :
      console.log(4);
      break;
    case "five" :
      console.log(5);
      break;
    case "six" :
      console.log(6);
      break;
    case "seven" :
      console.log(7);
      break;
    case "eight" :
      console.log(8);
      break;
    case "nine" :
      console.log(9);
      break;
    case "zero" :
      console.log(0);
      break;
    case "divide" :
      console.log("/");
      break;
    case "multiply" :
      console.log("*");
      break;
    case "add" :
      console.log("+");
      break;
    case "subtract" :
      console.log("-");
      break;
    case "equals" :
      console.log("=");
      break;
    case "ac" :
      console.log("AC");
      break;
    case "backspace" :
      console.log("C");
      break;
    case "decimal" :
      console.log(".")
      break;
    case "remainder" :
      console.log("%");
      break;
  }
})
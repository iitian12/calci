let value = "";


const zero = document.querySelector('.js-answer');
const number =document.querySelectorAll('.js-number');



number.forEach(button => {
  button.addEventListener("click", function (e) {
    const change = e.currentTarget;
    const lastchar = value.slice(-1);
    const operators = ["+", "-", "/", "x"];
    
    if (change.innerHTML === "=") {
      value = eval(value.replace(/x/g, '*')).toString();
      zero.innerHTML = value;
    } else if (change.innerHTML === "%") {
      value = eval("value/100").toString();
      zero.innerHTML = value;
    } else if (change.innerHTML === "AC") {
      value = '';
      zero.innerHTML = "0";
      return;
    } else if (change.innerHTML === "( )") {
      if (value.includes("(") && !value.includes(")")) {
        value += ")";
      } else {
        value += "(";
      }
    } else  if (operators.includes(change.innerHTML)) {
        if (!operators.includes(lastchar)) {
          value += change.innerHTML;
        }
    } else {
      value = value + change.innerHTML;
      zero.innerHTML = value;
    }

    if (value.length >= 18) {
      value = "INVALID";
    }

    zero.innerHTML = value;

    

  })
})



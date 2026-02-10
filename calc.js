let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");

let expression = "";

// Handle Button Click
buttons.forEach(button => {
  button.addEventListener("click", () => {

    let value = button.innerText;

    if (value === "AC") {
      expression = "";
      display.value = "";
    }

    else if (value === "⌫") {
      expression = expression.slice(0, -1);
      display.value = expression;
    }

    else if (value === "=") {
      try {
        expression = expression
          .replace("×", "*")
          .replace("÷", "/")
          .replace("−", "-");

        display.value = eval(expression);
        expression = display.value;
      } catch {
        display.value = "Error";
      }
    }

    else {
      expression += value;
      display.value = expression;
    }

  });
});


// ✅ Bonus: Keyboard Support
document.addEventListener("keydown", (event) => {

  let key = event.key;

  if (!isNaN(key) || key === ".") {
    expression += key;
  }

  else if (key === "+") expression += "+";
  else if (key === "-") expression += "−";
  else if (key === "*") expression += "×";
  else if (key === "/") expression += "÷";

  else if (key === "Enter") {
    try {
      expression = expression
        .replace("×", "*")
        .replace("÷", "/")
        .replace("−", "-");

      expression = eval(expression).toString();
    } catch {
      expression = "Error";
    }
  }

  else if (key === "Backspace") {
    expression = expression.slice(0, -1);
  }

  else if (key === "Escape") {
    expression = "";
  }

  display.value = expression;
});

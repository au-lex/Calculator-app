
    let equal_pressed = 0;
    let screen = document.querySelector("#calc-screen");
     let buttons = document.querySelectorAll(".btn");
     let clear = document.querySelector("#clear");
     let equate = document.querySelector("#evalu");



window.onload = () => {
    screen.value = "";
  };
  
 
  buttons.forEach((button_class) => {
    button_class.addEventListener("click", () => {
      if (equal_pressed == 1) {
        screen.value = "";
        equal_pressed = 0;
      }
    
      screen.value += button_class.value;
    });
  });

  equate.addEventListener("click", () => {
    equal_pressed = 1;
    let inp_val = screen.value;
    try {
      
      let solution = eval(inp_val);
     
      if (Number.isInteger(solution)) {
        screen.value = solution;
      } else {
        input.screen = solution.toFixed(2);
      }
    } catch (err) {
     
      alert("Invalid Input");
    }

  })



  clear.addEventListener("click", () => {
    screen.value = "";
  })
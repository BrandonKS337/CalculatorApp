let buttons = document.querySelector('.buttons'); // setting new variable buttons to query buttons clicked
let btn = buttons.querySelectorAll('span'); //opens query search to all span elements
let value = document.getElementById('value');       //adds event listener for the value input by user
// let clearBtn = document.getElementById("clear");        //this even listener is used to clear the results or should be a solution regarding clearing strings of "Clear"
// clearBtn.addEventListener("click", function () {
//   value.innerHTML = "";
// });

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', function() {
    if (this.innerHTML == 'Clear') {                  // duplicating the below if statement and adding it here ACTUALLY clears the screen.......I feel like I did something wrong here.
        value.innerHTML = "";
      }
    if (this.innerHTML == "=") {
      value.innerHTML = eval(value.innerHTML);
    } else {
      if (this.innerHTML == 'Clear') {                  // I feel like this SHOULD have worked independent of the very first if statement but if function wont clear string value "Clear" without me having it iterated twice for some reason. Ask Robert about what I set up wrong here.
        value.innerHTML = "";
      } else {
        value.innerHTML += this.innerHTML;
      }
    }
  });
}

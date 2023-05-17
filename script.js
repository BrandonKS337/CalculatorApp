let buttons = document.querySelector('.buttons'); // setting new variable buttons to query buttons clicked
let btn = buttons.querySelectorAll('span'); //opens query search to all span elements
let value = document.getElementById('value');

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    if (this.innerHTML == "=") {
      value.innerHTML = eval(value.innerHTML);
    } else {
      if (this.innerHTML == 'clear') {
        value.innerHTML = '';
      } else {
        value.innerHTML += this.innerHTML;
      }
    }
  });
}

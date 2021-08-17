const h2 = document.createElement("h2");
h2.textContent = "Welcome to my website!";
document.querySelector("body").appendChild(h2);



//Clicking on buttons brings you to correct part of site

//testing

const button = document.getElementById('button');

function clickAlert() {
  alert('I was clicked!');
}

button.addEventListener('click', clickAlert);

//Clicking on buttons turns them different color
const input = document.getElementById('button');

function clickButtonColorChange() {
    input.color = red;
}

input.addEventListener('click', clickButtonColorChange);


<a href ="#introduction">Introduction</a>


<p id="tips">Useful Tips Section</p>
<a href="#tips">Jump to the Useful Tips Section</a>


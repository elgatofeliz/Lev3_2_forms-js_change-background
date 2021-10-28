let red = document.getElementById('red');
let green = document.getElementById('green');
let blue = document.getElementById('blue');
let alpha = document.getElementById('alpha');

document.body.style.background = "rgba(" + red.value + ", " + green.value + ", " + blue.value + ", " + alpha.value + ")"

function changeBackground() {
    document.body.style.background = "rgba(" + red.value + ", " + green.value + ", " + blue.value + ", " + alpha.value + ")"
}
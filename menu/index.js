var brkfst = document.getElementById("bf");
var all = document.getElementById("all");
var lunch = document.getElementById("lnch");
var shakes = document.getElementById("shk");
var dinner = document.getElementById("din");

var one = document.querySelector('.one');
var two = document.querySelector('.two');
var three = document.querySelector('.three');
var four = document.querySelector('.four');
var five = document.querySelector('.five');
var six = document.querySelector('.six');
var seven = document.querySelector('.seven');
var eight = document.querySelector('.eight');
var nine = document.querySelector('.nine');
var ten = document.querySelector('.ten');

brkfst.addEventListener("click", function bf() {
    two.classList.add('abc');
    three.classList.add('abc');
    five.classList.add('abc');
    six.classList.add('abc');
    eight.classList.add('abc');
    nine.classList.add('abc');
    ten.classList.add('abc');

    one.classList.remove('abc');
    four.classList.remove('abc');
    seven.classList.remove('abc');
});

lunch.addEventListener("click", function ln() {
    one.classList.add('abc');
    three.classList.add('abc');
    four.classList.add('abc');
    six.classList.add('abc');
    seven.classList.add('abc');
    nine.classList.add('abc');
    ten.classList.add('abc');

    two.classList.remove('abc');
    five.classList.remove('abc');
    eight.classList.remove('abc');
});
shakes.addEventListener("click", function shk() {
    one.classList.add('abc');
    two.classList.add('abc');
    five.classList.add('abc');
    seven.classList.add('abc');
    eight.classList.add('abc');
    four.classList.add('abc');
    ten.classList.add('abc');

    three.classList.remove('abc');
    six.classList.remove('abc');
    nine.classList.remove('abc');
});
dinner.addEventListener("click", function din() {
    two.classList.add('abc');
    three.classList.add('abc');
    five.classList.add('abc');
    six.classList.add('abc');
    eight.classList.add('abc');
    nine.classList.add('abc');
    one.classList.add('abc');
    seven.classList.add('abc');
    four.classList.add('abc');

    ten.classList.remove('abc');

});
all.addEventListener("click", function all() {
    two.classList.remove('abc');
    five.classList.remove('abc');
    eight.classList.remove('abc');
    nine.classList.remove('abc');
    ten.classList.remove('abc');
    six.classList.remove('abc');
    seven.classList.remove('abc');
    one.classList.remove('abc');
    three.classList.remove('abc');
    four.classList.remove('abc');
});
//alert("If you are visiting this webpage thorugh cell phone then for better experience we'll suggest you to open the page in landscape mode.");



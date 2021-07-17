
var click = document.querySelector('.btn');
click.addEventListener("click", function fun() {
    document.getElementById('cont2').style.visibility = "visible";
});
var close = document.querySelector('.fa-close');
close.addEventListener("click", function sun() {
    document.getElementById('cont2').style.visibility = "hidden";
});

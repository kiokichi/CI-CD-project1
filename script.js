
// smooth scroll

document.querySelectorAll("nav a").forEach(link => {

link.addEventListener("click", function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href"))
.scrollIntoView({
behavior:"smooth"
});

});

});



// booking popup

let form = document.getElementById("form");
let popup = document.getElementById("popup");

form.addEventListener("submit", function(e){

e.preventDefault();

popup.classList.add("show");

setTimeout(() => {

popup.classList.remove("show");

form.reset();

}, 2000);

});
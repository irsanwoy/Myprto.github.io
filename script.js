var hamburger = document.querySelector(".hamb");
var navlist = document.querySelector(".nav-list");
var links = document.querySelector(".nav-list li");
hamburger.addEventListener("clik", function(){
    this.classlist.toggle("click");
    navlist.classList.toggle("open");
});
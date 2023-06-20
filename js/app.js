const rightBtn = document.querySelector("#scrolling-btn-right");
const lefttBtn = document.querySelector("#scrolling-btn-left");

const content = document.querySelector(".scrolling-container");

lefttBtn.addEventListener("click",() => {
    content.scrollLeft -= 150;
});

rightBtn.addEventListener("click",() => {
    content.scrollLeft += 150;
});


let list = document.querySelectorAll('.nav li');
function active(){
    list.forEach((i) =>
    i.classList.remove('active'));
    this.classList.add('active');
}

/*boton hamburguesa*/
list.forEach((i) =>
i.addEventListener('click',active));

let menuToggle = document.querySelector('.menuToggle');
let header = document.querySelector('header');
menuToggle.onclick = function(){
    header.classList.toggle('active');
}

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

    header ul{
        display: none;
    }
}

list.forEach((i) =>
i.addEventListener('click',active));


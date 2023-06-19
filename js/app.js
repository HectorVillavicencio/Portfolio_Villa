const rightBtn = document.querySelector("#scrolling-btn-right");
const lefttBtn = document.querySelector("#scrolling-btn-left");

const content = document.querySelector(".scrolling-container");

lefttBtn.addEventListener("click",() => {
    content.scrollLeft -= 150;
});

rightBtn.addEventListener("click",() => {
    content.scrollLeft += 150;
});
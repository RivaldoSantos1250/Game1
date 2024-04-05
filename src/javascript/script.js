let list = document.querySelector(".slider .list");
let items = document.querySelectorAll(".slider .list .item");
let dots = document.querySelectorAll(".slider .dots li");
let prev = document.getElementById("prev");
let next = document.getElementById("next");

let active = 0;
let lemgtItems = items.length -1;

next.onclick = function () {
    if(ative + 1 > lengthItems) {
        
    }
    reloadSlider();
};

function reloadSlider() {
    let checkLeft = items(active).offsetLeft;
    list.style.left = -checkLeft + "px";
}

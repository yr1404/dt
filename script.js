const jb = document.querySelector('.jb-1');
const arrow = document.querySelector('.right-arrow');
const temp = document.querySelector('.temp');
let toggled = false;

jb.addEventListener('click', (event) => {
    event.stopPropagation();
    if (toggled) {
        jb.style.transform = "translateX(0px)";
        arrow.style.transform = "rotate(0deg)";
        temp.classList.remove('hidden');
    } else {
        jb.style.transform = "translateX(600px)";
        arrow.style.transform = "rotate(180deg)";
        temp.classList.add('hidden');
    }
    toggled = !toggled;
});

document.addEventListener('click', () => {
    if (toggled) {
        jb.style.transform = "translateX(0px)";
        arrow.style.transform = "rotate(0deg)";
        temp.classList.remove('hidden');
        toggled = false;
    }
});
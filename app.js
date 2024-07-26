/*Progress bar*/
let sections = document.querySelectorAll('section')
const filled = document.querySelector('.filled')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;

        if (top>= offset && top < offset + height) {
            sec.classList.add('show_animate');
        } else {
            sec.classList.remove('show_animate')
        }
    })
}

function update () {
    filled.style.width = `${((window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 100)}%`
    requestAnimationFrame(update);
}

update();

/*Night mode*/
var icon = document.getElementById("icon").querySelector("img");
var upwork = document.getElementById("upwork");
var github = document.getElementById("github");
var linkedin = document.getElementById("linkedin");

icon.onclick = function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        icon.src = "Images/sun.png";
        upwork.src = "Images/dark-mode-upwork.png";
        github.src = "Images/dark-mode-github.png";
        linkedin.src = "Images/dark-mode-linkedin.png";
        } else {
        icon.src = "Images/moon.png";
        upwork.src = "Images/Upwork.png";
        github.src = "Images/github.png";
        linkedin.src = "Images/Linkedin.png";
        }
    }
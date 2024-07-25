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
const text = "Computer Science Student | Aspiring Software Engineer";
let i = 0;
const speed = 100;

function typeWriter() {
    if (i < text.length) {
        document.getElementById('introText').innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter();

// Smooth Scrolling Script
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

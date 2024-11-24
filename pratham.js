// string animations
var typed = new Typed(".text",{
        strings: ["a Programmer", "a Computer Engineer", "an IT Engineer", "a Software Developer"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop:true
});

//when the button seta para baixo is clicked it scroll smoothly para baixo

function scrollToSection(sectionId) {
        document.getElementById(sectionId).scrollIntoView({
            behavior:"smooth"
        });
}

// hiding the navbar while scrolling
let lastScrollTop = 0;
const navbar1 = document.getElementById('navbarHide');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling down
        navbar1.style.top = '-60px'; // Adjust based on navbar height
    } else {
        // Scrolling up
        navbar1.style.top = '0'; // Show the navbar
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navbar = document.getElementById('navbar');

    hamburger.addEventListener('click', () => {
        navbar.classList.toggle('show');
    });

    // Optional: Close the navbar when clicking a menu item
    navbar.addEventListener('click', (event) => {
        if (event.target.tagName === 'A') {
            navbar.classList.remove('show');
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const educationItems = document.querySelectorAll(".education-item");

    // Adiciona a classe `show` com atraso
    educationItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add("show");
        }, index * 200); // Atraso incremental de 200ms por item
    });
});



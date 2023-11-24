// sticky navbar 
window.addEventListener('scroll', function () {

    let header = document.querySelector(".header");
    header.classList.toggle("sticky", window.scrollY > 150);
});

// scroll section active link
window.addEventListener('scroll', function () {
    let navLinks = document.querySelectorAll("header nav a");
    let sections = document.querySelectorAll("section");
    sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");


        if (top >= offset && top < offset + height) {
            navLinks.forEach((links) => {
                links.classList.remove("active");
                document.querySelector("header nav a[href*= " + id + "]").classList.add("active");
            });
        };
    });
});


// toggle menu icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
}

// remove menu-icon navbar when click on a navbar link
navbar.onclick = () => {
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
}


// swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// dark mode 
let darkModeIcon = document.querySelector("#darkMode-icon");
darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle("bx-sun");
    document.body.classList.toggle("dark-mode");
}

// scroll reveal 

ScrollReveal({
    reset: true,
    distance: "80px",
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: "top" });
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form', { origin: "bottom" });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: "left" });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: "right" });


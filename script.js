// Menu mobile

function toggleMenu() {
    const menu = document.querySelector(".nav-menu");

    menu.classList.toggle("active");
}


// Tutup menu setelah link diklik

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        document.querySelector(".nav-menu").classList.remove("active");
    });
});


// Animasi saat scroll

const cards = document.querySelectorAll(".project-card");

const observer = new IntersectionObserver(function(entries) {

    entries.forEach(function(entry) {

        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }

    });

}, {
    threshold: 0.2
});


cards.forEach(function(card) {

    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "0.6s";

    observer.observe(card);

});
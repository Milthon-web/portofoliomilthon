// Menu mobile
function toggleMenu() {
    const menu = document.querySelector(".nav-menu");
    const button = document.querySelector(".menu-btn");
    const isOpen = menu.classList.toggle("active");
    button.setAttribute("aria-expanded", String(isOpen));
}

// Tutup menu setelah link diklik
const navLinks = document.querySelectorAll(".nav-menu a");
navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        document.querySelector(".nav-menu").classList.remove("active");
        document.querySelector(".menu-btn").setAttribute("aria-expanded", "false");
    });
});

// Animasi kartu project saat masuk ke layar
const cards = document.querySelectorAll(".project-card");

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    cards.forEach(function(card) {
        card.classList.add("reveal");
        observer.observe(card);
    });
} else {
    cards.forEach(function(card) {
        card.classList.add("show");
    });
}

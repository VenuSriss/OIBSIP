window.addEventListener("scroll", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("#navbar a");

    sections.forEach((section, i) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= sectionTop - sectionHeight / 2) {
            navLinks.forEach((link) => link.classList.remove("active"));
            navLinks[i].classList.add("active");
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var text = document.getElementById('title-text');
    text.style.animation = 'typing 2s steps(20) infinite';
  });
  
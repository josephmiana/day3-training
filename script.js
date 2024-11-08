const navLinks = document.querySelectorAll('.nav-links a');
const slider = document.querySelector('.slider');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = link.getAttribute('data-section');
        const section = document.getElementById(sectionId);
        const sectionIndex = Array.from(section.parentNode.children).indexOf(section);
        const offset = sectionIndex * window.innerWidth;
        slider.style.transform = `translateX(-${offset}px)`;
    });
});

import './style.css'

const observer_x = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        entry.target.classList.toggle('inside-view-x', entry.isIntersecting);
    });
});

const sections_x = document.querySelectorAll(".outside-view-x");
sections_x.forEach((elem) => observer_x.observe(elem));


const observer_y = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        entry.target.classList.toggle('inside-view-y', entry.isIntersecting);
    });
});

const sections_y = document.querySelectorAll(".outside-view-y");
sections_y.forEach((elem) => observer_y.observe(elem));
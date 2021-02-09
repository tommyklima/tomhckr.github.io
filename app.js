// navbar scrollers
const socialsNav = document.querySelectorAll('.nav-element')[1];
socialsNav.addEventListener('click', function () {
    document.querySelector('#social').scrollIntoView({
        behavior: 'smooth'
    });
});

const projectsNav = document.querySelectorAll('.nav-element')[2];
projectsNav.addEventListener('click', function () {
    document.querySelector('#projects').scrollIntoView({
        behavior: 'smooth'
    });
});
// navbar scrollers
const socialsNav = document.querySelectorAll('.nav-element')[1];
const projectsNav = document.querySelectorAll('.nav-element')[2];

socialsNav.addEventListener('click', function () {
    document.querySelector('#social').scrollIntoView({
        behavior: 'smooth'
    });
});

projectsNav.addEventListener('click', function () {
    document.querySelector('#projects').scrollIntoView({
        behavior: 'smooth'
    });
});

// darkmode / light mode toggle
const modeBtn = document.querySelector(".modeBtn");

const changeMode = () => {
    document.querySelector('.background-body').style.backgroundColor = "#ffffff";
}

modeBtn.addEventListener('click', changeMode);
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

// explore btn
const exploreBtn = document.querySelector(".exploreBtn");
const navElementsList = document.querySelectorAll(".content-section");
console.log(navElementsList);
exploreBtn.addEventListener("click", () => {
    navElementsList[Math.floor(Math.random()*navElementsList.length)].scrollIntoView({
        behavior: 'smooth'
    })
})
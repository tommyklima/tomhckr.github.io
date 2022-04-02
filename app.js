// navbar scrollers
const socialsNav = document.querySelectorAll('.nav-element')[2];
const projectsNav = document.querySelectorAll('.nav-element')[1];

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

// social links
const socialLinks = document.querySelectorAll(".socials-item");
function openLink (element, link) {
    element.addEventListener('click', () => {
        window.open(link, '_blank');
    })
}

openLink(socialLinks[0], 'https://twitter.com/tomklimq');
openLink(socialLinks[1], 'https://stackoverflow.com/users/14676759/tom-hckr');
openLink(socialLinks[2], 'https://github.com/tomklimq');
openLink(socialLinks[3], 'https://www.instagram.com/tomklimq/');

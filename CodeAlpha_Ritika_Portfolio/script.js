function scrollToSection(sectionId) {

document.getElementById(sectionId).scrollIntoView({
behavior: "smooth"
});

}


const toggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {

navLinks.classList.toggle("active");

});
function scrollToElement(elementSelector, instance = 0){
    // Select all element that match the given selector
    const elements = document.querySelectorAll(elementSelector);
    // Check if there are element matching the selector and if the request ready
    if(elements.length>instance){
        // Scroll to the specified instance of the element
        elements[instance].scrollIntoView({behavior: 'smooth'});
    }
}

const home = document.getElementById("home");
const about = document.getElementById("about");
const skills = document.getElementById("skills");
const portfolio = document.getElementById("portfolio");
const contact = document.getElementById("contact");

home.addEventListener('click',() => {
    scrollToElement('.main');
});
about.addEventListener('click',() => {
    scrollToElement('.about');
});
skills.addEventListener('click',() => {
    scrollToElement('.skills');
});
portfolio.addEventListener('click',() => {
    scrollToElement('.portfolio');
});
contact.addEventListener('click',() => {
    scrollToElement('.contact');
});
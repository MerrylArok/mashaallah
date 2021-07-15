//Visual Elements
let navLinks = document.getElementById("navLinks");
let content = document.getElementById("content");
let footer = document.getElementById("footer");
//Content Elements
let menu = document.getElementById("menu");
let contact = document.getElementById("contact");
let about = document.getElementById("about");
//Content Buttons
let menuBtn = document.getElementById("menuBtn");
let contactBtn = document.getElementById("contactBtn");
let aboutBtn = document.getElementById("aboutBtn");
let stickyFooterHeight = footer.offsetHeight;
let pageLoad = true;
menuBtn.addEventListener('click', function () {
    fadeIn();
    contact.classList.add('hide');
    about.classList.add('hide');
    menu.classList.remove('hide');
});
contactBtn.addEventListener('click', function () {
    fadeIn();
    menu.classList.add('hide');
    about.classList.add('hide');
    contact.classList.remove('hide');
});
aboutBtn.addEventListener('click', function () {
    fadeIn();
    menu.classList.add('hide');
    contact.classList.add('hide');
    about.classList.remove('hide');
});
function fadeIn() {
    if (!pageLoad) {
        window.scroll({
            top: stickyFooterHeight,
            behavior: 'smooth'
        });
        content.classList.add('animate');
        setTimeout(function () {
            content.classList.remove('animate');
        }, 450);
    }
    else {
        pageLoad = false;
    }
}
menuBtn.click();
content.style.paddingBottom = (stickyFooterHeight + 10).toString() + "px";

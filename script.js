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
//Other Elements
let map = document.getElementById("map");
let address = document.getElementById("address");
//------------------------------------------------------------------//
//VARIABLES
let stickyFooterHeight = footer.offsetHeight;
let stickyNavHeight = navLinks.offsetTop;
let width = window.innerWidth.toString();
let pageLoad = true;
//-------------------------------------------------------------------//
//FUNCTIONS
menuBtn.addEventListener('click', function (e) {
    fadeIn();
    contact.classList.add('hide');
    about.classList.add('hide');
    menu.classList.remove('hide');
});
contactBtn.addEventListener('click', function (e) {
    fadeIn();
    menu.classList.add('hide');
    about.classList.add('hide');
    contact.classList.remove('hide');
});
aboutBtn.addEventListener('click', function (e) {
    fadeIn();
    menu.classList.add('hide');
    contact.classList.add('hide');
    about.classList.remove('hide');
});
function fadeIn() {
    //only scroll to top if header was hidden
    if (pageYOffset >= stickyNavHeight) {
        window.scroll({
            top: stickyNavHeight,
            behavior: 'smooth'
        });
    }
    //every time you hit the tab fire
    content.classList.add('animate');
    setTimeout(function () {
        content.classList.remove('animate');
    }, 400);
}
//------------------------------------------------------------------//
//CODE
menuBtn.click();
content.style.paddingBottom = (stickyFooterHeight + 10).toString() + "px";
map.setAttribute("width", width);
map.setAttribute("height", width);

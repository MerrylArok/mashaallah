//Visual Elements
let navLinks = document.getElementById("navLinks");
let content = document.getElementById("content");
let footer = document.getElementById("footer");
let header = document.getElementById("header");
let html = document.getElementById("html");
//Content Elements
let menu = document.getElementById("menu");
let contact = document.getElementById("contact");
let about = document.getElementById("about");
//Content Buttons
let menuBtn = document.getElementById("menuBtn");
let contactBtn = document.getElementById("contactBtn");
let aboutBtn = document.getElementById("aboutBtn");
//Modal Elements
let dayElement = document.getElementById("day");
let modalButton = document.getElementById("modalButton");
let modal = document.getElementById("modalOverlay");
//Other Elements
let map = document.getElementById("map");
let address = document.getElementById("address");
//------------------------------------------------------------------//
//VARIABLES
let stickyFooterHeight = footer.offsetHeight;
let pageLoad = true;
let currentDate = new Date();
let today = currentDate.getDay();
let days = ['Sundays', 'Mondays', 'Tuesdays', 'Wednesdays', 'Thursdays', 'Fridays', 'Saturdays'];
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
modalButton.addEventListener('click', function () {
    modal.style.display = "none";
    html.style.overflow = "auto";
});
function fadeIn() {
    //only scroll to top if header was hidden
    if (pageYOffset >= header.offsetHeight) {
        window.scroll({
            top: header.offsetHeight,
            behavior: 'auto'
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
dayElement.innerText = days[today];

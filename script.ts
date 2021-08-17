//Visual Elements
let navLinks = document.getElementById("navLinks") as HTMLElement;
let content = document.getElementById("content") as HTMLElement;
let footer = document.getElementById("footer") as HTMLElement;
let header = document.getElementById("header") as HTMLElement;
let html = document.getElementById("html");

//Content Elements
let menu = document.getElementById("menu") as HTMLElement;
let contact = document.getElementById("contact") as HTMLElement;
let about = document.getElementById("about") as HTMLElement;

//Content Buttons
let menuBtn = document.getElementById("menuBtn") as HTMLButtonElement;
let contactBtn = document.getElementById("contactBtn") as HTMLButtonElement;
let aboutBtn = document.getElementById("aboutBtn") as HTMLButtonElement;

//Modal Elements

let dayElement = document.getElementById("day") as HTMLElement;
let modalButton = document.getElementById("modalButton") as HTMLButtonElement;
let modal = document.getElementById("modalOverlay") as HTMLElement;

//Other Elements
let map = document.getElementById("map") as HTMLMapElement;
let address = document.getElementById("address") as HTMLElement;
//------------------------------------------------------------------//

//VARIABLES

let stickyFooterHeight = footer.offsetHeight;
let pageLoad = true;
let currentDate = new Date();
let today = currentDate.getDay();
let days = ['Sundays', 'Mondays', 'Tuesdays', 'Wednesdays', 'Thursdays', 'Fridays', 'Saturdays']

//-------------------------------------------------------------------//

//FUNCTIONS

menuBtn.addEventListener('click', function (e) {
    fadeIn();
    contact.classList.add('hide');
    about.classList.add('hide');
    menu.classList.remove('hide');
})

contactBtn.addEventListener('click', function (e) {
    fadeIn();
    menu.classList.add('hide');
    about.classList.add('hide');
    contact.classList.remove('hide');
})

aboutBtn.addEventListener('click', function (e) {
    fadeIn();
    menu.classList.add('hide');
    contact.classList.add('hide');
    about.classList.remove('hide');
})

modalButton.addEventListener('click', function () {
    modal.style.display = "none";
    html.style.overflow = "auto";
})

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
    }, 400)

}

//------------------------------------------------------------------//

//CODE

menuBtn.click();
content.style.paddingBottom = (stickyFooterHeight + 10).toString() + "px";
dayElement.innerText = days[today];





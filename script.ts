//Visual Elements
let navLinks = document.getElementById("navLinks") as HTMLElement;
let content = document.getElementById("content") as HTMLElement;
let footer = document.getElementById("footer") as HTMLElement;

//Content Elements
let menu = document.getElementById("menu") as HTMLElement;
let contact = document.getElementById("contact") as HTMLElement;
let about = document.getElementById("about") as HTMLElement;

//Content Buttons
let menuBtn = document.getElementById("menuBtn") as HTMLButtonElement;
let contactBtn = document.getElementById("contactBtn") as HTMLButtonElement;
let aboutBtn = document.getElementById("aboutBtn") as HTMLButtonElement;

let stickyFooterHeight = footer.offsetHeight;
let pageLoad = true;

menuBtn.addEventListener('click', function () {
    fadeIn();
    contact.classList.add('hide');
    about.classList.add('hide');
    menu.classList.remove('hide');
})

contactBtn.addEventListener('click', function () {
    fadeIn();
    menu.classList.add('hide');
    about.classList.add('hide');
    contact.classList.remove('hide');
})

aboutBtn.addEventListener('click', function () {
    fadeIn();
    menu.classList.add('hide');
    contact.classList.add('hide');
    about.classList.remove('hide');
})

function fadeIn() {
    if (!pageLoad) {

        window.scroll({
            top: stickyFooterHeight,
            behavior: 'smooth'
        });

        content.classList.add('animate');
        setTimeout(function () {
            content.classList.remove('animate');
        }, 450)
    } else {
        pageLoad = false;
    }
}

menuBtn.click();
content.style.paddingBottom = (stickyFooterHeight + 10).toString() + "px";
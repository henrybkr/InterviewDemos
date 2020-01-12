// Initialise bootstrap popovers
$(function () {
    $('[data-toggle="popover"]').popover()
})

// Add Event listeners
document.getElementById("readmore-link").addEventListener("mouseover", mouseOver);
document.getElementById("readmore-link").addEventListener("mouseout", mouseOut);
document.getElementById("my-nav-logo").addEventListener("click", navChange);

// Global variables

var arrow_hover = false;
var loopx = 0;
var nav_fixed = true;

var elem1 = document.getElementById("arrow");           // Page elements to modify
var elem2 = document.getElementById("readmore-text");

// Function to be launched when user is hovering over arrow
function mouseOver() {
    loopx = 1;
    arrow_hover = true;
    elem1.style.color = "black";
    elem2.style.marginBottom = "-0.5vh"

    function myLoop () {

        // Note: Smoothed via CSS

        loopx++;
        setTimeout(function () {   
            elem1.style.marginTop = "0.5vh";            // Add margin             
        }, 200)                                         // Delay 200ms
        setTimeout(function () {   
            elem1.style.removeProperty('margin');       // Remove margin
            loopx--;                                    // Subtract one
            if (loopx >= 0) {
                myLoop()                                // Call the loop function again if not 0.
            }
        }, 400)                                         // Delay 400ms
    }

    myLoop()
}

// Function to be launched when no longer hovering over arrow
function mouseOut() {
    loopx = 0;
    arrow_hover = false;

    // Note: Included under IE9 support

    if (elem1.style.removeProperty) {
        elem1.style.removeProperty('color');
        elem1.style.removeProperty('margin');
        elem2.style.removeProperty('margin');
    } else {
        elem1.style.removeAttribute('color');
        elem1.style.removeAttribute('margin');
        elem2.style.removeAttribute('margin');
    }
}


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Function to fix or unfix the navigation bar.
// Test purposes only most likely, offering both options to the client.
function navChange() {
    let nav = document.getElementById("my-nav");

    if (nav_fixed==true) {
        nav_fixed = false;

        nav.classList.remove("fixed-top");
        nav.classList.add("position-absolute");
        nav.classList.add("w-100");
        nav.style.zIndex = "1";
    }
    else {
        nav_fixed = true;
        
        nav.classList.add("fixed-top")
        nav.classList.remove("position-absolute");
        nav.classList.remove("w-100");
        if (nav.style.removeProperty) {
            nav.style.removeProperty('zIndex');
        }
        else {
            nav.style.removeAttribute('zIndex');
        }
    }
};
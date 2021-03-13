/* Main JS file for styling */

document.addEventListener("DOMContentLoaded", function() {
    /**
     *  Setup the teams carousel 
     */

    var utils = window.fizzyUIUtils;
    var carousel = document.querySelector('.team-carousel');
    var flkty = new Flickity( carousel, {
        initialIndex: '.initial-select',
        prevNextButtons: false,
        wrapAround: true
    });

    // previous
    var previousButton = document.querySelector('.button--previous');
    previousButton.addEventListener( 'click', function() {
        flkty.previous();
    });
    // next
    var nextButton = document.querySelector('.button--next');
    nextButton.addEventListener( 'click', function() {
        flkty.next();
    });

    // Observers for animations

    /* section 1 */

    var links = document.querySelectorAll(".service-tab-link");
    //console.log(links)
    const section = document.getElementById("Our-Services");
    //console.log(sectionOne)

    const sectionOptions = {
        rootMargin: "0px 0px -70% 0px"
    };

    const sectionObserver = new IntersectionObserver(function(entries,sectionObserver) {
        let num = 0;
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                [].forEach.call(links, function(el) {
                    el.classList.remove("animate__animated");
                    el.classList.remove("animate__delay-c"+num+"s");
                    el.classList.remove("animate__headShake");
                });
                

            } else {
                [].forEach.call(links, function(el) {
                    num = num + 2;
                    el.classList.add("animate__animated");
                    el.classList.add("animate__delay-c"+num+"s");
                    el.classList.add("animate__headShake");
                    console.log(num);
                    
                });
                

                // Remove the classes anyway after 1s so standard custom css animation works
                setTimeout(function(){
                    [].forEach.call(links, function(el) {
                        el.classList.remove("animate__animated");
                        el.classList.remove("animate__delay-c"+num+"s");
                        el.classList.remove("animate__headShake");
                    });
                }, 2000);
            }
          });
    }, sectionOptions);
    
    sectionObserver.observe(section);
    

    /* Remove the initial animation classes so they don't repeat */

    setTimeout(function(){
        var els = document.querySelectorAll(".remove-initial-animation");

        [].forEach.call(els, function(el) {
            el.classList.remove("animate__fadeInUp");
        });
    }, 2000);

    
});
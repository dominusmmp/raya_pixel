import "./fontawesome";
import "./skip-link-focus-fix";
import Velocity from "velocity-animate";
import emailjs from "emailjs-com";

(function () {
    'use strict';

    /* BEGIN: Mobile Nav Menu */
    let navMenu = document.getElementById('nav-menu');
    let mobileNavButton = document.getElementById('mobile-nav-btn');
    // 'navHeight' is defined in html source

    mobileNavButton.addEventListener('click', function (e) {
        if (navMenu.offsetHeight == 0) {
            e.preventDefault();
            Velocity(navMenu, { height: navHeight }, { duration: 250 });
        } else {
            e.preventDefault();
            Velocity(navMenu, { height: 0 }, { duration: 250 });
        }
    });
    /* END: Mobile Nav Menu */

    /* BEGIN: Preloader */
    function preLoader(elID = String) {
        function fadeOut(el) {
            el.style.opacity = 1;
            (function fade() {
                if ((el.style.opacity -= .1) < 0) {
                    el.style.display = "none";
                } else {
                    requestAnimationFrame(fade);
                }
            })();
        };
        window.addEventListener('load', function () {
            let el = document.getElementById(elID);
            fadeOut(el);
        });
    }
    preLoader('preloader');
    /* END: Preloader */

    // EmailJs
    emailjs.init("user_NTiDkqUqnCXi38y62iAVC");
    // const btn = document.getElementById('contact-send');
    document.getElementById('contact-form').addEventListener('submit', function (e) {
        e.preventDefault();

        // btn.value = 'Sending...';

        const serviceID = 'service_9p4lr2g';
        const templateID = 'template_n59zuvr';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                // btn.value = 'Send Email';
                alert('Sent!');
            }, (err) => {
                // btn.value = 'Send Email';
                alert(JSON.stringify(err));
            });
    });

})();

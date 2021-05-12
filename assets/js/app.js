import Velocity from "velocity-animate";
import feather from "feather-icons";
feather.replace();

(function () {
    'use strict'
    /* BEBIN: Dark Mode */
    // function darkModeButton(elId = String) {
    //     let el = document.getElementById(elId);
    //     el.addEventListener('click', function () {
    //         if (
    //             !document.documentElement.classList.contains('dark')
    //             && (!localStorage.theme || localStorage.theme == 'light')
    //         ) {
    //             document.documentElement.classList.add('dark');
    //             localStorage.theme = 'dark';
    //         } else {
    //             document.documentElement.removeAttribute('class');
    //             localStorage.theme = 'light';
    //         }
    //     });
    // }
    // darkModeButton('dark-mode');
    // darkModeButton('dark-mode-mobile');
    /* END: Dark Mode */

    /* BEGIN: Mobile Nav Menu */
    let navMenu = document.getElementById('nav-menu');
    let mobileNavButton = document.getElementById('mobile-nav-btn');
    mobileNavButton.addEventListener('click', function () {
        if (this.dataset.toggle == '0') {
            Velocity(navMenu, { height: 'auto' });
            this.dataset.toggle = '1';
        } else {
            Velocity(navMenu, { height: 0 });
            this.dataset.toggle = '0';
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
    // preLoader('preloader');
    /* END: Preloader */
})();
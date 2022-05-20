import "./fontawesome";
import "./skip-link-focus-fix";
import Velocity from "velocity-animate";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import scrollTop from "./scrollTop";
import preventCopy from "./preventCopy";
import alertBar from "./alertBar";
import "./pwaupdate";

(function () {
    'use strict';

    /* BEGIN: AOS Animate */
    AOS.init();
    /* END: AOS Animate */

    /* BEGIN: Mobile Nav Menu */
    (function () {
        'use strict';

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
    })();
    /* END: Mobile Nav Menu */

    /* BEGIN: Preloader */
    (function () {
        'use strict';

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
    })();
    /* END: Preloader */

    /* BEGIN: Contact Form EmailJs */
    (function () {
        'use strict';

        emailjs.init("user_NTiDkqUqnCXi38y62iAVC");
        const btn = document.getElementById('contact-send');
        document.getElementById('contact-form').addEventListener('submit', function (e) {
            e.preventDefault();

            btn.setAttribute('disabled', 'true');

            const serviceID = 'service_9p4lr2g';
            const templateID = 'template_n59zuvr';

            emailjs.sendForm(serviceID, templateID, this)
                .then(() => {
                    btn.removeAttribute('disabled');
                    this.reset();
                    Swal.fire(
                        'پیام شما با موفقت ارسال شد!',
                        'به زودی با شما تماس خواهیم گرفت!',
                        'success'
                    );
                }, (err) => {
                    btn.removeAttribute('disabled');
                    // alert(JSON.stringify(err));
                    Swal.fire(
                        'ارسال پیام با خطا مواجه شد!',
                        'لطفا مجددا تلاش نمایید!',
                        'error'
                    );
                });
        });
    })();
    /* END: Contact Form EmailJs */

    /* BEGIN: Scroll To Top Button */
    let buttonStyles = {
        default: {
            txtColor: '#fff',
            background: 'rgba(0, 94, 255, 0.5)',
            borderRadius: '8px',
            boxShadow: 'unset',
            size: 3,
            position: {
                top: 'unset',
                right: '8px',
                bottom: '8px',
                left: 'unset',
            },
            mobile: true,
            breakpoint: 768,
            distance: 300,
            svgIcon: `<svg style="overflow: visible; width: .875em; display: inline-block; font-size: inherit; height: 1em; overflow: visible; vertical-align: -.125em;" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M241 34.5l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9l-22.7 22.7c-9.4 9.4-24.5 9.4-33.9 0L224 131.5l-154.7 154c-9.4 9.3-24.5 9.3-33.9 0l-22.7-22.7c-9.4-9.4-9.4-24.6 0-33.9L207 34.5c9.4-9.3 24.6-9.3 34 0zm-34 192L12.7 420.9c-9.4 9.4-9.4 24.6 0 33.9l22.7 22.7c9.4 9.4 24.5 9.4 33.9 0l154.7-154 154.7 154c9.4 9.3 24.5 9.3 33.9 0l22.7-22.7c9.4-9.4 9.4-24.6 0-33.9L241 226.5c-9.4-9.3-24.6-9.3-34 0z"></path></svg>`
        },
        style_1: {
            txtColor: '#fff',
            background: 'transparent',
            borderRadius: '8px',
            boxShadow: '5px 5px 10px #b3b3b3, -5px -5px 10px #ffffff',
            size: 3,
            position: {
                top: 'unset',
                right: '8px',
                bottom: '8px',
                left: 'unset',
            },
            mobile: true,
            breakpoint: 768,
            distance: 300,
            svgIcon: `<svg style="overflow: visible; width: .875em; display: inline-block; font-size: inherit; height: 1em; overflow: visible; vertical-align: -.125em;" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M241 34.5l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9l-22.7 22.7c-9.4 9.4-24.5 9.4-33.9 0L224 131.5l-154.7 154c-9.4 9.3-24.5 9.3-33.9 0l-22.7-22.7c-9.4-9.4-9.4-24.6 0-33.9L207 34.5c9.4-9.3 24.6-9.3 34 0zm-34 192L12.7 420.9c-9.4 9.4-9.4 24.6 0 33.9l22.7 22.7c9.4 9.4 24.5 9.4 33.9 0l154.7-154 154.7 154c9.4 9.3 24.5 9.3 33.9 0l22.7-22.7c9.4-9.4 9.4-24.6 0-33.9L241 226.5c-9.4-9.3-24.6-9.3-34 0z"></path></svg>`
        }
    }
    scrollTop(buttonStyles.default);
    /* END: Scroll To Top Button */

    /* BEGIN: Prevent Copy */
    preventCopy({
        contentSelection: {
            status: false,
            msg: 'Content Selection IS Disabled!'
        },
        rightClick: {
            status: false,
            msg: 'Right Click IS Disabled!'
        },
        devTools: {
            status: false,
            msg: 'Dev Tools Are Disabled!'
        }
    });
    /* END: Prevent Copy */

    /* BEGIN: Alert Bar */
    // alertBar();
    /* END: Alert Bar */

    /* BEGIN: PWA Element */
    const el = document.createElement('pwa-update');
    el.style.fontFamily = 'inherit';
    document.body.appendChild(el);
    /* END: PWA Element */
})();
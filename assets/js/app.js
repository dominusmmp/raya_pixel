import "./fontawesome";
import "./skip-link-focus-fix";
import Velocity from "velocity-animate";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { scrollTop } from "./scrollTop";

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
    scrollTop({
        txtColor: '#fff',
        bgColor: 'rgba(0, 94, 255, 0.5)',
        borderRadius: '8px',
        size: '54px',
        position: {
            top: 'unset',
            right: '8px',
            bottom: '8px',
            left: 'unset',
        }
    });
    /* END: Scroll To Top Button */
})();
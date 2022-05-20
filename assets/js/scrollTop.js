'use strict';

// Function To Add Scroll To Top Button
function scrollTop(options = { txtColor: '', background: '', size: '', borderRadius: '', boxShadow: '', position: { top: '', right: '', bottom: '', left: '' }, mobile: Boolean, breakpoint: Number, distance: Number, svgIcon: '' }) {

    // Load Button Element After Document Load
    window.addEventListener('load', function () {

        // Create Button Element
        let scrollTopBtn = document.createElement("div");

        // Button Style
        scrollTopBtn.style = 'z-index: 10; display: none; justify-content: center; align-items: center; position:fixed; user-select: none';
        scrollTopBtn.style.cursor = (window.innerWidth >= 1024) ? 'pointer' : 'unset';
        scrollTopBtn.style.color = options.txtColor || '#fff';
        scrollTopBtn.style.background = options.background || 'rgba(0, 94, 255, 0.5)';
        scrollTopBtn.style.borderRadius = options.borderRadius || '9999px';
        scrollTopBtn.style.boxShadow = options.boxShadow || 'unset';
        scrollTopBtn.style.width = `${options.size}rem` || '3rem';
        scrollTopBtn.style.height = `${options.size}rem` || '3rem';
        scrollTopBtn.style.fontSize = `${options.size / 2}rem` || '1.5rem';
        scrollTopBtn.style.lineHeight = (options.size * 2 / 3) || '2';
        scrollTopBtn.style.top = options.position.top || 'unset';
        scrollTopBtn.style.right = options.position.right || '1rem';
        scrollTopBtn.style.bottom = options.position.bottom || '1rem';
        scrollTopBtn.style.left = options.position.left || 'unset';

        // Button Id Set
        scrollTopBtn.setAttribute('id', 'scrollTop');

        // Button Icon
        let scrollTopBtnSVG = options.svgIcon || `<svg style="overflow: visible; width: .875em; display: inline-block; font-size: inherit; height: 1em; overflow: visible; vertical-align: -.125em;" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M241 34.5l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9l-22.7 22.7c-9.4 9.4-24.5 9.4-33.9 0L224 131.5l-154.7 154c-9.4 9.3-24.5 9.3-33.9 0l-22.7-22.7c-9.4-9.4-9.4-24.6 0-33.9L207 34.5c9.4-9.3 24.6-9.3 34 0zm-34 192L12.7 420.9c-9.4 9.4-9.4 24.6 0 33.9l22.7 22.7c9.4 9.4 24.5 9.4 33.9 0l154.7-154 154.7 154c9.4 9.3 24.5 9.3 33.9 0l22.7-22.7c9.4-9.4 9.4-24.6 0-33.9L241 226.5c-9.4-9.3-24.6-9.3-34 0z"></path></svg>`;

        scrollTopBtn.innerHTML = scrollTopBtnSVG;

        // Append Button Element to Body
        document.body.append(scrollTopBtn);

        // Add Click Event To The Button To Move To Top
        let scrollTopEl = document.getElementById('scrollTop');
        scrollTopEl.addEventListener('click', function () {
            window.scroll({
                top: 0,
                behavior: 'smooth'
            });
        })

        // Animate Functions
        function fadeIn(el, display = String) {
            el.style.opacity = 0;
            el.style.display = display || "block";
            (function fade() {
                var val = parseFloat(el.style.opacity);
                if (!((val += .1) > 1)) {
                    el.style.opacity = val;
                    requestAnimationFrame(fade);
                }
            })();
        };

        function fadeOut(el) {
            el.style.opacity = 1;
            (function fade() {
                if ((el.style.opacity -= 0.1) < 0) {
                    el.style.display = "none";
                } else {
                    requestAnimationFrame(fade);
                }
            })();
        };

        // Scroll To Top Float Icon Show/Hide
        document.addEventListener('scroll', function () {

            let mobileShow = options.mobile;
            let breakPoint = options.breakpoint || 768;
            let distance = options.distance;
            // Active In Mobile Condition
            let w = (mobileShow) ? true : window.innerWidth >= breakPoint;

            // Distance From Top Condition
            let y = (distance) ? document.documentElement.scrollTop > distance : document.documentElement.scrollTop > 300;

            // Show/Hide Condition
            if (y && w) {
                if (scrollTopEl.style.display == 'none') {
                    fadeIn(scrollTopEl, "flex");
                }
            } else {
                if (scrollTopEl.style.display == 'flex') {
                    fadeOut(scrollTopEl);
                }
            }
        });
    });
}

export default scrollTop;


(function () {
    function scrollTop(txtColor, bgColor) {
        window.addEventListener('load', function () {
            let scrollTopBtn = document.createElement("div");
            scrollTopBtn.style = 'display: none; justify-content: center; align-items: center; position:fixed; bottom: 48px; right: 48px; width: 2.5rem; height: 2.5rem; border-radius: 9999px; font-size:1.5rem; line-height: 2rem; cursor: pointer; user-select: none';
            scrollTopBtn.style.backgroundColor = bgColor || '#005fff';
            scrollTopBtn.style.color = txtColor || '#fff';
            scrollTopBtn.setAttribute('id', 'scrollTop');

            let scrollTopBtnSVG = `<svg style="overflow: visible; width: .875em; display: inline-block; font-size: inherit; height: 1em; overflow: visible; vertical-align: -.125em;" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M241 34.5l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9l-22.7 22.7c-9.4 9.4-24.5 9.4-33.9 0L224 131.5l-154.7 154c-9.4 9.3-24.5 9.3-33.9 0l-22.7-22.7c-9.4-9.4-9.4-24.6 0-33.9L207 34.5c9.4-9.3 24.6-9.3 34 0zm-34 192L12.7 420.9c-9.4 9.4-9.4 24.6 0 33.9l22.7 22.7c9.4 9.4 24.5 9.4 33.9 0l154.7-154 154.7 154c9.4 9.3 24.5 9.3 33.9 0l22.7-22.7c9.4-9.4 9.4-24.6 0-33.9L241 226.5c-9.4-9.3-24.6-9.3-34 0z"></path></svg>`;

            scrollTopBtn.innerHTML = scrollTopBtnSVG;

            // Scroll To Top BTN
            document.body.append(scrollTopBtn);
            let scrollTopEl = document.getElementById('scrollTop');
            scrollTopEl.addEventListener('click', function () {
                window.scroll({
                    top: 0,
                    behavior: 'smooth'
                });
            })

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
                let w = window.innerWidth;
                let y = document.documentElement.scrollTop;
                if (y > 300) {
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

    scrollTop();
})();
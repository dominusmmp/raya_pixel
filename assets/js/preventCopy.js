'use strict';

// Main Function to Prevent Copy From Page
function preventCopy(options = { contentSelection: { status: false, msg: '' }, rightClick: { status: false, msg: '' }, devTools: { status: false, msg: '' } }) {

    // Prevent Content Selection
    !function () {
        let content_selection = options.contentSelection.status;
        let content_selection_msg = options.contentSelection.msg;

        let el = document.documentElement;
        let imgs = document.querySelectorAll('img');

        if (content_selection) {
            el.style.userSelect = 'none';
            for (let img of imgs) {
                img.setAttribute('draggable', false);
                img.addEventListener('drag', function(e) {
                    e.preventDefault();
                    alert(content_selection_msg);
                    return false;
                })
            }
        }
    }();


    // Prevent Right Click
    !function () {
        let right_click = options.rightClick.status;
        let right_click_msg = options.rightClick.msg;

        if (right_click) {
            window.oncontextmenu = function () {
                alert(right_click_msg);
                return false;
            }
        }
    }();


    // Prevent Devtools
    !function () {
        let dev_tools = options.devTools.status;
        let dev_tools_msg = options.devTools.msg;

        if (dev_tools) {
            function detectDevTool(allow) {
                if (isNaN(+allow)) allow = 100;
                var start = +new Date(); // Validation of built-in Object tamper prevention.
                debugger;
                var end = +new Date(); // Validates too.
                if (isNaN(start) || isNaN(end) || end - start > allow) {
                    if (dev_tools_msg) {
                        alert(dev_tools_msg);
                    }
                }
            }
            if (window.attachEvent) {
                if (document.readyState === "complete" || document.readyState === "interactive") {
                    detectDevTool();
                    window.attachEvent('onresize', detectDevTool);
                    window.attachEvent('onmousemove', detectDevTool);
                    window.attachEvent('onfocus', detectDevTool);
                    window.attachEvent('onblur', detectDevTool);
                } else {
                    setTimeout(argument.callee, 0);
                }
            } else {
                window.addEventListener('load', detectDevTool);
                window.addEventListener('resize', detectDevTool);
                window.addEventListener('mousemove', detectDevTool);
                window.addEventListener('focus', detectDevTool);
                window.addEventListener('blur', detectDevTool);
            }
        }
    }();
}

export default preventCopy
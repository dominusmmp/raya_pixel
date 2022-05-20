'use strict';

// Alert Bar Main Function
function alertBar(options = {
    alertWidth: '',
    alertHeight: '',
    alertBackground: '',
    alertTextColor: '',
    alertShadow: '',
    alertSticky: true,
    alertPosition: 'top',
    zIndex: 1000,
    blur: 3 //px
}) {

    // Variables and Elements
    let body = document.body;
    let alertEl = document.createElement('div');

    // Styles
    alertEl.style = `z-index: ${options.zIndex}; backdrop-filter: blur(${options.blur}px);`
    alertEl.style.width = options.alertWidth || '100%';
    alertEl.style.height = options.alertHeight || '64px';
    alertEl.style.background = options.alertBackground || 'rgba(0, 95, 255, 0.75)';
    alertEl.style.color = options.alertTextColor || '#fff';
    alertEl.style.position = (options.alertSticky) ? 'sticky' : 'unset';
    (options.alertPosition == 'bottom')
        ? alertEl.style.bottom = '0'
        : alertEl.style.top = '0';
    (options.alertPosition == 'bottom')
        ? alertEl.style.boxShadow = '0px -5px 5px 1px rgba(0, 0, 0, .1)'
        : alertEl.style.boxShadow = '0px 5px 5px 1px rgba(0, 0, 0, .1)';

    // Append Alert Bar To Body
    (options.alertPosition == 'bottom')
        ? body.appendChild(alertEl)
        : body.insertBefore(alertEl, body.firstChild);
}

export default alertBar;
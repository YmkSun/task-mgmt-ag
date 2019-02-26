/* Insert domload code snippet here to support async onload event */
/* https://github.com/WebReflection/DOMContentLoaded/blob/master/DOMContentLoaded.js for DOMContentLoaded */
(function(win, doc, element, src, name, a, m) {
    win['moa_displayscript'] = name;
    win[name] = win[name] || function() {
        (win[name].q = win[name].q || []).push(arguments)
    }, win[name].l = 1 * new Date();
    a = doc.createElement(element), m = doc.getElementsByTagName(element)[0];
    a.async = 1;
    a.setAttribute('data-cfasync','false'); // to prevent caching from cloudflare's rocketscript.
    a.src = src;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://static.myopenads.com/display-sdk-loader.min.132.js', 'mt');

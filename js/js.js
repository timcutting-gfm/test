// Detect IE, suggest using Edge.
var ie = (function() {
    var undef, rv = -1; // Return value assumes failure.
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf('MSIE ');
    var trident = ua.indexOf('Trident/');
    if (msie > 0) { // IE 10 or older => return version number
        rv = parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    } else if (trident > 0) { // IE 11 (or newer) => return version number
        var rvNum = ua.indexOf('rv:');
        rv = parseInt(ua.substring(rvNum + 3, ua.indexOf('.', rvNum)), 10);
    }
    return ((rv > -1) ? rv : undef);
}());

if (ie) { // Looks we got ourselves an IE user...
    (navigator.userAgent.indexOf('Windows NT 10')) ? edge = true: edge = false;
    if (edge) { // Is IE on Windows 10
        var ieCopy = 'It looks like you\'re using Internet Explorer. Some features of this site may not work as intended. You can open this page in Microsoft Edge if you like.';
    } else { // Is IE on Windows < 10
        var ieCopy = 'It looks like you\'re using Internet Explorer. Some features of this site may not work as intended.';
    }

    var ieBody = document.getElementsByTagName('body')[0];
    var ieContainer = document.createElement('div');
    var ieOpen = document.createElement('a');
    var ieClose = document.createElement('button');

    ieOpen.id = 'ieOpen';
    ieOpen.classList.add('ieBtn');
    ieOpen.innerText = 'Open in Microsoft Edge';
    ieOpen.setAttribute('href', 'microsoft-edge:' + window.location);

    ieClose.id = 'ieClose';
    ieClose.classList.add('ieBtn');
    ieClose.innerText = 'I\'m OK, close this';
    ieClose.setAttribute('onclick', 'ieBody.removeChild(ieContainer);');

    ieContainer.id = 'ieContainer';
    ieContainer.classList.add('row');
    ieContainer.innerHTML = ieCopy;
    ieContainer.appendChild(ieOpen);
    ieContainer.appendChild(ieClose);

    ieBody.insertBefore(ieContainer, ieBody.firstChild);

    (function() {
        if (typeof NodeList.prototype.forEach === "function") return false;
        NodeList.prototype.forEach = Array.prototype.forEach;
    })();
}

// Nav Stuff...
document.getElementById('nav-items').addEventListener('click', function(e) {
    if (e.target.classList.contains('sub-menu')) {
        document.querySelectorAll('.sub-menu').forEach(function(el) {
            el.classList.add('closed');
        });
        e.target.classList.toggle('closed');
    }
});

// Nav UI...
document.getElementById('nav-open').addEventListener('click', function() {
    document.getElementById('nav').classList.toggle('open');
    this.classList.toggle('active');
});
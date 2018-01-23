// polyfill for IE (mostly)...
(function() {
    if (typeof NodeList.prototype.forEach === "function") return false;
    NodeList.prototype.forEach = Array.prototype.forEach;
})();
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
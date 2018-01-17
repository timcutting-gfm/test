// Nav Stuff...
document.getElementById('nav-items').addEventListener('click', function(e){
    if( e.target.classList.contains('sub-menu') ){
        e.target.classList.toggle('closed');
    }
});
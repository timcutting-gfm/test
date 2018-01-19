// Nav Stuff...
document.getElementById('nav-items').addEventListener('click', function(e){
    if( e.target.classList.contains('sub-menu') ){
        document.querySelectorAll('.sub-menu').forEach(element => {
            element.classList.add('closed');
        });
        e.target.classList.toggle('closed');
    }
});
// Nav UI...
document.getElementById('nav-open').addEventListener('click',function(){
    document.getElementById('nav').classList.toggle('open');
    this.classList.toggle('active');
});
$('document').ready(function(){
    AOS.init();
    $("#cerrar, #bars").on('click',function () {
        $("#menu").toggleClass('active');
    })
});
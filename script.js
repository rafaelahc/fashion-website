$(".my-account").hover(function () {
    $(".modal-white").css('display', 'flex');
},
    function(){
        $(".modal-white").css('display', 'none');
    }
);


$('#btn-mobile').click(function () {
    $('#nav').toggleClass('active');
});

$(document).ready(function(){
    $('.openModalBtn').click(function(){
        $('.modal-content').css("animation","0.5s ease-in 0s 1 normal none running slideleft")
        $('#modalContainer').css("display","block");
        

    })
    $('#closeModalBtn').click(function(){
        $('.modal-content').css("animation","auto ease 0s 1 normal none running none")
        $('#modalContainer').css("display","none");
       

    })
    $('a[href="#bookaduit"]').click(function(){
        $('.modal-content').css("animation","0.5s ease-in 0s 1 normal none running slideleft")
        $('#modalContainer').css("display","block");
    })
})


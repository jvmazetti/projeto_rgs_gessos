$('.menu-hamburguer').click(function(){
    $('nav').slideToggle();
})

$(document).ready(function(){
    $('#imagens-carrosel').slick({
        autoplay:true,
    })
})

$(document).ready(function(){
    $('.depoimentos').slick({
        autoplay:true,
    },1000)
})

$('.botao-sim').click(function(){
    $('.segunda-pergunta').slideDown();
})

$('.botao-nao').click(function(){
    $('.segunda-pergunta').slideUp();
})

$('.segundo-nao').click(function(){
    $('.segunta-pergunta').slideUp();
})
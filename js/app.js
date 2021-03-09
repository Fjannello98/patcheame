'use strict'; //El uso estricto permite encontrar errores antes.


$( document ).ready(function() {
    shopping_cart.Iniciate_cart();
    $('#mount').html(`<i class="fas fa-dollar-sign" aria-hidden="true"></i> ${shopping_cart.cart_mount}`);
    carouselMainData.forEach(element=>
        $("#carousel-main").append(`
        <div class="carousel-main-item">
        <img id="carousel-img-${element.item}" class="d-none animate__animated" src="${element.foto.src}" alt="${element.foto.alt} data-item="${element.item}">
        </div>`)
    );
    setTimeout(()=> $("#carousel-img-1").removeClass("d-none").addClass("animate__bounceInDown"), 100);
    setTimeout(()=> $("#carousel-img-2").removeClass("d-none").addClass("animate__bounceInDown"), 200);
    setTimeout(()=> $("#carousel-img-3").removeClass("d-none").addClass("animate__bounceInDown"), 300);            
});

$(document).on("scroll",()=>{
    if(this.scrollY!=0){
        $("#header").css({ 
             'background-color' : '#FFFF95',
             'background-image':'', 
             'z-index':'2',        
            });
    }
    else{
        $("#header").css({ 
            'background-color' : '',
            'background-image':'linear-gradient(#FFFF95,rgba(153,212,243,0.60);)',          
           });
    }
})



$(".form-item").on('change',()=>{
    shopping_cart.Iniciate_cart();
    $('#mount').html(`<i class="fas fa-dollar-sign" aria-hidden="true"></i> ${shopping_cart.cart_mount}`);
});





$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

$(".tamaño").on("blur",()=>{
    if ($("#tamaño-width").val()>20 || $("#tamaño-width").val()<0 || $("#tamaño-height").val()<0 || $("#tamaño-height").val()>30 ){
        $("#tamaño-width,#tamaño-height").prop("value",0);
    }
})

$("#cantidad-colores").on("blur",()=>{
    if ($("#cantidad-colores").val()<1){
        $("#cantidad-colores").prop("value",1);
    }
})


/*var themeCounter=0;
$("#change-theme").click(function(){
    let tema = $("#theme");
    themeCounter++;
    if (themeCounter%2!=0){
    tema.attr('href','styles/main-pink.css');
    }else {
    tema.attr('href','');    
    }
})
*/

var carouselMainData=[
       {nombre: "parche-1",
       item:1,
       foto: {
           src:"images/carousel-main/parche-1.webp",
           alt:"Parche de esqueleto"
       },
       },
       {
        nombre: "parche-2",
        item:2,
        foto: {
            src:"images/carousel-main/parche-2.webp",
            alt:"Parche de war is over"
        },
        },
        {
            nombre: "parche-3",
            item:3,
            foto: {
                src:"images/carousel-main/parche-3.webp",
                alt:"Parche de how you doin"
            },
        }

]



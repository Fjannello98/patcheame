'use strict'; //El uso estricto permite encontrar errores antes.

var cart=0;
var tamaño;
var cant_puntadas;
var cant_colores;
var fondo; // Bordado o liso
var flag_fondo;
var tamaño_termoadhesivo;
var cant_bordados; // 20, 50 o 100
var flag_cantidadBordados;


$( document ).ready(function() {
    fondo=$('#fondo').val();
    localStorage.setItem("Fondo",fondo);
    cant_bordados=$('#bordados').val();
    localStorage.setItem("cant_bordados",cant_bordados);
    Iniciate_cart();
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
             'background-color' : '#fbccd1',
             'background-image':'', 
             'z-index':'2',        
            });
    }
    else{
        $("#header").css({ 
            'background-color' : '',
            'background-image':'linear-gradient(#fbccd1,rgba(153,212,243,0.60))',          
           });
    }
})

$("#fondo").on('change',()=>{
    cart=cart-flag_fondo;
    fondo=$('#fondo').val();
    localStorage.setItem("Fondo",fondo);
    switch (fondo){
        case "fondo-bordado":
            flag_fondo=10;
            break;
        case "fondo-tela": 
            flag_fondo=20;
            break;         
    }
    cart+=flag_fondo;
    $('#mount').html(`<i class="fas fa-dollar-sign" aria-hidden="true"></i> ${cart}`);
});

$("#bordados").on('change',()=>{
    cart=cart-flag_cantidadBordados;
    cant_bordados=$('#bordados').val();
    localStorage.setItem("cant_bordados",cant_bordados);
    switch (cant_bordados){
        case "bordados-20":
            flag_cantidadBordados=2;
            break;
        case "bordados-50": 
            flag_cantidadBordados=5;
            break;
        case "bordados-100": 
            flag_cantidadBordados=7;
            break;         
    }
    cart+=flag_cantidadBordados;
    $('#mount').html(`<i class="fas fa-dollar-sign" aria-hidden="true"></i> ${cart}`);
})

function Iniciate_cart(){
    switch (fondo){
        case "fondo-bordado": 
         flag_fondo=10;
         break;
        case "fondo-tela": 
        flag_fondo=20; 
        break;
    }  
    switch (cant_bordados){
        case "bordados-20":
            flag_cantidadBordados=2;
            break;
        case "bordados-50": 
            flag_cantidadBordados=5;
            break;
        case "bordados-100": 
            flag_cantidadBordados=7;
            break;         
    }

    cart+=flag_cantidadBordados+flag_fondo; 
    $('#mount').html(`<i class="fas fa-dollar-sign" aria-hidden="true"></i> ${cart}`)    
    
}

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


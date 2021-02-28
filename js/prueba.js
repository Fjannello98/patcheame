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
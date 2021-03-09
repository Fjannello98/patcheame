class Shoppingcart{
    constructor(){
        this.cart_mount;
        this.cart_basicPrice=200;
        this.tamaño_width=0;
        this.tamaño_height=0;
        this.tamaño=0;
        this.colores=0;
        this.termoadhesivo_mount=0;
        this.colores_mount=0;
        this.tela_mount=0;
        this.entretela_mount=0;
        this.fondohilo_mount=0;
    }
    Iniciate_cart(){
        this.cart_mount=this.cart_basicPrice;
        this.setTamaño();
        this.setTermoadhesivoMount();
        this.setFondoHilo();
        this.setTelayEntretela();
        this.setColores();
        this.cart_mount+=this.termoadhesivo_mount+this.tela_mount+this.entretela_mount+this.fondohilo_mount+this.colores_mount;
        this.cart_mount=parseInt(this.cart_mount);
    }
    setTamaño(){
        this.tamaño_width= Number($("#tamaño-width").val());
        this.tamaño_height= Number($("#tamaño-height").val());
        this.tamaño=parseFloat(this.tamaño_width*this.tamaño_height);
    }
    setTermoadhesivoMount(){
        if( $('#termoadhesivo').prop('checked')){
                this.termoadhesivo_mount=parseFloat(this.tamaño*0.36);
        } else {
            this.termoadhesivo_mount=0;
        }
    }
    setTelayEntretela(){
        this.entretela_mount=parseFloat(this.tamaño*0.24);
        this.tela_mount=parseFloat(this.tamaño*0.1);
    }
    setFondoHilo(){
        let fondohilo= $("#fondohilo").val();
        switch (fondohilo){
                case "fondo-bordado": 
                 this.fondohilo_mount=parseFloat(this.tamaño*0.13);
                 break;
                case "fondo-semibordado": 
                 this.fondohilo_mount=parseFloat(this.tamaño*0.13*0.75);
                 break;
                case "fondo-tela": 
                 this.fondohilo_mount=parseFloat(this.tamaño*0.13*0.5);
                 break;
       }
    }
    setColores(){
        let cantidad_colores= parseFloat($("#cantidad-colores").val());
        this.colores_mount=cantidad_colores*10;

    }

    
}

let shopping_cart=new Shoppingcart(0,0,0,0,0,0,0,0,0,0);
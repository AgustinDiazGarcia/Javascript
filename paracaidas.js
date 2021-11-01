function abrirParacaidas (velocidad, altura) {
    if (velocidad < 1000 && altura >= 2000 && altura < 3000){
        console.log("Abrir paracaidas")
    }else{
        console.log("Te pegaste un palo");
    }
}

abrirParacaidas (800, 2500);


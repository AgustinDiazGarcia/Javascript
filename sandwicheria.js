let precionFinal
function seleccionBase(tipoSandwich){
    switch (tipoSandwich){
        case 'pollo':
            precionFinal = 150;
        break;
        case 'carne':
            precionFinal = 200;
        break;
        case 'vegetariano':
            precionFinal = 100;
        break;
        default:
            console.log('debe selecionar un tipo de sandwich')
    }
    return precionFinal;    
}

function seleccionPan(tipoPan) {
    switch (tipoPan){
        case 'blanco':
            precionFinal = 50;
        break;
        case 'negro':
            precionFinal = 60;
        break;
        case 'sin gluten':
            precionFinal = 75;
        break;
        default:
            console.log('debe elegir un tipo de pan');
    }
    return precionFinal;
}

function seleccionTopic (queso, tomate, lechuga, cebolla, mayonesa, mostaza){
    let precionFinal = 0
    if (queso == true){
        precionFinal += 20;
    }
    if (tomate == true){
        precionFinal += 15; 
    }
    if (lechuga == true){
        precionFinal += 10;
    }
    if (cebolla == true){
        precionFinal += 15;
    }
    if (mayonesa == true){
        precionFinal += 5;
    }
    if (mostaza == true){
        precionFinal += 5;
    }
    return precionFinal
}

console.log(seleccionBase('carne') + seleccionPan('negro') + seleccionTopic(true, true, true, false, true, false ));

let vehiculo = "moto";
let litrosConsumidos = 10;
let precio

switch (vehiculo){
    case "coche": 
         precio = 86;
    break;
    case "moto":
         precio = 70;
    break;
    case "colectivo":
         precio = 55;
    break;
}

function totalAPagar(precio, litrosConsumidos){
    return precio * litrosConsumidos;
}

console.log(totalAPagar (precio, 10))

function esPar(numero){
    if (numero % 2 == 0) {//if (i%2 == 0) significa "si el resto de dividir i entre 2 es cero... (es decir, si el número es par...)"
        return "El numero es par"
    }else{
        return "el numero es impar"
    }
}

console.log(esPar(4));
console.log(esPar(6));
function tablaDeMultiplicar(numero) {
    let i = 1;
   do{
       console.log(numero + " * " + i + " = " + numero*i);
       i++
   } 
   while (i <= 10);
}
console.log(tablaDeMultiplicar(5));
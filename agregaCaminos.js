//Agregá caminos
//"null"


let edad=23

if(edad<0){
    console.log("Error, edad inválida. Por favor ingrese un número válido.");
}
else if(edad<18){
    console.log("No puede pasar al bar.");
}
else if(edad<21){
    console.log("Puede pasar al bar, pero no puede tomar alcohol.");
}

else if(edad==21){
    console.log("Puede pasar al bar y tomar alcohol. Felicitaciones, eres mayor de edad");
}

else {
    console.log("Puede pasar al bar y tomar alcohol.")
}

if(edad%2 !==0){
    console.log ("¿Sabías que tu edad es impar?");
}


//¿cómo se hace para que tome varios else?? porque es como que determina que uno es la respuesta que me tiene que dar, no me da varias líneas de respuesta...
//debería ser una función?? cómo se hace eso??
//este es un ejemplo que encontré
/*
else if(function esimpar(edad)){
    if (edad%2 !== 0)
    return true;
    else
    return false;
    console.log ("¿Sabías que tu edad es impar?");
}
*/

//hay que hacerlo con null o con default??

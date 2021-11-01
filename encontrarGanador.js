const alicia = [ 23, 69, 32];
const bob = [12, 67, 43];

function encontrarGanador (a, b){
  
let puntosPrimerParticipante = 0;
let puntosSegundoParticipante = 0;

for (let i = 0; i < a.length; i++){
    if(a[i]> b[i]){
        puntosPrimerParticipante++
    }else if(a[i]< b[i]){
        puntosSegundoParticipante++
    }else{
        return "no suma puntos";
    }
}

    if(puntosPrimerParticipante > puntosSegundoParticipante){
        return "Alicia"
    }else if (puntosPrimerParticipante < puntosSegundoParticipante){
        return " Bob"
    }else{
        return "Empate"
    }    

}


console.log("El ganador es: " + encontrarGanador(alicia, bob));
let palabra 
function traductor(palabra){
    switch (palabra){
        case 'perro':
            console.log('dog');
        break;
        case 'pelota':
            console.log('ball');
        break;
        case 'arbol':
            console.log('tree');
        break;    
        case 'genio':
            console.log ('ginius')
        break;
        default:
            console.log('la palabra ' + palabra + ' es incorrecta')
    }
    return palabra;
}

traductor('genio');

function CalcularMediaArigmetica(lista){
    // let sumaLista = 0;
    // for(let i=0 ; i<lista.length ; i++){
    //     sumaLista += lista[i]
    // }
    const sumaLista = lista.reduce(
        function(callback = 0,currentValue){
            console.log(callback,currentValue)
            return callback + currentValue;
        }
    );

    return promedio = (sumaLista/lista.length)
}
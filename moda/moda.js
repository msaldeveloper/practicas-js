// const lista1 = [1,2,3,4,1,2,3,4,1,1,2,2,2,2]
function moda(lista1){
    
    const lista1Count = {}
    lista1.map(
        function(elemento){
            if(lista1Count[elemento]){
                lista1Count[elemento] += 1; 
            }else{
                lista1Count[elemento]=1
            } 
        }
    );
    const lista1Array = Object.entries(lista1Count).sort(
        function(valorAcumulado,nuevoValor){
            return valorAcumulado[1] - nuevoValor[1]
    });
    console.log(lista1Array)
    console.log("la moda es " + lista1Array[lista1Array.length -1][0])
}
// const lista1Count = {}
// lista1.map(
//     function(elemento){
//         if(lista1Count[elemento]){
//             lista1Count[elemento] += 1; 
//         }else{
//             lista1Count[elemento]=1
//         } 
//     }
// );
// const lista1Array = Object.entries(lista1Count).sort(
//     function(valorAcumulado,nuevoValor){
//         return valorAcumulado[1] - nuevoValor[1]
// });
// console.log(lista1Array)
// console.log("la moda es " + lista1Array[lista1Array.length -1][0])


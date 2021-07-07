
// const lista1 = [100,200,500,100000,20,2]
// const mitadLista1 = lista1.length /2 
// const listaOrdenada = lista1.sort(function(a,b){return a-b})
// const mediapar = (listaOrdenada[mitadLista1]+listaOrdenada[mitadLista1-1])/2
// console.log(mediapar)
function mediana(lista){
    if(lista.length % 2 ===0){
        const mitadLista1 = lista.length /2 
        const listaOrdenada = lista.sort(function(a,b){return a-b})
        const mediapar = (listaOrdenada[mitadLista1]+listaOrdenada[mitadLista1-1])/2
        console.log(listaOrdenada)
        console.log(mediapar)
    }else{
        const mitadLista1 = parseInt(lista.length /2)
        const listaOrdenada = lista.sort(function(a,b){return a-b})
        const mediapar = listaOrdenada[mitadLista1]
        console.log(listaOrdenada)
        console.log(mediapar)
    }
    
}
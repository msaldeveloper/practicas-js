// const  precioOriginal = 120
// const descuento = 18

precioConDescuento = (precioOriginal,descuento) =>{
    const porccentajePrecioConDescuento = 100 - descuento
    const precioConDescuento = precioOriginal * (porccentajePrecioConDescuento)/100
    return precioConDescuento
}


function Discount(){
    const inputPrice = document.getElementById("InputPrice")
    const price =inputPrice.value;
    const inputDiscount = document.getElementById("InputDiscount")
    const discount = inputDiscount.value
    const precioFinal =precioConDescuento(price,discount)
    const resultP = document.getElementById("ResultPrice")
    resultP.innerText = `El precio con descuento es $${precioFinal}`
    
}

function Discount20(){
    const inputPrice = document.getElementById("InputPrice")
    const price =inputPrice.value;
    const discount = 20
    const precioFinal =precioConDescuento(price,discount)
    const resultP = document.getElementById("ResultPrice")
    resultP.innerText = `El precio con descuento es $${precioFinal}`
}

function Discount30(){
    const inputPrice = document.getElementById("InputPrice")
    const price =inputPrice.value;
    const discount = 30
    const precioFinal =precioConDescuento(price,discount)
    const resultP = document.getElementById("ResultPrice")
    resultP.innerText = `El precio con descuento es $${precioFinal}`
}

function Discount40(){
    const inputPrice = document.getElementById("InputPrice")
    const price =inputPrice.value;
    const discount = 40
    const precioFinal =precioConDescuento(price,discount)
    const resultP = document.getElementById("ResultPrice")
    resultP.innerText = `El precio con descuento es $${precioFinal}`
}

function Discount50(){
    const inputPrice = document.getElementById("InputPrice")
    const price =inputPrice.value;
    const discount = 50
    const precioFinal =precioConDescuento(price,discount)
    const resultP = document.getElementById("ResultPrice")
    resultP.innerText = `El precio con descuento es $${precioFinal}`
}
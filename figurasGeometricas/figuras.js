//cuadrado
//perimetro cuadrado de 5 cm
console.group("Cuadrado")

function perimetroCuadrado(ladoCuadrado){
    return ladoCuadrado * 4;
}

function areaCuadrado(ladoCuadrado){
    return ladoCuadrado * ladoCuadrado
}


//triangulo
console.group("Triangulo")
function perimetroTriangulo(baseTriangulo,lado2Triangulo,lado3Triangulo){
    let base = parseInt(baseTriangulo)
    let lado1 = parseInt(lado2Triangulo)
    let lado2 = parseInt(lado3Triangulo)
    return base + lado1 +lado2
}

function areaTriangulo(baseTriangulo,alturaTriangulo){
    return (baseTriangulo*alturaTriangulo)/2
}

console.groupEnd()

//circulo
console.group("circulo")

function diametroCirculo(radioCirculo){
    return radioCirculo * 2
}

function circunferencia(diametroCirculo){
    const pi =Math.PI
    return diametroCirculo *pi
}
function areaCirculo(radioCirculo){
    const pi =Math.PI
    return pi*(radioCirculo*radioCirculo)
}

console.groupEnd


//interaccion con html cuadrado

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado")
    const value = input.value;
    const perimetro = perimetroCuadrado(value)
    alert(perimetro);
    
}


function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado")
    const value = input.value;
    const area = areaCuadrado(value)
    alert(area);
}

//interaccion con html triangulo

function calcularPerimetroTriangulo(){
    const lado1 = document.getElementById("lado1Triangulo")
    const value1 = lado1.value;
    const lado2 = document.getElementById("lado2Triangulo")
    const value2 = lado2.value;
    const base = document.getElementById("baseTriangulo")
    const basee = base.value;
    const perimetro = perimetroTriangulo(value1,value2,basee)
    alert(perimetro);
    
}


function calcularAreaTriangulo(){
    const altura = document.getElementById("alturaTriangulo")
    const value2 = altura.value;
    const base = document.getElementById("baseTriangulo")
    const basee = base.value;
    const perimetro = areaTriangulo(value2,basee)
    alert(perimetro);
}
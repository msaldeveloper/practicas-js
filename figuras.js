//cuadrado
//perimetro cuadrado de 5 cm
console.group("Cuadrado")
const ladoCuadrado = 5;
console.log(`los lados del cuadrado miden ${ladoCuadrado} cm`)
const perimetroCuadrado = ladoCuadrado * 4;
console.log(`el perimetro del cuadrado es ${perimetroCuadrado} cm`)
const areaCuadrado = ladoCuadrado * ladoCuadrado
console.log(`el area del cuadrado es  ${areaCuadrado} cm^2`)
console.groupEnd()

//triangulo
console.group("Triangulo")
const lado1Triangulo = 6
const lado2Triangulo = 6
const baseTriangulo = 4
const alturaTriangulo = 5.5
console.log(`los lados de mi trangulo son:
lado1: ${lado1Triangulo}
lado2: ${lado2Triangulo}
base: ${baseTriangulo}
altura: ${alturaTriangulo}`
)
const perimetroTriangulo = lado1Triangulo + lado2Triangulo + baseTriangulo
console.log(`el perimetro del triangulo es ${perimetroTriangulo} cm`)
const areaTriangulo = (baseTriangulo * alturaTriangulo)/2;
console.log(`el area del triangulo es ${areaTriangulo} cm^2`)

console.groupEnd()

//circulo
console.group("circulo")
const radioCirculo = 4
console.log(`El radio del circulo es ${radioCirculo} cm`)
const diametroCirculo = radioCirculo*2
console.log(`El diametro de nuesto circulo es ${diametroCirculo} cm`)
const pi =Math.PI
console.log(`pi es igual a ${pi} cm`)
const circunferencia = diametroCirculo *pi
console.log(`La circunferencia de nuestro circulo es  ${circunferencia} cm`)
const area = pi*(radioCirculo*radioCirculo)
console.log(`El area de nuestro circulo es ${area} cm^2`)

console.groupEnd


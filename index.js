const suma  = (a,b) => a + b;
const resta = (a,b) => a - b;

const iva = x => x * 0.21; 

let producto  = parseInt (prompt("¡Hola! ingresa el precio de tu producto y te calcularemos su valor con el impuesto IVA"));


let nuevoPrecio = suma(producto, iva(producto));
console.log(nuevoPrecio);
alert ("El precio de tu producto con el impuesto IVA es de: " + nuevoPrecio)

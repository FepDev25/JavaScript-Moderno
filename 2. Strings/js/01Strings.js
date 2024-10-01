/****************************** Strings *******************************/

// Represetan texto que se pueden asignar a una variable
const producto = "Monitor de 20 pulgadas";
const productoEspacios = "                              Celular con espacios                  ";
const producto2 = String("Celular Samsung");
const producto3 = new String("Tablet Samsung");
const producto4 = "Monitor de 40 \"pulgadas\"";
const muchosProductos = 'Carne, Queso, Coca Cola, Mentas, Tabacos';

console.log("Producto:", producto);
console.log("Producto2:", producto2);
console.log("Producto3:", producto3);
console.log("Producto4:", producto4);

console.log("Tipo de producto:", typeof producto);
console.log("Tipo de producto2:", typeof producto2);
console.log("Tipo de producto3:", typeof producto3);

console.log("Tamaño de la cadena:", producto.length);
console.log("Índice de 'pulgad':", producto.indexOf("pulgad"));
console.log("Contiene 'pulgad':", producto.includes("pulgad"));
console.log("Contiene 'xoxo':", producto.includes("xoxo"));
console.log("Todo a minúsculas:", producto.toLowerCase());
console.log("Todo a mayúsculas:", producto.toUpperCase());
console.log("Empieza con 'M':", producto.startsWith("M"));
console.log("Termina con 'pulgadas':", producto.endsWith("pulgadas"));
console.log("Porción de la cadena (slice):", producto.slice(0, 7));
console.log("Porción de la cadena (substring):", producto.substring(0, 7));
console.log("Porción de la cadena (substring):", producto.substring(7, 0)); // Modifica a 0,7 en caso de que el segundo numero sea menor
console.log("Reemplazo '20' con '21':", producto.replace("20", "21"));
console.log("Repetir chelsea:", 'chelsea'.repeat(8));
console.log("Elimina espacios:", productoEspacios.trim()); // Tambien existe trimEnd y trimStart
console.log("Carácter en índice 0:", producto.charAt(0));
console.log("Dividir en array:", muchosProductos.split(", "));

const producto5 = "Monitor de 24 pulgadas";
const precio = "300 USD";
console.log("Concatenación:", producto5.concat(" ", precio, "."));
const descripcion = `${producto5} cuesta ${precio}.`;
console.log("Descripción:", descripcion);

const nombre = "Felipe Peralta";
const email = "felipe@gmail.com";
const concatenado = nombre + " " + email;
console.log(concatenado)

const concatenado2 = `${nombre} ${email}`;
console.log(concatenado2)

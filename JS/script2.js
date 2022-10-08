//2DA VERSION DE JS
//2DA VERSION DE JS
//2DA VERSION DE JS

//Metemos ARRAYS

//Funcion para los productos con nombre, precio y stock

function Producto(nombre, precio, stock){
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock || 0;
    this.restarStock = function(cantidad){
        this.stock -= cantidad
    }
    this.sumarStock = function(cantidad){
        this.stock += cantidad
    }
}

/*Productos, precios y stock */

let productoA = new Producto("AdidasZx", 24.999, 19)
let productoB = new Producto("NikeAir", 41.799, 20)
let productoC = new Producto("PumaRs", 32.599, 20)
let productoD = new Producto("FilaEuro", 15.799, 16)

let listProductos = [productoA, productoB, productoC, productoD]

let listNombres = []

//Ordenando
for(const prod of listProductos){
    if(prod.stock > 0){
        listNombres.push(prod.nombre)
    }
}

let precioTotal = 0

/*Entrando a la Página*/
alert("¡AVISO!: Contamos con menos de 20 stocks de cada zapatilla por la enorme cantidad de ventas")

alert("Actualmente disponemos de estas zapatillas: \n - " + listNombres.join("\n - "))

//Uso del funciones para calculos

function calcularPrecio(cantidad, precio){
    precioTotal += (cantidad * precio)
}

function calcularStock(cantidad, stock, precio){
    if(cantidad <= stock){
        calcularPrecio(cantidad, precio)
    }
    else{
        alert("Disponemos de " + stock + " disponibles")
    }
}

let cantidadCompra = prompt("Ingrese la cantidad de pares de zapatillas que desee comprar:")

/*Usamos for para preguntar la cantidad de productos y pares que va a comprar */
for(let i = 0; i < cantidadCompra; i = i + 1){

    let productoCompra = prompt("Ingrese el simplificado de que producto desea comprar: \n - (zx)Zapatillas adidas Zx 1k Boost - \n - (air)Zapatillas Nike Air Force 1 Lv8 - \n - (rs)Zapatillas Puma Rs-Fast Limiter - \n - (jog)Zapatillas Fila Euro Jogger Sport")

    if(productoCompra.toUpperCase() == 'ZX'){
        let cantidadProductoZx = prompt("Cuantos pares de " + productoA.nombre + " desea comprar:")
        if(cantidadProductoZx <= productoA.stock){
            precioTotal = precioTotal + (cantidadProductoZx * productoA.precio)
        }
        else{
            alert("Actualmente disponemos solo de " + stockProductoA + " pares de este producto")
        }
    }
    else if(productoCompra.toUpperCase() == 'AIR'){
        let cantidadProductoAir = prompt("Cuantos pares de " + productoB.nombre + " desea comprar:")
        if(cantidadProductoAir <= productoB.stock){
            precioTotal = precioTotal + (cantidadProductoAir * productoB.precio)
        }
        else{
            alert("Actualmente disponemos solo de " + stockProductoB + " pares de este producto")
        }
    }
    else if(productoCompra.toUpperCase() == 'RS'){
        let cantidadProductoRs = prompt("Cuantos pares de " + productoC.nombre + " desea comprar:")
        if(cantidadProductoRs <= productoC.stock){
            precioTotal = precioTotal + (cantidadProductoRs * productoC.precio)
        }
        else{
            alert("Actualmente disponemos solo de " + stockProductoC + " pares de este producto")
        }
    }
    else if(productoCompra.toUpperCase() == 'JOG'){
        let cantidadProductoJog = prompt("Cuantos pares de " + productoD.nombre + " desea comprar:")
        if(cantidadProductoJog <= productoD.stock){
            precioTotal = precioTotal + (cantidadProductoJog * productoD.precio)
        }
        else{
            alert("Actualmente disponemos solo de " + stockProductoD + " pares de este producto")
        }
    }

    else{
        alert("No disponemos de ese producto actualmente")
    }

    if(precioTotal != 0){
        alert("El precio total es: " + precioTotal)
        console.log("El precio total del cliente es:", precioTotal)
    }

}
alert("Te estaremos contactando para hacerte llegar tus pedidos")
alert("Muchas gracias por tu compra")
alert("Gracias por visitar la página")
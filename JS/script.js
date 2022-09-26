/*Productos y precios */
let nombreProductoA = 'AdidasZx'
let precioProductoA = 24.999
let stockProductoA = 19

let nombreProductoB = 'NikeAir'
let precioProductoB = 41.799
let stockProductoB = 20

let nombreProductoC = 'PumaRs'
let precioProductoC = 32.599
let stockProductoC = 13

let nombreProductoD = 'FilaEuro'
let precioProductoD = 15.799
let stockProductoD = 16

let precioTotal = 0

/*Entrando a la Página*/
alert("¡AVISO!: Contamos con menos de 20 stocks de cada zapatilla por la enorme cantidad de ventas")

alert("Actualmente disponemos de estas zapatillas: \n - Zapatillas adidas Zx 1k Boost - \n - Zapatillas Nike Air Force 1 Lv8 - \n - Zapatillas Puma Rs-Fast Limiter - \n - Zapatillas Fila Euro Jogger Sport")

let cantidadCompra = prompt("Ingrese la cantidad de pares de zapatillas que desee comprar:")

/*Usamos for para preguntar la cantidad de productos y pares que va a comprar */
for(let i = 0; i < cantidadCompra; i = i + 1){

    let productoCompra = prompt("Ingrese el simplificado de que producto desea comprar: \n - (zx)Zapatillas adidas Zx 1k Boost - \n - (air)Zapatillas Nike Air Force 1 Lv8 - \n - (rs)Zapatillas Puma Rs-Fast Limiter - \n - (jog)Zapatillas Fila Euro Jogger Sport")

    if(productoCompra.toUpperCase() == 'ZX'){
        let cantidadProductoZx = prompt("Cuantos pares de " + nombreProductoA + " desea comprar:")
        if(cantidadProductoZx <= stockProductoA){
            precioTotal = precioTotal + (cantidadProductoZx * precioProductoA)
        }
        else{
            alert("Actualmente disponemos solo de " + stockProductoA + " pares de este producto")
        }
    }
    else if(productoCompra.toUpperCase() == 'AIR'){
        let cantidadProductoAir = prompt("Cuantos pares de " + nombreProductoB + " desea comprar:")
        if(cantidadProductoAir <= stockProductoB){
            precioTotal = precioTotal + (cantidadProductoAir * precioProductoB)
        }
        else{
            alert("Actualmente disponemos solo de " + stockProductoB + " pares de este producto")
        }
    }
    else if(productoCompra.toUpperCase() == 'RS'){
        let cantidadProductoRs = prompt("Cuantos pares de " + nombreProductoC + " desea comprar:")
        if(cantidadProductoRs <= stockProductoC){
            precioTotal = precioTotal + (cantidadProductoRs * precioProductoC)
        }
        else{
            alert("Actualmente disponemos solo de " + stockProductoC + " pares de este producto")
        }
    }
    else if(productoCompra.toUpperCase() == 'JOG'){
        let cantidadProductoJog = prompt("Cuantos pares de " + nombreProductoD + " desea comprar:")
        if(cantidadProductoJog <= stockProductoD){
            precioTotal = precioTotal + (cantidadProductoJog * precioProductoD)
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
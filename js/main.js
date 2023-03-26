

class Producto{
    constructor(id,titulo,precio,cantidad,imagen, tipo, marca){
        this.id = id
        this.titulo = titulo
        this.precio = precio
        this.cantidad = cantidad
        this.imagen = imagen
        this.tipo = tipo 
        this.marca = marca
    }
}

class StockController {

    constructor(){
        this.arrayProductos = []
    }

    agregarAlStock(produ){
        this.arrayProductos.push(produ)
    }
    existe(id){
        //retorna verdadero si el id coincide con el producto
        return this.arrayProductos.some (producto => producto.id == id)
    }
    buscarProducto (id){
        //retorna el objeto producto
        return this.arrayProductos.find(producto => producto.id == id)
    }
    consultarStock(id, num){
        //retorna verdadero si hay stock disponible 
        return (num <= this.buscarProducto(id).cantidad)
             
    }
    modificarStock(id, num){
        //elimina num cantidad de stock
        this.buscarProducto(id).cantidad -= num
    }
    mostrarProductos (){
        let mostrarProd = ""
        this.arrayProductos.forEach(elem => {
            mostrarProd += "ID:" + elem.id + "\n" + " -nombre: "  + elem.nombre +" -precio $ " + elem.precio + " -stock: "+  elem.cantidad + "\n"
           })
        console.log("nuestros productos son: ")
        console.log(mostrarProd) 
    }
    resetStock(){
        this.buscarProducto(1).cantidad=10
        this.buscarProducto(2).cantidad=5
        this.buscarProducto(3).cantidad=15
        this.buscarProducto(4).cantidad=10
        this.buscarProducto(5).cantidad=8
    }
    
}


class CarritoController {
   
    constructor(){
        this.arrayCarrito = []
    }
    verCarrito(){
        //muestra los productos agregados en el carrito
        let mostrarCarrito = ""
        this.arrayCarrito.forEach(elem => {
            mostrarCarrito += "ID: "+ elem.id + "\n" + " -nombre: "  + elem.nombre +" -precio $ " + elem.precio + " -cantidad seleccionada: "+  elem.cantidad + "\n"
           })
        console.log("Tu carrito es: ")
        console.log(mostrarCarrito) 
    }
    agregarProducto(id , num){
        //crea un nuevo objeto nProdu del tipo producto a partir del producto buscado por ID, modificando la cantidad por num
        const productoS =listaProductos.buscarProducto(id)
        const nProdu = new Producto(productoS.id, productoS.nombre, productoS.precio, productoS.cantidad); 
        nProdu.cantidad = num
        this.arrayCarrito.push(nProdu)
    }
    calcularTotal(){
        let res=0;
        this.arrayCarrito.forEach( el=> {
            res += el.precio * el.cantidad
        })
        return res
    }
    calcularIVA(){
        let res=0;
        this.arrayCarrito.forEach( el=> {
            res += el.precio * el.cantidad
        })
        return res*0.20
    }
    vaciarCarrito(){
        //se le asigna un array vacio 
        this.arrayCarrito = []
        
    }
}


const carritoCompra = new CarritoController();
const listaProductos = new StockController();


//carga de productos
listaProductos.agregarAlStock(new Producto(1,"Samsung Tab A8", 111000, 10, "assets/samsung/tablet/3.webp", "tablet", "samsung"))
listaProductos.agregarAlStock(new Producto(2,"Samsung Tab s6 Lite", 160000, 10, "assets/samsung/tablet/2.png", "tablet", "samsung"))
listaProductos.agregarAlStock(new Producto(3,"Samsung Tab s8 Ultra", 570000, 10, "assets/samsung/tablet/3.png", "tablet", "samsung"))
listaProductos.agregarAlStock(new Producto(4,"Samsung s22 Ultra", 440000, 10, "assets/samsung/celular/3.png", "celuar", "samsung"))
listaProductos.agregarAlStock(new Producto(5,"Samsung s21 FE", 238000, 10, "assets/samsung/celular/2.png", "celuar", "samsung"))
listaProductos.agregarAlStock(new Producto(6,"Samsung s23+ ", 480000, 10, "assets/samsung/celular/1.png", "celuar", "samsung"))
listaProductos.agregarAlStock(new Producto(7,"Samsung Watch5 Gray", 155000, 10, "assets/samsung/reloj/3.png", "reloj", "samsung"))
listaProductos.agregarAlStock(new Producto(8,"Samsung Watch5 Grapithe", 96000, 10, "assets/samsung/reloj/2.png", "reloj", "samsung"))
listaProductos.agregarAlStock(new Producto(9,"Samsung Watch5 Grapithe", 110000, 10, "assets/samsung/reloj/1.png", "reloj", "samsung"))
listaProductos.agregarAlStock(new Producto(10,"Samsung Buds2 White", 61000, 10, "assets/samsung/auriculares/1.png", "auriculares", "samsung"))
listaProductos.agregarAlStock(new Producto(11,"Samsung Buds pro Negro", 47000, 10, "assets/samsung/auriculares/2.png", "auriculares", "samsung"))
listaProductos.agregarAlStock(new Producto(12,"Samsung Buds2 Grafito",62000, 10, "assets/samsung/auriculares/3.png", "auriculares", "samsung"))
console.log(listaProductos)
/*listaProductos.agregarAlStock(new Producto(13,"Samsung s23 Ultra", 410000, 10, "assets/iphone/tablet/", "tablet", "iphone"))
listaProductos.agregarAlStock(new Producto(14,"Samsung s23 Ultra", 410000, 10, "assets/iphone/tablet/", "tablet", "iphone"))
listaProductos.agregarAlStock(new Producto(15,"Samsung s23 Ultra", 410000, 10, "assets/iphone/tablet/", "tablet", "iphone"))
listaProductos.agregarAlStock(new Producto(16,"Samsung s23 Ultra", 410000, 10, "assets/iphone/celular/", "celular", "iphone"))
listaProductos.agregarAlStock(new Producto(17,"Samsung s23 Ultra", 410000, 10, "assets/iphone/celular/", "celular", "iphone"))
listaProductos.agregarAlStock(new Producto(18,"Samsung s23 Ultra", 410000, 10, "assets/iphone/celular/", "celular", "iphone"))
listaProductos.agregarAlStock(new Producto(19,"Samsung s23 Ultra", 410000, 10, "assets/iphone/reloj/", "reloj", "iphone"))
listaProductos.agregarAlStock(new Producto(20,"Samsung s23 Ultra", 410000, 10, "assets/iphone/reloj/", "reloj", "iphone"))
listaProductos.agregarAlStock(new Producto(21,"Samsung s23 Ultra", 410000, 10, "assets/iphone/reloj/", "reloj", "iphone"))
listaProductos.agregarAlStock(new Producto(22,"Samsung s23 Ultra", 410000, 10, "assets/iphone/auriculares/", "auriculares", "iphone"))
listaProductos.agregarAlStock(new Producto(23,"Samsung s23 Ultra", 410000, 10, "assets/iphone/auriculares/", "auriculares", "iphone"))
listaProductos.agregarAlStock(new Producto(23,"Samsung s23 Ultra", 410000, 10, "assets/iphone/auriculares/", "auriculares", "iphone"))
*/



function agregarCard(fn){
    const miDiv = document.getElementById('cardsProductos');
    fn.forEach(elem => {
        miDiv.innerHTML += ' <img src ="${elem.imagen}" class="producto-imagen"> ';
    });
 
    
}
agregarCard(listaProductos);
 
const contenedorProductos = document.querySelector("#contenedor-productos")
  const div = document.createElement("div")
        div.classList.add("producto");
        div.innerHTML += `
            <img src="" alt="${producto.titulo}" class="producto-imagen">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id=${producto.id}>agregar</button>
            </div>
        `;
        contenedorProductos.append(div)

/*  <div class="producto">
                    <img src="assets/samsung/audio/Buds_PRO.png" alt="" class="producto-imagen">
                    <div class="producto-detalles">
                        <h3 class="producto-titulo">Auriculares 01</h3>
                        <p class="producto-precio">$1000</p>
                        <button class="producto-agregar">agregar</button>
                    </div>
                </div>
*/ 



//logica



/*rta = prompt("Para iniciar una comprar ingrese cualquier tecla \nPara salir ingrese n \n     ¿Desea comprar algun producto? ")
while (rta != "n"){
    aux= prompt("para comprar uno o varios articulos ingrese 1," + "\n" + "para vaciar el carrito ingrese 2" + "\n" +  "para mostrar el carrito ingrese 3" + "\n" + "para volver a mostrar los productos ingrese 4" )
    switch (aux) {
    case"1":
        //comprar articulo
        let id = prompt("ingrese el ID del producto que desea comprar")
        if (listaProductos.existe(id)){
            let cant = prompt("ingrese la cantidad que desea comprar")
            if(listaProductos.consultarStock(id, cant)){
                listaProductos.modificarStock(id , cant);
                carritoCompra.agregarProducto(id, cant);
                console.log("Producto agregado correctamente")
            }else{console.log("no hay suficiente stock")}
        }else{console.log("ID no encontrado")}
        break;
    case "2":
        //vaciar carrito
        carritoCompra.vaciarCarrito();
        listaProductos.resetStock();
        console.log("carrito vaciado exitosamente")
        break;
    case "3":
        //mostrar carrito y total 
        carritoCompra.verCarrito();
        console.log("total parcial es:")
        console.log(carritoCompra.calcularTotal());
        break;
    case "4":
        listaProductos.mostrarProductos();
        break;
    default:
        console.log("valor ingresado incorrecto")
    break;
}
rta = prompt("para continuar comprando ingrese cualquier tecla, para salir ingrese n")
}

if (carritoCompra.calcularTotal()>0){
    carritoCompra.verCarrito();
    console.log("El Total de su compra es: ")
    console.log (carritoCompra.calcularTotal())
    console.log("El Total del IVA es: ")
    console.log (carritoCompra.calcularIVA())
    console.log("gracias por su compra, nos vemos pronto!")
    
}
else{
    console.log ("sin productos en el carrito, hasta pronto!")
}
*/



const arrayproductos = JSON.parse(localStorage.getItem("products")); 
const tableBodyProduct = document.getElementById('table-body-product')
const searchInputProduct= document.querySelector('#buscar')
const productForm = document.querySelector("form#product-form")
const submit = productForm.querySelector('button[type=submit].btn-form')

productForm.addEventListener("submit", (evt)=>{

    evt.preventDefault()

    const el = evt.target.elements



    const id = el.id.value ? el.id.value : crypto.randomUUID()

    const productoNuevo = {

        producto: el.producto.value,
        descripcion:el.descripcion.value,
        fecha: new Date(el.fecha.value).getTime(),
        precio:el.precio.valueAsNumber,
        imagen:el.imageProduct.value,
        id:id,
    }

    if (el.id.value){
        const indice = arrayproductos.findIndex(producto =>{

            if(producto.id === el.id.value){
                return true
            }
        })

        arrayproductos[indice]= productoNuevo

        Swal.fire({
            title: 'Producto Editado',
            text: 'Los datos del Producto fueron actualizados correctamente',
            icon: 'success',
            timer: 1000
        })

    } else{
        arrayproductos.push(productoNuevo)
        Swal.fire({
            title: 'Producto Agregado',
            text: 'Producto se creo correctamente',
            icon: 'success',
            timer: 1000
        })
    }

    pintarProductos(arrayproductos)

    actualizarLocalStorage()

    resetearFormulario()
})

function resetearFormularioProduct(){
    productForm.reset()
    submitBtn.classList.remove('btn-edit')
    submitBtn.innerText = 'Agregar Producto'
    productForm.elements.producto.focus()
}









searchInputProduct.addEventListener('keyup',(evt)=>{

    const inputValue = evt.target.value.toLowerCase();

    const productosFiltrados = arrayproductos.filter(productos =>{

        const producto = productos.producto.toLowerCase()


        if(producto.includes(inputValue)){
            return true
        }

        return false

    })

    pintarProductos(productosFiltrados)


})
    pintarProductos(arrayproductos)



function pintarProductos(arrayproductos){

        tableBodyProduct.innerHTML = '';

        arrayproductos.forEach( product => {

            tableBodyProduct.innerHTML += ` <tr class="table-row">
            <td class="user-image"> <img src="${product.imagen}" alt=""></td>
    
            <td>${product.producto} </td>
            <td>${product.descripcion}</td>
            <td>${formatDate(product.fecha)}</td>
            <td> ${product.precio}  </td>
            <td>
                <button class="action-btn btn-danger" title="borrar producto"
                onclick="borrarProducto( '${product.id}', '${product.producto}'  )" >
                    <i class="fa-solid fa-trash-can"></i>
                </button>
    
                <button class="action-btn" 
                title="Editar producto"
                onclick="editarProducto( '${product.id}' )">

                <i class="fa-solid fa-pen-to-square"></i>
                </button>
            </td>
        </tr> `
        })


    }



function actualizarLocalStorage(){
    localStorage.setItem("products",JSON.stringify(arrayproductos))
}

function borrarProducto(ID, producto) {

    const confirmDelete = confirm(`Realmente desea borrar este usuario ${producto}`)

    if (confirmDelete) {

        const indice = arrayproductos.findIndex(producto => producto.id === ID)

    arrayproductos.splice(indice, 1)
        pintarProductos(arrayproductos)

        actualizarLocalStorage()

    }

}

function editarProducto(idBuscar){

const productEdit = arrayproductos.find((producto)=>{

    if (producto.id === idBuscar){
        return true
    }

})

    if(!productEdit){
        Swal.fire('Error al editar', 'No se pudo editar el producto', 'error')
    return
    }

    const el = productForm.elements;

    el.id.value = productEdit.id;
    el.producto.value = productEdit.producto;
    el.imageProduct.value = productEdit.imagen;
    el.descripcion.value = productEdit.descripcion;
    el.precio.value = productEdit.precio;
    el.fecha.value = formatInputDate(productEdit.fecha)


    submit.classList.add('btn-edit');
    submit.innerHTML = 'editar producto'


}
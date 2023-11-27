const productos = JSON.parse(localStorage.getItem("products"));


const sectionContainer = document.querySelector(".card-container")

function pintarCards(productos){

    productos.forEach( product => {

        sectionContainer.innerHTML += `<div class="card">
    
        <div class="img-card">
            <img src="${product.imagen}" alt="${product.producto}" class="img-product">
    
            <h4 class="fecha"> ${ formatDate(product.fecha) } </h4>
    
        </div>
    
        <div class="text-card">
            <div class="title-card">
                <h1>${product.producto}</h1>
                <p class="description-card">
                                    ${product.descripcion}
                                </p>
            </div>
    
        </div>
    
        <div class="precio">
            <h2>${product.precio}</h2>
            <h5>Por Kg</h5>
        </div>
    
        <div class="btn-card">
            <button class="btn-mas">ver más</button>
            <button class="btn-comprar">COMPRAR</button>
        </div>
    </div>`
        
    });

}

pintarCards(productos)

function actualizarLocalStorage(){
    localStorage.setItem("products",JSON.stringify(arrayproductos))
}
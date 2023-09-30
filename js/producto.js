const seleccionado = JSON.parse(localStorage.getItem("productos"));
const mostrarInfo = document.querySelector("#informacion-producto");

seleccionado.forEach((productoselec) => {
  let contenido = document.createElement("div");
  contenido.innerHTML = `
        <div class="card-grid">
            <h3>${productoselec.nombre}</h3> 
            <img src="img/${productoselec.imagen}">
            <p>${productoselec.descripcion}</p>
            <p class="price-product">$${productoselec.precio}</p>
            <p>${productoselec.estrellas}</p>
        </div>
        `;

        mostrarInfo.append(contenido);
    
})

  

  
const seleccionado = JSON.parse(localStorage.getItem("productos"));
const mostrarInfo = document.querySelector("#informacion-producto");

function convertirAEstrellas(estrellas) {
  const estrellasLlenas = estrellas.length;
  const estrellasVacias = 5 - estrellasLlenas;

  const estrellasHTML = '<span class="estrella-llena">★</span>'.repeat(estrellasLlenas) +
      '<span class="estrella-vacia">☆</span>'.repeat(estrellasVacias);

  return `<p class="puntuacion-estrellas">${estrellasHTML}</p>`;
}

seleccionado.forEach((productoselec) => {
  let contenido = document.createElement("div");
  contenido.innerHTML = `
        <div class="card-grid">
            <h3>${productoselec.nombre}</h3> 
            <img src="img/${productoselec.imagen}">
            <p>${productoselec.descripcion}</p>
            <p class="price-product">$${productoselec.precio}</p>
            <p>${convertirAEstrellas(productoselec.estrellas)}</p>
        </div>
        `;

        mostrarInfo.append(contenido);
    
})

  

  
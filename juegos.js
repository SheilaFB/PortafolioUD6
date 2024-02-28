const requestOptions = {
    method: "GET",
    redirect: "follow"
    };
  
    //petición para obtener la lista de juegos. LLama al método generarBotones con el result.
  fetch("http://localhost:8080/api/juego", requestOptions)
    .then((response) => response.json())
    .then((result) => generarBotones(result))
    .catch((error) => console.error(error));

    //genera los botones recorriendo los juegos. Añade el método para abrir el html de puntuación. Envía a la otra ventana el id del juego, 
    //el nombre y la url de la imagen.
    function generarBotones(resultados){
        padre = document.getElementById("contenidoBotones");
        

        resultados.forEach( element => {
            boton=document.createElement("button");
            boton.innerHTML=element.nombre;
            boton.addEventListener("click", function() {
                let id = element.id;
                let nombre = element.nombre;
                let imagen = element.imagen;
                window.location.href = "clasificacion.html?id=" + encodeURIComponent(id) + "&nombre=" + encodeURIComponent(nombre) + 
                "&imagen=" + encodeURIComponent(imagen);
            });
           padre.appendChild(boton);
        });
    } 
    
const requestOptions = {
    method: "GET",
    redirect: "follow"
    };
  
  fetch("http://localhost:8080/api/juego", requestOptions)
    .then((response) => response.json())
    .then((result) => generarBotones(result))
    .catch((error) => console.error(error));


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
    
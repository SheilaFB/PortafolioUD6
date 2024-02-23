const requestOptions = {
    method: "GET",
    redirect: "follow"
    };
  
  fetch("http://localhost:8080/api/juego", requestOptions)
    .then((response) => response.json())
    .then((result) => generarBotones(result))
    .catch((error) => console.error(error));


    function generarBotones(resultados){
        padre = document.getElementById("botones");

        resultados.forEach( element => { 
            boton=document.createElement("Button");
            boton.innerHTML=element.nombre;
            boton.addEventListener("click", function () {
                generarPuntuaciones(element.id);
              });
            padre.appendChild(boton);
        });
    }

    function generarPuntuaciones(id){
        fetch(`http://localhost:8080/api/puntuacion/juego/${id}`, requestOptions)
        .then((response) => response.json())
        .then((result) => generarTabla(result))
        .catch((error) => console.error(error));
    }

    function generarTabla(resultados){
        padre.innerHTML="";

        resultados.forEach(element => {
            nombre = document.createElement("h6");
            nombre.innerHTML=element.nombre;
            padre.appendChild(nombre);
        })

    }

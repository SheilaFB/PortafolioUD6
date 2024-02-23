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
        padre.innerHTML="";

        fila = document.createElement("div")
        fila.classList.add("row", "row-cols-3")

        resultados.forEach( element => { 
            columna = document.createElement("div");
            columna.classList.add("col");
            boton=document.createElement("Button");
            boton.innerHTML=element.nombre;
            boton.addEventListener("click", function () {
                generarPuntuaciones(element.id);
              });
            fila.appendChild(columna).appendChild(boton);
        });
        padre.appendChild(fila);
    }

    function generarPuntuaciones(id){
        fetch(`http://localhost:8080/api/puntuacion/juego/${id}`, requestOptions)
        .then((response) => response.json())
        .then((result) => generarTabla(result))
        .catch((error) => console.error(error));
    }

    function generarTabla(resultados){
        padre.innerHTML="";
        tabla=document.getElementById("tabla");
        tabla.classList.remove("d-none");
        contenidoTabla=document.getElementById("contenidoTabla");

        resultados.forEach(element => {
            tr=document.createElement("tr");
            th1=document.createElement("th");
            th1.innerHTML=element.nombre;
            th2=document.createElement("th")
            th2.innerHTML=element.puntuacion;
            contenidoTabla.appendChild(tr);
            tr.appendChild(th1);
            tr.appendChild(th2);
        })

    }

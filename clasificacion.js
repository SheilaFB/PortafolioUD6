
var recibirId = new URLSearchParams(window.location.search);
var id = recibirId.get('id');

const requestOptions = {
    method: "GET",
    redirect: "follow"
    };

  generarPuntuaciones(id);

    function generarPuntuaciones(id){
        fetch(`http://localhost:8080/api/puntuacion/juego/${id}`, requestOptions)
        .then((response) => response.json())
        .then((result) => generarTabla(result))
        .catch((error) => console.error(error));
    }

    function generarTabla(resultados){
        contenidoTabla=document.getElementById("bodyTabla");

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

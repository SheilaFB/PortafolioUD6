
var recibirId = new URLSearchParams(window.location.search);
var id = recibirId.get('id');
var nombre = recibirId.get('nombre');
var imagen = recibirId.get('imagen');

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
        document.body.style.backgroundImage = `url('${imagen}')`;
        let numero = 1;
        nombreJuego = document.getElementById("nombreJuego");
        nombreJuego.innerHTML=nombre;
        contenidoTabla=document.getElementById("bodyTabla");

        resultados.forEach(element => {
            tr=document.createElement("tr");
            th0=document.createElement("td");
            th0.innerHTML=numero;
            th1=document.createElement("td");
            th1.innerHTML=element.nombre;
            th2=document.createElement("td")
            th2.innerHTML=element.puntuacion;
            contenidoTabla.appendChild(tr);
            tr.appendChild(th0);
            tr.appendChild(th1);
            tr.appendChild(th2);
            numero++;
        })
    }

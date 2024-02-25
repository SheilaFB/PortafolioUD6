const requestOptions = {
    method: "GET",
    redirect: "follow"
  };
  
  fetch("http://localhost:8080/api/puntuacion/record", requestOptions)
    .then((response) => response.json())
    .then((result) => generarTabla(result))
    .catch((error) => console.error(error));


    function generarTabla(resultados){
        contenidoTabla=document.getElementById("bodyTabla");

        resultados.forEach(element => {
            tr=document.createElement("tr");
            th1=document.createElement("td");
            th1.innerHTML=element.juego.nombre;
            th2=document.createElement("td");
            th2.innerHTML=element.nombre;
            th3=document.createElement("td")
            th3.innerHTML=element.puntuacion;
            contenidoTabla.appendChild(tr);
            tr.appendChild(th1);
            tr.appendChild(th2);
            tr.appendChild(th3);
        })
    

    }
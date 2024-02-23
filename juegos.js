const requestOptions = {
    method: "GET",
    redirect: "follow"
  };
  
  fetch("http://localhost:8080/api/juego", requestOptions)
    .then((response) => response.json())
    .then((result) => generarBotones(result))
    .catch((error) => console.error(error));


    function generarBotones(resultados){
        padre = document.getElementById("Botones");

        resultados.array.forEach(element => {
            boton=document.createElement("Button");
            tituloBoton=document.createAttribute("title");
            tituloBoton.value=element.nombre;
        });
    }
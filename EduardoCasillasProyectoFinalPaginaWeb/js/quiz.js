let correctas = [1,1,1,1,3];

let opcion_elegida=[];

let cantidad_correctas = 0;

function respuesta(num_pregunta,seleccionada){
    opcion_elegido[num_pregunta] = seleccionada.value;

    id = "p" + num_pregunta;

    lebels = document.getElementById(id).childNodes;
    lebels[3].style.backgroundColor = "white";
    lebels[5].style.backgroundColor = "white";
    lebels[7].style.backgroundColor = "white";

    seleccionada.parentNOde.style.backgroundColor = "#cec0fc";
}

function corregir(){
    cantidad_correctas = 0;

    for(i = 0; i<correctas.length;i++){
        if(correctas[i] == opcion_elegida[i]){
            cantidad_correctas++;
        }
    }
}

document.getElementById("resultado").innerHTML = cantidad_correctas;

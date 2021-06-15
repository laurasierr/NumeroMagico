let NumeroMagico = Math.floor(Math.random()*1000)+1;
const intentos = document.querySelector(".intentos");
const ultimo = document.querySelector(".resultado");
const pistas = document.querySelector(".pistas");
const RespuestaUsuario = document.querySelector(".RespuestaUsuario");
const boton = document.querySelector(".validar");
const IntentosAnteriores = document.querySelector(".IntentosAnteriores")
let cont = 1;
let resetbtn;

boton.addEventListener("click", check);

function onKeyUp(event){
  var keycode = event.keyCode;
  if(keycode == '13'){
    check();
  }
}

function check(){
  let Respuestausuario = Number(RespuestaUsuario.value);
  let IntentosRestantes = 10-cont;
  IntentosAnteriores.textContent+=Respuestausuario+",";
  if(Respuestausuario==NumeroMagico){
    Swal.fire(
      titulo='Bien hecho!',
      text='Adivinaste el número mágico. El número era:'+NumeroMagico,
      icon='success',
    )
  }else if(cont==10){
   swal.fire(
    'El juego se acabó',
    'Tus intentos se acabaron. El número era '+NumeroMagico,
    'Reinicia el juego si quieres volver a jugar.',
    icon='info'
    );
  }else{
    swal.fire(
      titulo='Intenta de nuevo',
      text=' ',
      icon='error'
    )
    if(Respuestausuario > NumeroMagico){
      pistas.textContent = "El número es menor"
    }else{
      pistas.textContent = "El número es mayor"
    }
  }
  cont++;
  RespuestaUsuario.value ="";
  RespuestaUsuario.focus();
}

function actual() {
  fecha=new Date(); //Actualizar fecha.
  hora=fecha.getHours(); //hora actual
  minuto=fecha.getMinutes(); //minuto actual
  segundo=fecha.getSeconds(); //segundo actual
  if (hora<10) { //dos cifras para la hora
      hora="0"+hora;
      }
  if (minuto<10) { //dos cifras para el minuto
      minuto="0"+minuto;
      }
  if (segundo<10) { //dos cifras para el segundo
      segundo="0"+segundo;
      }
  //devolver los datos:
  mireloj = hora+" : "+minuto+" : "+segundo;	
  return mireloj; 
}

function actualizar() { //función del temporizador
  mihora=actual(); //recoger hora actual
  mireloj=document.getElementById("reloj"); //buscar elemento reloj
  mireloj.innerHTML=mihora; //incluir hora en elemento
  }
setInterval(actualizar,1000); //iniciar temporizador



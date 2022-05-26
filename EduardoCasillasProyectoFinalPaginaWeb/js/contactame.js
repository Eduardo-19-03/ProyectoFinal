const form = document.querySelector("form"),
statusTxt = form.querySelector(".button-area span");
form.onsubmit = (e)=>{
  e.preventDefault();
  statusTxt.style.color = "#0D6EFD";
  statusTxt.style.display = "block";
  statusTxt.innerText = "Sending your message...";
  form.classList.add("disabled");
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "message.php", true);
  xhr.onload = ()=>{
    if(xhr.readyState == 4 && xhr.status == 200){
      let response = xhr.response;
      if(response.indexOf("required") != -1 || response.indexOf("valid") != -1 || response.indexOf("failed") != -1){
        statusTxt.style.color = "red";
      }else{
        form.reset();
        setTimeout(()=>{
          statusTxt.style.display = "none";
        }, 3000);
      }
      statusTxt.innerText = response;
      form.classList.remove("disabled");
    }
  }
  let formData = new FormData(form);
  xhr.send(formData);
}

$('.toggle').click(function(){
  $('.formulario').animate({
      height: "toggle",
      'padding-top': 'toggle',
      'padding-bottom': 'toggle',
      opacity: 'toggle'
  }, "slow");
}); 

$('.toggle').click(function(){
  $('.formulario').animate({
      height: "toggle",
      'padding-top': 'toggle',
      'padding-bottom': 'toggle',
      opacity: 'toggle'
  }, "slow");
});

const nombre = document.getElementById("name")
const email = document.getElementById("email")
const pass = document.getElementById("telefono")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
  e.preventDefault()
  let warnings = ""
  let entrar = false
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
  parrafo.innerHTML = ""
  if(nombre.value.length <6){
      warnings += `El nombre  no es valido <br>`
      entrar = true
  }
  if(!regexEmail.test(email.value)){
      warnings += `El email no es valido <br>`
      entrar = true
  }

  if(telefono.value.length <8){
      warnings += `La contraseña no es valida <br>`
      entrar = true
  }

  if(entrar){
      parrafo.innerHTML = warnings
  }else{
      parrafo.innerHTML = "ENVIADO"
  }
})
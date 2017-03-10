window.addEventListener('load',function(){
  var loginButton = document.getElementById('login');
  loginButton.addEventListener('click',function() {

    var crt=/\S+@\+\S+.\+S+/;

    var emailInput = document.getElementById('email');
    var passwordInput = document.getElementById('psw');
    var alert1 = document.getElementById("alerta1");
    var alert2 = document.getElementById("alerta2");

    var user = ["ariana@gmail.com","carlos@gmail.com","luis@gmail.com","maia@gmail.com"];
    var psw = ["ariana", "Carlos", "Luis", "Maia"];

    if(emailInput.value != user){
       alert1.textContent = "No puede estar vacio";
       var text = alert1.textContent;
     }else{
         alert("Hola");
         }

     if (passwordInput.value == ""||passwordInput.value != psw) {
       alert2.textContent = "No puede estar vacio2";
       var text2 = alert2.textContent;
     }
     else{
         alert("Hola");
         }
  })
})

window.addEventListener("scroll", function(){
    let header = document.querySelector("header");
    header.classList.toggle("abajo",window.scrollY>0);
    
})


const cabecera = document.querySelector("header"),
      btn = document.getElementById("btn");

          
      btn.addEventListener("click", function(){
        cabecera.classList.toggle("abajo2");
    })
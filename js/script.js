setTimeout(function(){

    let animado = document.querySelectorAll(".animado");    //todas las clases 
      function animarEntrevistas(){ 
        for(let i = 0; i < animado.length; i++){    
            animado[i].style.opacity = 1;
            animado[i].classList.add("mostrarIzq");
            }
    }
    window.addEventListener("load", animarEntrevistas);
    
    

    function animarIzq(){
        let animadoIzq = document.querySelectorAll(".animadoIzq");    //todas las clases
        
          for(let i = 0; i < animadoIzq.length; i++){    
            animadoIzq[i].style.opacity = 1;
            animadoIzq[i].classList.add("mostrarIzq");
            }
    }
          window.addEventListener("load", animarIzq);

        
          function animarIzqDos(){
            let animadoIzqDos = document.querySelectorAll(".animadoIzqDos");    //todas las clases
            let scrollTop = document.documentElement.scrollTop;

              for(let i = 0; i < animadoIzqDos.length; i++){  
              let alturaAnimadoIzq = animadoIzqDos[i].offsetTop;    //detecto altura hacia la card
                if(alturaAnimadoIzq - 550 < scrollTop){
                animadoIzqDos[i].style.opacity = 1;
                animadoIzqDos[i].classList.add("mostrarIzq");
                  }
              }
        }
              window.addEventListener("scroll", animarIzqDos);
        
        
        
          function animarDer(){
            let animadoDer = document.querySelectorAll(".animadoDer");    //todas las clases
            
            let scrollTop = document.documentElement.scrollTop;
            
            for(let i = 0; i < animadoDer.length; i++){    
              let alturaAnimado = animadoDer[i].offsetTop;    //detecto altura hacia la card
              if(alturaAnimado - 300 < scrollTop){
                    animadoDer[i].style.opacity = 1;
                    animadoDer[i].classList.add("mostrarDer");
                    }
                  }   
              }
          window.addEventListener("scroll", animarDer);
    }, 0000);
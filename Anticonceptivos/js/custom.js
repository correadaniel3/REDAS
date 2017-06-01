$(document).ready(function(){
    
    $(".descripcion_elementos div").hide();
    $(".contenidos").hide();
    
    $("#conceptos").hide();
    $("#eval2").hide();
    $("#resultados").hide();
     $("#btn_resultados").hide();

  $(".pit-thumbnail-descripcion h3").each(function() {
    var titleLength = $(this).text().length;
    console.log(titleLength);
    if (titleLength <= 20) {
      console.log("Menor que 20");
      $(this).css("margin-top","7%");
    }else if (titleLength > 20 && titleLength < 35) {
      console.log("Entre 20 y 35");
      $(this).css("margin-top","3%");
    }else if (titleLength >= 35) {
      console.log("Mayor que 35");
      $(this).css("margin-top","4%");
      $(this).css("font-size","12px");
      $(this).css("margin-left","6px");
      $(this).css("margin-right","6px");
    }
  });
  $(".dialog").dialog({
      dialogClass: "no-close",
      modal:true,
      autoOpen: false,
      width:Math.min(700, $(window).width() * 0.9),
      resizable: false,
      maxHeight:800
  });
    $( ".dialog" ).on("dialogclose", function(){
        $("video").each(function(){
            if(!this.paused) {
                this.pause();
            }
        });
    });
    $(window).resize(function(){
        $(".dialog").dialog({
            width:Math.min(700, $(window).width() * 0.9)
        });
    });

  $("#bibliografia,#bibliografia-mobile").on('click touchstart', function(){
    $("#dialog-1").dialog("open");
  });
  $("#creditos,#creditos-mobile").on('click touchstart', function(){
    $("#dialog-2").dialog("open");
  });
    
    
    $("#eval1").on('click touchstart', function(){
         $("#inicial").fadeOut();
         $(".pit-header-text h1").html("Evaluación previa");
        $("#eval1_content").fadeIn();
    });
    $("#conceptos").on('click touchstart', function(){
         $("#inicial").fadeOut();
         $(".pit-header-text h1").html("Conceptos básicos y efectividad de los métodos");
        $("#conceptos_content").fadeIn();
    });
    $("#eval2").on('click touchstart', function(){
         $("#inicial").fadeOut();
         $(".pit-header-text h1").html("Autoevaluación");
        $("#eval2_content").fadeIn();
    });
    $("#resultados").on('click touchstart', function(){
        for(i=0;i<preguntas.length;i++){
            $("#res1").append("<li>"+preguntas[i]+"<br><ul id='res1"+(i+1)+"'></ul></li>");
            for(j=0;j<opciones[i].length;j++){
                //console.log((j+1)+" "+seleccionadas2[i]);
                if((j+1)==seleccionadas1[i]){
                    if(soluciones[i]==seleccionadas1[i]){
                        $("ul#res1"+(i+1)).append("<span style='color:green;'>"+opciones[i][j]+" </span><br><br>");
                    }else{
                        $("ul#res1"+(i+1)).append("<span style='color:red;'>"+opciones[i][j]+" </span><br><br>");
                    }  
                }else{
                      $("ul#res1"+(i+1)).append("<span style='color:black;'>"+opciones[i][j]+" </span><br><br>");
                }
                 
            }
            
        }
        for(i=0;i<preguntas.length;i++){
            $("#res2").append("<li>"+preguntas[i]+"<br><ul id='res2"+(i+1)+"'></ul></li>");
            for(j=0;j<opciones[i].length;j++){
                //console.log((j+1)+" "+seleccionadas2[i]);
                if((j+1)==seleccionadas2[i]){
                    if(soluciones[i]==seleccionadas2[i]){
                        $("ul#res2"+(i+1)).append("<span style='color:green;'>"+opciones[i][j]+" </span><br><br>");
                    }else{
                        $("ul#res2"+(i+1)).append("<span style='color:red;'>"+opciones[i][j]+" </span><br><br>");
                    }  
                }else{
                      $("ul#res2"+(i+1)).append("<span style='color:black;'>"+opciones[i][j]+" </span><br><br>");
                }
                 
            }
            
        }
        console.log(seleccionadas1);
        console.log(seleccionadas2);
         $("#inicial").fadeOut();
         $(".pit-header-text h1").html("Resultados");
        $("#resultados_content").fadeIn();
    });
    
    
    $(".volver").click(function(){
        $(this).parent("div").fadeOut();
        $(".pit-header-text h1").html("Titulo por definir");
        $("#inicial").fadeIn();
        
    });
    
  $(".pit-hamburguer").click( function () {
    $(".pit-menu-mobile").toggleClass("show-menu");
  });
    
    var preguntas=["¿Qué es planificación familiar (cuidarse para que no quedar embarazada)?","¿Existe alguna diferencia en la posibilidad de quedar embarazada según el/los método(s) de planificación (o “con qué se cuida”) que usted use?","¿Qué es una T de cobre?","¿Con cuál de estos métodos una mujer está más protegida para no  quedar embarazada?","¿Las mujeres pueden quedar embarazadas cuando están amamantando (alimentando al bebé con leche materna)?","¿Cuál de estos métodos de planificación o para cuidarse de no quedar embarazada pueden dejar a la mujer estéril (no puede tener hijos) si los usa por mucho tiempo?","¿Son el implante (“la pila”) y la T de cobre (el dispositivo) igual de efectivos que la tubectomía (desconectarse) y la vasectomía (cuando el hombre se desconecta)? "];
    
    var opciones=[["a) Decidir donde viven usted y su familia","b) Decidir cuándo  va a tener más hijos","c) Hablar con los médicos sobre la salud de sus hijos","d) No sé"],["a) Sí (verdadero)","b) No (falso)","c) No sé"],["a) Un parche que se coloca en la piel de la espalda","b) Algo debajo de la piel en el brazo","c) Un dispositivo que se coloca en el útero","d) No sé"],["a) Condón","b) Pastillas","c) T de cobre","d) Inyección","e) No sé"],["a) Sí (verdadero)","b) No (falso)","c) No sé"],["a) Pastillas","b) T de cobre","c) Implante","d) Ninguno","e) No sé"],["a) Sí (verdadero)","b) No (falso)","c) No sé"]];
    
    var soluciones=[2,1,3,3,1,4,2];
    
    var seleccionadas1=[];
    var seleccionadas2=[];
    
    $(".cuestionario").each(function(){
        var id_cuestionario=$(this).attr("id");
        for(i=0;i<preguntas.length;i++){
            $(this).append("<div id='pregunta"+(i+1)+""+id_cuestionario+"' class='pregunta'><label for='opciones"+(i+1)+""+id_cuestionario+"'>"+(i+1)+") "+preguntas[i]+"</label><br></div>");
            for(j=0;j<opciones[i].length;j++){
                if(j==(opciones[i].length-1)){
                    $(this).children("#pregunta"+(i+1)+""+id_cuestionario).append("<input name='opciones"+(i+1)+""+id_cuestionario+"' value='"+(j+1)+"' type='radio'>"+opciones[i][j]+" <br><br>");
                }
                else if(j==0){
                    $(this).children("#pregunta"+(i+1)+""+id_cuestionario).append("<input name='opciones"+(i+1)+""+id_cuestionario+"' value='"+(j+1)+"' type='radio' checked>"+opciones[i][j]+" <br>");
                }
                else{
                    $(this).children("#pregunta"+(i+1)+""+id_cuestionario).append("<input name='opciones"+(i+1)+""+id_cuestionario+"' value='"+(j+1)+"' type='radio'>"+opciones[i][j]+" <br>");
                }
            }
        }
    });
    
    $(".cuestionario#cuestionario1").append("<button class='boton_guardar' id='btn_eval1' type='submit'>Guardar</button>");
    $(".cuestionario#cuestionario2").append("<button class='boton_guardar' id='btn_eval2' type='submit'>Guardar</button>");
    
    $("#cuestionario1").submit(function(){
        for(h=0;h<preguntas.length;h++){
            seleccionadas1.push($("input[type='radio'][name='opciones"+(h+1)+"cuestionario1']:checked").val());
        }
        return false;
    });
    $("#cuestionario2").submit(function(){
        for(h=0;h<preguntas.length;h++){
            seleccionadas2.push($("input[type='radio'][name='opciones"+(h+1)+"cuestionario2']:checked").val());
        }
        return false;
    });
    $("#btn_eval1").click(function(){
        $("#eval1_content").fadeOut();
        $(".pit-header-text h1").html("Titulo por definir");
        $("#inicial").fadeIn();
        $("#eval1").hide();
        $("#conceptos").show();
    });
    
    $("#btn_eval2").click(function(){
        //alert(seleccionadas2[0]);
        
        $("#eval2_content").fadeOut();
        $(".pit-header-text h1").html("Titulo por definir");
        $("#inicial").fadeIn();
        $("#eval2").hide();
        $("#conceptos").hide();
        $("#resultados").show();
    });

    $("#conceptos_volver").click(function(){
        $("#eval2").show();
    });
    $("#btn_comenzar").click(function(){
        location.reload();
    });
    
    
});

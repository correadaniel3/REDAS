$(document).ready(function(){
    
    $(".descripcion_elementos div").hide();
    $(".contenidos").hide();

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
    
    
    $("#que_es").on('click touchstart', function(){
         $("#inicial").fadeOut();
         $(".pit-header-text h1").html("Qué es comparar");
        $("#que_es_content").fadeIn();
    });
    $("#por_para").on('click touchstart', function(){
         $("#inicial").fadeOut();
         $(".pit-header-text h1").html("Por qué y para qué comparar");
        $("#por_para_content").fadeIn();
    });
    $("#tipos").on('click touchstart', function(){
         $("#inicial").fadeOut();
         $(".pit-header-text h1").html("Tipos de comparación en la ciencia");
        $("#tipos_content").fadeIn();
    });
    $("#campos").on('click touchstart', function(){
         $("#inicial").fadeOut();
         $(".pit-header-text h1").html("Campos de estudio");
        $("#campos_content").fadeIn();
    });
    $("#informacion, #informacion-mobile").on('click touchstart', function(){
        $(".pit-body").children("div").fadeOut();
         $(".pit-header-text h1").html("Tabla de contenidos");
        $("#info_content").fadeIn();
    });
    
    
    $(".volver").click(function(){
        $(this).parent("div").fadeOut();
        $(".pit-header-text h1").html("Comparar es Cuestión de Método");
        $("#inicial").fadeIn();
        
    });
    
    $(".elementos .img").hover(function(){
        var id=$(this).attr("id");
        $(".descripcion_elementos div").each(function(){
            var id_aux=$(this).attr("id").split("_")[0];
            if(id_aux!==id){
                $(this).hide();
            }
        });
        $("#"+id+"_content").fadeIn();
    });
    

  $(".pit-hamburguer").click( function () {
    $(".pit-menu-mobile").toggleClass("show-menu");
  });
    
    
    $(window).resize(function(){
        if($(window).width()<=600){
            $(".texto img").each(function(){
                if(!$(this).hasClass("responsive")){
                    $(this).appendTo($(this).parent(".texto"));
                    $(this).addClass("responsive");
                }
            });
        }
        else{
             $(".texto img").each(function(){
                if($(this).hasClass("responsive")){
                    $(this).prependTo($(this).parent(".texto"));
                    $(this).removeClass("responsive");
                }
            });
        }
    });
    
    var headertext = [],
    headers = document.querySelectorAll(".table_responsive th"),
    tablerows = document.querySelectorAll(".table_responsive th"),
    tablebody = document.querySelector(".table_responsive tbody");

    for(var i = 0; i < headers.length; i++) {
      var current = headers[i];
      headertext.push(current.textContent.replace(/\r?\n|\r/,""));
    } 
    for (var i = 0, row; row = tablebody.rows[i]; i++) {
      for (var j = 0, col; col = row.cells[j]; j++) {
        col.setAttribute("data-th", headertext[j] + ":");
      } 
    }
    
});

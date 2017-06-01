$(document).ready(function(){
    
    $(".contenidos").hide();
   
    var alto_izq2_ini;
    var alto_izq1_ini;
    var alto;
    var alto_padre;
    var resta;
    
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
         $(".pit-header-text h1").html("¿Qué es un ensayo académico?");
        $("#que_es_content").fadeIn();
    });
     $("#estructura").on('click touchstart', function(){
         $("#inicial").fadeOut();
         $(".pit-header-text h1").html("Estructura");
        $("#estructura_content").fadeIn();
         alto_izq1_ini=$("#izquierda1").height();
         $("#derecha1").css("min-height",alto_izq1_ini);
    });
     $("#elementos").on('click touchstart', function(){
         $("#inicial").fadeOut();
         $(".pit-header-text h1").html("Elementos");
        $("#elementos_content").fadeIn();
         if($( window ).width()>608){
             $(".izquierda").css("width","250px");
            $(".derecha").css("width","50%");
             alto_izq2_ini=$("#izquierda2").height();
             $("#derecha2").css("min-height",alto_izq2_ini);
            $("#izquierda2").height(alto);
         }else{
             alto_izq2_ini=$("#izquierda2").height();
             $(".argollas").hide();
            $("#izquierda2").height(alto_izq2_ini);
            $(".izquierda").css("width","80%");
            $(".derecha").css("width","80%");
         }
         
    });
    $("#ejemplo").on('click touchstart', function(){
         $("#inicial").fadeOut();
         $(".pit-header-text h1").html("Ejemplo");
        $("#ejemplo_content").fadeIn();
    });
    $(".volver").click(function(){
        $(this).parent("div").fadeOut();
        $(".pit-header-text h1").html("El ensayo académico");
        $("#inicial").fadeIn();
        
    });
    
    $(".opcion").click(function(){
        var id=$(this).attr("id").substr(($(this).attr("id").length - 1),$(this).attr("id").length);
        $(".opcion").removeClass("activo");
        $(this).addClass("activo");
        $(".descripcion").removeClass("abierto");
        $("#dere"+id).addClass("abierto");
        $("#dere"+id).fadeIn();
    });
    $(".opciones2").click(function(){
        if($( window ).width()>608){
            alto=$("#derecha2 .abierto").height();
            /*if(alto>alto_izq2_ini){
                $("#izquierda2").height(alto);
            }else if(alto<alto_izq2_ini){
                $("#izquierda2").height(alto_izq2_ini);
            }*/
            $("#izquierda2").height(Math.max(alto,alto_izq2_ini));
            alto_padre=$(".opcionesl").parent().height();
            resta=(alto_padre - $(".opcionesl").height());
            $(".opcionesl").css("margin-top",resta/2);
            $(".opcionesl").css("margin-bottom",resta/2);
        }
    });
    
    $(window).resize(function() {
        if($( window ).width()<=608){
            $(".opcionesl").css("margin","auto");
            $(".argollas").hide();
            $("#izquierda2").height(alto_izq2_ini);
            $(".izquierda").css("width","80%");
            $(".derecha").css("width","80%");
        }else{
            alto_padre=$(".opcionesl").parent().height();
            resta=(alto_padre - $(".opcionesl").height());
            $(".opcionesl").css("margin-top",resta/2);
            $(".opcionesl").css("margin-bottom",resta/2);
            $(".argollas").show();
            $(".izquierda").css("width","250px");
            $(".derecha").css("width","50%");
            alto=$("#derecha2 .abierto").height();
            /*if(alto>alto_izq2_ini){
                $("#izquierda2").height(alto);
            }else if(alto<alto_izq2_ini){
                $("#izquierda2").height(alto_izq2_ini);
            }*/
            $("#izquierda2").height(Math.max(alto,alto_izq2_ini));
        }
    });
  $(".pit-hamburguer").click( function () {
    $(".pit-menu-mobile").toggleClass("show-menu");
  });
    
});

$(document).ready(function(){
    $("#errores").hide();
    $("#text_boton2").hide();
    $("#text_pregunta2").hide();
    $("#text_pregunta3").hide();
    $("#text_pregunta4").hide();
    $("#text_pregunta6").hide();
    $("#text_pregunta7").hide();
    $("#text_pregunta8").hide();
    $(".respuestas").hide();
    $("#text_dopamina").hide();
    $("#text_prolactina").hide();
    $("#text_estrogenos").hide();
    $("#text_trh").hide();
    $("#text_hipofisario").hide();
    $("#text_galactorrea").hide();
    $("#text_osteoporosis").hide();
    $("#text_Hipogonadismo").hide();
    $("#text_hipofisario2").hide();
    $("#text_galactorrea2").hide();
    $("#text_osteoporosis2").hide();
    $("#text_Hipogonadismo2").hide();
    $(".info_medicamentos").hide();
    $(".info_normal").hide();
    $(".info_lesion").hide();
    $(".icon_medicamentos").hide();
    $(".icon_normal").hide();
    $(".icon_lesion").hide();
    $("#imagen2").hide();
    $("#imagen3").hide();
    $("#imagen4").hide();

    $("#boton1").addClass("boton_activo");
    $("#pregunta1").addClass("pregunta_activa");
    var tamano=$(window).width();

    
    function acoplar1(){
        $(".icon").each(function(){
            nombre=$(this).attr("id");
            nombre=nombre.substring(5,nombre.length);
            $(this).offset({top: $(".info_"+nombre)
                .offset().top, left:$(".info_"+nombre)
                .offset().left+($(".info_"+nombre)
                .width()/2) });
        });
    }
    function acoplar2(){
        $(".icon").each(function(){
            nombre=$(this).attr("id");
            nombre=nombre.substring(5,nombre.length);
            $(this).offset({top: $(".info_"+nombre)
                .offset().top+($(".info_"+nombre)
                .height()), left:$(".info_"+nombre)
                .offset().left+($(".info_"+nombre)
                .width()/2) });
        });
    }
     
    var step=0;
    var ocultar=false;
    $( window ).resize(function() {
        acoplar2();
        tamano=$(window).width();
        if(tamano<980){
            $(".icon").show();
            $(".icon").each(function(){
                if(!($(this).hasClass("mostrar"))){
                    $(this).hide();
                }
                else{
                     $(this).show();       
                }
            });
            ocultar=true;
            $(".info").css("background-color","transparent"); 
            $(".info_medicamentos").addClass("oculto");
            $(".info_normal").addClass("oculto");
            $(".info_lesion").addClass("oculto");
        }else if(tamano>=980){
            $(".info").removeAttr('style');
            $(".info_medicamentos").hide();
            $(".info_normal").hide();
            $(".info_lesion").hide();
            if(step==1){
                $(".info_medicamentos").show();
            }
            else if(step ==2){
                $(".info_normal").hide();
                $(".info_lesion").hide();
            }
        }
    });

    function habilitar(){
        $(".grid").children("li").each(function(){
            if(!($(this).hasClass("activo"))){
                $(this).hide();
            }
            else{
                $(this).fadeIn();
            }
        });
    }
    habilitar();

    $( ".dialog" ).dialog({
        dialogClass: "no-close",
        modal:true,
        autoOpen: false,
        width:"auto",
        maxHeight:900
    });
    $( ".dialog_causas" ).dialog({
        dialogClass: "no-close",
        modal:true,
        autoOpen: false,
        width:/*1300*/"auto",
        maxHeight:1350
    });
    $( ".dialog_dopamina" ).dialog({
        dialogClass: "no-close",
        modal:true,
        autoOpen: false,
        width:/*1000*/"auto",
        maxHeight:1350
    });
    $( ".dialog_medicamentos" ).dialog({
        dialogClass: "no-close",
        modal:true,
        autoOpen: false,
        width:"auto",
        maxHeight:1350
    });
    $( ".dialog_agonistas" ).dialog({
        dialogClass: "no-close",
        modal:true,
        autoOpen: false,
        width:/*1000*/"auto",
        maxHeight:1350
    });
    $("#dialog3").dialog({
        dialogClass: "no-close",
        modal:true,
        height:500,
        autoOpen: false,
        width:/*1000*/"100%",
        maxHeight:1350
    });
    $( "#dialog4, #dialog5" ).dialog({
        dialogClass: "no-close",
        modal:true,
        autoOpen: false,
        width:/*1000*/"100%",
        maxHeight:1350
    });

    $("#bibliografia").click(function(){
        $("#dialog1").dialog("open");
    });
    $("#creditos").click(function(){
        $("#dialog2").dialog("open");
    });
    $(".produccion_secrecion").click(function(){      
        $("#dialog3").dialog("open");
    });
    $(".papel_adaptacion").click(function(){      
        $("#dialog4").dialog("open");
    });
    $(".causas").click(function(){      
        $("#dialog5").dialog("open");
    });
    $(".epidemiologia").click(function(){      
        $("#dialog6").dialog("open");
    });
    $(".info_medicamentos").click(function(){
        $("#dialog7").dialog("open");
    });
    $(".info_agonistas").click(function(){
        $("#dialog8").dialog("open");
    });
    $(".info_agonistas2").click(function(){
        $("#dialog8").dialog("open");
    });
    
    
    $("#boton1").click(function(){      
        $("#text_boton2").hide();
        $("#text_boton1").fadeIn();
        $("#boton1").addClass("boton_activo");
        $("#boton2").removeClass("boton_activo");
    });
    $("#boton2").click(function(){      
        $("#text_boton1").hide();
        $("#text_boton2").fadeIn();
        $("#boton2").addClass("boton_activo");
        $("#boton1").removeClass("boton_activo");
    });

    $("#home").click(function(){
       window.open('hiperprolactinemia.html',"_self");
    });

    $("#bibliografia").on("mouseover", function mouseOver(){
        $("#bibliografia").attr("src","imagenes/icono_01_hover.png");
    });
    $("#bibliografia").on("mouseout", function mouseOut(){
        $("#bibliografia").attr("src","imagenes/icono_01.png");
    });

    $("#creditos").on("mouseover", function mouseOver(){
        $("#creditos").attr("src","imagenes/icono_02_hover.png");
    });
    $("#creditos").on("mouseout", function mouseOut(){
        $("#creditos").attr("src","imagenes/icono_02.png");
    });

    $("#home").on("mouseover", function mouseOver(){
        $("#home").attr("src","imagenes/icono_03_hover.png");
    });
    $("#home").on("mouseout", function mouseOut(){
        $("#home").attr("src","imagenes/icono_03.png");
    });

    $(".pit_vertical_tabs ul li").click(function(){
        $(".respuestas").hide();
    });
    $(".pit_tabs ul li").click(function(){
        $(".respuestas").hide();
    });
    $(".ver_respuesta1").click(function(){
        $(".respuestas").fadeIn();
        $("#respuesta_1").fadeIn();
        $("#r_falso").css("color","red");
        $("#r_falso").css("font-weight","bold");
    });
    $(".ver_respuesta2").click(function(){
        $(".respuestas").fadeIn();
        $("#respuesta_2").fadeIn();
        $("#r_organica").css("color","red");
        $("#r_organica").css("font-weight","bold");
    });
    $(".ver_respuesta3").click(function(){
        $("#r_agonistas").css("color","red");
        $("#r_agonistas").css("font-weight","bold");
    });
    $(".ver_respuesta4").click(function(){
        $("#r_bromocriptina").css("color","red");
        $("#r_bromocriptina").css("font-weight","bold");
    });
    $(".ver_respuesta5").click(function(){
        $("#r_gancho").css("color","red");
        $("#r_gancho").css("font-weight","bold");
        $(".respuestas").fadeIn();
        $("#respuesta_1").fadeIn();
    });
    $(".ver_respuesta6").click(function(){
        $("#r_organica2").css("color","red");
        $("#r_organica2").css("font-weight","bold");
        $(".respuestas").fadeIn();
        $("#respuesta_1").fadeIn();
    });
    $(".ver_respuesta7").click(function(){
        $("#r_verdadero2").css("color","red");
        $("#r_verdadero2").css("font-weight","bold");
    });
    $(".ver_respuesta8").click(function(){
        $("#r_agonistas2").css("color","red");
        $("#r_agonistas2").css("font-weight","bold");
    });
    $(".ver_respuesta9").click(function(){
        $("#r_cabergolina").css("color","red");
        $("#r_cabergolina").css("font-weight","bold");
        $(".respuestas").fadeIn();
        $("#respuesta_1").fadeIn();
    });

    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        $(".info_dopamina").on("click", function mouseOver(){
            $("#text_dopamina").fadeIn("slow");
            $("#text_prolactina").fadeOut("slow");
            $("#text_estrogenos").fadeOut("slow");
            $("#text_trh").fadeOut("slow");
        });
        
        $(".info_prolactina").on("click", function mouseOver(){
            $("#text_dopamina").fadeOut("slow");
            $("#text_prolactina").fadeIn("slow");
            $("#text_estrogenos").fadeOut("slow");
            $("#text_trh").fadeOut("slow");
        });

        $(".info_estrogenos").on("click", function mouseOver(){
            $("#text_dopamina").fadeOut("slow");
            $("#text_prolactina").fadeOut("slow");
            $("#text_estrogenos").fadeIn("slow");
            $("#text_trh").fadeOut("slow");
        });

        $(".info_trh").on("click", function mouseOver(){
            $("#text_dopamina").fadeOut("slow");
            $("#text_prolactina").fadeOut("slow");
            $("#text_estrogenos").fadeOut("slow");
            $("#text_trh").fadeIn("slow");
        });

    }else{
        $(".info_dopamina").on("mouseover", function mouseOver(){
            $("#text_dopamina").fadeIn("slow");
        });
        $(".info_dopamina").on("mouseout", function mouseOut(){
            $("#text_dopamina").hide("slow");
        });
        $(".info_prolactina").on("mouseover", function mouseOver(){
            $("#text_prolactina").fadeIn("slow");
        });
        $(".info_prolactina").on("mouseout", function mouseOut(){
            $("#text_prolactina").hide("slow");
        });
        $(".info_estrogenos").on("mouseover", function mouseOver(){
            $("#text_estrogenos").fadeIn("slow");
        });
        $(".info_estrogenos").on("mouseout", function mouseOut(){
            $("#text_estrogenos").hide("slow");
        });
        $(".info_trh").on("mouseover", function mouseOver(){
            $("#text_trh").fadeIn("slow");
        });
        $(".info_trh").on("mouseout", function mouseOut(){
            $("#text_trh").hide("slow");
        });
    }

    $("#img_produccion_secrecion").on("mouseover", function mouseOver(){
        $("#img_produccion_secrecion").attr("src","imagenes/seccion1/001_boton_mouseOver.png");
    });
    $("#img_produccion_secrecion").on("mouseout", function mouseOut(){
        $("#img_produccion_secrecion").attr("src","imagenes/seccion1/001_boton.png");
    });
    $("#img_papel_adaptacion").on("mouseover", function mouseOver(){
        $("#img_papel_adaptacion").attr("src","imagenes/seccion1/002_boton_mouseOver.png");
    });
    $("#img_papel_adaptacion").on("mouseout", function mouseOut(){
        $("#img_papel_adaptacion").attr("src","imagenes/seccion1/002_boton.png");
    });
    $("#img_causasl").on("mouseover", function mouseOver(){
        $("#img_causasl").attr("src","imagenes/seccion1/003_boton_mouseOver.png");
    });
    $("#img_causasl").on("mouseout", function mouseOut(){
        $("#img_causasl").attr("src","imagenes/seccion1/003_boton.png");
    });
    $("#img_epidemiologia").on("mouseover", function mouseOver(){
        $("#img_epidemiologia").attr("src","imagenes/seccion1/004_boton_mouseOver.png");
    });
    $("#img_epidemiologia").on("mouseout", function mouseOut(){
        $("#img_epidemiologia").attr("src","imagenes/seccion1/004_boton.png");
    });

    $(".info_hipofisario").on("mouseover", function mouseOver(){
        $("#text_hipofisario").fadeIn("slow");
    });
    $(".info_hipofisario").on("mouseout", function mouseOut(){
        $("#text_hipofisario").hide("slow");
    });
    $(".info_galactorrea").on("mouseover", function mouseOver(){
        $("#text_galactorrea").fadeIn("slow");
    });
    $(".info_galactorrea").on("mouseout", function mouseOut(){
        $("#text_galactorrea").hide("slow");
    });
    $(".info_osteoporosis").on("mouseover", function mouseOver(){
        $("#text_osteoporosis").fadeIn("slow");
    });
    $(".info_osteoporosis").on("mouseout", function mouseOut(){
        $("#text_osteoporosis").hide("slow");
    });
    $(".info_Hipogonadismo").on("mouseover", function mouseOver(){
        $("#text_Hipogonadismo").fadeIn("slow");
    });
    $(".info_Hipogonadismo").on("mouseout", function mouseOut(){
        $("#text_Hipogonadismo").hide("slow");
    });
    $(".info_hipofisario2").on("mouseover", function mouseOver(){
        $("#text_hipofisario2").fadeIn("slow");
    });
    $(".info_hipofisario2").on("mouseout", function mouseOut(){
        $("#text_hipofisario2").hide("slow");
    });
    $(".info_galactorrea2").on("mouseover", function mouseOver(){
        $("#text_galactorrea2").fadeIn("slow");
    });
    $(".info_galactorrea2").on("mouseout", function mouseOut(){
        $("#text_galactorrea2").hide("slow");
    });
    $(".info_osteoporosis2").on("mouseover", function mouseOver(){
        $("#text_osteoporosis2").fadeIn("slow");
    });
    $(".info_osteoporosis2").on("mouseout", function mouseOut(){
        $("#text_osteoporosis2").hide("slow");
    });
    $(".info_Hipogonadismo2").on("mouseover", function mouseOver(){
        $("#text_Hipogonadismo2").fadeIn("slow");
    });
    $(".info_Hipogonadismo2").on("mouseout", function mouseOut(){
        $("#text_Hipogonadismo2").hide("slow");
    });
    
    $(".info_macroprolactinemia").click(function(){
        
        $(".estado_mapa").attr("src","imagenes/seccion4/diapositiva-02.png");
        $(".estado_mapa").load(function(){
            $(".info_medicamentos").hide();
            $(".info_lesion").hide();
            $(".info_normal").hide();
            $(".icon_medicamentos").hide();
            $(".icon_lesion").hide();
            $(".icon_normal").hide();
            $(".icon_normal").removeClass("mostrar");
            $(".icon_lesion").removeClass("mostrar");
            $(".icon_medicamentos").removeClass("mostrar");
           acoplar2();
        });
            
    });
    $(".info_funcional").click(function(){
        
        $(".estado_mapa").attr("src","imagenes/seccion4/diapositiva-03.png");
        $(".estado_mapa").load(function(){
            $(".info_normal").hide();
            $(".info_lesion").hide();
            $(".info_medicamentos").show();
            $(".icon_normal").removeClass("mostrar");
            $(".icon_lesion").removeClass("mostrar");
            $(".icon_medicamentos").addClass("mostrar");
            $(".icon_normal").hide();
            $(".icon_lesion").hide();
            $(".icon_medicamentos").show();
            acoplar2();
            step=1;
         });
        
    });
    
    $(".info_organica").click(function(){
        
        $(".estado_mapa").attr("src","imagenes/seccion4/Diapositiva-05.png");
        $(".estado_mapa").load(function(){
            $(".info_medicamentos").hide();
            $(".info_normal").show();
            $(".info_lesion").show();
            $(".icon_normal").addClass("mostrar");
            $(".icon_lesion").addClass("mostrar");
            $(".icon_medicamentos").removeClass("mostrar");
            $(".icon_medicamentos").hide();
            $(".icon_normal").show();
            $(".icon_lesion").show();
            acoplar2();
            step=2;
        });
        acoplar2();
    });
    
    $(".info_normal").click(function(){
        $("#imagen2").show();
        $(".estado_mapa").attr("src","imagenes/seccion4/Diapositiva-06.png");
        $("#imagen1").hide();
        acoplar2();
    });
    $(".info_tratamiento").click(function(){
        $("#imagen3").show();
        $(".estado_mapa").attr("src","imagenes/seccion4/diapositiva-07.png");
        $("#imagen2").hide();
        acoplar2();
    });
    $(".info_lesion").click(function(){
        $("#imagen4").show();
        $(".estado_mapa").attr("src","imagenes/seccion4/diapositiva-09.png");
        $("#imagen1").hide();
        acoplar2();
    });
    
    $(".volver1").click(function(){
        
        $("#imagen1").show();
        $(".estado_mapa").attr("src","imagenes/seccion4/diapositiva-01.png");
        $("#imagen2").hide();
        $(".estado_mapa").load(function(){
            $(".info_normal").hide();
            $(".info_lesion").hide();
            $(".info_medicamentos").hide();
             $(".icon_normal").hide();
            $(".icon_lesion").hide();
            $(".icon_medicamentos").hide();
            $(".icon_normal").removeClass("mostrar");
            $(".icon_lesion").removeClass("mostrar");
            $(".icon_medicamentos").removeClass("mostrar");
            acoplar2();
        });
       
    });
    $(".volver2").click(function(){
        
        $("#imagen2").show();
        $(".estado_mapa").attr("src","imagenes/seccion4/Diapositiva-06.png");
        $("#imagen3").hide();
        acoplar2();
        
    });
    $(".volver3").click(function(){
        
        $("#imagen1").show();
        $(".estado_mapa").attr("src","imagenes/seccion4/diapositiva-01.png");
        $("#imagen4").hide();
        $(".estado_mapa").load(function(){
            $(".info_lesion").hide();
            $(".info_normal").hide();
            $(".info_medicamentos").hide();
             $(".icon_normal").hide();
            $(".icon_lesion").hide();
            $(".icon_medicamentos").hide();
            $(".icon_normal").removeClass("mostrar");
            $(".icon_lesion").removeClass("mostrar");
            $(".icon_medicamentos").removeClass("mostrar");
            acoplar2();
        });
       
    });


    $(".pausar").click(function(){
        $("video").each(function () { this.pause() });
    });
    
    $( ".pit_acordeon" ).on( "accordionactivate", function( event, ui ) {acoplar2();} );
    
});
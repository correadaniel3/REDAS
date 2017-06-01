$(document).ready(function(){

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
      width:600,
      resizable: false,
      maxHeight:800
  });

  // $("#bibliografia").click(function(){
  //     $("#dialog-1").dialog("open");
  // });
  $("#bibliografia, #bibliografia-mobile").on('click touchstart', function(){
    $("#dialog-1").dialog("open");
    console.log("Entro en dialog-1");
  })
  $("#informacion, #informacion-mobile").on('click touchstart', function(){
    $("#dialog-2").dialog("open");
    console.log("Entro en dialog-3");
  })
  // $("#creditos").click(function(){
  //     $("#dialog-2").dialog("open");
  // });
  $("#creditos, #creditos-mobile").on('click touchstart', function(){
    $("#dialog-3").dialog("open");
    console.log("Entro en dialog-2");
  })


  $(".pit-hamburguer").click( function () {
    $(".pit-menu-mobile").toggleClass("show-menu");
  });
    
    $("#conceptos").click(function(){
        $(location).attr('href', 'conceptos.html');
    }); 
    $("#contrac").click(function(){
        $(location).attr('href', 'contractualismo.html');
    });
    $("#conocimientos").click(function(){
        $(location).attr('href', 'conocimientos.html');
    });
    $(".content").css("display","none");
    $("#hobbes").click(function(){
        $("#content1").fadeIn();
        $("#group").css("display","none");
    });
    $("#locke").click(function(){
        $("#content2").fadeIn();
        $("#group").css("display","none");
    });
    $("#rous").click(function(){
        $("#content3").fadeIn();
        $("#group").css("display","none");
    });
    $(".regresar").click(function(){
        $(".content").css("display","none");
        $("#group").fadeIn();
    });
    
    $(".hoverable").hover(function(){
        $(".e").css("display","none");
        $(this).css("color","black");
         $(this).css("cursor","pointer");
        $(this).mouseleave(function(){$(this).css("color","#B3B9C9");});
        if($(this).attr("id")=="poder"){
            $(".e1").css("display","block");
        }
        if($(this).attr("id")=="contractualismo"){
            $(".e2").css("display","block");
        }
        if($(this).attr("id")=="poderp"){
            $(".e3").css("display","block");
        }
        if($(this).attr("id")=="estado"){
            $(".e4").css("display","block");
        }
        if($(this).attr("id")=="legitimidad"){
            $(".e5").css("display","block");
        }
        if($(this).attr("id")=="esta"){
            $(".e6").css("display","block");
        }
        if($(this).attr("id")=="contrat"){
            $(".e7").css("display","block");
        }
        if($(this).attr("id")=="indi"){
            $(".e8").css("display","block");
        }
        if($(this).attr("id")=="estado1"){
            $(".e9").css("display","block");
        }
        if($(this).attr("id")=="contrato1"){
            $(".e10").css("display","block");
        }
        if($(this).attr("id")=="indiv"){
            $(".e11").css("display","block");
        }
        if($(this).attr("id")=="estado2"){
            $(".e12").css("display","block");
        }
        if($(this).attr("id")=="pacto"){
            $(".e13").css("display","block");
        }
        if($(this).attr("id")=="individuo1"){
            $(".e14").css("display","block");
        }
    });

});

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
    $("#introduccion").on('click touchstart', function(){
        $("#dialog-3").dialog("open");
    });
    $("#notas").on('click touchstart', function(){
        $("#dialog-4").dialog("open");
    });
    $("#arpegios").on('click touchstart', function(){
        $("#dialog-5").dialog("open");
    });
    $("#blues").on('click touchstart', function(){
        $("#dialog-6").dialog("open");
    });

  $(".pit-hamburguer").click( function () {
    $(".pit-menu-mobile").toggleClass("show-menu");
  });
    
});

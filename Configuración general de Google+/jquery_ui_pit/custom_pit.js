$(document).ready(function() {
	var winWidth = $(window).width();
	var flag = 0;
	if (winWidth <= 980) {
		var newwidth = winWidth*0.95;
		$('.pit_vertical_tabs').removeClass('pit_vertical_tabs').addClass('pit_tabs');
	}else{
		var newwidth = 400;
	}
	//Función para implementar modal
	$('.pit_mdlbtnclass').each(function() {
		var idnumin = $(this).attr('id').match(/[\d]/);
		var newwidth = $('#pit_modal_'+idnumin).attr('width');
		$( '#pit_modal_'+idnumin ).dialog({ autoOpen: false, 
											  modal: true, 
											  minWidth: newwidth,
											  show: {effect: "blind",duration: 300},
											  hide: {effect: "blind",duration: 300} });
		$( '#pit_modal_'+idnumin ).dialog("option", "minWidth", newwidth);	
	});
	$("div,button").click(function(){
		var $className = $(this).attr('class');
		if ($className == 'pit_mdlbtnclass') {
			var idnum = $(this).attr('id').match(/[\d]/);
			
		}
  		$( '#pit_modal_'+idnum ).dialog( "open" );
	});
	
	//Función para implementar acordeón
	$('.pit_acordeon').each(function() {
		var idnumin2 = $(this).attr('id').match(/[\d]/);
		$("#pit_acordeon_"+idnumin2).accordion({
		        autoHeight: false,
		        collapsible: true,
		        heightStyle: "content",
		        active: false,
		        animate: 300,
		        activate: function(event, ui) {
		            try {
		                theOffset = ui.newHeader.offset();
		                $('body,html').animate({ 
		                    scrollTop: theOffset.top 
		                });
		            } catch(err){}
		        }
		    });
		});

	//Tabs
	$(".pit_tabs").tabs({
			collapsible: true
	});
	//Tabs Verticales
	$(".pit_vertical_tabs").tabs({collapsible:true}).addClass("ui-tabs-vertical ui-helper-clearfix");
	$(".pit_vertical_tabs li").removeClass("ui-corner-top").addClass("ui-corner-left");

//Función para agregar tabla de contenidos
	var ToC =	"<div role='navigation' class='table_contents_pit'>" +
					"<ul>";
	var ToC2 = "<ul>";
	var newLine, el, title, link,link2,linkclass,title2,el2;

	$("#cuerpo_pit h2").each(function() {
		el = $(this);
		ide = el.attr("id");
		linkclass = $("."+ide);
		title = el.text();
  		link = "#" + el.attr("id");
  		newLine ="<li class ='"+ide+"'><a href='" + link + "'>" +title +"</a>";
  		ToC += newLine;
		$(linkclass).each(function() {
			el2 = $(this);
		  	title2 = el2.text();
		  	link2 = "#" + el2.attr("id");
		  	newLine2 ="<li class ='"+ide+"'><a href='" + link2 + "'>" +title2 +"</a>" +"</li>";
		  	ToC2 += newLine2;
		});
		ToC2+="</ul></li>";	
		ToC+=ToC2;
		ToC2 = "<li><ul>";		
	});
	ToC +="</ul>" +"</div>";
	$("#cuerpo_pit").after(ToC);
	//Cambiar estilo de Content table, slidetoggle y ocultar los subtítulos
	$('.table_contents_pit li a').click(function(e){
		ref = $(this).attr("href").replace(/^.*?#/,'');
		$('.table_contents_pit ul li ul li').each(function() {
			if ($(this).attr("class") == ref) {
				$(this).slideToggle();
			}
		});
		$('.table_contents_pit li a').each(function() {
			$(this).css('font-weight','normal');

		});
    	$(this).css('font-weight','bold');
    	$(this).css('color','#0B2A4A');
	});
	//Esconder todos los subtítulos inicialmente
	if (flag === 0) {
		flag = 1;
		$('.table_contents_pit ul li ul li').each(function() {
			$(this).hide();
		});
	}
	//Hover para tabla de contenidos
	var actual;
	var referencia;
	$('#cuerpo_pit h2').hover(function(){
		$('.table_contents_pit li a').each(function() {
			$(this).css('font-weight','normal');

		});
		$('.table_contents_pit ul li ul li').each(function() {
			$(this).hide();

		});
		actual = $(this);
  		referencia = "#" + actual.attr("id");
  		referencia2 = "." + actual.attr("id");
		console.log( 'hovering on' , $(this).attr('id') ); 
		console.log( referencia);
		$(".pit_body .table_contents_pit li a[href='"+referencia+"']").css('font-weight','bold');
		$(".pit_body .table_contents_pit ul li ul li"+referencia2).css('font-weight','bold');
		$(".pit_body .table_contents_pit ul li ul li"+referencia2).slideToggle();
		//}
		},
  		function() {}
	);

	//TOOLTIPS
	$( '.pit_tooltip' ).tooltip({
            position: {
            my: "left top+15",
            at: "rigth top"
            }
        });
    $('map').imageMapResize();
    $('map').maphilight();
	
});

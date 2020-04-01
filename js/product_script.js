$(document).ready(function(){

	// $('.danhmucsp').click(function () {
	// 	console.log(document.getElementsByClassName('mega')[0].style.display);
 //    	$('.mega').toggle();
	// });

	$(function() {
	    $('[data-spzoom]').spzoom();
	});

	$(".right_btn").click(function(){
    var a = parseInt($("#qty").val()) + 1;
    $("#qty").val(a);
  	});

  	$(".left_btn").click(function(){
    var a = parseInt($("#qty").val()) - 1;
    if (a>=1) {
    	$("#qty").val(a);
    }else{
    	$("#qty").val(1);
    }
    
  	});

    $(".js-quick-reply").click(function(){
      $('.quick-reply').css('display','block');
    });

    $('.btn-add-hide').click(function(){
      $('.quick-reply').css('display','none');

    });
   /* $("ol li a").click(function() {
    if ($(this).hasClass("active)) {
        // Do stuff if class = "A"
    } else if ($(this).hasClass("B")) {
        // Do stuff if class = "B"
    }
});*/
     $('.js-filter').click(function(){
         $('.js-filter').removeClass("active");
         $(this).addClass("active");
         $('.color-focus').html( $(this).html());
     });

     $('.js-configuration').click(function(){
        $('.js-configuration').removeClass('active-confi');
        $(this).addClass('active-confi');
         $('.configuration_focus').html( $(this).html());
        
     });
     $( ".danhmucsp" ).hover(function() {
          $(".hover_opacity").css('display','block');
          //$( this ).fadeIn( 500 );
    });
     $( ".danhmucsp" ).mouseleave(function() {
        $(".hover_opacity").css('display','none');
    });
});
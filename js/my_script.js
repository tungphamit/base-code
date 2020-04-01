$(document).ready(function(){

	$('.icon_mobile').click(function () {
    	$('.mobile_list').css("display", "block");
	});

	// $('.owl-carousel').owlCarousel({
	//     loop:false,
	//     margin:10,
	//     nav:true,
	//     responsive:{
	//         0:{
	//             items:2
	//         },
	//         480:{
	//         	items:2
	//         },
	//         660:{
	//             items:4
	//         },
	//         900:{
	//         	items:4
	//         },
	//         1000:{
	//             items:5
	//         }
	//     }
	// });

    $('.thumb_item').click(function(){
        var src = $(this).find(".flx img").attr("src");
        console.log('src', src);
        $('.preview_image').find("img").attr("src", src);
    });
    $('.comment').click(function(){
        var getValBtn = $('.comment').html();
        if (getValBtn == "Viết nhận xét của bạn") {
            $('.feedback_box_2').css("display","block");
            $(".comment").html("Đóng");
        }
        else
        {
             $('.feedback_box_2').css("display","none");
             $(".comment").html("Viết nhận xét của bạn");
        }

        
    });

    $('.js-show-more').click(function(){
        var getValueBtn = $('.js-show-more').html();
        if(getValueBtn == "Xem thêm nội dung") {
            $('.more_than_none').css("display", "block");
            $(".js-show-more").html("Thu gọn nội dung");
        }

        else
        {
            $('.more_than_none').css("display", "none");
            $(".js-show-more").html("Xem thêm nội dung");
        } 
    });

});

$(".closes").click(function(){

		$('.mobile_list').css("display", "none");
});


    function fit_img() {
        jQuery(".fit_thumbnail img").one("load", function () {
       	// no do anything

        }).each(function () {
            if (this.complete) { //remove comment in this line if use file in host

                jQuery(this).load();
                var realSize = realImgDimension(this);
                var image_height = realSize.naturalHeight;
                var image_width = realSize.naturalWidth;                
                var image_ratio = image_width / image_height;

                var div_width = jQuery(this).parents(".fit_thumbnail").innerWidth(); // "innerWidth" is include padding to div width, use "width" if not include padding 
                var div_height = jQuery(this).parents(".fit_thumbnail").innerHeight(); // "innerHeight" is include padding to div height, use "height" if not include padding
                var div_ratio = div_width / div_height;
                if (div_ratio > 1) { // if big width div                   
                    if (image_ratio > 1) {  // if big width image                        
                        if ( div_ratio > image_ratio){ // if div width > image width
                            jQuery(this).parents(".fit_thumbnail").addClass("big_height");                                              
                        }                        
                        else{ // if div width < image width
                            jQuery(this).parents(".fit_thumbnail").addClass("big_width");                                                         
                        }                      
                    }                   
                    else if (image_ratio < 1) {  // else if big height image
                        jQuery(this).parents(".fit_thumbnail").addClass("big_height");                                                                  
                    }                   
                    else {  // else square image
                        jQuery(this).parents(".fit_thumbnail").addClass("big_height");                                                                   
                    }                    
                }               
                else if (div_ratio < 1) {  // else if big height div                    
                    if (image_ratio > 1) { // if big width image
                        jQuery(this).parents(".fit_thumbnail").addClass("big_width");                                             
                    }                   
                    else if (image_ratio < 1) {  // else if big height image                        
                        if ( div_ratio > image_ratio){ // if div height > image height
                            jQuery(this).parents(".fit_thumbnail").addClass("big_height");                        
                        }                        
                        else{ // if div height < image height
                            jQuery(this).parents(".fit_thumbnail").addClass("big_width");                         
                        }                        
                    }                    
                    else { // else square image
                        jQuery(this).parents(".fit_thumbnail").addClass("big_width");                                                
                    }                       
                }                
                else { // else square div                    
                    if (image_ratio > 1) { // if big width image
                        jQuery(this).parents(".fit_thumbnail").addClass("big_width");                                                
                    }                    
                    else if (image_ratio < 1) { // else if big height image
                        jQuery(this).parents(".fit_thumbnail").addClass("big_height");                                                
                    }                    
                    else { // else square image
                        jQuery(this).parents(".fit_thumbnail").addClass("equal_height_width");                                                
                    }                    
                }

            }//if
        }); //each
    }//dunction

    fit_img();
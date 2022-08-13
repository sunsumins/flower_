$(function(){
	

		$(".answer").hide();
		$(".faq_cover>h3").click(function(){
					
		// $(this).next().slideToggle();
		
		 if($(this).next().css("display") == "none"){
            $(".answer").slideUp();
            $(this).next().slideDown();
          
        }
		else {
			 $(this).next().slideUp();
		}
					
	});
	
	
	// 하단버튼전체
	
	
	$(".faq_cover *:nth-child(n+10)").hide();
	
		//버튼
	
	
	$(".bottom_number>p:eq(1)").click(function() {
		$(".faq_cover>h3").hide();
		$(".bottom_number>p:eq(2)").removeClass("number_hover");
		$(this).addClass("number_hover");
		$(".faq_cover>h3").show();
		$(".faq_cover *:nth-child(n+10)").hide();
	});
	
	
	$(".bottom_number>p:eq(2)").click(function() {
		$(".faq_cover>h3").hide();
		$(".bottom_number>p:eq(1)").removeClass("number_hover");
		$(this).addClass("number_hover");
		$(".faq_cover *:nth-child(n+10)").show();
		$(".answer").hide();
	});
		
		
	
		//좌우 화살표
	
	$(".bottom_number>p:eq(0)").click(function() {
		$(".faq_cover>h3").hide();
		$(".bottom_number>p:eq(2)").removeClass("number_hover");
		$(".bottom_number>p:eq(1)").addClass("number_hover");
		$(".faq_cover>h3").show();
		$(".faq_cover *:nth-child(n+10)").hide();
	});
	
	
	$(".bottom_number>p:eq(3)").click(function() {
		$(".faq_cover>h3").hide();
		$(".bottom_number>p:eq(1)").removeClass("number_hover");
		$(".bottom_number>p:eq(2)").addClass("number_hover");
		$(".faq_cover *:nth-child(n+10)").show();
		$(".answer").hide();
	});
	
	
	
	
	
	
});
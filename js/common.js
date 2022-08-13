
$(function(){
	
	// header
	
	$(".sub ,.subcover").hide();
	
	$(".menu>li").mouseover(function(){
		$(".ad" ,this).addClass("add");
		$(".sub,.subcover").stop().slideDown();
	});
	
	$(".menu>li").mouseout(function(){
		$(".ad" ,this).removeClass("add");
		$(".sub,.subcover").stop().slideUp();
	});
	
	// 마우스오버시 서브커버의 위치가 이상함
	
	


	//호버시 한글로 변환 
	
	
	$(".BOUQUET").hover(function(){
		$(this).text("꽃다발");
	},function(){
		$(this).text("BOUQUET");
	});
	
	$(".SILK").hover(function(){
		$(this).text("조화");
	},function(){
		$(this).text("SILK");
	});
	
	$(".BASKET").hover(function(){
		$(this).text("꽃바구니");
	},function(){
		$(this).text("BASKET");
	});
	
	$(".FLOWER_BOX").hover(function(){
		$(this).text("꽃상자");
	},function(){
		$(this).text("FLOWER BOX");
	});
	
	$(".GIFT_FLOWER").hover(function(){
		$(this).text("카드 메세지");
	},function(){
		$(this).text("CARD MESSAGE");
	});
	
	$(".GUIDE").hover(function(){
		$(this).text("꽃말");
	},function(){
		$(this).text("FLOWER MEANING");
	});
	
	$(".NEW_PHOTO").hover(function(){
		$(this).text("꽃포장");
	},function(){
		$(this).text("FLOWER WRAPPING");
	});
	
	$(".BEST_PHOTO").hover(function(){
		$(this).text("포토리뷰");
	},function(){
		$(this).text("PHOTO GALLERY");
	});
	
	$(".NOTICE").hover(function(){
		$(this).text("자주묻는질문");
	},function(){
		$(this).text("FAQ");
	});
	
	$(".EVENT").hover(function(){
		$(this).text("이벤트");
	},function(){
		$(this).text("EVENT");
	});
	
	$(".QA").hover(function(){
		$(this).text("1:1문의");
	},function(){
		$(this).text("Q&A");
	});
	
});











































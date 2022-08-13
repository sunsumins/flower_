$ (function(){
	
	
	$(".slide>div>div").not(":eq(0)").hide();
	
	var now = 0;
	var slideImg = 3;
	
	function slide() {
		now = now == slideImg ? 0 : now+=1;
		$(".slide>div>div").eq(now-1).fadeOut(1000);
		$(".slide>div>div").eq(now).fadeIn(1000);
		
		$(".bullet>li").removeClass("hover");
		$(".bullet>li").eq(now).addClass("hover");
	}
	
	var clear = setInterval(slide, 4000); 
	
	// 이거하니까 호버가 안먹음
	
	$(".prev, .next, .bullet>li").click(function(){
		clearInterval(clear);
		
		// slide()
		
	});
	
	
	function slide_left() {
		var slideImg = 0;
		now = now == slideImg ? 3 : now-=1;
		$(".slide>div>div").eq(now+1).fadeOut(1000);
		$(".slide>div>div").eq(now).fadeIn(1000);
		
		$(".bullet>li").removeClass("hover");
		$(".bullet>li").eq(now).addClass("hover");
	}
	
	
	// var clear = setInterval(slide_left, 4000); 
	
	//버튼클릭시 함수호출
	
	$(".prev").click(function(){
		clearInterval(clear);
		slide_left();
	});
	
	$(".next").click(function(){
		slide();
	});
	
	
	
	// 블릿기호
	
	$(".bullet>li").click(function(){
		var bulletNumber = $(this).index();
		if( now == bulletNumber ) return;
		else {
			
			$(".slide>div>div").eq(now).fadeOut(2000);
			$(".slide>div>div").eq(bulletNumber).fadeIn(2000);
		
		
			$(".bullet>li").removeClass("hover");
			$(".bullet>li").eq(bulletNumber).addClass("hover");
			now = bulletNumber;
		}
	})
	
	//포토갤러리
	
	function product_next() {
		$(".product>div>ul").animate({left:"-272px"},800,function(){$(".product>div>ul>li:first").appendTo(".product>div>ul");
		$(".product>div>ul").css("left","0px")
	})
	
	}
	
	var clear1 = setInterval(product_next, 3000);
	
	$(".product_next").click(function() {
		clearInterval(clear1);
		product_next();
		return false;
	});
	
	function product_prev() {
		$(".product>div>ul>li:last").prependTo(".product>div>ul");
		$(".product>div>ul").css("left","-272px");
		$(".product>div>ul").animate({left:"0px"},800);
	}
	
	$(".product_pre").click(function(){
		clearInterval(clear1);
		product_prev();
		return false;
	});
	


});






















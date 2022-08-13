$ (function(){
	
	// 메인 nav
	$(".menu>li:nth-child(2)>a").addClass("add");
	
	$(".menu>li").mouseover(function(){
		$(".ad").removeClass("add");
		$(".ad" ,this).addClass("add");
		$(".sub,.subcover").stop().slideDown();
	});
	
	$(".menu>li").mouseout(function(){
		$(".ad" ,this).removeClass("add");
		$(".sub,.subcover").stop().slideUp();
		$(".menu>li:nth-child(2)>a").addClass("add");
	});
	
	
	
	
	
	
	
	
	
	$(".flower_new_inner>li:nth-child(n+4)").hide();
	// n+는 ~이후부터 라는 말 / 4이후 부터 숨김

	// 더보기
	$(".plus>button").click(function(){
			number=$(".flower_new>ul>li:visible").length;
			
			number=Math.floor(number/3)*3;
			if(number>11) return false; //number가 아닌 length값으로 주는게 좋음
			//lefgth 값으로 주면 숫자가 달라져도 일일히 안바꿔도 됨
			else {
				$(".flower_new>ul>li").hide();
				$(".flower_new>ul>li:nth-child(-n"+(number+3)+")").show();
			}
			return false
	});		


});
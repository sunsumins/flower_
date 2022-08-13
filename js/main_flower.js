$(function(){
	$(".menu>li:nth-child(1)>a").addClass("add");
	
	$(".menu>li").mouseover(function(){
		$(".ad").removeClass("add");
		$(".ad" ,this).addClass("add");
		$(".sub,.subcover").stop().slideDown();
	});
	
	$(".menu>li").mouseout(function(){
		$(".ad" ,this).removeClass("add");
		$(".sub,.subcover").stop().slideUp();
		$(".menu>li:nth-child(1)>a").addClass("add");
	});
	
	
	
	
	// 처음상태-이미지를 9번 이후부터 숨기기(8개만 보임)
	$(".flower_new>ul>li:nth-child(n+5)").hide();

	// 더보기
	$(".plus>button").click(function(){
			number=$(".flower_new>ul>li:visible").length;
			
			number=Math.floor(number/3)*3;
			if(number>5) return false;
			else {
				$(".flower_new>ul>li").hide();
				$(".flower_new>ul>li:nth-child(-n"+(number+3)+")").show();
			}
			return false
	});		
	
			
});











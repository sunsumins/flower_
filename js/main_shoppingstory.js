$ (function(){
	$(".menu>li:nth-child(4)>a").addClass("add");
	
	$(".menu>li").mouseover(function(){
		$(".ad").removeClass("add");
		$(".ad" ,this).addClass("add");
		$(".sub,.subcover").stop().slideDown();
	});
	
	$(".menu>li").mouseout(function(){
		$(".ad" ,this).removeClass("add");
		$(".sub,.subcover").stop().slideUp();
		$(".menu>li:nth-child(4)>a").addClass("add");
	});


});
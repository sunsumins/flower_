$(function(){
	
	

	// 체크박스
	
	$(".all_images>li:nth-child(n+13)").hide();  //이거를
	
	
	$(".bottom_number>p:eq(1)").click(function() {
		$(".all_images>li").show();
		$(".bottom_number>p:eq(2)").removeClass("number_hover");
		$(this).addClass("number_hover");
		$(".all_images>li:nth-child(n+13)").hide();
	});
	
	
	$(".bottom_number>p:eq(2)").click(function() {
		$(".all_images>li").hide();
		$(".bottom_number>p:eq(1)").removeClass("number_hover");
		$(this).addClass("number_hover");
		$(".all_images>li:nth-child(n+13)").show();
	});
	
	
	
	//좌우 화살표
	
	$(".bottom_number>p:eq(0)").click(function() {
		$(".all_images>li").show();
		$(".bottom_number>p:eq(2)").removeClass("number_hover");
		$(".bottom_number>p:eq(1)").addClass("number_hover");
		$(".all_images>li:nth-child(n+13)").hide();
	});
	
	
	$(".bottom_number>p:eq(3)").click(function() {
		$(".all_images>li").hide();
		$(".bottom_number>p:eq(1)").removeClass("number_hover");
		$(".bottom_number>p:eq(2)").addClass("number_hover");
		$(".all_images>li:nth-child(n+13)").show();
	});
	
	
	// 상단 nav
	
	$(".form_menu>ul>li").click(function() {
		$(".bottom_number>p:eq(2)").removeClass("number_hover");
		$(".bottom_number>p:eq(1)").addClass("number_hover");
		var titleVal = $("p",this).attr("title");
		if( titleVal == "all") { $(".all_images>li").show(); 
		$(".all_images>li:nth-child(n+13)").hide();
		} 
		//여기에(all할때 1,2로 보이고 싶지않을경우 $(".all_images>li:nth-child(n+13)").hide(); 이건 여기서 지우면 됨 )
		else {
			$(".all_images>li").hide();
			$(".all_images>li[title="+titleVal+"]").show();
		}
	});
	
	
	
	
	
	
	
	

});
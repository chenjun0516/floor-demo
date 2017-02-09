$(function(){
	var wHeight = $(window).height(); //获取浏览器窗口高度
	var wWidth = $(window).width(); //获取浏览器窗口宽度
	$('#lanrenzhijia .list').height($('.floor').length*wHeight);
	$('#lanrenzhijia,#lanrenzhijia .main,#lanrenzhijia .floor').height(wHeight).width(wWidth);
	//改变浏览器窗口大小时重新计算高度和宽度
	$(window).resize(function(){
		var wHeight = $(window).height(); //获取浏览器窗口高度
		var wWidth = $(window).width(); //获取浏览器窗口宽度
		$('#lanrenzhijia .list').height($('.floor').length*wHeight);
		$('#lanrenzhijia,#lanrenzhijia .main,#lanrenzhijia .floor').height(wHeight).width(wWidth);
	});
	// 点击定位
	$('#float-right a').on('click',function(){
		var index = $(this).index();
		$(this).addClass('active').siblings().removeClass('active');
		$('body').animate({scrollTop:wHeight*index},1000);
	})
	//页面滑动右侧导航联动
	$(window).on("scroll",function(){
		var scrollTop = $(this).scrollTop()+1;//加1是为了解决scrollTop为整数时右面导航会停留在上一楼层的问题
		var index = Math.floor(scrollTop/wHeight);
		$("#float-right").find("a:eq("+index+")").addClass('active').siblings().removeClass('active');
	})
	
});
require.config({
	paths:{
		jquery:"../../libs/jquery.min",
		swiper:"../../plugins/swiper.min",
		common:"../module/common"
	}
});


require(["jquery","swiper","common"],function($,swiper,comObj){
$(function(){
	var slideBanner = new Swiper('#slide_banner',{
		slidesPerView:1,
		autoplay:3000,
		loop:true,
		centeredSlides:true,
		pagination : '.swiper-pagination',
		autoplayDisableOnInteraction :true 
	});

	// canvas图片加载
	comObj.loadCanvas();

	// figcaption高度调整
	// $(window).on("resize",comObj.justH);

	// 头部搜索列表展示效果栏
	comObj.iconChange();

	// 排序按钮变化
	comObj.orderBtn();

	// 筛选按钮滑出
	comObj.filter();
	// 购物车编辑指令
	comObj.shopCarEdit();
	$(window).on("resize",comObj.shopCarEdit);

	// 购物车数量加减
	$(".icon-add").on("click",comObj.addNum);
	$(".icon-reduce").on("click",comObj.reduceNum);

	//购物车删除 
	comObj.deleteItem();
	comObj.itemSelected();


	

});




});
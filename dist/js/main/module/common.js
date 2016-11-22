define(["jquery"],function(require){

return comObj = {
		justH : function(){
			var iH = $("#goodsLists").find(".canvasImg").outerHeight();
			   $("#goodsLists").find("figcaption").height(iH);
		},
		iconChange : function(){
			$(".goods_search").find(".search_change").click(function(){
				if($(".search_change").find("span").hasClass("icon-list2")){
					$(this).find("span").removeClass("icon-list2").addClass("icon-other");
				}else{
					$(this).find("span").removeClass("icon-other").addClass("icon-list2");
				}
			})
		},
		orderBtn : function(){
			$(".orderBy").each(function(){
				$(this).click(function(){
					if(!$(this).find("span").hasClass("icon-bottom")){
						$(this).find("span").parents(".search_bottom").find(".orderBy:not(:last-child)>span").attr('class',"");
						$(this).find("span").addClass("icon-bottom");

					}else{
						$(this).find("span").parents(".search_bottom").find(".orderBy:not(:last-child)>span").attr('class',"");
						$(this).find("span").removeClass("icon-bottom").addClass("icon-top");
					}
				})
			})
		},
		filter : function(e){
			var rightDis = $(".filterContent").css("right");
			$(".filter").on("click touchend",function(e) {
				if(parseInt($(".filterContent").css("right"))<0){
					$(".filterContent").stop().animate({
						"right":"0"
				 	},600)
				}else{
					$(".filterContent").stop().animate({
						"right":rightDis
				 	},600)
				}

			}).find(".filterContent").on("click touchend",function(e){
				e.stopPropagation();
			});
		},
		shopCarEdit : function(){
			var iH = $(".content_bottom").outerHeight();
				$(".edit_content").css("height",iH);
			    $(".delete").css("height",iH);
			$("#shopping_lists").find(".do_edit").each(function(i){
				$(this).on("click",function(){
					if($(this).hasClass("edit")){				
						$(".do_edit").eq(i).text("完成").removeClass("edit");
						$(this).parents(".lists_content").find(".edit_content").each(function(i){
							$(this).stop().animate({
								opacity:"1",
								right:"0"
							})
						}).prev(".right_opt").css("display","none")
					}else{					
						$(".do_edit").eq(i).text("编辑").addClass("edit");
						$(this).parents(".lists_content").find(".edit_content").each(function(i){
							$(this).stop().animate({
								opacity:"0",
								right:"-66.66667%"
							});
						}).prev(".right_opt").css("display","block");
					}
					
				});
			});
		},
		addNum : function(){
			var num = parseInt($(this).prev().val());
				if(!isNaN(num)){
					if(num<1){
						num = 1;
					}else{
						num+=1;
					}
				}else{
					num = 1;
				}
				$(this).prev().val(num);
		},
		reduceNum : function(){
			var num = parseInt($(this).next().val());
				if(!isNaN(num)){
					if(num<2){
						num = 1;
					}else{
						num-=1;
					}
				}else{
					num=1;
				}
				$(this).next().val(num);
		},
		deleteItem :function(){
			$(".lists_content").each(function(){
				var _this = this;
				$(this).find(".delete").each(function(i){
					$(this).on("click",function(){
						if($(this).parents(".content_bottom").find(".selectBtn").hasClass("icon-dot-solid")){
							if($(_this).find(".content_bottom").length>1){
								$(_this).find(".content_bottom").eq(i).remove();
							}else{
								$(_this).remove();
							}
							
						}else{
							console.log("请选中之后删除");
						}
					});
				})
			})
		},
		itemSelected : function(){
            $(".lists_content").each(function(){
            	var _this = this;
            	$(this).find(".selectBtn").each(function(){
            		$(this).on("click",function(){
						if($(this).hasClass("icon-dot-blank")){
							$(this).removeClass("icon-dot-blank").addClass('icon-dot-solid').css("color","red");
							if(!$(_this).find(".selectBtn").hasClass("icon-dot-blank")){
									$(_this).find(".icon-title").removeClass("icon-dot-blank").addClass("icon-dot-solid").css("color","red");
							}
						}else if($(this).hasClass("icon-dot-solid")){
							$(this).addClass("icon-dot-blank").removeClass('icon-dot-solid').css("color"," ");
							$(_this).find(".icon-title").removeClass("icon-dot-solid").addClass("icon-dot-blank").css("color"," ");
						}

            		});

            	});

            	$(this).find(".icon-title").on("click",function(){
            		if($(_this).find(".selectBtn").hasClass("icon-dot-blank")){
            			$(this).removeClass("icon-dot-blank").addClass("icon-dot-solid").css("color","red");
            			$(_this).find(".selectBtn").removeClass("icon-dot-blank").addClass("icon-dot-solid").css("color","red");
            		}else{
            			$(this).addClass("icon-dot-blank").removeClass("icon-dot-solid").css("color","");
            			$(_this).find(".selectBtn").addClass("icon-dot-blank").removeClass("icon-dot-solid");
            		}
            		
            	});
            });
		},
		loadCanvas : function(){
			var canvasImgLen = $("#goodsLists").find("canvas").length;
			if(canvasImgLen>0){
				$("#goodsLists").find("canvas").each(function(){
					var imgSrc = $(this).data("src");
					var imgObj = new Image();
					imgObj.canvasImg = $(this)[0];
					var canvasScope = imgObj.canvasImg.getContext("2d");
					if(canvasScope){
						imgObj.onload = function(){
							imgObj.canvasImg.width = this.width;
							imgObj.canvasImg.height = this.height;
							canvasScope.drawImage(this, 0, 0);
							$(imgObj.canvasImg).css("background-image","none");
						}
						imgObj.src = imgSrc;
					}
				})

			}
		}

}


});
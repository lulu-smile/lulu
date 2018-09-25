(function(){
	function slide(){
		var imgShow = document.querySelector(
			"#rotate>ul>li>a>img.show"
		);
		imgShow.className="";
		if(imgShow.parentNode.parentNode.nextElementSibling!=null){
			imgShow.parentNode.parentNode.nextElementSibling.children[0].children[0].className="show";
		}else{
			imgShow.parentNode.parentNode.parentNode.children[0].children[0].children[0].className="show";
		}
	}
	var timer=setInterval(slide,3000);
	var slider=document.getElementById("promoInner");
	slider.onmouseover=function(){
		clearInterval(timer);
		timer=null;
		$("#rotate>ul>li>a>img.show").parent().css("display","block").parent().siblings().children("a").css("display","none")
	}
	slider.onmouseout=function(){
		timer=setInterval(slide,2000);
		$("#rotate>ul>li>a").css("display","block")
	}

	$("#promoTrigger>span>a").hover(function(){
		//console.log(timer)
		clearInterval(timer);
		timer=null;
		var $btn=$(this);
		var id=$btn.attr("href");
		$(id).css("display","block").parent().siblings().children("a").css("display","none")
		$(id).children().addClass("show").parent().parent().siblings().children().children().removeClass("show");
	},function(){
		timer=setInterval(slide,3000);
		//console.log(timer)
		$("#rotate>ul>li>a").css("display","block")
	})
	//Ӣ�� Ƥ�� ��
	$("div.skin_center>.item_sub>a,#newsTap>ul>li>a").hover(function(){
		var $btn=$(this);
		var id=$btn.attr("href");
		$(id).show().siblings().hide();
	})
	$("div.item_subnav a").hover(function(){
		var $btn=$(this);
		var id=$btn.attr("href");
		$(id).show().siblings().hide();
	})
	$(".item_header2 a").hover(function(){
		var $btn=$(this);
		var id=$btn.attr("href");
		$(id).show().siblings().hide();
	})

	//$(".promo-item a").click(function () {
	//	alert($(this)[0].href)
	//	location.href=$(this)[0].href;
	//})
})();
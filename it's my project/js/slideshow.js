(function(){
	function slide(){
		var imgShow = document.querySelector(
			"#rotate>ul>li>a>img.show"	
		);
		imgShow.className="";
		if(imgShow.parentNode.parentNode.nextElementSibling!=null)
			imgShow.parentNode.parentNode.nextElementSibling.children[0].children[0].className="show";
		else
			imgShow.parentNode.parentNode.parentNode.children[0].children[0].children[0].className="show";
	}
	var timer=setInterval(slide,2000);
	var slider=document.getElementById("promoInner");
	slider.onmouseover=function(){
		clearInterval(timer);
		timer=null;
	}
	slider.onmouseout=function(){
		timer=setInterval(slide,2000);
	}

	$("#promoTrigger>span>a").hover(function(){
		//console.log(timer)
		clearInterval(timer);
		timer=null;
		var $btn=$(this);
		var id=$btn.attr("href");
		$(id).children().addClass("show").parent().parent().siblings().children().children().removeClass("show");
	},function(){
		timer=setInterval(slide,2000);
		//console.log(timer)
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
})();
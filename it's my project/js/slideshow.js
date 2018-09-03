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
	var timer=setInterval(slide,1000);
	var slider=document.getElementById("promoInner");
	slider.onmouseover=function(){
		clearInterval(timer);
		timer=null;
	}
	slider.onmouseout=function(){
		timer=setInterval(slide,1000);
	}

	$("#promoTrigger>span>a").hover(function(){
		console.log(timer)
		clearInterval(timer);
		timer=null;
		var $btn=$(this);
		var id=$btn.attr("href");
		$(id).children().addClass("show").parent().parent().siblings().children().children().removeClass("show");
	},function(){
		timer=setInterval(slide,1000);
		console.log(timer)
	})
	//Ó¢ÐÛ Æ¤·ô Çø
	$("div.skin_center>.item_sub>a").hover(function(){
		var $btn=$(this);
		var id=$btn.attr("href");
		$(id).show().siblings().hide();
	})
})();
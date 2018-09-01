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
	var timer=setInterval(slide,3000);
	var slider=document.getElementById("rotate");
	slider.onmouseover=function(){
		clearInterval(timer);
		timer=null;
	}
	slider.onmouseout=function(){
		timer=setInterval(slide,3000);
	}
})();
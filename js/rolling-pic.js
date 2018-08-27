		var box = document.getElementsByClassName("box")[0];
		var img = document.getElementById("img");
		var up_play = document.getElementsByClassName("up")[0];
		var down_play = document.getElementsByClassName("down")[0];
		var timer = null;
		var num = 0;
		up_play.onmouseover = function(){
			clearInterval(timer)
			timer = setInterval(function(){
				num-=10;
				num >= -1070 ? img.style.top = num +"px": clearInterval(timer);
			},20)	
		}
		down_play.onmouseover = function(){
			clearInterval(timer)
			timer = setInterval(function(){
				num+=10;
				num <0 ? img.style.top = num +"px": clearInterval(timer);
			},20)	
		}
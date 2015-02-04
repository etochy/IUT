	var temps=2;
	var interval;
	var interval2;
	var seconds_left;
	var tf = false;
	var img;
	var imgObj;
	var audio = new Audio('boom.mp3');
	function clignote(){
	if(tf==true){
		img.style.opacity = "1";
	    $('#pic').html(img);
		tf=false;
	}
	else{
		img.style.opacity = "0";
		$('#pic').html(img);
		tf=true;
	}
	}
	function move(){

		/*imgObj = document.getElementById('#pic');
		imgObj.style.position= 'relative'; 
		imgObj.style.left = '0px';
		imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';*/
	}
	function explosion(){
	//alert('kaboum!');
	img = new Image();
	img.src = "boum.jpg";
	audio.play();
	$('#pic').html(img);
	interval2 = setInterval(function(){move()}, 10);
	interval = setInterval(function(){clignote()},500);
	}

	function countdown(){
	seconds_left = seconds_left-0.01;
	seconds_left = seconds_left.toFixed(2);
	$('#timer').html(seconds_left);
	if(seconds_left <= 0.01){
		window.clearInterval(interval);
		$('#timer').html("timeout");
		window.explosion();
	}
	}
	function decompte(){
	if(interval != null){
		window.clearInterval(interval);
		window.clearInterval(interval2);
		img.style.opacity = "0";
	}
	alert('decompte lance !');
	seconds_left = temps.toFixed(2);
	interval = setInterval(function(){countdown()}, 10);
	}


	

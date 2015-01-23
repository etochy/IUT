function decompte(){
	alert('decompte lance !');
	myVar=setInterval(function () {explosion()}, 1000);
}
function explosion(){
	alert('kaboum!');
	window.clearInterval(myVar);
}
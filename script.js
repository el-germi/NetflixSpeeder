var sp = 1.0;

document.body.addEventListener('keypress', function(e) {
	if(e.key == "p") {
		document.body.style.border = "5px solid red";
		var speed = prompt("PlayBack speed",sp)
		if(speed != null) {
			if(isNumber(speed)) {
				sp = speed;
				document.querySelector('video').playbackRate = sp
			} else {
				alert("not a number\nmaybe change the ',' for a '.'")
			}
		}
		document.body.style.border = "0px solid red";
	}
});

function isNumber(n){
	return Number(n) == n;
}
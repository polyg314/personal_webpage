$(document).ready(function(){


playerGlow()

var glowPlayer = setInterval(function(){ playerGlow() }, 2000);

function playerGlow() {
	if($(".main-play").hasClass('play-glow')){
		$(".main-play").removeClass('play-glow')
	}else{
		$(".main-play").addClass('play-glow')
	}
}

function stopPlayGlow() {
    clearInterval(glowPlayer);
}

$(document).on("click", ".main-play", function(event){
	event.preventDefault()
	stopPlayGlow()
	$(this).fadeOut()
	$(".navbar").fadeOut()
	window.setTimeout(function(){
		meetPaul()
	}, 500);
})

function meetPaul(){
	$(".meet-paul").fadeIn("slow", function(){
		console.log("next step")
		$("#video-container").css({
			background: "-webkit-radial-gradientradial-gradient( circle at 97%, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))",
			background: "radial-gradient( circle at 97%, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))",
			opacity: 1
		})
	window.setTimeout(function(){
		$(".meet-paul").addClass("flipOutY")
	}, 2000);
	})
}


})

// $('#yourElement').addClass('animated bounceOutLeft');

// $('#yourElement').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', doSomething);

// #yourElement {
//   -vendor-animation-duration: 3s;
//   -vendor-animation-delay: 2s;
//   -vendor-animation-iteration-count: infinite;
// }
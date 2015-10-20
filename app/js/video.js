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
		meetPaul()
	})

	function meetPaul(){
		$(".meet-paul").fadeIn("slow", function(){
			$("#video-container").css({
				background: "-webkit-radial-gradientradial-gradient( circle at 97%, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))",
				background: "radial-gradient( circle at 97%, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))",
				opacity: 1
			})
			window.setTimeout(function(){
				$(".meet-paul").addClass("flipOutY")
			}, 1500);
			window.setTimeout(function(){
				aScientistAndMusician()
			}, 1900);
		})
	}

	function aScientistAndMusician(){
		$("#scientist-slide").removeClass("no-display")
		window.setTimeout(function(){
			$("#video-container").css({
				background: "url('images/pressy.jpg')",
				"background-position": "85% 70%",
				"background-size": "100% 100%",
			})
		}, 1000);
		window.setTimeout(function(){
			$(".scientist-musician").addClass("rotateOutUpRight");
			$("#scientist-slide").css("background-color", "hsla(0,0%,0%,0.38)")
			window.setTimeout(function(){
				$(".developer").removeClass("no-display")
				creativity()
			}, 200);
		}, 1500);
	}



	function creativity(){
		window.setTimeout(function(){
			$(".developer").fadeOut()
			$("#creativity").fadeIn(1, function(){
				$("#creativity").css("background-size", "150% 150%");
				$("#video-container").fadeOut(500, function(){
					$("#spirit").fadeIn();
				});
			});
			drive()
		}, 2000);
	}

	function drive(){
		$("#spirit-container").animate({
			top: '-=5%'
		}, 5000, function(){
			$("#spirit-container").css("top", "43%")
			$("#spirit").text("Unexplored").fadeIn(500, function(){})	
		})
		window.setTimeout(function(){
			$("#spirit").fadeOut(500, function(){
				$("#spirit").text("Drive him to take his work places").fadeIn()
				$("#unexplored").removeClass("no-display");
			})
			window.setTimeout(function(){
				$("#spirit").fadeOut(500, function(){	
					$("#creativity").fadeOut(500, function(){
						$("#spirit-container").css("font-size", "70px")


						clouds()
					})
				})
			}, 2000);
		}, 2000);
	}

	function clouds(){


		// window.setTimeout(function(){

		// 	$("#unexplored").addClass("slideOutDown")
		// 	$("#clouds").removeClass("no-display")
		// }, 2000);
		window.setTimeout(function(){
			$("#spirit").fadeOut();
			$("#unexplored").css("background-position", "50% 10%");
			window.setTimeout(function(){
				$("#spirit-container").css("font-size", "55px");
				$("#spirit").text("Building for the web").fadeIn();
				flyBys()
			}, 1500);
		}, 1650);

	}

	function flyBys(){
		window.setTimeout(function(){		
			$("#AngularJS").animate({
				right: '-100%'
			}, 20000, function(){});
		}, 10);
		window.setTimeout(function(){		
			$("#HTML").animate({
				right: '-100%'
			}, 20000, function(){});
		}, 1500);
		window.setTimeout(function(){		
			$("#jQuery").animate({
				right: '-100%'
			}, 20000, function(){});
		}, 1400);
		window.setTimeout(function(){		
			$("#nodeJS").animate({
				right: '-100%'
			}, 20000, function(){});
		}, 3500);
		window.setTimeout(function(){		
			$("#postgres").animate({
				right: '-100%'
			}, 20000, function(){});
		}, 2000);
		window.setTimeout(function(){		
			$("#mongoDB").animate({
				right: '-100%'
			}, 18000, function(){});
		}, 4000);
		window.setTimeout(function(){		
			$("#bootStrap").animate({
				right: '-100%'
			}, 20000, function(){});
		}, 4500);
		window.setTimeout(function(){		
			$("#photoshop").animate({
				right: '-100%'
			}, 20000, function(){});
		}, 6500);
		window.setTimeout(function(){		
			$("#git").animate({
				right: '-100%'
			}, 20000, function(){});
		}, 6000);
		window.setTimeout(function(){
			$("#ionic").animate({
				right: '-100%'
			}, 20000, function(){});
		}, 8000);
		window.setTimeout(function(){
			$("#spirit").fadeOut(700, function(){
				$("#spirit").text("and for mobile").fadeIn();
			});		
			$("#meteor").animate({
				right: '-100%'
			}, 20000, function(){});
		}, 8500);
		window.setTimeout(function(){		
			$("#xCode").animate({
				right: '-100%'
			}, 20000, function(){});
		}, 9500);
		window.setTimeout(function(){		
			$("#cocoa").animate({
				right: '-100%'
			}, 19000, function(){});
		}, 10500);
		window.setTimeout(function(){		
			$("#swift").animate({
				right: '-100%'
			}, 20000, function(){});
		}, 12000);
		window.setTimeout(function(){		
			pursuit()
		}, 21000);
	}

	function pursuit(){
		$("#pursuit").fadeIn(500, function(){
			window.setTimeout(function(){		
				$("#cover-1").fadeOut(750, function(){
					// $("#cover-1").text("and");					
				});
			}, 500);
			window.setTimeout(function(){		
				$("#cover-2").fadeOut(750, function(){
					$("#andPursing").fadeIn(2500, function(){
						$("#andPursing").fadeOut(300,function(){
							$("#andPursing").text("of").fadeIn(300, function(){
								window.setTimeout(function(){
									discovery()
								}, 500)
							})
						})

					});
				});
				$("#cover-1").fadeIn(750);
			}, 1000);
			window.setTimeout(function(){		
				$("#cover-3").fadeOut(750, function(){
					// $("#cover-3").text("the");
				});
				$("#cover-2").fadeIn(750);				
			}, 1500);
			window.setTimeout(function(){		
				$("#cover-4").fadeOut(750, function(){

				});
				$("#cover-3").fadeIn(750);				
			}, 2000);
			window.setTimeout(function(){		
				$("#cover-5").fadeOut(750, function(){
					// $("#cover-5").text("of");
				});
				$("#cover-4").fadeIn(750);				
			}, 2500);
			window.setTimeout(function(){		
				$("#cover-5").fadeIn(750);				
			}, 3000);
		});
	}

	function discovery(){

	}

})

// $('#yourElement').addClass('animated bounceOutLeft');

// $('#yourElement').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', doSomething);

// #yourElement {
//   -vendor-animation-duration: 3s;
//   -vendor-animation-delay: 2s;
//   -vendor-animation-iteration-count: infinite;
// }
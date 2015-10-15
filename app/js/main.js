$(document).on("click", ".menu-dropdown", function(){
	if($(".navigation-options").css("display") == "none"){
		$(".navigation-options").slideDown()
	} else{
		$(".navigation-options").slideUp()
	}
})
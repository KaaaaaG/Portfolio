
//burger-menu
$(".nav-btn").click(function () {
    $(this).toggleClass('active');
    $(".header-nav").toggleClass('panelactive');
});

$(".header-nav a").click(function () {
    $(".nav-btn").removeClass('active');
    $(".header-nav").removeClass('panelactive');
});


//works
$(function(){
	let contentsCount = $(".grid-items").length;
	let n = 4;

	if(contentsCount <= n) {
		$(".more").hide();
	} else {
		$(".grid-items").slice(n).hide();

		$(".more").click(function(){
			if ($(".grid-items").slice(n).is(':hidden')) {
				$(".grid-items").slice(n).slideDown();
                $(".more").toggleClass('close-btn');

			} else {
				$(".grid-items").slice(n).slideUp();
                $(".more").removeClass('close-btn');

			}
		});
	}
});



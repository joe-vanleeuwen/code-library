$(document).ready(function() {
	function modal() {
			$('.modal-background').toggleClass('modal-background-active');
			$('.modal-box').toggleClass('modal-box-active');
	};

	$('.me').on("click", function() {
		console.log("clicked me");
		modal();
	});

});
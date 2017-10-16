var numTabs = 2;

$(function () {
	var windowHeight = $(window).height();
	var menuBarHeight = $("#menu").height();
	var containerHeight = windowHeight -  menuBarHeight;
	
	$(".container").height(containerHeight+"px");
	
	onClick("#html");
	onClick("#css");
	onClick("#js");
	onClick("#results");
	
	$("#runButton").click(function() {
		$("iframe").contents().find("html").html("<style>"+$("#cssCode").val()+"</style>"+$("#htmlCode").val());
		document.getElementById("resultFrame").contentWindow.eval($("#jsCode").val());
	});
});

function onClick(tab) {
	$(tab + "Tab").click(function() {
		if ($(tab + "Container").css("display") != "none"){
			$(tab + "Container").css("display", "none");
			numTabs--;
			/* Can also use toggle class */
			$(this).css("backgroundColor", "#000000");
			$(this).css("color", "#ffffff");
		} else {
			$(tab + "Container").css("display", "block");
			numTabs++;
			/* Can also use toggle class */
			$(this).css("backgroundColor", "#ffffff");
			$(this).css("color", "#000000");
		}
		$("#tabs").css("border", "1px solid grey");
		var newWidth = 100/numTabs;
		$(".container").width(newWidth+"%");
	});
}
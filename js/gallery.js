$(function() {
	$("#gallery-thumbs img").each(function() {
		$(this).click(function() {
			var imgsrc = $(this).attr("src").split("/");
			var pre = imgsrc[0] + "/" + imgsrc[1];
			var post = imgsrc[2];
			$("#mainpic").attr({"src" : pre + "/big/" + post});
		});
	});
});
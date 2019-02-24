// Get the modal
$(document).ready(function(){
	$("#wrapper").hide();
	$("#navbar").hide();
	$("#footer").hide();
	$(".loading").ready(function(){
		$(".loading").delay(2000).fadeOut("slow");
	});
	$("#navbar").ready(function(){
		$("#navbar").delay(2000).slideDown("slow");
	});
	$("#wrapper").ready(function(){
		$("#wrapper").delay(2300).fadeIn("slow");
	});
	$("#footer").ready(function(){
		$("#footer").delay(2300).fadeIn("slow");
	});
	
	var list = document.getElementsByClassName('clmimg');
	var imgs = [].slice.call(list);
	runtime = 0;
	imgs.forEach(image => {
		var modal = document.getElementById('myModal');
		// Get the image and insert it inside the modal - use its "alt" text as a caption
		var img = image;
		var modalImg = document.getElementById("m_img");
		var captionText = document.getElementById("caption");
		img.onclick = function () {
			modal.style.display = "block";
			$("#modal").toggleClass("visible");
			modalImg.src = this.src;
			captionText.innerHTML = this.alt;
		}
		console.log(runtime);
		runtime += 1;
	});
});
var close_modal = function () {
	$("#myModal").fadeOut("slow");
}
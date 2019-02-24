function byID(id) {
	return document.getElementById(id);
}

window.onscroll = function () {
	scrollFunction()
};

function scrollFunction() {
	if (window.pageYOffset >= byID("company-description").offsetHeight - 90) {
		byID("AP").className = "active";
		byID("AC").className = "";
		return true;
	} else {
		byID("AP").className = "";
		byID("AC").className = "active";
		return false;
	}
}

// Get the modal
var imgs = new Array(document.getElementsByClassName('clmimg'));
imgs.forEach(image => {
	var modal = document.getElementById('myModal');
	// Get the image and insert it inside the modal - use its "alt" text as a caption
	var img = image;
	var modalImg = document.getElementById("m_img");
	var captionText = document.getElementById("caption");
	img.onclick = function () {
		modal.style.display = "block";
		modalImg.src = this.src;
		captionText.innerHTML = this.alt;
	}
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
	modal.style.display = "none";
}
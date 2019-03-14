// Get the modal
var lang = "fr"

function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	var expires = "expires=" + d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function loadDoc() {
	// ready = true;
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("company-description").innerHTML = this.responseText;
			console.log(this.responseText);

		}
	};
	xhttp.open("GET", `/${lang}/i.html`, true);
	xhttp.send();

}

function getNav() {
	$("#navbar").load(`/${lang}/nav.html`).hide();
}


function myFunction() {
	$("#navbar").toggleClass("responsive")
	$("#logo").toggle()
}

$(document).ajaxStop(function () {
	var delay = 200
	$("#loading").delay(delay).fadeOut(500);
	$("body").toggleClass("no-of");
	$("#navbar").show();
	$("#wrapper").show();
	$(`#${id}`).toggleClass("active");
});

var setLang = function (lang) {
	setCookie("language", lang, 31);
	location.reload(true);
}

$(document).ready(function () {
	//COOKIE CODE
	$("#wrapper").hide();
	if (getCookie("language") != "") {
		lang = getCookie("language")
	} else {
		setCookie("language", "fr", 31);
	}
	getNav();

	//console.log(id);
	//loadDoc();
	//MODAL
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
	$("#myModal").fadeOut("fast");
}




var xhttp = new XMLHttpRequest();
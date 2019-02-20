function byID(id) {
	return document.getElementById(id);
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (window.pageYOffset >= byID("company-description").offsetHeight-90) {
	byID("AP").className = "active";
	byID("AC").className = "";
	return true;
  } else {
	byID("AP").className = "";
	byID("AC").className = "active";
    return false;
  }
}
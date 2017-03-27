// function isInViewport(element) {
// 	var rect = element.getBoundingClientRect();
// 	var html = document.documentElement;
// 	return (
// 		rect.top >= 0 &&
// 		rect.left >= 0 &&
// 		rect.bottom <= (window.innerHeight || html.clientHeight) &&
// 		rect.right <= (window.innerWidth || html.clientWidth)
// 	);
// }

function isInViewportVerticalPart(element) {
	var rect = element.getBoundingClientRect();
	var html = document.documentElement;
	return (
		rect.bottom >= 0 &&
		rect.top <= (window.innerHeight || html.clientHeight)
	);
}

// var newEle = ele.cloneNode(true);
// ele.parentNode.replaceChild(newEle, ele);

$(document).scroll(
	function() {
		var ele = document.getElementById("welcome");
		if (isInViewportVerticalPart(ele)) {
			ele.style.animationPlayState = "running";
		}
	}
);

$(document).scroll(
	function() {
		var ele = document.getElementById("h_high_quality");
		if (isInViewportVerticalPart(ele)) {
			// alert(ele.getBoundingClientRect().bottom)
			ele.style.animationPlayState = "running";
		}
	}
);
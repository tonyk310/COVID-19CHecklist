

function toggle() {
	
	var clickToDisplayArray = document.getElementsByClassName('click-to-toggle-display');
	// console.log(clickToDisplayArray);
	

	for (var i = 0; i < clickToDisplayArray.length; i++) {
		clickToDisplayArray[i].addEventListener('click', function(e) {
			// var event = e;
			// console.log(event);
			// var target = e.target;
			// console.log(target.nextElementSibling);


			var nextElementSibling = e.target.nextElementSibling;
			// nextElementSibling.style.display = 'block';
			nextElementSibling.classList.toggle('toggle');
		});
	}
}

toggle();
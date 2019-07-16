window.onscroll  = function showheader() {

	var header = document.querySelector('.header');

	if(window.pageYOffset > 10){
		header.classList.add('header--fixed')
	}
}


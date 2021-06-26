'use strict';

const allSections = document.querySelectorAll('section');
const allNavlinks = document.querySelectorAll('.navbar__link');
const allProgressPercent = document.querySelectorAll('.progress__percent');
const progressSkills = [90, 75, 85, 88, 45, 55, 56];
const progressBox = document.querySelector('.progress');

const navbar = document.querySelector('.navbar');
const navbarOffsetTop = navbar.offsetTop;
window.addEventListener('scroll', () => {
	scrollFnc();
});

const scrollFnc = () => {
	// Make navbar sticky
	if (window.pageYOffset >= navbarOffsetTop) {
		navbar.classList.add('sticky');
	} else {
		navbar.classList.remove('sticky');
	}

	// Current navbar highlight
	allSections.forEach((section, i) => {
		if (window.pageYOffset >= section.offsetTop - 10) {
			allNavlinks.forEach(link => link.classList.remove('change'));
			return allNavlinks[i].classList.add('change');
		}
	});

	// Progress bar management
	if (window.pageYOffset + window.innerHeight >= progressBox.offsetTop) {
		allProgressPercent.forEach((progress, idx) => {
			progress.style.width = `${progressSkills[idx]}%`;
			progress.previousElementSibling.firstElementChild.textContent =
				progressSkills[idx];
		});
	}
};

scrollFnc();

window.addEventListener('resize', () => {
	window.location.reload();
});

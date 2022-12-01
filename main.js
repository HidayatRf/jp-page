window.addEventListener('load', () => {
	navlist.style.top = navbar.clientHeight + "px"

})

const navbar = document.querySelector('.navbar')
const navlist = navbar.querySelector('.navlist')
const opnNav = navbar.querySelector('.open-nav')
const clNav = navbar.querySelector('.close-nav')

let opened

opnNav.addEventListener('click', () => {
	navlist.style.right = 0
	navbar.style.backgroundColor = "rgba(4, 92, 144, 1)"
	opnNav.style.opacity = 0
	opened = true
})

clNav.addEventListener('click', () => {
	navlist.style.right = -1000 + "px"
	navbar.style.backgroundColor = "transparent"
	opnNav.style.opacity = 1
	opened = false
})

window.addEventListener("scroll", () => {

	navbar.style.backgroundColor = "rgba(4, 92, 144, 1)"

	if (window.innerWidth > 850) {
		navlist.style.backgroundColor = "transparent"
	}

	navbar.style.boxShadow = "0 0 20px rgba(40, 150, 220, .6)";
	if (window.innerWidth <= 600) {
		if (Math.floor(window.scrollY) < 2 && !opened) {
			navbar.style.boxShadow = "0 0 20px rgba(40, 80, 180, 0)";
			navbar.style.backgroundColor = "rgba(4, 92, 144, 0)"
		}

		if (opened || Math.floor(window.scrollY) < 2 || Math.floor(window.scrollY) > 0) {
			navlist.style.backgroundColor = "rgba(18, 120, 176, .7)"
			navbar.style.backgroundColor = "rgba(4, 92, 144, 1)"
			navbar.style.boxShadow = "0 0 20px rgba(40, 80, 180, 0)";
		}
	}

	if (!opened && Math.floor(window.scrollY) < 3) {
		navlist.style.backgroundColor = "rgba(0, 0, 0, 0)"
		navbar.style.backgroundColor = "rgba(4, 92, 144, 0)"
		navbar.style.boxShadow = "0 0 20px rgba(40, 80, 180, 0)";
	}

})
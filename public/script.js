const menuBotton = document.getElementById("mobile-menu");

menuBotton.addEventListener("click", (e) => {
	const menu = document.querySelector(".mobile-links");

	menu.classList.toggle("hidden");
});

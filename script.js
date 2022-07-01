"use strict";

const allSections = document.querySelectorAll(".section");
const revealSections = function (entries, observer) {
	const [entry] = entries;
	// console.log(entry);
	if (!entry.isIntersecting) return;
	entry.target.classList.remove("section--hidden");
	observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSections, {
	root: null,
	threshold: 0.15,
});
allSections.forEach((section) => {
	section.classList.add("section--hidden");
	sectionObserver.observe(section);
});

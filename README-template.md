Huddle landing page with alternating feature blocks solution 

[I wanted to test my skills on javaScript, so I got this landing page from frontend mentor.]

This is a solution to the [Huddle landing page with alternating feature blocks challenge on Frontend Mentor (with additional features of mine😉😗) ](https://www.frontendmentor.io/challenges/huddle-landing-page-with-alternating-feature-blocks-5ca5f5981e82137ec91a5100). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- See smooth section reveal as they scroll

### Screenshot

screenshot.png


### Links

- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Vanilla javaScript



### What I learned

I learnt how to use the IntersectionObserver to reveal the sections smoothly as the user scrolls.
[check out my js file]


To see how you can add code snippets, see below:

```html
 <section class="section">
          <div>
            <p>Some HTML code I'm proud of</p>
          </div>
        </section>

        <section class="section">
          <div>
            <p>This is an example</p>
          </div>
        </section>
        <section class="section">
          <div>
            <p>Let us see how the intersection observer works😗😉</p>
          </div>
        </section>
```
```css
.section {
	transition: transform 1s, opacity 1s;
}

.section--hidden {
	opacity: 0;
	transform: translateY(8rem) translateX(-100px);
}
```
```js
const allSections = document.querySelectorAll(".section");
const callBack= function (entries, observer) {
	const [entry] = entries;
	// console.log(entry);
	if (!entry.isIntersecting) return;
	entry.target.classList.remove("section--hidden");
	observer.unobserve(entry.target);
};

const callBackOpt = {
	root: null,
	threshold: 0.15,}

const sectionObserver = new IntersectionObserver(callBack , callBackOpt);
allSections.forEach((section) => {
	section.classList.add("section--hidden");
	sectionObserver.observe(section);
});

````
## Author

- Github - [Nono](https://github.com/4002-Nonye)
- Twitter - [@the_altekid](https://twitter.com/the_altekid)



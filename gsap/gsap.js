gsap.registerPlugin(TextPlugin);

gsap.to(".title", {
    duration: 2,
    text: "Lyes MEDJAHED",
    scrub: 0.05
});

gsap.to(".MyPresentation", {
    duration: 6,
    scrub: true,
    text: {
        value: "Passionate about front-end development and UI/UX design, I create modern, user-friendly interfaces with JavaScript, HTML, and CSS. Currently mastering GSAP for smooth animations, I blend creativity and functionality to craft engaging web experiences. I also share my journey on YouTube, making tech and design accessible. Let’s build something great together!",
        dilimiter: ""
    }
});

gsap.from(".Mypicture", {
    y: 250,
    duration: 3.5,
    delay: 1,
    ease: "bounce.out"
});
gsap.registerPlugin(ScrollTrigger);
jQuery(function ($) {
  // animation
  const vWidth = window.innerWidth,
    vHeight = window.innerHeight;

  let tl = gsap
    .timeline({
      scrollTrigger: {
        trigger: "#heading",
        start: "bottom",
        end: `bottom+=${vHeight - 10}`,
        toggleActions: "play pause resume reverse",
        // onEnter onLeave onEnterBack onLeaveBack
        // markers: true,
        // scrub: true,
        // pin: true,
      },
    })
    .to(".paper-plane", {
      ease: "linear",
      scale: 0.1,
      x: vWidth / 1.9,
      y: -vHeight / 1.9,
      duration: 0.5,
    })
    .to(".project", {
      opacity: 1,
      duration: 0.4,
    })
    .to(".work", {
      opacity: 1,
      y: 0,
      duration: 0.4,
      delay: -0.4,
    });

  console.log("App started succesfully");
});

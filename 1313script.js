gsap.defaults({
  ease: "power2.out",
  duration: 1.2,
  delay: 0.25,
  stagger: 0.15,
  autoAlpha: 0,
});

const slideDown = gsap.utils.toArray('[data-gsap="slide-down"]');
slideDown.forEach((slideItem) => {
  gsap.from(slideItem, {
    y: "-3rem",
    scrollTrigger: {
      trigger: slideItem,
    },
  });
});

const slideUp = gsap.utils.toArray('[data-gsap="slide-up"]');
slideUp.forEach((slideItem) => {
  gsap.from(slideItem, {
    y: "3rem",
    scrollTrigger: {
      trigger: slideItem,
    },
  });
});

const slideLeft = gsap.utils.toArray('[data-gsap="slide-left"]');
slideLeft.forEach((slideItem) => {
  gsap.from(slideItem, {
    x: "4rem",
    scrollTrigger: {
      trigger: slideItem,
    },
  });
});

const slideRight = gsap.utils.toArray('[data-gsap="slide-right"]');
slideRight.forEach((slideItem) => {
  gsap.from(slideItem, {
    x: "-4rem",
    scrollTrigger: {
      trigger: slideItem,
    },
  });
});

const fadeIn = gsap.utils.toArray('[data-gsap="fade-in"]');
fadeIn.forEach((fadeItem) => {
  gsap.from(fadeItem, {
    duration: 1.5,
    delay: 0.33,
    scrollTrigger: {
      trigger: fadeItem,
    },
  });
});

gsap.from(".class", {
  x: "-4rem",
  duration: 1.5,
  delay: 0.25,
  stagger: 0.15,
  ease: "power2.out",
  scrollTrigger: '.class',
});

ScrollTrigger.batch(".area_item, .blog_item", {
  // interval: 0.1, // time window (in seconds) for batching to occur. 
  batchMax: 3, // maximum batch size (targets)
  onEnter: batch => gsap.from(batch, {
    autoAlpha: 0,
    stagger: 0.1,
    duration: 0.75,
  }),
});

ScrollTrigger.batch(".room_gallery_item", {
  // interval: 0.1, // time window (in seconds) for batching to occur. 
  batchMax: 1, // maximum batch size (targets)
  onEnter: batch => gsap.from(batch, {
    autoAlpha: 0,
    stagger: 0.15,
    duration: 1,
    delay: 0.25,
  }),
});
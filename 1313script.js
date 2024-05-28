let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".horse_sketch_wrap",
      start: "top center",
    },
    defaults: { ease: "power3.out" }
  });
  
  tl.from(".horse_sketch_wrap", {
    rotation: "-30deg",
    duration: 0.75,
    stagger: 0.1,
  });
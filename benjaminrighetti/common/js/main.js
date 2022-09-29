$(function() {
  gsap.registerPlugin(ScrollTrigger);

  $(".menu_btn").on("click", function() {
    $(".menu").show();
  });
  $(".close_btn").on("click", function() {
    $(".menu").hide();
  });

  // sec1 - scroll font move
  gsap.to(".sec1 .txt1 .t", {
    top: "-40vh",
    stagger: {
      each: -0.05,
    },
    scrollTrigger: {
      trigger: ".sec1",
      toggleActions: "restart none reverse none",
      markers: true,
      start: "top top",
      end: "bottom top",
      endTrigger: ".sec1 h1",
      // pin: true,
      scrub: 2,
    },
  })
  gsap.to(".txt2 .t", {
    top: "-40vh",
    stagger: {
      each: -0.05,
    },
    scrollTrigger: {
      trigger: ".sec1",
      toggleActions: "restart none reverse none",
      // markers: true,
      start: "top top",
      end: "bottom top",
      endTrigger: ".sec1 h1",
      // pin: true,
      scrub: 2,
    },
  })

  gsap.to(".img_box", {
    scale: 1,
    scrollTrigger: {
      trigger: ".sec1",
      toggleActions: "restart none reverse none",
      // markers: true,
      start: "top top",
      pin: ".sec1",
      // pinSpacing: true,
      scrub: 2,
    },
  })

  // gsap.to(".img_box", {
  //   scrollTrigger: {
  //     trigger: ".img_box",
  //     toggleActions: "restart none reverse none",
  //     // markers: true,
  //     pinSpacing: true,
  //     scrub: 2,
  //   },
  // })

    gsap.to(".sec1", {
    scrollTrigger: {
      trigger: ".img_box",
      toggleActions: "restart none reverse none",
      start: "top top",
      end: "bottom bottom",
      endTrigger: ".sec1 .img_box",
      // markers: true,
      // pinSpacing: true,
      scrub: 2,
    },
    y: "-100%"
  })
  
  gsap.to(".sec2 .txt_box .txt", {
    scrollTrigger: {
      trigger: ".sec2",
      toggleActions: "restart none reverse none",
      // markers: true,
      start: "top top",
      pin: true,
      // pinSpacing: false,
      scrub: 2,
    },
    opacity: 0,
  })

  // gsap.utils.toArray(".sec3").forEach((item) => {
    $(".sec3").each(function(idx, item) {
      console.log(item);
      var i = $(item).attr('class');
      var e = i.split(" ", 3);
      var a = "." + e[1] + " .first_opacity";
      var b = "." + e[1] + " .last_opacity";

      gsap.to(a, {
        scrollTrigger: {
          trigger: item,
          toggleActions: "restart none reverse none",
          // markers: true,
          start: "top top",
          end: "bottom bottom",
          scrub: 2,
        },
        opacity: 0,
      })
      gsap.to(b, {
        scrollTrigger: {
          trigger: item,
          toggleActions: "restart none reverse none",
          // markers: true,
          start: "top center",
          end: "bottom bottom",
          scrub: 2,
          pin: ".sec3 .p",
        },
        opacity: 0,
      })
    
    });

  // gsap.to(".sec3 .first_opacity", {
  //   scrollTrigger: {
  //     trigger: ".sec3",
  //     toggleActions: "restart none reverse none",
  //     markers: true,
  //     start: "top top",
  //     end: "bottom bottom",
  //     scrub: 2,
  //   },
  //   opacity: 0,
  // })
  // gsap.to(".sec3 .last_opacity", {
  //   scrollTrigger: {
  //     trigger: ".sec3",
  //     toggleActions: "restart none reverse none",
  //     markers: true,
  //     start: "top center",
  //     end: "bottom bottom",
  //     scrub: 2,
  //     pin: ".sec3 .p",
  //   },
  //   opacity: 0,
  // })

  gsap.to(".sec4 .img_box", {
    scrollTrigger: {
      trigger: ".sec4",
      toggleActions: "restart none reverse none",
      // markers: true,
      start: "top top",
      scrub: 2,
      pin: true,
    },
    x: "-100%",
  })


});
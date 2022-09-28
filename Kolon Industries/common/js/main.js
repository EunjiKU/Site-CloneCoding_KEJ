$(function() {
  var _mainEsgSwiper;
  var _wInnerWidth = 0;
  var _wInnerHeight = 0;
  var _visualMaxHeight = 0;
  var _visualInitTop = 0;
  var _startPosition;

  gsap.registerPlugin(ScrollTrigger);




   // esg title fix
  gsap.to(".esg_section .before_flow_area", {
    scrollTrigger: {
      trigger: ".esg_section .main_section_tit_area",
      start:"center center",
      endTrigger: $(".esg_section .flow_list_w"),
      end:"bottom center",
      pin:true,
      pinSpacing: false,
      markers: true,
      //id: "title_fix",
    },
  });

  // esg title color change
  gsap.to(".esg_section .main_section_tit_area", {
    scrollTrigger: {
      trigger: ".esg_section",
      start:"top+=" + window.innerHeight*0.5 + " top",
      end:"top+=400px bottom",
      scrub: 1,
      //markers: true,
    },
    color: "#fff"
  });

  // esg title hide
  gsap.to(".esg_section .main_section_tit_area", {
    scrollTrigger: {
      trigger: ".esg_section .flow_list_w",
      start:"top-=260px center",
      end:"top+=" + window.innerHeight*0.5 + " center",
      scrub: 1,
      //markers: true,
      onUpdate: function(self){
        $(".esg_section .main_section_tit_area").css("opacity", 1 - self.progress.toFixed(3));
      }
    },
  });

  // esg bg size bigger ------------------------------------------------
  _startPosition = window.innerHeight + 500 + "px";

  gsap.to(".esg_section", {
    scrollTrigger: {
      trigger: ".esg_section",
      start:"top+="+ _startPosition + " 90%",
      end:"top+=200% bottom",
      pinSpacing: false,
      //markers: true,
      id: "esg_bg_trigger",
      //scrub: 1,
      onEnter: function(){
        $(".esg_section .for_size_change").addClass("on");
      },
      onLeave: function(){
      },
      onLeaveBack: function(){
        $(".esg_section .for_size_change").removeClass("on");
      },
      onEnterBack: function(){
      },
    },
    //width: "100%",
    //height: "100%",
  });

  // esg bg fix
  gsap.to(".esg_section .bigger_bg", {
    scrollTrigger: {
      trigger: ".esg_section .bigger_bg",
      start:"top bottom",
      endTrigger: $(".test"),
      end:"bottom bottom",
      pin:true,
      pinSpacing: false,
      markers: true,
      //id: "bg_fix"
    },
  });


  // esg list img scroll (오른쪽 열)
  $(".esg_section .flow_list_w .flow_list:nth-child(2n-1) .for_parallax").each(function (q) {
    gsap.to($(this), 1, {
      scrollTrigger: {
        trigger: $(this).parents(".flow_list"),
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        markers: true,
      },
      top: -150,
    });
  });

  // esg list img scroll (오른쪽 열)
  $(".esg_section .flow_list_w .flow_list:nth-child(2n) .for_parallax").each(function (q) {
    gsap.to($(this), 1, {
      scrollTrigger: {
        trigger: $(this).parents(".flow_list"),
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        //markers: true,
      },
      top: 150,
    });
  });
});
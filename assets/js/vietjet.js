// Jquery noconflict
jQuery.noConflict();

(function ($) {

    // nice scroll
    var nice =
        $(".section-wrapper").niceScroll({
            cursorcolor: '#00c4ff',
            cursorwidth: '5',
            cursorminheight: '40',
            scrollspeed: '100',
            mousescrollstep: 30,
            autohidemode: 'false',
            overflowy: 'false',
            // emulatetouch: 'true',
            cursorborder: '1px solid #00c4ff'
        });

    var _super = nice.getContentSize;

    nice.getContentSize = function () {
        var page = _super.call(nice);
        page.h = nice.win.height();
        return page;
    }

    $(".back-to-top").click(function () {
        nice.scrollLeft(0);
    });

    // ---------------- Animation -------------------
    var controller = new ScrollMagic.Controller({ vertical: false });

    // SS1 Title
    var tl1 = new TimelineMax({ delay: 0.5 });
    $(document).ready(function () {
        tl1.staggerFrom($("#ss1 .s1-title span"), 0.75, { opacity: 0, autoAlpha: 0, skewX: 30, x: "-=50px" }, 0.25)
            .from($("#ss1 .sapo"), 0.75, { opacity: 0, autoAlpha: 0, x: "-=50px" }, "-=0.3");
    });

    // SS2
    var tl2 = new TimelineMax();
    tl2.from($("#ss2 .s2-content-title"), 0.75, { opacity: 0, autoAlpha: 0, y: "+=40px" })
        .from($("#ss2 .s2-content-text"), 0.75, { opacity: 0, x: "-=80px" }, "-=0.25");
    new ScrollMagic.Scene({
        triggerElement: ".section2",
        offset: 200,
    })
        .setTween(tl2)
        .addTo(controller);

    // SS3
    var tl3 = new TimelineMax();
    tl3.staggerFrom($("#ss3 .gr3-title p"), 0.75, { opacity: 0, autoAlpha: 0, skewX: 30, x: "-=50px" }, 0.25)
        .from($("#ss3 .gr3-text"), 0.75, { opacity: 0, y: "+=60px" })
        .from($("#ss3 .line"), 0.75, { scale: 0, transformOrigin: "left" })
        .from($("#ss3 .gr3-title p .index"), 0.75, { opacity: 0 });
    new ScrollMagic.Scene({
        triggerElement: ".section3",
        offset: 200,
    })
        .setTween(tl3)
        .addTo(controller);

    // SS4
    var tl4_1 = new TimelineMax();
    tl4_1.from($("#ss4 .map-img"), 0.5, { opacity: 0 })
        .from($("#ss4 .map-des"), 0.75, { opacity: 0, x: "-=60px" });
    new ScrollMagic.Scene({
        triggerElement: ".s4-gr-map",
        offset: -200,
    })
        .setTween(tl4_1)
        .addTo(controller);

    var tl4_2 = new TimelineMax();
    tl4_2.from($("#ss4 .s4-gr-list"), 0.75, { opacity: 0 })
        .staggerFrom($("#ss4 .s4-gr-list .cta-item .cta-img"), 0.75, { opacity: 0, x: "-=50px" }, 0.25, "-=0.5")
        .from($("#ss4 .s4-gr-list .cta-item .cta-text"), 0.75, { opacity: 0, autoAlpha: 0, y: "-=40px" })
        .staggerFrom($("#ss4 .s4-gr-bimg .bimg-item"), 0.75, { opacity: 0, x: "-=50px" }, 0.35, "-=2");


    new ScrollMagic.Scene({
        triggerElement: ".s4-gr-list",
        offset: -200,
    })
        .setTween(tl4_2)
        .addTo(controller);

    // SS5
    var tl5 = new TimelineMax();
    tl5.from($("#ss5 .s5-gr-overlay .deco1"), 0.75, { opacity: 0 })
        .from($("#ss5 .s5-gr-overlay .deco2"), 0.75, { opacity: 0 }, "-=0.75")
        .from($("#ss5 .s5-gr-overlay .tag1"), 0.75, { opacity: 0, x: "-=50px" })
        .from($("#ss5 .s5-gr-overlay .tag2"), 0.75, { opacity: 0, x: "-=50px" }, "-=0.75")
        .staggerFrom($("#ss5 .s5-gr-bot .s5-gr-bot-item"), 0.75, { opacity: 0, x: "-=50px" }, 0.25);

    new ScrollMagic.Scene({
        triggerElement: ".section5",
        offset: -200,
    })
        .setTween(tl5)
        .addTo(controller);

    // SS6
    var tl6_1 = new TimelineMax();
    tl6_1.from($("#ss6 .s6-gr-left-top"), 0.75, { opacity: 0 })
        .from($("#ss6 .s6-gr-left-bot"), 0.75, { opacity: 0, x: "-=60px" })
    new ScrollMagic.Scene({
        triggerElement: ".s6-gr-left",
        offset: -200,
    })
        .setTween(tl6_1)
        .addTo(controller);

    var tl6_2 = new TimelineMax();
    tl6_2.from($("#ss6 .s6-gr-right-img"), 0.75, { opacity: 0, x: "-=60px" });
    new ScrollMagic.Scene({
        triggerElement: ".s6-gr-right",
        offset: -200,
    })
        .setTween(tl6_2)
        .addTo(controller);

    // SS7
    new ScrollMagic.Scene({
        triggerElement: ".s7-gr-left",
        offset: -200,
    })
        .setTween(TweenMax.from($("#ss7 .s7-gr-left-video"), 0.75, { opacity: 0 }))
        .addTo(controller);

    var tl7_1 = new TimelineMax();
    tl7_1.staggerFrom($("#ss7 .s7-text-title p"), 0.75, { opacity: 0, autoAlpha: 0, skewX: 30, x: "-=50px" }, 0.25)
        .from($("#ss7 .des"), 0.75, { opacity: 0, y: "+=60px" })
        .from($("#ss7 .line"), 0.75, { scale: 0, transformOrigin: "left" })
        .from($("#ss9 .s7-text-title p span"), 0.75, { opacity: 0 });
    new ScrollMagic.Scene({
        triggerElement: ".s7-gr-right",
        offset: -200,
    })
        .setTween(tl7_1)
        .addTo(controller);

    // SS8
    new ScrollMagic.Scene({
        triggerElement: ".section8",
        offset: 200,
    })
        .setTween(TweenMax.from($("#ss8 .s8-gr-overlay"), 0.75, { scale: 0, opacity: 0 }))
        .addTo(controller);

    // SS9
    var tl9 = new TimelineMax();
    tl9.from($("#ss9 .s9-gr-bg"), 0.75, { opacity: 0, x: "+=60px" })
        .from($("#ss9 .s9-gr-overlay1"), 0.75, { opacity: 0, scale: 1.5 }, "-=0.5")
        .from($("#ss9 .s9-gr-overlay2"), 0.75, { opacity: 0, x: "+=60px" });
    new ScrollMagic.Scene({
        triggerElement: ".section9",
        offset: -200,
    })
        .setTween(tl9)
        .addTo(controller);

    // SS10
    var tl10 = new TimelineMax();
    tl10.staggerFrom($("#ss10 .flex-group-item .s10-gr-img"), 0.75, { opacity: 0, scale: 0 }, 0.25)
        .from($("#ss10 .flex-group-item .s10-gr-text"), 0.75, { opacity: 0, y: "+=60pxx" }, "-=0.25");

    new ScrollMagic.Scene({
        triggerElement: ".section10",
        offset: -200,
    })
        .setTween(tl10)
        .addTo(controller);

    // SS11
    var tl11 = new TimelineMax();
    tl11.from($("#ss11 .s11-gr1"), 0.75, { opacity: 0, x: "+=60px" })
        .from($("#ss11 .s11-gr2"), 0.75, { opacity: 0, autoAlpha: 0, x: "-=60px", delay: 0.25 })
        .from($("#ss11 .s11-gr3"), 0.75, { opacity: 0, scale: 0 }, "-=0.5");

    new ScrollMagic.Scene({
        triggerElement: ".section11",
        offset: -50,
    })
        .setTween(tl11)
        .addTo(controller);

    // SS13
    new ScrollMagic.Scene({
        triggerElement: ".s13-gr-bg1",
        offset: -200,
    })
        .setTween(TweenMax.from($("#ss13 .s13-gr-bg1 .s13-gr-bg1-img"), 0.75, { opacity: 0, scale: 0 }))
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: ".s13-gr-bg2",
        offset: -200,
    })
        .setTween(TweenMax.from($("#ss13 .s13-gr-bg2 .s13-gr-bg1-img"), 0.75, { opacity: 0, scale: 0 }))
        .addTo(controller);

    // SS14
    var tl14 = new TimelineMax();
    tl14.staggerFrom($("#ss14 .s14-title p"), 0.75, { opacity: 0, autoAlpha: 0, skewX: 30, x: "-=50px" }, 0.25)
        .from($("#ss14 .s14-col-text"), 0.75, { opacity: 0, y: "+=50px" })
        .from($("#ss14 .s14-gr-stamp"), 0.75, { opacity: 0, scale: 1.5 }, "-=1.2");
    new ScrollMagic.Scene({
        triggerElement: ".s14-gr-content",
        offset: -200,
    })
        .setTween(tl14)
        .addTo(controller);

    // SS15
    new ScrollMagic.Scene({
        triggerElement: ".s15-gr-right",
        offset: -200,
    })
        .setTween(TweenMax.staggerFrom($("#ss15 td"), 0.75, { opacity: 0, x: "-=60px" }, 0.25))
        .addTo(controller);

    // SS16
    var tl16 = new TimelineMax();
    tl16.staggerFrom($("#ss16 .s16-overlay-title p"), 0.75, { opacity: 0, autoAlpha: 0, skewX: 30, x: "-=50px" }, 0.25)
        .from($("#ss16 .s16-overlay-content .s16-overlay-content-text"), 0.75, { opacity: 0, y: "-=60px" }, "-=0.5")
        .from($("#ss16 .s16-overlay-content .s16-overlay-content-img"), 0.75, { opacity: 0, y: "-=60px" })
        .from($("#ss16 .s16-overlay-content .line img"), 0.75, { opacity: 0, scale: 0 }, "-=0.5")
        .from($("#ss16 .s16-overlay-content .line p"), 0.75, { opacity: 0, autoAlpha: 0 }, "-=0.5");

    new ScrollMagic.Scene({
        triggerElement: ".s16-gr-right-overlay",
        offset: -200,
    })
        .setTween(tl16)
        .addTo(controller);

    // SS17
    var revealElements = document.getElementsByClassName("s17-gr-item");
    for (var i = 0; i < revealElements.length; i++) { // create a scene for each element
        new ScrollMagic.Scene({
            triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
            offset: -300,
        })
            .setClassToggle(revealElements[i], "visible") // add class toggle
            // .addIndicators()
            .addTo(controller);
    }

    // SS18
    var tl18 = new TimelineMax();
    tl18.from($("#ss18 .s18-content-text .s18-text-title"), 0.75, { opacity: 0 })
        .from($("#ss18 .line img"), 0.75, { scale: 0, transformOrigin: "left" }, "-=0.5")
        .staggerFrom($("#ss18 .s18-text-list ul li"), 0.75, { opacity: 0, y: "-=60px" }, 0.25);

    new ScrollMagic.Scene({
        triggerElement: ".s18-gr-right-item2",
        offset: -200,
    })
        .setTween(tl18)
        .addTo(controller);

    // SS19
    new ScrollMagic.Scene({
        triggerElement: ".s19-gr-bg-title",
        offset: -200,
    })
        .setTween(TweenMax.staggerFrom($("#ss19 .s19-gr-bg-title p"), 0.75, { opacity: 0, autoAlpha: 0, skewX: 30, x: "-=50px" }, 0.25))
        .addTo(controller);

    var tl19 = new TimelineMax();
    tl19.from($("#ss19 .s19-gr-content-inner .s19-content-text"), 0.75, { opacity: 0, y: "-=60px" })
        .from($("#ss19 .s19-gr-content-inner .s19-content-img"), 0.75, { opacity: 0, y: "-=60px" }, "-=0.25")
        .from($("#ss19 .s19-gr-content-inner .line img"), 0.75, { opacity: 0, scale: 0, transformOrigin: "left" }, "-=0.5")
        .from($("#ss19 .s19-gr-content-inner .line p"), 0.75, { opacity: 0 }, "-=0.25");

    new ScrollMagic.Scene({
        triggerElement: ".s19-gr-content",
        offset: -200,
    })
        .setTween(tl19)
        .addTo(controller);

    // SS20
    var tl20_1 = new TimelineMax();
    tl20_1.from($("#ss20 .s20-item1 .s20-gr-item-img"), 0.75, { opacity: 0, x: "-=60px" })
        .staggerFrom($("#ss20 .s20-item1 .s20-gr-item-content ul li"), 0.75, { opacity: 0, y: "-=50px" }, 0.25);

    new ScrollMagic.Scene({
        triggerElement: ".s20-item1",
        offset: -200,
    })
        .setTween(tl20_1)
        .addTo(controller);

    var tl20_2 = new TimelineMax();
    tl20_2.from($("#ss20 .s20-item2 .s20-gr-item-img"), 0.75, { opacity: 0, x: "-=60px" })
        .staggerFrom($("#ss20 .s20-item2 .s20-gr-item-content ul li"), 0.75, { opacity: 0, y: "-=50px" }, 0.25);

    new ScrollMagic.Scene({
        triggerElement: ".s20-item2",
        offset: -200,
    })
        .setTween(tl20_2)
        .addTo(controller);

    var tl20_3 = new TimelineMax();
    tl20_3.staggerFrom($("#ss20 .s20-item3 .s20-gr-item-img img"), 0.75, { opacity: 0, y: "-=50px" }, 0.25);

    new ScrollMagic.Scene({
        triggerElement: ".s20-item3",
        offset: -200,
    })
        .setTween(tl20_3)
        .addTo(controller);


    new ScrollMagic.Scene({
        triggerElement: ".s20-item4",
        offset: -200,
    })
        .setTween(TweenMax.from($("#ss20 .s20-item4 .s20-gr-content .s20-gr-content-img"), 0.75, { opacity: 0, scale: 0 }))
        .addTo(controller);

})(jQuery);
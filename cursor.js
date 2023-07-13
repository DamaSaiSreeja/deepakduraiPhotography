(function($) {
    "use strict";
    if ($("body").not(".is-mobile").hasClass("tt-magic-cursor")) {
        if ($(window).width() > 1024) {
            $(".magnetic-item").wrap('<div class="magnetic-wrap"></div>');
            if ($("a.magnetic-item").length) {
                $("a.magnetic-item").addClass("not-hide-cursor");
            }
            var $mouse = {
                x: 0,
                y: 0
            };
            var $pos = {
                x: 0,
                y: 0
            };
            var $ratio = 0.15;
            var $active = false;
            var $ball = $("#ball");
            var $ballWidth = 36;
            var $ballHeight = 36;
            var $ballOpacity = 0.5;
            var $ballBorderWidth = 2;
            gsap.set($ball, {
                xPercent: -50,
                yPercent: -50,
                width: $ballWidth,
                height: $ballHeight,
                borderWidth: $ballBorderWidth,
                opacity: $ballOpacity
            });
            document.addEventListener("mousemove", mouseMove);

            function mouseMove(e) {
                $mouse.x = e.clientX;
                $mouse.y = e.clientY;
            }
            gsap.ticker.add(updatePosition);

            function updatePosition() {
                if (!$active) {
                    $pos.x += ($mouse.x - $pos.x) * $ratio;
                    $pos.y += ($mouse.y - $pos.y) * $ratio;
                    gsap.set($ball, {
                        x: $pos.x,
                        y: $pos.y
                    });
                }
            }
            $(".magnetic-wrap").mousemove(function(e) {
                parallaxCursor(e, this, 2);
                callParallax(e, this);
            });

            function callParallax(e, parent) {
                parallaxIt(e, parent, parent.querySelector(".magnetic-item"), 25);
            }

            function parallaxIt(e, parent, target, movement) {
                var boundingRect = parent.getBoundingClientRect();
                var relX = e.clientX - boundingRect.left;
                var relY = e.clientY - boundingRect.top;
                gsap.to(target, {
                    duration: 0.3,
                    x: ((relX - boundingRect.width / 2) / boundingRect.width) * movement,
                    y: ((relY - boundingRect.height / 2) / boundingRect.height) * movement,
                    ease: Power2.easeOut
                });
            }

            function parallaxCursor(e, parent, movement) {
                var rect = parent.getBoundingClientRect();
                var relX = e.clientX - rect.left;
                var relY = e.clientY - rect.top;
                $pos.x = rect.left + rect.width / 2 + (relX - rect.width / 2) / movement;
                $pos.y = rect.top + rect.height / 2 + (relY - rect.height / 2) / movement;
                gsap.to($ball, {
                    duration: 0.3,
                    x: $pos.x,
                    y: $pos.y
                });
            }
            $(".magnetic-wrap").on("mouseenter mouseover", function(e) {
                $ball.addClass("magnetic-active");
                gsap.to($ball, {
                    duration: 0.3,
                    width: 70,
                    height: 70,
                    opacity: 1
                });
                $active = true;
            }).on("mouseleave", function(e) {
                $ball.removeClass("magnetic-active");
                gsap.to($ball, {
                    duration: 0.3,
                    width: $ballWidth,
                    height: $ballHeight,
                    opacity: $ballOpacity
                });
                gsap.to(this.querySelector(".magnetic-item"), {
                    duration: 0.3,
                    x: 0,
                    y: 0,
                    clearProps: "all"
                });
                $active = false;
            });
            $(".cursor-alter, .tt-main-menu-list > li > a, .tt-main-menu-list > li > .tt-submenu-trigger > a").not(".magnetic-item").on("mouseenter", function() {
                gsap.to($ball, {
                    duration: 0.3,
                    borderWidth: 0,
                    opacity: 0.2,
                    backgroundColor: "#CCC",
                    width: "100px",
                    height: "100px",
                });
            }).on("mouseleave", function() {
                gsap.to($ball, {
                    duration: 0.3,
                    borderWidth: $ballBorderWidth,
                    opacity: $ballOpacity,
                    backgroundColor: "transparent",
                    width: $ballWidth,
                    height: $ballHeight,
                    clearProps: "backgroundColor"
                });
            });
            $(".tt-ol-submenu-caret-wrap .magnetic-wrap").on("mouseenter", function() {
                gsap.to($ball, {
                    duration: 0.3,
                    scale: 0.6,
                    borderWidth: 3
                });
            }).on("mouseleave", function() {
                gsap.to($ball, {
                    duration: 0.3,
                    scale: 1,
                    borderWidth: $ballBorderWidth
                });
            });
            $("[data-cursor]").each(function() {
                $(this).on("mouseenter", function() {
                    $ball.addClass("ball-view").append('<div class="ball-view-inner"></div>');
                    $(".ball-view-inner").append($(this).attr("data-cursor"));
                    gsap.to($ball, {
                        duration: 0.3,
                        yPercent: -75,
                        width: 175,
                        height: 75,
                        opacity: 1,
                        borderWidth: 0
                    });
                    gsap.to(".ball-view-inner", {
                        duration: 0.3,
                        scale: 1,
                        autoAlpha: 1
                    });
                }).on("mouseleave", function() {
                    gsap.to($ball, {
                        duration: 0.3,
                        yPercent: -50,
                        width: $ballWidth,
                        height: $ballHeight,
                        opacity: $ballOpacity,
                        borderWidth: $ballBorderWidth
                    });
                    $ball.removeClass("ball-view").find(".ball-view-inner").remove();
                });
                $(this).addClass("not-hide-cursor");
            });
            $(".swiper").each(function() {
                if ($(this).parent().attr("data-simulate-touch") == "true") {
                    if ($(this).parent().hasClass("cursor-drag")) {
                        $(this).on("mouseenter", function() {
                            $ball.append('<div class="ball-drag"></div>');
                            gsap.to($ball, {
                                duration: 0.3,
                                width: 60,
                                height: 60,
                                opacity: 1
                            });
                        }).on("mouseleave", function() {
                            $ball.find(".ball-drag").remove();
                            gsap.to($ball, {
                                duration: 0.3,
                                width: $ballWidth,
                                height: $ballHeight,
                                opacity: $ballOpacity
                            });
                        });
                        $(this).addClass("not-hide-cursor");
                        $(this).find("[data-cursor]").on("mouseenter mouseover", function() {
                            $ball.find(".ball-drag").remove();
                            return false;
                        }).on("mouseleave", function() {
                            $ball.append('<div class="ball-drag"></div>');
                            gsap.to($ball, {
                                duration: 0.3,
                                width: 60,
                                height: 60,
                                opacity: 1
                            });
                        });
                    }
                }
            });
            $(".swiper").each(function() {
                if ($(this).parent().attr("data-simulate-touch") == "true") {
                    if ($(this).parent().hasClass("cursor-drag-mouse-down")) {
                        $(this).on("mousedown pointerdown", function(e) {
                            if (e.which === 1) {
                                gsap.to($ball, {
                                    duration: 0.2,
                                    width: 60,
                                    height: 60,
                                    opacity: 1
                                });
                                $ball.append('<div class="ball-drag"></div>');
                            }
                        }).on("mouseup pointerup", function() {
                            $ball.find(".ball-drag").remove();
                            if ($(this).find("[data-cursor]:hover").length) {} else {
                                gsap.to($ball, {
                                    duration: 0.2,
                                    width: $ballWidth,
                                    height: $ballHeight,
                                    opacity: $ballOpacity
                                });
                            }
                        }).on("mouseleave", function() {
                            $ball.find(".ball-drag").remove();
                            gsap.to($ball, {
                                duration: 0.2,
                                width: $ballWidth,
                                height: $ballHeight,
                                opacity: $ballOpacity
                            });
                        });
                        $(this).find("[data-cursor]").on("mousedown pointerdown", function() {
                            return false;
                        });
                        $(this).find("[data-cursor]").on("mouseenter mouseover", function() {
                            $ball.find(".ball-drag").remove();
                            return false;
                        });
                    }
                }
            });
            $(".cursor-close").each(function() {
                $(this).addClass("ball-close-enabled");
                $(this).on("mouseenter", function() {
                    $ball.addClass("ball-close-enabled");
                    $ball.append('<div class="ball-close">Close</div>');
                    gsap.to($ball, {
                        duration: 0.3,
                        yPercent: -75,
                        width: 80,
                        height: 80,
                        opacity: 1
                    });
                    gsap.from(".ball-close", {
                        duration: 0.3,
                        scale: 0,
                        autoAlpha: 0
                    });
                }).on("mouseleave click", function() {
                    $ball.removeClass("ball-close-enabled");
                    gsap.to($ball, {
                        duration: 0.3,
                        yPercent: -50,
                        width: $ballWidth,
                        height: $ballHeight,
                        opacity: $ballOpacity
                    });
                    $ball.find(".ball-close").remove();
                });
                $(".cursor-close a, .cursor-close button, .cursor-close .tt-btn, .cursor-close .hide-cursor").not(".not-hide-cursor").on("mouseenter", function() {
                    $ball.removeClass("ball-close-enabled");
                }).on("mouseleave", function() {
                    $ball.addClass("ball-close-enabled");
                });
            });
            $(".blog-interactive-item").each(function() {
                var $biItem = $(this);
                if ($biItem.find(".bi-item-image").length) {
                    $biItem.find(".bi-item-title a").on("mouseenter mouseover", function() {
                        $("#magic-cursor").addClass("blog-interactive-hover-on");
                        $biItem.find(".bi-item-image").appendTo($ball);
                        gsap.to($ball, {
                            duration: 0.3,
                            width: "20vw",
                            height: "20vw",
                            opacity: 1
                        });
                    }).on("mouseleave", function() {
                        $("#magic-cursor").removeClass("blog-interactive-hover-on");
                        $ball.find(".bi-item-image").appendTo($biItem);
                        gsap.to($ball, {
                            duration: 0.3,
                            width: $ballWidth,
                            height: $ballHeight,
                            opacity: $ballOpacity
                        });
                    });
                    $biItem.find(".bi-item-title a").addClass("not-hide-cursor");
                    $biItem.addClass("bi-item-image-on");
                }
            });
            $('a[href^="#"]').not('[href$="#"]').not('[href$="#0"]').on("click", function() {
                var target = this.hash;
                if ($("#tt-header").hasClass("tt-header-fixed")) {
                    var $offset = $("#tt-header").height();
                } else {
                    var $offset = 0;
                }
                if ($(this).data("offset") != undefined) $offset = $(this).data("offset");
                if (!isMobile) {
                    if ($("body").hasClass("tt-smooth-scroll")) {
                        var topY = $(target).offset().top - $("#scroll-container > .scroll-content").offset().top - $offset;
                        var $scrollbar = Scrollbar.init(document.getElementById("scroll-container"));
                        gsap.to($scrollbar, {
                            duration: 1.5,
                            scrollTo: {
                                y: topY,
                                autoKill: true
                            },
                            ease: Expo.easeInOut
                        });
                    } else {
                        var topY = $(target).offset().top - $("body").offset().top - $offset;
                        $("html,body").animate({
                            scrollTop: topY
                        }, 800);
                    }
                } else {
                    var topY = $(target).offset().top - $("body").offset().top - $offset;
                    $("html,body").animate({
                        scrollTop: topY
                    }, 800);
                }
                return false;
            });
            $(".scroll-to-top").on("click", function() {
                if (!isMobile) {
                    if ($("body").hasClass("tt-smooth-scroll")) {
                        var $scrollbar = Scrollbar.init(document.getElementById("scroll-container"));
                        gsap.to($scrollbar, {
                            duration: 1.5,
                            scrollTo: {
                                y: 0,
                                autoKill: true
                            },
                            ease: Expo.easeInOut
                        });
                    } else {
                        $("html,body").animate({
                            scrollTop: 0
                        }, 800);
                    }
                } else {
                    $("html,body").animate({
                        scrollTop: 0
                    }, 800);
                }
                return false;
            });
            $("a, button, .tt-btn, .tt-form-control, .tt-form-radio, .tt-form-check, .hide-cursor").not(".not-hide-cursor").not(".cursor-alter").not(".tt-main-menu-list > li > a").not(".tt-main-menu-list > li > .tt-submenu-trigger > a").on("mouseenter", function() {
                gsap.to($ball, {
                    duration: 0.3,
                    scale: 0,
                    opacity: 0
                });
            }).on("mouseleave", function() {
                gsap.to($ball, {
                    duration: 0.3,
                    scale: 1,
                    opacity: $ballOpacity
                });
            });
            $("a").not('[target="_blank"]').not('[href^="#"]').not('[href^="mailto"]').not('[href^="tel"]').not(".lg-trigger").not(".tt-btn-disabled").on('click', function() {
                gsap.to($ball, {
                    duration: 0.3,
                    scale: 1.3,
                    autoAlpha: 0
                });
            });
            $(document).on("mouseleave", function() {
                gsap.to("#magic-cursor", {
                    duration: 0.3,
                    autoAlpha: 0
                });
            }).on("mouseenter", function() {
                gsap.to("#magic-cursor", {
                    duration: 0.3,
                    autoAlpha: 1
                });
            });
            $(document).mousemove(function() {
                gsap.to("#magic-cursor", {
                    duration: 0.3,
                    autoAlpha: 1
                });
            });
        }
    }
}(jQuery));
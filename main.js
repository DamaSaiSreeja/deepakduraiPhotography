(function($) {
    "use strict";

    function counter_num() {
        var count = setInterval(function() {
            var c = parseInt($(".counter").text());
            $(".counter").text((++c).toString());
            if (c === 100) {
                clearInterval(count);
                $(".counter").addClass("hide");
                $(".preloader").addClass("active");
            }
        });
    }
    counter_num();
    var swiper = new Swiper(".testi-image-slider", {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 1,
        freeMode: true,
        effect: 'fade',
        watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".testi-content-slider", {
        loop: true,
        spaceBetween: 10,
        navigation: {
            nextEl: ".testi1-next",
            prevEl: ".testi1-prev",
        },
        thumbs: {
            swiper: swiper,
        },
    });
    var swiper = new Swiper(".blog-slider", {
        slidesPerView: 1,
        speed: 800,
        spaceBetween: 10,
        slidesPerView: 8,
        loop: true,
        autoplay: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: 'true',
        },
        navigation: {
            nextEl: ".blog-next1",
            prevEl: ".blog-prev1",
        },
        breakpoints: {
            280: {
                slidesPerView: 1,
                navigation: false,
            },
            386: {
                slidesPerView: 1,
                navigation: false,
            },
            576: {
                slidesPerView: 2,
                navigation: false,
            },
            768: {
                slidesPerView: 2,
                navigation: false,
            },
            992: {
                slidesPerView: 2
            },
            1200: {
                slidesPerView: 3
            },
            1400: {
                slidesPerView: 3
            },
        }
    });
    var swiper = new Swiper(".award-slider", {
        slidesPerView: 1,
        speed: 800,
        spaceBetween: 10,
        loop: true,
        autoplay: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: 'true',
        },
        fadeEffect: {
            crossFade: true,
        },
    });
    var swiper = new Swiper(".banner-three-slider", {
        slidesPerView: 1,
        speed: 800,
        spaceBetween: 10,
        parallax: true,
        loop: true,
        autoplay: true,
        mousewheel: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: 'true',
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        },
        pagination: {
            el: ".swiper-pagination-num",
            clickable: true,
            renderBullet: function(index, className) {
                return '<span class="' + className + '">' + 0 + (index + 1) + "</span>";
            }
        }
    });
    var mySwiper = new Swiper('.banner5-slider', {
        loop: true,
        speed: 1000,
        spaceBetween: 30,
        slidesPerView: 2,
        mousewheel: true,
        pagination: {
            el: ".swiper-pagination-num2",
            clickable: true,
            renderBullet: function(index, className) {
                return '<span class="' + className + '">' + 0 + (index + 1) + "</span>";
            }
        },
        breakpoints: {
            280: {
                slidesPerView: 1,
                navigation: false,
            },
            386: {
                slidesPerView: 1,
                navigation: false,
            },
            576: {
                slidesPerView: 2,
                navigation: false,
            },
            768: {
                slidesPerView: 2,
                navigation: false,
            },
            992: {
                slidesPerView: 2
            },
            1200: {
                slidesPerView: 2
            },
            1400: {
                slidesPerView: 1.3
            },
        }
    });
    var mySwiper = new Swiper('.banner-center-slider', {
        loop: true,
        speed: 1000,
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 5,
        mousewheel: true,
        breakpoints: {
            280: {
                slidesPerView: 3,
                navigation: false,
            },
            386: {
                slidesPerView: 3,
                navigation: false,
            },
            576: {
                slidesPerView: 3,
                navigation: false,
            },
            768: {
                slidesPerView: 3,
                navigation: false,
            },
            992: {
                slidesPerView: 3
            },
            1200: {
                slidesPerView: 5
            },
            1400: {
                slidesPerView: 5
            },
        }
    });
    var mySwiper = new Swiper('.portfolio-center-slider', {
        loop: true,
        speed: 1000,
        spaceBetween: 20,
        centeredSlides: true,
        slidesPerView: 3,
        mousewheel: true,
        breakpoints: {
            280: {
                slidesPerView: 1,
                navigation: false,
            },
            386: {
                slidesPerView: 1,
                navigation: false,
            },
            576: {
                slidesPerView: 1,
                navigation: false,
            },
            768: {
                slidesPerView: 3,
                navigation: false,
            },
            992: {
                slidesPerView: 3
            },
            1200: {
                slidesPerView: 3
            },
            1400: {
                slidesPerView: 3
            },
        }
    });
    var swiper = new Swiper(".portfolio-slider-one", {
        slidesPerView: 2,
        speed: 800,
        spaceBetween: 20,
        loop: true,
        autoplay: true,
        grabCursor: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: 'true',
        },
        fadeEffect: {
            crossFade: true,
        },
        navigation: {
            nextEl: ".portfolio-next1",
            prevEl: ".portfolio-prev1",
        },
        breakpoints: {
            280: {
                slidesPerView: 1,
                navigation: false,
            },
            386: {
                slidesPerView: 1,
                navigation: false,
            },
            576: {
                slidesPerView: 2,
                navigation: false,
            },
            768: {
                slidesPerView: 2,
                navigation: false,
            },
            992: {
                slidesPerView: 2
            },
            1200: {
                slidesPerView: 3
            },
            1400: {
                slidesPerView: 3
            },
        }
    });
    new Swiper('.gallery-slider', {
        slidesPerView: 1,
        speed: 1000,
        loop: true,
        spaceBetween: 10,
        roundLengths: true,
        parallax: true,
        mousewheel: true,
        effect: "creative",
        creativeEffect: {
            prev: {
                shadow: true,
                translate: [0, 0, -100],
            },
            next: {
                translate: ["100%", 0, 0],
            },
        },
        autoplay: {
            delay: 4000
        },
    });
    $(".counter-single").each(function() {
        $(this).isInViewport(function(status) {
            if (status === "entered") {
                for (var i = 0; i < document.querySelectorAll(".odometer").length; i++) {
                    var el = document.querySelectorAll(".odometer")[i];
                    el.innerHTML = el.getAttribute("data-odometer-final");
                }
            }
        });
    });
    var CircleTypeText1 = document.getElementById("CircleTypeText1");
    if (CircleTypeText1 != null) {
        new CircleType(document.getElementById("CircleTypeText1"));
    }
    var CircleTypeText2 = document.getElementById("CircleTypeText2");
    if (CircleTypeText2 != null) {
        new CircleType(document.getElementById("CircleTypeText2"));
    }
    var CircleTypeText3 = document.getElementById("CircleTypeText3");
    if (CircleTypeText3 != null) {
        new CircleType(document.getElementById("CircleTypeText3"));
    }
    var CircleTypeText4 = document.getElementById("CircleTypeText4");
    if (CircleTypeText4 != null) {
        new CircleType(document.getElementById("CircleTypeText4"));
    }
    $(".marquee_text1").marquee({
        direction: "left",
        duration: 50000,
        gap: 50,
        delayBeforeStart: 0,
        duplicated: true,
        startVisible: true,
    });
    setTimeout(function() {
        $('.filter-button-group').on('click', 'li', function() {
            var filterValue = $(this).attr('data-filter');
            $('.grid').isotope({
                filter: filterValue
            });
            $('.filter-button-group li').removeClass('active');
            $(this).addClass('active');
        });
        $('.grid').masonry({
            itemSelector: '.grid-item',
        });
    });
    var $grid = $('.grid').imagesLoaded(function() {
        $grid.masonry({});
    });
    jQuery(document).ready(function() {
        var eventDates = {};
        eventDates[new Date('12/06/2015')] = new Date('12/06/2015');
        eventDates[new Date('06/20/2015')] = new Date('06/20/2015');
        eventDates[new Date('06/25/2015')] = new Date('06/25/2015');
        jQuery('#calendar').datepicker({
            beforeShowDay: function(date) {
                var highlight = eventDates[date];
                if (highlight) {
                    return [true, "event", highlight];
                } else {
                    return [true, '', ''];
                }
            }
        });
    });
    var lang = {
        "html": "100%",
        "css": "90%",
        "javascript": "70%",
    };
    var multiply = 4;
    $.each(lang, function(language, pourcent) {
        var delay = 700;
        setTimeout(function() {
            $('#' + language + '-pourcent').html(pourcent);
        }, delay * multiply);
        multiply++;
    });
    setTimeout(function() {
        var $grid = $('.grid-two').masonry({});
    });
    jQuery('#datepicker').datepicker({
        format: 'dd-mm-yyyy',
        startDate: '+1d'
    });
    $('.text2').each(function() {
        $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='2_text'>$&</span>"));
    });
    var $text2 = $(".text2 span"),
        tl_2 = new TimelineMax({
            repeat: -1
        });
    tl_2.staggerFrom($text2, 0.5, {
        top: "+=25px",
        rotation: "-=-3deg",
        alpha: 0,
        scale: 0.8,
        ease: Power1.easeOut
    }, 0.15).to($text2, 0.5, {
        alpha: 0,
        ease: Power1.easeOut
    }, '+=1.2');
})(jQuery);
/*!
 * Bootstrap v5.0.2 (https://getbootstrap.com/)
 * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e()
}(this, (function() {
    "use strict";
    const t = {
            find: (t, e = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(e, t)),
            findOne: (t, e = document.documentElement) => Element.prototype.querySelector.call(e, t),
            children: (t, e) => [].concat(...t.children).filter(t => t.matches(e)),
            parents(t, e) {
                const i = [];
                let n = t.parentNode;
                for (; n && n.nodeType === Node.ELEMENT_NODE && 3 !== n.nodeType;) n.matches(e) && i.push(n), n = n.parentNode;
                return i
            },
            prev(t, e) {
                let i = t.previousElementSibling;
                for (; i;) {
                    if (i.matches(e)) return [i];
                    i = i.previousElementSibling
                }
                return []
            },
            next(t, e) {
                let i = t.nextElementSibling;
                for (; i;) {
                    if (i.matches(e)) return [i];
                    i = i.nextElementSibling
                }
                return []
            }
        },
        e = t => {
            do {
                t += Math.floor(1e6 * Math.random())
            } while (document.getElementById(t));
            return t
        },
        i = t => {
            let e = t.getAttribute("data-bs-target");
            if (!e || "#" === e) {
                let i = t.getAttribute("href");
                if (!i || !i.includes("#") && !i.startsWith(".")) return null;
                i.includes("#") && !i.startsWith("#") && (i = "#" + i.split("#")[1]), e = i && "#" !== i ? i.trim() : null
            }
            return e
        },
        n = t => {
            const e = i(t);
            return e && document.querySelector(e) ? e : null
        },
        s = t => {
            const e = i(t);
            return e ? document.querySelector(e) : null
        },
        o = t => {
            t.dispatchEvent(new Event("transitionend"))
        },
        r = t => !(!t || "object" != typeof t) && (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType),
        a = e => r(e) ? e.jquery ? e[0] : e : "string" == typeof e && e.length > 0 ? t.findOne(e) : null,
        l = (t, e, i) => {
            Object.keys(i).forEach(n => {
                const s = i[n],
                    o = e[n],
                    a = o && r(o) ? "element" : null == (l = o) ? "" + l : {}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase();
                var l;
                if (!new RegExp(s).test(a)) throw new TypeError(`${t.toUpperCase()}: Option "${n}" provided type "${a}" but expected type "${s}".`)
            })
        },
        c = t => !(!r(t) || 0 === t.getClientRects().length) && "visible" === getComputedStyle(t).getPropertyValue("visibility"),
        h = t => !t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled")),
        d = t => {
            if (!document.documentElement.attachShadow) return null;
            if ("function" == typeof t.getRootNode) {
                const e = t.getRootNode();
                return e instanceof ShadowRoot ? e : null
            }
            return t instanceof ShadowRoot ? t : t.parentNode ? d(t.parentNode) : null
        },
        u = () => {},
        f = t => t.offsetHeight,
        p = () => {
            const {
                jQuery: t
            } = window;
            return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null
        },
        m = [],
        g = () => "rtl" === document.documentElement.dir,
        _ = t => {
            var e;
            e = () => {
                const e = p();
                if (e) {
                    const i = t.NAME,
                        n = e.fn[i];
                    e.fn[i] = t.jQueryInterface, e.fn[i].Constructor = t, e.fn[i].noConflict = () => (e.fn[i] = n, t.jQueryInterface)
                }
            }, "loading" === document.readyState ? (m.length || document.addEventListener("DOMContentLoaded", () => {
                m.forEach(t => t())
            }), m.push(e)) : e()
        },
        b = t => {
            "function" == typeof t && t()
        },
        v = (t, e, i = !0) => {
            if (!i) return void b(t);
            const n = (t => {
                if (!t) return 0;
                let {
                    transitionDuration: e,
                    transitionDelay: i
                } = window.getComputedStyle(t);
                const n = Number.parseFloat(e),
                    s = Number.parseFloat(i);
                return n || s ? (e = e.split(",")[0], i = i.split(",")[0], 1e3 * (Number.parseFloat(e) + Number.parseFloat(i))) : 0
            })(e) + 5;
            let s = !1;
            const r = ({
                target: i
            }) => {
                i === e && (s = !0, e.removeEventListener("transitionend", r), b(t))
            };
            e.addEventListener("transitionend", r), setTimeout(() => {
                s || o(e)
            }, n)
        },
        y = (t, e, i, n) => {
            let s = t.indexOf(e);
            if (-1 === s) return t[!i && n ? t.length - 1 : 0];
            const o = t.length;
            return s += i ? 1 : -1, n && (s = (s + o) % o), t[Math.max(0, Math.min(s, o - 1))]
        },
        w = /[^.]*(?=\..*)\.|.*/,
        E = /\..*/,
        A = /::\d+$/,
        T = {};
    let O = 1;
    const C = {
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        },
        k = /^(mouseenter|mouseleave)/i,
        L = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

    function x(t, e) {
        return e && `${e}::${O++}` || t.uidEvent || O++
    }

    function D(t) {
        const e = x(t);
        return t.uidEvent = e, T[e] = T[e] || {}, T[e]
    }

    function S(t, e, i = null) {
        const n = Object.keys(t);
        for (let s = 0, o = n.length; s < o; s++) {
            const o = t[n[s]];
            if (o.originalHandler === e && o.delegationSelector === i) return o
        }
        return null
    }

    function I(t, e, i) {
        const n = "string" == typeof e,
            s = n ? i : e;
        let o = M(t);
        return L.has(o) || (o = t), [n, s, o]
    }

    function N(t, e, i, n, s) {
        if ("string" != typeof e || !t) return;
        if (i || (i = n, n = null), k.test(e)) {
            const t = t => function(e) {
                if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget)) return t.call(this, e)
            };
            n ? n = t(n) : i = t(i)
        }
        const [o, r, a] = I(e, i, n), l = D(t), c = l[a] || (l[a] = {}), h = S(c, r, o ? i : null);
        if (h) return void(h.oneOff = h.oneOff && s);
        const d = x(r, e.replace(w, "")),
            u = o ? function(t, e, i) {
                return function n(s) {
                    const o = t.querySelectorAll(e);
                    for (let {
                            target: r
                        } = s; r && r !== this; r = r.parentNode)
                        for (let a = o.length; a--;)
                            if (o[a] === r) return s.delegateTarget = r, n.oneOff && P.off(t, s.type, e, i), i.apply(r, [s]);
                    return null
                }
            }(t, i, n) : function(t, e) {
                return function i(n) {
                    return n.delegateTarget = t, i.oneOff && P.off(t, n.type, e), e.apply(t, [n])
                }
            }(t, i);
        u.delegationSelector = o ? i : null, u.originalHandler = r, u.oneOff = s, u.uidEvent = d, c[d] = u, t.addEventListener(a, u, o)
    }

    function j(t, e, i, n, s) {
        const o = S(e[i], n, s);
        o && (t.removeEventListener(i, o, Boolean(s)), delete e[i][o.uidEvent])
    }

    function M(t) {
        return t = t.replace(E, ""), C[t] || t
    }
    const P = {
            on(t, e, i, n) {
                N(t, e, i, n, !1)
            },
            one(t, e, i, n) {
                N(t, e, i, n, !0)
            },
            off(t, e, i, n) {
                if ("string" != typeof e || !t) return;
                const [s, o, r] = I(e, i, n), a = r !== e, l = D(t), c = e.startsWith(".");
                if (void 0 !== o) {
                    if (!l || !l[r]) return;
                    return void j(t, l, r, o, s ? i : null)
                }
                c && Object.keys(l).forEach(i => {
                    ! function(t, e, i, n) {
                        const s = e[i] || {};
                        Object.keys(s).forEach(o => {
                            if (o.includes(n)) {
                                const n = s[o];
                                j(t, e, i, n.originalHandler, n.delegationSelector)
                            }
                        })
                    }(t, l, i, e.slice(1))
                });
                const h = l[r] || {};
                Object.keys(h).forEach(i => {
                    const n = i.replace(A, "");
                    if (!a || e.includes(n)) {
                        const e = h[i];
                        j(t, l, r, e.originalHandler, e.delegationSelector)
                    }
                })
            },
            trigger(t, e, i) {
                if ("string" != typeof e || !t) return null;
                const n = p(),
                    s = M(e),
                    o = e !== s,
                    r = L.has(s);
                let a, l = !0,
                    c = !0,
                    h = !1,
                    d = null;
                return o && n && (a = n.Event(e, i), n(t).trigger(a), l = !a.isPropagationStopped(), c = !a.isImmediatePropagationStopped(), h = a.isDefaultPrevented()), r ? (d = document.createEvent("HTMLEvents"), d.initEvent(s, l, !0)) : d = new CustomEvent(e, {
                    bubbles: l,
                    cancelable: !0
                }), void 0 !== i && Object.keys(i).forEach(t => {
                    Object.defineProperty(d, t, {
                        get: () => i[t]
                    })
                }), h && d.preventDefault(), c && t.dispatchEvent(d), d.defaultPrevented && void 0 !== a && a.preventDefault(), d
            }
        },
        H = new Map;
    var R = {
        set(t, e, i) {
            H.has(t) || H.set(t, new Map);
            const n = H.get(t);
            n.has(e) || 0 === n.size ? n.set(e, i) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`)
        },
        get: (t, e) => H.has(t) && H.get(t).get(e) || null,
        remove(t, e) {
            if (!H.has(t)) return;
            const i = H.get(t);
            i.delete(e), 0 === i.size && H.delete(t)
        }
    };
    class B {
        constructor(t) {
            (t = a(t)) && (this._element = t, R.set(this._element, this.constructor.DATA_KEY, this))
        }
        dispose() {
            R.remove(this._element, this.constructor.DATA_KEY), P.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this).forEach(t => {
                this[t] = null
            })
        }
        _queueCallback(t, e, i = !0) {
            v(t, e, i)
        }
        static getInstance(t) {
            return R.get(t, this.DATA_KEY)
        }
        static getOrCreateInstance(t, e = {}) {
            return this.getInstance(t) || new this(t, "object" == typeof e ? e : null)
        }
        static get VERSION() {
            return "5.0.2"
        }
        static get NAME() {
            throw new Error('You have to implement the static method "NAME", for each component!')
        }
        static get DATA_KEY() {
            return "bs." + this.NAME
        }
        static get EVENT_KEY() {
            return "." + this.DATA_KEY
        }
    }
    class W extends B {
        static get NAME() {
            return "alert"
        }
        close(t) {
            const e = t ? this._getRootElement(t) : this._element,
                i = this._triggerCloseEvent(e);
            null === i || i.defaultPrevented || this._removeElement(e)
        }
        _getRootElement(t) {
            return s(t) || t.closest(".alert")
        }
        _triggerCloseEvent(t) {
            return P.trigger(t, "close.bs.alert")
        }
        _removeElement(t) {
            t.classList.remove("show");
            const e = t.classList.contains("fade");
            this._queueCallback(() => this._destroyElement(t), t, e)
        }
        _destroyElement(t) {
            t.remove(), P.trigger(t, "closed.bs.alert")
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = W.getOrCreateInstance(this);
                "close" === t && e[t](this)
            }))
        }
        static handleDismiss(t) {
            return function(e) {
                e && e.preventDefault(), t.close(this)
            }
        }
    }
    P.on(document, "click.bs.alert.data-api", '[data-bs-dismiss="alert"]', W.handleDismiss(new W)), _(W);
    class q extends B {
        static get NAME() {
            return "button"
        }
        toggle() {
            this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"))
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = q.getOrCreateInstance(this);
                "toggle" === t && e[t]()
            }))
        }
    }

    function z(t) {
        return "true" === t || "false" !== t && (t === Number(t).toString() ? Number(t) : "" === t || "null" === t ? null : t)
    }

    function $(t) {
        return t.replace(/[A-Z]/g, t => "-" + t.toLowerCase())
    }
    P.on(document, "click.bs.button.data-api", '[data-bs-toggle="button"]', t => {
        t.preventDefault();
        const e = t.target.closest('[data-bs-toggle="button"]');
        q.getOrCreateInstance(e).toggle()
    }), _(q);
    const U = {
            setDataAttribute(t, e, i) {
                t.setAttribute("data-bs-" + $(e), i)
            },
            removeDataAttribute(t, e) {
                t.removeAttribute("data-bs-" + $(e))
            },
            getDataAttributes(t) {
                if (!t) return {};
                const e = {};
                return Object.keys(t.dataset).filter(t => t.startsWith("bs")).forEach(i => {
                    let n = i.replace(/^bs/, "");
                    n = n.charAt(0).toLowerCase() + n.slice(1, n.length), e[n] = z(t.dataset[i])
                }), e
            },
            getDataAttribute: (t, e) => z(t.getAttribute("data-bs-" + $(e))),
            offset(t) {
                const e = t.getBoundingClientRect();
                return {
                    top: e.top + document.body.scrollTop,
                    left: e.left + document.body.scrollLeft
                }
            },
            position: t => ({
                top: t.offsetTop,
                left: t.offsetLeft
            })
        },
        F = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0,
            touch: !0
        },
        V = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
            touch: "boolean"
        },
        K = "next",
        X = "prev",
        Y = "left",
        Q = "right",
        G = {
            ArrowLeft: Q,
            ArrowRight: Y
        };
    class Z extends B {
        constructor(e, i) {
            super(e), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(i), this._indicatorsElement = t.findOne(".carousel-indicators", this._element), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent), this._addEventListeners()
        }
        static get Default() {
            return F
        }
        static get NAME() {
            return "carousel"
        }
        next() {
            this._slide(K)
        }
        nextWhenVisible() {
            !document.hidden && c(this._element) && this.next()
        }
        prev() {
            this._slide(X)
        }
        pause(e) {
            e || (this._isPaused = !0), t.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (o(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
        }
        cycle(t) {
            t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
        }
        to(e) {
            this._activeElement = t.findOne(".active.carousel-item", this._element);
            const i = this._getItemindex(this._activeElement);
            if (e > this._items.length - 1 || e < 0) return;
            if (this._isSliding) return void P.one(this._element, "slid.bs.carousel", () => this.to(e));
            if (i === e) return this.pause(), void this.cycle();
            const n = e > i ? K : X;
            this._slide(n, this._items[e])
        }
        _getConfig(t) {
            return t = { ...F,
                ...U.getDataAttributes(this._element),
                ..."object" == typeof t ? t : {}
            }, l("carousel", t, V), t
        }
        _handleSwipe() {
            const t = Math.abs(this.touchDeltaX);
            if (t <= 40) return;
            const e = t / this.touchDeltaX;
            this.touchDeltaX = 0, e && this._slide(e > 0 ? Q : Y)
        }
        _addEventListeners() {
            this._config.keyboard && P.on(this._element, "keydown.bs.carousel", t => this._keydown(t)), "hover" === this._config.pause && (P.on(this._element, "mouseenter.bs.carousel", t => this.pause(t)), P.on(this._element, "mouseleave.bs.carousel", t => this.cycle(t))), this._config.touch && this._touchSupported && this._addTouchEventListeners()
        }
        _addTouchEventListeners() {
            const e = t => {
                    !this._pointerEvent || "pen" !== t.pointerType && "touch" !== t.pointerType ? this._pointerEvent || (this.touchStartX = t.touches[0].clientX) : this.touchStartX = t.clientX
                },
                i = t => {
                    this.touchDeltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this.touchStartX
                },
                n = t => {
                    !this._pointerEvent || "pen" !== t.pointerType && "touch" !== t.pointerType || (this.touchDeltaX = t.clientX - this.touchStartX), this._handleSwipe(), "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(t => this.cycle(t), 500 + this._config.interval))
                };
            t.find(".carousel-item img", this._element).forEach(t => {
                P.on(t, "dragstart.bs.carousel", t => t.preventDefault())
            }), this._pointerEvent ? (P.on(this._element, "pointerdown.bs.carousel", t => e(t)), P.on(this._element, "pointerup.bs.carousel", t => n(t)), this._element.classList.add("pointer-event")) : (P.on(this._element, "touchstart.bs.carousel", t => e(t)), P.on(this._element, "touchmove.bs.carousel", t => i(t)), P.on(this._element, "touchend.bs.carousel", t => n(t)))
        }
        _keydown(t) {
            if (/input|textarea/i.test(t.target.tagName)) return;
            const e = G[t.key];
            e && (t.preventDefault(), this._slide(e))
        }
        _getItemindex(e) {
            return this._items = e && e.parentNode ? t.find(".carousel-item", e.parentNode) : [], this._items.indexOf(e)
        }
        _getItemByOrder(t, e) {
            const i = t === K;
            return y(this._items, e, i, this._config.wrap)
        }
        _triggerSlideEvent(e, i) {
            const n = this._getItemindex(e),
                s = this._getItemindex(t.findOne(".active.carousel-item", this._element));
            return P.trigger(this._element, "slide.bs.carousel", {
                relatedTarget: e,
                direction: i,
                from: s,
                to: n
            })
        }
        _setActiveIndicatorElement(e) {
            if (this._indicatorsElement) {
                const i = t.findOne(".active", this._indicatorsElement);
                i.classList.remove("active"), i.removeAttribute("aria-current");
                const n = t.find("[data-bs-target]", this._indicatorsElement);
                for (let t = 0; t < n.length; t++)
                    if (Number.parseInt(n[t].getAttribute("data-bs-slide-to"), 10) === this._getItemindex(e)) {
                        n[t].classList.add("active"), n[t].setAttribute("aria-current", "true");
                        break
                    }
            }
        }
        _updateInterval() {
            const e = this._activeElement || t.findOne(".active.carousel-item", this._element);
            if (!e) return;
            const i = Number.parseInt(e.getAttribute("data-bs-interval"), 10);
            i ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = i) : this._config.interval = this._config.defaultInterval || this._config.interval
        }
        _slide(e, i) {
            const n = this._directionToOrder(e),
                s = t.findOne(".active.carousel-item", this._element),
                o = this._getItemindex(s),
                r = i || this._getItemByOrder(n, s),
                a = this._getItemindex(r),
                l = Boolean(this._interval),
                c = n === K,
                h = c ? "carousel-item-start" : "carousel-item-end",
                d = c ? "carousel-item-next" : "carousel-item-prev",
                u = this._orderToDirection(n);
            if (r && r.classList.contains("active")) return void(this._isSliding = !1);
            if (this._isSliding) return;
            if (this._triggerSlideEvent(r, u).defaultPrevented) return;
            if (!s || !r) return;
            this._isSliding = !0, l && this.pause(), this._setActiveIndicatorElement(r), this._activeElement = r;
            const p = () => {
                P.trigger(this._element, "slid.bs.carousel", {
                    relatedTarget: r,
                    direction: u,
                    from: o,
                    to: a
                })
            };
            if (this._element.classList.contains("slide")) {
                r.classList.add(d), f(r), s.classList.add(h), r.classList.add(h);
                const t = () => {
                    r.classList.remove(h, d), r.classList.add("active"), s.classList.remove("active", d, h), this._isSliding = !1, setTimeout(p, 0)
                };
                this._queueCallback(t, s, !0)
            } else s.classList.remove("active"), r.classList.add("active"), this._isSliding = !1, p();
            l && this.cycle()
        }
        _directionToOrder(t) {
            return [Q, Y].includes(t) ? g() ? t === Y ? X : K : t === Y ? K : X : t
        }
        _orderToDirection(t) {
            return [K, X].includes(t) ? g() ? t === X ? Y : Q : t === X ? Q : Y : t
        }
        static carouselInterface(t, e) {
            const i = Z.getOrCreateInstance(t, e);
            let {
                _config: n
            } = i;
            "object" == typeof e && (n = { ...n,
                ...e
            });
            const s = "string" == typeof e ? e : n.slide;
            if ("number" == typeof e) i.to(e);
            else if ("string" == typeof s) {
                if (void 0 === i[s]) throw new TypeError(`No method named "${s}"`);
                i[s]()
            } else n.interval && n.ride && (i.pause(), i.cycle())
        }
        static jQueryInterface(t) {
            return this.each((function() {
                Z.carouselInterface(this, t)
            }))
        }
        static dataApiClickHandler(t) {
            const e = s(this);
            if (!e || !e.classList.contains("carousel")) return;
            const i = { ...U.getDataAttributes(e),
                    ...U.getDataAttributes(this)
                },
                n = this.getAttribute("data-bs-slide-to");
            n && (i.interval = !1), Z.carouselInterface(e, i), n && Z.getInstance(e).to(n), t.preventDefault()
        }
    }
    P.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", Z.dataApiClickHandler), P.on(window, "load.bs.carousel.data-api", () => {
        const e = t.find('[data-bs-ride="carousel"]');
        for (let t = 0, i = e.length; t < i; t++) Z.carouselInterface(e[t], Z.getInstance(e[t]))
    }), _(Z);
    const J = {
            toggle: !0,
            parent: ""
        },
        tt = {
            toggle: "boolean",
            parent: "(string|element)"
        };
    class et extends B {
        constructor(e, i) {
            super(e), this._isTransitioning = !1, this._config = this._getConfig(i), this._triggerArray = t.find(`[data-bs-toggle="collapse"][href="#${this._element.id}"],[data-bs-toggle="collapse"][data-bs-target="#${this._element.id}"]`);
            const s = t.find('[data-bs-toggle="collapse"]');
            for (let e = 0, i = s.length; e < i; e++) {
                const i = s[e],
                    o = n(i),
                    r = t.find(o).filter(t => t === this._element);
                null !== o && r.length && (this._selector = o, this._triggerArray.push(i))
            }
            this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
        }
        static get Default() {
            return J
        }
        static get NAME() {
            return "collapse"
        }
        toggle() {
            this._element.classList.contains("show") ? this.hide() : this.show()
        }
        show() {
            if (this._isTransitioning || this._element.classList.contains("show")) return;
            let e, i;
            this._parent && (e = t.find(".show, .collapsing", this._parent).filter(t => "string" == typeof this._config.parent ? t.getAttribute("data-bs-parent") === this._config.parent : t.classList.contains("collapse")), 0 === e.length && (e = null));
            const n = t.findOne(this._selector);
            if (e) {
                const t = e.find(t => n !== t);
                if (i = t ? et.getInstance(t) : null, i && i._isTransitioning) return
            }
            if (P.trigger(this._element, "show.bs.collapse").defaultPrevented) return;
            e && e.forEach(t => {
                n !== t && et.collapseInterface(t, "hide"), i || R.set(t, "bs.collapse", null)
            });
            const s = this._getDimension();
            this._element.classList.remove("collapse"), this._element.classList.add("collapsing"), this._element.style[s] = 0, this._triggerArray.length && this._triggerArray.forEach(t => {
                t.classList.remove("collapsed"), t.setAttribute("aria-expanded", !0)
            }), this.setTransitioning(!0);
            const o = "scroll" + (s[0].toUpperCase() + s.slice(1));
            this._queueCallback(() => {
                this._element.classList.remove("collapsing"), this._element.classList.add("collapse", "show"), this._element.style[s] = "", this.setTransitioning(!1), P.trigger(this._element, "shown.bs.collapse")
            }, this._element, !0), this._element.style[s] = this._element[o] + "px"
        }
        hide() {
            if (this._isTransitioning || !this._element.classList.contains("show")) return;
            if (P.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;
            const t = this._getDimension();
            this._element.style[t] = this._element.getBoundingClientRect()[t] + "px", f(this._element), this._element.classList.add("collapsing"), this._element.classList.remove("collapse", "show");
            const e = this._triggerArray.length;
            if (e > 0)
                for (let t = 0; t < e; t++) {
                    const e = this._triggerArray[t],
                        i = s(e);
                    i && !i.classList.contains("show") && (e.classList.add("collapsed"), e.setAttribute("aria-expanded", !1))
                }
            this.setTransitioning(!0), this._element.style[t] = "", this._queueCallback(() => {
                this.setTransitioning(!1), this._element.classList.remove("collapsing"), this._element.classList.add("collapse"), P.trigger(this._element, "hidden.bs.collapse")
            }, this._element, !0)
        }
        setTransitioning(t) {
            this._isTransitioning = t
        }
        _getConfig(t) {
            return (t = { ...J,
                ...t
            }).toggle = Boolean(t.toggle), l("collapse", t, tt), t
        }
        _getDimension() {
            return this._element.classList.contains("width") ? "width" : "height"
        }
        _getParent() {
            let {
                parent: e
            } = this._config;
            e = a(e);
            const i = `[data-bs-toggle="collapse"][data-bs-parent="${e}"]`;
            return t.find(i, e).forEach(t => {
                const e = s(t);
                this._addAriaAndCollapsedClass(e, [t])
            }), e
        }
        _addAriaAndCollapsedClass(t, e) {
            if (!t || !e.length) return;
            const i = t.classList.contains("show");
            e.forEach(t => {
                i ? t.classList.remove("collapsed") : t.classList.add("collapsed"), t.setAttribute("aria-expanded", i)
            })
        }
        static collapseInterface(t, e) {
            let i = et.getInstance(t);
            const n = { ...J,
                ...U.getDataAttributes(t),
                ..."object" == typeof e && e ? e : {}
            };
            if (!i && n.toggle && "string" == typeof e && /show|hide/.test(e) && (n.toggle = !1), i || (i = new et(t, n)), "string" == typeof e) {
                if (void 0 === i[e]) throw new TypeError(`No method named "${e}"`);
                i[e]()
            }
        }
        static jQueryInterface(t) {
            return this.each((function() {
                et.collapseInterface(this, t)
            }))
        }
    }
    P.on(document, "click.bs.collapse.data-api", '[data-bs-toggle="collapse"]', (function(e) {
        ("A" === e.target.tagName || e.delegateTarget && "A" === e.delegateTarget.tagName) && e.preventDefault();
        const i = U.getDataAttributes(this),
            s = n(this);
        t.find(s).forEach(t => {
            const e = et.getInstance(t);
            let n;
            e ? (null === e._parent && "string" == typeof i.parent && (e._config.parent = i.parent, e._parent = e._getParent()), n = "toggle") : n = i, et.collapseInterface(t, n)
        })
    })), _(et);
    var it = "top",
        nt = "bottom",
        st = "right",
        ot = "left",
        rt = [it, nt, st, ot],
        at = rt.reduce((function(t, e) {
            return t.concat([e + "-start", e + "-end"])
        }), []),
        lt = [].concat(rt, ["auto"]).reduce((function(t, e) {
            return t.concat([e, e + "-start", e + "-end"])
        }), []),
        ct = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

    function ht(t) {
        return t ? (t.nodeName || "").toLowerCase() : null
    }

    function dt(t) {
        if (null == t) return window;
        if ("[object Window]" !== t.toString()) {
            var e = t.ownerDocument;
            return e && e.defaultView || window
        }
        return t
    }

    function ut(t) {
        return t instanceof dt(t).Element || t instanceof Element
    }

    function ft(t) {
        return t instanceof dt(t).HTMLElement || t instanceof HTMLElement
    }

    function pt(t) {
        return "undefined" != typeof ShadowRoot && (t instanceof dt(t).ShadowRoot || t instanceof ShadowRoot)
    }
    var mt = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function(t) {
            var e = t.state;
            Object.keys(e.elements).forEach((function(t) {
                var i = e.styles[t] || {},
                    n = e.attributes[t] || {},
                    s = e.elements[t];
                ft(s) && ht(s) && (Object.assign(s.style, i), Object.keys(n).forEach((function(t) {
                    var e = n[t];
                    !1 === e ? s.removeAttribute(t) : s.setAttribute(t, !0 === e ? "" : e)
                })))
            }))
        },
        effect: function(t) {
            var e = t.state,
                i = {
                    popper: {
                        position: e.options.strategy,
                        left: "0",
                        top: "0",
                        margin: "0"
                    },
                    arrow: {
                        position: "absolute"
                    },
                    reference: {}
                };
            return Object.assign(e.elements.popper.style, i.popper), e.styles = i, e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow),
                function() {
                    Object.keys(e.elements).forEach((function(t) {
                        var n = e.elements[t],
                            s = e.attributes[t] || {},
                            o = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]).reduce((function(t, e) {
                                return t[e] = "", t
                            }), {});
                        ft(n) && ht(n) && (Object.assign(n.style, o), Object.keys(s).forEach((function(t) {
                            n.removeAttribute(t)
                        })))
                    }))
                }
        },
        requires: ["computeStyles"]
    };

    function gt(t) {
        return t.split("-")[0]
    }

    function _t(t) {
        var e = t.getBoundingClientRect();
        return {
            width: e.width,
            height: e.height,
            top: e.top,
            right: e.right,
            bottom: e.bottom,
            left: e.left,
            x: e.left,
            y: e.top
        }
    }

    function bt(t) {
        var e = _t(t),
            i = t.offsetWidth,
            n = t.offsetHeight;
        return Math.abs(e.width - i) <= 1 && (i = e.width), Math.abs(e.height - n) <= 1 && (n = e.height), {
            x: t.offsetLeft,
            y: t.offsetTop,
            width: i,
            height: n
        }
    }

    function vt(t, e) {
        var i = e.getRootNode && e.getRootNode();
        if (t.contains(e)) return !0;
        if (i && pt(i)) {
            var n = e;
            do {
                if (n && t.isSameNode(n)) return !0;
                n = n.parentNode || n.host
            } while (n)
        }
        return !1
    }

    function yt(t) {
        return dt(t).getComputedStyle(t)
    }

    function wt(t) {
        return ["table", "td", "th"].indexOf(ht(t)) >= 0
    }

    function Et(t) {
        return ((ut(t) ? t.ownerDocument : t.document) || window.document).documentElement
    }

    function At(t) {
        return "html" === ht(t) ? t : t.assignedSlot || t.parentNode || (pt(t) ? t.host : null) || Et(t)
    }

    function Tt(t) {
        return ft(t) && "fixed" !== yt(t).position ? t.offsetParent : null
    }

    function Ot(t) {
        for (var e = dt(t), i = Tt(t); i && wt(i) && "static" === yt(i).position;) i = Tt(i);
        return i && ("html" === ht(i) || "body" === ht(i) && "static" === yt(i).position) ? e : i || function(t) {
            var e = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
            if (-1 !== navigator.userAgent.indexOf("Trident") && ft(t) && "fixed" === yt(t).position) return null;
            for (var i = At(t); ft(i) && ["html", "body"].indexOf(ht(i)) < 0;) {
                var n = yt(i);
                if ("none" !== n.transform || "none" !== n.perspective || "paint" === n.contain || -1 !== ["transform", "perspective"].indexOf(n.willChange) || e && "filter" === n.willChange || e && n.filter && "none" !== n.filter) return i;
                i = i.parentNode
            }
            return null
        }(t) || e
    }

    function Ct(t) {
        return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y"
    }
    var kt = Math.max,
        Lt = Math.min,
        xt = Math.round;

    function Dt(t, e, i) {
        return kt(t, Lt(e, i))
    }

    function St(t) {
        return Object.assign({}, {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }, t)
    }

    function It(t, e) {
        return e.reduce((function(e, i) {
            return e[i] = t, e
        }), {})
    }
    var Nt = {
            name: "arrow",
            enabled: !0,
            phase: "main",
            fn: function(t) {
                var e, i = t.state,
                    n = t.name,
                    s = t.options,
                    o = i.elements.arrow,
                    r = i.modifiersData.popperOffsets,
                    a = gt(i.placement),
                    l = Ct(a),
                    c = [ot, st].indexOf(a) >= 0 ? "height" : "width";
                if (o && r) {
                    var h = function(t, e) {
                            return St("number" != typeof(t = "function" == typeof t ? t(Object.assign({}, e.rects, {
                                placement: e.placement
                            })) : t) ? t : It(t, rt))
                        }(s.padding, i),
                        d = bt(o),
                        u = "y" === l ? it : ot,
                        f = "y" === l ? nt : st,
                        p = i.rects.reference[c] + i.rects.reference[l] - r[l] - i.rects.popper[c],
                        m = r[l] - i.rects.reference[l],
                        g = Ot(o),
                        _ = g ? "y" === l ? g.clientHeight || 0 : g.clientWidth || 0 : 0,
                        b = p / 2 - m / 2,
                        v = h[u],
                        y = _ - d[c] - h[f],
                        w = _ / 2 - d[c] / 2 + b,
                        E = Dt(v, w, y),
                        A = l;
                    i.modifiersData[n] = ((e = {})[A] = E, e.centerOffset = E - w, e)
                }
            },
            effect: function(t) {
                var e = t.state,
                    i = t.options.element,
                    n = void 0 === i ? "[data-popper-arrow]" : i;
                null != n && ("string" != typeof n || (n = e.elements.popper.querySelector(n))) && vt(e.elements.popper, n) && (e.elements.arrow = n)
            },
            requires: ["popperOffsets"],
            requiresIfExists: ["preventOverflow"]
        },
        jt = {
            top: "auto",
            right: "auto",
            bottom: "auto",
            left: "auto"
        };

    function Mt(t) {
        var e, i = t.popper,
            n = t.popperRect,
            s = t.placement,
            o = t.offsets,
            r = t.position,
            a = t.gpuAcceleration,
            l = t.adaptive,
            c = t.roundOffsets,
            h = !0 === c ? function(t) {
                var e = t.x,
                    i = t.y,
                    n = window.devicePixelRatio || 1;
                return {
                    x: xt(xt(e * n) / n) || 0,
                    y: xt(xt(i * n) / n) || 0
                }
            }(o) : "function" == typeof c ? c(o) : o,
            d = h.x,
            u = void 0 === d ? 0 : d,
            f = h.y,
            p = void 0 === f ? 0 : f,
            m = o.hasOwnProperty("x"),
            g = o.hasOwnProperty("y"),
            _ = ot,
            b = it,
            v = window;
        if (l) {
            var y = Ot(i),
                w = "clientHeight",
                E = "clientWidth";
            y === dt(i) && "static" !== yt(y = Et(i)).position && (w = "scrollHeight", E = "scrollWidth"), y = y, s === it && (b = nt, p -= y[w] - n.height, p *= a ? 1 : -1), s === ot && (_ = st, u -= y[E] - n.width, u *= a ? 1 : -1)
        }
        var A, T = Object.assign({
            position: r
        }, l && jt);
        return a ? Object.assign({}, T, ((A = {})[b] = g ? "0" : "", A[_] = m ? "0" : "", A.transform = (v.devicePixelRatio || 1) < 2 ? "translate(" + u + "px, " + p + "px)" : "translate3d(" + u + "px, " + p + "px, 0)", A)) : Object.assign({}, T, ((e = {})[b] = g ? p + "px" : "", e[_] = m ? u + "px" : "", e.transform = "", e))
    }
    var Pt = {
            name: "computeStyles",
            enabled: !0,
            phase: "beforeWrite",
            fn: function(t) {
                var e = t.state,
                    i = t.options,
                    n = i.gpuAcceleration,
                    s = void 0 === n || n,
                    o = i.adaptive,
                    r = void 0 === o || o,
                    a = i.roundOffsets,
                    l = void 0 === a || a,
                    c = {
                        placement: gt(e.placement),
                        popper: e.elements.popper,
                        popperRect: e.rects.popper,
                        gpuAcceleration: s
                    };
                null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign({}, e.styles.popper, Mt(Object.assign({}, c, {
                    offsets: e.modifiersData.popperOffsets,
                    position: e.options.strategy,
                    adaptive: r,
                    roundOffsets: l
                })))), null != e.modifiersData.arrow && (e.styles.arrow = Object.assign({}, e.styles.arrow, Mt(Object.assign({}, c, {
                    offsets: e.modifiersData.arrow,
                    position: "absolute",
                    adaptive: !1,
                    roundOffsets: l
                })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
                    "data-popper-placement": e.placement
                })
            },
            data: {}
        },
        Ht = {
            passive: !0
        },
        Rt = {
            name: "eventListeners",
            enabled: !0,
            phase: "write",
            fn: function() {},
            effect: function(t) {
                var e = t.state,
                    i = t.instance,
                    n = t.options,
                    s = n.scroll,
                    o = void 0 === s || s,
                    r = n.resize,
                    a = void 0 === r || r,
                    l = dt(e.elements.popper),
                    c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
                return o && c.forEach((function(t) {
                        t.addEventListener("scroll", i.update, Ht)
                    })), a && l.addEventListener("resize", i.update, Ht),
                    function() {
                        o && c.forEach((function(t) {
                            t.removeEventListener("scroll", i.update, Ht)
                        })), a && l.removeEventListener("resize", i.update, Ht)
                    }
            },
            data: {}
        },
        Bt = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };

    function Wt(t) {
        return t.replace(/left|right|bottom|top/g, (function(t) {
            return Bt[t]
        }))
    }
    var qt = {
        start: "end",
        end: "start"
    };

    function zt(t) {
        return t.replace(/start|end/g, (function(t) {
            return qt[t]
        }))
    }

    function $t(t) {
        var e = dt(t);
        return {
            scrollLeft: e.pageXOffset,
            scrollTop: e.pageYOffset
        }
    }

    function Ut(t) {
        return _t(Et(t)).left + $t(t).scrollLeft
    }

    function Ft(t) {
        var e = yt(t),
            i = e.overflow,
            n = e.overflowX,
            s = e.overflowY;
        return /auto|scroll|overlay|hidden/.test(i + s + n)
    }

    function Vt(t, e) {
        var i;
        void 0 === e && (e = []);
        var n = function t(e) {
                return ["html", "body", "#document"].indexOf(ht(e)) >= 0 ? e.ownerDocument.body : ft(e) && Ft(e) ? e : t(At(e))
            }(t),
            s = n === (null == (i = t.ownerDocument) ? void 0 : i.body),
            o = dt(n),
            r = s ? [o].concat(o.visualViewport || [], Ft(n) ? n : []) : n,
            a = e.concat(r);
        return s ? a : a.concat(Vt(At(r)))
    }

    function Kt(t) {
        return Object.assign({}, t, {
            left: t.x,
            top: t.y,
            right: t.x + t.width,
            bottom: t.y + t.height
        })
    }

    function Xt(t, e) {
        return "viewport" === e ? Kt(function(t) {
            var e = dt(t),
                i = Et(t),
                n = e.visualViewport,
                s = i.clientWidth,
                o = i.clientHeight,
                r = 0,
                a = 0;
            return n && (s = n.width, o = n.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (r = n.offsetLeft, a = n.offsetTop)), {
                width: s,
                height: o,
                x: r + Ut(t),
                y: a
            }
        }(t)) : ft(e) ? function(t) {
            var e = _t(t);
            return e.top = e.top + t.clientTop, e.left = e.left + t.clientLeft, e.bottom = e.top + t.clientHeight, e.right = e.left + t.clientWidth, e.width = t.clientWidth, e.height = t.clientHeight, e.x = e.left, e.y = e.top, e
        }(e) : Kt(function(t) {
            var e, i = Et(t),
                n = $t(t),
                s = null == (e = t.ownerDocument) ? void 0 : e.body,
                o = kt(i.scrollWidth, i.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0),
                r = kt(i.scrollHeight, i.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0),
                a = -n.scrollLeft + Ut(t),
                l = -n.scrollTop;
            return "rtl" === yt(s || i).direction && (a += kt(i.clientWidth, s ? s.clientWidth : 0) - o), {
                width: o,
                height: r,
                x: a,
                y: l
            }
        }(Et(t)))
    }

    function Yt(t) {
        return t.split("-")[1]
    }

    function Qt(t) {
        var e, i = t.reference,
            n = t.element,
            s = t.placement,
            o = s ? gt(s) : null,
            r = s ? Yt(s) : null,
            a = i.x + i.width / 2 - n.width / 2,
            l = i.y + i.height / 2 - n.height / 2;
        switch (o) {
            case it:
                e = {
                    x: a,
                    y: i.y - n.height
                };
                break;
            case nt:
                e = {
                    x: a,
                    y: i.y + i.height
                };
                break;
            case st:
                e = {
                    x: i.x + i.width,
                    y: l
                };
                break;
            case ot:
                e = {
                    x: i.x - n.width,
                    y: l
                };
                break;
            default:
                e = {
                    x: i.x,
                    y: i.y
                }
        }
        var c = o ? Ct(o) : null;
        if (null != c) {
            var h = "y" === c ? "height" : "width";
            switch (r) {
                case "start":
                    e[c] = e[c] - (i[h] / 2 - n[h] / 2);
                    break;
                case "end":
                    e[c] = e[c] + (i[h] / 2 - n[h] / 2)
            }
        }
        return e
    }

    function Gt(t, e) {
        void 0 === e && (e = {});
        var i = e,
            n = i.placement,
            s = void 0 === n ? t.placement : n,
            o = i.boundary,
            r = void 0 === o ? "clippingParents" : o,
            a = i.rootBoundary,
            l = void 0 === a ? "viewport" : a,
            c = i.elementContext,
            h = void 0 === c ? "popper" : c,
            d = i.altBoundary,
            u = void 0 !== d && d,
            f = i.padding,
            p = void 0 === f ? 0 : f,
            m = St("number" != typeof p ? p : It(p, rt)),
            g = "popper" === h ? "reference" : "popper",
            _ = t.elements.reference,
            b = t.rects.popper,
            v = t.elements[u ? g : h],
            y = function(t, e, i) {
                var n = "clippingParents" === e ? function(t) {
                        var e = Vt(At(t)),
                            i = ["absolute", "fixed"].indexOf(yt(t).position) >= 0 && ft(t) ? Ot(t) : t;
                        return ut(i) ? e.filter((function(t) {
                            return ut(t) && vt(t, i) && "body" !== ht(t)
                        })) : []
                    }(t) : [].concat(e),
                    s = [].concat(n, [i]),
                    o = s[0],
                    r = s.reduce((function(e, i) {
                        var n = Xt(t, i);
                        return e.top = kt(n.top, e.top), e.right = Lt(n.right, e.right), e.bottom = Lt(n.bottom, e.bottom), e.left = kt(n.left, e.left), e
                    }), Xt(t, o));
                return r.width = r.right - r.left, r.height = r.bottom - r.top, r.x = r.left, r.y = r.top, r
            }(ut(v) ? v : v.contextElement || Et(t.elements.popper), r, l),
            w = _t(_),
            E = Qt({
                reference: w,
                element: b,
                strategy: "absolute",
                placement: s
            }),
            A = Kt(Object.assign({}, b, E)),
            T = "popper" === h ? A : w,
            O = {
                top: y.top - T.top + m.top,
                bottom: T.bottom - y.bottom + m.bottom,
                left: y.left - T.left + m.left,
                right: T.right - y.right + m.right
            },
            C = t.modifiersData.offset;
        if ("popper" === h && C) {
            var k = C[s];
            Object.keys(O).forEach((function(t) {
                var e = [st, nt].indexOf(t) >= 0 ? 1 : -1,
                    i = [it, nt].indexOf(t) >= 0 ? "y" : "x";
                O[t] += k[i] * e
            }))
        }
        return O
    }

    function Zt(t, e) {
        void 0 === e && (e = {});
        var i = e,
            n = i.placement,
            s = i.boundary,
            o = i.rootBoundary,
            r = i.padding,
            a = i.flipVariations,
            l = i.allowedAutoPlacements,
            c = void 0 === l ? lt : l,
            h = Yt(n),
            d = h ? a ? at : at.filter((function(t) {
                return Yt(t) === h
            })) : rt,
            u = d.filter((function(t) {
                return c.indexOf(t) >= 0
            }));
        0 === u.length && (u = d);
        var f = u.reduce((function(e, i) {
            return e[i] = Gt(t, {
                placement: i,
                boundary: s,
                rootBoundary: o,
                padding: r
            })[gt(i)], e
        }), {});
        return Object.keys(f).sort((function(t, e) {
            return f[t] - f[e]
        }))
    }
    var Jt = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function(t) {
            var e = t.state,
                i = t.options,
                n = t.name;
            if (!e.modifiersData[n]._skip) {
                for (var s = i.mainAxis, o = void 0 === s || s, r = i.altAxis, a = void 0 === r || r, l = i.fallbackPlacements, c = i.padding, h = i.boundary, d = i.rootBoundary, u = i.altBoundary, f = i.flipVariations, p = void 0 === f || f, m = i.allowedAutoPlacements, g = e.options.placement, _ = gt(g), b = l || (_ !== g && p ? function(t) {
                        if ("auto" === gt(t)) return [];
                        var e = Wt(t);
                        return [zt(t), e, zt(e)]
                    }(g) : [Wt(g)]), v = [g].concat(b).reduce((function(t, i) {
                        return t.concat("auto" === gt(i) ? Zt(e, {
                            placement: i,
                            boundary: h,
                            rootBoundary: d,
                            padding: c,
                            flipVariations: p,
                            allowedAutoPlacements: m
                        }) : i)
                    }), []), y = e.rects.reference, w = e.rects.popper, E = new Map, A = !0, T = v[0], O = 0; O < v.length; O++) {
                    var C = v[O],
                        k = gt(C),
                        L = "start" === Yt(C),
                        x = [it, nt].indexOf(k) >= 0,
                        D = x ? "width" : "height",
                        S = Gt(e, {
                            placement: C,
                            boundary: h,
                            rootBoundary: d,
                            altBoundary: u,
                            padding: c
                        }),
                        I = x ? L ? st : ot : L ? nt : it;
                    y[D] > w[D] && (I = Wt(I));
                    var N = Wt(I),
                        j = [];
                    if (o && j.push(S[k] <= 0), a && j.push(S[I] <= 0, S[N] <= 0), j.every((function(t) {
                            return t
                        }))) {
                        T = C, A = !1;
                        break
                    }
                    E.set(C, j)
                }
                if (A)
                    for (var M = function(t) {
                            var e = v.find((function(e) {
                                var i = E.get(e);
                                if (i) return i.slice(0, t).every((function(t) {
                                    return t
                                }))
                            }));
                            if (e) return T = e, "break"
                        }, P = p ? 3 : 1; P > 0 && "break" !== M(P); P--);
                e.placement !== T && (e.modifiersData[n]._skip = !0, e.placement = T, e.reset = !0)
            }
        },
        requiresIfExists: ["offset"],
        data: {
            _skip: !1
        }
    };

    function te(t, e, i) {
        return void 0 === i && (i = {
            x: 0,
            y: 0
        }), {
            top: t.top - e.height - i.y,
            right: t.right - e.width + i.x,
            bottom: t.bottom - e.height + i.y,
            left: t.left - e.width - i.x
        }
    }

    function ee(t) {
        return [it, st, nt, ot].some((function(e) {
            return t[e] >= 0
        }))
    }
    var ie = {
            name: "hide",
            enabled: !0,
            phase: "main",
            requiresIfExists: ["preventOverflow"],
            fn: function(t) {
                var e = t.state,
                    i = t.name,
                    n = e.rects.reference,
                    s = e.rects.popper,
                    o = e.modifiersData.preventOverflow,
                    r = Gt(e, {
                        elementContext: "reference"
                    }),
                    a = Gt(e, {
                        altBoundary: !0
                    }),
                    l = te(r, n),
                    c = te(a, s, o),
                    h = ee(l),
                    d = ee(c);
                e.modifiersData[i] = {
                    referenceClippingOffsets: l,
                    popperEscapeOffsets: c,
                    isReferenceHidden: h,
                    hasPopperEscaped: d
                }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
                    "data-popper-reference-hidden": h,
                    "data-popper-escaped": d
                })
            }
        },
        ne = {
            name: "offset",
            enabled: !0,
            phase: "main",
            requires: ["popperOffsets"],
            fn: function(t) {
                var e = t.state,
                    i = t.options,
                    n = t.name,
                    s = i.offset,
                    o = void 0 === s ? [0, 0] : s,
                    r = lt.reduce((function(t, i) {
                        return t[i] = function(t, e, i) {
                            var n = gt(t),
                                s = [ot, it].indexOf(n) >= 0 ? -1 : 1,
                                o = "function" == typeof i ? i(Object.assign({}, e, {
                                    placement: t
                                })) : i,
                                r = o[0],
                                a = o[1];
                            return r = r || 0, a = (a || 0) * s, [ot, st].indexOf(n) >= 0 ? {
                                x: a,
                                y: r
                            } : {
                                x: r,
                                y: a
                            }
                        }(i, e.rects, o), t
                    }), {}),
                    a = r[e.placement],
                    l = a.x,
                    c = a.y;
                null != e.modifiersData.popperOffsets && (e.modifiersData.popperOffsets.x += l, e.modifiersData.popperOffsets.y += c), e.modifiersData[n] = r
            }
        },
        se = {
            name: "popperOffsets",
            enabled: !0,
            phase: "read",
            fn: function(t) {
                var e = t.state,
                    i = t.name;
                e.modifiersData[i] = Qt({
                    reference: e.rects.reference,
                    element: e.rects.popper,
                    strategy: "absolute",
                    placement: e.placement
                })
            },
            data: {}
        },
        oe = {
            name: "preventOverflow",
            enabled: !0,
            phase: "main",
            fn: function(t) {
                var e = t.state,
                    i = t.options,
                    n = t.name,
                    s = i.mainAxis,
                    o = void 0 === s || s,
                    r = i.altAxis,
                    a = void 0 !== r && r,
                    l = i.boundary,
                    c = i.rootBoundary,
                    h = i.altBoundary,
                    d = i.padding,
                    u = i.tether,
                    f = void 0 === u || u,
                    p = i.tetherOffset,
                    m = void 0 === p ? 0 : p,
                    g = Gt(e, {
                        boundary: l,
                        rootBoundary: c,
                        padding: d,
                        altBoundary: h
                    }),
                    _ = gt(e.placement),
                    b = Yt(e.placement),
                    v = !b,
                    y = Ct(_),
                    w = "x" === y ? "y" : "x",
                    E = e.modifiersData.popperOffsets,
                    A = e.rects.reference,
                    T = e.rects.popper,
                    O = "function" == typeof m ? m(Object.assign({}, e.rects, {
                        placement: e.placement
                    })) : m,
                    C = {
                        x: 0,
                        y: 0
                    };
                if (E) {
                    if (o || a) {
                        var k = "y" === y ? it : ot,
                            L = "y" === y ? nt : st,
                            x = "y" === y ? "height" : "width",
                            D = E[y],
                            S = E[y] + g[k],
                            I = E[y] - g[L],
                            N = f ? -T[x] / 2 : 0,
                            j = "start" === b ? A[x] : T[x],
                            M = "start" === b ? -T[x] : -A[x],
                            P = e.elements.arrow,
                            H = f && P ? bt(P) : {
                                width: 0,
                                height: 0
                            },
                            R = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : {
                                top: 0,
                                right: 0,
                                bottom: 0,
                                left: 0
                            },
                            B = R[k],
                            W = R[L],
                            q = Dt(0, A[x], H[x]),
                            z = v ? A[x] / 2 - N - q - B - O : j - q - B - O,
                            $ = v ? -A[x] / 2 + N + q + W + O : M + q + W + O,
                            U = e.elements.arrow && Ot(e.elements.arrow),
                            F = U ? "y" === y ? U.clientTop || 0 : U.clientLeft || 0 : 0,
                            V = e.modifiersData.offset ? e.modifiersData.offset[e.placement][y] : 0,
                            K = E[y] + z - V - F,
                            X = E[y] + $ - V;
                        if (o) {
                            var Y = Dt(f ? Lt(S, K) : S, D, f ? kt(I, X) : I);
                            E[y] = Y, C[y] = Y - D
                        }
                        if (a) {
                            var Q = "x" === y ? it : ot,
                                G = "x" === y ? nt : st,
                                Z = E[w],
                                J = Z + g[Q],
                                tt = Z - g[G],
                                et = Dt(f ? Lt(J, K) : J, Z, f ? kt(tt, X) : tt);
                            E[w] = et, C[w] = et - Z
                        }
                    }
                    e.modifiersData[n] = C
                }
            },
            requiresIfExists: ["offset"]
        };

    function re(t, e, i) {
        void 0 === i && (i = !1);
        var n, s, o = Et(e),
            r = _t(t),
            a = ft(e),
            l = {
                scrollLeft: 0,
                scrollTop: 0
            },
            c = {
                x: 0,
                y: 0
            };
        return (a || !a && !i) && (("body" !== ht(e) || Ft(o)) && (l = (n = e) !== dt(n) && ft(n) ? {
            scrollLeft: (s = n).scrollLeft,
            scrollTop: s.scrollTop
        } : $t(n)), ft(e) ? ((c = _t(e)).x += e.clientLeft, c.y += e.clientTop) : o && (c.x = Ut(o))), {
            x: r.left + l.scrollLeft - c.x,
            y: r.top + l.scrollTop - c.y,
            width: r.width,
            height: r.height
        }
    }
    var ae = {
        placement: "bottom",
        modifiers: [],
        strategy: "absolute"
    };

    function le() {
        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
        return !e.some((function(t) {
            return !(t && "function" == typeof t.getBoundingClientRect)
        }))
    }

    function ce(t) {
        void 0 === t && (t = {});
        var e = t,
            i = e.defaultModifiers,
            n = void 0 === i ? [] : i,
            s = e.defaultOptions,
            o = void 0 === s ? ae : s;
        return function(t, e, i) {
            void 0 === i && (i = o);
            var s, r, a = {
                    placement: "bottom",
                    orderedModifiers: [],
                    options: Object.assign({}, ae, o),
                    modifiersData: {},
                    elements: {
                        reference: t,
                        popper: e
                    },
                    attributes: {},
                    styles: {}
                },
                l = [],
                c = !1,
                h = {
                    state: a,
                    setOptions: function(i) {
                        d(), a.options = Object.assign({}, o, a.options, i), a.scrollParents = {
                            reference: ut(t) ? Vt(t) : t.contextElement ? Vt(t.contextElement) : [],
                            popper: Vt(e)
                        };
                        var s, r, c = function(t) {
                            var e = function(t) {
                                var e = new Map,
                                    i = new Set,
                                    n = [];
                                return t.forEach((function(t) {
                                    e.set(t.name, t)
                                })), t.forEach((function(t) {
                                    i.has(t.name) || function t(s) {
                                        i.add(s.name), [].concat(s.requires || [], s.requiresIfExists || []).forEach((function(n) {
                                            if (!i.has(n)) {
                                                var s = e.get(n);
                                                s && t(s)
                                            }
                                        })), n.push(s)
                                    }(t)
                                })), n
                            }(t);
                            return ct.reduce((function(t, i) {
                                return t.concat(e.filter((function(t) {
                                    return t.phase === i
                                })))
                            }), [])
                        }((s = [].concat(n, a.options.modifiers), r = s.reduce((function(t, e) {
                            var i = t[e.name];
                            return t[e.name] = i ? Object.assign({}, i, e, {
                                options: Object.assign({}, i.options, e.options),
                                data: Object.assign({}, i.data, e.data)
                            }) : e, t
                        }), {}), Object.keys(r).map((function(t) {
                            return r[t]
                        }))));
                        return a.orderedModifiers = c.filter((function(t) {
                            return t.enabled
                        })), a.orderedModifiers.forEach((function(t) {
                            var e = t.name,
                                i = t.options,
                                n = void 0 === i ? {} : i,
                                s = t.effect;
                            if ("function" == typeof s) {
                                var o = s({
                                    state: a,
                                    name: e,
                                    instance: h,
                                    options: n
                                });
                                l.push(o || function() {})
                            }
                        })), h.update()
                    },
                    forceUpdate: function() {
                        if (!c) {
                            var t = a.elements,
                                e = t.reference,
                                i = t.popper;
                            if (le(e, i)) {
                                a.rects = {
                                    reference: re(e, Ot(i), "fixed" === a.options.strategy),
                                    popper: bt(i)
                                }, a.reset = !1, a.placement = a.options.placement, a.orderedModifiers.forEach((function(t) {
                                    return a.modifiersData[t.name] = Object.assign({}, t.data)
                                }));
                                for (var n = 0; n < a.orderedModifiers.length; n++)
                                    if (!0 !== a.reset) {
                                        var s = a.orderedModifiers[n],
                                            o = s.fn,
                                            r = s.options,
                                            l = void 0 === r ? {} : r,
                                            d = s.name;
                                        "function" == typeof o && (a = o({
                                            state: a,
                                            options: l,
                                            name: d,
                                            instance: h
                                        }) || a)
                                    } else a.reset = !1, n = -1
                            }
                        }
                    },
                    update: (s = function() {
                        return new Promise((function(t) {
                            h.forceUpdate(), t(a)
                        }))
                    }, function() {
                        return r || (r = new Promise((function(t) {
                            Promise.resolve().then((function() {
                                r = void 0, t(s())
                            }))
                        }))), r
                    }),
                    destroy: function() {
                        d(), c = !0
                    }
                };
            if (!le(t, e)) return h;

            function d() {
                l.forEach((function(t) {
                    return t()
                })), l = []
            }
            return h.setOptions(i).then((function(t) {
                !c && i.onFirstUpdate && i.onFirstUpdate(t)
            })), h
        }
    }
    var he = ce(),
        de = ce({
            defaultModifiers: [Rt, se, Pt, mt]
        }),
        ue = ce({
            defaultModifiers: [Rt, se, Pt, mt, ne, Jt, oe, Nt, ie]
        }),
        fe = Object.freeze({
            __proto__: null,
            popperGenerator: ce,
            detectOverflow: Gt,
            createPopperBase: he,
            createPopper: ue,
            createPopperLite: de,
            top: it,
            bottom: nt,
            right: st,
            left: ot,
            auto: "auto",
            basePlacements: rt,
            start: "start",
            end: "end",
            clippingParents: "clippingParents",
            viewport: "viewport",
            popper: "popper",
            reference: "reference",
            variationPlacements: at,
            placements: lt,
            beforeRead: "beforeRead",
            read: "read",
            afterRead: "afterRead",
            beforeMain: "beforeMain",
            main: "main",
            afterMain: "afterMain",
            beforeWrite: "beforeWrite",
            write: "write",
            afterWrite: "afterWrite",
            modifierPhases: ct,
            applyStyles: mt,
            arrow: Nt,
            computeStyles: Pt,
            eventListeners: Rt,
            flip: Jt,
            hide: ie,
            offset: ne,
            popperOffsets: se,
            preventOverflow: oe
        });
    const pe = new RegExp("ArrowUp|ArrowDown|Escape"),
        me = g() ? "top-end" : "top-start",
        ge = g() ? "top-start" : "top-end",
        _e = g() ? "bottom-end" : "bottom-start",
        be = g() ? "bottom-start" : "bottom-end",
        ve = g() ? "left-start" : "right-start",
        ye = g() ? "right-start" : "left-start",
        we = {
            offset: [0, 2],
            boundary: "clippingParents",
            reference: "toggle",
            display: "dynamic",
            popperConfig: null,
            autoClose: !0
        },
        Ee = {
            offset: "(array|string|function)",
            boundary: "(string|element)",
            reference: "(string|element|object)",
            display: "string",
            popperConfig: "(null|object|function)",
            autoClose: "(boolean|string)"
        };
    class Ae extends B {
        constructor(t, e) {
            super(t), this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
        }
        static get Default() {
            return we
        }
        static get DefaultType() {
            return Ee
        }
        static get NAME() {
            return "dropdown"
        }
        toggle() {
            h(this._element) || (this._element.classList.contains("show") ? this.hide() : this.show())
        }
        show() {
            if (h(this._element) || this._menu.classList.contains("show")) return;
            const t = Ae.getParentFromElement(this._element),
                e = {
                    relatedTarget: this._element
                };
            if (!P.trigger(this._element, "show.bs.dropdown", e).defaultPrevented) {
                if (this._inNavbar) U.setDataAttribute(this._menu, "popper", "none");
                else {
                    if (void 0 === fe) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
                    let e = this._element;
                    "parent" === this._config.reference ? e = t : r(this._config.reference) ? e = a(this._config.reference) : "object" == typeof this._config.reference && (e = this._config.reference);
                    const i = this._getPopperConfig(),
                        n = i.modifiers.find(t => "applyStyles" === t.name && !1 === t.enabled);
                    this._popper = ue(e, this._menu, i), n && U.setDataAttribute(this._menu, "popper", "static")
                }
                "ontouchstart" in document.documentElement && !t.closest(".navbar-nav") && [].concat(...document.body.children).forEach(t => P.on(t, "mouseover", u)), this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.toggle("show"), this._element.classList.toggle("show"), P.trigger(this._element, "shown.bs.dropdown", e)
            }
        }
        hide() {
            if (h(this._element) || !this._menu.classList.contains("show")) return;
            const t = {
                relatedTarget: this._element
            };
            this._completeHide(t)
        }
        dispose() {
            this._popper && this._popper.destroy(), super.dispose()
        }
        update() {
            this._inNavbar = this._detectNavbar(), this._popper && this._popper.update()
        }
        _addEventListeners() {
            P.on(this._element, "click.bs.dropdown", t => {
                t.preventDefault(), this.toggle()
            })
        }
        _completeHide(t) {
            P.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented || ("ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach(t => P.off(t, "mouseover", u)), this._popper && this._popper.destroy(), this._menu.classList.remove("show"), this._element.classList.remove("show"), this._element.setAttribute("aria-expanded", "false"), U.removeDataAttribute(this._menu, "popper"), P.trigger(this._element, "hidden.bs.dropdown", t))
        }
        _getConfig(t) {
            if (t = { ...this.constructor.Default,
                    ...U.getDataAttributes(this._element),
                    ...t
                }, l("dropdown", t, this.constructor.DefaultType), "object" == typeof t.reference && !r(t.reference) && "function" != typeof t.reference.getBoundingClientRect) throw new TypeError("dropdown".toUpperCase() + ': Option "reference" provided type "object" without a required "getBoundingClientRect" method.');
            return t
        }
        _getMenuElement() {
            return t.next(this._element, ".dropdown-menu")[0]
        }
        _getPlacement() {
            const t = this._element.parentNode;
            if (t.classList.contains("dropend")) return ve;
            if (t.classList.contains("dropstart")) return ye;
            const e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
            return t.classList.contains("dropup") ? e ? ge : me : e ? be : _e
        }
        _detectNavbar() {
            return null !== this._element.closest(".navbar")
        }
        _getOffset() {
            const {
                offset: t
            } = this._config;
            return "string" == typeof t ? t.split(",").map(t => Number.parseInt(t, 10)) : "function" == typeof t ? e => t(e, this._element) : t
        }
        _getPopperConfig() {
            const t = {
                placement: this._getPlacement(),
                modifiers: [{
                    name: "preventOverflow",
                    options: {
                        boundary: this._config.boundary
                    }
                }, {
                    name: "offset",
                    options: {
                        offset: this._getOffset()
                    }
                }]
            };
            return "static" === this._config.display && (t.modifiers = [{
                name: "applyStyles",
                enabled: !1
            }]), { ...t,
                ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig
            }
        }
        _selectMenuItem({
            key: e,
            target: i
        }) {
            const n = t.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(c);
            n.length && y(n, i, "ArrowDown" === e, !n.includes(i)).focus()
        }
        static dropdownInterface(t, e) {
            const i = Ae.getOrCreateInstance(t, e);
            if ("string" == typeof e) {
                if (void 0 === i[e]) throw new TypeError(`No method named "${e}"`);
                i[e]()
            }
        }
        static jQueryInterface(t) {
            return this.each((function() {
                Ae.dropdownInterface(this, t)
            }))
        }
        static clearMenus(e) {
            if (e && (2 === e.button || "keyup" === e.type && "Tab" !== e.key)) return;
            const i = t.find('[data-bs-toggle="dropdown"]');
            for (let t = 0, n = i.length; t < n; t++) {
                const n = Ae.getInstance(i[t]);
                if (!n || !1 === n._config.autoClose) continue;
                if (!n._element.classList.contains("show")) continue;
                const s = {
                    relatedTarget: n._element
                };
                if (e) {
                    const t = e.composedPath(),
                        i = t.includes(n._menu);
                    if (t.includes(n._element) || "inside" === n._config.autoClose && !i || "outside" === n._config.autoClose && i) continue;
                    if (n._menu.contains(e.target) && ("keyup" === e.type && "Tab" === e.key || /input|select|option|textarea|form/i.test(e.target.tagName))) continue;
                    "click" === e.type && (s.clickEvent = e)
                }
                n._completeHide(s)
            }
        }
        static getParentFromElement(t) {
            return s(t) || t.parentNode
        }
        static dataApiKeydownHandler(e) {
            if (/input|textarea/i.test(e.target.tagName) ? "Space" === e.key || "Escape" !== e.key && ("ArrowDown" !== e.key && "ArrowUp" !== e.key || e.target.closest(".dropdown-menu")) : !pe.test(e.key)) return;
            const i = this.classList.contains("show");
            if (!i && "Escape" === e.key) return;
            if (e.preventDefault(), e.stopPropagation(), h(this)) return;
            const n = () => this.matches('[data-bs-toggle="dropdown"]') ? this : t.prev(this, '[data-bs-toggle="dropdown"]')[0];
            return "Escape" === e.key ? (n().focus(), void Ae.clearMenus()) : "ArrowUp" === e.key || "ArrowDown" === e.key ? (i || n().click(), void Ae.getInstance(n())._selectMenuItem(e)) : void(i && "Space" !== e.key || Ae.clearMenus())
        }
    }
    P.on(document, "keydown.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', Ae.dataApiKeydownHandler), P.on(document, "keydown.bs.dropdown.data-api", ".dropdown-menu", Ae.dataApiKeydownHandler), P.on(document, "click.bs.dropdown.data-api", Ae.clearMenus), P.on(document, "keyup.bs.dropdown.data-api", Ae.clearMenus), P.on(document, "click.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', (function(t) {
        t.preventDefault(), Ae.dropdownInterface(this)
    })), _(Ae);
    class Te {
        constructor() {
            this._element = document.body
        }
        getWidth() {
            const t = document.documentElement.clientWidth;
            return Math.abs(window.innerWidth - t)
        }
        hide() {
            const t = this.getWidth();
            this._disableOverFlow(), this._setElementAttributes(this._element, "paddingRight", e => e + t), this._setElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", "paddingRight", e => e + t), this._setElementAttributes(".sticky-top", "marginRight", e => e - t)
        }
        _disableOverFlow() {
            this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden"
        }
        _setElementAttributes(t, e, i) {
            const n = this.getWidth();
            this._applyManipulationCallback(t, t => {
                if (t !== this._element && window.innerWidth > t.clientWidth + n) return;
                this._saveInitialAttribute(t, e);
                const s = window.getComputedStyle(t)[e];
                t.style[e] = i(Number.parseFloat(s)) + "px"
            })
        }
        reset() {
            this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, "paddingRight"), this._resetElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", "paddingRight"), this._resetElementAttributes(".sticky-top", "marginRight")
        }
        _saveInitialAttribute(t, e) {
            const i = t.style[e];
            i && U.setDataAttribute(t, e, i)
        }
        _resetElementAttributes(t, e) {
            this._applyManipulationCallback(t, t => {
                const i = U.getDataAttribute(t, e);
                void 0 === i ? t.style.removeProperty(e) : (U.removeDataAttribute(t, e), t.style[e] = i)
            })
        }
        _applyManipulationCallback(e, i) {
            r(e) ? i(e) : t.find(e, this._element).forEach(i)
        }
        isOverflowing() {
            return this.getWidth() > 0
        }
    }
    const Oe = {
            isVisible: !0,
            isAnimated: !1,
            rootElement: "body",
            clickCallback: null
        },
        Ce = {
            isVisible: "boolean",
            isAnimated: "boolean",
            rootElement: "(element|string)",
            clickCallback: "(function|null)"
        };
    class ke {
        constructor(t) {
            this._config = this._getConfig(t), this._isAppended = !1, this._element = null
        }
        show(t) {
            this._config.isVisible ? (this._append(), this._config.isAnimated && f(this._getElement()), this._getElement().classList.add("show"), this._emulateAnimation(() => {
                b(t)
            })) : b(t)
        }
        hide(t) {
            this._config.isVisible ? (this._getElement().classList.remove("show"), this._emulateAnimation(() => {
                this.dispose(), b(t)
            })) : b(t)
        }
        _getElement() {
            if (!this._element) {
                const t = document.createElement("div");
                t.className = "modal-backdrop", this._config.isAnimated && t.classList.add("fade"), this._element = t
            }
            return this._element
        }
        _getConfig(t) {
            return (t = { ...Oe,
                ..."object" == typeof t ? t : {}
            }).rootElement = a(t.rootElement), l("backdrop", t, Ce), t
        }
        _append() {
            this._isAppended || (this._config.rootElement.appendChild(this._getElement()), P.on(this._getElement(), "mousedown.bs.backdrop", () => {
                b(this._config.clickCallback)
            }), this._isAppended = !0)
        }
        dispose() {
            this._isAppended && (P.off(this._element, "mousedown.bs.backdrop"), this._element.remove(), this._isAppended = !1)
        }
        _emulateAnimation(t) {
            v(t, this._getElement(), this._config.isAnimated)
        }
    }
    const Le = {
            backdrop: !0,
            keyboard: !0,
            focus: !0
        },
        xe = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean"
        };
    class De extends B {
        constructor(e, i) {
            super(e), this._config = this._getConfig(i), this._dialog = t.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._isShown = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollBar = new Te
        }
        static get Default() {
            return Le
        }
        static get NAME() {
            return "modal"
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t)
        }
        show(t) {
            this._isShown || this._isTransitioning || P.trigger(this._element, "show.bs.modal", {
                relatedTarget: t
            }).defaultPrevented || (this._isShown = !0, this._isAnimated() && (this._isTransitioning = !0), this._scrollBar.hide(), document.body.classList.add("modal-open"), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), P.on(this._element, "click.dismiss.bs.modal", '[data-bs-dismiss="modal"]', t => this.hide(t)), P.on(this._dialog, "mousedown.dismiss.bs.modal", () => {
                P.one(this._element, "mouseup.dismiss.bs.modal", t => {
                    t.target === this._element && (this._ignoreBackdropClick = !0)
                })
            }), this._showBackdrop(() => this._showElement(t)))
        }
        hide(t) {
            if (t && ["A", "AREA"].includes(t.target.tagName) && t.preventDefault(), !this._isShown || this._isTransitioning) return;
            if (P.trigger(this._element, "hide.bs.modal").defaultPrevented) return;
            this._isShown = !1;
            const e = this._isAnimated();
            e && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), P.off(document, "focusin.bs.modal"), this._element.classList.remove("show"), P.off(this._element, "click.dismiss.bs.modal"), P.off(this._dialog, "mousedown.dismiss.bs.modal"), this._queueCallback(() => this._hideModal(), this._element, e)
        }
        dispose() {
            [window, this._dialog].forEach(t => P.off(t, ".bs.modal")), this._backdrop.dispose(), super.dispose(), P.off(document, "focusin.bs.modal")
        }
        handleUpdate() {
            this._adjustDialog()
        }
        _initializeBackDrop() {
            return new ke({
                isVisible: Boolean(this._config.backdrop),
                isAnimated: this._isAnimated()
            })
        }
        _getConfig(t) {
            return t = { ...Le,
                ...U.getDataAttributes(this._element),
                ..."object" == typeof t ? t : {}
            }, l("modal", t, xe), t
        }
        _showElement(e) {
            const i = this._isAnimated(),
                n = t.findOne(".modal-body", this._dialog);
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0, n && (n.scrollTop = 0), i && f(this._element), this._element.classList.add("show"), this._config.focus && this._enforceFocus(), this._queueCallback(() => {
                this._config.focus && this._element.focus(), this._isTransitioning = !1, P.trigger(this._element, "shown.bs.modal", {
                    relatedTarget: e
                })
            }, this._dialog, i)
        }
        _enforceFocus() {
            P.off(document, "focusin.bs.modal"), P.on(document, "focusin.bs.modal", t => {
                document === t.target || this._element === t.target || this._element.contains(t.target) || this._element.focus()
            })
        }
        _setEscapeEvent() {
            this._isShown ? P.on(this._element, "keydown.dismiss.bs.modal", t => {
                this._config.keyboard && "Escape" === t.key ? (t.preventDefault(), this.hide()) : this._config.keyboard || "Escape" !== t.key || this._triggerBackdropTransition()
            }) : P.off(this._element, "keydown.dismiss.bs.modal")
        }
        _setResizeEvent() {
            this._isShown ? P.on(window, "resize.bs.modal", () => this._adjustDialog()) : P.off(window, "resize.bs.modal")
        }
        _hideModal() {
            this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(() => {
                document.body.classList.remove("modal-open"), this._resetAdjustments(), this._scrollBar.reset(), P.trigger(this._element, "hidden.bs.modal")
            })
        }
        _showBackdrop(t) {
            P.on(this._element, "click.dismiss.bs.modal", t => {
                this._ignoreBackdropClick ? this._ignoreBackdropClick = !1 : t.target === t.currentTarget && (!0 === this._config.backdrop ? this.hide() : "static" === this._config.backdrop && this._triggerBackdropTransition())
            }), this._backdrop.show(t)
        }
        _isAnimated() {
            return this._element.classList.contains("fade")
        }
        _triggerBackdropTransition() {
            if (P.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) return;
            const {
                classList: t,
                scrollHeight: e,
                style: i
            } = this._element, n = e > document.documentElement.clientHeight;
            !n && "hidden" === i.overflowY || t.contains("modal-static") || (n || (i.overflowY = "hidden"), t.add("modal-static"), this._queueCallback(() => {
                t.remove("modal-static"), n || this._queueCallback(() => {
                    i.overflowY = ""
                }, this._dialog)
            }, this._dialog), this._element.focus())
        }
        _adjustDialog() {
            const t = this._element.scrollHeight > document.documentElement.clientHeight,
                e = this._scrollBar.getWidth(),
                i = e > 0;
            (!i && t && !g() || i && !t && g()) && (this._element.style.paddingLeft = e + "px"), (i && !t && !g() || !i && t && g()) && (this._element.style.paddingRight = e + "px")
        }
        _resetAdjustments() {
            this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
        }
        static jQueryInterface(t, e) {
            return this.each((function() {
                const i = De.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
                    i[t](e)
                }
            }))
        }
    }
    P.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', (function(t) {
        const e = s(this);
        ["A", "AREA"].includes(this.tagName) && t.preventDefault(), P.one(e, "show.bs.modal", t => {
            t.defaultPrevented || P.one(e, "hidden.bs.modal", () => {
                c(this) && this.focus()
            })
        }), De.getOrCreateInstance(e).toggle(this)
    })), _(De);
    const Se = {
            backdrop: !0,
            keyboard: !0,
            scroll: !1
        },
        Ie = {
            backdrop: "boolean",
            keyboard: "boolean",
            scroll: "boolean"
        };
    class Ne extends B {
        constructor(t, e) {
            super(t), this._config = this._getConfig(e), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._addEventListeners()
        }
        static get NAME() {
            return "offcanvas"
        }
        static get Default() {
            return Se
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t)
        }
        show(t) {
            this._isShown || P.trigger(this._element, "show.bs.offcanvas", {
                relatedTarget: t
            }).defaultPrevented || (this._isShown = !0, this._element.style.visibility = "visible", this._backdrop.show(), this._config.scroll || ((new Te).hide(), this._enforceFocusOnElement(this._element)), this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add("show"), this._queueCallback(() => {
                P.trigger(this._element, "shown.bs.offcanvas", {
                    relatedTarget: t
                })
            }, this._element, !0))
        }
        hide() {
            this._isShown && (P.trigger(this._element, "hide.bs.offcanvas").defaultPrevented || (P.off(document, "focusin.bs.offcanvas"), this._element.blur(), this._isShown = !1, this._element.classList.remove("show"), this._backdrop.hide(), this._queueCallback(() => {
                this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._element.style.visibility = "hidden", this._config.scroll || (new Te).reset(), P.trigger(this._element, "hidden.bs.offcanvas")
            }, this._element, !0)))
        }
        dispose() {
            this._backdrop.dispose(), super.dispose(), P.off(document, "focusin.bs.offcanvas")
        }
        _getConfig(t) {
            return t = { ...Se,
                ...U.getDataAttributes(this._element),
                ..."object" == typeof t ? t : {}
            }, l("offcanvas", t, Ie), t
        }
        _initializeBackDrop() {
            return new ke({
                isVisible: this._config.backdrop,
                isAnimated: !0,
                rootElement: this._element.parentNode,
                clickCallback: () => this.hide()
            })
        }
        _enforceFocusOnElement(t) {
            P.off(document, "focusin.bs.offcanvas"), P.on(document, "focusin.bs.offcanvas", e => {
                document === e.target || t === e.target || t.contains(e.target) || t.focus()
            }), t.focus()
        }
        _addEventListeners() {
            P.on(this._element, "click.dismiss.bs.offcanvas", '[data-bs-dismiss="offcanvas"]', () => this.hide()), P.on(this._element, "keydown.dismiss.bs.offcanvas", t => {
                this._config.keyboard && "Escape" === t.key && this.hide()
            })
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = Ne.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                    e[t](this)
                }
            }))
        }
    }
    P.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', (function(e) {
        const i = s(this);
        if (["A", "AREA"].includes(this.tagName) && e.preventDefault(), h(this)) return;
        P.one(i, "hidden.bs.offcanvas", () => {
            c(this) && this.focus()
        });
        const n = t.findOne(".offcanvas.show");
        n && n !== i && Ne.getInstance(n).hide(), Ne.getOrCreateInstance(i).toggle(this)
    })), P.on(window, "load.bs.offcanvas.data-api", () => t.find(".offcanvas.show").forEach(t => Ne.getOrCreateInstance(t).show())), _(Ne);
    const je = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
        Me = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i,
        Pe = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
        He = (t, e) => {
            const i = t.nodeName.toLowerCase();
            if (e.includes(i)) return !je.has(i) || Boolean(Me.test(t.nodeValue) || Pe.test(t.nodeValue));
            const n = e.filter(t => t instanceof RegExp);
            for (let t = 0, e = n.length; t < e; t++)
                if (n[t].test(i)) return !0;
            return !1
        };

    function Re(t, e, i) {
        if (!t.length) return t;
        if (i && "function" == typeof i) return i(t);
        const n = (new window.DOMParser).parseFromString(t, "text/html"),
            s = Object.keys(e),
            o = [].concat(...n.body.querySelectorAll("*"));
        for (let t = 0, i = o.length; t < i; t++) {
            const i = o[t],
                n = i.nodeName.toLowerCase();
            if (!s.includes(n)) {
                i.remove();
                continue
            }
            const r = [].concat(...i.attributes),
                a = [].concat(e["*"] || [], e[n] || []);
            r.forEach(t => {
                He(t, a) || i.removeAttribute(t.nodeName)
            })
        }
        return n.body.innerHTML
    }
    const Be = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
        We = new Set(["sanitize", "allowList", "sanitizeFn"]),
        qe = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(array|string|function)",
            container: "(string|element|boolean)",
            fallbackPlacements: "array",
            boundary: "(string|element)",
            customClass: "(string|function)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            allowList: "object",
            popperConfig: "(null|object|function)"
        },
        ze = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: g() ? "left" : "right",
            BOTTOM: "bottom",
            LEFT: g() ? "right" : "left"
        },
        $e = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: [0, 0],
            container: !1,
            fallbackPlacements: ["top", "right", "bottom", "left"],
            boundary: "clippingParents",
            customClass: "",
            sanitize: !0,
            sanitizeFn: null,
            allowList: {
                "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                a: ["target", "href", "title", "rel"],
                area: [],
                b: [],
                br: [],
                col: [],
                code: [],
                div: [],
                em: [],
                hr: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                i: [],
                img: ["src", "srcset", "alt", "title", "width", "height"],
                li: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                small: [],
                span: [],
                sub: [],
                sup: [],
                strong: [],
                u: [],
                ul: []
            },
            popperConfig: null
        },
        Ue = {
            HIDE: "hide.bs.tooltip",
            HIDDEN: "hidden.bs.tooltip",
            SHOW: "show.bs.tooltip",
            SHOWN: "shown.bs.tooltip",
            INSERTED: "inserted.bs.tooltip",
            CLICK: "click.bs.tooltip",
            FOCUSIN: "focusin.bs.tooltip",
            FOCUSOUT: "focusout.bs.tooltip",
            MOUSEENTER: "mouseenter.bs.tooltip",
            MOUSELEAVE: "mouseleave.bs.tooltip"
        };
    class Fe extends B {
        constructor(t, e) {
            if (void 0 === fe) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
            super(t), this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this._config = this._getConfig(e), this.tip = null, this._setListeners()
        }
        static get Default() {
            return $e
        }
        static get NAME() {
            return "tooltip"
        }
        static get Event() {
            return Ue
        }
        static get DefaultType() {
            return qe
        }
        enable() {
            this._isEnabled = !0
        }
        disable() {
            this._isEnabled = !1
        }
        toggleEnabled() {
            this._isEnabled = !this._isEnabled
        }
        toggle(t) {
            if (this._isEnabled)
                if (t) {
                    const e = this._initializeOnDelegatedTarget(t);
                    e._activeTrigger.click = !e._activeTrigger.click, e._isWithActiveTrigger() ? e._enter(null, e) : e._leave(null, e)
                } else {
                    if (this.getTipElement().classList.contains("show")) return void this._leave(null, this);
                    this._enter(null, this)
                }
        }
        dispose() {
            clearTimeout(this._timeout), P.off(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this.tip && this.tip.remove(), this._popper && this._popper.destroy(), super.dispose()
        }
        show() {
            if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
            if (!this.isWithContent() || !this._isEnabled) return;
            const t = P.trigger(this._element, this.constructor.Event.SHOW),
                i = d(this._element),
                n = null === i ? this._element.ownerDocument.documentElement.contains(this._element) : i.contains(this._element);
            if (t.defaultPrevented || !n) return;
            const s = this.getTipElement(),
                o = e(this.constructor.NAME);
            s.setAttribute("id", o), this._element.setAttribute("aria-describedby", o), this.setContent(), this._config.animation && s.classList.add("fade");
            const r = "function" == typeof this._config.placement ? this._config.placement.call(this, s, this._element) : this._config.placement,
                a = this._getAttachment(r);
            this._addAttachmentClass(a);
            const {
                container: l
            } = this._config;
            R.set(s, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || (l.appendChild(s), P.trigger(this._element, this.constructor.Event.INSERTED)), this._popper ? this._popper.update() : this._popper = ue(this._element, s, this._getPopperConfig(a)), s.classList.add("show");
            const c = "function" == typeof this._config.customClass ? this._config.customClass() : this._config.customClass;
            c && s.classList.add(...c.split(" ")), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach(t => {
                P.on(t, "mouseover", u)
            });
            const h = this.tip.classList.contains("fade");
            this._queueCallback(() => {
                const t = this._hoverState;
                this._hoverState = null, P.trigger(this._element, this.constructor.Event.SHOWN), "out" === t && this._leave(null, this)
            }, this.tip, h)
        }
        hide() {
            if (!this._popper) return;
            const t = this.getTipElement();
            if (P.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) return;
            t.classList.remove("show"), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach(t => P.off(t, "mouseover", u)), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1;
            const e = this.tip.classList.contains("fade");
            this._queueCallback(() => {
                this._isWithActiveTrigger() || ("show" !== this._hoverState && t.remove(), this._cleanTipClass(), this._element.removeAttribute("aria-describedby"), P.trigger(this._element, this.constructor.Event.HIDDEN), this._popper && (this._popper.destroy(), this._popper = null))
            }, this.tip, e), this._hoverState = ""
        }
        update() {
            null !== this._popper && this._popper.update()
        }
        isWithContent() {
            return Boolean(this.getTitle())
        }
        getTipElement() {
            if (this.tip) return this.tip;
            const t = document.createElement("div");
            return t.innerHTML = this._config.template, this.tip = t.children[0], this.tip
        }
        setContent() {
            const e = this.getTipElement();
            this.setElementContent(t.findOne(".tooltip-inner", e), this.getTitle()), e.classList.remove("fade", "show")
        }
        setElementContent(t, e) {
            if (null !== t) return r(e) ? (e = a(e), void(this._config.html ? e.parentNode !== t && (t.innerHTML = "", t.appendChild(e)) : t.textContent = e.textContent)) : void(this._config.html ? (this._config.sanitize && (e = Re(e, this._config.allowList, this._config.sanitizeFn)), t.innerHTML = e) : t.textContent = e)
        }
        getTitle() {
            let t = this._element.getAttribute("data-bs-original-title");
            return t || (t = "function" == typeof this._config.title ? this._config.title.call(this._element) : this._config.title), t
        }
        updateAttachment(t) {
            return "right" === t ? "end" : "left" === t ? "start" : t
        }
        _initializeOnDelegatedTarget(t, e) {
            const i = this.constructor.DATA_KEY;
            return (e = e || R.get(t.delegateTarget, i)) || (e = new this.constructor(t.delegateTarget, this._getDelegateConfig()), R.set(t.delegateTarget, i, e)), e
        }
        _getOffset() {
            const {
                offset: t
            } = this._config;
            return "string" == typeof t ? t.split(",").map(t => Number.parseInt(t, 10)) : "function" == typeof t ? e => t(e, this._element) : t
        }
        _getPopperConfig(t) {
            const e = {
                placement: t,
                modifiers: [{
                    name: "flip",
                    options: {
                        fallbackPlacements: this._config.fallbackPlacements
                    }
                }, {
                    name: "offset",
                    options: {
                        offset: this._getOffset()
                    }
                }, {
                    name: "preventOverflow",
                    options: {
                        boundary: this._config.boundary
                    }
                }, {
                    name: "arrow",
                    options: {
                        element: `.${this.constructor.NAME}-arrow`
                    }
                }, {
                    name: "onChange",
                    enabled: !0,
                    phase: "afterWrite",
                    fn: t => this._handlePopperPlacementChange(t)
                }],
                onFirstUpdate: t => {
                    t.options.placement !== t.placement && this._handlePopperPlacementChange(t)
                }
            };
            return { ...e,
                ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig
            }
        }
        _addAttachmentClass(t) {
            this.getTipElement().classList.add("bs-tooltip-" + this.updateAttachment(t))
        }
        _getAttachment(t) {
            return ze[t.toUpperCase()]
        }
        _setListeners() {
            this._config.trigger.split(" ").forEach(t => {
                if ("click" === t) P.on(this._element, this.constructor.Event.CLICK, this._config.selector, t => this.toggle(t));
                else if ("manual" !== t) {
                    const e = "hover" === t ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN,
                        i = "hover" === t ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT;
                    P.on(this._element, e, this._config.selector, t => this._enter(t)), P.on(this._element, i, this._config.selector, t => this._leave(t))
                }
            }), this._hideModalHandler = () => {
                this._element && this.hide()
            }, P.on(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this._config.selector ? this._config = { ...this._config,
                trigger: "manual",
                selector: ""
            } : this._fixTitle()
        }
        _fixTitle() {
            const t = this._element.getAttribute("title"),
                e = typeof this._element.getAttribute("data-bs-original-title");
            (t || "string" !== e) && (this._element.setAttribute("data-bs-original-title", t || ""), !t || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", t), this._element.setAttribute("title", ""))
        }
        _enter(t, e) {
            e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0), e.getTipElement().classList.contains("show") || "show" === e._hoverState ? e._hoverState = "show" : (clearTimeout(e._timeout), e._hoverState = "show", e._config.delay && e._config.delay.show ? e._timeout = setTimeout(() => {
                "show" === e._hoverState && e.show()
            }, e._config.delay.show) : e.show())
        }
        _leave(t, e) {
            e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusout" === t.type ? "focus" : "hover"] = e._element.contains(t.relatedTarget)), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = "out", e._config.delay && e._config.delay.hide ? e._timeout = setTimeout(() => {
                "out" === e._hoverState && e.hide()
            }, e._config.delay.hide) : e.hide())
        }
        _isWithActiveTrigger() {
            for (const t in this._activeTrigger)
                if (this._activeTrigger[t]) return !0;
            return !1
        }
        _getConfig(t) {
            const e = U.getDataAttributes(this._element);
            return Object.keys(e).forEach(t => {
                We.has(t) && delete e[t]
            }), (t = { ...this.constructor.Default,
                ...e,
                ..."object" == typeof t && t ? t : {}
            }).container = !1 === t.container ? document.body : a(t.container), "number" == typeof t.delay && (t.delay = {
                show: t.delay,
                hide: t.delay
            }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), l("tooltip", t, this.constructor.DefaultType), t.sanitize && (t.template = Re(t.template, t.allowList, t.sanitizeFn)), t
        }
        _getDelegateConfig() {
            const t = {};
            if (this._config)
                for (const e in this._config) this.constructor.Default[e] !== this._config[e] && (t[e] = this._config[e]);
            return t
        }
        _cleanTipClass() {
            const t = this.getTipElement(),
                e = t.getAttribute("class").match(Be);
            null !== e && e.length > 0 && e.map(t => t.trim()).forEach(e => t.classList.remove(e))
        }
        _handlePopperPlacementChange(t) {
            const {
                state: e
            } = t;
            e && (this.tip = e.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(e.placement)))
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = Fe.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }))
        }
    }
    _(Fe);
    const Ve = new RegExp("(^|\\s)bs-popover\\S+", "g"),
        Ke = { ...Fe.Default,
            placement: "right",
            offset: [0, 8],
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        },
        Xe = { ...Fe.DefaultType,
            content: "(string|element|function)"
        },
        Ye = {
            HIDE: "hide.bs.popover",
            HIDDEN: "hidden.bs.popover",
            SHOW: "show.bs.popover",
            SHOWN: "shown.bs.popover",
            INSERTED: "inserted.bs.popover",
            CLICK: "click.bs.popover",
            FOCUSIN: "focusin.bs.popover",
            FOCUSOUT: "focusout.bs.popover",
            MOUSEENTER: "mouseenter.bs.popover",
            MOUSELEAVE: "mouseleave.bs.popover"
        };
    class Qe extends Fe {
        static get Default() {
            return Ke
        }
        static get NAME() {
            return "popover"
        }
        static get Event() {
            return Ye
        }
        static get DefaultType() {
            return Xe
        }
        isWithContent() {
            return this.getTitle() || this._getContent()
        }
        getTipElement() {
            return this.tip || (this.tip = super.getTipElement(), this.getTitle() || t.findOne(".popover-header", this.tip).remove(), this._getContent() || t.findOne(".popover-body", this.tip).remove()), this.tip
        }
        setContent() {
            const e = this.getTipElement();
            this.setElementContent(t.findOne(".popover-header", e), this.getTitle());
            let i = this._getContent();
            "function" == typeof i && (i = i.call(this._element)), this.setElementContent(t.findOne(".popover-body", e), i), e.classList.remove("fade", "show")
        }
        _addAttachmentClass(t) {
            this.getTipElement().classList.add("bs-popover-" + this.updateAttachment(t))
        }
        _getContent() {
            return this._element.getAttribute("data-bs-content") || this._config.content
        }
        _cleanTipClass() {
            const t = this.getTipElement(),
                e = t.getAttribute("class").match(Ve);
            null !== e && e.length > 0 && e.map(t => t.trim()).forEach(e => t.classList.remove(e))
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = Qe.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }))
        }
    }
    _(Qe);
    const Ge = {
            offset: 10,
            method: "auto",
            target: ""
        },
        Ze = {
            offset: "number",
            method: "string",
            target: "(string|element)"
        };
    class Je extends B {
        constructor(t, e) {
            super(t), this._scrollElement = "BODY" === this._element.tagName ? window : this._element, this._config = this._getConfig(e), this._selector = `${this._config.target} .nav-link, ${this._config.target} .list-group-item, ${this._config.target} .dropdown-item`, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, P.on(this._scrollElement, "scroll.bs.scrollspy", () => this._process()), this.refresh(), this._process()
        }
        static get Default() {
            return Ge
        }
        static get NAME() {
            return "scrollspy"
        }
        refresh() {
            const e = this._scrollElement === this._scrollElement.window ? "offset" : "position",
                i = "auto" === this._config.method ? e : this._config.method,
                s = "position" === i ? this._getScrollTop() : 0;
            this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), t.find(this._selector).map(e => {
                const o = n(e),
                    r = o ? t.findOne(o) : null;
                if (r) {
                    const t = r.getBoundingClientRect();
                    if (t.width || t.height) return [U[i](r).top + s, o]
                }
                return null
            }).filter(t => t).sort((t, e) => t[0] - e[0]).forEach(t => {
                this._offsets.push(t[0]), this._targets.push(t[1])
            })
        }
        dispose() {
            P.off(this._scrollElement, ".bs.scrollspy"), super.dispose()
        }
        _getConfig(t) {
            if ("string" != typeof(t = { ...Ge,
                    ...U.getDataAttributes(this._element),
                    ..."object" == typeof t && t ? t : {}
                }).target && r(t.target)) {
                let {
                    id: i
                } = t.target;
                i || (i = e("scrollspy"), t.target.id = i), t.target = "#" + i
            }
            return l("scrollspy", t, Ze), t
        }
        _getScrollTop() {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
        }
        _getScrollHeight() {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
        }
        _getOffsetHeight() {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
        }
        _process() {
            const t = this._getScrollTop() + this._config.offset,
                e = this._getScrollHeight(),
                i = this._config.offset + e - this._getOffsetHeight();
            if (this._scrollHeight !== e && this.refresh(), t >= i) {
                const t = this._targets[this._targets.length - 1];
                this._activeTarget !== t && this._activate(t)
            } else {
                if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                for (let e = this._offsets.length; e--;) this._activeTarget !== this._targets[e] && t >= this._offsets[e] && (void 0 === this._offsets[e + 1] || t < this._offsets[e + 1]) && this._activate(this._targets[e])
            }
        }
        _activate(e) {
            this._activeTarget = e, this._clear();
            const i = this._selector.split(",").map(t => `${t}[data-bs-target="${e}"],${t}[href="${e}"]`),
                n = t.findOne(i.join(","));
            n.classList.contains("dropdown-item") ? (t.findOne(".dropdown-toggle", n.closest(".dropdown")).classList.add("active"), n.classList.add("active")) : (n.classList.add("active"), t.parents(n, ".nav, .list-group").forEach(e => {
                t.prev(e, ".nav-link, .list-group-item").forEach(t => t.classList.add("active")), t.prev(e, ".nav-item").forEach(e => {
                    t.children(e, ".nav-link").forEach(t => t.classList.add("active"))
                })
            })), P.trigger(this._scrollElement, "activate.bs.scrollspy", {
                relatedTarget: e
            })
        }
        _clear() {
            t.find(this._selector).filter(t => t.classList.contains("active")).forEach(t => t.classList.remove("active"))
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = Je.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }))
        }
    }
    P.on(window, "load.bs.scrollspy.data-api", () => {
        t.find('[data-bs-spy="scroll"]').forEach(t => new Je(t))
    }), _(Je);
    class ti extends B {
        static get NAME() {
            return "tab"
        }
        show() {
            if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains("active")) return;
            let e;
            const i = s(this._element),
                n = this._element.closest(".nav, .list-group");
            if (n) {
                const i = "UL" === n.nodeName || "OL" === n.nodeName ? ":scope > li > .active" : ".active";
                e = t.find(i, n), e = e[e.length - 1]
            }
            const o = e ? P.trigger(e, "hide.bs.tab", {
                relatedTarget: this._element
            }) : null;
            if (P.trigger(this._element, "show.bs.tab", {
                    relatedTarget: e
                }).defaultPrevented || null !== o && o.defaultPrevented) return;
            this._activate(this._element, n);
            const r = () => {
                P.trigger(e, "hidden.bs.tab", {
                    relatedTarget: this._element
                }), P.trigger(this._element, "shown.bs.tab", {
                    relatedTarget: e
                })
            };
            i ? this._activate(i, i.parentNode, r) : r()
        }
        _activate(e, i, n) {
            const s = (!i || "UL" !== i.nodeName && "OL" !== i.nodeName ? t.children(i, ".active") : t.find(":scope > li > .active", i))[0],
                o = n && s && s.classList.contains("fade"),
                r = () => this._transitionComplete(e, s, n);
            s && o ? (s.classList.remove("show"), this._queueCallback(r, e, !0)) : r()
        }
        _transitionComplete(e, i, n) {
            if (i) {
                i.classList.remove("active");
                const e = t.findOne(":scope > .dropdown-menu .active", i.parentNode);
                e && e.classList.remove("active"), "tab" === i.getAttribute("role") && i.setAttribute("aria-selected", !1)
            }
            e.classList.add("active"), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), f(e), e.classList.contains("fade") && e.classList.add("show");
            let s = e.parentNode;
            if (s && "LI" === s.nodeName && (s = s.parentNode), s && s.classList.contains("dropdown-menu")) {
                const i = e.closest(".dropdown");
                i && t.find(".dropdown-toggle", i).forEach(t => t.classList.add("active")), e.setAttribute("aria-expanded", !0)
            }
            n && n()
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = ti.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }))
        }
    }
    P.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', (function(t) {
        ["A", "AREA"].includes(this.tagName) && t.preventDefault(), h(this) || ti.getOrCreateInstance(this).show()
    })), _(ti);
    const ei = {
            animation: "boolean",
            autohide: "boolean",
            delay: "number"
        },
        ii = {
            animation: !0,
            autohide: !0,
            delay: 5e3
        };
    class ni extends B {
        constructor(t, e) {
            super(t), this._config = this._getConfig(e), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners()
        }
        static get DefaultType() {
            return ei
        }
        static get Default() {
            return ii
        }
        static get NAME() {
            return "toast"
        }
        show() {
            P.trigger(this._element, "show.bs.toast").defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove("hide"), f(this._element), this._element.classList.add("showing"), this._queueCallback(() => {
                this._element.classList.remove("showing"), this._element.classList.add("show"), P.trigger(this._element, "shown.bs.toast"), this._maybeScheduleHide()
            }, this._element, this._config.animation))
        }
        hide() {
            this._element.classList.contains("show") && (P.trigger(this._element, "hide.bs.toast").defaultPrevented || (this._element.classList.remove("show"), this._queueCallback(() => {
                this._element.classList.add("hide"), P.trigger(this._element, "hidden.bs.toast")
            }, this._element, this._config.animation)))
        }
        dispose() {
            this._clearTimeout(), this._element.classList.contains("show") && this._element.classList.remove("show"), super.dispose()
        }
        _getConfig(t) {
            return t = { ...ii,
                ...U.getDataAttributes(this._element),
                ..."object" == typeof t && t ? t : {}
            }, l("toast", t, this.constructor.DefaultType), t
        }
        _maybeScheduleHide() {
            this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(() => {
                this.hide()
            }, this._config.delay)))
        }
        _onInteraction(t, e) {
            switch (t.type) {
                case "mouseover":
                case "mouseout":
                    this._hasMouseInteraction = e;
                    break;
                case "focusin":
                case "focusout":
                    this._hasKeyboardInteraction = e
            }
            if (e) return void this._clearTimeout();
            const i = t.relatedTarget;
            this._element === i || this._element.contains(i) || this._maybeScheduleHide()
        }
        _setListeners() {
            P.on(this._element, "click.dismiss.bs.toast", '[data-bs-dismiss="toast"]', () => this.hide()), P.on(this._element, "mouseover.bs.toast", t => this._onInteraction(t, !0)), P.on(this._element, "mouseout.bs.toast", t => this._onInteraction(t, !1)), P.on(this._element, "focusin.bs.toast", t => this._onInteraction(t, !0)), P.on(this._element, "focusout.bs.toast", t => this._onInteraction(t, !1))
        }
        _clearTimeout() {
            clearTimeout(this._timeout), this._timeout = null
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = ni.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t](this)
                }
            }))
        }
    }
    return _(ni), {
        Alert: W,
        Button: q,
        Carousel: Z,
        Collapse: et,
        Dropdown: Ae,
        Modal: De,
        Offcanvas: Ne,
        Popover: Qe,
        ScrollSpy: Je,
        Tab: ti,
        Toast: ni,
        Tooltip: Fe
    }
}));
//# sourceMappingURL=bootstrap.bundle.min.js.map

/*!
 * circletype 2.3.2
 * A JavaScript library that lets you curve type on the web.
 * Copyright © 2014-2020 Peter Hrynkow
 * Licensed MIT
 * https://github.com/peterhry/CircleType#readme
 */
! function(t, n) {
    "object" == typeof exports && "object" == typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define([], n) : "object" == typeof exports ? exports.CircleType = n() : t.CircleType = n()
}(window, (function() {
    return function(t) {
        var n = {};

        function e(r) {
            if (n[r]) return n[r].exports;
            var i = n[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return t[r].call(i.exports, i, i.exports, e), i.l = !0, i.exports
        }
        return e.m = t, e.c = n, e.d = function(t, n, r) {
            e.o(t, n) || Object.defineProperty(t, n, {
                enumerable: !0,
                get: r
            })
        }, e.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }, e.t = function(t, n) {
            if (1 & n && (t = e(t)), 8 & n) return t;
            if (4 & n && "object" == typeof t && t && t.__esModule) return t;
            var r = Object.create(null);
            if (e.r(r), Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: t
                }), 2 & n && "string" != typeof t)
                for (var i in t) e.d(r, i, function(n) {
                    return t[n]
                }.bind(null, i));
            return r
        }, e.n = function(t) {
            var n = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return e.d(n, "a", n), n
        }, e.o = function(t, n) {
            return Object.prototype.hasOwnProperty.call(t, n)
        }, e.p = "", e(e.s = 28)
    }([function(t, n, e) {
        var r = e(13)("wks"),
            i = e(12),
            o = e(1).Symbol,
            u = "function" == typeof o;
        (t.exports = function(t) {
            return r[t] || (r[t] = u && o[t] || (u ? o : i)("Symbol." + t))
        }).store = r
    }, function(t, n) {
        var e = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = e)
    }, function(t, n) {
        var e = t.exports = {
            version: "2.6.11"
        };
        "number" == typeof __e && (__e = e)
    }, function(t, n, e) {
        var r = e(4),
            i = e(11);
        t.exports = e(6) ? function(t, n, e) {
            return r.f(t, n, i(1, e))
        } : function(t, n, e) {
            return t[n] = e, t
        }
    }, function(t, n, e) {
        var r = e(5),
            i = e(33),
            o = e(34),
            u = Object.defineProperty;
        n.f = e(6) ? Object.defineProperty : function(t, n, e) {
            if (r(t), n = o(n, !0), r(e), i) try {
                return u(t, n, e)
            } catch (t) {}
            if ("get" in e || "set" in e) throw TypeError("Accessors not supported!");
            return "value" in e && (t[n] = e.value), t
        }
    }, function(t, n, e) {
        var r = e(10);
        t.exports = function(t) {
            if (!r(t)) throw TypeError(t + " is not an object!");
            return t
        }
    }, function(t, n, e) {
        t.exports = !e(18)((function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7
                }
            }).a
        }))
    }, function(t, n) {
        var e = {}.hasOwnProperty;
        t.exports = function(t, n) {
            return e.call(t, n)
        }
    }, function(t, n) {
        var e = Math.ceil,
            r = Math.floor;
        t.exports = function(t) {
            return isNaN(t = +t) ? 0 : (t > 0 ? r : e)(t)
        }
    }, function(t, n) {
        t.exports = function(t) {
            if (null == t) throw TypeError("Can't call method on  " + t);
            return t
        }
    }, function(t, n) {
        t.exports = function(t) {
            return "object" == typeof t ? null !== t : "function" == typeof t
        }
    }, function(t, n) {
        t.exports = function(t, n) {
            return {
                enumerable: !(1 & t),
                configurable: !(2 & t),
                writable: !(4 & t),
                value: n
            }
        }
    }, function(t, n) {
        var e = 0,
            r = Math.random();
        t.exports = function(t) {
            return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++e + r).toString(36))
        }
    }, function(t, n, e) {
        var r = e(2),
            i = e(1),
            o = i["__core-js_shared__"] || (i["__core-js_shared__"] = {});
        (t.exports = function(t, n) {
            return o[t] || (o[t] = void 0 !== n ? n : {})
        })("versions", []).push({
            version: r.version,
            mode: e(16) ? "pure" : "global",
            copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
        })
    }, function(t, n) {
        t.exports = {}
    }, function(t, n, e) {
        var r = e(13)("keys"),
            i = e(12);
        t.exports = function(t) {
            return r[t] || (r[t] = i(t))
        }
    }, function(t, n) {
        t.exports = !1
    }, function(t, n, e) {
        var r = e(1),
            i = e(2),
            o = e(3),
            u = e(20),
            c = e(21),
            a = function(t, n, e) {
                var f, s, l, p, h = t & a.F,
                    v = t & a.G,
                    d = t & a.S,
                    y = t & a.P,
                    m = t & a.B,
                    g = v ? r : d ? r[n] || (r[n] = {}) : (r[n] || {}).prototype,
                    _ = v ? i : i[n] || (i[n] = {}),
                    x = _.prototype || (_.prototype = {});
                for (f in v && (e = n), e) l = ((s = !h && g && void 0 !== g[f]) ? g : e)[f], p = m && s ? c(l, r) : y && "function" == typeof l ? c(Function.call, l) : l, g && u(g, f, l, t & a.U), _[f] != l && o(_, f, p), y && x[f] != l && (x[f] = l)
            };
        r.core = i, a.F = 1, a.G = 2, a.S = 4, a.P = 8, a.B = 16, a.W = 32, a.U = 64, a.R = 128, t.exports = a
    }, function(t, n) {
        t.exports = function(t) {
            try {
                return !!t()
            } catch (t) {
                return !0
            }
        }
    }, function(t, n, e) {
        var r = e(10),
            i = e(1).document,
            o = r(i) && r(i.createElement);
        t.exports = function(t) {
            return o ? i.createElement(t) : {}
        }
    }, function(t, n, e) {
        var r = e(1),
            i = e(3),
            o = e(7),
            u = e(12)("src"),
            c = e(35),
            a = ("" + c).split("toString");
        e(2).inspectSource = function(t) {
            return c.call(t)
        }, (t.exports = function(t, n, e, c) {
            var f = "function" == typeof e;
            f && (o(e, "name") || i(e, "name", n)), t[n] !== e && (f && (o(e, u) || i(e, u, t[n] ? "" + t[n] : a.join(String(n)))), t === r ? t[n] = e : c ? t[n] ? t[n] = e : i(t, n, e) : (delete t[n], i(t, n, e)))
        })(Function.prototype, "toString", (function() {
            return "function" == typeof this && this[u] || c.call(this)
        }))
    }, function(t, n, e) {
        var r = e(36);
        t.exports = function(t, n, e) {
            if (r(t), void 0 === n) return t;
            switch (e) {
                case 1:
                    return function(e) {
                        return t.call(n, e)
                    };
                case 2:
                    return function(e, r) {
                        return t.call(n, e, r)
                    };
                case 3:
                    return function(e, r, i) {
                        return t.call(n, e, r, i)
                    }
            }
            return function() {
                return t.apply(n, arguments)
            }
        }
    }, function(t, n, e) {
        var r = e(42),
            i = e(9);
        t.exports = function(t) {
            return r(i(t))
        }
    }, function(t, n) {
        var e = {}.toString;
        t.exports = function(t) {
            return e.call(t).slice(8, -1)
        }
    }, function(t, n, e) {
        var r = e(8),
            i = Math.min;
        t.exports = function(t) {
            return t > 0 ? i(r(t), 9007199254740991) : 0
        }
    }, function(t, n) {
        t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    }, function(t, n, e) {
        var r = e(4).f,
            i = e(7),
            o = e(0)("toStringTag");
        t.exports = function(t, n, e) {
            t && !i(t = e ? t : t.prototype, o) && r(t, o, {
                configurable: !0,
                value: n
            })
        }
    }, function(t, n, e) {
        var r = e(9);
        t.exports = function(t) {
            return Object(r(t))
        }
    }, function(t, n, e) {
        e(29);
        var r = e(54).default;
        t.exports = r
    }, function(t, n, e) {
        e(30), e(47), t.exports = e(2).Array.from
    }, function(t, n, e) {
        "use strict";
        var r = e(31)(!0);
        e(32)(String, "String", (function(t) {
            this._t = String(t), this._i = 0
        }), (function() {
            var t, n = this._t,
                e = this._i;
            return e >= n.length ? {
                value: void 0,
                done: !0
            } : (t = r(n, e), this._i += t.length, {
                value: t,
                done: !1
            })
        }))
    }, function(t, n, e) {
        var r = e(8),
            i = e(9);
        t.exports = function(t) {
            return function(n, e) {
                var o, u, c = String(i(n)),
                    a = r(e),
                    f = c.length;
                return a < 0 || a >= f ? t ? "" : void 0 : (o = c.charCodeAt(a)) < 55296 || o > 56319 || a + 1 === f || (u = c.charCodeAt(a + 1)) < 56320 || u > 57343 ? t ? c.charAt(a) : o : t ? c.slice(a, a + 2) : u - 56320 + (o - 55296 << 10) + 65536
            }
        }
    }, function(t, n, e) {
        "use strict";
        var r = e(16),
            i = e(17),
            o = e(20),
            u = e(3),
            c = e(14),
            a = e(37),
            f = e(26),
            s = e(46),
            l = e(0)("iterator"),
            p = !([].keys && "next" in [].keys()),
            h = function() {
                return this
            };
        t.exports = function(t, n, e, v, d, y, m) {
            a(e, n, v);
            var g, _, x, b = function(t) {
                    if (!p && t in S) return S[t];
                    switch (t) {
                        case "keys":
                        case "values":
                            return function() {
                                return new e(this, t)
                            }
                    }
                    return function() {
                        return new e(this, t)
                    }
                },
                w = n + " Iterator",
                O = "values" == d,
                j = !1,
                S = t.prototype,
                M = S[l] || S["@@iterator"] || d && S[d],
                T = M || b(d),
                P = d ? O ? b("entries") : T : void 0,
                A = "Array" == n && S.entries || M;
            if (A && (x = s(A.call(new t))) !== Object.prototype && x.next && (f(x, w, !0), r || "function" == typeof x[l] || u(x, l, h)), O && M && "values" !== M.name && (j = !0, T = function() {
                    return M.call(this)
                }), r && !m || !p && !j && S[l] || u(S, l, T), c[n] = T, c[w] = h, d)
                if (g = {
                        values: O ? T : b("values"),
                        keys: y ? T : b("keys"),
                        entries: P
                    }, m)
                    for (_ in g) _ in S || o(S, _, g[_]);
                else i(i.P + i.F * (p || j), n, g);
            return g
        }
    }, function(t, n, e) {
        t.exports = !e(6) && !e(18)((function() {
            return 7 != Object.defineProperty(e(19)("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        }))
    }, function(t, n, e) {
        var r = e(10);
        t.exports = function(t, n) {
            if (!r(t)) return t;
            var e, i;
            if (n && "function" == typeof(e = t.toString) && !r(i = e.call(t))) return i;
            if ("function" == typeof(e = t.valueOf) && !r(i = e.call(t))) return i;
            if (!n && "function" == typeof(e = t.toString) && !r(i = e.call(t))) return i;
            throw TypeError("Can't convert object to primitive value")
        }
    }, function(t, n, e) {
        t.exports = e(13)("native-function-to-string", Function.toString)
    }, function(t, n) {
        t.exports = function(t) {
            if ("function" != typeof t) throw TypeError(t + " is not a function!");
            return t
        }
    }, function(t, n, e) {
        "use strict";
        var r = e(38),
            i = e(11),
            o = e(26),
            u = {};
        e(3)(u, e(0)("iterator"), (function() {
            return this
        })), t.exports = function(t, n, e) {
            t.prototype = r(u, {
                next: i(1, e)
            }), o(t, n + " Iterator")
        }
    }, function(t, n, e) {
        var r = e(5),
            i = e(39),
            o = e(25),
            u = e(15)("IE_PROTO"),
            c = function() {},
            a = function() {
                var t, n = e(19)("iframe"),
                    r = o.length;
                for (n.style.display = "none", e(45).appendChild(n), n.src = "javascript:", (t = n.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), a = t.F; r--;) delete a.prototype[o[r]];
                return a()
            };
        t.exports = Object.create || function(t, n) {
            var e;
            return null !== t ? (c.prototype = r(t), e = new c, c.prototype = null, e[u] = t) : e = a(), void 0 === n ? e : i(e, n)
        }
    }, function(t, n, e) {
        var r = e(4),
            i = e(5),
            o = e(40);
        t.exports = e(6) ? Object.defineProperties : function(t, n) {
            i(t);
            for (var e, u = o(n), c = u.length, a = 0; c > a;) r.f(t, e = u[a++], n[e]);
            return t
        }
    }, function(t, n, e) {
        var r = e(41),
            i = e(25);
        t.exports = Object.keys || function(t) {
            return r(t, i)
        }
    }, function(t, n, e) {
        var r = e(7),
            i = e(22),
            o = e(43)(!1),
            u = e(15)("IE_PROTO");
        t.exports = function(t, n) {
            var e, c = i(t),
                a = 0,
                f = [];
            for (e in c) e != u && r(c, e) && f.push(e);
            for (; n.length > a;) r(c, e = n[a++]) && (~o(f, e) || f.push(e));
            return f
        }
    }, function(t, n, e) {
        var r = e(23);
        t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
            return "String" == r(t) ? t.split("") : Object(t)
        }
    }, function(t, n, e) {
        var r = e(22),
            i = e(24),
            o = e(44);
        t.exports = function(t) {
            return function(n, e, u) {
                var c, a = r(n),
                    f = i(a.length),
                    s = o(u, f);
                if (t && e != e) {
                    for (; f > s;)
                        if ((c = a[s++]) != c) return !0
                } else
                    for (; f > s; s++)
                        if ((t || s in a) && a[s] === e) return t || s || 0;
                return !t && -1
            }
        }
    }, function(t, n, e) {
        var r = e(8),
            i = Math.max,
            o = Math.min;
        t.exports = function(t, n) {
            return (t = r(t)) < 0 ? i(t + n, 0) : o(t, n)
        }
    }, function(t, n, e) {
        var r = e(1).document;
        t.exports = r && r.documentElement
    }, function(t, n, e) {
        var r = e(7),
            i = e(27),
            o = e(15)("IE_PROTO"),
            u = Object.prototype;
        t.exports = Object.getPrototypeOf || function(t) {
            return t = i(t), r(t, o) ? t[o] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? u : null
        }
    }, function(t, n, e) {
        "use strict";
        var r = e(21),
            i = e(17),
            o = e(27),
            u = e(48),
            c = e(49),
            a = e(24),
            f = e(50),
            s = e(51);
        i(i.S + i.F * !e(53)((function(t) {
            Array.from(t)
        })), "Array", {
            from: function(t) {
                var n, e, i, l, p = o(t),
                    h = "function" == typeof this ? this : Array,
                    v = arguments.length,
                    d = v > 1 ? arguments[1] : void 0,
                    y = void 0 !== d,
                    m = 0,
                    g = s(p);
                if (y && (d = r(d, v > 2 ? arguments[2] : void 0, 2)), null == g || h == Array && c(g))
                    for (e = new h(n = a(p.length)); n > m; m++) f(e, m, y ? d(p[m], m) : p[m]);
                else
                    for (l = g.call(p), e = new h; !(i = l.next()).done; m++) f(e, m, y ? u(l, d, [i.value, m], !0) : i.value);
                return e.length = m, e
            }
        })
    }, function(t, n, e) {
        var r = e(5);
        t.exports = function(t, n, e, i) {
            try {
                return i ? n(r(e)[0], e[1]) : n(e)
            } catch (n) {
                var o = t.return;
                throw void 0 !== o && r(o.call(t)), n
            }
        }
    }, function(t, n, e) {
        var r = e(14),
            i = e(0)("iterator"),
            o = Array.prototype;
        t.exports = function(t) {
            return void 0 !== t && (r.Array === t || o[i] === t)
        }
    }, function(t, n, e) {
        "use strict";
        var r = e(4),
            i = e(11);
        t.exports = function(t, n, e) {
            n in t ? r.f(t, n, i(0, e)) : t[n] = e
        }
    }, function(t, n, e) {
        var r = e(52),
            i = e(0)("iterator"),
            o = e(14);
        t.exports = e(2).getIteratorMethod = function(t) {
            if (null != t) return t[i] || t["@@iterator"] || o[r(t)]
        }
    }, function(t, n, e) {
        var r = e(23),
            i = e(0)("toStringTag"),
            o = "Arguments" == r(function() {
                return arguments
            }());
        t.exports = function(t) {
            var n, e, u;
            return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(e = function(t, n) {
                try {
                    return t[n]
                } catch (t) {}
            }(n = Object(t), i)) ? e : o ? r(n) : "Object" == (u = r(n)) && "function" == typeof n.callee ? "Arguments" : u
        }
    }, function(t, n, e) {
        var r = e(0)("iterator"),
            i = !1;
        try {
            var o = [7][r]();
            o.return = function() {
                i = !0
            }, Array.from(o, (function() {
                throw 2
            }))
        } catch (t) {}
        t.exports = function(t, n) {
            if (!n && !i) return !1;
            var e = !1;
            try {
                var o = [7],
                    u = o[r]();
                u.next = function() {
                    return {
                        done: e = !0
                    }
                }, o[r] = function() {
                    return u
                }, t(o)
            } catch (t) {}
            return e
        }
    }, function(t, n, e) {
        "use strict";
        e.r(n);
        var r = function(t) {
            var n = t.getBoundingClientRect();
            return {
                height: n.height,
                left: n.left + window.pageXOffset,
                top: n.top + window.pageYOffset,
                width: n.width
            }
        };

        function i(t) {
            return function(t) {
                if (Array.isArray(t)) {
                    for (var n = 0, e = new Array(t.length); n < t.length; n++) e[n] = t[n];
                    return e
                }
            }(t) || function(t) {
                if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
            }(t) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }
        var o = Math.PI / 180,
            u = function(t) {
                return t * o
            },
            c = function(t, n) {
                return t * (1 - Math.cos(u(n / 2)))
            },
            a = 180 / Math.PI,
            f = function(t, n) {
                return t.reduce((function(t, e) {
                    var r = e.width,
                        i = r / n * a;
                    return {
                        "θ": t.θ + i,
                        rotations: t.rotations.concat([t.θ + i / 2])
                    }
                }), {
                    "θ": 0,
                    rotations: []
                })
            };

        function s(t, n) {
            for (var e = 0; e < n.length; e++) {
                var r = n[e];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }
        var l = Math.PI,
            p = Math.max,
            h = Math.min,
            v = function() {
                function t(n, e) {
                    ! function(t, n) {
                        if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.element = n, this.originalHTML = this.element.innerHTML;
                    var o = document.createElement("div"),
                        u = document.createDocumentFragment();
                    o.setAttribute("aria-label", n.innerText), o.style.position = "relative", this.container = o, this._letters = function(t, n) {
                        var e = document.createElement("span");
                        e.style.display = "inline-block";
                        var r = t.innerText.trim();
                        return (n ? n(r) : i(r)).map((function(t) {
                            var n = e.cloneNode();
                            return n.insertAdjacentHTML("afterbegin", " " === t ? "&nbsp;" : t), n
                        }))
                    }(n, e), this._letters.forEach((function(t) {
                        return u.appendChild(t)
                    })), o.appendChild(u), this.element.innerHTML = "", this.element.appendChild(o);
                    var c = window.getComputedStyle(this.element),
                        a = c.fontSize,
                        f = c.lineHeight;
                    this._fontSize = parseFloat(a), this._lineHeight = parseFloat(f) || this._fontSize, this._metrics = this._letters.map(r);
                    var s = this._metrics.reduce((function(t, n) {
                        return t + n.width
                    }), 0);
                    this._minRadius = s / l / 2 + this._lineHeight, this._dir = 1, this._forceWidth = !1, this._forceHeight = !0, this._radius = this._minRadius, this._invalidate()
                }
                var n, e, o;
                return n = t, (e = [{
                    key: "radius",
                    value: function(t) {
                        return void 0 !== t ? (this._radius = p(this._minRadius, t), this._invalidate(), this) : this._radius
                    }
                }, {
                    key: "dir",
                    value: function(t) {
                        return void 0 !== t ? (this._dir = t, this._invalidate(), this) : this._dir
                    }
                }, {
                    key: "forceWidth",
                    value: function(t) {
                        return void 0 !== t ? (this._forceWidth = t, this._invalidate(), this) : this._forceWidth
                    }
                }, {
                    key: "forceHeight",
                    value: function(t) {
                        return void 0 !== t ? (this._forceHeight = t, this._invalidate(), this) : this._forceHeight
                    }
                }, {
                    key: "refresh",
                    value: function() {
                        return this._invalidate()
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        return this.element.innerHTML = this.originalHTML, this
                    }
                }, {
                    key: "_invalidate",
                    value: function() {
                        var t = this;
                        return cancelAnimationFrame(this._raf), this._raf = requestAnimationFrame((function() {
                            t._layout()
                        })), this
                    }
                }, {
                    key: "_layout",
                    value: function() {
                        var t = this,
                            n = this._radius,
                            e = this._dir,
                            r = -1 === e ? -n + this._lineHeight : n,
                            i = "center ".concat(r / this._fontSize, "em"),
                            o = n - this._lineHeight,
                            a = f(this._metrics, o),
                            s = a.rotations,
                            l = a.θ;
                        if (this._letters.forEach((function(n, r) {
                                var o = n.style,
                                    u = (-.5 * l + s[r]) * e,
                                    c = -.5 * t._metrics[r].width / t._fontSize,
                                    a = "translateX(".concat(c, "em) rotate(").concat(u, "deg)");
                                o.position = "absolute", o.bottom = -1 === e ? 0 : "auto", o.left = "50%", o.transform = a, o.transformOrigin = i, o.webkitTransform = a, o.webkitTransformOrigin = i
                            })), this._forceHeight) {
                            var p = l > 180 ? c(n, l) : c(o, l) + this._lineHeight;
                            this.container.style.height = "".concat(p / this._fontSize, "em")
                        }
                        if (this._forceWidth) {
                            var v = function(t, n) {
                                return 2 * t * Math.sin(u(n / 2))
                            }(n, h(180, l));
                            this.container.style.width = "".concat(v / this._fontSize, "em")
                        }
                        return this
                    }
                }]) && s(n.prototype, e), o && s(n, o), t
            }();
        n.default = v
    }])
}));
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
/*!
 * GSAP 3.8.0
 * https://greensock.com
 * 
 * @license Copyright 2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).window = t.window || {})
}(this, function(e) {
    "use strict";

    function _inheritsLoose(t, e) {
        t.prototype = Object.create(e.prototype), (t.prototype.constructor = t).__proto__ = e
    }

    function _assertThisInitialized(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function o(t) {
        return "string" == typeof t
    }

    function p(t) {
        return "function" == typeof t
    }

    function q(t) {
        return "number" == typeof t
    }

    function r(t) {
        return void 0 === t
    }

    function s(t) {
        return "object" == typeof t
    }

    function t(t) {
        return !1 !== t
    }

    function u() {
        return "undefined" != typeof window
    }

    function v(t) {
        return p(t) || o(t)
    }

    function M(t) {
        return (h = mt(t, ot)) && oe
    }

    function N(t, e) {
        return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
    }

    function O(t, e) {
        return !e && console.warn(t)
    }

    function P(t, e) {
        return t && (ot[t] = e) && h && (h[t] = e) || ot
    }

    function Q() {
        return 0
    }

    function $(t) {
        var e, r, i = t[0];
        if (s(i) || p(i) || (t = [t]), !(e = (i._gsap || {}).harness)) {
            for (r = ct.length; r-- && !ct[r].targetTest(i););
            e = ct[r]
        }
        for (r = t.length; r--;) t[r] && (t[r]._gsap || (t[r]._gsap = new Lt(t[r], e))) || t.splice(r, 1);
        return t
    }

    function _(t) {
        return t._gsap || $(xt(t))[0]._gsap
    }

    function aa(t, e, i) {
        return (i = t[e]) && p(i) ? t[e]() : r(i) && t.getAttribute && t.getAttribute(e) || i
    }

    function ba(t, e) {
        return (t = t.split(",")).forEach(e) || t
    }

    function ca(t) {
        return Math.round(1e5 * t) / 1e5 || 0
    }

    function da(t) {
        return Math.round(1e7 * t) / 1e7 || 0
    }

    function ea(t, e) {
        for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r;);
        return i < r
    }

    function fa() {
        var t, e, r = ht.length,
            i = ht.slice(0);
        for (lt = {}, t = ht.length = 0; t < r; t++)(e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
    }

    function ga(t, e, r, i) {
        ht.length && fa(), t.render(e, r, i), ht.length && fa()
    }

    function ha(t) {
        var e = parseFloat(t);
        return (e || 0 === e) && (t + "").match(at).length < 2 ? e : o(t) ? t.trim() : t
    }

    function ia(t) {
        return t
    }

    function ja(t, e) {
        for (var r in e) r in t || (t[r] = e[r]);
        return t
    }

    function ka(t, e) {
        for (var r in e) r in t || "duration" === r || "ease" === r || (t[r] = e[r])
    }

    function ma(t, e) {
        for (var r in e) "__proto__" !== r && "constructor" !== r && "prototype" !== r && (t[r] = s(e[r]) ? ma(t[r] || (t[r] = {}), e[r]) : e[r]);
        return t
    }

    function na(t, e) {
        var r, i = {};
        for (r in t) r in e || (i[r] = t[r]);
        return i
    }

    function oa(e) {
        var r = e.parent || I,
            i = e.keyframes ? ka : ja;
        if (t(e.inherit))
            for (; r;) i(e, r.vars.defaults), r = r.parent || r._dp;
        return e
    }

    function ra(t, e, r, i) {
        void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
        var n = e._prev,
            a = e._next;
        n ? n._next = a : t[r] === e && (t[r] = a), a ? a._prev = n : t[i] === e && (t[i] = n), e._next = e._prev = e.parent = null
    }

    function sa(t, e) {
        !t.parent || e && !t.parent.autoRemoveChildren || t.parent.remove(t), t._act = 0
    }

    function ta(t, e) {
        if (t && (!e || e._end > t._dur || e._start < 0))
            for (var r = t; r;) r._dirty = 1, r = r.parent;
        return t
    }

    function wa(t) {
        return t._repeat ? gt(t._tTime, t = t.duration() + t._rDelay) * t : 0
    }

    function ya(t, e) {
        return (t - e._start) * e._ts + (0 <= e._ts ? 0 : e._dirty ? e.totalDuration() : e._tDur)
    }

    function za(t) {
        return t._end = da(t._start + (t._tDur / Math.abs(t._ts || t._rts || X) || 0))
    }

    function Aa(t, e) {
        var r = t._dp;
        return r && r.smoothChildTiming && t._ts && (t._start = da(r._time - (0 < t._ts ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), za(t), r._dirty || ta(r, t)), t
    }

    function Ba(t, e) {
        var r;
        if ((e._time || e._initted && !e._dur) && (r = ya(t.rawTime(), e), (!e._dur || Tt(0, e.totalDuration(), r) - e._tTime > X) && e.render(r, !0)), ta(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
            if (t._dur < t.duration())
                for (r = t; r._dp;) 0 <= r.rawTime() && r.totalTime(r._tTime), r = r._dp;
            t._zTime = -X
        }
    }

    function Ca(t, e, r, i) {
        return e.parent && sa(e), e._start = da((q(r) ? r : r || t !== I ? bt(t, r, e) : t._time) + e._delay), e._end = da(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)),
            function _addLinkedListItem(t, e, r, i, n) {
                void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
                var a, s = t[i];
                if (n)
                    for (a = e[n]; s && s[n] > a;) s = s._prev;
                s ? (e._next = s._next, s._next = e) : (e._next = t[r], t[r] = e), e._next ? e._next._prev = e : t[i] = e, e._prev = s, e.parent = e._dp = t
            }(t, e, "_first", "_last", t._sort ? "_start" : 0), vt(e) || (t._recent = e), i || Ba(t, e), t
    }

    function Da(t, e) {
        return (ot.ScrollTrigger || N("scrollTrigger", e)) && ot.ScrollTrigger.create(e, t)
    }

    function Ea(t, e, r, i) {
        return jt(t, e), t._initted ? !r && t._pt && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && f !== St.frame ? (ht.push(t), t._lazy = [e, i], 1) : void 0 : 1
    }

    function Ja(t, e, r, i) {
        var n = t._repeat,
            a = da(e) || 0,
            s = t._tTime / t._tDur;
        return s && !i && (t._time *= a / t._dur), t._dur = a, t._tDur = n ? n < 0 ? 1e10 : da(a * (n + 1) + t._rDelay * n) : a, s && !i ? Aa(t, t._tTime = t._tDur * s) : t.parent && za(t), r || ta(t.parent, t), t
    }

    function Ka(t) {
        return t instanceof Nt ? ta(t) : Ja(t, t._dur)
    }

    function Na(e, r, i) {
        var n, a, s = q(r[1]),
            o = (s ? 2 : 1) + (e < 2 ? 0 : 1),
            u = r[o];
        if (s && (u.duration = r[1]), u.parent = i, e) {
            for (n = u, a = i; a && !("immediateRender" in n);) n = a.vars.defaults || {}, a = t(a.vars.inherit) && a.parent;
            u.immediateRender = t(n.immediateRender), e < 2 ? u.runBackwards = 1 : u.startAt = r[o - 1]
        }
        return new Vt(r[0], u, r[1 + o])
    }

    function Oa(t, e) {
        return t || 0 === t ? e(t) : e
    }

    function Qa(t) {
        if ("string" != typeof t) return "";
        var e = st.exec(t);
        return e ? t.substr(e.index + e[0].length) : ""
    }

    function Ta(t, e) {
        return t && s(t) && "length" in t && (!e && !t.length || t.length - 1 in t && s(t[0])) && !t.nodeType && t !== i
    }

    function Xa(t) {
        return t.sort(function() {
            return .5 - Math.random()
        })
    }

    function Ya(t) {
        if (p(t)) return t;
        var c = s(t) ? t : {
                each: t
            },
            _ = Bt(c.ease),
            m = c.from || 0,
            g = parseFloat(c.base) || 0,
            v = {},
            e = 0 < m && m < 1,
            y = isNaN(m) || e,
            b = c.axis,
            T = m,
            w = m;
        return o(m) ? T = w = {
                center: .5,
                edges: .5,
                end: 1
            }[m] || 0 : !e && y && (T = m[0], w = m[1]),
            function(t, e, r) {
                var i, n, a, s, o, u, h, l, f, d = (r || c).length,
                    p = v[d];
                if (!p) {
                    if (!(f = "auto" === c.grid ? 0 : (c.grid || [1, j])[1])) {
                        for (h = -j; h < (h = r[f++].getBoundingClientRect().left) && f < d;);
                        f--
                    }
                    for (p = v[d] = [], i = y ? Math.min(f, d) * T - .5 : m % f, n = y ? d * w / f - .5 : m / f | 0, l = j, u = h = 0; u < d; u++) a = u % f - i, s = n - (u / f | 0), p[u] = o = b ? Math.abs("y" === b ? s : a) : W(a * a + s * s), h < o && (h = o), o < l && (l = o);
                    "random" === m && Xa(p), p.max = h - l, p.min = l, p.v = d = (parseFloat(c.amount) || parseFloat(c.each) * (d < f ? d - 1 : b ? "y" === b ? d / f : f : Math.max(f, d / f)) || 0) * ("edges" === m ? -1 : 1), p.b = d < 0 ? g - d : g, p.u = Qa(c.amount || c.each) || 0, _ = _ && d < 0 ? Rt(_) : _
                }
                return d = (p[t] - p.min) / p.max || 0, da(p.b + (_ ? _(d) : d) * p.v) + p.u
            }
    }

    function Za(r) {
        var i = Math.pow(10, ((r + "").split(".")[1] || "").length);
        return function(t) {
            var e = Math.round(parseFloat(t) / r) * r * i;
            return (e - e % 1) / i + (q(t) ? 0 : Qa(t))
        }
    }

    function $a(u, t) {
        var h, l, e = Z(u);
        return !e && s(u) && (h = e = u.radius || j, u.values ? (u = xt(u.values), (l = !q(u[0])) && (h *= h)) : u = Za(u.increment)), Oa(t, e ? p(u) ? function(t) {
            return l = u(t), Math.abs(l - t) <= h ? l : t
        } : function(t) {
            for (var e, r, i = parseFloat(l ? t.x : t), n = parseFloat(l ? t.y : 0), a = j, s = 0, o = u.length; o--;)(e = l ? (e = u[o].x - i) * e + (r = u[o].y - n) * r : Math.abs(u[o] - i)) < a && (a = e, s = o);
            return s = !h || a <= h ? u[s] : t, l || s === t || q(t) ? s : s + Qa(t)
        } : Za(u))
    }

    function _a(t, e, r, i) {
        return Oa(Z(t) ? !e : !0 === r ? !!(r = 0) : !i, function() {
            return Z(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + .99 * r)) / r) * r * i) / i
        })
    }

    function db(e, r, t) {
        return Oa(t, function(t) {
            return e[~~r(t)]
        })
    }

    function gb(t) {
        for (var e, r, i, n, a = 0, s = ""; ~(e = t.indexOf("random(", a));) i = t.indexOf(")", e), n = "[" === t.charAt(e + 7), r = t.substr(e + 7, i - e - 7).match(n ? at : tt), s += t.substr(a, e - a) + _a(n ? r : +r[0], n ? 0 : +r[1], +r[2] || 1e-5), a = i + 1;
        return s + t.substr(a, t.length - a)
    }

    function jb(t, e, r) {
        var i, n, a, s = t.labels,
            o = j;
        for (i in s)(n = s[i] - e) < 0 == !!r && n && o > (n = Math.abs(n)) && (a = i, o = n);
        return a
    }

    function lb(t) {
        return sa(t), t.scrollTrigger && t.scrollTrigger.kill(!1), t.progress() < 1 && Mt(t, "onInterrupt"), t
    }

    function qb(t, e, r) {
        return (6 * (t = t < 0 ? t + 1 : 1 < t ? t - 1 : t) < 1 ? e + (r - e) * t * 6 : t < .5 ? r : 3 * t < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * kt + .5 | 0
    }

    function rb(t, e, r) {
        var i, n, a, s, o, u, h, l, f, d, p = t ? q(t) ? [t >> 16, t >> 8 & kt, t & kt] : 0 : At.black;
        if (!p) {
            if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), At[t]) p = At[t];
            else if ("#" === t.charAt(0)) {
                if (t.length < 6 && (t = "#" + (i = t.charAt(1)) + i + (n = t.charAt(2)) + n + (a = t.charAt(3)) + a + (5 === t.length ? t.charAt(4) + t.charAt(4) : "")), 9 === t.length) return [(p = parseInt(t.substr(1, 6), 16)) >> 16, p >> 8 & kt, p & kt, parseInt(t.substr(7), 16) / 255];
                p = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & kt, t & kt]
            } else if ("hsl" === t.substr(0, 3))
                if (p = d = t.match(tt), e) {
                    if (~t.indexOf("=")) return p = t.match(et), r && p.length < 4 && (p[3] = 1), p
                } else s = +p[0] % 360 / 360, o = p[1] / 100, i = 2 * (u = p[2] / 100) - (n = u <= .5 ? u * (o + 1) : u + o - u * o), 3 < p.length && (p[3] *= 1), p[0] = qb(s + 1 / 3, i, n), p[1] = qb(s, i, n), p[2] = qb(s - 1 / 3, i, n);
            else p = t.match(tt) || At.transparent;
            p = p.map(Number)
        }
        return e && !d && (i = p[0] / kt, n = p[1] / kt, a = p[2] / kt, u = ((h = Math.max(i, n, a)) + (l = Math.min(i, n, a))) / 2, h === l ? s = o = 0 : (f = h - l, o = .5 < u ? f / (2 - h - l) : f / (h + l), s = h === i ? (n - a) / f + (n < a ? 6 : 0) : h === n ? (a - i) / f + 2 : (i - n) / f + 4, s *= 60), p[0] = ~~(s + .5), p[1] = ~~(100 * o + .5), p[2] = ~~(100 * u + .5)), r && p.length < 4 && (p[3] = 1), p
    }

    function sb(t) {
        var r = [],
            i = [],
            n = -1;
        return t.split(Pt).forEach(function(t) {
            var e = t.match(rt) || [];
            r.push.apply(r, e), i.push(n += e.length + 1)
        }), r.c = i, r
    }

    function tb(t, e, r) {
        var i, n, a, s, o = "",
            u = (t + o).match(Pt),
            h = e ? "hsla(" : "rgba(",
            l = 0;
        if (!u) return t;
        if (u = u.map(function(t) {
                return (t = rb(t, e, 1)) && h + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
            }), r && (a = sb(t), (i = r.c).join(o) !== a.c.join(o)))
            for (s = (n = t.replace(Pt, "1").split(rt)).length - 1; l < s; l++) o += n[l] + (~i.indexOf(l) ? u.shift() || h + "0,0,0,0)" : (a.length ? a : u.length ? u : r).shift());
        if (!n)
            for (s = (n = t.split(Pt)).length - 1; l < s; l++) o += n[l] + u[l];
        return o + n[s]
    }

    function wb(t) {
        var e, r = t.join(" ");
        if (Pt.lastIndex = 0, Pt.test(r)) return e = Ct.test(r), t[1] = tb(t[1], e), t[0] = tb(t[0], e, sb(t[1])), !0
    }

    function Fb(t) {
        var e = (t + "").split("("),
            r = zt[e[0]];
        return r && 1 < e.length && r.config ? r.config.apply(null, ~t.indexOf("{") ? [function _parseObjectInString(t) {
            for (var e, r, i, n = {}, a = t.substr(1, t.length - 3).split(":"), s = a[0], o = 1, u = a.length; o < u; o++) r = a[o], e = o !== u - 1 ? r.lastIndexOf(",") : r.length, i = r.substr(0, e), n[s] = isNaN(i) ? i.replace(Ft, "").trim() : +i, s = r.substr(e + 1).trim();
            return n
        }(e[1])] : function _valueInParentheses(t) {
            var e = t.indexOf("(") + 1,
                r = t.indexOf(")"),
                i = t.indexOf("(", e);
            return t.substring(e, ~i && i < r ? t.indexOf(")", r + 1) : r)
        }(t).split(",").map(ha)) : zt._CE && Et.test(t) ? zt._CE("", t) : r
    }

    function Hb(t, e) {
        for (var r, i = t._first; i;) i instanceof Nt ? Hb(i, e) : !i.vars.yoyoEase || i._yoyo && i._repeat || i._yoyo === e || (i.timeline ? Hb(i.timeline, e) : (r = i._ease, i._ease = i._yEase, i._yEase = r, i._yoyo = e)), i = i._next
    }

    function Jb(t, e, r, i) {
        void 0 === r && (r = function easeOut(t) {
            return 1 - e(1 - t)
        }), void 0 === i && (i = function easeInOut(t) {
            return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
        });
        var n, a = {
            easeIn: e,
            easeOut: r,
            easeInOut: i
        };
        return ba(t, function(t) {
            for (var e in zt[t] = ot[t] = a, zt[n = t.toLowerCase()] = r, a) zt[n + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = zt[t + "." + e] = a[e]
        }), a
    }

    function Kb(e) {
        return function(t) {
            return t < .5 ? (1 - e(1 - 2 * t)) / 2 : .5 + e(2 * (t - .5)) / 2
        }
    }

    function Lb(r, t, e) {
        function Ql(t) {
            return 1 === t ? 1 : i * Math.pow(2, -10 * t) * H((t - a) * n) + 1
        }
        var i = 1 <= t ? t : 1,
            n = (e || (r ? .3 : .45)) / (t < 1 ? t : 1),
            a = n / U * (Math.asin(1 / i) || 0),
            s = "out" === r ? Ql : "in" === r ? function(t) {
                return 1 - Ql(1 - t)
            } : Kb(Ql);
        return n = U / n, s.config = function(t, e) {
            return Lb(r, t, e)
        }, s
    }

    function Mb(e, r) {
        function Yl(t) {
            return t ? --t * t * ((r + 1) * t + r) + 1 : 0
        }
        void 0 === r && (r = 1.70158);
        var t = "out" === e ? Yl : "in" === e ? function(t) {
            return 1 - Yl(1 - t)
        } : Kb(Yl);
        return t.config = function(t) {
            return Mb(e, t)
        }, t
    }
    var B, I, i, n, a, h, l, f, d, c, m, g, y, b, T, w, x, k, A, C, S, D, z, E, F, R, Y = {
            autoSleep: 120,
            force3D: "auto",
            nullTargetWarn: 1,
            units: {
                lineHeight: ""
            }
        },
        L = {
            duration: .5,
            overwrite: !1,
            delay: 0
        },
        j = 1e8,
        X = 1 / j,
        U = 2 * Math.PI,
        J = U / 4,
        V = 0,
        W = Math.sqrt,
        G = Math.cos,
        H = Math.sin,
        K = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {},
        Z = Array.isArray,
        tt = /(?:-?\.?\d|\.)+/gi,
        et = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        rt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        it = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        nt = /[+-]=-?[.\d]+/,
        at = /[^,'"\[\]\s]+/gi,
        st = /[\d.+\-=]+(?:e[-+]\d*)*/i,
        ot = {},
        ut = {},
        ht = [],
        lt = {},
        ft = {},
        dt = {},
        pt = 30,
        ct = [],
        _t = "",
        mt = function _merge(t, e) {
            for (var r in e) t[r] = e[r];
            return t
        },
        gt = function _animationCycle(t, e) {
            var r = Math.floor(t /= e);
            return t && r === t ? r - 1 : r
        },
        vt = function _isFromOrFromStart(t) {
            var e = t.data;
            return "isFromStart" === e || "isStart" === e
        },
        yt = {
            _start: 0,
            endTime: Q,
            totalDuration: Q
        },
        bt = function _parsePosition(t, e, r) {
            var i, n, a, s = t.labels,
                u = t._recent || yt,
                h = t.duration() >= j ? u.endTime(!1) : t._dur;
            return o(e) && (isNaN(e) || e in s) ? (n = e.charAt(0), a = "%" === e.substr(-1), i = e.indexOf("="), "<" === n || ">" === n ? (0 <= i && (e = e.replace(/=/, "")), ("<" === n ? u._start : u.endTime(0 <= u._repeat)) + (parseFloat(e.substr(1)) || 0) * (a ? (i < 0 ? u : r).totalDuration() / 100 : 1)) : i < 0 ? (e in s || (s[e] = h), s[e]) : (n = parseFloat(e.charAt(i - 1) + e.substr(i + 1)), a && r && (n = n / 100 * (Z(r) ? r[0] : r).totalDuration()), 1 < i ? _parsePosition(t, e.substr(0, i - 1), r) + n : h + n)) : null == e ? h : +e
        },
        Tt = function _clamp(t, e, r) {
            return r < t ? t : e < r ? e : r
        },
        wt = [].slice,
        xt = function toArray(t, e, r) {
            return !o(t) || r || !n && Dt() ? Z(t) ? function _flatten(t, e, r) {
                return void 0 === r && (r = []), t.forEach(function(t) {
                    return o(t) && !e || Ta(t, 1) ? r.push.apply(r, xt(t)) : r.push(t)
                }) || r
            }(t, r) : Ta(t) ? wt.call(t, 0) : t ? [t] : [] : wt.call((e || a).querySelectorAll(t), 0)
        },
        Ot = function mapRange(e, t, r, i, n) {
            var a = t - e,
                s = i - r;
            return Oa(n, function(t) {
                return r + ((t - e) / a * s || 0)
            })
        },
        Mt = function _callback(t, e, r) {
            var i, n, a = t.vars,
                s = a[e];
            if (s) return i = a[e + "Params"], n = a.callbackScope || t, r && ht.length && fa(), i ? s.apply(n, i) : s.call(n)
        },
        kt = 255,
        At = {
            aqua: [0, kt, kt],
            lime: [0, kt, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, kt],
            navy: [0, 0, 128],
            white: [kt, kt, kt],
            olive: [128, 128, 0],
            yellow: [kt, kt, 0],
            orange: [kt, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [kt, 0, 0],
            pink: [kt, 192, 203],
            cyan: [0, kt, kt],
            transparent: [kt, kt, kt, 0]
        },
        Pt = function() {
            var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
            for (t in At) e += "|" + t + "\\b";
            return new RegExp(e + ")", "gi")
        }(),
        Ct = /hsl[a]?\(/,
        St = (x = Date.now, k = 500, A = 33, C = x(), S = C, z = D = 1e3 / 240, b = {
            time: 0,
            frame: 0,
            tick: function tick() {
                Mk(!0)
            },
            deltaRatio: function deltaRatio(t) {
                return T / (1e3 / (t || 60))
            },
            wake: function wake() {
                l && (!n && u() && (i = n = window, a = i.document || {}, ot.gsap = oe, (i.gsapVersions || (i.gsapVersions = [])).push(oe.version), M(h || i.GreenSockGlobals || !i.gsap && i || {}), y = i.requestAnimationFrame), m && b.sleep(), g = y || function(t) {
                    return setTimeout(t, z - 1e3 * b.time + 1 | 0)
                }, c = 1, Mk(2))
            },
            sleep: function sleep() {
                (y ? i.cancelAnimationFrame : clearTimeout)(m), c = 0, g = Q
            },
            lagSmoothing: function lagSmoothing(t, e) {
                k = t || 1e8, A = Math.min(e, k, 0)
            },
            fps: function fps(t) {
                D = 1e3 / (t || 240), z = 1e3 * b.time + D
            },
            add: function add(t) {
                E.indexOf(t) < 0 && E.push(t), Dt()
            },
            remove: function remove(t) {
                var e;
                ~(e = E.indexOf(t)) && E.splice(e, 1) && e <= w && w--
            },
            _listeners: E = []
        }),
        Dt = function _wake() {
            return !c && St.wake()
        },
        zt = {},
        Et = /^[\d.\-M][\d.\-,\s]/,
        Ft = /["']/g,
        Rt = function _invertEase(e) {
            return function(t) {
                return 1 - e(1 - t)
            }
        },
        Bt = function _parseEase(t, e) {
            return t && (p(t) ? t : zt[t] || Fb(t)) || e
        };

    function Mk(t) {
        var e, r, i, n, a = x() - S,
            s = !0 === t;
        if (k < a && (C += a - A), (0 < (e = (i = (S += a) - C) - z) || s) && (n = ++b.frame, T = i - 1e3 * b.time, b.time = i /= 1e3, z += e + (D <= e ? 4 : D - e), r = 1), s || (m = g(Mk)), r)
            for (w = 0; w < E.length; w++) E[w](i, T, n, t)
    }

    function nm(t) {
        return t < R ? F * t * t : t < .7272727272727273 ? F * Math.pow(t - 1.5 / 2.75, 2) + .75 : t < .9090909090909092 ? F * (t -= 2.25 / 2.75) * t + .9375 : F * Math.pow(t - 2.625 / 2.75, 2) + .984375
    }
    ba("Linear,Quad,Cubic,Quart,Quint,Strong", function(t, e) {
        var r = e < 5 ? e + 1 : e;
        Jb(t + ",Power" + (r - 1), e ? function(t) {
            return Math.pow(t, r)
        } : function(t) {
            return t
        }, function(t) {
            return 1 - Math.pow(1 - t, r)
        }, function(t) {
            return t < .5 ? Math.pow(2 * t, r) / 2 : 1 - Math.pow(2 * (1 - t), r) / 2
        })
    }), zt.Linear.easeNone = zt.none = zt.Linear.easeIn, Jb("Elastic", Lb("in"), Lb("out"), Lb()), F = 7.5625, R = 1 / 2.75, Jb("Bounce", function(t) {
        return 1 - nm(1 - t)
    }, nm), Jb("Expo", function(t) {
        return t ? Math.pow(2, 10 * (t - 1)) : 0
    }), Jb("Circ", function(t) {
        return -(W(1 - t * t) - 1)
    }), Jb("Sine", function(t) {
        return 1 === t ? 1 : 1 - G(t * J)
    }), Jb("Back", Mb("in"), Mb("out"), Mb()), zt.SteppedEase = zt.steps = ot.SteppedEase = {
        config: function config(t, e) {
            void 0 === t && (t = 1);
            var r = 1 / t,
                i = t + (e ? 0 : 1),
                n = e ? 1 : 0;
            return function(t) {
                return ((i * Tt(0, .99999999, t) | 0) + n) * r
            }
        }
    }, L.ease = zt["quad.out"], ba("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(t) {
        return _t += t + "," + t + "Params,"
    });
    var It, Lt = function GSCache(t, e) {
            this.id = V++, (t._gsap = this).target = t, this.harness = e, this.get = e ? e.get : aa, this.set = e ? e.getSetter : Kt
        },
        qt = ((It = Animation.prototype).delay = function delay(t) {
            return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay
        }, It.duration = function duration(t) {
            return arguments.length ? this.totalDuration(0 < this._repeat ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
        }, It.totalDuration = function totalDuration(t) {
            return arguments.length ? (this._dirty = 0, Ja(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
        }, It.totalTime = function totalTime(t, e) {
            if (Dt(), !arguments.length) return this._tTime;
            var r = this._dp;
            if (r && r.smoothChildTiming && this._ts) {
                for (Aa(this, t), !r._dp || r.parent || Ba(r, this); r && r.parent;) r.parent._time !== r._start + (0 <= r._ts ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0), r = r.parent;
                !this.parent && this._dp.autoRemoveChildren && (0 < this._ts && t < this._tDur || this._ts < 0 && 0 < t || !this._tDur && !t) && Ca(this._dp, this, this._start - this._delay)
            }
            return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === X || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), ga(this, t, e)), this
        }, It.time = function time(t, e) {
            return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + wa(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time
        }, It.totalProgress = function totalProgress(t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
        }, It.progress = function progress(t, e) {
            return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + wa(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
        }, It.iteration = function iteration(t, e) {
            var r = this.duration() + this._rDelay;
            return arguments.length ? this.totalTime(this._time + (t - 1) * r, e) : this._repeat ? gt(this._tTime, r) + 1 : 1
        }, It.timeScale = function timeScale(t) {
            if (!arguments.length) return this._rts === -X ? 0 : this._rts;
            if (this._rts === t) return this;
            var e = this.parent && this._ts ? ya(this.parent._time, this) : this._tTime;
            return this._rts = +t || 0, this._ts = this._ps || t === -X ? 0 : this._rts,
                function _recacheAncestors(t) {
                    for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent
                }(this.totalTime(Tt(-this._delay, this._tDur, e), !0)), za(this), this
        }, It.paused = function paused(t) {
            return arguments.length ? (this._ps !== t && ((this._ps = t) ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Dt(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== X && (this._tTime -= X)))), this) : this._ps
        }, It.startTime = function startTime(t) {
            if (arguments.length) {
                this._start = t;
                var e = this.parent || this._dp;
                return !e || !e._sort && this.parent || Ca(e, this, t - this._delay), this
            }
            return this._start
        }, It.endTime = function endTime(e) {
            return this._start + (t(e) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
        }, It.rawTime = function rawTime(t) {
            var e = this.parent || this._dp;
            return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? ya(e.rawTime(t), this) : this._tTime : this._tTime
        }, It.globalTime = function globalTime(t) {
            for (var e = this, r = arguments.length ? t : e.rawTime(); e;) r = e._start + r / (e._ts || 1), e = e._dp;
            return r
        }, It.repeat = function repeat(t) {
            return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t, Ka(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
        }, It.repeatDelay = function repeatDelay(t) {
            if (arguments.length) {
                var e = this._time;
                return this._rDelay = t, Ka(this), e ? this.time(e) : this
            }
            return this._rDelay
        }, It.yoyo = function yoyo(t) {
            return arguments.length ? (this._yoyo = t, this) : this._yoyo
        }, It.seek = function seek(e, r) {
            return this.totalTime(bt(this, e), t(r))
        }, It.restart = function restart(e, r) {
            return this.play().totalTime(e ? -this._delay : 0, t(r))
        }, It.play = function play(t, e) {
            return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
        }, It.reverse = function reverse(t, e) {
            return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
        }, It.pause = function pause(t, e) {
            return null != t && this.seek(t, e), this.paused(!0)
        }, It.resume = function resume() {
            return this.paused(!1)
        }, It.reversed = function reversed(t) {
            return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -X : 0)), this) : this._rts < 0
        }, It.invalidate = function invalidate() {
            return this._initted = this._act = 0, this._zTime = -X, this
        }, It.isActive = function isActive() {
            var t, e = this.parent || this._dp,
                r = this._start;
            return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= r && t < this.endTime(!0) - X))
        }, It.eventCallback = function eventCallback(t, e, r) {
            var i = this.vars;
            return 1 < arguments.length ? (e ? (i[t] = e, r && (i[t + "Params"] = r), "onUpdate" === t && (this._onUpdate = e)) : delete i[t], this) : i[t]
        }, It.then = function then(t) {
            var i = this;
            return new Promise(function(e) {
                function En() {
                    var t = i.then;
                    i.then = null, p(r) && (r = r(i)) && (r.then || r === i) && (i.then = t), e(r), i.then = t
                }
                var r = p(t) ? t : ia;
                i._initted && 1 === i.totalProgress() && 0 <= i._ts || !i._tTime && i._ts < 0 ? En() : i._prom = En
            })
        }, It.kill = function kill() {
            lb(this)
        }, Animation);

    function Animation(t) {
        this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Ja(this, +t.duration, 1, 1), this.data = t.data, c || St.wake()
    }
    ja(qt.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -X,
        _prom: 0,
        _ps: !1,
        _rts: 1
    });
    var Nt = function(n) {
        function Timeline(e, r) {
            var i;
            return void 0 === e && (e = {}), (i = n.call(this, e) || this).labels = {}, i.smoothChildTiming = !!e.smoothChildTiming, i.autoRemoveChildren = !!e.autoRemoveChildren, i._sort = t(e.sortChildren), I && Ca(e.parent || I, _assertThisInitialized(i), r), e.reversed && i.reverse(), e.paused && i.paused(!0), e.scrollTrigger && Da(_assertThisInitialized(i), e.scrollTrigger), i
        }
        _inheritsLoose(Timeline, n);
        var e = Timeline.prototype;
        return e.to = function to(t, e, r) {
            return Na(0, arguments, this), this
        }, e.from = function from(t, e, r) {
            return Na(1, arguments, this), this
        }, e.fromTo = function fromTo(t, e, r, i) {
            return Na(2, arguments, this), this
        }, e.set = function set(t, e, r) {
            return e.duration = 0, e.parent = this, oa(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new Vt(t, e, bt(this, r), 1), this
        }, e.call = function call(t, e, r) {
            return Ca(this, Vt.delayedCall(0, t, e), r)
        }, e.staggerTo = function staggerTo(t, e, r, i, n, a, s) {
            return r.duration = e, r.stagger = r.stagger || i, r.onComplete = a, r.onCompleteParams = s, r.parent = this, new Vt(t, r, bt(this, n)), this
        }, e.staggerFrom = function staggerFrom(e, r, i, n, a, s, o) {
            return i.runBackwards = 1, oa(i).immediateRender = t(i.immediateRender), this.staggerTo(e, r, i, n, a, s, o)
        }, e.staggerFromTo = function staggerFromTo(e, r, i, n, a, s, o, u) {
            return n.startAt = i, oa(n).immediateRender = t(n.immediateRender), this.staggerTo(e, r, n, a, s, o, u)
        }, e.render = function render(t, e, r) {
            var i, n, a, s, o, u, h, l, f, d, p, c, _ = this._time,
                m = this._dirty ? this.totalDuration() : this._tDur,
                g = this._dur,
                v = t <= 0 ? 0 : da(t),
                y = this._zTime < 0 != t < 0 && (this._initted || !g);
            if (this !== I && m < v && 0 <= t && (v = m), v !== this._tTime || r || y) {
                if (_ !== this._time && g && (v += this._time - _, t += this._time - _), i = v, f = this._start, u = !(l = this._ts), y && (g || (_ = this._zTime), !t && e || (this._zTime = t)), this._repeat) {
                    if (p = this._yoyo, o = g + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * o + t, e, r);
                    if (i = da(v % o), v === m ? (s = this._repeat, i = g) : ((s = ~~(v / o)) && s === v / o && (i = g, s--), g < i && (i = g)), d = gt(this._tTime, o), !_ && this._tTime && d !== s && (d = s), p && 1 & s && (i = g - i, c = 1), s !== d && !this._lock) {
                        var b = p && 1 & d,
                            T = b === (p && 1 & s);
                        if (s < d && (b = !b), _ = b ? 0 : g, this._lock = 1, this.render(_ || (c ? 0 : da(s * o)), e, !g)._lock = 0, this._tTime = v, !e && this.parent && Mt(this, "onRepeat"), this.vars.repeatRefresh && !c && (this.invalidate()._lock = 1), _ && _ !== this._time || u != !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                        if (g = this._dur, m = this._tDur, T && (this._lock = 2, _ = b ? g : -1e-4, this.render(_, !0), this.vars.repeatRefresh && !c && this.invalidate()), this._lock = 0, !this._ts && !u) return this;
                        Hb(this, c)
                    }
                }
                if (this._hasPause && !this._forcing && this._lock < 2 && (h = function _findNextPauseTween(t, e, r) {
                        var i;
                        if (e < r)
                            for (i = t._first; i && i._start <= r;) {
                                if (!i._dur && "isPause" === i.data && i._start > e) return i;
                                i = i._next
                            } else
                                for (i = t._last; i && i._start >= r;) {
                                    if (!i._dur && "isPause" === i.data && i._start < e) return i;
                                    i = i._prev
                                }
                    }(this, da(_), da(i))) && (v -= i - (i = h._start)), this._tTime = v, this._time = i, this._act = !l, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t, _ = 0), !_ && i && !e && (Mt(this, "onStart"), this._tTime !== v)) return this;
                if (_ <= i && 0 <= t)
                    for (n = this._first; n;) {
                        if (a = n._next, (n._act || i >= n._start) && n._ts && h !== n) {
                            if (n.parent !== this) return this.render(t, e, r);
                            if (n.render(0 < n._ts ? (i - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (i - n._start) * n._ts, e, r), i !== this._time || !this._ts && !u) {
                                h = 0, a && (v += this._zTime = -X);
                                break
                            }
                        }
                        n = a
                    } else {
                        n = this._last;
                        for (var w = t < 0 ? t : i; n;) {
                            if (a = n._prev, (n._act || w <= n._end) && n._ts && h !== n) {
                                if (n.parent !== this) return this.render(t, e, r);
                                if (n.render(0 < n._ts ? (w - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (w - n._start) * n._ts, e, r), i !== this._time || !this._ts && !u) {
                                    h = 0, a && (v += this._zTime = w ? -X : X);
                                    break
                                }
                            }
                            n = a
                        }
                    }
                if (h && !e && (this.pause(), h.render(_ <= i ? 0 : -X)._zTime = _ <= i ? 1 : -1, this._ts)) return this._start = f, za(this), this.render(t, e, r);
                this._onUpdate && !e && Mt(this, "onUpdate", !0), (v === m && m >= this.totalDuration() || !v && _) && (f !== this._start && Math.abs(l) === Math.abs(this._ts) || this._lock || (!t && g || !(v === m && 0 < this._ts || !v && this._ts < 0) || sa(this, 1), e || t < 0 && !_ || !v && !_ && m || (Mt(this, v === m && 0 <= t ? "onComplete" : "onReverseComplete", !0), !this._prom || v < m && 0 < this.timeScale() || this._prom())))
            }
            return this
        }, e.add = function add(t, e) {
            var r = this;
            if (q(e) || (e = bt(this, e, t)), !(t instanceof qt)) {
                if (Z(t)) return t.forEach(function(t) {
                    return r.add(t, e)
                }), this;
                if (o(t)) return this.addLabel(t, e);
                if (!p(t)) return this;
                t = Vt.delayedCall(0, t)
            }
            return this !== t ? Ca(this, t, e) : this
        }, e.getChildren = function getChildren(t, e, r, i) {
            void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === r && (r = !0), void 0 === i && (i = -j);
            for (var n = [], a = this._first; a;) a._start >= i && (a instanceof Vt ? e && n.push(a) : (r && n.push(a), t && n.push.apply(n, a.getChildren(!0, e, r)))), a = a._next;
            return n
        }, e.getById = function getById(t) {
            for (var e = this.getChildren(1, 1, 1), r = e.length; r--;)
                if (e[r].vars.id === t) return e[r]
        }, e.remove = function remove(t) {
            return o(t) ? this.removeLabel(t) : p(t) ? this.killTweensOf(t) : (ra(this, t), t === this._recent && (this._recent = this._last), ta(this))
        }, e.totalTime = function totalTime(t, e) {
            return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = da(St.time - (0 < this._ts ? t / this._ts : (this.totalDuration() - t) / -this._ts))), n.prototype.totalTime.call(this, t, e), this._forcing = 0, this) : this._tTime
        }, e.addLabel = function addLabel(t, e) {
            return this.labels[t] = bt(this, e), this
        }, e.removeLabel = function removeLabel(t) {
            return delete this.labels[t], this
        }, e.addPause = function addPause(t, e, r) {
            var i = Vt.delayedCall(0, e || Q, r);
            return i.data = "isPause", this._hasPause = 1, Ca(this, i, bt(this, t))
        }, e.removePause = function removePause(t) {
            var e = this._first;
            for (t = bt(this, t); e;) e._start === t && "isPause" === e.data && sa(e), e = e._next
        }, e.killTweensOf = function killTweensOf(t, e, r) {
            for (var i = this.getTweensOf(t, r), n = i.length; n--;) Qt !== i[n] && i[n].kill(t, e);
            return this
        }, e.getTweensOf = function getTweensOf(t, e) {
            for (var r, i = [], n = xt(t), a = this._first, s = q(e); a;) a instanceof Vt ? ea(a._targets, n) && (s ? (!Qt || a._initted && a._ts) && a.globalTime(0) <= e && a.globalTime(a.totalDuration()) > e : !e || a.isActive()) && i.push(a) : (r = a.getTweensOf(n, e)).length && i.push.apply(i, r), a = a._next;
            return i
        }, e.tweenTo = function tweenTo(t, e) {
            e = e || {};
            var r, i = this,
                n = bt(i, t),
                a = e.startAt,
                s = e.onStart,
                o = e.onStartParams,
                u = e.immediateRender,
                h = Vt.to(i, ja({
                    ease: e.ease || "none",
                    lazy: !1,
                    immediateRender: !1,
                    time: n,
                    overwrite: "auto",
                    duration: e.duration || Math.abs((n - (a && "time" in a ? a.time : i._time)) / i.timeScale()) || X,
                    onStart: function onStart() {
                        if (i.pause(), !r) {
                            var t = e.duration || Math.abs((n - (a && "time" in a ? a.time : i._time)) / i.timeScale());
                            h._dur !== t && Ja(h, t, 0, 1).render(h._time, !0, !0), r = 1
                        }
                        s && s.apply(h, o || [])
                    }
                }, e));
            return u ? h.render(0) : h
        }, e.tweenFromTo = function tweenFromTo(t, e, r) {
            return this.tweenTo(e, ja({
                startAt: {
                    time: bt(this, t)
                }
            }, r))
        }, e.recent = function recent() {
            return this._recent
        }, e.nextLabel = function nextLabel(t) {
            return void 0 === t && (t = this._time), jb(this, bt(this, t))
        }, e.previousLabel = function previousLabel(t) {
            return void 0 === t && (t = this._time), jb(this, bt(this, t), 1)
        }, e.currentLabel = function currentLabel(t) {
            return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + X)
        }, e.shiftChildren = function shiftChildren(t, e, r) {
            void 0 === r && (r = 0);
            for (var i, n = this._first, a = this.labels; n;) n._start >= r && (n._start += t, n._end += t), n = n._next;
            if (e)
                for (i in a) a[i] >= r && (a[i] += t);
            return ta(this)
        }, e.invalidate = function invalidate() {
            var t = this._first;
            for (this._lock = 0; t;) t.invalidate(), t = t._next;
            return n.prototype.invalidate.call(this)
        }, e.clear = function clear(t) {
            void 0 === t && (t = !0);
            for (var e, r = this._first; r;) e = r._next, this.remove(r), r = e;
            return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), ta(this)
        }, e.totalDuration = function totalDuration(t) {
            var e, r, i, n = 0,
                a = this,
                s = a._last,
                o = j;
            if (arguments.length) return a.timeScale((a._repeat < 0 ? a.duration() : a.totalDuration()) / (a.reversed() ? -t : t));
            if (a._dirty) {
                for (i = a.parent; s;) e = s._prev, s._dirty && s.totalDuration(), o < (r = s._start) && a._sort && s._ts && !a._lock ? (a._lock = 1, Ca(a, s, r - s._delay, 1)._lock = 0) : o = r, r < 0 && s._ts && (n -= r, (!i && !a._dp || i && i.smoothChildTiming) && (a._start += r / a._ts, a._time -= r, a._tTime -= r), a.shiftChildren(-r, !1, -Infinity), o = 0), s._end > n && s._ts && (n = s._end), s = e;
                Ja(a, a === I && a._time > n ? a._time : n, 1, 1), a._dirty = 0
            }
            return a._tDur
        }, Timeline.updateRoot = function updateRoot(t) {
            if (I._ts && (ga(I, ya(t, I)), f = St.frame), St.frame >= pt) {
                pt += Y.autoSleep || 120;
                var e = I._first;
                if ((!e || !e._ts) && Y.autoSleep && St._listeners.length < 2) {
                    for (; e && !e._ts;) e = e._next;
                    e || St.sleep()
                }
            }
        }, Timeline
    }(qt);
    ja(Nt.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
    });

    function Tb(t, e, r, i, n, a) {
        var u, h, l, f;
        if (ft[t] && !1 !== (u = new ft[t]).init(n, u.rawVars ? e[t] : function _processVars(t, e, r, i, n) {
                if (p(t) && (t = Xt(t, n, e, r, i)), !s(t) || t.style && t.nodeType || Z(t) || K(t)) return o(t) ? Xt(t, n, e, r, i) : t;
                var a, u = {};
                for (a in t) u[a] = Xt(t[a], n, e, r, i);
                return u
            }(e[t], i, n, a, r), r, i, a) && (r._pt = h = new ae(r._pt, n, t, 0, 1, u.render, u, 0, u.priority), r !== d))
            for (l = r._ptLookup[r._targets.indexOf(n)], f = u._props.length; f--;) l[u._props[f]] = h;
        return u
    }
    var Qt, Yt = function _addPropTween(t, e, r, i, n, a, s, u, h) {
            p(i) && (i = i(n || 0, t, a));
            var l, f = t[e],
                d = "get" !== r ? r : p(f) ? h ? t[e.indexOf("set") || !p(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](h) : t[e]() : f,
                c = p(f) ? h ? Ht : Gt : Wt;
            if (o(i) && (~i.indexOf("random(") && (i = gb(i)), "=" === i.charAt(1) && (!(l = parseFloat(d) + parseFloat(i.substr(2)) * ("-" === i.charAt(0) ? -1 : 1) + (Qa(d) || 0)) && 0 !== l || (i = l))), d !== i) return isNaN(d * i) || "" === i ? (f || e in t || N(e, i), function _addComplexStringPropTween(t, e, r, i, n, a, s) {
                var o, u, h, l, f, d, p, c, _ = new ae(this._pt, t, e, 0, 1, te, null, n),
                    m = 0,
                    g = 0;
                for (_.b = r, _.e = i, r += "", (p = ~(i += "").indexOf("random(")) && (i = gb(i)), a && (a(c = [r, i], t, e), r = c[0], i = c[1]), u = r.match(it) || []; o = it.exec(i);) l = o[0], f = i.substring(m, o.index), h ? h = (h + 1) % 5 : "rgba(" === f.substr(-5) && (h = 1), l !== u[g++] && (d = parseFloat(u[g - 1]) || 0, _._pt = {
                    _next: _._pt,
                    p: f || 1 === g ? f : ",",
                    s: d,
                    c: "=" === l.charAt(1) ? parseFloat(l.substr(2)) * ("-" === l.charAt(0) ? -1 : 1) : parseFloat(l) - d,
                    m: h && h < 4 ? Math.round : 0
                }, m = it.lastIndex);
                return _.c = m < i.length ? i.substring(m, i.length) : "", _.fp = s, (nt.test(i) || p) && (_.e = 0), this._pt = _
            }.call(this, t, e, d, i, c, u || Y.stringFilter, h)) : (l = new ae(this._pt, t, e, +d || 0, i - (d || 0), "boolean" == typeof f ? $t : Zt, 0, c), h && (l.fp = h), s && l.modifier(s, this, t), this._pt = l)
        },
        jt = function _initTween(e, r) {
            var i, n, a, s, o, u, h, l, f, d, p, c, m, g = e.vars,
                v = g.ease,
                y = g.startAt,
                b = g.immediateRender,
                T = g.lazy,
                w = g.onUpdate,
                x = g.onUpdateParams,
                O = g.callbackScope,
                M = g.runBackwards,
                k = g.yoyoEase,
                A = g.keyframes,
                P = g.autoRevert,
                C = e._dur,
                S = e._startAt,
                D = e._targets,
                z = e.parent,
                E = z && "nested" === z.data ? z.parent._targets : D,
                F = "auto" === e._overwrite && !B,
                R = e.timeline;
            if (!R || A && v || (v = "none"), e._ease = Bt(v, L.ease), e._yEase = k ? Rt(Bt(!0 === k ? v : k, L.ease)) : 0, k && e._yoyo && !e._repeat && (k = e._yEase, e._yEase = e._ease, e._ease = k), e._from = !R && !!g.runBackwards, !R) {
                if (c = (l = D[0] ? _(D[0]).harness : 0) && g[l.prop], i = na(g, ut), S && S.render(-1, !0).kill(), y)
                    if (sa(e._startAt = Vt.set(D, ja({
                            data: "isStart",
                            overwrite: !1,
                            parent: z,
                            immediateRender: !0,
                            lazy: t(T),
                            startAt: null,
                            delay: 0,
                            onUpdate: w,
                            onUpdateParams: x,
                            callbackScope: O,
                            stagger: 0
                        }, y))), r < 0 && !b && !P && e._startAt.render(-1, !0), b) {
                        if (0 < r && !P && (e._startAt = 0), C && r <= 0) return void(r && (e._zTime = r))
                    } else !1 === P && (e._startAt = 0);
                else if (M && C)
                    if (S) P || (e._startAt = 0);
                    else if (r && (b = !1), a = ja({
                        overwrite: !1,
                        data: "isFromStart",
                        lazy: b && t(T),
                        immediateRender: b,
                        stagger: 0,
                        parent: z
                    }, i), c && (a[l.prop] = c), sa(e._startAt = Vt.set(D, a)), r < 0 && e._startAt.render(-1, !0), b) {
                    if (!r) return
                } else _initTween(e._startAt, X);
                for (e._pt = 0, T = C && t(T) || T && !C, n = 0; n < D.length; n++) {
                    if (h = (o = D[n])._gsap || $(D)[n]._gsap, e._ptLookup[n] = d = {}, lt[h.id] && ht.length && fa(), p = E === D ? n : E.indexOf(o), l && !1 !== (f = new l).init(o, c || i, e, p, E) && (e._pt = s = new ae(e._pt, o, f.name, 0, 1, f.render, f, 0, f.priority), f._props.forEach(function(t) {
                            d[t] = s
                        }), f.priority && (u = 1)), !l || c)
                        for (a in i) ft[a] && (f = Tb(a, i, e, p, o, E)) ? f.priority && (u = 1) : d[a] = s = Yt.call(e, o, a, "get", i[a], p, E, 0, g.stringFilter);
                    e._op && e._op[n] && e.kill(o, e._op[n]), F && e._pt && (Qt = e, I.killTweensOf(o, d, e.globalTime(r)), m = !e.parent, Qt = 0), e._pt && T && (lt[h.id] = 1)
                }
                u && ne(e), e._onInit && e._onInit(e)
            }
            e._onUpdate = w, e._initted = (!e._op || e._pt) && !m
        },
        Xt = function _parseFuncOrString(t, e, r, i, n) {
            return p(t) ? t.call(e, r, i, n) : o(t) && ~t.indexOf("random(") ? gb(t) : t
        },
        Ut = _t + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
        Jt = (Ut + ",id,stagger,delay,duration,paused,scrollTrigger").split(","),
        Vt = function(C) {
            function Tween(e, r, i, n) {
                var a;
                "number" == typeof r && (i.duration = r, r = i, i = null);
                var o, u, h, l, f, d, p, c, _ = (a = C.call(this, n ? r : oa(r)) || this).vars,
                    m = _.duration,
                    g = _.delay,
                    y = _.immediateRender,
                    b = _.stagger,
                    T = _.overwrite,
                    w = _.keyframes,
                    x = _.defaults,
                    M = _.scrollTrigger,
                    k = _.yoyoEase,
                    A = r.parent || I,
                    P = (Z(e) || K(e) ? q(e[0]) : "length" in r) ? [e] : xt(e);
                if (a._targets = P.length ? $(P) : O("GSAP target " + e + " not found. https://greensock.com", !Y.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = T, w || b || v(m) || v(g)) {
                    if (r = a.vars, (o = a.timeline = new Nt({
                            data: "nested",
                            defaults: x || {}
                        })).kill(), o.parent = o._dp = _assertThisInitialized(a), o._start = 0, w) oa(ja(o.vars.defaults, {
                        ease: "none"
                    })), b ? P.forEach(function(r, i) {
                        return w.forEach(function(t, e) {
                            return o.to(r, t, e ? ">" : i * b)
                        })
                    }) : w.forEach(function(t) {
                        return o.to(P, t, ">")
                    });
                    else {
                        if (l = P.length, p = b ? Ya(b) : Q, s(b))
                            for (f in b) ~Ut.indexOf(f) && ((c = c || {})[f] = b[f]);
                        for (u = 0; u < l; u++) {
                            for (f in h = {}, r) Jt.indexOf(f) < 0 && (h[f] = r[f]);
                            h.stagger = 0, k && (h.yoyoEase = k), c && mt(h, c), d = P[u], h.duration = +Xt(m, _assertThisInitialized(a), u, d, P), h.delay = (+Xt(g, _assertThisInitialized(a), u, d, P) || 0) - a._delay, !b && 1 === l && h.delay && (a._delay = g = h.delay, a._start += g, h.delay = 0), o.to(d, h, p(u, d, P))
                        }
                        o.duration() ? m = g = 0 : a.timeline = 0
                    }
                    m || a.duration(m = o.duration())
                } else a.timeline = 0;
                return !0 !== T || B || (Qt = _assertThisInitialized(a), I.killTweensOf(P), Qt = 0), Ca(A, _assertThisInitialized(a), i), r.reversed && a.reverse(), r.paused && a.paused(!0), (y || !m && !w && a._start === da(A._time) && t(y) && function _hasNoPausedAncestors(t) {
                    return !t || t._ts && _hasNoPausedAncestors(t.parent)
                }(_assertThisInitialized(a)) && "nested" !== A.data) && (a._tTime = -X, a.render(Math.max(0, -g))), M && Da(_assertThisInitialized(a), M), a
            }
            _inheritsLoose(Tween, C);
            var e = Tween.prototype;
            return e.render = function render(t, e, r) {
                var i, n, a, s, o, u, h, l, f, d = this._time,
                    p = this._tDur,
                    c = this._dur,
                    _ = p - X < t && 0 <= t ? p : t < X ? 0 : t;
                if (c) {
                    if (_ !== this._tTime || !t || r || !this._initted && this._tTime || this._startAt && this._zTime < 0 != t < 0) {
                        if (i = _, l = this.timeline, this._repeat) {
                            if (s = c + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * s + t, e, r);
                            if (i = da(_ % s), _ === p ? (a = this._repeat, i = c) : ((a = ~~(_ / s)) && a === _ / s && (i = c, a--), c < i && (i = c)), (u = this._yoyo && 1 & a) && (f = this._yEase, i = c - i), o = gt(this._tTime, s), i === d && !r && this._initted) return this;
                            a !== o && (l && this._yEase && Hb(l, u), !this.vars.repeatRefresh || u || this._lock || (this._lock = r = 1, this.render(da(s * a), !0).invalidate()._lock = 0))
                        }
                        if (!this._initted) {
                            if (Ea(this, t < 0 ? t : i, r, e)) return this._tTime = 0, this;
                            if (c !== this._dur) return this.render(t, e, r)
                        }
                        if (this._tTime = _, this._time = i, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = h = (f || this._ease)(i / c), this._from && (this.ratio = h = 1 - h), i && !d && !e && (Mt(this, "onStart"), this._tTime !== _)) return this;
                        for (n = this._pt; n;) n.r(h, n.d), n = n._next;
                        l && l.render(t < 0 ? t : !i && u ? -X : l._dur * h, e, r) || this._startAt && (this._zTime = t), this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, r), Mt(this, "onUpdate")), this._repeat && a !== o && this.vars.onRepeat && !e && this.parent && Mt(this, "onRepeat"), _ !== this._tDur && _ || this._tTime !== _ || (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, !0), !t && c || !(_ === this._tDur && 0 < this._ts || !_ && this._ts < 0) || sa(this, 1), e || t < 0 && !d || !_ && !d || (Mt(this, _ === p ? "onComplete" : "onReverseComplete", !0), !this._prom || _ < p && 0 < this.timeScale() || this._prom()))
                    }
                } else ! function _renderZeroDurationTween(t, e, r, i) {
                    var n, a, s, o = t.ratio,
                        u = e < 0 || !e && (!t._start && function _parentPlayheadIsBeforeStart(t) {
                            var e = t.parent;
                            return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || _parentPlayheadIsBeforeStart(e))
                        }(t) && (t._initted || !vt(t)) || (t._ts < 0 || t._dp._ts < 0) && !vt(t)) ? 0 : 1,
                        h = t._rDelay,
                        l = 0;
                    if (h && t._repeat && (l = Tt(0, t._tDur, e), a = gt(l, h), s = gt(t._tTime, h), t._yoyo && 1 & a && (u = 1 - u), a !== s && (o = 1 - u, t.vars.repeatRefresh && t._initted && t.invalidate())), u !== o || i || t._zTime === X || !e && t._zTime) {
                        if (!t._initted && Ea(t, e, i, r)) return;
                        for (s = t._zTime, t._zTime = e || (r ? X : 0), r = r || e && !s, t.ratio = u, t._from && (u = 1 - u), t._time = 0, t._tTime = l, n = t._pt; n;) n.r(u, n.d), n = n._next;
                        t._startAt && e < 0 && t._startAt.render(e, !0, !0), t._onUpdate && !r && Mt(t, "onUpdate"), l && t._repeat && !r && t.parent && Mt(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === u && (u && sa(t, 1), r || (Mt(t, u ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
                    } else t._zTime || (t._zTime = e)
                }(this, t, e, r);
                return this
            }, e.targets = function targets() {
                return this._targets
            }, e.invalidate = function invalidate() {
                return this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(), C.prototype.invalidate.call(this)
            }, e.kill = function kill(t, e) {
                if (void 0 === e && (e = "all"), !(t || e && "all" !== e)) return this._lazy = this._pt = 0, this.parent ? lb(this) : this;
                if (this.timeline) {
                    var r = this.timeline.totalDuration();
                    return this.timeline.killTweensOf(t, e, Qt && !0 !== Qt.vars.overwrite)._first || lb(this), this.parent && r !== this.timeline.totalDuration() && Ja(this, this._dur * this.timeline._tDur / r, 0, 1), this
                }
                var i, n, a, s, u, h, l, f = this._targets,
                    d = t ? xt(t) : f,
                    p = this._ptLookup,
                    c = this._pt;
                if ((!e || "all" === e) && function _arraysMatch(t, e) {
                        for (var r = t.length, i = r === e.length; i && r-- && t[r] === e[r];);
                        return r < 0
                    }(f, d)) return "all" === e && (this._pt = 0), lb(this);
                for (i = this._op = this._op || [], "all" !== e && (o(e) && (u = {}, ba(e, function(t) {
                        return u[t] = 1
                    }), e = u), e = function _addAliasesToVars(t, e) {
                        var r, i, n, a, s = t[0] ? _(t[0]).harness : 0,
                            o = s && s.aliases;
                        if (!o) return e;
                        for (i in r = mt({}, e), o)
                            if (i in r)
                                for (n = (a = o[i].split(",")).length; n--;) r[a[n]] = r[i];
                        return r
                    }(f, e)), l = f.length; l--;)
                    if (~d.indexOf(f[l]))
                        for (u in n = p[l], "all" === e ? (i[l] = e, s = n, a = {}) : (a = i[l] = i[l] || {}, s = e), s)(h = n && n[u]) && ("kill" in h.d && !0 !== h.d.kill(u) || ra(this, h, "_pt"), delete n[u]), "all" !== a && (a[u] = 1);
                return this._initted && !this._pt && c && lb(this), this
            }, Tween.to = function to(t, e, r) {
                return new Tween(t, e, r)
            }, Tween.from = function from(t, e) {
                return Na(1, arguments)
            }, Tween.delayedCall = function delayedCall(t, e, r, i) {
                return new Tween(e, 0, {
                    immediateRender: !1,
                    lazy: !1,
                    overwrite: !1,
                    delay: t,
                    onComplete: e,
                    onReverseComplete: e,
                    onCompleteParams: r,
                    onReverseCompleteParams: r,
                    callbackScope: i
                })
            }, Tween.fromTo = function fromTo(t, e, r) {
                return Na(2, arguments)
            }, Tween.set = function set(t, e) {
                return e.duration = 0, e.repeatDelay || (e.repeat = 0), new Tween(t, e)
            }, Tween.killTweensOf = function killTweensOf(t, e, r) {
                return I.killTweensOf(t, e, r)
            }, Tween
        }(qt);
    ja(Vt.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
    }), ba("staggerTo,staggerFrom,staggerFromTo", function(r) {
        Vt[r] = function() {
            var t = new Nt,
                e = wt.call(arguments, 0);
            return e.splice("staggerFromTo" === r ? 5 : 4, 0, 0), t[r].apply(t, e)
        }
    });

    function cc(t, e, r) {
        return t.setAttribute(e, r)
    }

    function kc(t, e, r, i) {
        i.mSet(t, e, i.m.call(i.tween, r, i.mt), i)
    }
    var Wt = function _setterPlain(t, e, r) {
            return t[e] = r
        },
        Gt = function _setterFunc(t, e, r) {
            return t[e](r)
        },
        Ht = function _setterFuncWithParam(t, e, r, i) {
            return t[e](i.fp, r)
        },
        Kt = function _getSetter(t, e) {
            return p(t[e]) ? Gt : r(t[e]) && t.setAttribute ? cc : Wt
        },
        Zt = function _renderPlain(t, e) {
            return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e)
        },
        $t = function _renderBoolean(t, e) {
            return e.set(e.t, e.p, !!(e.s + e.c * t), e)
        },
        te = function _renderComplexString(t, e) {
            var r = e._pt,
                i = "";
            if (!t && e.b) i = e.b;
            else if (1 === t && e.e) i = e.e;
            else {
                for (; r;) i = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round(1e4 * (r.s + r.c * t)) / 1e4) + i, r = r._next;
                i += e.c
            }
            e.set(e.t, e.p, i, e)
        },
        ee = function _renderPropTweens(t, e) {
            for (var r = e._pt; r;) r.r(t, r.d), r = r._next
        },
        re = function _addPluginModifier(t, e, r, i) {
            for (var n, a = this._pt; a;) n = a._next, a.p === i && a.modifier(t, e, r), a = n
        },
        ie = function _killPropTweensOf(t) {
            for (var e, r, i = this._pt; i;) r = i._next, i.p === t && !i.op || i.op === t ? ra(this, i, "_pt") : i.dep || (e = 1), i = r;
            return !e
        },
        ne = function _sortPropTweensByPriority(t) {
            for (var e, r, i, n, a = t._pt; a;) {
                for (e = a._next, r = i; r && r.pr > a.pr;) r = r._next;
                (a._prev = r ? r._prev : n) ? a._prev._next = a: i = a, (a._next = r) ? r._prev = a : n = a, a = e
            }
            t._pt = i
        },
        ae = (PropTween.prototype.modifier = function modifier(t, e, r) {
            this.mSet = this.mSet || this.set, this.set = kc, this.m = t, this.mt = r, this.tween = e
        }, PropTween);

    function PropTween(t, e, r, i, n, a, s, o, u) {
        this.t = e, this.s = i, this.c = n, this.p = r, this.r = a || Zt, this.d = s || this, this.set = o || Wt, this.pr = u || 0, (this._next = t) && (t._prev = this)
    }
    ba(_t + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(t) {
        return ut[t] = 1
    }), ot.TweenMax = ot.TweenLite = Vt, ot.TimelineLite = ot.TimelineMax = Nt, I = new Nt({
        sortChildren: !1,
        defaults: L,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
    }), Y.stringFilter = wb;
    var se = {
        registerPlugin: function registerPlugin() {
            for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
            e.forEach(function(t) {
                return function _createPlugin(t) {
                    var e = (t = !t.name && t.default || t).name,
                        r = p(t),
                        i = e && !r && t.init ? function() {
                            this._props = []
                        } : t,
                        n = {
                            init: Q,
                            render: ee,
                            add: Yt,
                            kill: ie,
                            modifier: re,
                            rawVars: 0
                        },
                        a = {
                            targetTest: 0,
                            get: 0,
                            getSetter: Kt,
                            aliases: {},
                            register: 0
                        };
                    if (Dt(), t !== i) {
                        if (ft[e]) return;
                        ja(i, ja(na(t, n), a)), mt(i.prototype, mt(n, na(t, a))), ft[i.prop = e] = i, t.targetTest && (ct.push(i), ut[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
                    }
                    P(e, i), t.register && t.register(oe, i, ae)
                }(t)
            })
        },
        timeline: function timeline(t) {
            return new Nt(t)
        },
        getTweensOf: function getTweensOf(t, e) {
            return I.getTweensOf(t, e)
        },
        getProperty: function getProperty(i, t, e, r) {
            o(i) && (i = xt(i)[0]);
            var n = _(i || {}).get,
                a = e ? ia : ha;
            return "native" === e && (e = ""), i ? t ? a((ft[t] && ft[t].get || n)(i, t, e, r)) : function(t, e, r) {
                return a((ft[t] && ft[t].get || n)(i, t, e, r))
            } : i
        },
        quickSetter: function quickSetter(r, e, i) {
            if (1 < (r = xt(r)).length) {
                var n = r.map(function(t) {
                        return oe.quickSetter(t, e, i)
                    }),
                    a = n.length;
                return function(t) {
                    for (var e = a; e--;) n[e](t)
                }
            }
            r = r[0] || {};
            var s = ft[e],
                o = _(r),
                u = o.harness && (o.harness.aliases || {})[e] || e,
                h = s ? function(t) {
                    var e = new s;
                    d._pt = 0, e.init(r, i ? t + i : t, d, 0, [r]), e.render(1, e), d._pt && ee(1, d)
                } : o.set(r, u);
            return s ? h : function(t) {
                return h(r, u, i ? t + i : t, o, 1)
            }
        },
        isTweening: function isTweening(t) {
            return 0 < I.getTweensOf(t, !0).length
        },
        defaults: function defaults(t) {
            return t && t.ease && (t.ease = Bt(t.ease, L.ease)), ma(L, t || {})
        },
        config: function config(t) {
            return ma(Y, t || {})
        },
        registerEffect: function registerEffect(t) {
            var i = t.name,
                n = t.effect,
                e = t.plugins,
                a = t.defaults,
                r = t.extendTimeline;
            (e || "").split(",").forEach(function(t) {
                return t && !ft[t] && !ot[t] && O(i + " effect requires " + t + " plugin.")
            }), dt[i] = function(t, e, r) {
                return n(xt(t), ja(e || {}, a), r)
            }, r && (Nt.prototype[i] = function(t, e, r) {
                return this.add(dt[i](t, s(e) ? e : (r = e) && {}, this), r)
            })
        },
        registerEase: function registerEase(t, e) {
            zt[t] = Bt(e)
        },
        parseEase: function parseEase(t, e) {
            return arguments.length ? Bt(t, e) : zt
        },
        getById: function getById(t) {
            return I.getById(t)
        },
        exportRoot: function exportRoot(e, r) {
            void 0 === e && (e = {});
            var i, n, a = new Nt(e);
            for (a.smoothChildTiming = t(e.smoothChildTiming), I.remove(a), a._dp = 0, a._time = a._tTime = I._time, i = I._first; i;) n = i._next, !r && !i._dur && i instanceof Vt && i.vars.onComplete === i._targets[0] || Ca(a, i, i._start - i._delay), i = n;
            return Ca(I, a, 0), a
        },
        utils: {
            wrap: function wrap(e, t, r) {
                var i = t - e;
                return Z(e) ? db(e, wrap(0, e.length), t) : Oa(r, function(t) {
                    return (i + (t - e) % i) % i + e
                })
            },
            wrapYoyo: function wrapYoyo(e, t, r) {
                var i = t - e,
                    n = 2 * i;
                return Z(e) ? db(e, wrapYoyo(0, e.length - 1), t) : Oa(r, function(t) {
                    return e + (i < (t = (n + (t - e) % n) % n || 0) ? n - t : t)
                })
            },
            distribute: Ya,
            random: _a,
            snap: $a,
            normalize: function normalize(t, e, r) {
                return Ot(t, e, 0, 1, r)
            },
            getUnit: Qa,
            clamp: function clamp(e, r, t) {
                return Oa(t, function(t) {
                    return Tt(e, r, t)
                })
            },
            splitColor: rb,
            toArray: xt,
            selector: function selector(r) {
                return r = xt(r)[0] || O("Invalid scope") || {},
                    function(t) {
                        var e = r.current || r.nativeElement || r;
                        return xt(t, e.querySelectorAll ? e : e === r ? O("Invalid scope") || a.createElement("div") : r)
                    }
            },
            mapRange: Ot,
            pipe: function pipe() {
                for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                return function(t) {
                    return e.reduce(function(t, e) {
                        return e(t)
                    }, t)
                }
            },
            unitize: function unitize(e, r) {
                return function(t) {
                    return e(parseFloat(t)) + (r || Qa(t))
                }
            },
            interpolate: function interpolate(e, r, t, i) {
                var n = isNaN(e + r) ? 0 : function(t) {
                    return (1 - t) * e + t * r
                };
                if (!n) {
                    var a, s, u, h, l, f = o(e),
                        d = {};
                    if (!0 === t && (i = 1) && (t = null), f) e = {
                        p: e
                    }, r = {
                        p: r
                    };
                    else if (Z(e) && !Z(r)) {
                        for (u = [], h = e.length, l = h - 2, s = 1; s < h; s++) u.push(interpolate(e[s - 1], e[s]));
                        h--, n = function func(t) {
                            t *= h;
                            var e = Math.min(l, ~~t);
                            return u[e](t - e)
                        }, t = r
                    } else i || (e = mt(Z(e) ? [] : {}, e));
                    if (!u) {
                        for (a in r) Yt.call(d, e, a, "get", r[a]);
                        n = function func(t) {
                            return ee(t, d) || (f ? e.p : e)
                        }
                    }
                }
                return Oa(t, n)
            },
            shuffle: Xa
        },
        install: M,
        effects: dt,
        ticker: St,
        updateRoot: Nt.updateRoot,
        plugins: ft,
        globalTimeline: I,
        core: {
            PropTween: ae,
            globals: P,
            Tween: Vt,
            Timeline: Nt,
            Animation: qt,
            getCache: _,
            _removeLinkedListItem: ra,
            suppressOverwrites: function suppressOverwrites(t) {
                return B = t
            }
        }
    };
    ba("to,from,fromTo,delayedCall,set,killTweensOf", function(t) {
        return se[t] = Vt[t]
    }), St.add(Nt.updateRoot), d = se.to({}, {
        duration: 0
    });

    function oc(t, e) {
        for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e;) r = r._next;
        return r
    }

    function qc(t, n) {
        return {
            name: t,
            rawVars: 1,
            init: function init(t, i, e) {
                e._onInit = function(t) {
                    var e, r;
                    if (o(i) && (e = {}, ba(i, function(t) {
                            return e[t] = 1
                        }), i = e), n) {
                        for (r in e = {}, i) e[r] = n(i[r]);
                        i = e
                    }! function _addModifiers(t, e) {
                        var r, i, n, a = t._targets;
                        for (r in e)
                            for (i = a.length; i--;)(n = (n = t._ptLookup[i][r]) && n.d) && (n._pt && (n = oc(n, r)), n && n.modifier && n.modifier(e[r], t, a[i], r))
                    }(t, i)
                }
            }
        }
    }
    var oe = se.registerPlugin({
        name: "attr",
        init: function init(t, e, r, i, n) {
            var a, s;
            for (a in e)(s = this.add(t, "setAttribute", (t.getAttribute(a) || 0) + "", e[a], i, n, 0, 0, a)) && (s.op = a), this._props.push(a)
        }
    }, {
        name: "endArray",
        init: function init(t, e) {
            for (var r = e.length; r--;) this.add(t, r, t[r] || 0, e[r])
        }
    }, qc("roundProps", Za), qc("modifiers"), qc("snap", $a)) || se;
    Vt.version = Nt.version = oe.version = "3.8.0", l = 1, u() && Dt();

    function _c(t, e) {
        return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
    }

    function ad(t, e) {
        return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
    }

    function bd(t, e) {
        return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
    }

    function cd(t, e) {
        var r = e.s + e.c * t;
        e.set(e.t, e.p, ~~(r + (r < 0 ? -.5 : .5)) + e.u, e)
    }

    function dd(t, e) {
        return e.set(e.t, e.p, t ? e.e : e.b, e)
    }

    function ed(t, e) {
        return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
    }

    function fd(t, e, r) {
        return t.style[e] = r
    }

    function gd(t, e, r) {
        return t.style.setProperty(e, r)
    }

    function hd(t, e, r) {
        return t._gsap[e] = r
    }

    function id(t, e, r) {
        return t._gsap.scaleX = t._gsap.scaleY = r
    }

    function jd(t, e, r, i, n) {
        var a = t._gsap;
        a.scaleX = a.scaleY = r, a.renderTransform(n, a)
    }

    function kd(t, e, r, i, n) {
        var a = t._gsap;
        a[e] = r, a.renderTransform(n, a)
    }

    function od(t, e) {
        var r = he.createElementNS ? he.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : he.createElement(t);
        return r.style ? r : he.createElement(t)
    }

    function pd(t, e, r) {
        var i = getComputedStyle(t);
        return i[e] || i.getPropertyValue(e.replace(Ie, "-$1").toLowerCase()) || i.getPropertyValue(e) || !r && pd(t, Xe(e) || e, 1) || ""
    }

    function sd() {
        (function _windowExists() {
            return "undefined" != typeof window
        })() && window.document && (ue = window, he = ue.document, le = he.documentElement, de = od("div") || {
            style: {}
        }, od("div"), Qe = Xe(Qe), Ye = Qe + "Origin", de.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", ce = !!Xe("perspective"), fe = 1)
    }

    function td(t) {
        var e, r = od("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
            i = this.parentNode,
            n = this.nextSibling,
            a = this.style.cssText;
        if (le.appendChild(r), r.appendChild(this), this.style.display = "block", t) try {
            e = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = td
        } catch (t) {} else this._gsapBBox && (e = this._gsapBBox());
        return i && (n ? i.insertBefore(this, n) : i.appendChild(this)), le.removeChild(r), this.style.cssText = a, e
    }

    function ud(t, e) {
        for (var r = e.length; r--;)
            if (t.hasAttribute(e[r])) return t.getAttribute(e[r])
    }

    function vd(e) {
        var r;
        try {
            r = e.getBBox()
        } catch (t) {
            r = td.call(e, !0)
        }
        return r && (r.width || r.height) || e.getBBox === td || (r = td.call(e, !0)), !r || r.width || r.x || r.y ? r : {
            x: +ud(e, ["x", "cx", "x1"]) || 0,
            y: +ud(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
        }
    }

    function wd(t) {
        return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !vd(t))
    }

    function xd(t, e) {
        if (e) {
            var r = t.style;
            e in Ee && e !== Ye && (e = Qe), r.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), r.removeProperty(e.replace(Ie, "-$1").toLowerCase())) : r.removeAttribute(e)
        }
    }

    function yd(t, e, r, i, n, a) {
        var s = new ae(t._pt, e, r, 0, 1, a ? ed : dd);
        return (t._pt = s).b = i, s.e = n, t._props.push(r), s
    }

    function Ad(t, e, r, i) {
        var n, a, s, o, u = parseFloat(r) || 0,
            h = (r + "").trim().substr((u + "").length) || "px",
            l = de.style,
            f = Le.test(e),
            d = "svg" === t.tagName.toLowerCase(),
            p = (d ? "client" : "offset") + (f ? "Width" : "Height"),
            c = "px" === i,
            m = "%" === i;
        return i === h || !u || Ue[i] || Ue[h] ? u : ("px" === h || c || (u = Ad(t, e, r, "px")), o = t.getCTM && wd(t), !m && "%" !== h || !Ee[e] && !~e.indexOf("adius") ? (l[f ? "width" : "height"] = 100 + (c ? h : i), a = ~e.indexOf("adius") || "em" === i && t.appendChild && !d ? t : t.parentNode, o && (a = (t.ownerSVGElement || {}).parentNode), a && a !== he && a.appendChild || (a = he.body), (s = a._gsap) && m && s.width && f && s.time === St.time ? ca(u / s.width * 100) : (!m && "%" !== h || (l.position = pd(t, "position")), a === t && (l.position = "static"), a.appendChild(de), n = de[p], a.removeChild(de), l.position = "absolute", f && m && ((s = _(a)).time = St.time, s.width = a[p]), ca(c ? n * u / 100 : n && u ? 100 / n * u : 0))) : (n = o ? t.getBBox()[f ? "width" : "height"] : t[p], ca(m ? u / n * 100 : u / 100 * n)))
    }

    function Bd(t, e, r, i) {
        var n;
        return fe || sd(), e in Ne && "transform" !== e && ~(e = Ne[e]).indexOf(",") && (e = e.split(",")[0]), Ee[e] && "transform" !== e ? (n = He(t, i), n = "transformOrigin" !== e ? n[e] : n.svg ? n.origin : Ke(pd(t, Ye)) + " " + n.zOrigin + "px") : (n = t.style[e]) && "auto" !== n && !i && !~(n + "").indexOf("calc(") || (n = Ve[e] && Ve[e](t, e, r) || pd(t, e) || aa(t, e) || ("opacity" === e ? 1 : 0)), r && !~(n + "").trim().indexOf(" ") ? Ad(t, e, n, r) + r : n
    }

    function Cd(t, e, r, i) {
        if (!r || "none" === r) {
            var n = Xe(e, t, 1),
                a = n && pd(t, n, 1);
            a && a !== r ? (e = n, r = a) : "borderColor" === e && (r = pd(t, "borderTopColor"))
        }
        var s, o, u, h, l, f, d, p, c, _, m, g, v = new ae(this._pt, t.style, e, 0, 1, te),
            y = 0,
            b = 0;
        if (v.b = r, v.e = i, r += "", "auto" === (i += "") && (t.style[e] = i, i = pd(t, e) || i, t.style[e] = r), wb(s = [r, i]), i = s[1], u = (r = s[0]).match(rt) || [], (i.match(rt) || []).length) {
            for (; o = rt.exec(i);) d = o[0], c = i.substring(y, o.index), l ? l = (l + 1) % 5 : "rgba(" !== c.substr(-5) && "hsla(" !== c.substr(-5) || (l = 1), d !== (f = u[b++] || "") && (h = parseFloat(f) || 0, m = f.substr((h + "").length), (g = "=" === d.charAt(1) ? +(d.charAt(0) + "1") : 0) && (d = d.substr(2)), p = parseFloat(d), _ = d.substr((p + "").length), y = rt.lastIndex - _.length, _ || (_ = _ || Y.units[e] || m, y === i.length && (i += _, v.e += _)), m !== _ && (h = Ad(t, e, f, _) || 0), v._pt = {
                _next: v._pt,
                p: c || 1 === b ? c : ",",
                s: h,
                c: g ? g * p : p - h,
                m: l && l < 4 || "zIndex" === e ? Math.round : 0
            });
            v.c = y < i.length ? i.substring(y, i.length) : ""
        } else v.r = "display" === e && "none" === i ? ed : dd;
        return nt.test(i) && (v.e = 0), this._pt = v
    }

    function Ed(t) {
        var e = t.split(" "),
            r = e[0],
            i = e[1] || "50%";
        return "top" !== r && "bottom" !== r && "left" !== i && "right" !== i || (t = r, r = i, i = t), e[0] = Je[r] || r, e[1] = Je[i] || i, e.join(" ")
    }

    function Fd(t, e) {
        if (e.tween && e.tween._time === e.tween._dur) {
            var r, i, n, a = e.t,
                s = a.style,
                o = e.u,
                u = a._gsap;
            if ("all" === o || !0 === o) s.cssText = "", i = 1;
            else
                for (n = (o = o.split(",")).length; - 1 < --n;) r = o[n], Ee[r] && (i = 1, r = "transformOrigin" === r ? Ye : Qe), xd(a, r);
            i && (xd(a, Qe), u && (u.svg && a.removeAttribute("transform"), He(a, 1), u.uncache = 1))
        }
    }

    function Jd(t) {
        return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
    }

    function Kd(t) {
        var e = pd(t, Qe);
        return Jd(e) ? We : e.substr(7).match(et).map(ca)
    }

    function Ld(t, e) {
        var r, i, n, a, s = t._gsap || _(t),
            o = t.style,
            u = Kd(t);
        return s.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (u = [(n = t.transform.baseVal.consolidate().matrix).a, n.b, n.c, n.d, n.e, n.f]).join(",") ? We : u : (u !== We || t.offsetParent || t === le || s.svg || (n = o.display, o.display = "block", (r = t.parentNode) && t.offsetParent || (a = 1, i = t.nextSibling, le.appendChild(t)), u = Kd(t), n ? o.display = n : xd(t, "display"), a && (i ? r.insertBefore(t, i) : r ? r.appendChild(t) : le.removeChild(t))), e && 6 < u.length ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u)
    }

    function Md(t, e, r, i, n, a) {
        var s, o, u, h = t._gsap,
            l = n || Ld(t, !0),
            f = h.xOrigin || 0,
            d = h.yOrigin || 0,
            p = h.xOffset || 0,
            c = h.yOffset || 0,
            _ = l[0],
            m = l[1],
            g = l[2],
            v = l[3],
            y = l[4],
            b = l[5],
            T = e.split(" "),
            w = parseFloat(T[0]) || 0,
            x = parseFloat(T[1]) || 0;
        r ? l !== We && (o = _ * v - m * g) && (u = w * (-m / o) + x * (_ / o) - (_ * b - m * y) / o, w = w * (v / o) + x * (-g / o) + (g * b - v * y) / o, x = u) : (w = (s = vd(t)).x + (~T[0].indexOf("%") ? w / 100 * s.width : w), x = s.y + (~(T[1] || T[0]).indexOf("%") ? x / 100 * s.height : x)), i || !1 !== i && h.smooth ? (y = w - f, b = x - d, h.xOffset = p + (y * _ + b * g) - y, h.yOffset = c + (y * m + b * v) - b) : h.xOffset = h.yOffset = 0, h.xOrigin = w, h.yOrigin = x, h.smooth = !!i, h.origin = e, h.originIsAbsolute = !!r, t.style[Ye] = "0px 0px", a && (yd(a, h, "xOrigin", f, w), yd(a, h, "yOrigin", d, x), yd(a, h, "xOffset", p, h.xOffset), yd(a, h, "yOffset", c, h.yOffset)), t.setAttribute("data-svg-origin", w + " " + x)
    }

    function Pd(t, e, r) {
        var i = Qa(e);
        return ca(parseFloat(e) + parseFloat(Ad(t, "x", r + "px", i))) + i
    }

    function Wd(t, e, r, i, n, a) {
        var s, u, h = 360,
            l = o(n),
            f = parseFloat(n) * (l && ~n.indexOf("rad") ? Fe : 1),
            d = a ? f * a : f - i,
            p = i + d + "deg";
        return l && ("short" === (s = n.split("_")[1]) && (d %= h) !== d % 180 && (d += d < 0 ? h : -h), "cw" === s && d < 0 ? d = (d + 36e9) % h - ~~(d / h) * h : "ccw" === s && 0 < d && (d = (d - 36e9) % h - ~~(d / h) * h)), t._pt = u = new ae(t._pt, e, r, i, d, ad), u.e = p, u.u = "deg", t._props.push(r), u
    }

    function Xd(t, e) {
        for (var r in e) t[r] = e[r];
        return t
    }

    function Yd(t, e, r) {
        var i, n, a, s, o, u, h, l = Xd({}, r._gsap),
            f = r.style;
        for (n in l.svg ? (a = r.getAttribute("transform"), r.setAttribute("transform", ""), f[Qe] = e, i = He(r, 1), xd(r, Qe), r.setAttribute("transform", a)) : (a = getComputedStyle(r)[Qe], f[Qe] = e, i = He(r, 1), f[Qe] = a), Ee)(a = l[n]) !== (s = i[n]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) < 0 && (o = Qa(a) !== (h = Qa(s)) ? Ad(r, n, a, h) : parseFloat(a), u = parseFloat(s), t._pt = new ae(t._pt, i, n, o, u - o, _c), t._pt.u = h || 0, t._props.push(n));
        Xd(i, l)
    }
    var ue, he, le, fe, de, pe, ce, _e = zt.Power0,
        me = zt.Power1,
        ge = zt.Power2,
        ve = zt.Power3,
        ye = zt.Power4,
        be = zt.Linear,
        Te = zt.Quad,
        we = zt.Cubic,
        xe = zt.Quart,
        Oe = zt.Quint,
        Me = zt.Strong,
        ke = zt.Elastic,
        Ae = zt.Back,
        Pe = zt.SteppedEase,
        Ce = zt.Bounce,
        Se = zt.Sine,
        De = zt.Expo,
        ze = zt.Circ,
        Ee = {},
        Fe = 180 / Math.PI,
        Re = Math.PI / 180,
        Be = Math.atan2,
        Ie = /([A-Z])/g,
        Le = /(?:left|right|width|margin|padding|x)/i,
        qe = /[\s,\(]\S/,
        Ne = {
            autoAlpha: "opacity,visibility",
            scale: "scaleX,scaleY",
            alpha: "opacity"
        },
        Qe = "transform",
        Ye = Qe + "Origin",
        je = "O,Moz,ms,Ms,Webkit".split(","),
        Xe = function _checkPropPrefix(t, e, r) {
            var i = (e || de).style,
                n = 5;
            if (t in i && !r) return t;
            for (t = t.charAt(0).toUpperCase() + t.substr(1); n-- && !(je[n] + t in i););
            return n < 0 ? null : (3 === n ? "ms" : 0 <= n ? je[n] : "") + t
        },
        Ue = {
            deg: 1,
            rad: 1,
            turn: 1
        },
        Je = {
            top: "0%",
            bottom: "100%",
            left: "0%",
            right: "100%",
            center: "50%"
        },
        Ve = {
            clearProps: function clearProps(t, e, r, i, n) {
                if ("isFromStart" !== n.data) {
                    var a = t._pt = new ae(t._pt, e, r, 0, 0, Fd);
                    return a.u = i, a.pr = -10, a.tween = n, t._props.push(r), 1
                }
            }
        },
        We = [1, 0, 0, 1, 0, 0],
        Ge = {},
        He = function _parseTransform(t, e) {
            var r = t._gsap || new Lt(t);
            if ("x" in r && !e && !r.uncache) return r;
            var i, n, a, s, o, u, h, l, f, d, p, c, _, m, g, v, y, b, T, w, x, O, M, k, A, P, C, S, D, z, E, F, R = t.style,
                B = r.scaleX < 0,
                I = "deg",
                L = pd(t, Ye) || "0";
            return i = n = a = u = h = l = f = d = p = 0, s = o = 1, r.svg = !(!t.getCTM || !wd(t)), m = Ld(t, r.svg), r.svg && (k = (!r.uncache || "0px 0px" === L) && !e && t.getAttribute("data-svg-origin"), Md(t, k || L, !!k || r.originIsAbsolute, !1 !== r.smooth, m)), c = r.xOrigin || 0, _ = r.yOrigin || 0, m !== We && (b = m[0], T = m[1], w = m[2], x = m[3], i = O = m[4], n = M = m[5], 6 === m.length ? (s = Math.sqrt(b * b + T * T), o = Math.sqrt(x * x + w * w), u = b || T ? Be(T, b) * Fe : 0, (f = w || x ? Be(w, x) * Fe + u : 0) && (o *= Math.abs(Math.cos(f * Re))), r.svg && (i -= c - (c * b + _ * w), n -= _ - (c * T + _ * x))) : (F = m[6], z = m[7], C = m[8], S = m[9], D = m[10], E = m[11], i = m[12], n = m[13], a = m[14], h = (g = Be(F, D)) * Fe, g && (k = O * (v = Math.cos(-g)) + C * (y = Math.sin(-g)), A = M * v + S * y, P = F * v + D * y, C = O * -y + C * v, S = M * -y + S * v, D = F * -y + D * v, E = z * -y + E * v, O = k, M = A, F = P), l = (g = Be(-w, D)) * Fe, g && (v = Math.cos(-g), E = x * (y = Math.sin(-g)) + E * v, b = k = b * v - C * y, T = A = T * v - S * y, w = P = w * v - D * y), u = (g = Be(T, b)) * Fe, g && (k = b * (v = Math.cos(g)) + T * (y = Math.sin(g)), A = O * v + M * y, T = T * v - b * y, M = M * v - O * y, b = k, O = A), h && 359.9 < Math.abs(h) + Math.abs(u) && (h = u = 0, l = 180 - l), s = ca(Math.sqrt(b * b + T * T + w * w)), o = ca(Math.sqrt(M * M + F * F)), g = Be(O, M), f = 2e-4 < Math.abs(g) ? g * Fe : 0, p = E ? 1 / (E < 0 ? -E : E) : 0), r.svg && (k = t.getAttribute("transform"), r.forceCSS = t.setAttribute("transform", "") || !Jd(pd(t, Qe)), k && t.setAttribute("transform", k))), 90 < Math.abs(f) && Math.abs(f) < 270 && (B ? (s *= -1, f += u <= 0 ? 180 : -180, u += u <= 0 ? 180 : -180) : (o *= -1, f += f <= 0 ? 180 : -180)), r.x = i - ((r.xPercent = i && (r.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0))) ? t.offsetWidth * r.xPercent / 100 : 0) + "px", r.y = n - ((r.yPercent = n && (r.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0))) ? t.offsetHeight * r.yPercent / 100 : 0) + "px", r.z = a + "px", r.scaleX = ca(s), r.scaleY = ca(o), r.rotation = ca(u) + I, r.rotationX = ca(h) + I, r.rotationY = ca(l) + I, r.skewX = f + I, r.skewY = d + I, r.transformPerspective = p + "px", (r.zOrigin = parseFloat(L.split(" ")[2]) || 0) && (R[Ye] = Ke(L)), r.xOffset = r.yOffset = 0, r.force3D = Y.force3D, r.renderTransform = r.svg ? ir : ce ? rr : Ze, r.uncache = 0, r
        },
        Ke = function _firstTwoOnly(t) {
            return (t = t.split(" "))[0] + " " + t[1]
        },
        Ze = function _renderNon3DTransforms(t, e) {
            e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, rr(t, e)
        },
        $e = "0deg",
        tr = "0px",
        er = ") ",
        rr = function _renderCSSTransforms(t, e) {
            var r = e || this,
                i = r.xPercent,
                n = r.yPercent,
                a = r.x,
                s = r.y,
                o = r.z,
                u = r.rotation,
                h = r.rotationY,
                l = r.rotationX,
                f = r.skewX,
                d = r.skewY,
                p = r.scaleX,
                c = r.scaleY,
                _ = r.transformPerspective,
                m = r.force3D,
                g = r.target,
                v = r.zOrigin,
                y = "",
                b = "auto" === m && t && 1 !== t || !0 === m;
            if (v && (l !== $e || h !== $e)) {
                var T, w = parseFloat(h) * Re,
                    x = Math.sin(w),
                    O = Math.cos(w);
                w = parseFloat(l) * Re, T = Math.cos(w), a = Pd(g, a, x * T * -v), s = Pd(g, s, -Math.sin(w) * -v), o = Pd(g, o, O * T * -v + v)
            }
            _ !== tr && (y += "perspective(" + _ + er), (i || n) && (y += "translate(" + i + "%, " + n + "%) "), !b && a === tr && s === tr && o === tr || (y += o !== tr || b ? "translate3d(" + a + ", " + s + ", " + o + ") " : "translate(" + a + ", " + s + er), u !== $e && (y += "rotate(" + u + er), h !== $e && (y += "rotateY(" + h + er), l !== $e && (y += "rotateX(" + l + er), f === $e && d === $e || (y += "skew(" + f + ", " + d + er), 1 === p && 1 === c || (y += "scale(" + p + ", " + c + er), g.style[Qe] = y || "translate(0, 0)"
        },
        ir = function _renderSVGTransforms(t, e) {
            var r, i, n, a, s, o = e || this,
                u = o.xPercent,
                h = o.yPercent,
                l = o.x,
                f = o.y,
                d = o.rotation,
                p = o.skewX,
                c = o.skewY,
                _ = o.scaleX,
                m = o.scaleY,
                g = o.target,
                v = o.xOrigin,
                y = o.yOrigin,
                b = o.xOffset,
                T = o.yOffset,
                w = o.forceCSS,
                x = parseFloat(l),
                O = parseFloat(f);
            d = parseFloat(d), p = parseFloat(p), (c = parseFloat(c)) && (p += c = parseFloat(c), d += c), d || p ? (d *= Re, p *= Re, r = Math.cos(d) * _, i = Math.sin(d) * _, n = Math.sin(d - p) * -m, a = Math.cos(d - p) * m, p && (c *= Re, s = Math.tan(p - c), n *= s = Math.sqrt(1 + s * s), a *= s, c && (s = Math.tan(c), r *= s = Math.sqrt(1 + s * s), i *= s)), r = ca(r), i = ca(i), n = ca(n), a = ca(a)) : (r = _, a = m, i = n = 0), (x && !~(l + "").indexOf("px") || O && !~(f + "").indexOf("px")) && (x = Ad(g, "x", l, "px"), O = Ad(g, "y", f, "px")), (v || y || b || T) && (x = ca(x + v - (v * r + y * n) + b), O = ca(O + y - (v * i + y * a) + T)), (u || h) && (s = g.getBBox(), x = ca(x + u / 100 * s.width), O = ca(O + h / 100 * s.height)), s = "matrix(" + r + "," + i + "," + n + "," + a + "," + x + "," + O + ")", g.setAttribute("transform", s), w && (g.style[Qe] = s)
        };
    ba("padding,margin,Width,Radius", function(e, r) {
        var t = "Right",
            i = "Bottom",
            n = "Left",
            o = (r < 3 ? ["Top", t, i, n] : ["Top" + n, "Top" + t, i + t, i + n]).map(function(t) {
                return r < 2 ? e + t : "border" + t + e
            });
        Ve[1 < r ? "border" + e : e] = function(e, t, r, i, n) {
            var a, s;
            if (arguments.length < 4) return a = o.map(function(t) {
                return Bd(e, t, r)
            }), 5 === (s = a.join(" ")).split(a[0]).length ? a[0] : s;
            a = (i + "").split(" "), s = {}, o.forEach(function(t, e) {
                return s[t] = a[e] = a[e] || a[(e - 1) / 2 | 0]
            }), e.init(t, s, n)
        }
    });
    var nr, ar, sr, or = {
        name: "css",
        register: sd,
        targetTest: function targetTest(t) {
            return t.style && t.nodeType
        },
        init: function init(t, e, r, i, n) {
            var a, s, u, h, l, f, d, p, c, _, m, g, v, y, b, T = this._props,
                w = t.style,
                x = r.vars.startAt;
            for (d in fe || sd(), e)
                if ("autoRound" !== d && (s = e[d], !ft[d] || !Tb(d, e, r, i, t, n)))
                    if (l = typeof s, f = Ve[d], "function" === l && (l = typeof(s = s.call(r, i, t, n))), "string" === l && ~s.indexOf("random(") && (s = gb(s)), f) f(this, t, d, s, r) && (b = 1);
                    else if ("--" === d.substr(0, 2)) a = (getComputedStyle(t).getPropertyValue(d) + "").trim(), s += "", Pt.lastIndex = 0, Pt.test(a) || (p = Qa(a), c = Qa(s)), c ? p !== c && (a = Ad(t, d, a, c) + c) : p && (s += p), this.add(w, "setProperty", a, s, i, n, 0, 0, d), T.push(d);
            else if ("undefined" !== l) {
                if (x && d in x ? (a = "function" == typeof x[d] ? x[d].call(r, i, t, n) : x[d], d in Y.units && !Qa(a) && (a += Y.units[d]), o(a) && ~a.indexOf("random(") && (a = gb(a)), "=" === (a + "").charAt(1) && (a = Bd(t, d))) : a = Bd(t, d), h = parseFloat(a), (_ = "string" === l && "=" === s.charAt(1) ? +(s.charAt(0) + "1") : 0) && (s = s.substr(2)), u = parseFloat(s), d in Ne && ("autoAlpha" === d && (1 === h && "hidden" === Bd(t, "visibility") && u && (h = 0), yd(this, w, "visibility", h ? "inherit" : "hidden", u ? "inherit" : "hidden", !u)), "scale" !== d && "transform" !== d && ~(d = Ne[d]).indexOf(",") && (d = d.split(",")[0])), m = d in Ee)
                    if (g || ((v = t._gsap).renderTransform && !e.parseTransform || He(t, e.parseTransform), y = !1 !== e.smoothOrigin && v.smooth, (g = this._pt = new ae(this._pt, w, Qe, 0, 1, v.renderTransform, v, 0, -1)).dep = 1), "scale" === d) this._pt = new ae(this._pt, v, "scaleY", v.scaleY, (_ ? _ * u : u - v.scaleY) || 0), T.push("scaleY", d), d += "X";
                    else {
                        if ("transformOrigin" === d) {
                            s = Ed(s), v.svg ? Md(t, s, 0, y, 0, this) : ((c = parseFloat(s.split(" ")[2]) || 0) !== v.zOrigin && yd(this, v, "zOrigin", v.zOrigin, c), yd(this, w, d, Ke(a), Ke(s)));
                            continue
                        }
                        if ("svgOrigin" === d) {
                            Md(t, s, 1, y, 0, this);
                            continue
                        }
                        if (d in Ge) {
                            Wd(this, v, d, h, s, _);
                            continue
                        }
                        if ("smoothOrigin" === d) {
                            yd(this, v, "smooth", v.smooth, s);
                            continue
                        }
                        if ("force3D" === d) {
                            v[d] = s;
                            continue
                        }
                        if ("transform" === d) {
                            Yd(this, s, t);
                            continue
                        }
                    }
                else d in w || (d = Xe(d) || d);
                if (m || (u || 0 === u) && (h || 0 === h) && !qe.test(s) && d in w) u = u || 0, (p = (a + "").substr((h + "").length)) !== (c = Qa(s) || (d in Y.units ? Y.units[d] : p)) && (h = Ad(t, d, a, c)), this._pt = new ae(this._pt, m ? v : w, d, h, _ ? _ * u : u - h, m || "px" !== c && "zIndex" !== d || !1 === e.autoRound ? _c : cd), this._pt.u = c || 0, p !== c && "%" !== c && (this._pt.b = a, this._pt.r = bd);
                else if (d in w) Cd.call(this, t, d, a, s);
                else {
                    if (!(d in t)) {
                        N(d, s);
                        continue
                    }
                    this.add(t, d, a || t[d], s, i, n)
                }
                T.push(d)
            }
            b && ne(this)
        },
        get: Bd,
        aliases: Ne,
        getSetter: function getSetter(t, e, i) {
            var n = Ne[e];
            return n && n.indexOf(",") < 0 && (e = n), e in Ee && e !== Ye && (t._gsap.x || Bd(t, "x")) ? i && pe === i ? "scale" === e ? id : hd : (pe = i || {}) && ("scale" === e ? jd : kd) : t.style && !r(t.style[e]) ? fd : ~e.indexOf("-") ? gd : Kt(t, e)
        },
        core: {
            _removeProperty: xd,
            _getMatrix: Ld
        }
    };
    oe.utils.checkPrefix = Xe, sr = ba((nr = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") + "," + (ar = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function(t) {
        Ee[t] = 1
    }), ba(ar, function(t) {
        Y.units[t] = "deg", Ge[t] = 1
    }), Ne[sr[13]] = nr + "," + ar, ba("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function(t) {
        var e = t.split(":");
        Ne[e[1]] = sr[e[0]]
    }), ba("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(t) {
        Y.units[t] = "px"
    }), oe.registerPlugin(or);
    var ur = oe.registerPlugin(or) || oe,
        hr = ur.core.Tween;
    e.Back = Ae, e.Bounce = Ce, e.CSSPlugin = or, e.Circ = ze, e.Cubic = we, e.Elastic = ke, e.Expo = De, e.Linear = be, e.Power0 = _e, e.Power1 = me, e.Power2 = ge, e.Power3 = ve, e.Power4 = ye, e.Quad = Te, e.Quart = xe, e.Quint = Oe, e.Sine = Se, e.SteppedEase = Pe, e.Strong = Me, e.TimelineLite = Nt, e.TimelineMax = Nt, e.TweenLite = Vt, e.TweenMax = hr, e.default = ur, e.gsap = ur;
    if (typeof(window) === "undefined" || window !== e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    } else {
        delete e.default
    }
});
/*!
 * imagesLoaded PACKAGED v5.0.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
(function(global, factory) {
    if (typeof module == 'object' && module.exports) {
        module.exports = factory();
    } else {
        global.EvEmitter = factory();
    }
}(typeof window != 'undefined' ? window : this, function() {
    function EvEmitter() {}
    let proto = EvEmitter.prototype;
    proto.on = function(eventName, listener) {
        if (!eventName || !listener) return this;
        let events = this._events = this._events || {};
        let listeners = events[eventName] = events[eventName] || [];
        if (!listeners.includes(listener)) {
            listeners.push(listener);
        }
        return this;
    };
    proto.once = function(eventName, listener) {
        if (!eventName || !listener) return this;
        this.on(eventName, listener);
        let onceEvents = this._onceEvents = this._onceEvents || {};
        let onceListeners = onceEvents[eventName] = onceEvents[eventName] || {};
        onceListeners[listener] = true;
        return this;
    };
    proto.off = function(eventName, listener) {
        let listeners = this._events && this._events[eventName];
        if (!listeners || !listeners.length) return this;
        let index = listeners.indexOf(listener);
        if (index != -1) {
            listeners.splice(index, 1);
        }
        return this;
    };
    proto.emitEvent = function(eventName, args) {
        let listeners = this._events && this._events[eventName];
        if (!listeners || !listeners.length) return this;
        listeners = listeners.slice(0);
        args = args || [];
        let onceListeners = this._onceEvents && this._onceEvents[eventName];
        for (let listener of listeners) {
            let isOnce = onceListeners && onceListeners[listener];
            if (isOnce) {
                this.off(eventName, listener);
                delete onceListeners[listener];
            }
            listener.apply(this, args);
        }
        return this;
    };
    proto.allOff = function() {
        delete this._events;
        delete this._onceEvents;
        return this;
    };
    return EvEmitter;
}));
/*!
 * imagesLoaded v5.0.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
(function(window, factory) {
    if (typeof module == 'object' && module.exports) {
        module.exports = factory(window, require('ev-emitter'));
    } else {
        window.imagesLoaded = factory(window, window.EvEmitter);
    }
})(typeof window !== 'undefined' ? window : this, function factory(window, EvEmitter) {
    let $ = window.jQuery;
    let console = window.console;

    function makeArray(obj) {
        if (Array.isArray(obj)) return obj;
        let isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';
        if (isArrayLike) return [...obj];
        return [obj];
    }

    function ImagesLoaded(elem, options, onAlways) {
        if (!(this instanceof ImagesLoaded)) {
            return new ImagesLoaded(elem, options, onAlways);
        }
        let queryElem = elem;
        if (typeof elem == 'string') {
            queryElem = document.querySelectorAll(elem);
        }
        if (!queryElem) {
            console.error(`Bad element for imagesLoaded ${queryElem||elem}`);
            return;
        }
        this.elements = makeArray(queryElem);
        this.options = {};
        if (typeof options == 'function') {
            onAlways = options;
        } else {
            Object.assign(this.options, options);
        }
        if (onAlways) this.on('always', onAlways);
        this.getImages();
        if ($) this.jqDeferred = new $.Deferred();
        setTimeout(this.check.bind(this));
    }
    ImagesLoaded.prototype = Object.create(EvEmitter.prototype);
    ImagesLoaded.prototype.getImages = function() {
        this.images = [];
        this.elements.forEach(this.addElementImages, this);
    };
    const elementNodeTypes = [1, 9, 11];
    ImagesLoaded.prototype.addElementImages = function(elem) {
        if (elem.nodeName === 'IMG') {
            this.addImage(elem);
        }
        if (this.options.background === true) {
            this.addElementBackgroundImages(elem);
        }
        let {
            nodeType
        } = elem;
        if (!nodeType || !elementNodeTypes.includes(nodeType)) return;
        let childImgs = elem.querySelectorAll('img');
        for (let img of childImgs) {
            this.addImage(img);
        }
        if (typeof this.options.background == 'string') {
            let children = elem.querySelectorAll(this.options.background);
            for (let child of children) {
                this.addElementBackgroundImages(child);
            }
        }
    };
    const reURL = /url\((['"])?(.*?)\1\)/gi;
    ImagesLoaded.prototype.addElementBackgroundImages = function(elem) {
        let style = getComputedStyle(elem);
        if (!style) return;
        let matches = reURL.exec(style.backgroundImage);
        while (matches !== null) {
            let url = matches && matches[2];
            if (url) {
                this.addBackground(url, elem);
            }
            matches = reURL.exec(style.backgroundImage);
        }
    };
    ImagesLoaded.prototype.addImage = function(img) {
        let loadingImage = new LoadingImage(img);
        this.images.push(loadingImage);
    };
    ImagesLoaded.prototype.addBackground = function(url, elem) {
        let background = new Background(url, elem);
        this.images.push(background);
    };
    ImagesLoaded.prototype.check = function() {
        this.progressedCount = 0;
        this.hasAnyBroken = false;
        if (!this.images.length) {
            this.complete();
            return;
        }
        let onProgress = (image, elem, message) => {
            setTimeout(() => {
                this.progress(image, elem, message);
            });
        };
        this.images.forEach(function(loadingImage) {
            loadingImage.once('progress', onProgress);
            loadingImage.check();
        });
    };
    ImagesLoaded.prototype.progress = function(image, elem, message) {
        this.progressedCount++;
        this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;
        this.emitEvent('progress', [this, image, elem]);
        if (this.jqDeferred && this.jqDeferred.notify) {
            this.jqDeferred.notify(this, image);
        }
        if (this.progressedCount === this.images.length) {
            this.complete();
        }
        if (this.options.debug && console) {
            console.log(`progress: ${message}`, image, elem);
        }
    };
    ImagesLoaded.prototype.complete = function() {
        let eventName = this.hasAnyBroken ? 'fail' : 'done';
        this.isComplete = true;
        this.emitEvent(eventName, [this]);
        this.emitEvent('always', [this]);
        if (this.jqDeferred) {
            let jqMethod = this.hasAnyBroken ? 'reject' : 'resolve';
            this.jqDeferred[jqMethod](this);
        }
    };

    function LoadingImage(img) {
        this.img = img;
    }
    LoadingImage.prototype = Object.create(EvEmitter.prototype);
    LoadingImage.prototype.check = function() {
        let isComplete = this.getIsImageComplete();
        if (isComplete) {
            this.confirm(this.img.naturalWidth !== 0, 'naturalWidth');
            return;
        }
        this.proxyImage = new Image();
        if (this.img.crossOrigin) {
            this.proxyImage.crossOrigin = this.img.crossOrigin;
        }
        this.proxyImage.addEventListener('load', this);
        this.proxyImage.addEventListener('error', this);
        this.img.addEventListener('load', this);
        this.img.addEventListener('error', this);
        this.proxyImage.src = this.img.currentSrc || this.img.src;
    };
    LoadingImage.prototype.getIsImageComplete = function() {
        return this.img.complete && this.img.naturalWidth;
    };
    LoadingImage.prototype.confirm = function(isLoaded, message) {
        this.isLoaded = isLoaded;
        let {
            parentNode
        } = this.img;
        let elem = parentNode.nodeName === 'PICTURE' ? parentNode : this.img;
        this.emitEvent('progress', [this, elem, message]);
    };
    LoadingImage.prototype.handleEvent = function(event) {
        let method = 'on' + event.type;
        if (this[method]) {
            this[method](event);
        }
    };
    LoadingImage.prototype.onload = function() {
        this.confirm(true, 'onload');
        this.unbindEvents();
    };
    LoadingImage.prototype.onerror = function() {
        this.confirm(false, 'onerror');
        this.unbindEvents();
    };
    LoadingImage.prototype.unbindEvents = function() {
        this.proxyImage.removeEventListener('load', this);
        this.proxyImage.removeEventListener('error', this);
        this.img.removeEventListener('load', this);
        this.img.removeEventListener('error', this);
    };

    function Background(url, element) {
        this.url = url;
        this.element = element;
        this.img = new Image();
    }
    Background.prototype = Object.create(LoadingImage.prototype);
    Background.prototype.check = function() {
        this.img.addEventListener('load', this);
        this.img.addEventListener('error', this);
        this.img.src = this.url;
        let isComplete = this.getIsImageComplete();
        if (isComplete) {
            this.confirm(this.img.naturalWidth !== 0, 'naturalWidth');
            this.unbindEvents();
        }
    };
    Background.prototype.unbindEvents = function() {
        this.img.removeEventListener('load', this);
        this.img.removeEventListener('error', this);
    };
    Background.prototype.confirm = function(isLoaded, message) {
        this.isLoaded = isLoaded;
        this.emitEvent('progress', [this, this.element, message]);
    };
    ImagesLoaded.makeJQueryPlugin = function(jQuery) {
        jQuery = jQuery || window.jQuery;
        if (!jQuery) return;
        $ = jQuery;
        $.fn.imagesLoaded = function(options, onAlways) {
            let instance = new ImagesLoaded(this, options, onAlways);
            return instance.jqDeferred.promise($(this));
        };
    };
    ImagesLoaded.makeJQueryPlugin();
    return ImagesLoaded;
});
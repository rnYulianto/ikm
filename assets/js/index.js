gsap.timeline()
    .from('.main-intro', { scale: 1.5, duration: 1 })
    .from('#face-text', { opacity: 0, duration: .1 })
    .from('#face-text', { duration: 1.5, y: 100 })

var tl = gsap.timeline(
    {
        scrollTrigger: {
            trigger: '#sdgs',
            start: 'top 90%',
            end: 'bottom bottom',
            // pin: true,
            // markers: true,
            scrub: true
        }
    }
).add('enter');
tl.from('#row1 path', { duration: 2, x: "100vw", stagger: 0.1 }, 'enter')
tl.from('#row2 path', { duration: 2, x: "-100vw", stagger: 0.1 }, 'enter')
tl.from('#row3 > *', { duration: 2, x: "100vw", stagger: 0.1 }, 'enter')
tl.fromTo('path.gray', { duration: 1, filter: "grayscale(0%) opacity(100%)" }, { duration: 1, filter: "grayscale(100%) opacity(15%)" })
tl.fromTo('#text-sdgs', { opacity: 0 }, { opacity: 1 })


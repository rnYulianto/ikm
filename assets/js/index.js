gsap.timeline()
    .from('.main-intro', { scale: 1.5, duration: 1 })
    .from('#face-text', { opacity: 0, duration: .1 })
    .from('#face-text', { duration: 1.5, y: 100 })
// gsap.timeline({
//     scrollTrigger: {
//         trigger: '#cover',
//         start: 'top top',
//         end: 'bottom 30%',
//         // pin: true,
//         markers: true,
//         scrub: true
//     }
// }).to('.main-intro', {"letter-spacing": "100px"})

ScrollTrigger.create({
    trigger: '#sdgs',
    // markers: {
    //     indent: 200
    // },
    pin: true,
    start: "top top",
    end: "bottom",
    scrub: true,
    pinSpacing: false
})
var tl = gsap.timeline(
    {
        scrollTrigger: {
            immediateRender: true,
            trigger: '#sdgs',
            start: 'top center',
            // end: (self) => {
            //     return self.previous().end;
            // },
            end: 'bottom bottom',
            scrub: true,
            // markers: true
        }
    }
)
tl.from('#row1 path', { duration: 2, x: "25vw", stagger: 0.1 }, 'enter')
tl.from('#row2 path', { duration: 2, x: "-25vw", stagger: 0.1 }, 'enter')
tl.from('#row3 > *', { duration: 2, x: "25vw", stagger: 0.1 }, 'enter')
tl.fromTo('path.gray', { filter: "grayscale(0%) opacity(100%)" }, { duration: 2, filter: "grayscale(100%) opacity(15%)" })
tl.fromTo('#text-sdgs', { opacity: 0 }, { duration: 3, opacity: 1 })

var gkTl = gsap.timeline({
    scrollTrigger: {
        // immediateRender: true,
        trigger: "#gk",
        start: 'top top',
        end: '+=9000 bottom',
        scrub: true,
        pin: true,
        // markers: true
    }
}).add('text2Enter')
gkTl.to('#line', {x: '100vw'})
gkTl.from('#gkText1', {y:'50vh'})
gkTl.set('#gkText1Container', {z: 15}, 'text2Enter')
gkTl.set('#gkText2', {opacity: 1}, 'text2Enter')
gkTl.from('#gkText2', {y:'-50vh'})
gkTl.add('air')
gkTl.to('#air', {color: 'orange'}, 'air')
gkTl.from('#gambar-air',{y: '50vh'}, 'air' )
gkTl.add('listrik')
gkTl.to('#air', {color: 'black'}, 'listrik')
gkTl.to('#listrik', {color: 'orange'}, 'listrik')
gkTl.to('#gambar-air',{x: '50vh'}, 'listrik' )
gkTl.from('#gambar-listrik',{y: '50vh'}, 'listrik' )
gkTl.add('makan')
gkTl.to('#listrik', {color: 'black'}, 'makan')
gkTl.to('#makan', {color: 'orange'}, 'makan')
gkTl.to('#gambar-listrik',{x: '50vh'}, 'makan' )
gkTl.from('#gambar-makan',{y: '50vh'}, 'makan' )
gkTl.set('#makan', {delay: 0.1})


function getPeopleTrigger(num){
    return {
        scrollTrigger: {
            trigger: "#people-story-"+num,
            start: 'top center',
            end: 'top 25%',
            scrub: true,
            pinSpacing: false,
            // markers: true
        }
    }
}


var peopleTimeline1 = gsap.timeline(getPeopleTrigger(2)).add('change')
peopleTimeline1.to('#people g', {fill: 'gray', 'fill-opacity': .1}, 'change')
peopleTimeline1.to('g.moneter, g.both', {fill: 'orange', 'fill-opacity': 1}, 'change')

var peopleTimeline2 = gsap.timeline(getPeopleTrigger(3)).add('change')
peopleTimeline2.to('#people g', {fill: 'gray', 'fill-opacity': .1}, 'change')
peopleTimeline2.to('g.multi, g.both', {fill: 'gray', 'fill-opacity': 1}, 'change')

var peopleTimeline2 = gsap.timeline(getPeopleTrigger(4)).add('change')
peopleTimeline2.to('#people g', {fill: 'gray', 'fill-opacity': .1}, 'change')
peopleTimeline2.to('g.both', {fill: 'red', 'fill-opacity': 1}, 'change')

var peopleTimeline2 = gsap.timeline(getPeopleTrigger(5)).add('change')
peopleTimeline2.to('#people g', {fill: 'gray', 'fill-opacity': .1}, 'change')
peopleTimeline2.to('g.multi', {fill: 'gray', 'fill-opacity': 1}, 'change')

var peopleTimeline2 = gsap.timeline(getPeopleTrigger(6)).add('change')
peopleTimeline2.to('#people g', {fill: 'gray', 'fill-opacity': .1}, 'change')
peopleTimeline2.to('g.both', {fill: 'red', 'fill-opacity': 1}, 'change')
peopleTimeline2.to('g.moneter', {fill: 'orange', 'fill-opacity': 1}, 'change')
peopleTimeline2.to('g.multi', {fill: 'gray', 'fill-opacity': 1}, 'change')

gsap.registerPlugin(ScrollTrigger);


const timelineOne = gsap.timeline();

timelineOne.from("#tittle,.navlinks",{
    y : -100,
    duration : 0.4,
    opacity:0,
    delay : 0.7,
    stagger:0.2,
});


timelineOne.from(".hero-text",{
    x : -200,
    opacity : 0,
    stagger : 0.2,
});
timelineOne.from("#page1 .left button",{
    opacity : 0,
});
timelineOne.from("#page1 .right img",{
    x : 200,
    opacity : 0,
},"-=0.6");
timelineOne.from(".brand-logos img",{
    opacity : 0,
    stagger : 0.2
})

// timelineOne.from("#page1 .brand-logos .first",{
//     opacity : 0,
//     stagger : 0.3,
// })
// timelineOne.from("#page1 .brand-logos .second",{
//     opacity : 0,
//     stagger : -0.3,
// },"-=0.8")
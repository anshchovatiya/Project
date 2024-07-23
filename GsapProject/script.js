gsap.registerPlugin(ScrollTrigger);


// this control animation of the first page
function firstTimeline(){

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
    timelineOne.from("#page1 .brand-logos .first",{
        opacity : 0,
        stagger : 0.3,
    },"brand")
    timelineOne.from("#page1 .brand-logos .second",{
        opacity : 0,
        stagger : -0.3,
    },"brand")

}

firstTimeline();

function secondTimeline(){

    let secondTimeline = gsap.timeline({
        scrollTrigger : {
            trigger : "#page2",
            start : "top 60%",
            end : "top 20%",
            scrub : 1,
            scroller : "body",
    
        }
    });
    
    secondTimeline.from(".pageTwoHead",{
        opacity : 0,
        y : 50,
    })
    
    secondTimeline.from(".gitBoxes>div:nth-child(1)",{
        x : -200,
        opacity : 0,
    },"box1")
    
    secondTimeline.from(".gitBoxes>div:nth-child(2)",{
        x : 200,
        opacity : 0,
    },"box1")
    secondTimeline.from(".gitBoxes>div:nth-child(3)",{
        x : -200,
        opacity : 0,
    },"box2")
    
    secondTimeline.from(".gitBoxes>div:nth-child(4)",{
        x : 200,
        opacity : 0,
    },"box2")
}

secondTimeline();

let thirdTimeLine = gsap.timeline({
    scrollTrigger : {
        trigger : "#page3",
        start : "top 60%",
        end : "top 20%",
        scrub : 1,
        scroller : "body",
    }
});

thirdTimeLine.from("#page3>div:nth-child(1)",{
    opacity : 0,
});

thirdTimeLine.from("#page3>div:nth-child(2)",{
    y : 80,
    opacity : 0,
})

thirdTimeLine.from("#page3>div:nth-child(3)",{
    opacity : 0,
   
})

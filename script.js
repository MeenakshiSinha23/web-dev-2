var timeout;

const scroll = new LocomotiveScroll({
    el: document.querySelector('#container'),
    smooth: true
});
// el wo top element hai hmare me main html k top k element jisme sara kaam ho rha hai
// function coordinate(event){
//     let x=event.clientX;
//     let y=event.clientY;
//     console.log(x,y);
//     const ball=document.querySelector('.ball');
//     document.addEventListener('mousemove', (event)=>{
//         ball.style.transform=`translate(${x}px,${y}px)`;
//     });
// }
// coordinate();
function firstPageAnim(){
    var tl=gsap.timeline();
    tl.from("#nav",{
        y:"-10",
        opacity:0,
        duration:1.5,
        ease: Expo.easeInOut
        })
        .to(".boundingelem",{
            y:0,
           
            duration:2,
            stagger:.2,
            ease: Expo.easeInOut
            })
            .from("#herofooter",{
               y:-'10',
               opacity:0,
               duration:1.5,
               delay:-1,
               ease:Expo.easeInOut,
                });

}
firstPageAnim();
function circleChaptaKro(){
    var xscale=1;
    var yscale=1;
    xprev=0;
    yprev=0;
    window.addEventListener("mousemove",function(dets){
        var xdiff=dets.clientX-xprev;
       var ydiff= dets.clienty-yprev;
        xprev=dets.clientX;
        yprev=dets.clientY;
    xscale= gasp.utils.clamp(.8,1.2,xdii),
    yscale= gasp.utils.clamp(.8,1.2,ydiff)
        

    });
}
circleChaptaKro();
document.querySelectorAll(".elem")
.forEach(function (elem){
elem.addEventListener("mousemove",function(details){
    // console.log(details.clientX,details.clientY);
    gsap.to(elem.querySelector("img"),{
opacity:1,
ease:Power1,

    });


});
});
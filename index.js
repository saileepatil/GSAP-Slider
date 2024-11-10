var tl = gsap.timeline({
    repeat:'-1'
});

tl
.to(".img-container" , {
    ease: Expo.easeInOut,
    width: "120%",
    stagger: 2
}, 'a')
.to(".text h1", {
    ease: Expo.easeInOut,
    stagger:2,
    top:0
},'a')
.to(".text h1", {
    delay: 2,
    ease: Expo.easeInOut,
    stagger:2,
    top:"-120%"
},'a')
.to(".para p" , {
    ease: Expo.easeInOut,
    stagger:2,
    top:0
},'a')
.to(".para p" , {
    delay:2,
    ease: Expo.easeInOut,
    stagger:2,
    top:"-120%"
},'a')
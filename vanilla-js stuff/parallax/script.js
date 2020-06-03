const parallax = (el, dist, speed)=>{
    let element = document.querySelector(el);
    element.style.transform=`translateY(${dist * speed}px)`;
}



window.addEventListener("scroll", ()=>{
    // console.log(window.scrollY);
    parallax(".wings", window.scrollY, 0.6);
    parallax(".magic", window.scrollY, 0.8);
})
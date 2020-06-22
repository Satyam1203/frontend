const moveRelative = (selector, speed)=>{
    const el = document.querySelector(selector);
    el.style.transform = `translateY(${window.scrollY * speed}px)`;
}

window.addEventListener('scroll', ()=>{
    moveRelative('.rect', -0.4);
    moveRelative('.circ', 0.8);
    // moveRelative('.shape', 0.9);
})
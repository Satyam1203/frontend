const brandImage = document.getElementsByClassName('brand-image')[0];
const bg = document.getElementsByClassName('bg')[0];
const title = document.getElementsByClassName('title')[0];
const links = document.getElementsByClassName('links')[0];

let tl = new TimelineMax();

tl.fromTo(brandImage, 1, {height: '0%'}, {height: '90%'})
    .fromTo(brandImage, 1.2, {width:'80%'}, {width: '60%'})
    .fromTo(bg, 1.2, {x:'-100%'}, {x: '0%'}, "-=1.2")
    .fromTo(title, 0.5, {x: '-100%', opacity:'0'}, {x:'0%', opacity: '1'}, "-=0.2")
    .fromTo(links, 0.5, {x: '100%', opacity:'0'}, {x:'0%', opacity: '1'}, "-=0.5");
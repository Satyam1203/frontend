
const carouselImg = document.getElementsByClassName('carousel-img')[0];
const Images = document.getElementsByClassName('c-img');

let count = 1;
const slideWidth = carouselImg.clientWidth;

// Initial for showing the first original image in carousel
carouselImg.style.transform=`translateX(-${ count * slideWidth }px)`;

// Event Listeners
document.getElementsByClassName('carousel-move-right')[0].addEventListener('click' ,async ()=>{
    if(count > Images.length ) return;
    count++;
    carouselImg.style.transition = `transform 500ms ease-in-out`;
    carouselImg.style.transform=`translateX(-${ count * slideWidth }px)`;
})

document.getElementsByClassName('carousel-move-left')[0].addEventListener('click' ,async ()=>{
    if(count <= 0 ) return;
    count--;
    carouselImg.style.transition = `transform 500ms ease-in-out`;
    carouselImg.style.transform=`translateX(-${ count * slideWidth }px)`;
})

carouselImg.addEventListener('transitionend', ()=>{
    if(Images[count].id === 'lastClone'){
        count = Images.length-2;
        carouselImg.style.transition = "none";
        carouselImg.style.transform=`translateX(-${ count * slideWidth }px)`;
    }else if(Images[count].id === 'firstClone'){
        count = 1;
        carouselImg.style.transition = "none";
        carouselImg.style.transform=`translateX(-${ count * slideWidth }px)`;
    }
})
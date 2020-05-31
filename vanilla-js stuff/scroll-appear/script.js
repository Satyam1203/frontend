const scrollAppear = ()=>{
    el = document.getElementsByClassName('img')[0];
    content = document.getElementsByClassName('content')[0];
    // console.log(el.getBoundingClientRect().y, window.innerHeight*(3/4))
    
    if(el.getBoundingClientRect().y <= window.innerHeight * (3/4)){
        el.classList.add("img-appear");
        content.classList.add("content-appear");
    }
}

window.addEventListener("scroll", scrollAppear);
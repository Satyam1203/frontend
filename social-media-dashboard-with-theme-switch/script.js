let checkbox= document.getElementsByTagName('input')[0];
let elements;
console.log(checkbox);
const changeMode = ()=>{
    if(checkbox.checked==false){
        console.log("dark mode");
        document.getElementsByTagName('body')[0].style.background='hsl(230, 17%, 14%)';
        document.getElementsByClassName('head-title')[0].style.color='hsl(0, 0%, 100%)';
        document.getElementsByClassName('head-overview')[0].style.color='hsl(0, 0%, 100%)';
        elements = document.getElementsByClassName('block');
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.background='hsl(228, 28%, 20%)';
        }
        elements = document.getElementsByClassName('block2');
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.background='hsl(228, 28%, 20%)';
        }
        document.getElementsByTagName('body')[0].style.color = 'hsl(0, 0%, 100%)';
        elements = document.getElementsByClassName('typography');
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.color='hsl(228, 34%, 66%)';
        }
        elements = document.getElementsByClassName('name');
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.color='hsl(228, 34%, 66%)';
        }
    }else{
        console.log("light mode");
        document.getElementsByTagName('body')[0].style.background='hsl(0, 0%, 100%)';
        document.getElementsByClassName('head-title')[0].style.color='hsl(230, 17%, 14%)';
        document.getElementsByClassName('head-overview')[0].style.color='hsl(230, 17%, 14%)';
        elements = document.getElementsByClassName('block');
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.background='hsl(227, 47%, 96%)';
        }
        elements = document.getElementsByClassName('block2');
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.background='hsl(227, 47%, 96%)';
        }
        document.getElementsByTagName('body')[0].style.color = 'hsl(230, 17%, 14%)';
        elements = document.getElementsByClassName('typography');
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.color='hsl(228, 12%, 44%)';
        }
        elements = document.getElementsByClassName('name');
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.color='hsl(228, 12%, 44%)';
        }
    }

}
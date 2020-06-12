let chromeTabs = document.querySelector('.chrome-tabs');
let tabs = document.getElementsByClassName('tab-click');
let container = document.querySelector('.container');

for(element of tabs){
    element.addEventListener('click', (e)=>{
        for(t of tabs) t.id = '';
        e.target.id='active-tab-click';
        container.innerHTML = e.target.innerHTML;
    })
}

const closeTab = ()=>{
    // console.log(event);
    event.stopPropagation();
    el = event.target || window.event.target;
    if(el.closest('.tab-click').id !== '' && tabs.length > 1){
        let changeTab = (el.closest('.tab-click').previousElementSibling ? el.closest('.tab-click').previousElementSibling : el.closest('.tab-click').nextElementSibling); 
        changeTab.id ='active-tab-click';
        container.innerHTML = changeTab.innerHTML;
    }
    chromeTabs.removeChild(el.closest('.tab-click'));
    if(tabs.length === 0 ) container.innerHTML = '';
}
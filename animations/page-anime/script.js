// Delay can also take a function (element, index) for custom styling on elements
// https://github.com/juliangarnier/anime/ visit this for more

anime({
    targets: '.promotion',
    translateY: [
        {
            value: 800
        },
        {
            value: 0
        }
    ],
    opacity: [
        {
            value: 0
        },
        {
            value: 1
        }
    ],
    duration: 1000,
    easing: 'easeInOutSine'
    // loop: true
})

anime({
    targets: 'nav',
    translateY: [
        {
            value: -100
        },{
            value:0
        }
    ],
    backgroundColor: 'green',
    duration: 2000,
    // delay: 2000
})

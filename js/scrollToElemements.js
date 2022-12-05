// $('.nav > p > a').on('click', function(event) {
//     var $anchor = $(this)

//     $("html, body")
//     .stop()
//     .animate({
//         scrollTop: $($anchor.attr('href')).offset().top,
//     },
//     {
//         duration: 1000,
//         specialEasing:{
//             width:'linear',
//             height: 'easeInOutCubic',
//         },
//     }
//     )
//     event.preventDefault()
// })

// document.querySelectorAll('.y').forEach(link => {
//     link.addEventListener('click', function (e) {
//         e.preventDefault()

//         const href = this.getAttribute('href').substring(1)

//         const scrollTarget = document.getElementById(href)
        
//         const topOffset = 0
//         const elementPosition = scrollTarget.getBoundingClientRect().top
//         const offsetPosition = elementPosition - topOffset
//         window.scrollBy({
//             top: offsetPosition,
//             behavior: 'smooth',
//         })
//     })
// })

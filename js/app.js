let url = window.location.href
let swRedirect = 'juanalu2t1/sw_gp.js'

if (navigator.serviceWorker) {
    if (url.includes('localhost')) swRedirect = '/sw.js'
    navigator.serviceWorker.register(swRedirect)
} else {
    console.log('SW: No esta disponible, cambia de navegador');
}


if(navigator.serviceWorker){
    navigator.serviceWorker.register("/sw.js")
}

let principal = $('#principal')

let notice = $('#notice')

$('.btn-seguir').on('click', function(e) {
    e.preventDefault()
    console.log('btn-seguir presionado')
    principal.fadeOut('slow', function(e) {
        notice.slideDown(1000)
    })
})

$('.btn-regresar').on('click', function (e) {
    e.preventDefault()
    notice.fadeOut(function() {
        principal.slideDown(1000)
    })
})

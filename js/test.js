// $(document).on('click', 'a.nav-text', function () {
//     $('nav#page-menu').toggle('slow', () => { })
// })

document.querySelectorAll('a.nav-text').forEach(element => {
    element.addEventListener('click',()=>{
        document.querySelector('nav#page-menu').classList.toggle('slow');
    })
});

// $(document).on('click', '#page-menu > ul > li > a', e), 
// $(document).on('click', '#page-menu > ul > li', function (n) {
//     n.stopPropagation()
// })

document.querySelectorAll('#page-menu > ul > li > a').forEach(element => {
    element.addEventListener('click',e)
});
 
document.querySelectorAll('#page-menu > ul > li').forEach(element => {
    element.addEventListener('click',(event)=>{
        event.stopPropagation();
    })
});

// function e(n) {
//     i !== -1 && $('#page-menu > ul > li').eq(i).removeClass('cbp-hropen')
//     var e = $(n.currentTarget).parent('li'),
//         o = e.index()
//     return i === o ? (e.removeClass('cbp-hropen'), i = -1) : (e.addClass('cbp-hropen'), i = o, $(document).on('mouseleave', 'div#main-nav-area', r)), !1
// }

// function r(n) {
//     $('#page-menu > ul > li').eq(i).removeClass('cbp-hropen'), i = -1
// }

function e(event){

}
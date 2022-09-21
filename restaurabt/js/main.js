/**show menu */
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    /*valida se existe as variaveis*/
    if (toggle && nav){
        /*aq add a class show-menu na div com a class nav_menu*/
toggle.addEventListener('click', () =>{
    nav.classList.toggle('show-menu')
    })
    }
}

showMenu('nav-toggle', 'nav-menu')
/*remover meu mobile*/
const navLink=document.querySelectorAll('.nav_link')
function linkAction() {
    const navMenu=document.getElementById('nav-menu')
    /*quando um link for clicado a class show-menu será removido*/
    navMenu.classList.remove('show-Menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*deixa o link clicado com a class active-link*/
const linkColor=document.querySelectorAll('.nav_link')

function colorLink(){
    if(linkColor){
        linkColor.forEach(L => L.classList.remove('active-link'))
        this.classList.add('active-link')
    }
}

linkColor.forEach(L=> L.addEventListener('click', colorLink))

/*BOX SHADOW NO HEADER*/
function scrollHeader(){
    const scrollHeader=document.getElementById('header');
//quando o scroll tiver uma altura maior q 200 será add a class scroll-header na tag header//
if(this.scrollY >=200) scrollHeader.classList.add('scroll-header'); else scrollHeader.classList.remove('scroll-header')
}
Window.addEventListener('scroll', scrollHeader)

/*show scroll top*/
function scrollTop(){
    const scrollTop=document.getElementById('scroll-top');
    //quando o scroll tiver uma altura maior q 560 será add a class scroll-top
    if(this.scrollY >= 560) scrollTop.classList.add('scroll-top'); else scrollTop.classList.remove('scroll-top')
}
Window.addEventListener('scroll', scrollTop)
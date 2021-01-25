const navToggler= document.querySelector('.nav-toggler')
const navTogglerSpan= document.querySelectorAll('.nav-toggler span')
const brand= document.querySelector('.nav-brand')
const links= document.querySelectorAll('.nav-list li')
const navList = document.querySelector('.nav-list')
let section= 'home'

function toggleNavColor() {
    setTimeout(() => {
        brand.classList.toggle('brand-active')
        navTogglerSpan.forEach((e)=>{
            e.classList.toggle('nav-toggler-active')
        })
        brand.classList.remove('hide-element')
        navTogglerSpan.forEach((e)=>{
            e.classList.remove('hide-element')
         })
    }, 400);
    brand.classList.add('hide-element')
    navTogglerSpan.forEach((e)=>{
        e.classList.add('hide-element')
    })
}

function showNav() {
    //document.querySelector('.home .about').classList.toggle('hide-element')
    document.querySelector(`.background`).classList.add('background-open')
    setTimeout(() => {
        navList.classList.add('list-open')
        toggleNavColor()
    }, 300);
    /* setTimeout(() => {
        brand.classList.toggle('brand-active')
        navTogglerSpan.forEach(e=>{
            e.classList.toggle('nav-toggler-active')
        })
    }, 300); */
}
function removeNav() {
    navList.classList.remove('list-open')
    setTimeout(() => {
        document.querySelector(`.background`).classList.remove('background-open')
        toggleNavColor()
    }, 300);

}

navToggler.addEventListener('click', ()=>{
    if(navList.classList.contains('list-open')){
        removeNav()
    }else{
        showNav()
    }
    console.log(navList.classList)

})

 
function showSection(ele) {
    links.forEach((el)=>document.querySelector(`#${el.dataset.section}`).style= "display:none;")
    document.querySelector(`#${ele.dataset.section}`).style= "display:block"
    document.body.classList.remove(`${section}-colors`)
    document.body.classList.add(`${ele.dataset.section}-colors`)

    section= ele.dataset.section
    removeNav()
}
links.forEach(el=>{
    el.onclick= function(){
       showSection(el)   
    }
})


const navToggler= document.querySelectorAll('.nav-toggler')
const links= document.querySelectorAll('.nav-list li')
let section= 'home'
function toggleNav() {
    document.querySelector(`.${section} .background`).classList.toggle('background-open')
    document.querySelector(`.${section} .nav-list`).classList.toggle('list-open')
}
function removeNav() {
    document.querySelector(`.${section} .background`).classList.remove('background-open')
    document.querySelector(`.${section} .nav-list`).classList.remove('list-open')
}

navToggler.forEach(el=>{
    el.onclick= toggleNav
})

function showSection(ele) {
    links.forEach((el)=>document.querySelector(`#${el.dataset.section}`).style= "display:none;")
    document.querySelector(`#${ele.dataset.section}`).style= "display:block"
    section= ele.dataset.section
    removeNav()
}
links.forEach(el=>{
    el.onclick= function(){
       showSection(el)   
    }
})

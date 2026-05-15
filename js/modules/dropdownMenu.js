 import outsideclick from "./outsideClick.js";
 
 export default function initDropdownMenu(){

 const dropdownMenus = document.querySelectorAll('[data-dropdown]')


 dropdownMenus.forEach((item)=>{
    item.addEventListener('touchstart', handleClick)
    item.addEventListener('click', handleClick)
 })

 function handleClick(event){
    event.preventDefault()
    this.classList.add('active');
    outsideClick(this,()=>{
        this.classList.remove('active');
     })
 }
}


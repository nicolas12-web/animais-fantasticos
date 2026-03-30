export default function initTooltip(){


const tooltip =  document.querySelectorAll('[data-tooltip]')



tooltip.forEach((item)=>{
    item.addEventListener('mouseover',onMouseOver);
   
})


function onMouseOver(event){
    const TooltipBox = criarTooltipBox(this)
    TooltipBox.style.top = event.pageY + 'px';
    TooltipBox.style.left = event.pageX + 'px';
    
    this.addEventListener('mouseleave', onmouseleave)
    
    function onmouseleave(){
    TooltipBox.remove();
    this.removeEventListener('mouseleave', onmouseleave)
    this.removeEventListener('mousemove',mousemove)
}
   this.addEventListener('mousemove', mousemove)

   function mousemove(event){
    TooltipBox.style.top = event.pageY + 20 +'px';
    TooltipBox.style.left = event.pageX + 20  +'px';
   }
  
   
}

}



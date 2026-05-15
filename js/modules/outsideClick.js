export default function outsideclick(element,event, callback){
     const html = document.documentElement;
     const outside = 'data-outside';
     if(!element.hasAttribute(outside)){
         setTimeout(()=>{html.addEventListener('click', handleOutsideClick),html.addEventListener('touchstart',handleOutsideClick);})
         
         element.setAttribute(outside,"")
     }

     function handleOutsideClick(event){
        if(!element.contains(event.target)){
            element.removeAttribute(outside);
            html.removeEventListener('click', handleOutsideClick);
            html.removeEventListener('touchstart', handleOutsideClick);
            callback();
        }
     }
    }


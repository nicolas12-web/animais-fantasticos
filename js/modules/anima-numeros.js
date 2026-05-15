export default function initAnimaNumeros(){


    function animaNumeros(){
    const  numeros = document.querySelectorAll("[data-numero]")

    numeros.forEach((numero)=>{
    const total =  +numero.innerHTML;
    const incremento = Math.floor(total / 100);
    let start = 0
    const timer = setInterval(()=>{
        start = start + incremento ;
        numero.innerHTML = start ;
        if(start > total){
            numero.innerHTML = total
            clearInterval(timer)
        }
    },25 * Math.random())
    });
}

function handMutation(mutation){
 if(mutation[0].target.classList.contains('ativo')){
    observer.disconnect()
    animaNumeros()
 }
}

const observeTarget  = document.querySelector('.numeros');
const observer =  new MutationObserver(handMutation);

observer.observe(observeTarget,{attributes: true});

}


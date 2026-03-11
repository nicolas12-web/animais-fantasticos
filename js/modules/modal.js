export default function initModal(){

    const botaoAbrir = document.querySelector('[data-modal="abrir"]')
    const botaoFechar = document.querySelector('[data-modal="fechar"]')
    const containerModal =  document.querySelector('[data-modal="container"]')
  

     function clicou(){
        containerModal.classList.add('ativo')
     }

     botaoAbrir.addEventListener('click',clicou)
    
}


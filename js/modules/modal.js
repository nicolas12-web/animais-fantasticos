export default function initModal(){

const botaoAbrir = document.querySelector('[data-modal="abrir"]')
const botaoFechar = document.querySelector('[data-modal="fechar"]')
const containerModal =  document.querySelector('[data-modal="container"]')

if(botaoAbrir && botaoFechar && containerModal){
   function abrireFecharModal(event){
      event.preventDefault()
      containerModal.classList.toggle('ativo');
   }

 

   function cliqueForaModal(event){
      if (event.target === this)
         abrireFecharModal(event);
   }

   botaoAbrir.addEventListener('click', abrireFecharModal);

   botaoFechar.addEventListener('click', abrireFecharModal);

   containerModal.addEventListener('click',cliqueForaModal)

   }
}


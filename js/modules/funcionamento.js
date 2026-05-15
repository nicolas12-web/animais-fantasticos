export default function initFuncionamento (){

    const funcionamento = document.querySelector('[data-horario]');
    const diasSemana = funcionamento.dataset.semana.split(',').map(Number);
    const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);

    const dataAgora = new Date();
     
    // aparece o dia da semana ex: 1,2,3 lembrando que domingo é 0
    const diaAgora =  dataAgora.getDay();
    
    // aparece o horario de agora 
    const horarioAgora =   dataAgora.getHours();

    // confirma se diaAgora faz parte de diasSemana se sim TRUE e se não FALSE 
    const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;
    
 

    const horarioAberto = (horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1])
    

    if(semanaAberto && horarioAberto){
        funcionamento.classList.add('aberto');
    }else{
        funcionamento.classList.add('fechado');
    }


}


let lampada = document.querySelector('div.desligado')
let btnOnOff = document.querySelector('#interruptor')

btnOnOff.addEventListener('click' , () =>{

    lampada.classList.toggle('ligado')
    
/*     if(lampada.classList.contains('desligado')){
        lampada.classList.remove('desligado')
        lampada.classList.add('ligado')
    } else if( lampada.classList.contains('ligado')){
        lampada.classList.remove('ligado')
        lampada.classList.add('desligado')
        
    }  */
})
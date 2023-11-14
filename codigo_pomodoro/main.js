// variáveis

var botoes = document.querySelectorAll('.botaoTempo');
var display = document.querySelector('#tempoCronometro')
var title = document.querySelector('h1')
var corBotao = document.querySelectorAll('.botaoPlay')
var corpo = document.querySelector('body');
var foco = document.querySelector('.foco')
var curta = document.querySelector('.curta')
var longa = document.querySelector('.longa')
let duration;

const botaoPlay = document.getElementById('play');
const botaoPause = document.getElementById('pause');
const botaoStop = document.getElementById('stop');

var intervaloId = null

// modificações css


foco.addEventListener('click', () => {
    duration = 60 * 25
    display.innerHTML = '25:00';
    alterarContexto('Foco');
}) 

curta.addEventListener('click', () => {
    duration = 60 * 0.1
    display.innerHTML = '05:00';
    alterarContexto('Curta')
})

longa.addEventListener('click', () => {
    duration = 60 * 15
    display.innerHTML = '15:00';
    alterarContexto('Longa')
})


function alterarContexto(contexto){
    corpo.setAttribute('class', `corFundo${contexto}`);
    title.setAttribute('class',`corTexto${contexto}`);
    corBotao[0].setAttribute('class', `botaoPlay corBotao${contexto}`);
    corBotao[1].setAttribute('class', `botaoPlay corBotao${contexto}`);
    corBotao[2].setAttribute('class', `botaoPlay corBotao${contexto}`);
    botoes[0].setAttribute('definicao', `corTempo${contexto}`)
    botoes[1].setAttribute('definicao', `corTempo${contexto}`)
    botoes[2].setAttribute('definicao', `corTempo${contexto}`)
}

// Crorometro



const contagemRegressiva = () =>{
    if (duration <= 0){
        alert('Tempo Finalizado!')
        stop();
    }
    else{
        duration -=1;
    }
    
    mostrarTempo();
    
}

function iniciar(){
    intervaloId = setInterval(contagemRegressiva, 1000); 
}

function pause(){
    clearInterval(intervaloId)
    intervaloId = null;
    
}

function stop(){
    clearInterval(intervaloId)
    intervaloId = null
    duration = 60 *25
    mostrarTempo();
}

function mostrarTempo(){
    const tempo = new Date(duration * 1000)
    const tempoFormatado = tempo.toLocaleTimeString('pt-Br', {minute: '2-digit', second: '2-digit'})
    display.innerHTML = `${tempoFormatado}`
}   


botaoPlay.addEventListener('click', iniciar)
botaoPause.addEventListener('click', pause);
botaoStop.addEventListener('click', stop)





 
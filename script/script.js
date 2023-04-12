function relogio(){
    const elementoRelogio = document.querySelector('.relogio');
    const horaAtual = new Date();
    const horas = horaAtual.getHours();
    const minutos = horaAtual.getMinutes();
    const segundos = horaAtual.getSeconds();

    const formatoHoras = horas.toString().padStart(2, "0");
    const formatoMinutos = minutos.toString().padStart(2, "0");
    const formatoSegundos = segundos.toString().padStart(2, "0");

    elementoRelogio.textContent = `${formatoHoras}: ${formatoMinutos}: ${formatoSegundos}`;

    const frase = document.querySelector('.frase');

    dia = new Array("Domingo","Segunda-feira","Terça-feira", "Quarta-feira", "Quinta-feira","Sexta-feira","Sabado");

    mes = new Array('Janeiro', "Fevereiro", "Março", "Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro");

    hoje = new Date()
    frase.innerHTML = `<span style="color: #777;">${dia[hoje.getDay()]}, ${hoje.getDate().toString().padStart(2,'0')} de ${mes[hoje.getMonth()]} de ${hoje.getFullYear()}</span>`

    let tituloRelogio = document.querySelector('h1');
let msgTitulo = '';
let msgTituloOne = `Relógio`

let msgTituloTwo = '';

let iconText = '<a href="https://github.com/JonatasSauer" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg></a>'


    
    if(formatoHoras >= 0 && formatoHoras <= 12){
        document.body.style.cssText = 'background: url(https://cdn.dribbble.com/users/1040798/screenshots/15685874/media/aa9588469e19517c2b94b1addd15d11d.gif); background-size:100% 100%; background-attachment: fixed; '
        document.querySelector('.container-relogio').style.cssText = 'transform: translate(-50%, -50%) skew(-60deg) rotate(10deg) scale(1.1)  rotateX(-60deg);position: absolute; top: 65%; left: 25%; box-shadow: 10px 1px 15px #111; text-shadow: 20px 1px 5px #111; background: url(https://img.freepik.com/fotos-premium/textura-de-tapete-preto-terry-textura-de-tecido-vermelho_250899-408.jpg); padding: 20px;'
        document.querySelector('.relogio').style.cssText = 'font-size: 2.4rem; color: #c8b5b4;'
        document.querySelector('h1').style.cssText = 'color: #999;';
    }else if(formatoHoras >= 12 && formatoHoras <= 20 ){
        document.body.style.cssText = 'background: url(https://cutewallpaper.org/21/vaporwave-background-gif/Pixel-Art-Vaporwave-Background-1920x1080-111-Retro-Wave-Hd-.gif); background-size:100% 100%; background-attachment: fixed; '
        document.querySelector('.container-relogio').style.cssText = 'transform: translate(-50%, -50%) skew(-30deg) rotate(-34deg) scale(1) rotateX(30deg);position: absolute; top: 15%; left: 57%; text-shadow: -10px 4px 5px #3a0906;'
        document.querySelector('.relogio').style.cssText = 'font-size: 2.4rem; color: #c8b5b4;'
        document.querySelector('h1').style.cssText = 'color: #999;';
    }else{
        document.body.style.cssText = 'background: url(https://wallpapercave.com/wp/wp2757874.gif); background-size:100% 100%; background-attachment: fixed;'
        
        document.querySelector('.container-relogio').style.cssText = 'transform: translate(-50%, -50%) skew(50deg) rotate(-20deg) scale(2) rotateX(30deg);position: absolute; top: 65%; left: 55%; text-shadow: -10px 4px 5px #3a0906;'
    }
}
 
setInterval( relogio, 1000);



// setInterval(()=> {
//     if(tituloRelogio.innerHTML != msgTitulo ){ 
//         tituloRelogio.innerHTML = `${msgTituloTwo} ${iconText}`
//         msgTitulo = tituloRelogio.innerHTML
//     }else if(tituloRelogio.innerHTML == msgTitulo){
//         msgTitulo = `${msgTituloOne} ${msgTituloTwo}`
//         msgTitulo = tituloRelogio.innerHTML
//     }
// }, 2000)

const relogio = () => {
    const getTimeFromSeconds = (segundos) => {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR',{
            hour12 : false,
            timeZone: 'UTC'
        });
    }
    
    const relogio = document.querySelector(".relogio");
    let segundos = 0;
    let timer;
    
    const startedClock = () => {
        timer = setInterval(() => {
            segundos++;
            relogio.innerHTML = getTimeFromSeconds(segundos);
        },1000);
    };
    
    document.addEventListener('click',(event) => {
        const el = event.target;
    
        if(el.classList.contains('zerar')){
            clearInterval(timer);
            relogio.innerHTML = "00:00:00";
            segundos = 0;
            relogio.classList.remove('pausado');
        }
        if(el.classList.contains('iniciar')){
            clearInterval(timer);
            startedClock();
            relogio.classList.remove('pausado');
        }
        if(el.classList.contains('pausar')){
            clearInterval(timer);
            relogio.classList.add('pausado');
        };
    });
};
relogio();

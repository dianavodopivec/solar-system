const $containerClock = document.getElementById("clock");
let runningTime 

const clockFuncionality = () => {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    return {hours, minutes, seconds};
}

const renderClock = (container, hou, min, sec) => {
    container.innerHTML = `${hou}:${min}:${sec}`
}

renderClock($containerClock, clockFuncionality().hours,clockFuncionality().minutes,clockFuncionality().seconds);

runningTime = setInterval(() => {
    clockFuncionality();
    renderClock($containerClock, clockFuncionality().hours,clockFuncionality().minutes,clockFuncionality().seconds);
}, 1000);


export { 
    clockFuncionality
};


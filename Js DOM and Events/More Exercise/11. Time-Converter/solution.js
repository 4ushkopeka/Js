function attachEventsListeners() {
    let btns = Array.from(document.querySelectorAll('input[type = "button"]'));
    for (let btn of btns) {
        btn.addEventListener('click', () => {
            let inputs = Array.from(document.querySelectorAll('input[type = "text"]')).map(x => Number(x.value));
            if(inputs[0] !== 0){
                let otherInputs = Array.from(document.querySelectorAll('input[type = "text"]')).filter(x => x.id !== 'days');
                otherInputs[0].value = inputs[0]*24;
                otherInputs[1].value = otherInputs[0].value*60;
                otherInputs[2].value = otherInputs[1].value*60;
            }
            else if(inputs[1] !== 0){
                let otherInputs = Array.from(document.querySelectorAll('input[type = "text"]')).filter(x => x.id !== 'hours');
                otherInputs[0].value = inputs[1]/24;
                otherInputs[1].value = inputs[1]*60;
                otherInputs[2].value = otherInputs[1].value*60;
            }
            else if(inputs[2] !== 0){
                let otherInputs = Array.from(document.querySelectorAll('input[type = "text"]')).filter(x => x.id !== 'minutes');
                otherInputs[1].value = inputs[2]/60;
                otherInputs[0].value = otherInputs[1].value/24;
                otherInputs[2].value = inputs[2]*60;
            }
            else if(inputs[3] !== 0){
                let otherInputs = Array.from(document.querySelectorAll('input[type = "text"]')).filter(x => x.id !== 'seconds');
                otherInputs[2].value = inputs[3]/60;
                otherInputs[1].value = otherInputs[2].value/60;
                otherInputs[0].value = otherInputs[1].value/24;
            }
        });
    }
}
function attachEventsListeners() {
    let inputSelect = document.getElementById('inputUnits');
    let outputSelect = document.getElementById('outputUnits');
    let input = document.getElementById('inputDistance');
    let output = document.getElementById('outputDistance');
    document.querySelector('input[type = "button"]').addEventListener('click', () => {
        let inputNum = Number(input.value);
        let inputSelectValue = inputSelect.value;
        let outputSelectValue = outputSelect.value;
        let result = 0;
        let distanceDic = {};
        distanceDic.km = 1000;
        distanceDic.m = 1;
        distanceDic.cm = 0.01;
        distanceDic.mm = 0.001;
        distanceDic.mi = 1609.34;
        distanceDic.yrd = 0.9144;
        distanceDic.ft = 0.3048;
        distanceDic.in = 0.0254;
        result = inputNum*distanceDic[inputSelectValue]/distanceDic[outputSelectValue];
        output.value = result;
    });
}
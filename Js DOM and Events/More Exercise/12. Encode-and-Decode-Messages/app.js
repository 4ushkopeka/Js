function encodeAndDecodeMessages() {
    let btns = Array.from(document.querySelectorAll('div > button'));
    btns[0].addEventListener('click', () => {
        let areas = document.querySelectorAll('textarea');
        let inputArea = areas[0];
        let result = areas[1];
        let splatteredText = [...inputArea.value];
        for (let i = 0; i < splatteredText.length; i++) {
            let charIndex = splatteredText[i].charCodeAt();
            splatteredText[i] = String.fromCharCode(charIndex+1);
        }
        result.value = splatteredText.join('');
        inputArea.value = '';
    });
    btns[1].addEventListener('click', () => {
        let result = document.querySelectorAll('textarea')[1];
        let splatteredText = [...result.value];
        for (let i = 0; i < splatteredText.length; i++) {
            let charIndex = splatteredText[i].charCodeAt();
            splatteredText[i] = String.fromCharCode(charIndex-1);
        }
        result.value = splatteredText.join('');
    });
}
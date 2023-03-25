function reveal(words, template){
let actualWords = words.split(', ');
let setnence = template.split(' ');
for (let i = 0; i < setnence.length; i++) {
    if(setnence[i].includes('*')){
        let word = actualWords.filter(word => word.length == setnence[i].length);
        setnence[i] = word;
    }
}
console.log(setnence.join(' '));
}
reveal('great',

'softuni is ***** place for learning new programming languages')
function hashstuff(text){
let pattern = /^#[A-Za-z]+$/;
let arr = text.split(' ');
let collectedWords = [];
for (let i = 0; i < arr.length; i++) {
    if(pattern.test(arr[i])){
        collectedWords.push(arr[i].substring(1));
    }
}
console.log(collectedWords.join('\n'));
}
hashstuff('Nowadays everyone uses # to tag a #special word in #socialMedia')
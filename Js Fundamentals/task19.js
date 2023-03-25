function subs(word, text){
    text = text.toLowerCase();
    let sentence = text.split(' ');
    if(sentence.includes(word.toLowerCase())){
        console.log(word);
    }
    else{
        console.log(`${word} not found!`);
    }
}
subs('javascript',

'JavaScript is the best programming language')
function regexes(text){
let words = [...text.matchAll(/[A-Z][a-z]*/g)];
console.log(words.join(', '));
}
regexes('SplitMeIfYouCanHaHaYouCantOrYouCan')

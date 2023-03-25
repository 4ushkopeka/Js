function extract(content) {
let item = document.getElementById(content);
let pat = /.*(.+).*/g;
let matches = item.textContent.matchAll(pat);
let string = '';
for (const iterator of matches) {
    string+=iterator;
}
return string;
}
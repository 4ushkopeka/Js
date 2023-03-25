function solve() {
    const area = document.getElementById('input');
    let sentences = area.textContent.split('.');
    sentences = sentences.filter(x => x.length >= 1);
    let div = document.getElementById('output');
    for (let i = 0; i < sentences.length; i+=3) {
      let par = document.createElement('p');
      for (let q = i; q < sentences.length && q < i+3; q++) {
        par.textContent += sentences[q]+'.';
      }
      div.appendChild(par);
    }
}
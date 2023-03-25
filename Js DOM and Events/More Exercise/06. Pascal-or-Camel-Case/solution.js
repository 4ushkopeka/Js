function solve() {
  let text = document.getElementById('text').value;
  let convention = document.getElementById('naming-convention').value;
  let res = document.getElementById('result');
  let words = text.split(' ');
  debugger;
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].toLowerCase();
  }
  let result = '';
  if(convention === 'Camel Case'){
    for (let i = 0; i < words.length; i++) {
      if(i === 0){
        result += words[i];
      }
      else{
        let destructured = [...words[i]];
        destructured[0] = destructured[0].toUpperCase();
        result += destructured.join('');
      }
    }
    res.textContent = result;
  }
  else if(convention === 'Pascal Case'){
    for (let i = 0; i < words.length; i++) {
      let destructured = [...words[i]];
      destructured[0] = destructured[0].toUpperCase();
      result += destructured.join('');
    }
    res.textContent = result;
  }
  else{
    res.textContent = 'Error!'
  }
}
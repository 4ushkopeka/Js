function solve() {
  debugger;
  let [generate, buy] = Array.from(document.getElementsByTagName('button'));
  generate.addEventListener('click', generator);
    function generator(){
      const input = JSON.parse(document.querySelector('div textarea').value);
    for (const furniture of input) {
      if(furniture.img !== undefined){
        let row = document.createElement('tr');
        let entries = Object.entries(furniture);
        let imgTd = document.createElement('td');
        let img = document.createElement('img');
        img.src = entries.filter(x => x[0] === 'img').map(x => x[1]);
        imgTd.appendChild(img)
        row.appendChild(imgTd);
        let nameTd = document.createElement('td');
        let pName = document.createElement('p');
        pName.textContent = entries.filter(x => x[0] === 'name').map(x => x[1]);
        nameTd.appendChild(pName)
        row.appendChild(nameTd);
        let priceTd = document.createElement('td');
        let pPrice = document.createElement('p');
        pPrice.textContent = entries.filter(x => x[0] === 'price').map(x => Number(x[1]));
        priceTd.appendChild(pPrice);
        row.appendChild(priceTd);
        let decFactorTd = document.createElement('td');
        let pFactor = document.createElement('p');
        pFactor.textContent = entries.filter(x => x[0] === 'decFactor').map(x => Number(x[1]));
        decFactorTd.appendChild(pFactor);
        row.appendChild(decFactorTd);
        let markTd = document.createElement('td');
        let input = document.createElement('input');
        input.type = 'checkbox';
        markTd.appendChild(input);
        row.appendChild(markTd);
        document.getElementsByTagName('tbody')[0].appendChild(row);
      }
    }
    }
    buy.addEventListener('click', checkout);
    function checkout(){
      let result = document.getElementsByTagName('textarea')[1];
      let checkboxes = Array.from(document.querySelectorAll('input[type = "checkbox"]'));
      checkboxes = checkboxes.filter(x => x.checked);
      let boughtFurniture = [];
      let price = 0;
      let factor = 0;
      for (const box of checkboxes) {
        const row = box.parentElement.parentElement;
        let children = Array.from(row.children);
        boughtFurniture.push(children[1].children[0].textContent);
        price+=Number(children[2].children[0].textContent);
        factor+=Number(children[3].children[0].textContent);
      }
      result.textContent = `Bought furniture: ${boughtFurniture.join(', ')}\nTotal price: ${price.toFixed(2)}\nAverage decoration factor: ${factor/boughtFurniture.length}`
    }
}
function addItem() {
    const menu = document.getElementById('menu');
    const itemText = document.getElementById('newItemText');
    const itemValue = document.getElementById('newItemValue');
    let opt = document.createElement('option');
    opt.textContent = itemText.value;
    opt.value = itemValue.value;
menu.appendChild(opt);
itemText.value = '';
itemValue.value = '';
console.log(itemText.value);
}
function solve() {
   let btns = Array.from(document.querySelectorAll('.add-product'));
   let checkoutBtn = document.getElementsByClassName('checkout')[0];
   let checkout = [];
   for (let iterator of btns) {
      iterator.addEventListener('click', (e) => {
         let area = document.getElementsByTagName('textarea')[0];
         let ingridient = e.currentTarget.parentElement.parentElement.children[1].children[0].textContent;
         let price = Number(e.currentTarget.parentElement.parentElement.children[3].textContent).toFixed(2);
         let obj = {};
         obj.name = ingridient;
         obj.price = price;
         checkout.push(obj);
         area.value += `Added ${ingridient} for ${price} to the cart.\n`;
      });
   }
   checkoutBtn.addEventListener('click', (e)=>{
      let area = document.getElementsByTagName('textarea')[0];
      let names = [];
      let price = 0;
      console.log(checkout);
      for (const iterator of checkout) {
         if(!names.includes(iterator.name)){
            names.push(iterator.name)
         }
         price+=Number(iterator.price);
      }
      area.value += `You bought ${names.join(', ')} for ${price.toFixed(2)}.`;
      e.currentTarget.disabled = true;
      for (const iterator of btns) {
         iterator.disabled = true;
      }
   });
}
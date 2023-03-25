function attachGradientEvents() {
   let btn = document.getElementById('gradient');
   btn.addEventListener('mousemove', (e) => text(e))
   function text(e){
    let result = document.getElementById('result');
    result.textContent = Math.floor(((e.offsetX)/3)) + '%';
   }
}
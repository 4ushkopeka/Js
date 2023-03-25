function lockedProfile() {
    let btns = Array.from(document.getElementsByTagName('button'));
    for (const btn of btns) {
        btn.addEventListener('click', clicked());
    }
    function clicked(){
        const div = this.parentElement;
        const locked = div.children[2];
        if(!locked.checked){
            if(this.textContent === 'Show more'){
                div.children[9].style.display = 'block';
                this.textContent = 'Hide it';
            }
            else{
                div.children[9].style.display = 'none';
                this.textContent = 'Show more';
            }
        }
    }
}
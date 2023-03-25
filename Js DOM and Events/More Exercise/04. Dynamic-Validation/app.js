function validate() {
    let box = document.getElementById('email');
    box.addEventListener('change',(e) => {
        let input = e.currentTarget;
        let email = input.value;
        if(/[a-z]+@[a-z]+\.[a-z]+/gm.test(email)){
            input.classList.remove("error");
        }
        else{
            input.classList.add("error");
        }
    });
}
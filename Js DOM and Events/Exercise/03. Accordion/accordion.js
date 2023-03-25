function toggle() {
    let btn = Array.from(document.getElementsByClassName('button'));
    if(btn[0].textContent === 'More'){
        document.getElementById('extra').style.display = 'block';
        btn[0].textContent = 'Less';
    }
    else{
        document.getElementById('extra').style.display = 'none';
        btn[0].textContent = 'More';
    }
}
function solve() {
    let rows = Array.from(document.querySelectorAll('tbody tr'));
    document.querySelectorAll('button')[0].addEventListener('click', ()=> {
        let check = true;
        let nums = Array.from(document.getElementsByTagName('input')).map(x => x.value);
        if(!checkCheeky(nums)){
            let rowNums = [];
            for (const row of rows) {
                let rowche = [];
                for (const child of row.children) {
                    rowche.push(Number(child.firstElementChild.value))
                }
                rowNums.push([...rowche]);
            }
            for (let i = 0; i < rowNums.length; i++) {
                if(!check){
                    break;
                }
                for (let q = 0; q < rowNums[i].length; q++) {
                    let checkValue = rowNums[i][q];
                    let checker = [];
                    checker.push(...rowNums[i]);
                    let excluded = rowNums.filter(x => x !== rowNums[i]);
                    for (const iterator of excluded) {
                        checker.push(iterator[q]);
                    }
                    if(count(checker, checkValue)>1){
                        check = false;
                        break;
                    }
                }
            }
        }
        else{
            check = false;
        }
        if(check){
            document.querySelector('table').style = 'border: 2px solid green;';
            let p = document.querySelector('#check p');
            p.style = 'color: green;'
            p.textContent = 'You solve it! Congratulations!';
        }
        else{
            document.querySelector('table').style = 'border: 2px solid red';
            let p = document.querySelector('#check p');
            p.style = 'color: red;'
            p.textContent = 'NOP! You are not done yet...';
        }
    });
    document.querySelectorAll('button')[1].addEventListener('click', ()=> {
        for (let row of rows) {
            for (let td of row.children) {
                td.firstElementChild.value = '';
            }
        }
        document.querySelector('table').style = '';
        let p = document.querySelector('#check p');
        p.textContent = '';
        p.style = '';
    });
    function count(nums, el){
        let count = 0;
        for (const num of nums) {
            if(num === el){
                count++;
            }
        }
        return count;
    }
    function checkCheeky(nums){
        for (const num of nums) {
            if(num < 1 || num > 3){
                return true;
            }
        }
        for (const row of rows) {
            for (const td of row.children) {
                if(td.firstElementChild.value === ''){
                    return true;
                }
            }
        }
        return false;
    }
}
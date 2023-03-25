function solve() {
    let selectTo = document.getElementById('selectMenuTo');
    let optionBin = document.createElement('option');
    optionBin.value = 'binary';
    optionBin.textContent = 'Binary';
    let optionHex = document.createElement('option');
    optionHex.value = 'hexadecimal';
    optionHex.textContent = 'Hexadecimal';
    selectTo.appendChild(optionBin);
    selectTo.appendChild(optionHex);
    document.getElementsByTagName('button')[0].addEventListener('click', () => {
        let result = document.getElementById('result');
        let resultTxt = '';
        let input = document.getElementById('input');
        let num = Number(input.value);
        if(!selectTo.lastElementChild.selected){
            let remainders = [];
            while(num>0){
                let remainder = num%2;
                remainders.push(remainder);
                num-=remainder;
                num/=2;
            }
            resultTxt = remainders.reverse().join('');
            console.log(remainders.reverse().join(''));
        }
        else{
            let hexaDic = {};
            hexaDic[10] = 'A';
            hexaDic[11] = 'B';
            hexaDic[12] = 'C';
            hexaDic[13] = 'D';
            hexaDic[14] = 'E';
            hexaDic[15] = 'F';
            let remainders = [];
            while(num>0){
                let remainder = num%16;
                if(remainder>9){
                    remainders.push(hexaDic[remainder]);
                    num-=remainder;
                    num/=16;
                }
                else{
                    remainders.push(remainder);
                    num-=remainder;
                    num/=16;
                }
            }
            resultTxt = remainders.reverse().join('');
        }
        result.value = resultTxt;
    });
}
function stuff(symbol1, symbol2){
    let result = [];
    if(symbol1<symbol2){
        let range = getCodes(symbol1, symbol2);
        for (let i = range[0]+1; i < range[1]; i++) {
            result.push(String.fromCharCode(i));
        }
    }
    else{
        let range = getCodes(symbol2, symbol1);
        for (let i = range[0]+1; i < range[1]; i++) {
            result.push(String.fromCharCode(i));
        }
    }
    console.log(result.join(' '));
    function getCodes(symbol1, symbol2){
        return [symbol1.charCodeAt(0), symbol2.charCodeAt(0)];
    }
    }
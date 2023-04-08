function Pianist(data){
let num = Number(data[0]);
let pieces = [];
for (let i = 1; i < data.length; i++) {
    if(i<=num){
        let match = data[i].match(/(?<piece>.+)\|(?<composer>.+)\|(?<key>.+)/);
        let piece = {
            piece: match.groups.piece,
            composer: match.groups.composer,
            key: match.groups.key
        }
        pieces.push(piece);
    }
    else{
        if(data[i] === 'Stop'){
            break;
        }
        if(/Add\|(?<piece>.+)\|(?<composer>.+)\|(?<key>.+)/.test(data[i])){
            let match = data[i].match(/Add\|(?<piece>.+)\|(?<composer>.+)\|(?<key>.+)/);
            
            let found = pieces.find(x => x.piece === match.groups.piece);
            if(found === undefined){
                let piece = {
                    piece: match.groups.piece,
                    composer: match.groups.composer,
                    key: match.groups.key
                }
                pieces.push(piece);
                console.log(`${piece.piece} by ${piece.composer} in ${piece.key} added to the collection!`);
            }
            else{
                console.log(`${match.groups.piece} is already in the collection!`);
            }
        }
        else if(/Remove\|(?<piece>.+)/.test(data[i])){
            let match = data[i].match(/Remove\|(?<name>.+)/);
            let found = pieces.find(x => x.piece === match.groups.name);
            if(found === undefined){
                console.log(`Invalid operation! ${match.groups.name} does not exist in the collection.`);
            }
            else{
                pieces = pieces.filter(x => x !== found);
                console.log(`Successfully removed ${found.piece}!`);
            }
        }
        else{
            let match = data[i].match(/ChangeKey\|(?<name>.+)\|(?<newkey>.+)/);
            let found = pieces.find(x => x.piece === match.groups.name);
            if(found === undefined){
                console.log(`Invalid operation! ${match.groups.name} does not exist in the collection.`);
            }
            else{
                found.key = match.groups.newkey;
                console.log(`Changed the key of ${found.piece} to ${found.key}!`);
            }
        }
    }
}
pieces.forEach(x => console.log(`${x.piece} -> Composer: ${x.composer}, Key: ${x.key}`));
}
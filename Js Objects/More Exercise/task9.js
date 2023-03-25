function armiesStuff(input){
let generals = [];
let armies = [];
for (const command of input) {
    if(/.+ arrives/.test(command)){
        let gen = {};
        gen.name = command.split(/ arrives/)[0];
        gen.armies = [];
        generals.push(gen);
    }
    else if(/.+: .+, .+/.test(command)){
        let split = command.split(': ');
        let commander = generals.find(x => x.name === split[0]);
        if(commander !== undefined){
            let army = {};
            let armyInfo = split[1].split(', ');
            army.name = armyInfo[0];
            army.count = Number(armyInfo[1]);
            commander.armies.push(army);
            armies.push(army);
        }
    }
    else if(/.+ \+ .+/.test(command)){
        let split = command.split(' + ');
        let searched = armies.find(x => x.name === split[0]);
        if(searched !== undefined){
            searched.count+=Number(split[1]);
        }
    }
    else if(/.+ defeated/.test(command)){
        let n = command.split(/ defeated/)[0];
        let leader = generals.find(x => x.name === n);
        if(leader !== undefined){
            generals = generals.filter(x => x !== leader);
        }
    }
}
let totalCount = (armies) => {
    let count = 0;
    for (const army of armies) {
        count+=army.count;
    }
    return count;
}
generals.sort((a, b) => {
    return totalCount(b.armies) - totalCount(a.armies);
});
for (const general of generals) {
    general.armies.sort((a, b)=>{
        return b.count - a.count;
    });
    console.log(`${general.name}: ${totalCount(general.armies)}`);
    for (const army of general.armies) {
        console.log(`>>> ${army.name} - ${army.count}`);
    }
}
}
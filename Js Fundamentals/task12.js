function cook(num, ...commands){
for (let i = 0; i < commands.length; i++) {
    if(commands[i] === 'chop'){
        num/=2;
    }
    else if(commands[i] === 'dice'){
        num = Math.sqrt(num);
    }
    else if(commands[i] === 'spice'){
        num+=1;
    }
    else if(commands[i] === 'bake'){
        num*=3;
    }
    else if(commands[i] === 'fillet'){
        num-=num*0.2;
    }
    console.log(num);
}
}
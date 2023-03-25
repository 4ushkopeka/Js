function vacation(numOfPeeps, group, day){
    let cost = 0;
    if(group === 'Students'){
        if(day === 'Friday'){
            cost = 8.45*numOfPeeps;
        }
        else if(day === 'Saturday'){
            cost = 9.80*numOfPeeps;
        }
        else if(day === 'Sunday'){
            cost = 10.46*numOfPeeps;
        }
        if(numOfPeeps >= 30){
            cost-=cost*0.15;
        }
    }
    else if(group === 'Business'){
        if(numOfPeeps>=100){
            numOfPeeps-=10;
        }
        if(day === 'Friday'){
            cost = 10.90*numOfPeeps;
        }
        else if(day === 'Saturday'){
            cost = 15.60*numOfPeeps;
        }
        else if(day === 'Sunday'){
            cost = 16*numOfPeeps;
        }
    }
    else if(group === 'Regular'){
        if(day === 'Friday'){
            cost = 15*numOfPeeps;
        }
        else if(day === 'Saturday'){
            cost = 20*numOfPeeps;
        }
        else if(day === 'Sunday'){
            cost = 22.50*numOfPeeps;
        }
        if(numOfPeeps>=10 && numOfPeeps<=20){
            cost-=cost*0.05;
        }
    }
    console.log(`Total price: ${cost.toFixed(2)}`);
}
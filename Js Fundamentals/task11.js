function speee(speed, area){
if(area === 'motorway'){
console.log(check(speed, 130));
}
else if(area === 'interstate'){
    console.log(check(speed, 90));
}
else if(area === 'city'){
    console.log(check(speed, 50));
}
else if(area === 'residential'){
    console.log(check(speed, 20));
}
function check(speed, limit){
    if(speed<=limit){
        return `Driving ${speed} km/h in a ${limit} zone`
    }
    else if(speed>=limit+41){
        return `The speed is ${speed-limit} km/h faster than the allowed speed of ${limit} - reckless driving`
    }
    else if(speed<=limit+40 && speed >= limit+21){
        return `The speed is ${speed-limit} km/h faster than the allowed speed of ${limit} - excessive speeding`
    }
    else {
        return `The speed is ${speed-limit} km/h faster than the allowed speed of ${limit} - speeding`
    }
}
}

speee(110, 'city')
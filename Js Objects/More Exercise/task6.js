function browserStuff(object, commands){
for (const command of commands) {
    let comm = command.split(' ');
    let name = formatter(comm);
    if(comm[0] == 'Open'){
        object['Open Tabs'].push(name);
        object['Browser Logs'].push(command);
    }
    else if(comm[0] == 'Close'){
        if(object['Open Tabs'].includes(name)){
            object['Open Tabs'] = object['Open Tabs'].filter(x => x !== name);
            object['Recently Closed'].push(name);
            object['Browser Logs'].push(command);
        }
    }
    else if(comm[0] == 'Clear'){
        object['Open Tabs'] = [];
        object['Recently Closed'] = [];
        object['Browser Logs'] = [];
    }
}
function formatter(arr){ //the array contains the command word
    if(arr.length !== 2){
        let fixedName = '';
        for (let i = 1; i < arr.length; i++) {
            fixedName+=arr[i]+' ';
        }
        return fixedName.trimEnd();
    }
    else{
        return arr[1];
    }
}
console.log(object['Browser Name']);
console.log(`Open Tabs: ${object['Open Tabs'].join(', ')}`);
console.log(`Recently Closed: ${object['Recently Closed'].join(', ')}`);
console.log(`Browser Logs: ${object['Browser Logs'].join(', ')}`);
}
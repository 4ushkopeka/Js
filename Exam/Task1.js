function solution(data){
    let num = Number(data[0]);
    let assignees = [];
    for (let i = 1; i < data.length; i++) {
        if(i<=num){
            let match = data[i].match(/(?<assignee>.+):(?<taskId>.+):(?<title>.+):(?<status>.+):(?<estimatedPoints>.+)/);
            let found = assignees.find(x => x.name === match.groups.assignee);
            if(found === undefined){
                let assignee = {
                    name: match.groups.assignee,
                    tasks: []
                };
                let task = {
                    id: match.groups.taskId,
                    title: match.groups.title,
                    status: match.groups.status,
                    estimatedPoints: Number(match.groups.estimatedPoints)
                };
                assignee.tasks.push(task);
                assignees.push(assignee);
            }
            else{
                let task = {
                    id: match.groups.taskId,
                    title: match.groups.title,
                    status: match.groups.status,
                    estimatedPoints: Number(match.groups.estimatedPoints)
                };
                found.tasks.push(task);
            }
        }
        else{
            if(/Add New:(?<assignee>.+):(?<taskId>.+):(?<title>.+):(?<status>.+):(?<estimatedPoints>.+)/.test(data[i])){
                let match = data[i].match(/Add New:(?<assignee>.+):(?<taskId>.+):(?<title>.+):(?<status>.+):(?<estimatedPoints>.+)/);
                let found = assignees.find(x => x.name === match.groups.assignee);
                if(found === undefined){
                    console.log(`Assignee ${match.groups.assignee} does not exist on the board!`)
                }
                else{
                    let task = {
                        id: match.groups.taskId,
                        title: match.groups.title,
                        status: match.groups.status,
                        estimatedPoints: Number(match.groups.estimatedPoints)
                    };
                    found.tasks.push(task);
                }
            }
            else if(/Change Status:(?<assignee>.+):(?<taskId>.+):(?<newStatus>.+)/.test(data[i])){
                let match = data[i].match(/Change Status:(?<assignee>.+):(?<taskId>.+):(?<newStatus>.+)/);
                let found = assignees.find(x => x.name === match.groups.assignee);
                if(found === undefined){
                    console.log(`Assignee ${match.groups.assignee} does not exist on the board!`)
                }
                else{
                    let task = found.tasks.find(x => x.id === match.groups.taskId);
                    if(task === undefined){
                        console.log(`Task with ID ${match.groups.taskId} does not exist for ${match.groups.assignee}!`)
                    }
                    else{
                        task.status = match.groups.newStatus;
                    }
                }
            }
            else if(/Remove Task:(?<assignee>.+):(?<index>.+)/.test(data[i])){
                let match = data[i].match(/Remove Task:(?<assignee>.+):(?<index>.+)/);
                let found = assignees.find(x => x.name === match.groups.assignee);
                if(found === undefined){
                    console.log(`Assignee ${match.groups.assignee} does not exist on the board!`)
                }
                else{
                    let indexche = found.tasks.length-1;
                    let giventIndex = Number(match.groups.index);
                    if(giventIndex>indexche || giventIndex<0){
                        console.log(`Index is out of range!`)
                    }
                    else{
                       found.tasks.splice(giventIndex, 1);
                    }
                }
            }
        }
    }
    let pointDic = {};
    pointDic['ToDo'] = 0;
    pointDic['In Progress'] = 0;
    pointDic['Code Review'] = 0;
    pointDic['Done'] = 0;
    for (const assignee of assignees) {
        let tasks = Object.values(assignee)[1];
        for (const task of tasks) {
            pointDic[task.status]+=Number(task.estimatedPoints);
        }
    }
    for (const key in pointDic) {
        if(key === 'Done')
        {
            console.log(`${key} Points: ${pointDic[key]}pts`)
        }
        else{
            console.log(`${key}: ${pointDic[key]}pts`)
        }
    }
    if(pointDic['Done'] >= (pointDic['ToDo'] + pointDic['In Progress'] + pointDic['Code Review'])){
        console.log('Sprint was successful!');
    }
    else{
        console.log('Sprint was unsuccessful...');
    }
}
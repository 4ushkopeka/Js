function softUn(input){
    let courses = [];
    for (const command of input) {
        if(/.+: .+/.test(command)){
            let courseInfo = command.split(': ');
            let course = courses.find(x => x.name === courseInfo[0]);
            if(course === undefined){
                course = {};
                course.name = courseInfo[0];
                course.capacity = Number(courseInfo[1]);
                course.students = [];
                courses.push(course);
            }
            else{
                course.capacity+=Number(courseInfo[1]);
            }
        }
        else if(/.+\[\d+\] with email .+ joins .+/.test(command)){ // !students may not be unique
            let match = command.match(/(?<username>.+)\[(?<credits>\d+)\] with email (?<email>.+) joins (?<courseName>.+)/);
            let userName = match.groups.username;
            let credits = Number(match.groups.credits);
            let email = match.groups.email;
            let courseName = match.groups.courseName;
            let course = courses.find(x => x.name === courseName);
            if(course !== undefined && course.capacity>0){
                let stud = {};
                stud.name = userName;
                stud.credits = credits;
                stud.email = email;
                course.students.push(stud);
                course.capacity--;
            }
        }
    }
    courses.sort((a, b)=>{
        return b.students.length - a.students.length;
    });
    for (const course of courses) {
        course.students.sort((a, b)=>{
            return b.credits - a.credits;
        });
        console.log(`${course.name}: ${course.capacity} places left`)
        for (const student of course.students) {
            console.log(`--- ${student.credits}: ${student.name}, ${student.email}`)
        }
    }
}
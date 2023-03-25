function schoolRegister(input){
let aspects = [];
let students = [];
for (const dosie of input) {
    aspects.push(dosie.split(', '));
}
for (const aspect of aspects) {
    let student = {};
    student.name = aspect[0].split(': ')[1];
    student.grade = Number(aspect[1].split(': ')[1]);
    student.avgScore = Number(aspect[2].split(': ')[1]);
    students.push(student);
}
students = students.filter(x => x.avgScore>=3).sort((a, b) => {
    return a.grade - b.grade;
});
let grades = students.map(x => x.grade)
grades = Array.from(new Set(grades)).sort((a,b) => {
    return a - b;
});
for (const grade of grades) {
    let avgAnnual = 0;
    let filteredStuds = students.filter(x => x.grade === grade);
    for (const stud of filteredStuds) {
        avgAnnual+=stud.avgScore;
    }
    avgAnnual/=filteredStuds.length;
    console.log(`${grade+1} Grade`);
    console.log(`List of students: ${filteredStuds.map(x => x.name).join(', ')}`);
    console.log(`Average annual score from last year: ${avgAnnual.toFixed(2)}\n`);
}
}
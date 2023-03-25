function generateReport() {
    let checkboxes = Array.from(document.querySelectorAll('input[type = "checkbox"]'));
    checkboxes = checkboxes.filter(x => x.checked === true).map(x => x.name);
    let propertyDic = {};
    propertyDic.employee = 0;
    propertyDic.deparment = 1;
    propertyDic.department = 1;
    propertyDic.status = 2;
    propertyDic.dateHired = 3;
    propertyDic.benefits = 4;
    propertyDic.salary = 5;
    propertyDic.compensation = 5;
    propertyDic.rating = 6;
    let rows = Array.from(document.querySelectorAll('tbody tr'));
    let report = [];
    for (let i = 0; i < rows.length; i++) {
        let obj = {};
        let rowChildren = Array.from(rows[i].children);
        for (const stat of checkboxes) {
            obj[stat] = rowChildren[propertyDic[stat]].textContent;
        }
        report.push(obj);
    }
    document.getElementById('output').value = JSON.stringify(report);
}
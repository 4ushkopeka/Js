function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      let info = JSON.parse(document.getElementsByTagName('textarea')[0].value);
      let restaurants = [];
      for (const iterator of info) {
         let match = iterator.match(/^(?<restaurant>.+) - (?<empInfo>(?<employee>.+) (?<salary>\d+)(, )?)+$/);
         let rName = match.groups.restaurant;
         let rest = restaurants.find(x => x.name === rName);
         let check = rest === undefined;
         if(check){
            rest = {};
            rest.name = rName;
            rest.employees = [];
         }
         let empInfo = iterator.split(' - ')[1].split(', ');
         for (const empInf of empInfo) {
            let empMatch = empInf.match(/(?<empInfo>(?<employee>.+) (?<salary>\d+))/);
            let employee = {};
            employee.name = empMatch.groups.employee;
            employee.salary = Number(empMatch.groups.salary);
            rest.employees.push(employee);
         }
         if(check){
            restaurants.push(rest);
         }
      }
      let avgSalary = (r) => {
         let salary = 0;
         for (const emp of r.employees) {
            salary+=emp.salary;
         }
         return salary/r.employees.length;
      }
      let restaurantResult = document.querySelector('#bestRestaurant p');
      let workersResult = document.querySelector('#workers p');
      let best = restaurants.sort((a, b) => {
         return avgSalary(b) - avgSalary(a);
      })[0];
      best.employees.sort((a, b) =>{
         return b.salary - a.salary;
      });
      restaurantResult.textContent = `Name: ${best.name} Average Salary: ${avgSalary(best).toFixed(2)} Best Salary: ${best.employees[0].salary.toFixed(2)}`;
      let empsText = '';
      for (const employee of best.employees) {
         empsText += `Name: ${employee.name} With Salary: ${employee.salary} `
      }
      workersResult.textContent = empsText;
   }
}
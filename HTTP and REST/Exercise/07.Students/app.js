function attachEvents() {
  const BASE_URL = 'http://localhost:3030/jsonstore/collections/students';
  load();
  let submitBtn = document.getElementById('submit');
  submitBtn.addEventListener('click', () =>{
    debugger;
    let firstnameVal = document.querySelector('input[name = "firstName"]').value;
    let lastnameVal = document.querySelector('input[name = "lastName"]').value;
    let facultyNumberVal = document.querySelector('input[name = "facultyNumber"]').value;
    let gradeVal = document.querySelector('input[name = "grade"]').value;
    if(firstnameVal === '' || lastnameVal === '' || facultyNumberVal === '' || gradeVal === ''){
      return;
    }
    httpHeaders = {
      method: 'POST',
      body: JSON.stringify({firstName: firstnameVal, lastName: lastnameVal, facultyNumber: facultyNumberVal, grade: gradeVal})
    };
    fetch(BASE_URL, httpHeaders)
    .then(res => res.json())
    .then(load());
  });
    function load(){
      fetch(BASE_URL)
      .then(res => res.json())
      .then(data => {
        let studs = Object.values(data);
        let tb = document.getElementsByTagName('tbody')[0];
        tb.innerHTML = '';
        for (const stud of studs) {
          let row = document.createElement('tr');
          let firstNameTd = document.createElement('td');
          firstNameTd.textContent = stud.firstName;
          let lastNameTd = document.createElement('td');
          lastNameTd.textContent = stud.lastName;
          let facultyNumberTd = document.createElement('td');
          facultyNumberTd.textContent = stud.facultyNumber;
          let gradeTd = document.createElement('td');
          gradeTd.textContent = stud.grade;
          row.appendChild(firstNameTd);
          row.appendChild(lastNameTd);
          row.appendChild(facultyNumberTd);
          row.appendChild(gradeTd);
          tb.appendChild(row);
        }
      });
    }
}

attachEvents();
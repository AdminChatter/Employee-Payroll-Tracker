// GIVEN an employee payroll tracker
// THEN my employee data is displayed on the page sorted alphabetically by last name, and the console shows computed and aggregated data

// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  let employee = [];
  let continueAdd = true;

  while(continueAdd){
  let inputFirstName = window.prompt(`Enter the employee's first name: `)
  let inputLastName = window.prompt(`Enter the employee's last name: `)
  let inputSalary = Number(window.prompt(`Enter the employee's salary: `))

  employee.push({
    firstName: inputFirstName,
    lastName: inputLastName,
    salary: inputSalary
  })

  continueAdd = window.confirm(`Do you want to continue to add employees?`)
  }

  return employee
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  let totalSalary = 0, averageSalary = 0;

  for (let i = 0; i < employeesArray.length; i++){
    totalSalary += Math.round(employeesArray[i].salary)
  }

  averageSalary = (totalSalary / employeesArray.length).toFixed(2)
  
  console.log(`The average employee salary between our ${employeesArray.length} employee(s) is $${averageSalary}`)
}


// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  let luckNumber = Math.floor(Math.random() * employeesArray.length)

  console.log(`Congratulations to ${employeesArray[luckNumber].firstName} ${employeesArray[luckNumber].lastName}, our random drawing winner!`)
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);


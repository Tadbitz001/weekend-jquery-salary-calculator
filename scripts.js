console.log('JS')


$(document).ready(readyNow);


function readyNow() {
  console.log("DOM is loaded! In readyNow!");
$('#submitBtn').on('click', addEmployee);



}
//an array to store all employees
let employeeList = [];

function addEmployee () {
    console.log('Inside addEmployee', addEmployee);
    console.log('Employee list before any employees added: ', employeeList)

    const employeeFirstName =$('#firstName').val();
    const employeeLastName =$('#lastName').val();
    const employeeId =$('#employeeId').val();
    const employeeTitle =$('#title').val();
    const employeeAnnualSalary =$('#annualSalary').val();

    console.log(`
        Employee inputs:
            First Name: ${employeeFirstName}
            Last Name: ${employeeLastName}
            Id: ${employeeId}
            Title: ${employeeTitle}
            Annual ${employeeAnnualSalary}
    `)


}
// The application should have an input form that collects 
//employee first name, last name, ID number, job title, 
//annual salary.

// A 'Submit' button should collect the form information, 
//store the information to calculate monthly costs, append 
//information to the DOM and clear the input fields. Using 
//the stored information, calculate monthly costs and append 
//this to the to DOM. If the total monthly cost exceeds 
//$20,000, add a red background color to the total monthly cost.

// Create a delete button that removes an employee from the DOM. 
//For Base mode, it does not need to remove that Employee's 
//salary from the reported total.


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

    //test to see if console logs out
    console.log('Employee First name: ', employeeFirstName);
    //check to see if fields are entering correctly.
    console.log(`
        Employee inputs:
            First Name: ${employeeFirstName}
            Last Name: ${employeeLastName}
            Id: ${employeeId}
            Title: ${employeeTitle}
            Annual Salary: ${employeeAnnualSalary}
    `)

    //check to see if fields are filled.
    if (employeeFirstName && employeeLastName && employeeId && employeeTitle && employeeAnnualSalary) {
        let newEmployee = {
            firstname: employeeFirstName,
            lastname: employeeLastName,
            id: employeeId,
            title: employeeTitle,
            annualsalary: employeeAnnualSalary
        }

        //add new employee to main employeelist.
        employeeList.push(newEmployee);

        //calculateRemainingBudget();

        resetInputFields()
    }   else {
        //pops up alert to fill in all info fields
        alert('Please enter in all fields');
    }



    
    console.log('EmployeeList: ', employeeList)

    render();
}

function resetInputFields () {
    //setter to reset fields into empty strings
    $('#firstName').val('');
    $('#lastName').val('');
    $('#employeeId').val('');
    $('#title').val('');
    $('#annualSalary').val('');
}


let budget = 20000;

function calculateRemainingBudget () {
    //loop through purchases in array
    let totalSalary =0;
    for (let i=0; i<employeeList.length; i++) {
    //for each employee, add up salary
    totalSalary += Number (employeeList[i].annualsalary);
    }
    //create variable called monthlyCost to by total salary divided by 12
   
    console.log('total salaries: ', totalSalary);
    let monthlyEmployeeCost = totalSalary / 12;
    console.log("MonthlyEmployeeCost are: ", monthlyEmployeeCost);
    //get remaining budget by subtracting monthly cost and name it remaining balance
    const remainingBudget = budget - monthlyEmployeeCost;
    //subtract totalprices from the remaining budget

    //To-Do, if entered in wont delete
    //create a condtional that if the monthlyEmployee cost is over 20000, then red background.
    // if (monthlyEmployeeCost > 20000) {
    //     $('h4').addClass('newTotal');
    // }
    // else {
    //     $('h4').removeClass('newTotal');
    // }

    let eel = $('#monthlyBudgetOut');
    console.log('Monthly cost are: ', monthlyEmployeeCost);
    eel.empty();
    eel.append(monthlyEmployeeCost);

}



function render () {
    //update DOM
    //empty table
    $('#employeeTable').empty();
    $('#employeeTable').append(`
        <tr>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Id</td>
            <td>Title</td>
            <td>Annual Salary</td>
            <td>Delete Option </td>
        </tr>
    `);

    //loop through employee list and add new employees to array
    for (i=0; i<employeeList.length; i++) {
        $('#employeeTable').append(`
        <tr id="${i}">
            <td>${employeeList[i].firstname}</td>
            <td>${employeeList[i].lastname}</td>
            <td>${employeeList[i].id}</td>
            <td>${employeeList[i].title}</td>
            <td>${employeeList[i].annualsalary}</td>
            <td>
                <button class="deleteBtn">Delete</button>
            </td>
        </tr>
        `)
    }


}




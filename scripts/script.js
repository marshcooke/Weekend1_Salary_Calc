console.log('js');

// when document is ready, run this function
function readyNow() {
    console.log('jq');
    $('#submit').on('click', calcInput);
}

// create array for input data
var employees = [];

// set variables to zero for future calculations
var annualSalaryCost = 0;
var monthlySalaryCost = 0;

// Takes inputs and creates an object constructor, calculates monthly 
// salary cost, appends to DOM
function calcInput() {
    // yes this worked: console.log('submitt button working?');
    var newEmployee = new Employee ($('#firstIn').val(), 
        $('#lastIn').val(), 
        $('#jobTitleIn').val(), 
        $('#idNumIn').val(), 
        $('#annualSalIn').val());


    // clear contents in form fields
    $('#firstIn').val(''), 
    $('#lastIn').val(''), 
    $('#jobTitleIn').val(''), 
    $('#idNumIn').val(''), 
    $('#annualSalIn').val('');
    console.log(employees);

    // totaling costs from salaries
    annualSalaryCost =+ Number(newEmployee.annualSalary);
    // total monthly cost of salaries (annual cost/12)
    monthlySalaryCost = Math.round(annualSalaryCost / 12);
    $('#totalMonthlyCost').text(monthlySalaryCost);
}



// Object Constructor
function Employee(firstIn, lastIn, jobTitleIn, idNumIn, annualSalIn) {
    this.firstName = firstIn;
    this.lastName = lastIn;
    this.jobTitle = jobTitleIn;
    this.idNum = idNumIn;
    this.annualSalary = annualSalIn;
    employees.push(this);
}


// calling document ready function
$(document).ready(readyNow);
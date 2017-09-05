console.log('js');

// when document is ready, run this function
function onReady() {
    console.log('jq');
    $('#submit').on('click', calcInput);
}

//create array for input data
var employees = [];

// Takes inputs and creates an object constructor, calculates monthly 
// salary cost, appends to DOM
function calcInput() {
    var newEmployee = new Employee ($('#firstIn').val(), $('lastIn').val(), $('jobTitleIn').val(), $('idNumIn').val(), $('annualSalIn'));
    employees.push(newEmployee);
    return $('firstIn') + $('lastIn');
}



// Object Constructor
function Employee(firstIn, lastIn, jobTitleIn, idNumIn, annualSalIn) {
    this.firstName = firstIn;
    this.lastName = lastIn;
    this.jobTitle = jobTitleIn;
    this.idNum = idNumIn;
    this.annualSalary = annualSalIn;
}


// calling document ready function
$(document).ready(onReady);
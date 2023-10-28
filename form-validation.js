   
const formData = require('form-data');

function validateForm() {
    var form = document.forms["job-application-form"];
    var fname = form["fname"].value;
    var lname = form["lname"].value;
    var email = form["email"].value;
    var contact = form["contact"].value;
    var jobid = form["jobid"].value;
    var resume = form["resume"].value;
   
    // Name validation
    if (fname == "" || lname == "") {
       alert("First name and last name cannot be empty");
       return false;
    }
   
    // Email validation
    var re = /\S+@\S+\.\S+/;
    if (!re.test(email)) {
       alert("Email format is incorrect");
       return false;
    }
   
    // Contact validation
    if (contact == "" || isNaN(contact)) {
       alert("Contact number is not valid");
       return false;
    }
   
    // Job ID validation
    if (jobid == "" || isNaN(jobid)) {
       alert("Job ID is not valid");
       return false;
    }
   
    // Resume validation
    if (resume == "") {
       alert("Please upload your resume");
       return false;
    }
   }




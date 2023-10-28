const contactForm = document.querySelector('.contact-form');

let fname = document.getElementById("fname");
let lname  = document.getElementById("lname");
let email = document.getElementById("email");
let contact = document.getElementById("contact");
let jobid = document.getElementById("jobid");
let resume = document.getElementById("resume");

contactForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    let formData = new FormData();
    //     formData ={
    //     fname : fname.value,
    //     lname: lname.value,
    //     email: email.value,
    //     contact: contact.value,
    //     jobid: jobid.value,
    //     resume: resume.files[0]
    // }
    formData.append('fname', fname.value);
    let xhr = new XMLHttpRequest();
    xhr.open("POST", '/');
    //xhr.setRequestHeader('content-type','application/json');
    xhr.onload = function(){

        if(xhr.responseText == 'success'){
            alert('Application Successfully Submitted!');
            fname.value= '';
            lname.value='';
            email.value='';
            contact.value='';
            jobid.value='';
            resume.value='';
        }
        else{
            alert('Error in Application Submission! Please try again later.');
        }
    }
    
    xhr.send(formData);
})
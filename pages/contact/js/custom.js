var username = document.getElementById('fname');
var name_err = document.getElementById('name_err_msg');

var email = document.getElementById('email');
var email_err = document.getElementById('email_err_msg');
var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

var subject = document.getElementById('fsub');
var subject_err = document.getElementById('sub_err_msg');

var message = document.getElementById('fmsg');
var message_err = document.getElementById('msg_err_msg');


function sub(){
    if(username.value == ''){
        name_err.innerHTML = "Please Enter Your Name!";
        username.style.border = '1px solid red';
        username.focus();
        return false;
    }
    if(subject.value == ''){
        subject_err.innerHTML = "Subject Should Be filled!";
        subject.style.border = '1px solid red';
        subject.focus();
        return false;
    }
    if(message.value == ''){
        message_err.innerHTML = "Write your message to us";
        message.style.border = '1px solid red';
        message.focus();
        return false;
    }
    else if(email.value == ''){
        email_err.innerHTML = "Please Enter Your Email";
        email.style.border = '1px solid red';
        email.focus();
        return false;
    }
    else if(!regex.test(email.value)){
        email_err.innerHTML = "Enter Your Email Correctly!";
        email.style.border = '1px solid red';
        email.focus();
        return false;
    }

}








username.addEventListener('blur', errvalid);
var username = document.getElementById('promo');
var name_err = document.getElementById('promo_err_msg');


function sub(){
    if(username.value == ''){
        name_err.innerHTML = "Apply Code First";
        username.style.border = '1px solid red';
        username.focus();
        return false;
    }
}
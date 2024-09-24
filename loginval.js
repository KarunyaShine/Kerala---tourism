var email=document.getElementById("email");
var paswd=document.getElementById("password");
function validation()
{
    let regexp=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    if(regexp.test(email.value)){
        error.innerHTML="value email ID";
        error.style.color="green";
        return true;
    }
        else if(email.value.trim()=='')
        {
            alert("email cannot be empty");
            return false;
        }

        else if(password.value.trim()=='')
        {
            alert("password cannot be empty");
            return false;
        }
        else if(password.value.trim().length <= 5)
        {
            alert("password too short");
            password.style.border="2px solid red";
            return false;
        }
        else
        {
            return true;
        }
}
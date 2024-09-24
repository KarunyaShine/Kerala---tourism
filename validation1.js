var email=document.getElementById("email");
var paswd=document.getElementById("paswd");
function validation()
{
    if(email.value.trim()=='')
    {
        alert("email cannot be empty");
        return false;
    }
    else if(paswd.value.trim()=='')
    {
        alert("password cannot be empty");
        return false;
    }
    else if(paswd.value.trim().length <= 5)
    {
        alert("paswd too short");
        paswd.style.border="2px solid red";
        return false;
    }
    else
    {
        return true;
    }
}

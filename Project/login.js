function validation(){
    var username=document.getElementById("username");
    var password=document.getElementById("password");

    if(username.value=="bbc007" && password.value=="bbc007")
        {
            alert("Login successfully");
            return true;
        }
    
    else
    { 
        alert("Ivalid");
        return false;
    }
}
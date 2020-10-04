var success = document.getElementById("success");
var error = document.getElementById("error");


errorname.style.color = "Red";
erroremail.style.color = "Red";
errorpass.style.color = "Red";
errorgender.style.color = "Red";
errorpayment.style.color = "Red";
errorterm.style.color = "Red";


document.getElementById("register").addEventListener("click",() => {
    let username = document.getElementById("username");
    let pw = document.getElementById("password");
    let cpw = document.getElementById("confirmpassword");
    let em = document.getElementById("email");
    var radiomale = document.getElementById("male").checked;
    var radiofemale = document.getElementById("female").checked;
    var checkpayment1 = document.getElementById("debitpayment").checked;
    var checkpayment2 = document.getElementById("creditpayment").checked;
    var checkpayment3 = document.getElementById("paypalpayment").checked;
    var checkterm = document.getElementById("termcondition").checked;
    
    success.innerHTML = "";
    errorname.innerHTML = "";
    erroremail.innerHTML = "";
    errorpass.innerHTML = "";
    errorgender.innerHTML = "";
    errorpayment.innerHTML = "";
    errorterm.innerHTML = "";

    if (username.value === "" ){
        errorname.innerHTML = "Please insert your fullname";
    }
    else if(username.value.length < 5 || username.value.length > 20){
        errorname.innerHTML = "The length must be between 5 and 20";
    }
    else if(em.value === "" ){
        erroremail.innerHTML = "Please insert your email";
    } 
    else if(em.value.length < 5 || em.value.length > 30){
        erroremail.innerHTML = "The length must be between 5 and 30";
    }
    else if(em.value.indexOf("@") == -1){
        erroremail.innerHTML = "Please use @ for your email";
    }
    else if(em.value.indexOf(".com") == -1){
        if(em.value.includes(".co.id") == 1){
            if(em.value.includes("@.") == 1){
                erroremail.innerHTML = "Please use your email name ( ex : @xmail )";
            }  
            else if(em.value.includes(" ") == 1){
                erroremail.innerHTML = "Cannot use space for email validation";
            }
            else{
                if(pw.value === ""){
                    errorpass.innerHTML = "Password cannot be empty";
                }
                else if(pw.value.length < 6){
                    errorpass.innerHTML = "Password must have minimal length of 6 characters";
                } 
                else if(cpw.value === ""){
                    errorpass.innerHTML = "Confirm password cannot be empty"; 
                }
                else if(cpw.value !== pw.value){
                    errorpass.innerHTML = "Confirm password and password must be the same";
                } 
                else if(radiomale == "" && radiofemale == "") {
                    errorgender.innerHTML = "Please select your gender";
                }
                else if( checkpayment1 == "" && checkpayment2 == "" && checkpayment3 == "") {
                    errorpayment.innerHTML = "Please select your payment method";
                }
                else if( checkterm == "") {
                    errorterm.innerHTML = "Checked means you agree with our Terms & Conditions";
                }
                else{
                    alert("Successfully Register!");
                    window.location = "./HomePagee.html";
                }
            }
        }
        else if(em.value.includes(".ac.id") == 1){
            if(em.value.includes("@.") == 1){
                erroremail.innerHTML = "Please use your email name ( ex : @xmail )";
            }  
            else if(em.value.includes(" ") == 1){
                erroremail.innerHTML = "Cannot use space for email validation";
            }
            else{
                if(pw.value === ""){
                    errorpass.innerHTML = "Password cannot be empty";
                }
                else if(pw.value.length < 6){
                    errorpass.innerHTML = "Password must have minimal length of 6 characters";
                } 
                else if(cpw.value === ""){
                    errorpass.innerHTML = "Confirm password cannot be empty"; 
                }
                else if(cpw.value !== pw.value){
                    errorpass.innerHTML = "Confirm password and password must be the same";
                } 
                else if(radiomale == "" && radiofemale == "") {
                    errorgender.innerHTML = "Please select your gender";
                }
                else if( checkpayment1 == "" && checkpayment2 == "" && checkpayment3 == "") {
                    errorpayment.innerHTML = "Please select your payment method";
                }
                else if( checkterm == "") {
                    errorterm.innerHTML = "Checked means you agree with our Terms & Conditions";
                }
                else{
                    alert("Successfully Register!");
                    window.location = "./HomePagee.html";
                }
            }
        }
        else {
            erroremail.innerHTML = "Please use domain ( ex : .com, .co.id, .ac.id )";
        }   
    }
    else if(em.value.includes(".com") == 1){
        if(em.value.includes("@.") == 1){
            erroremail.innerHTML = "Please use your email name ( ex : @xmail )";
        }  
        else if(em.value.includes(" ") == 1){
            erroremail.innerHTML = "Cannot use space for email validation";
        }
        else if(pw.value === ""){
            errorpass.innerHTML = "Password cannot be empty";
        }
        else if(pw.value.length < 6){
            errorpass.innerHTML = "Password must have minimal length of 6 characters";
        } 
        else if(cpw.value === ""){
            errorpass.innerHTML = "Confirm password cannot be empty"; 
        }
        else if(cpw.value !== pw.value){
            errorpass.innerHTML = "Confirm password and password must be the same";
        } 
        else if(radiomale == "" && radiofemale == "") {
            errorgender.innerHTML = "Please select your gender";
        }
        else if( checkpayment1 == "" && checkpayment2 == "" && checkpayment3 == "") {
            errorpayment.innerHTML = "Please select your payment method";
        }
        else if( checkterm == "") {
            errorterm.innerHTML = "Checked means you agree with our Terms & Conditions";
        }
        else{
            alert("Successfully Register!");
            window.location = "./HomePagee.html";
        }
    }
    

})


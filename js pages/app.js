const form=document.querySelector('#form')
const userName=document.querySelector('#userName');
const email=document.querySelector('#email');
const pswd=document.querySelector('#pswd');
const cpswd=document.querySelector('#cpswd');

form.addEventListener("submit",(e)=>{

 if(!   validateInputs()){
    e.preventDefault();
 };

})

 function validateInputs(){
    const userNameValue=userName.value.trim();
    const emailValue=email.value.trim();
    const paswdValue=pswd.value.trim();
    const cpaswdValue=cpswd.value.trim();
    let success=true;

    if(userNameValue===''){
        success=false;
        setError(userName,'UserName is required')
    }
    else{
        setSuccess(userName)
    }

    if(emailValue===''){
        success=false;

        setError(email,'Email is required')
    }
    else if(!validateEmail(emailValue)){
        success=false;
        setError(email,'pls eneter valid email')
    }
    else{
        setSuccess(email)
    }

    if(paswdValue===''){
        success=false;

        setError(pswd,'Password is required')
    }
    else if(paswdValue.length<8){
        success=false;
        setError(pswd,'Password Must be atleast 8 characters long')

    }
    else{
        setSuccess(pswd)
    }
    if(cpaswdValue===''){
        success=false;
        setError(cpswd,'confirm passwrod  is required')
    }
    else if(cpaswdValue!=paswdValue){
        success=false;
        setError(cpswd,'Password doest not match')
    }
    else{
        setSuccess(cpswd)
    }

return success;
}

function setError(element,message){
const inputGroup=element.parentElement;
const errorElement=inputGroup.querySelector('.error');
errorElement.innerText=message;
inputGroup.classList.add('error');
inputGroup.classList.remove('success');


}
function setSuccess(element){
const inputGroup=element.parentElement;
const errorElement=inputGroup.querySelector('.error');
errorElement.innerText='';
inputGroup.classList.add('success');
inputGroup.classList.remove('error');


}
const validateEmail=(email)=>{

    return String(email).toLowerCase().match(/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/);

}

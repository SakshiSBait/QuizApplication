let form=document.querySelector("form");
let fName=document.querySelectorAll("input")[0]
let lName=document.querySelectorAll("input")[1]
let email=document.querySelectorAll("input")[2]
let moblie=document.querySelectorAll("input")[3]
let pass=document.querySelectorAll("input")[4]
let cpass=document.querySelectorAll("input")[5]

let efirst=document.querySelectorAll("span")[0]
let elast=document.querySelectorAll("span")[1]
let eEmail=document.querySelectorAll("span")[2]
let eMobile=document.querySelectorAll("span")[3]
let epass=document.querySelectorAll("span")[4]
let eCpass=document.querySelectorAll("span")[5]

console.log(form,fName,lName,email,moblie,pass,cpass);
console.log(efirst,elast,eMobile,eEmail,eCpass,epass);
let storage=[];

let dataFromStorage=JSON.parse(localStorage.getItem("details"));//data in object format convert in jsformate 

if(dataFromStorage){
    storage=dataFromStorage;
}

//form validation 

form.addEventListener("submit",(e)=>{
    let flag=true;

  

    //first name validation 
    //regx stands for regular exprestion ^ where it start / $ means where it stop
    let regx=/^[a-zA-Z]{1,16}$/
    if(fName.value ==""){
        efirst.innerHTML=`*Enter the first name`;
        fName.style.border="2px solid red";
        e.preventDefault();
        flag=false;
    }else if(regx.test(fName.value)){
        efirst.innerHTML="";
    }
    else{
        efirst.innerHTML=`*Invalid first name`;
        fName.style.border="2px solid red";
        e.preventDefault();
        flag=false;
    }

    //last name validation 
    if(lName.value==""){
        elast.innerHTML=`*Enter the last name`;
        lName.style.border="2px solid red";
        e.preventDefault();
        flag=false;
    }
    else if(regx.test(lName.value)){
        elast.innerHTML="";
        
    }
    else{
        elast.innerHTML=`*Invalid last name`;
        lName.style.border="2px solid red";
        e.preventDefault();
        flag=false;
    }
    
    //email vallidation

    let emailunique=storage.find((e)=>{
        if(e.pemail==email.value){
            return e;
        }
    })
    if(emailunique){
        eEmail.innerHTML="*email is already exist";
        e.preventDefault();
        flag=false;
    }
    else if(email.value==""){
        eEmail.innerHTML=`*Enter the email`;
        email.style.border="2px solid red";
        e.preventDefault();
        flag=false;
    }
    else{
         eEmail.innerHTML="";
    }


    //mobile validation 
    
    let mobileunique=storage.find((e)=>{
        if(e.pMobile==moblie.value){
            return e;
        }
    })
    let regxformoblie=/^[6-9][0-9]{9}$/
    
    if(mobileunique){
        eMobile.innerHTML="*mobile number already register";
        e.preventDefault();
        flag=false;
    }
    else if(moblie.value==""){
        eMobile.innerHTML=`*Enter the moblie number`;
        moblie.style.border="2px solid red";
        e.preventDefault();
        flag=false;
    }
    else if(regxformoblie.test(moblie.value)){
        eMobile.innerHTML="";
    }
    else{
        eMobile.innerHTML="*Invalid Moblie Number";
        moblie.style.border="2px solid red";
        e.preventDefault();
        flag=false;
    }
   

    //password validation 
    let regxForPass=/^[a-zA-Z0-9!@#$%&*]{8,12}$/
    if(pass.value==""){
        epass.innerHTML="*Enter the password";
        pass.style.border="2px solid red";
        e.preventDefault();
        flag=false;
    }
    else if(regxForPass.test(pass.value)){
        epass.innerHTML="";
    }
    else{
        epass.innerHTML=`*Invalid password`;
        pass.style.border="2px solid red";
        e.defaultPrevented();
        flag=false;
    }


    //comfirm passowrd
    if(cpass.value==""){
        eCpass.innerHTML="*Enter the password";
        cpass.style.border="2px solid red";
        e.preventDefault();
        flag=false;
    }
    else if(cpass.value===pass.value){
        eCpass.innerHTML="";
    }
    else{
        eCpass.innerHTML="*Password not match";
        cpass.style.border="2px solid red";
        e.preventDefault();
        flag=false;
    }

    //store the data in local storage

    if(flag){
    let details={
        firstName:fName.value,
        lastName:lName.value,
        pemail:email.value,
        pMobile:moblie.value,
        password:pass.value,
        quiz:null,
    };
    storage.push(details);//it will push the data one by one (array method)
    
    localStorage.setItem("details",JSON.stringify(storage));//store the data in object
    
    }
    
    
})
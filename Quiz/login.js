let form=document.querySelector("form");
let Lemail=document.querySelectorAll("input")[0]
let Lpass=document.querySelectorAll("input")[1]

let eemial=document.querySelectorAll("span")[0]
let eform=document.querySelectorAll("span")[2]
let epass=document.querySelectorAll("span")[1]
let dataFromStorage=JSON.parse(localStorage.getItem("details"));

console.log(dataFromStorage);

console.log(form,Lemail,Lpass,eemial,eform,epass);

form.addEventListener("submit",(e)=>{
    eemial.innerHTML=""
    eform.innerHTML=""
    epass.innerHTML=""

    //matching login details

    let matchData=dataFromStorage.find((e)=>{
        if((e.pMobile==Lemail.value && e.password==Lpass.value )||
        (e.pemial==Lemail.value && e.password==Lpass.value))
        {
            return e;
        }
        
    })
    
    console.log(matchData);
    
    if(Lemail.value==""&& Lpass.value==""){
        eemial.innerHTML=`*enter the email and mobile no`
        epass.innerHTML=`*enter the password`
        e.preventDefault();
    }
    else if(Lemail.value==""){
        eemial.innerHTML=`*enter the email and password`;
        e.preventDefault();
    }
    else if(Lpass.value==""){
        epass.innerHTML="*enter the password"
        e.preventDefault();
    }
    else if(matchData){
        localStorage.setItem("quizuser",JSON.stringify(matchData));
        alert("welcome!!!")
    }
    else{
        eform.innerHTML="match not found";
        e.preventDefault();
    }
    // Lemail.value=="bd@gmail.com" && Lpass.value=="baitD1224"
})

// let h3=document.querySelector("h3");
// h3.addEventListener("click",()=>{
//     if(h3.innerHTML=="show"){
//         password.type="text";
//         h3.innerHTML="hide"
//     }else{
//         h3.innerHTML="show";
//         password.type="password"
//     }
// })

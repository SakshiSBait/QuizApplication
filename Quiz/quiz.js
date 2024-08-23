let details=JSON.parse(localStorage.getItem("details"));
let quizuser=JSON.parse(localStorage.getItem("quizuser"));
let body=document.querySelector("body");
console.log(details,quizuser);

if(quizuser){
    if(quizuser.quiz){
        //if user is login and attend the quiz
       body.innerHTML=`<h3 style="color:white">test already completed to see result click here</h3> <a href="./result.html" style="color:white">click here</a>` ;

    }
    else{
      //user login quiz is not taken 
      //here quiz is start 
        mainFunction();
    }
}
else{
    alert("login first");
    window.location.href="./login.html";
}

function mainFunction(){


let storage=[
    {
        questionId:"1",
        question:"ROLLBACK in a database is ________ statement ?",
        options:["TCL","DCL","DML","DDL"],
        crctans:"TCL",
        userAnswer:"",
        visited:false
    },

    {
        questionId:"2",
        question:"Dr. E.F. Codd represented ______ rules that a database must obey if it has to be considered truly relational ?",
        options:["10","8","12","6"],
        crctans:"12",
        userAnswer:"",//null
        visited:false
    },

    {
        questionId:"3",
        question:"	Periodically adding, changing and deleting file records is called file ?",
        options:["updating","upgrading","restructiring ","renewing"],
        crctans:"updating",
        userAnswer:"",//null
        visited:false
    },

    {
        questionId:"4",
        question:"A collection of interrelated records is called a ?",
        options:["management information system","spreadsheet","database","text file"],
        crctans:"data",
        userAnswer:"",//null
        visited:false
    },
    {
        questionId:"5",
        question:"__________ represents raw facts, whereas __________ is data made meaningful ?",
        options:["Information, reporting","Data, information ","Information, bits","Records, bytes"],
        crctans:"Data, information ",
        userAnswer:"",//null
        visited:false
    },

    {
        questionId:"6",
        question:"	A collection of unprocessed items is ________ ?",
        options:["information","data","memory","reports"],
        crctans:"data",
        userAnswer:"",//null
        visited:false
    },

    {
        questionId:"7",
        question:"External database is ?",
        options:["Database created in EXCEL","Database created using DBMS package ","Database created in MS-Word","All of the above "],
        crctans:"Database created using DBMS package ",
        userAnswer:"",//make it as null
        visited:false
    }
];

let questioncont=document.querySelector("#actual-question")
let optioncont=document.querySelector("#actual-option")

let btncont=document.querySelector("#actual-btn")
let footer=document.querySelector("footer");
let previousbtn=footer.querySelectorAll("button")[0]
let nextbtn=footer.querySelectorAll("button")[1]
let savebtn=footer.querySelectorAll("button")[2]
let submitbtn=footer.querySelectorAll("button")[3];

let index=0;


//creating button based on total question
function createBtn(){
 storage.forEach((e)=>{
    let btn=document.createElement("button")
    btn.id=e.questionId;
    btn.innerHTML=e.questionId;
    btncont.append(btn)
 })
}
createBtn()

let allbtn=btncont.querySelectorAll("button");
console.log(allbtn);

function display()
{
    questioncont.innerHTML=storage[index].question;
    //
    storage[index].visited=true;
    optioncont.innerHTML="";
    storage[index].options.map((e)=>{
        let opt=document.createElement("input");
        opt.type="radio";
        opt.value=e;
        opt.name="options"
        let label=document.createElement("label")
        label.innerHTML=e;
        //it will compare userans and options value 
        if(storage[index].userAnswer==opt.value){
            opt.checked=true;
        }
        optioncont.append(opt,label)
    });

    allbtn.forEach((btn)=>{
        if(btn.id-1==index){
            btn.style.backgroundColor="red";
        }
       });
}
display()


nextbtn.addEventListener("click",()=>{
    notSave();
    index=(index+1)%storage.length;
    display();
    legends()
})

previousbtn.addEventListener("click",()=>{
    notSave();
    index=(index-1+storage.length)%storage.length
    display()
    legends()
})

savebtn.addEventListener("click",()=>{
    notSave();
    saveAns();
    index=(index+1)%storage.length;
    display(); 
    legends()
})

//accessing 7 btn 


function individualBtn(){
//itterate 7 btn using forEach
allbtn.forEach((btn)=>{
    //adding event 
   btn.addEventListener("click",()=>{
    notSave();
    index=btn.id-1;
    display();
    legends()
   })
})
}
individualBtn();

function saveAns(){
   let opt=document.querySelectorAll("input");
   console.log(opt);
   opt.forEach((individualOption)=>{
    //input has one proprety checked when we select the option it will return ture by default is it is false.
    if(individualOption.checked){
       storage[index].userAnswer=individualOption.value;
       console.log(storage);
       
       allbtn.forEach((btn)=>{
        if(btn.id-1==index){
            btn.style.backgroundColor="green";
        }
       });
        
    }
   });
}

function notSave(){
   storage[index].visited=true;

   if(!storage[index].userAnswer){

    allbtn.forEach((btn)=>{
        if(btn.id-1==index){
            btn.style.backgroundColor="purple";
        }
       });
   }
}

function legends(){
let legendsCont=document.querySelector("#legends");
let answer=legendsCont.querySelectorAll("span")[0];
let notAns=legendsCont.querySelectorAll("span")[1]
let mark=legendsCont.querySelectorAll("span")[2]
let notVisited=legendsCont.querySelectorAll("span")[3]
let answerCount=0;
let notAnsCount=storage.length;
let markCount=0;
let notVisitedCount=storage.length;


console.log(answer,notAns,mark,notVisited);
storage.map((e)=>{
    //if useranswer is present means its an truth value
    if(e.userAnswer){
        answerCount++;
        notAnsCount--;
    }

    if(e.visited){
        notVisitedCount--;
    }

    //answer should be visited but not answer
    if(e.visited && !e.userAnswer){
        markCount++;
    }
    

    answer.innerHTML=answerCount;
    notAns.innerHTML=notAnsCount;
    mark.innerHTML=markCount;
    notVisited.innerHTML=notVisitedCount;
})

}

function timer(){
let header=document.querySelector("header");
let hours=header.querySelectorAll("span")[0]
let min=header.querySelectorAll("span")[1]
let sec=header.querySelectorAll("span")[2]

let duration=2*60*60;//7200 sec
let interval=setInterval((e)=>{
  duration--;//time should be reverse order
  
  hours.innerHTML=`${Math.floor(duration/3600)}`;
  min.innerHTML=`${Math.floor((duration%3600)/60)}`
  sec.innerHTML=`${Math.floor((duration%3600)%60)}`

  if(duration==0){
    clearInterval(interval);
    quizuser.quiz=storage;
        localStorage.setItem("quizuser" ,JSON.stringify(quizuser))
        details=details.filter((e)=>{
            if(e.pMobile!=quizuser.pMobile){
               return e;
            }
        });

        details.push(quizuser);
        localStorage.setItem("details",JSON.stringify(details));
        window.location.href="./result.html";

  }
},1000)
}
timer();


submitbtn.addEventListener("click",()=>{
    let conf=confirm("Are you sure want to submit.");
    if(conf){
        quizuser.quiz=storage;
        localStorage.setItem("quizuser" ,JSON.stringify(quizuser))
        details=details.filter((e)=>{
            if(e.pMobile!=quizuser.pMobile){
               return e;
            }
        });

        details.push(quizuser);
        localStorage.setItem("details",JSON.stringify(details));
        window.location.href="./result.html";

        
    }


});

}
// ===============logo
let logo=document.querySelector(".logo");
setInterval(()=>{
    logo.classList.toggle("logo1");
},2000)



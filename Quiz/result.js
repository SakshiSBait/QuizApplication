let quizuser=JSON.parse(localStorage.getItem("quizuser"));
let userResult=quizuser.quiz;
let score=0;
console.log(quizuser);

let main=document.querySelector("main");
userResult.forEach((e)=>{
    let div=document.createElement("div");
    main.append(div);
    let p=document.createElement("p");
    p.innerHTML=e.question;
    let h3=document.createElement("h3")
    h3.innerHTML=`Your Answer: ${e.userAnswer}`;
    let h4=document.createElement("h4");
    h4.innerHTML=`Correct Answer: ${e.crctans}`;

    if(e.userAnswer==e.crctans){
        div.className="crct";
        score++;
    }
    else{
        div.className="wrong";
    }

    
    div.append(p,h3,h4)
})

let username=document.querySelector("#name");
let userscore=document.querySelector("#score");
let innerDiv=document.querySelector("#innerdiv")
let width=0;
let marks=document.querySelector("#marks");
username.innerHTML=quizuser.firstName;
userscore.innerHTML=`${score}/${userResult.length}`;

let interval=setInterval((e)=>{
    width++;
    innerDiv.style.width=`${width}%`;

    if(width>(score/userResult.length*100)){
        clearInterval(interval);
        marks.innerHTML=`${((score/userResult.length)*100).toFixed(2)}%`;
        marks.style.display="inline";
    }
},20);



let userscore=document.querySelector("#user");        //accessing user score to update on web
let compscore=document.querySelector("#comp");        //accessing comp score to update on web
let winmsg=document.querySelector(".msg");            //accessing div to print the result
let us=0;   //user score
let cs=0;    //computer score

const gencompchoice=()=>{                             //generating random choice using math.rand function
    const options=["stone","paper","scissors"];
     let randind=Math.floor(Math.random()*3);
     return options[randind];
};

const play=(userchoice)=>{                           // algorithm to track winn loose or draw
    const compchoice=gencompchoice();
    console.log(userchoice);
    console.log(compchoice);
    if(userchoice===compchoice){                      //to track draw
        winmsg.innerText="GAME WAS A DRAW . PLAY AGAIN";
        winmsg.style.backgroundColor="#19191a";
    }
    else{
        let win=true;
        if(userchoice=== "stone"){
            //only comp choices available are paper or scissors
            userwin = compchoice==="paper"? false :true;
        }
        else if(userchoice ==="paper"){
            //comp choice are either stone or scissors
            userwin=compchoice==="stone"?true:false;
        }
        else{
            //comp has stone or paper
            userwin=compchoice==="stone"?false:true;
        }
        showwinner(userwin,userchoice,compchoice);
    }
};
const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        us++;
        userscore.innerText=us;
        winmsg.innerText=`YOU WIN ! YOUR ${userchoice} BEATS  COMPUTER's ${compchoice}`;
        winmsg.style.backgroundColor="green";
    }
    else{
        cs++;
        compscore.innerText=cs;
        winmsg.innerText=`YOU LOOSE ... COMPUTER's ${compchoice} BEATS YOUR ${userchoice}`;
        winmsg.style.backgroundColor="red";
    }
};

const choices=document.querySelectorAll(".choice");
choices.forEach((choice)=>{                            // accessing all choices to add click functionality
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");     // accessing choice entered by user
        play(userchoice);
    })
})
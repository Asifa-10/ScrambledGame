var easy= ["ear","eat","fan","red","ice","van","age","big","bed","bad","bye","cat","can","cup","dot"];
var med= ["blue","cafe","fact","hack","pack","able","army","area","away","baby","icon","jail","ugly"];
var hard= ["dress","agree","apple","drink","argue","match","sharp","shelf","slice","space","shine","solid"];
let Mins=1;
let Secs=59;
var score=0;
flag= false;

document.getElementById("words").style.display="none";
playbtn.addEventListener('click',()=>{
    var getval = document.querySelector(
    'input[name="lvl"]:checked');
        if(getval != null) { 
            flag=true;    
            let lvl=getval.value;
               GameStart(lvl);
        }else {
             alert("Select level first....");
         }
});
function GameStart(level){
        var getlvl =[easy,med,hard];
        var selectlvl = getlvl[level]; 

        let randno = Math.floor(Math.random()*selectlvl.length);
        let originalWrd = selectlvl[randno];
        let splittedwrd = originalWrd.split("");    
        let newwrd= "";
        
        for ( i = 0; i <originalWrd.length; i++) {
                var idx= Math.floor(Math.random()*splittedwrd.length);
                newwrd+=splittedwrd[idx];
                splittedwrd.splice(idx,1);    
        }
        document.getElementById("wrongword").value=newwrd;

        var typedwrd= document.getElementById("inputwords");
        typedwrd.addEventListener('keyup',()=>{
            if (typedwrd.value==originalWrd) {
                score++;
                GameStart(level);
                typedwrd.value="";
                document.getElementById("inputwords").style.color="green";
            }else{
                document.getElementById("inputwords").style.color="red";
            }
        })
        document.getElementById("sum").innerHTML=score;
        document.getElementById("level").style.display="none";
        document.getElementById("words").style.display="block";

            if (score==10) {
                alert("You won!! Lets start again!!");
                location.reload();
            }
}
const time= setInterval(()=>{
    if (Secs<=59 && Secs>0 && Mins>=0 && score<10 && flag) {
        Secs--;
        // console.log(Secs);
        document.getElementById("Mins").innerHTML=Mins+" M:: ";
        document.getElementById("Secs").innerHTML=Secs+" S";
    }else if (Secs==0 && Mins>0 && score<10 && flag) {
        Mins--;
        Secs=59;
        document.getElementById("Mins").innerHTML=Mins+" M:: ";
        document.getElementById("Secs").innerHTML=Secs+" S";
    }else if (Mins==0 && Secs==0 && score<10 && flag) {
        alert("You Lose, Try Again!!");
        clearInterval(time);
        location.reload();
    }else if(Mins==0 && Secs==0 && score==10 && flag){
        alert("Congrats!! You Won,Let's Do Again!!");
        clearInterval(time);
        location.reload();
    }
},1000);
function selectagain(){
    location.reload();
}